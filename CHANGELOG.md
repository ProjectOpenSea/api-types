# @opensea/api-types

## 0.7.0

### Minor Changes

- df2b152: Sync OpenAPI spec: add SIWX wallet-link endpoint schema updates (nonce generation, message signing, and wallet-link verification endpoints with new request/response types)

## 0.6.0

### Minor Changes

- c460fc1: Sync OpenAPI spec: add wallet trading P&L endpoints and schemas —
  `GET /api/v2/account/{address}/pnl` (`WalletPnlResponse`),
  `/pnl/closed-positions` (`ClosedPositionsResponse`, `ClosedPositionResponse`),
  and `/pnl/token-transfers` (`PositionTokenTransfersResponse`,
  `PositionTokenTransferResponse`). Also adds `ListingPriceInput` and removes the
  `@Hidden` favorites path from the published spec.
- ef89be8: Sync OpenAPI spec: adds the `AuthScope` schema (now exported as a named type)
  with per-scope `x-enum-descriptions` / `x-enum-display-names` metadata. Adds
  the package's first runtime export, `AUTH_SCOPES` (with `AuthScopeInfo` type)
  — scope names, display names, and descriptions generated from the spec at
  codegen time.

### Patch Changes

- e59df7f: Sync OpenAPI spec: add tool activity endpoint, `robinhood` chain, `source`/`collection` search filters, `calldata_suffix` on fulfillment, SIWX wallet-link endpoint (`POST /api/v2/accounts/wallets/siwx` with `LinkWalletSiwxRequest`/`WalletLinkResponse`), re-published `GET /api/v2/account/{address}/favorites`, and the new `write:wallets` auth scope (also added to the SDK's `OPENSEA_SCOPES`)

## 0.5.0

### Minor Changes

- Sync OpenAPI spec. Adds the `POST /api/v2/tools/usage` endpoint and new schema types (`Eip3009Fields`, `X402SettlementFields`, `ToolUsageRequest`, `ToolUsageResponse`), and adds `active_stage`/`next_stage` fields to `DropResponse` and `DropDetailedResponse`. All changes are additive and non-breaking.

## 0.4.4

### Patch Changes

- Add `[Beta]` tool registry endpoint schemas to the OpenAPI spec and generated types: `GET /api/v2/tools` (list) and the tool search endpoint, along with the `RegisteredToolResponse`, `ToolSearchPaginatedResponse`, `ToolListPaginatedResponse`, and supporting tool response types. All additive; no consumer breakage.

## 0.4.3

### Patch Changes

- 96928f4: Auto-generate named schema exports so every `components.schemas.*` from the OpenAPI spec is reachable as a named import — no manual curation step.

  ## What changed

  - New `src/schemas-generated.ts` (auto-built from `opensea-api.json`) exports a named type for every schema in the spec. The previous hand-curated list in `src/index.ts` covered 147 of 199 schemas; the remaining 52 are now surfaced.
  - `src/index.ts` re-exports `./schemas-generated` and keeps the hand-written sections (response envelopes, operation helpers).
  - `pnpm run generate` now invokes `scripts/generate-schema-exports.mjs` after `openapi-typescript` so the schema-export list always tracks the spec.
  - New CI guard: `scripts/check-consumer-imports.mjs` greps every `from "@opensea/api-types"` import across the workspace and verifies each named import appears in the built `dist/index.d.ts`. Wired into CI as the `API Types consumer imports` job — runs on every PR, not gated by path filter, because a consumer-package change can introduce an unsurfaced import without touching api-types itself (the exact failure mode that briefly broke order posting in SDK 11.0).

  Both additions are belt-and-suspenders: auto-gen ensures the index never falls behind the spec; the CI guard ensures the index hasn't been broken by any change.

- 90702a7: Sync OpenAPI spec — add Token holders/liquidity-pools endpoints, NftDetailed.agent_binding, Token.twitter_follower_count.

  ## New endpoints

  - `GET /api/v2/chain/{chain}/token/{address}/liquidity-pools` — paginated liquidity pools for a token (`TokenLiquidityPoolsResponse` → `TokenLiquidityPoolResponse[]`, exposes pool type, pool/contract address, base/quote reserves in USD, bonding-curve progress, graduation flag).
  - `GET /api/v2/chain/{chain}/token/{address}/holders` — paginated token holders (`TokenHoldersResponse` → `TokenHolderResponse[]` plus aggregate `TokenHolderDistributionResponse` with total holders, top-1% concentration, and a `STRONG | HEALTHY | CONCERNING | BAD` health label).

  ## New / changed schemas

  - `NftDetailed`: optional `agent_binding: AgentBindingResponse` (ERC-8217 agent binding — exposes `agent_id`, `binding_contract`, the bound `AgentNftResponse`, optional `registered_by`).
  - `Token` (token base): optional `twitter_follower_count: int64`.
  - NFT list endpoint: new optional `has_agent_binding: boolean` query filter.
  - New named exports: `AgentBindingResponse`, `AgentNftResponse`, `TokenHolderResponse`, `TokenHoldersResponse`, `TokenHolderDistributionResponse`, `TokenLiquidityPoolResponse`, `TokenLiquidityPoolsResponse`.

  All changes are additive — no consumer breakage. SDK/CLI/skill don't need updates to keep working; wrapping the two new endpoints (typed SDK methods, CLI commands, skill shell scripts) is follow-up work.

## 0.4.2

### Patch Changes

- fb03c09: Add named exports for `BuildOfferResponse`, `CancelRequest`, `CancelResponse`, and `PartialParameters` — these were in the generated schemas but not surfaced. Pure additive.

## 0.4.1

### Patch Changes

- 7969189: Sync OpenAPI spec — pure additive: `Order.asset` and `NftDetailed.subscription` field additions plus pagination defaults loosened on `/api/v2/collections`.

  **New on `Order`:**

  - `asset?: OrderAsset` — `{ identifier?: string; contract: string }`. Surfaces the NFT contract + token ID without loading `protocol_data`. `identifier` is null for collection/criteria offers. Powers the profile endpoints (`/account/{address}/listings`, `/offers`, `/offers_received`) where `protocol_data` is intentionally null for performance. Source: ProjectOpenSea/os2-core#42022.

  **New on `NftDetailed`:**

  - `subscription?: SubscriptionInfoResponse` — `{ expires_at?: string; is_renewable: boolean; is_expired: boolean }`.

  **Loosened on `GET /api/v2/collections`:**

  - `limit` default `10` → `20`, max `100` → `200`.

  **Named exports added:** `OrderAsset`, `SubscriptionInfoResponse`.

  **Tooling:** `update-spec` now runs `biome format` on the output so future syncs don't churn on formatter differences.

## 0.4.0

### Minor Changes

- c350ca3: Sync OpenAPI spec — 22 new endpoints, 44 new schemas. Pure additive: no paths or schemas removed. Versioned as a minor bump per repo convention for new endpoints.

  **New endpoints (22):**

  - _Batch lookups_: `POST /api/v2/tokens/batch`, `POST /api/v2/nfts/batch`, `POST /api/v2/collections/batch`
  - _Listings_: `POST /api/v2/listings/actions` (returns ordered approval + Seaport-sign actions)
  - _Drops_: `POST /api/v2/drops/deploy`, `GET /api/v2/drops/deploy/{chain}/{tx_hash}/receipt`
  - _Assets_: `POST /api/v2/assets/transfer`
  - _Collection analytics_: `GET /api/v2/collections/{slug}/offer_aggregates`, `…/holders`, `…/floor_prices`
  - _Token analytics_: `GET /api/v2/chain/{chain}/token/{address}/price_history`, `…/ohlcv`, `…/activity`
  - _NFT analytics_: `GET /api/v2/chain/{chain}/contract/{address}/nfts/{identifier}/owners`, `…/analytics`
  - _Account profile_: `GET /api/v2/account/{address}/portfolio`, `…/portfolio/history`, `…/offers`, `…/offers_received`, `…/listings`, `…/favorites`, `…/collections`

  **New named schema exports** added to `src/index.ts`, grouped by domain (Tokens batch/analytics, NFTs batch/analytics, Collections batch/analytics, Listings actions, Drops deploy, Assets transfer, Account portfolio/profile, Swap costs).

  **Downstream impact** — `@opensea/sdk`, `@opensea/cli`, and `@opensea/skill` follow-ups will land in subsequent PRs to surface these endpoints as methods / commands / scripts.

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
