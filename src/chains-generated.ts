/* eslint-disable */
// AUTO-GENERATED. Do not edit by hand.
// Regenerate with: pnpm --filter @opensea/api-types run generate
//
// Runtime chain list derived from the OpenAPI spec's `ChainIdentifier` schema,
// which openapi-typescript emits as a type-only union.

import type { ChainIdentifier } from "./schemas-generated.js"

/**
 * Every chain identifier the OpenSea API accepts, in spec order.
 *
 * The `satisfies` clause rejects a member the union does not have, and the
 * assertion below rejects a union member the array is missing, so the two
 * generated artifacts fail the type-check the moment they disagree.
 */
export const CHAIN_IDENTIFIERS = [
  "blast",
  "base",
  "ethereum",
  "zora",
  "arbitrum",
  "sei",
  "avalanche",
  "polygon",
  "optimism",
  "ape_chain",
  "flow",
  "b3",
  "soneium",
  "ronin",
  "bera_chain",
  "solana",
  "shape",
  "unichain",
  "gunzilla",
  "abstract",
  "animechain",
  "hyperevm",
  "somnia",
  "monad",
  "hyperliquid",
  "megaeth",
  "ink",
  "robinhood",
  "stablechain",
] as const satisfies readonly ChainIdentifier[]

type _AssertEveryChainIdentifierListed =
  ChainIdentifier extends (typeof CHAIN_IDENTIFIERS)[number] ? true : never

const _assertEveryChainIdentifierListed: _AssertEveryChainIdentifierListed = true
