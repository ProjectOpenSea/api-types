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
 *
 * Every export carries a doc comment saying it is the snake_case wire shape
 * and that `@opensea/sdk` hands back the camelCase view. That text is the one
 * thing an editor shows at the moment the mistake is made: a consumer who
 * annotates an SDK return value with a raw type here compiles cleanly and then
 * reads `undefined` out of every renamed field, because those runtime keys are
 * camelCase. Single-word keys survive the rewrite and still read correctly.
 * Generating the comment rather than writing it once in the README means a
 * schema added to the spec next month carries the warning too.
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
//
// These are wire shapes: snake_case, exactly as the API sends and accepts
// them. \`@opensea/sdk\` rewrites response keys to camelCase, so an SDK return
// value does not match the type of the same name here.

import type { components } from "./generated.js"

type Schemas = components["schemas"]
`

const exports = names
  .map(
    name => `/**
 * Wire shape, snake_case as the API sends and accepts it. \`@opensea/sdk\`
 * camelizes responses and snakeizes request bodies, so annotate an
 * SDK-facing value with \`Camelize<${name}>\` (exported by
 * \`@opensea/sdk\`) or the matching \`@opensea/sdk\` type rather than with
 * \`${name}\`.
 */
export type ${name} = Schemas["${name}"]`,
  )
  .join("\n\n")

const content = `${header}\n${exports}\n`

writeFileSync(outPath, content)
console.log(
  `[generate-schema-exports] wrote ${names.length} schema exports to ${outPath}`,
)
