# @opensea/api-types

## 0.2.2

### Patch Changes

- 33bf144: Sync OpenAPI spec: add `traits` query param to three collection-scoped read endpoints (`GET /api/v2/collection/{slug}/nfts`, `GET /api/v2/listings/collection/{slug}/best`, `GET /api/v2/events/collection/{slug}`) — accepts a JSON-encoded array of `{traitType, value}` filters that are AND-combined server-side. Adds optional `status` field to `TokenBalanceResponse` (`OK` | `WARNING` | `SPAM` | `LOW_LIQUIDITY` | `LOW_VALUE`) surfaced when callers pass `disable_spam_filtering=true` on the account tokens endpoint, whose `limit` max also rises from 25 to 100. Non-breaking, additive.

## 0.2.1

### Patch Changes

- 5b6ba13: Sync OpenAPI spec: add token-groups endpoints (`GET /api/v2/token-groups`, `GET /api/v2/token-groups/{slug}`) and instant API key provisioning (`POST /api/v2/auth/keys`). Exports new `TokenGroup*`, `InstantApiKeyResponse`, and `RateLimitsResponse` types. Non-breaking: some fields on `IntervalStat` and `Total` are now marked `deprecated`.

## 0.2.0

### Minor Changes

- b3a5e84: Add drops endpoints, trending/top collections, and account resolve

  - api-types: Sync OpenAPI spec with 6 new endpoints and 8 new schemas (drops, trending/top collections, account resolve)
  - SDK: New DropsAPI class, extended CollectionsAPI and AccountsAPI with new methods
  - CLI: New `drops` command, `collections trending/top` subcommands, `accounts resolve` subcommand
