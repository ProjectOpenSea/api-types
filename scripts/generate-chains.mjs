#!/usr/bin/env node
/**
 * Generate `src/chains-generated.ts` from the `ChainIdentifier` schema in
 * `opensea-api.json`. `ChainIdentifier` is a string enum, so
 * `openapi-typescript` turns it into a type-only union and nothing survives
 * into the JavaScript output. A consumer that has to iterate the chains or
 * validate a slug at runtime then rebuilds the list by hand, which is the
 * drift this removes. Runs as part of
 * `pnpm --filter @opensea/api-types run generate`.
 */

import { readFileSync, writeFileSync } from "node:fs"
import { dirname, join } from "node:path"
import { fileURLToPath } from "node:url"

const __dirname = dirname(fileURLToPath(import.meta.url))
const pkgRoot = join(__dirname, "..")
const specPath = join(pkgRoot, "opensea-api.json")
const outPath = join(pkgRoot, "src", "chains-generated.ts")

const spec = JSON.parse(readFileSync(specPath, "utf8"))
const schema = spec?.components?.schemas?.ChainIdentifier
if (!schema || !Array.isArray(schema.enum) || schema.enum.length === 0) {
  console.error(
    `[generate-chains] no ChainIdentifier enum schema found in ${specPath}`,
  )
  process.exit(1)
}

const chains = schema.enum
const duplicates = chains.filter((name, i) => chains.indexOf(name) !== i)
if (duplicates.length > 0) {
  console.error(
    `[generate-chains] ChainIdentifier enum repeats ${[...new Set(duplicates)].join(", ")}`,
  )
  process.exit(1)
}

const entries = chains.map(name => `  ${JSON.stringify(name)},`).join("\n")

const content = `/* eslint-disable */
// AUTO-GENERATED. Do not edit by hand.
// Regenerate with: pnpm --filter @opensea/api-types run generate
//
// Runtime chain list derived from the OpenAPI spec's \`ChainIdentifier\` schema,
// which openapi-typescript emits as a type-only union.

import type { ChainIdentifier } from "./schemas-generated.js"

/**
 * Every chain identifier the OpenSea API accepts, in spec order.
 *
 * The \`satisfies\` clause rejects a member the union does not have, and the
 * assertion below rejects a union member the array is missing, so the two
 * generated artifacts fail the type-check the moment they disagree.
 */
export const CHAIN_IDENTIFIERS = [
${entries}
] as const satisfies readonly ChainIdentifier[]

type _AssertEveryChainIdentifierListed =
  ChainIdentifier extends (typeof CHAIN_IDENTIFIERS)[number] ? true : never

const _assertEveryChainIdentifierListed: _AssertEveryChainIdentifierListed = true
`

writeFileSync(outPath, content)
console.log(
  `[generate-chains] wrote ${chains.length} chain identifiers to ${outPath}`,
)
