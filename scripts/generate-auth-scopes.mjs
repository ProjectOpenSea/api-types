#!/usr/bin/env node
/**
 * Generate `src/auth-scopes-generated.ts` from the `AuthScope` schema in
 * `opensea-api.json`. The schema carries per-scope metadata via the
 * aligned `x-enum-*` extension arrays (emitted by os2-core from its canonical
 * `auth/scopes.json`), including descriptions, groups, endpoint paths, and MCP
 * tool names. Runs as part of `pnpm --filter @opensea/api-types run generate`.
 *
 * This makes the full scope registry spec-derived at codegen time, so downstream
 * consumers (SDK, CLI) never maintain a manual scope list.
 */

import { readFileSync, writeFileSync } from "node:fs"
import { dirname, join } from "node:path"
import { fileURLToPath } from "node:url"

const __dirname = dirname(fileURLToPath(import.meta.url))
const pkgRoot = join(__dirname, "..")
const specPath = join(pkgRoot, "opensea-api.json")
const outPath = join(pkgRoot, "src", "auth-scopes-generated.ts")

const spec = JSON.parse(readFileSync(specPath, "utf8"))
const schema = spec?.components?.schemas?.AuthScope
if (!schema || !Array.isArray(schema.enum)) {
  console.error(
    `[generate-auth-scopes] no AuthScope enum schema found in ${specPath}`,
  )
  process.exit(1)
}

const names = schema.enum
const descriptions = schema["x-enum-descriptions"]
const displayNames = schema["x-enum-display-names"]
const groups = schema["x-enum-groups"]
const endpoints = schema["x-enum-endpoints"]
const mcpTools = schema["x-enum-mcp-tools"]

for (const [key, value] of Object.entries({
  "x-enum-descriptions": descriptions,
  "x-enum-display-names": displayNames,
  "x-enum-groups": groups,
  "x-enum-endpoints": endpoints,
  "x-enum-mcp-tools": mcpTools,
})) {
  if (!Array.isArray(value) || value.length !== names.length) {
    console.error(
      `[generate-auth-scopes] AuthScope schema is missing a valid \`${key}\` extension array (expected ${names.length} entries)`,
    )
    process.exit(1)
  }
}

const entries = names
  .map((name, i) =>
    [
      "  {",
      `    name: ${JSON.stringify(name)},`,
      `    displayName: ${JSON.stringify(displayNames[i])},`,
      `    description: ${JSON.stringify(descriptions[i])},`,
      `    group: ${JSON.stringify(groups[i])},`,
      `    endpoints: ${JSON.stringify(endpoints[i])},`,
      `    mcpTools: ${JSON.stringify(mcpTools[i])},`,
      "  },",
    ].join("\n"),
  )
  .join("\n")

const content = `/* eslint-disable */
// AUTO-GENERATED — do not edit by hand.
// Regenerate with: pnpm --filter @opensea/api-types run generate
//
// Runtime scope metadata derived from the OpenAPI spec's \`AuthScope\` schema
// (\`enum\` plus aligned \`x-enum-*\` metadata arrays), which os2-core
// emits from its canonical \`auth/scopes.json\`.

import type { AuthScope } from "./schemas-generated.js"

/** Per-scope metadata for every OpenSea API auth scope, in spec order. */
export const AUTH_SCOPES = [
${entries}
] as const satisfies readonly {
  name: AuthScope
  displayName: string
  description: string
  group: string
  endpoints: readonly string[]
  mcpTools: readonly string[]
}[]

/** Metadata describing a single OpenSea API auth scope. */
export type AuthScopeInfo = (typeof AUTH_SCOPES)[number]
`

writeFileSync(outPath, content)
console.log(
  `[generate-auth-scopes] wrote ${names.length} auth scopes to ${outPath}`,
)
