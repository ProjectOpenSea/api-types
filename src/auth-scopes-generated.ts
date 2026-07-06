/* eslint-disable */
// AUTO-GENERATED — do not edit by hand.
// Regenerate with: pnpm --filter @opensea/api-types run generate
//
// Runtime scope metadata derived from the OpenAPI spec's `AuthScope` schema
// (`enum` + `x-enum-descriptions` + `x-enum-display-names`), which os2-core
// emits from its canonical `auth/scopes.json`.

import type { AuthScope } from "./schemas-generated.js"

/** Per-scope metadata for every OpenSea API auth scope, in spec order. */
export const AUTH_SCOPES = [
  {
    name: "read:eligibility",
    displayName: "Check drop eligibility",
    description: "Check drop eligibility for authenticated wallet",
  },
  {
    name: "read:favorites",
    displayName: "View favorites and watchlist",
    description: "View favorites and watchlist for authenticated account",
  },
  {
    name: "read:rewards",
    displayName: "View rewards, voyages, treasure chests",
    description:
      "View rewards, voyages, and treasure chests for authenticated account",
  },
  {
    name: "write:orders",
    displayName: "Cancel orders",
    description: "Cancel orders on behalf of authenticated account",
  },
  {
    name: "write:drops",
    displayName: "Creator Studio drop management",
    description: "Manage Creator Studio drops for authenticated account",
  },
  {
    name: "write:wallets",
    displayName: "Link wallets",
    description: "Link a wallet to the authenticated account",
  },
] as const satisfies readonly {
  name: AuthScope
  displayName: string
  description: string
}[]

/** Metadata describing a single OpenSea API auth scope. */
export type AuthScopeInfo = (typeof AUTH_SCOPES)[number]
