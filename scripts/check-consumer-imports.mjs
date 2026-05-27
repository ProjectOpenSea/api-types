#!/usr/bin/env node
/**
 * Verify every symbol that workspace packages import from
 * `@opensea/api-types` is actually exported by the built `dist/index.d.ts`.
 *
 * Catches the failure mode where a downstream package adds an import that
 * happens to resolve in the workspace (because pnpm points it at the
 * in-repo source) but would break against the published artifact if a
 * named export hasn't been surfaced.
 *
 * Belt-and-suspenders alongside the auto-generated schema exports in
 * `src/schemas-generated.ts`. Run as a CI step after building api-types.
 */

import { readFileSync } from "node:fs"
import { dirname, join, relative } from "node:path"
import { fileURLToPath } from "node:url"
import { execSync } from "node:child_process"

const __dirname = dirname(fileURLToPath(import.meta.url))
const repoRoot = join(__dirname, "..", "..", "..")
const distDts = join(repoRoot, "packages", "api-types", "dist", "index.d.ts")

// Grep all `from "@opensea/api-types"` imports across the workspace.
// Use git grep so we respect .gitignore and skip node_modules / dist.
const grepOutput = execSync(
  `git grep -nE "from ['\\"]@opensea/api-types['\\"]" -- 'packages/**/*.ts' 'packages/**/*.tsx' || true`,
  { cwd: repoRoot, encoding: "utf8" },
)

if (!grepOutput.trim()) {
  console.log("[check-consumer-imports] no consumer imports found, nothing to check")
  process.exit(0)
}

// Parse each grep hit into (file, line, importedNames[]).
// Handles:
//   import { A, B as C, type D } from "@opensea/api-types"
//   import type { A, B } from "@opensea/api-types"
//   import { A } from "@opensea/api-types"
// Excludes default + namespace imports (api-types ships none).
const hits = grepOutput
  .split("\n")
  .filter(Boolean)
  .map(line => {
    const m = line.match(/^([^:]+):(\d+):(.*)$/)
    if (!m) return null
    return { file: m[1], line: Number(m[2]), source: m[3] }
  })
  .filter(Boolean)

// For each hit, we need to extract the names. The grep matches the
// `from "@opensea/api-types"` line, but multi-line imports put names on
// preceding lines. Read each file once and reparse.
const fileImports = new Map() // file -> Set<name>
const seenFiles = new Set()
for (const { file } of hits) {
  if (seenFiles.has(file)) continue
  seenFiles.add(file)
  const content = readFileSync(join(repoRoot, file), "utf8")
  // Match every `import ... from "@opensea/api-types"` (possibly multi-line).
  // [^{}]*? keeps the match scoped to a single import block — using
  // [\s\S]*? would happily span unrelated type defs between two api-types
  // imports until it found the next `} from "@opensea/api-types"`.
  const re =
    /import\s+(?:type\s+)?\{([^{}]*?)\}\s+from\s+['"]@opensea\/api-types['"]/g
  let match
  const names = new Set()
  while ((match = re.exec(content))) {
    const block = match[1]
    for (const raw of block.split(",")) {
      const trimmed = raw.trim()
      if (!trimmed) continue
      // Strip leading `type ` (inline type imports).
      const noType = trimmed.replace(/^type\s+/, "")
      // Take the original name (left of any `as` rename).
      const name = noType.split(/\s+as\s+/)[0].trim()
      if (name) names.add(name)
    }
  }
  if (names.size > 0) fileImports.set(file, names)
}

// Build the universe of imported names.
const importedNames = new Set()
for (const names of fileImports.values()) {
  for (const n of names) importedNames.add(n)
}

if (importedNames.size === 0) {
  console.log(
    "[check-consumer-imports] grep matched lines but no parsable names — likely all namespace imports; skipping",
  )
  process.exit(0)
}

// Load the built d.ts and look for the imported names.
let dts
try {
  dts = readFileSync(distDts, "utf8")
} catch {
  console.error(
    `[check-consumer-imports] ${relative(repoRoot, distDts)} not found — build api-types first (\`pnpm --filter @opensea/api-types build\`)`,
  )
  process.exit(1)
}

// A name is "exported" if any of these patterns appear in the d.ts.
// tsup bundles everything into one file with a final `export type { ... }`
// block, so the bundled-export case is the common one in practice; the
// declarative forms below are kept for robustness against future build
// configurations.
const isExported = name => {
  // Escape regex chars in the name (defensive; symbol names are alnum+_$ in practice).
  const esc = name.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
  const patterns = [
    new RegExp(`\\bexport\\s+(?:declare\\s+)?type\\s+${esc}\\b`),
    new RegExp(`\\bexport\\s+(?:declare\\s+)?interface\\s+${esc}\\b`),
    new RegExp(`\\bexport\\s+declare\\s+class\\s+${esc}\\b`),
    new RegExp(`\\bexport\\s+declare\\s+function\\s+${esc}\\b`),
    new RegExp(`\\bexport\\s+declare\\s+const\\s+${esc}\\b`),
    // Bundled `export [type] { Foo, Bar, Baz as Qux, ... }`. Names appear
    // either bare (`Foo`) or after a rename (`X as Foo`). The `[^}]*` keeps
    // matching scoped to the same export block.
    new RegExp(`\\bexport\\s+(?:type\\s+)?\\{[^}]*\\b(?:\\w+\\s+as\\s+)?${esc}\\b[^}]*\\}`),
  ]
  return patterns.some(re => re.test(dts))
}

const missing = []
for (const name of [...importedNames].sort()) {
  if (!isExported(name)) missing.push(name)
}

if (missing.length === 0) {
  console.log(
    `[check-consumer-imports] OK — all ${importedNames.size} consumer imports are exported by api-types`,
  )
  process.exit(0)
}

// Show which file imports each missing name so the fix site is obvious.
const consumerLines = []
for (const name of missing) {
  for (const [file, names] of fileImports.entries()) {
    if (names.has(name)) consumerLines.push(`  - ${name}  (used in ${file})`)
  }
}

console.error(
  `[check-consumer-imports] MISSING ${missing.length} export(s) in packages/api-types/dist/index.d.ts:`,
)
console.error(consumerLines.join("\n"))
console.error(
  "\nIf the missing name is a schema, regenerate exports with: pnpm --filter @opensea/api-types run generate",
)
console.error(
  "If it's a hand-curated type (response envelope, operation helper), add it to packages/api-types/src/index.ts.",
)
process.exit(1)
