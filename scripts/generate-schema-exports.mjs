#!/usr/bin/env node
/**
 * Generate `src/schemas-generated.ts` by listing every schema name from
 * `opensea-api.json` and emitting a named `export type` for each. Runs as
 * part of `pnpm --filter @opensea/api-types run build` (after
 * `openapi-typescript` writes `src/generated.ts`).
 *
 * This eliminates the manual-curation gap in `src/index.ts` that previously
 * caused downstream consumers (SDK, CLI) to break when a new schema was
 * added to the spec but not re-exported by hand.
 */

import { readFileSync, writeFileSync } from "node:fs"
import { dirname, join } from "node:path"
import { fileURLToPath } from "node:url"

const __dirname = dirname(fileURLToPath(import.meta.url))
const pkgRoot = join(__dirname, "..")
const specPath = join(pkgRoot, "opensea-api.json")
const outPath = join(pkgRoot, "src", "schemas-generated.ts")

const spec = JSON.parse(readFileSync(specPath, "utf8"))
const schemas = spec?.components?.schemas
if (!schemas || typeof schemas !== "object") {
  console.error(
    `[generate-schema-exports] no components.schemas found in ${specPath}`,
  )
  process.exit(1)
}

const names = Object.keys(schemas).sort()

const header = `/* eslint-disable */
// AUTO-GENERATED — do not edit by hand.
// Regenerate with: pnpm --filter @opensea/api-types run generate
//
// Re-exports every \`components.schemas.*\` entry from the OpenAPI spec as a
// named type so downstream consumers (SDK, CLI, stream, etc.) never hit a
// missing-export when the spec gains a new schema.

import type { components } from "./generated.js"

type Schemas = components["schemas"]
`

const exports = names
  .map(name => `export type ${name} = Schemas["${name}"]`)
  .join("\n")

const content = `${header}\n${exports}\n`

writeFileSync(outPath, content)
console.log(
  `[generate-schema-exports] wrote ${names.length} schema exports to ${outPath}`,
)
