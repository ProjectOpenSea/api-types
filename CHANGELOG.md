# @opensea/api-types

## 0.2.1

### Patch Changes

- 5b6ba13: Sync OpenAPI spec: add token-groups endpoints (`GET /api/v2/token-groups`, `GET /api/v2/token-groups/{slug}`) and instant API key provisioning (`POST /api/v2/auth/keys`). Exports new `TokenGroup*`, `InstantApiKeyResponse`, and `RateLimitsResponse` types. Non-breaking: some fields on `IntervalStat` and `Total` are now marked `deprecated`.

## 0.2.0

### Minor Changes

- b3a5e84: Add drops endpoints, trending/top collections, and account resolve

  - api-types: Sync OpenAPI spec with 6 new endpoints and 8 new schemas (drops, trending/top collections, account resolve)
  - SDK: New DropsAPI class, extended CollectionsAPI and AccountsAPI with new methods
  - CLI: New `drops` command, `collections trending/top` subcommands, `accounts resolve` subcommand
