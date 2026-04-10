/**
 * @opensea/api-types
 *
 * Auto-generated TypeScript types from the OpenSea API v2 OpenAPI spec.
 * Re-run `pnpm --filter @opensea/api-types run build` after updating opensea-api.json.
 */

export type { components, operations, paths } from "./generated.js"

import type { components, operations } from "./generated.js"

// ── Schema types (components.schemas) ───────────────────────────────

export type Schemas = components["schemas"]

export type ChainIdentifier = Schemas["ChainIdentifier"]

// Collections
export type CollectionResponse = Schemas["CollectionResponse"]
export type CollectionDetailedResponse = Schemas["CollectionDetailedResponse"]
export type CollectionPaginatedResponse = Schemas["CollectionPaginatedResponse"]
export type CollectionStatsResponse = Schemas["CollectionStatsResponse"]
export type CollectionRarity = Schemas["CollectionRarity"]
export type Fee = Schemas["Fee"]
export type PaymentToken = Schemas["PaymentToken"]
export type PricingCurrencies = Schemas["PricingCurrencies"]

// NFTs
export type Nft = Schemas["Nft"]
export type NftDetailed = Schemas["NftDetailed"]
export type NftResponse = Schemas["NftResponse"]
export type NftListResponse = Schemas["NftListResponse"]
export type Owner = Schemas["Owner"]
export type Rarity = Schemas["Rarity"]
export type Trait = Schemas["Trait"]
export type TraitData = Schemas["TraitData"]
export type NumericTraitData = Schemas["NumericTraitData"]
export type NumericTraitCriteria = Schemas["NumericTraitCriteria"]

// Orders
export type Order = Schemas["Order"]
export type Offer = Schemas["Offer"]
export type Listing = Schemas["Listing"]
export type OrdersResponse = Schemas["OrdersResponse"]
export type OffersResponse = Schemas["OffersResponse"]
export type ListingsResponse = Schemas["ListingsResponse"]
export type GetOrderResponse = Schemas["GetOrderResponse"]
export type CreateOfferResponse = Schemas["CreateOfferResponse"]
export type CreateListingResponse = Schemas["CreateListingResponse"]
export type ListingOrOffer = Schemas["ListingOrOffer"]
export type Price = Schemas["Price"]
export type ListingPrice = Schemas["ListingPrice"]
export type CriteriaRequest = Schemas["CriteriaRequest"]

// Fulfillment
export type FulfillListingResponse = Schemas["FulfillListingResponse"]
export type FulfillmentData = Schemas["FulfillmentData"]
export type TransactionData = Schemas["TransactionData"]
export type OrderData = Schemas["OrderData"]

// Seaport
export type SeaportParameters = Schemas["SeaportParameters"]
export type SeaportRequest = Schemas["SeaportRequest"]
export type ProtocolData = Schemas["ProtocolData"]
export type V1ProtocolData = Schemas["V1ProtocolData"]
export type ConsiderationItem = Schemas["ConsiderationItem"]
export type OfferItem = Schemas["OfferItem"]

// Events
export type AssetEventsResponse = Schemas["AssetEventsResponse"]
export type Event = Schemas["Event"]
export type OrderEvent = Schemas["OrderEvent"]
export type SaleEvent = Schemas["SaleEvent"]
export type TransferEvent = Schemas["TransferEvent"]
export type Payment = Schemas["Payment"]

// Accounts
export type AccountResponse = Schemas["AccountResponse"]
export type AccountResolveResponse = Schemas["AccountResolveResponse"]
export type SimpleAccount = Schemas["SimpleAccount"]
export type SocialMediaAccount = Schemas["SocialMediaAccount"]

// Contracts
export type Contract = Schemas["Contract"]
export type ContractResponse = Schemas["ContractResponse"]

// Metadata
export type AssetMetadataResponse = Schemas["AssetMetadataResponse"]
export type MetadataIngestionError = Schemas["MetadataIngestionError"]
export type ValidateMetadataResponse = Schemas["ValidateMetadataResponse"]

// Tokens
export type TokenResponse = Schemas["TokenResponse"]
export type TokenDetailedResponse = Schemas["TokenDetailedResponse"]
export type TokenPaginatedResponse = Schemas["TokenPaginatedResponse"]
export type TokenSocialsResponse = Schemas["TokenSocialsResponse"]
export type TokenStatsResponse = Schemas["TokenStatsResponse"]
export type TokenBalanceResponse = Schemas["TokenBalanceResponse"]
export type TokenBalancePaginatedResponse =
  Schemas["TokenBalancePaginatedResponse"]

// Swap
export type SwapQuoteResponse = Schemas["SwapQuoteResponse"]
export type SwapQuoteDetails = Schemas["SwapQuoteDetails"]
export type SwapTransactionResponse = Schemas["SwapTransactionResponse"]

// Search
export type SearchResponse = Schemas["SearchResponse"]
export type SearchResultResponse = Schemas["SearchResultResponse"]
export type AccountSearchResponse = Schemas["AccountSearchResponse"]
export type CollectionSearchResponse = Schemas["CollectionSearchResponse"]
export type NftSearchResponse = Schemas["NftSearchResponse"]
export type TokenSearchResponse = Schemas["TokenSearchResponse"]

// Drops
export type DropResponse = Schemas["DropResponse"]
export type DropDetailedResponse = Schemas["DropDetailedResponse"]
export type DropStageResponse = Schemas["DropStageResponse"]
export type DropPaginatedResponse = Schemas["DropPaginatedResponse"]
export type DropMintRequest = Schemas["DropMintRequest"]
export type DropMintResponse = Schemas["DropMintResponse"]

// Chains
export type ChainResponse = Schemas["ChainResponse"]
export type ChainListResponse = Schemas["ChainListResponse"]

// Error responses
export type V1ErrorWrapper = Schemas["V1ErrorWrapper"]
export type Responses = components["responses"]
export type BadRequest = Responses["BadRequest"]
export type Unauthorized = Responses["Unauthorized"]
export type NotFound = Responses["NotFound"]
export type RateLimit = Responses["RateLimit"]
export type InternalError = Responses["InternalError"]

// ── Operation helpers ───────────────────────────────────────────────
// Use these to extract request/response types for specific operations.

/** Extract the successful (200) response body type for a given operation */
export type OperationResponse<T extends keyof operations> =
  operations[T] extends {
    responses: { 200: { content: { "application/json": infer R } } }
  }
    ? R
    : never

/** Extract the request body type for a given operation */
export type OperationRequestBody<T extends keyof operations> =
  operations[T] extends {
    requestBody: { content: { "application/json": infer R } }
  }
    ? R
    : never

/** Extract the path parameters type for a given operation */
export type OperationPathParams<T extends keyof operations> =
  operations[T] extends { parameters: { path: infer R } } ? R : never

/** Extract the query parameters type for a given operation */
export type OperationQueryParams<T extends keyof operations> =
  operations[T] extends { parameters: { query?: infer R } } ? R : never
