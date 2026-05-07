# @opensea/api-types

## 0.3.0

### Minor Changes

- 7a51fd0: Sync OpenAPI spec — bundles os2-core#40171 (deprecation removals) and os2-core#40190 (new `maker` filter), plus four new endpoints.

  **Removed (os2-core#40171):**

  - `GET /api/v2/orders/{chain}/{protocol}/offers` — use `GET /api/v2/offers/collection/{slug}/all` (or `…/nfts/{identifier}` for per-NFT)
  - `GET /api/v2/orders/{chain}/{protocol}/listings` — use `GET /api/v2/listings/collection/{slug}/all` (or `…/nfts/{identifier}/best` for per-NFT)
  - `order` wrapper field from `POST /orders/{chain}/{protocol}/offers` and `…/listings` responses — these now return bare `Offer` / `Listing`
  - `Criteria.trait` (singular) response field — use `Criteria.traits[]`
  - `IntervalStat.{volume_diff, volume_change, sales_diff, average_price}` (always returned 0)
  - `Total.{market_cap, average_price}` (always returned 0)
  - Schemas: `OrdersResponse`, `CreateOfferResponse`, `CreateListingResponse`, `SimpleOrderV2Serializer`, `V1ProtocolData`, `SimpleAccount`. The named re-exports for the first three plus `V1ProtocolData` and `SimpleAccount` are removed from `src/index.ts`.

  **Added (os2-core#40190):**

  - Optional `maker` query param on `GET /api/v2/offers/collection/{slug}/all` and `GET /api/v2/listings/collection/{slug}/all`

  **Other new endpoints picked up in this sync (not in #40171/#40190):**

  - `POST /api/v2/listings/sweep` — bulk-buy from a collection. New types: `SweepCollectionRequest`, `SweepCollectionResponse`.
  - `GET /api/v2/offers/collection/{slug}/nfts/{identifier}` — all offers for one NFT (the proper per-NFT replacement for the removed orders endpoint).
  - `POST /api/v2/swap/execute` — companion to `/swap/quote`. New types: `SwapExecuteRequest`, `SwapExecuteResponse`, `SwapQuoteInput`.
  - `POST /api/v2/transactions/receipt` — fetch transaction status. New types: `TransactionReceiptRequest`, `TransactionReceiptResponse`.

  **Downstream impact** — `@opensea/sdk` and `@opensea/cli` depend on the removed schemas/operations and will break against this version. SDK/CLI follow-up PRs to delete `getNFTOffers`/`getNFTListings`/`getOrder`/`getOrders`/`postOrder`, fix `postListing`/`postOffer` response handling, drop the deprecated stats fields, and surface the four new endpoints will land in subsequent minor bumps.

## 0.2.3

### Patch Changes

- 961f2c5: fix(api): consume cross-chain fulfillment types from `@opensea/api-types`

  The cross-chain fulfillment types added in the previous release were hand-rolled in `packages/sdk/src/api/types.ts` and `packages/cli/src/types/api.ts` rather than generated from the OpenAPI spec. This release pulls them from `@opensea/api-types` (the source of truth) so future spec changes flow through automatically.

  **`@opensea/api-types`**: Adds named exports for `CrossChainFulfillmentRequest`, `CrossChainFulfillmentResponse`, `CrossChainPaymentToken`, `FulfillerObject`, and `ListingObject` schemas (regenerated from the production OpenAPI spec).

  **`@opensea/sdk`** _(type rename — minimal-impact since the prior release shipped <1 day ago)_:

  - `CrossChainListing` → `ListingObject`
  - `CrossChainFulfillmentDataRequest` → `CrossChainFulfillmentRequest`
  - `CrossChainFulfillmentDataResponse` → `CrossChainFulfillmentResponse`
  - `CrossChainTransaction` → `SwapTransactionResponse`

  The runtime call signature on `BaseOpenSeaSDK.getCrossChainFulfillmentData()` is unchanged.

  **`@opensea/cli`** _(type rename — same minimal impact)_:

  - `CrossChainFulfillmentTransaction` → `SwapTransactionResponse`
  - `CrossChainFulfillmentDataResponse` → `CrossChainFulfillmentResponse`

  Adds a new blocking CI check (`pnpm check-api-paths`) that fails when an `/api/v2/...` URL referenced in SDK or CLI source is not present in `packages/api-types/opensea-api.json`. AGENTS docs updated to make the api-types-first flow explicit for new endpoints.

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
