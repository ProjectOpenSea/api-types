/* eslint-disable */
// AUTO-GENERATED — do not edit by hand.
// Regenerate with: pnpm --filter @opensea/api-types run generate
//
// Runtime scope metadata derived from the OpenAPI spec's `AuthScope` schema
// (`enum` plus aligned `x-enum-*` metadata arrays), which os2-core
// emits from its canonical `auth/scopes.json`.

import type { AuthScope } from "./schemas-generated.js"

/** Per-scope metadata for every OpenSea API auth scope, in spec order. */
export const AUTH_SCOPES = [
  {
    name: "read:eligibility",
    displayName: "Check drop eligibility",
    description: "Check drop eligibility for authenticated wallet",
    group: "read",
    endpoints: ["/api/v2/drops/{slug}/eligibility"],
    mcpTools: ["check_drop_eligibility"],
  },
  {
    name: "read:favorites",
    displayName: "View favorites and watchlist",
    description: "View favorites and watchlist for authenticated account",
    group: "read",
    endpoints: ["/api/v2/account/{address}/favorites","/api/v2/account/{address}/token_watchlist","/api/v2/account/{address}/perpetual_watchlist"],
    mcpTools: ["get_favorites"],
  },
  {
    name: "read:social",
    displayName: "View social relationships",
    description: "View follows, watches, followers, and following for the authenticated account",
    group: "read",
    endpoints: ["/api/v2/accounts/{address_or_username}/relationship","/api/v2/accounts/{address_or_username}/followers","/api/v2/accounts/{address_or_username}/following"],
    mcpTools: ["view_social_graph"],
  },
  {
    name: "write:favorites",
    displayName: "Manage favorites and watchlist",
    description: "Add and remove favorites and watchlist entries for authenticated account",
    group: "write",
    endpoints: ["/api/v2/watchlist"],
    mcpTools: ["manage_watchlist"],
  },
  {
    name: "write:social",
    displayName: "Manage social relationships",
    description: "Follow, unfollow, watch, and unwatch profiles for the authenticated account",
    group: "write",
    endpoints: ["/api/v2/accounts/{address_or_username}/follow","/api/v2/accounts/{address_or_username}/watch"],
    mcpTools: ["manage_social_graph"],
  },
  {
    name: "write:orders",
    displayName: "Cancel orders",
    description: "Cancel orders on behalf of authenticated account",
    group: "write",
    endpoints: ["/api/v2/orders/chain/{chain}/protocol/{protocol_address}/{order_hash}/cancel"],
    mcpTools: ["cancel_orders"],
  },
  {
    name: "write:drops",
    displayName: "Creator Studio drop management",
    description: "Manage Creator Studio drops for authenticated account",
    group: "write",
    endpoints: ["/api/v2/drops/{slug}","/api/v2/drops/{slug}/allowlist","/api/v2/drops/{slug}/allowlist/validate","/api/v2/drops/{slug}/prereveal-item","/api/v2/drops/{slug}/items","/api/v2/drops/{slug}/items/media","/api/v2/drops/{slug}/items/media/save","/api/v2/drops/{slug}/items/{token_id}"],
    mcpTools: ["manage_drops"],
  },
  {
    name: "write:collections",
    displayName: "Collection metadata editing",
    description: "Modify collection metadata for authenticated account",
    group: "write",
    endpoints: ["/api/v2/collections/{slug}","/api/v2/collections/{slug}/metadata","/api/v2/collections/{slug}/visibility","/api/v2/collections/{slug}/images/{image_type}"],
    mcpTools: ["manage_collections"],
  },
  {
    name: "write:profile",
    displayName: "Profile editing",
    description: "Modify profile settings for authenticated account",
    group: "write",
    endpoints: ["/api/v2/profile","/api/v2/profile/username","/api/v2/profile/images","/api/v2/profile/shelves","/api/v2/profile/shelves/{shelf_id}"],
    mcpTools: ["manage_profile"],
  },
  {
    name: "write:wallets",
    displayName: "Manage linked wallets",
    description: "Link and unlink wallets for the authenticated account",
    group: "write",
    endpoints: ["/api/v2/accounts/wallets/siwx","/api/v2/accounts/wallets/{wallet}"],
    mcpTools: ["manage_wallets"],
  },
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
