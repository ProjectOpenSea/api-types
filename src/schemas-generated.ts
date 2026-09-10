/* eslint-disable */
// AUTO-GENERATED — do not edit by hand.
// Regenerate with: pnpm --filter @opensea/api-types run generate
//
// Re-exports every `components.schemas.*` entry from the OpenAPI spec as a
// named type so downstream consumers (SDK, CLI, stream, etc.) never hit a
// missing-export when the spec gains a new schema.
//
// These are wire shapes: snake_case, exactly as the API sends and accepts
// them. `@opensea/sdk` rewrites response keys to camelCase, so an SDK return
// value does not match the type of the same name here.

import type { components } from "./generated.js"

type Schemas = components["schemas"]

/**
 * Wire shape, snake_case as the API sends and accepts it. `@opensea/sdk`
 * camelizes responses and snakeizes request bodies, so annotate an
 * SDK-facing value with `Camelize<AboutMetadataRequest>` (exported by
 * `@opensea/sdk`) or the matching `@opensea/sdk` type rather than with
 * `AboutMetadataRequest`.
 */
export type AboutMetadataRequest = Schemas["AboutMetadataRequest"]

/**
 * Wire shape, snake_case as the API sends and accepts it. `@opensea/sdk`
 * camelizes responses and snakeizes request bodies, so annotate an
 * SDK-facing value with `Camelize<AboutSectionRequest>` (exported by
 * `@opensea/sdk`) or the matching `@opensea/sdk` type rather than with
 * `AboutSectionRequest`.
 */
export type AboutSectionRequest = Schemas["AboutSectionRequest"]

/**
 * Wire shape, snake_case as the API sends and accepts it. `@opensea/sdk`
 * camelizes responses and snakeizes request bodies, so annotate an
 * SDK-facing value with `Camelize<AccountResolveResponse>` (exported by
 * `@opensea/sdk`) or the matching `@opensea/sdk` type rather than with
 * `AccountResolveResponse`.
 */
export type AccountResolveResponse = Schemas["AccountResolveResponse"]

/**
 * Wire shape, snake_case as the API sends and accepts it. `@opensea/sdk`
 * camelizes responses and snakeizes request bodies, so annotate an
 * SDK-facing value with `Camelize<AccountResponse>` (exported by
 * `@opensea/sdk`) or the matching `@opensea/sdk` type rather than with
 * `AccountResponse`.
 */
export type AccountResponse = Schemas["AccountResponse"]

/**
 * Wire shape, snake_case as the API sends and accepts it. `@opensea/sdk`
 * camelizes responses and snakeizes request bodies, so annotate an
 * SDK-facing value with `Camelize<AccountSearchResponse>` (exported by
 * `@opensea/sdk`) or the matching `@opensea/sdk` type rather than with
 * `AccountSearchResponse`.
 */
export type AccountSearchResponse = Schemas["AccountSearchResponse"]

/**
 * Wire shape, snake_case as the API sends and accepts it. `@opensea/sdk`
 * camelizes responses and snakeizes request bodies, so annotate an
 * SDK-facing value with `Camelize<AdditionalRecipient>` (exported by
 * `@opensea/sdk`) or the matching `@opensea/sdk` type rather than with
 * `AdditionalRecipient`.
 */
export type AdditionalRecipient = Schemas["AdditionalRecipient"]

/**
 * Wire shape, snake_case as the API sends and accepts it. `@opensea/sdk`
 * camelizes responses and snakeizes request bodies, so annotate an
 * SDK-facing value with `Camelize<Address>` (exported by
 * `@opensea/sdk`) or the matching `@opensea/sdk` type rather than with
 * `Address`.
 */
export type Address = Schemas["Address"]

/**
 * Wire shape, snake_case as the API sends and accepts it. `@opensea/sdk`
 * camelizes responses and snakeizes request bodies, so annotate an
 * SDK-facing value with `Camelize<AdvancedOrder>` (exported by
 * `@opensea/sdk`) or the matching `@opensea/sdk` type rather than with
 * `AdvancedOrder`.
 */
export type AdvancedOrder = Schemas["AdvancedOrder"]

/**
 * Wire shape, snake_case as the API sends and accepts it. `@opensea/sdk`
 * camelizes responses and snakeizes request bodies, so annotate an
 * SDK-facing value with `Camelize<AgentAccountStatusResponse>` (exported by
 * `@opensea/sdk`) or the matching `@opensea/sdk` type rather than with
 * `AgentAccountStatusResponse`.
 */
export type AgentAccountStatusResponse = Schemas["AgentAccountStatusResponse"]

/**
 * Wire shape, snake_case as the API sends and accepts it. `@opensea/sdk`
 * camelizes responses and snakeizes request bodies, so annotate an
 * SDK-facing value with `Camelize<AgentBindingResponse>` (exported by
 * `@opensea/sdk`) or the matching `@opensea/sdk` type rather than with
 * `AgentBindingResponse`.
 */
export type AgentBindingResponse = Schemas["AgentBindingResponse"]

/**
 * Wire shape, snake_case as the API sends and accepts it. `@opensea/sdk`
 * camelizes responses and snakeizes request bodies, so annotate an
 * SDK-facing value with `Camelize<AgentNftResponse>` (exported by
 * `@opensea/sdk`) or the matching `@opensea/sdk` type rather than with
 * `AgentNftResponse`.
 */
export type AgentNftResponse = Schemas["AgentNftResponse"]

/**
 * Wire shape, snake_case as the API sends and accepts it. `@opensea/sdk`
 * camelizes responses and snakeizes request bodies, so annotate an
 * SDK-facing value with `Camelize<AgentProfileRelationshipsResponse>` (exported by
 * `@opensea/sdk`) or the matching `@opensea/sdk` type rather than with
 * `AgentProfileRelationshipsResponse`.
 */
export type AgentProfileRelationshipsResponse = Schemas["AgentProfileRelationshipsResponse"]

/**
 * Wire shape, snake_case as the API sends and accepts it. `@opensea/sdk`
 * camelizes responses and snakeizes request bodies, so annotate an
 * SDK-facing value with `Camelize<AgentProfileSummaryResponse>` (exported by
 * `@opensea/sdk`) or the matching `@opensea/sdk` type rather than with
 * `AgentProfileSummaryResponse`.
 */
export type AgentProfileSummaryResponse = Schemas["AgentProfileSummaryResponse"]

/**
 * Wire shape, snake_case as the API sends and accepts it. `@opensea/sdk`
 * camelizes responses and snakeizes request bodies, so annotate an
 * SDK-facing value with `Camelize<AgentRelationshipListResponse>` (exported by
 * `@opensea/sdk`) or the matching `@opensea/sdk` type rather than with
 * `AgentRelationshipListResponse`.
 */
export type AgentRelationshipListResponse = Schemas["AgentRelationshipListResponse"]

/**
 * Wire shape, snake_case as the API sends and accepts it. `@opensea/sdk`
 * camelizes responses and snakeizes request bodies, so annotate an
 * SDK-facing value with `Camelize<AgentRelationshipMutationResponse>` (exported by
 * `@opensea/sdk`) or the matching `@opensea/sdk` type rather than with
 * `AgentRelationshipMutationResponse`.
 */
export type AgentRelationshipMutationResponse = Schemas["AgentRelationshipMutationResponse"]

/**
 * Wire shape, snake_case as the API sends and accepts it. `@opensea/sdk`
 * camelizes responses and snakeizes request bodies, so annotate an
 * SDK-facing value with `Camelize<AgentRelationshipRemovalResponse>` (exported by
 * `@opensea/sdk`) or the matching `@opensea/sdk` type rather than with
 * `AgentRelationshipRemovalResponse`.
 */
export type AgentRelationshipRemovalResponse = Schemas["AgentRelationshipRemovalResponse"]

/**
 * Wire shape, snake_case as the API sends and accepts it. `@opensea/sdk`
 * camelizes responses and snakeizes request bodies, so annotate an
 * SDK-facing value with `Camelize<AgentRelationshipResponse>` (exported by
 * `@opensea/sdk`) or the matching `@opensea/sdk` type rather than with
 * `AgentRelationshipResponse`.
 */
export type AgentRelationshipResponse = Schemas["AgentRelationshipResponse"]

/**
 * Wire shape, snake_case as the API sends and accepts it. `@opensea/sdk`
 * camelizes responses and snakeizes request bodies, so annotate an
 * SDK-facing value with `Camelize<AssetEventsResponse>` (exported by
 * `@opensea/sdk`) or the matching `@opensea/sdk` type rather than with
 * `AssetEventsResponse`.
 */
export type AssetEventsResponse = Schemas["AssetEventsResponse"]

/**
 * Wire shape, snake_case as the API sends and accepts it. `@opensea/sdk`
 * camelizes responses and snakeizes request bodies, so annotate an
 * SDK-facing value with `Camelize<AssetIdentifierResponse>` (exported by
 * `@opensea/sdk`) or the matching `@opensea/sdk` type rather than with
 * `AssetIdentifierResponse`.
 */
export type AssetIdentifierResponse = Schemas["AssetIdentifierResponse"]

/**
 * Wire shape, snake_case as the API sends and accepts it. `@opensea/sdk`
 * camelizes responses and snakeizes request bodies, so annotate an
 * SDK-facing value with `Camelize<AssetMetadataResponse>` (exported by
 * `@opensea/sdk`) or the matching `@opensea/sdk` type rather than with
 * `AssetMetadataResponse`.
 */
export type AssetMetadataResponse = Schemas["AssetMetadataResponse"]

/**
 * Wire shape, snake_case as the API sends and accepts it. `@opensea/sdk`
 * camelizes responses and snakeizes request bodies, so annotate an
 * SDK-facing value with `Camelize<AssetQuantityInput>` (exported by
 * `@opensea/sdk`) or the matching `@opensea/sdk` type rather than with
 * `AssetQuantityInput`.
 */
export type AssetQuantityInput = Schemas["AssetQuantityInput"]

/**
 * Wire shape, snake_case as the API sends and accepts it. `@opensea/sdk`
 * camelizes responses and snakeizes request bodies, so annotate an
 * SDK-facing value with `Camelize<AssetReceiptResponse>` (exported by
 * `@opensea/sdk`) or the matching `@opensea/sdk` type rather than with
 * `AssetReceiptResponse`.
 */
export type AssetReceiptResponse = Schemas["AssetReceiptResponse"]

/**
 * Wire shape, snake_case as the API sends and accepts it. `@opensea/sdk`
 * camelizes responses and snakeizes request bodies, so annotate an
 * SDK-facing value with `Camelize<AuthErrorResponse>` (exported by
 * `@opensea/sdk`) or the matching `@opensea/sdk` type rather than with
 * `AuthErrorResponse`.
 */
export type AuthErrorResponse = Schemas["AuthErrorResponse"]

/**
 * Wire shape, snake_case as the API sends and accepts it. `@opensea/sdk`
 * camelizes responses and snakeizes request bodies, so annotate an
 * SDK-facing value with `Camelize<AuthScope>` (exported by
 * `@opensea/sdk`) or the matching `@opensea/sdk` type rather than with
 * `AuthScope`.
 */
export type AuthScope = Schemas["AuthScope"]

/**
 * Wire shape, snake_case as the API sends and accepts it. `@opensea/sdk`
 * camelizes responses and snakeizes request bodies, so annotate an
 * SDK-facing value with `Camelize<BasicOrderParameters>` (exported by
 * `@opensea/sdk`) or the matching `@opensea/sdk` type rather than with
 * `BasicOrderParameters`.
 */
export type BasicOrderParameters = Schemas["BasicOrderParameters"]

/**
 * Wire shape, snake_case as the API sends and accepts it. `@opensea/sdk`
 * camelizes responses and snakeizes request bodies, so annotate an
 * SDK-facing value with `Camelize<BatchCollectionsRequest>` (exported by
 * `@opensea/sdk`) or the matching `@opensea/sdk` type rather than with
 * `BatchCollectionsRequest`.
 */
export type BatchCollectionsRequest = Schemas["BatchCollectionsRequest"]

/**
 * Wire shape, snake_case as the API sends and accepts it. `@opensea/sdk`
 * camelizes responses and snakeizes request bodies, so annotate an
 * SDK-facing value with `Camelize<BatchNftsRequest>` (exported by
 * `@opensea/sdk`) or the matching `@opensea/sdk` type rather than with
 * `BatchNftsRequest`.
 */
export type BatchNftsRequest = Schemas["BatchNftsRequest"]

/**
 * Wire shape, snake_case as the API sends and accepts it. `@opensea/sdk`
 * camelizes responses and snakeizes request bodies, so annotate an
 * SDK-facing value with `Camelize<BatchTokensRequest>` (exported by
 * `@opensea/sdk`) or the matching `@opensea/sdk` type rather than with
 * `BatchTokensRequest`.
 */
export type BatchTokensRequest = Schemas["BatchTokensRequest"]

/**
 * Wire shape, snake_case as the API sends and accepts it. `@opensea/sdk`
 * camelizes responses and snakeizes request bodies, so annotate an
 * SDK-facing value with `Camelize<BidderResponse>` (exported by
 * `@opensea/sdk`) or the matching `@opensea/sdk` type rather than with
 * `BidderResponse`.
 */
export type BidderResponse = Schemas["BidderResponse"]

/**
 * Wire shape, snake_case as the API sends and accepts it. `@opensea/sdk`
 * camelizes responses and snakeizes request bodies, so annotate an
 * SDK-facing value with `Camelize<BuildOfferRequest>` (exported by
 * `@opensea/sdk`) or the matching `@opensea/sdk` type rather than with
 * `BuildOfferRequest`.
 */
export type BuildOfferRequest = Schemas["BuildOfferRequest"]

/**
 * Wire shape, snake_case as the API sends and accepts it. `@opensea/sdk`
 * camelizes responses and snakeizes request bodies, so annotate an
 * SDK-facing value with `Camelize<BuildOfferResponse>` (exported by
 * `@opensea/sdk`) or the matching `@opensea/sdk` type rather than with
 * `BuildOfferResponse`.
 */
export type BuildOfferResponse = Schemas["BuildOfferResponse"]

/**
 * Wire shape, snake_case as the API sends and accepts it. `@opensea/sdk`
 * camelizes responses and snakeizes request bodies, so annotate an
 * SDK-facing value with `Camelize<CancelOrderActionsRequest>` (exported by
 * `@opensea/sdk`) or the matching `@opensea/sdk` type rather than with
 * `CancelOrderActionsRequest`.
 */
export type CancelOrderActionsRequest = Schemas["CancelOrderActionsRequest"]

/**
 * Wire shape, snake_case as the API sends and accepts it. `@opensea/sdk`
 * camelizes responses and snakeizes request bodies, so annotate an
 * SDK-facing value with `Camelize<CancelOrderActionsResponse>` (exported by
 * `@opensea/sdk`) or the matching `@opensea/sdk` type rather than with
 * `CancelOrderActionsResponse`.
 */
export type CancelOrderActionsResponse = Schemas["CancelOrderActionsResponse"]

/**
 * Wire shape, snake_case as the API sends and accepts it. `@opensea/sdk`
 * camelizes responses and snakeizes request bodies, so annotate an
 * SDK-facing value with `Camelize<CancelRequest>` (exported by
 * `@opensea/sdk`) or the matching `@opensea/sdk` type rather than with
 * `CancelRequest`.
 */
export type CancelRequest = Schemas["CancelRequest"]

/**
 * Wire shape, snake_case as the API sends and accepts it. `@opensea/sdk`
 * camelizes responses and snakeizes request bodies, so annotate an
 * SDK-facing value with `Camelize<CancelResponse>` (exported by
 * `@opensea/sdk`) or the matching `@opensea/sdk` type rather than with
 * `CancelResponse`.
 */
export type CancelResponse = Schemas["CancelResponse"]

/**
 * Wire shape, snake_case as the API sends and accepts it. `@opensea/sdk`
 * camelizes responses and snakeizes request bodies, so annotate an
 * SDK-facing value with `Camelize<ChainIdentifier>` (exported by
 * `@opensea/sdk`) or the matching `@opensea/sdk` type rather than with
 * `ChainIdentifier`.
 */
export type ChainIdentifier = Schemas["ChainIdentifier"]

/**
 * Wire shape, snake_case as the API sends and accepts it. `@opensea/sdk`
 * camelizes responses and snakeizes request bodies, so annotate an
 * SDK-facing value with `Camelize<ChainListResponse>` (exported by
 * `@opensea/sdk`) or the matching `@opensea/sdk` type rather than with
 * `ChainListResponse`.
 */
export type ChainListResponse = Schemas["ChainListResponse"]

/**
 * Wire shape, snake_case as the API sends and accepts it. `@opensea/sdk`
 * camelizes responses and snakeizes request bodies, so annotate an
 * SDK-facing value with `Camelize<ChainResponse>` (exported by
 * `@opensea/sdk`) or the matching `@opensea/sdk` type rather than with
 * `ChainResponse`.
 */
export type ChainResponse = Schemas["ChainResponse"]

/**
 * Wire shape, snake_case as the API sends and accepts it. `@opensea/sdk`
 * camelizes responses and snakeizes request bodies, so annotate an
 * SDK-facing value with `Camelize<ClaimAccountUsernameRequest>` (exported by
 * `@opensea/sdk`) or the matching `@opensea/sdk` type rather than with
 * `ClaimAccountUsernameRequest`.
 */
export type ClaimAccountUsernameRequest = Schemas["ClaimAccountUsernameRequest"]

/**
 * Wire shape, snake_case as the API sends and accepts it. `@opensea/sdk`
 * camelizes responses and snakeizes request bodies, so annotate an
 * SDK-facing value with `Camelize<ClaimAccountUsernameResponse>` (exported by
 * `@opensea/sdk`) or the matching `@opensea/sdk` type rather than with
 * `ClaimAccountUsernameResponse`.
 */
export type ClaimAccountUsernameResponse = Schemas["ClaimAccountUsernameResponse"]

/**
 * Wire shape, snake_case as the API sends and accepts it. `@opensea/sdk`
 * camelizes responses and snakeizes request bodies, so annotate an
 * SDK-facing value with `Camelize<ClearNftPfpResponse>` (exported by
 * `@opensea/sdk`) or the matching `@opensea/sdk` type rather than with
 * `ClearNftPfpResponse`.
 */
export type ClearNftPfpResponse = Schemas["ClearNftPfpResponse"]

/**
 * Wire shape, snake_case as the API sends and accepts it. `@opensea/sdk`
 * camelizes responses and snakeizes request bodies, so annotate an
 * SDK-facing value with `Camelize<ClosedPositionResponse>` (exported by
 * `@opensea/sdk`) or the matching `@opensea/sdk` type rather than with
 * `ClosedPositionResponse`.
 */
export type ClosedPositionResponse = Schemas["ClosedPositionResponse"]

/**
 * Wire shape, snake_case as the API sends and accepts it. `@opensea/sdk`
 * camelizes responses and snakeizes request bodies, so annotate an
 * SDK-facing value with `Camelize<ClosedPositionsResponse>` (exported by
 * `@opensea/sdk`) or the matching `@opensea/sdk` type rather than with
 * `ClosedPositionsResponse`.
 */
export type ClosedPositionsResponse = Schemas["ClosedPositionsResponse"]

/**
 * Wire shape, snake_case as the API sends and accepts it. `@opensea/sdk`
 * camelizes responses and snakeizes request bodies, so annotate an
 * SDK-facing value with `Camelize<CollectionBatchResponse>` (exported by
 * `@opensea/sdk`) or the matching `@opensea/sdk` type rather than with
 * `CollectionBatchResponse`.
 */
export type CollectionBatchResponse = Schemas["CollectionBatchResponse"]

/**
 * Wire shape, snake_case as the API sends and accepts it. `@opensea/sdk`
 * camelizes responses and snakeizes request bodies, so annotate an
 * SDK-facing value with `Camelize<CollectionCriteria>` (exported by
 * `@opensea/sdk`) or the matching `@opensea/sdk` type rather than with
 * `CollectionCriteria`.
 */
export type CollectionCriteria = Schemas["CollectionCriteria"]

/**
 * Wire shape, snake_case as the API sends and accepts it. `@opensea/sdk`
 * camelizes responses and snakeizes request bodies, so annotate an
 * SDK-facing value with `Camelize<CollectionDetailedResponse>` (exported by
 * `@opensea/sdk`) or the matching `@opensea/sdk` type rather than with
 * `CollectionDetailedResponse`.
 */
export type CollectionDetailedResponse = Schemas["CollectionDetailedResponse"]

/**
 * Wire shape, snake_case as the API sends and accepts it. `@opensea/sdk`
 * camelizes responses and snakeizes request bodies, so annotate an
 * SDK-facing value with `Camelize<CollectionHolderResponse>` (exported by
 * `@opensea/sdk`) or the matching `@opensea/sdk` type rather than with
 * `CollectionHolderResponse`.
 */
export type CollectionHolderResponse = Schemas["CollectionHolderResponse"]

/**
 * Wire shape, snake_case as the API sends and accepts it. `@opensea/sdk`
 * camelizes responses and snakeizes request bodies, so annotate an
 * SDK-facing value with `Camelize<CollectionHoldersPaginatedResponse>` (exported by
 * `@opensea/sdk`) or the matching `@opensea/sdk` type rather than with
 * `CollectionHoldersPaginatedResponse`.
 */
export type CollectionHoldersPaginatedResponse = Schemas["CollectionHoldersPaginatedResponse"]

/**
 * Wire shape, snake_case as the API sends and accepts it. `@opensea/sdk`
 * camelizes responses and snakeizes request bodies, so annotate an
 * SDK-facing value with `Camelize<CollectionInner>` (exported by
 * `@opensea/sdk`) or the matching `@opensea/sdk` type rather than with
 * `CollectionInner`.
 */
export type CollectionInner = Schemas["CollectionInner"]

/**
 * Wire shape, snake_case as the API sends and accepts it. `@opensea/sdk`
 * camelizes responses and snakeizes request bodies, so annotate an
 * SDK-facing value with `Camelize<CollectionObject>` (exported by
 * `@opensea/sdk`) or the matching `@opensea/sdk` type rather than with
 * `CollectionObject`.
 */
export type CollectionObject = Schemas["CollectionObject"]

/**
 * Wire shape, snake_case as the API sends and accepts it. `@opensea/sdk`
 * camelizes responses and snakeizes request bodies, so annotate an
 * SDK-facing value with `Camelize<CollectionOfferAggregateResponse>` (exported by
 * `@opensea/sdk`) or the matching `@opensea/sdk` type rather than with
 * `CollectionOfferAggregateResponse`.
 */
export type CollectionOfferAggregateResponse = Schemas["CollectionOfferAggregateResponse"]

/**
 * Wire shape, snake_case as the API sends and accepts it. `@opensea/sdk`
 * camelizes responses and snakeizes request bodies, so annotate an
 * SDK-facing value with `Camelize<CollectionOfferAggregatesPaginatedResponse>` (exported by
 * `@opensea/sdk`) or the matching `@opensea/sdk` type rather than with
 * `CollectionOfferAggregatesPaginatedResponse`.
 */
export type CollectionOfferAggregatesPaginatedResponse = Schemas["CollectionOfferAggregatesPaginatedResponse"]

/**
 * Wire shape, snake_case as the API sends and accepts it. `@opensea/sdk`
 * camelizes responses and snakeizes request bodies, so annotate an
 * SDK-facing value with `Camelize<CollectionPaginatedResponse>` (exported by
 * `@opensea/sdk`) or the matching `@opensea/sdk` type rather than with
 * `CollectionPaginatedResponse`.
 */
export type CollectionPaginatedResponse = Schemas["CollectionPaginatedResponse"]

/**
 * Wire shape, snake_case as the API sends and accepts it. `@opensea/sdk`
 * camelizes responses and snakeizes request bodies, so annotate an
 * SDK-facing value with `Camelize<CollectionRarity>` (exported by
 * `@opensea/sdk`) or the matching `@opensea/sdk` type rather than with
 * `CollectionRarity`.
 */
export type CollectionRarity = Schemas["CollectionRarity"]

/**
 * Wire shape, snake_case as the API sends and accepts it. `@opensea/sdk`
 * camelizes responses and snakeizes request bodies, so annotate an
 * SDK-facing value with `Camelize<CollectionResponse>` (exported by
 * `@opensea/sdk`) or the matching `@opensea/sdk` type rather than with
 * `CollectionResponse`.
 */
export type CollectionResponse = Schemas["CollectionResponse"]

/**
 * Wire shape, snake_case as the API sends and accepts it. `@opensea/sdk`
 * camelizes responses and snakeizes request bodies, so annotate an
 * SDK-facing value with `Camelize<CollectionSearchResponse>` (exported by
 * `@opensea/sdk`) or the matching `@opensea/sdk` type rather than with
 * `CollectionSearchResponse`.
 */
export type CollectionSearchResponse = Schemas["CollectionSearchResponse"]

/**
 * Wire shape, snake_case as the API sends and accepts it. `@opensea/sdk`
 * camelizes responses and snakeizes request bodies, so annotate an
 * SDK-facing value with `Camelize<CollectionStatsResponse>` (exported by
 * `@opensea/sdk`) or the matching `@opensea/sdk` type rather than with
 * `CollectionStatsResponse`.
 */
export type CollectionStatsResponse = Schemas["CollectionStatsResponse"]

/**
 * Wire shape, snake_case as the API sends and accepts it. `@opensea/sdk`
 * camelizes responses and snakeizes request bodies, so annotate an
 * SDK-facing value with `Camelize<Consideration>` (exported by
 * `@opensea/sdk`) or the matching `@opensea/sdk` type rather than with
 * `Consideration`.
 */
export type Consideration = Schemas["Consideration"]

/**
 * Wire shape, snake_case as the API sends and accepts it. `@opensea/sdk`
 * camelizes responses and snakeizes request bodies, so annotate an
 * SDK-facing value with `Camelize<ConsiderationItem>` (exported by
 * `@opensea/sdk`) or the matching `@opensea/sdk` type rather than with
 * `ConsiderationItem`.
 */
export type ConsiderationItem = Schemas["ConsiderationItem"]

/**
 * Wire shape, snake_case as the API sends and accepts it. `@opensea/sdk`
 * camelizes responses and snakeizes request bodies, so annotate an
 * SDK-facing value with `Camelize<ConsiderationObject>` (exported by
 * `@opensea/sdk`) or the matching `@opensea/sdk` type rather than with
 * `ConsiderationObject`.
 */
export type ConsiderationObject = Schemas["ConsiderationObject"]

/**
 * Wire shape, snake_case as the API sends and accepts it. `@opensea/sdk`
 * camelizes responses and snakeizes request bodies, so annotate an
 * SDK-facing value with `Camelize<ContentBlockModuleRequest>` (exported by
 * `@opensea/sdk`) or the matching `@opensea/sdk` type rather than with
 * `ContentBlockModuleRequest`.
 */
export type ContentBlockModuleRequest = Schemas["ContentBlockModuleRequest"]

/**
 * Wire shape, snake_case as the API sends and accepts it. `@opensea/sdk`
 * camelizes responses and snakeizes request bodies, so annotate an
 * SDK-facing value with `Camelize<ContentBlockSectionRequest>` (exported by
 * `@opensea/sdk`) or the matching `@opensea/sdk` type rather than with
 * `ContentBlockSectionRequest`.
 */
export type ContentBlockSectionRequest = Schemas["ContentBlockSectionRequest"]

/**
 * Wire shape, snake_case as the API sends and accepts it. `@opensea/sdk`
 * camelizes responses and snakeizes request bodies, so annotate an
 * SDK-facing value with `Camelize<Contract>` (exported by
 * `@opensea/sdk`) or the matching `@opensea/sdk` type rather than with
 * `Contract`.
 */
export type Contract = Schemas["Contract"]

/**
 * Wire shape, snake_case as the API sends and accepts it. `@opensea/sdk`
 * camelizes responses and snakeizes request bodies, so annotate an
 * SDK-facing value with `Camelize<ContractCriteria>` (exported by
 * `@opensea/sdk`) or the matching `@opensea/sdk` type rather than with
 * `ContractCriteria`.
 */
export type ContractCriteria = Schemas["ContractCriteria"]

/**
 * Wire shape, snake_case as the API sends and accepts it. `@opensea/sdk`
 * camelizes responses and snakeizes request bodies, so annotate an
 * SDK-facing value with `Camelize<ContractInner>` (exported by
 * `@opensea/sdk`) or the matching `@opensea/sdk` type rather than with
 * `ContractInner`.
 */
export type ContractInner = Schemas["ContractInner"]

/**
 * Wire shape, snake_case as the API sends and accepts it. `@opensea/sdk`
 * camelizes responses and snakeizes request bodies, so annotate an
 * SDK-facing value with `Camelize<ContractResponse>` (exported by
 * `@opensea/sdk`) or the matching `@opensea/sdk` type rather than with
 * `ContractResponse`.
 */
export type ContractResponse = Schemas["ContractResponse"]

/**
 * Wire shape, snake_case as the API sends and accepts it. `@opensea/sdk`
 * camelizes responses and snakeizes request bodies, so annotate an
 * SDK-facing value with `Camelize<CreateListingActionsRequest>` (exported by
 * `@opensea/sdk`) or the matching `@opensea/sdk` type rather than with
 * `CreateListingActionsRequest`.
 */
export type CreateListingActionsRequest = Schemas["CreateListingActionsRequest"]

/**
 * Wire shape, snake_case as the API sends and accepts it. `@opensea/sdk`
 * camelizes responses and snakeizes request bodies, so annotate an
 * SDK-facing value with `Camelize<CreateListingActionsResponse>` (exported by
 * `@opensea/sdk`) or the matching `@opensea/sdk` type rather than with
 * `CreateListingActionsResponse`.
 */
export type CreateListingActionsResponse = Schemas["CreateListingActionsResponse"]

/**
 * Wire shape, snake_case as the API sends and accepts it. `@opensea/sdk`
 * camelizes responses and snakeizes request bodies, so annotate an
 * SDK-facing value with `Camelize<CreateOfferActionItem>` (exported by
 * `@opensea/sdk`) or the matching `@opensea/sdk` type rather than with
 * `CreateOfferActionItem`.
 */
export type CreateOfferActionItem = Schemas["CreateOfferActionItem"]

/**
 * Wire shape, snake_case as the API sends and accepts it. `@opensea/sdk`
 * camelizes responses and snakeizes request bodies, so annotate an
 * SDK-facing value with `Camelize<CreateOfferActionsRequest>` (exported by
 * `@opensea/sdk`) or the matching `@opensea/sdk` type rather than with
 * `CreateOfferActionsRequest`.
 */
export type CreateOfferActionsRequest = Schemas["CreateOfferActionsRequest"]

/**
 * Wire shape, snake_case as the API sends and accepts it. `@opensea/sdk`
 * camelizes responses and snakeizes request bodies, so annotate an
 * SDK-facing value with `Camelize<CreateOfferActionsResponse>` (exported by
 * `@opensea/sdk`) or the matching `@opensea/sdk` type rather than with
 * `CreateOfferActionsResponse`.
 */
export type CreateOfferActionsResponse = Schemas["CreateOfferActionsResponse"]

/**
 * Wire shape, snake_case as the API sends and accepts it. `@opensea/sdk`
 * camelizes responses and snakeizes request bodies, so annotate an
 * SDK-facing value with `Camelize<CreateProfileShelfRequest>` (exported by
 * `@opensea/sdk`) or the matching `@opensea/sdk` type rather than with
 * `CreateProfileShelfRequest`.
 */
export type CreateProfileShelfRequest = Schemas["CreateProfileShelfRequest"]

/**
 * Wire shape, snake_case as the API sends and accepts it. `@opensea/sdk`
 * camelizes responses and snakeizes request bodies, so annotate an
 * SDK-facing value with `Camelize<Criteria>` (exported by
 * `@opensea/sdk`) or the matching `@opensea/sdk` type rather than with
 * `Criteria`.
 */
export type Criteria = Schemas["Criteria"]

/**
 * Wire shape, snake_case as the API sends and accepts it. `@opensea/sdk`
 * camelizes responses and snakeizes request bodies, so annotate an
 * SDK-facing value with `Camelize<CriteriaObject>` (exported by
 * `@opensea/sdk`) or the matching `@opensea/sdk` type rather than with
 * `CriteriaObject`.
 */
export type CriteriaObject = Schemas["CriteriaObject"]

/**
 * Wire shape, snake_case as the API sends and accepts it. `@opensea/sdk`
 * camelizes responses and snakeizes request bodies, so annotate an
 * SDK-facing value with `Camelize<CriteriaRequest>` (exported by
 * `@opensea/sdk`) or the matching `@opensea/sdk` type rather than with
 * `CriteriaRequest`.
 */
export type CriteriaRequest = Schemas["CriteriaRequest"]

/**
 * Wire shape, snake_case as the API sends and accepts it. `@opensea/sdk`
 * camelizes responses and snakeizes request bodies, so annotate an
 * SDK-facing value with `Camelize<CriteriaResolver>` (exported by
 * `@opensea/sdk`) or the matching `@opensea/sdk` type rather than with
 * `CriteriaResolver`.
 */
export type CriteriaResolver = Schemas["CriteriaResolver"]

/**
 * Wire shape, snake_case as the API sends and accepts it. `@opensea/sdk`
 * camelizes responses and snakeizes request bodies, so annotate an
 * SDK-facing value with `Camelize<CrossChainDropMintRequest>` (exported by
 * `@opensea/sdk`) or the matching `@opensea/sdk` type rather than with
 * `CrossChainDropMintRequest`.
 */
export type CrossChainDropMintRequest = Schemas["CrossChainDropMintRequest"]

/**
 * Wire shape, snake_case as the API sends and accepts it. `@opensea/sdk`
 * camelizes responses and snakeizes request bodies, so annotate an
 * SDK-facing value with `Camelize<CrossChainDropMintResponse>` (exported by
 * `@opensea/sdk`) or the matching `@opensea/sdk` type rather than with
 * `CrossChainDropMintResponse`.
 */
export type CrossChainDropMintResponse = Schemas["CrossChainDropMintResponse"]

/**
 * Wire shape, snake_case as the API sends and accepts it. `@opensea/sdk`
 * camelizes responses and snakeizes request bodies, so annotate an
 * SDK-facing value with `Camelize<CrossChainFulfillmentRequest>` (exported by
 * `@opensea/sdk`) or the matching `@opensea/sdk` type rather than with
 * `CrossChainFulfillmentRequest`.
 */
export type CrossChainFulfillmentRequest = Schemas["CrossChainFulfillmentRequest"]

/**
 * Wire shape, snake_case as the API sends and accepts it. `@opensea/sdk`
 * camelizes responses and snakeizes request bodies, so annotate an
 * SDK-facing value with `Camelize<CrossChainFulfillmentResponse>` (exported by
 * `@opensea/sdk`) or the matching `@opensea/sdk` type rather than with
 * `CrossChainFulfillmentResponse`.
 */
export type CrossChainFulfillmentResponse = Schemas["CrossChainFulfillmentResponse"]

/**
 * Wire shape, snake_case as the API sends and accepts it. `@opensea/sdk`
 * camelizes responses and snakeizes request bodies, so annotate an
 * SDK-facing value with `Camelize<CrossChainPaymentToken>` (exported by
 * `@opensea/sdk`) or the matching `@opensea/sdk` type rather than with
 * `CrossChainPaymentToken`.
 */
export type CrossChainPaymentToken = Schemas["CrossChainPaymentToken"]

/**
 * Wire shape, snake_case as the API sends and accepts it. `@opensea/sdk`
 * camelizes responses and snakeizes request bodies, so annotate an
 * SDK-facing value with `Camelize<DropDeployReceiptResponse>` (exported by
 * `@opensea/sdk`) or the matching `@opensea/sdk` type rather than with
 * `DropDeployReceiptResponse`.
 */
export type DropDeployReceiptResponse = Schemas["DropDeployReceiptResponse"]

/**
 * Wire shape, snake_case as the API sends and accepts it. `@opensea/sdk`
 * camelizes responses and snakeizes request bodies, so annotate an
 * SDK-facing value with `Camelize<DropDeployRequest>` (exported by
 * `@opensea/sdk`) or the matching `@opensea/sdk` type rather than with
 * `DropDeployRequest`.
 */
export type DropDeployRequest = Schemas["DropDeployRequest"]

/**
 * Wire shape, snake_case as the API sends and accepts it. `@opensea/sdk`
 * camelizes responses and snakeizes request bodies, so annotate an
 * SDK-facing value with `Camelize<DropDeployResponse>` (exported by
 * `@opensea/sdk`) or the matching `@opensea/sdk` type rather than with
 * `DropDeployResponse`.
 */
export type DropDeployResponse = Schemas["DropDeployResponse"]

/**
 * Wire shape, snake_case as the API sends and accepts it. `@opensea/sdk`
 * camelizes responses and snakeizes request bodies, so annotate an
 * SDK-facing value with `Camelize<DropDetailedResponse>` (exported by
 * `@opensea/sdk`) or the matching `@opensea/sdk` type rather than with
 * `DropDetailedResponse`.
 */
export type DropDetailedResponse = Schemas["DropDetailedResponse"]

/**
 * Wire shape, snake_case as the API sends and accepts it. `@opensea/sdk`
 * camelizes responses and snakeizes request bodies, so annotate an
 * SDK-facing value with `Camelize<DropEligibilityResponse>` (exported by
 * `@opensea/sdk`) or the matching `@opensea/sdk` type rather than with
 * `DropEligibilityResponse`.
 */
export type DropEligibilityResponse = Schemas["DropEligibilityResponse"]

/**
 * Wire shape, snake_case as the API sends and accepts it. `@opensea/sdk`
 * camelizes responses and snakeizes request bodies, so annotate an
 * SDK-facing value with `Camelize<DropItemAttributeResponse>` (exported by
 * `@opensea/sdk`) or the matching `@opensea/sdk` type rather than with
 * `DropItemAttributeResponse`.
 */
export type DropItemAttributeResponse = Schemas["DropItemAttributeResponse"]

/**
 * Wire shape, snake_case as the API sends and accepts it. `@opensea/sdk`
 * camelizes responses and snakeizes request bodies, so annotate an
 * SDK-facing value with `Camelize<DropItemResponse>` (exported by
 * `@opensea/sdk`) or the matching `@opensea/sdk` type rather than with
 * `DropItemResponse`.
 */
export type DropItemResponse = Schemas["DropItemResponse"]

/**
 * Wire shape, snake_case as the API sends and accepts it. `@opensea/sdk`
 * camelizes responses and snakeizes request bodies, so annotate an
 * SDK-facing value with `Camelize<DropMintRequest>` (exported by
 * `@opensea/sdk`) or the matching `@opensea/sdk` type rather than with
 * `DropMintRequest`.
 */
export type DropMintRequest = Schemas["DropMintRequest"]

/**
 * Wire shape, snake_case as the API sends and accepts it. `@opensea/sdk`
 * camelizes responses and snakeizes request bodies, so annotate an
 * SDK-facing value with `Camelize<DropMintResponse>` (exported by
 * `@opensea/sdk`) or the matching `@opensea/sdk` type rather than with
 * `DropMintResponse`.
 */
export type DropMintResponse = Schemas["DropMintResponse"]

/**
 * Wire shape, snake_case as the API sends and accepts it. `@opensea/sdk`
 * camelizes responses and snakeizes request bodies, so annotate an
 * SDK-facing value with `Camelize<DropPaginatedResponse>` (exported by
 * `@opensea/sdk`) or the matching `@opensea/sdk` type rather than with
 * `DropPaginatedResponse`.
 */
export type DropPaginatedResponse = Schemas["DropPaginatedResponse"]

/**
 * Wire shape, snake_case as the API sends and accepts it. `@opensea/sdk`
 * camelizes responses and snakeizes request bodies, so annotate an
 * SDK-facing value with `Camelize<DropResponse>` (exported by
 * `@opensea/sdk`) or the matching `@opensea/sdk` type rather than with
 * `DropResponse`.
 */
export type DropResponse = Schemas["DropResponse"]

/**
 * Wire shape, snake_case as the API sends and accepts it. `@opensea/sdk`
 * camelizes responses and snakeizes request bodies, so annotate an
 * SDK-facing value with `Camelize<DropStageEligibilityResponse>` (exported by
 * `@opensea/sdk`) or the matching `@opensea/sdk` type rather than with
 * `DropStageEligibilityResponse`.
 */
export type DropStageEligibilityResponse = Schemas["DropStageEligibilityResponse"]

/**
 * Wire shape, snake_case as the API sends and accepts it. `@opensea/sdk`
 * camelizes responses and snakeizes request bodies, so annotate an
 * SDK-facing value with `Camelize<DropStageResponse>` (exported by
 * `@opensea/sdk`) or the matching `@opensea/sdk` type rather than with
 * `DropStageResponse`.
 */
export type DropStageResponse = Schemas["DropStageResponse"]

/**
 * Wire shape, snake_case as the API sends and accepts it. `@opensea/sdk`
 * camelizes responses and snakeizes request bodies, so annotate an
 * SDK-facing value with `Camelize<Eip3009Fields>` (exported by
 * `@opensea/sdk`) or the matching `@opensea/sdk` type rather than with
 * `Eip3009Fields`.
 */
export type Eip3009Fields = Schemas["Eip3009Fields"]

/**
 * Wire shape, snake_case as the API sends and accepts it. `@opensea/sdk`
 * camelizes responses and snakeizes request bodies, so annotate an
 * SDK-facing value with `Camelize<Event>` (exported by
 * `@opensea/sdk`) or the matching `@opensea/sdk` type rather than with
 * `Event`.
 */
export type Event = Schemas["Event"]

/**
 * Wire shape, snake_case as the API sends and accepts it. `@opensea/sdk`
 * camelizes responses and snakeizes request bodies, so annotate an
 * SDK-facing value with `Camelize<EventBase>` (exported by
 * `@opensea/sdk`) or the matching `@opensea/sdk` type rather than with
 * `EventBase`.
 */
export type EventBase = Schemas["EventBase"]

/**
 * Wire shape, snake_case as the API sends and accepts it. `@opensea/sdk`
 * camelizes responses and snakeizes request bodies, so annotate an
 * SDK-facing value with `Camelize<FaqBlockModuleRequest>` (exported by
 * `@opensea/sdk`) or the matching `@opensea/sdk` type rather than with
 * `FaqBlockModuleRequest`.
 */
export type FaqBlockModuleRequest = Schemas["FaqBlockModuleRequest"]

/**
 * Wire shape, snake_case as the API sends and accepts it. `@opensea/sdk`
 * camelizes responses and snakeizes request bodies, so annotate an
 * SDK-facing value with `Camelize<FaqSectionRequest>` (exported by
 * `@opensea/sdk`) or the matching `@opensea/sdk` type rather than with
 * `FaqSectionRequest`.
 */
export type FaqSectionRequest = Schemas["FaqSectionRequest"]

/**
 * Wire shape, snake_case as the API sends and accepts it. `@opensea/sdk`
 * camelizes responses and snakeizes request bodies, so annotate an
 * SDK-facing value with `Camelize<FavoriteResponse>` (exported by
 * `@opensea/sdk`) or the matching `@opensea/sdk` type rather than with
 * `FavoriteResponse`.
 */
export type FavoriteResponse = Schemas["FavoriteResponse"]

/**
 * Wire shape, snake_case as the API sends and accepts it. `@opensea/sdk`
 * camelizes responses and snakeizes request bodies, so annotate an
 * SDK-facing value with `Camelize<Fee>` (exported by
 * `@opensea/sdk`) or the matching `@opensea/sdk` type rather than with
 * `Fee`.
 */
export type Fee = Schemas["Fee"]

/**
 * Wire shape, snake_case as the API sends and accepts it. `@opensea/sdk`
 * camelizes responses and snakeizes request bodies, so annotate an
 * SDK-facing value with `Camelize<FloorPriceHistoryResponse>` (exported by
 * `@opensea/sdk`) or the matching `@opensea/sdk` type rather than with
 * `FloorPriceHistoryResponse`.
 */
export type FloorPriceHistoryResponse = Schemas["FloorPriceHistoryResponse"]

/**
 * Wire shape, snake_case as the API sends and accepts it. `@opensea/sdk`
 * camelizes responses and snakeizes request bodies, so annotate an
 * SDK-facing value with `Camelize<FloorPricePointResponse>` (exported by
 * `@opensea/sdk`) or the matching `@opensea/sdk` type rather than with
 * `FloorPricePointResponse`.
 */
export type FloorPricePointResponse = Schemas["FloorPricePointResponse"]

/**
 * Wire shape, snake_case as the API sends and accepts it. `@opensea/sdk`
 * camelizes responses and snakeizes request bodies, so annotate an
 * SDK-facing value with `Camelize<FulfillAdvancedOrder>` (exported by
 * `@opensea/sdk`) or the matching `@opensea/sdk` type rather than with
 * `FulfillAdvancedOrder`.
 */
export type FulfillAdvancedOrder = Schemas["FulfillAdvancedOrder"]

/**
 * Wire shape, snake_case as the API sends and accepts it. `@opensea/sdk`
 * camelizes responses and snakeizes request bodies, so annotate an
 * SDK-facing value with `Camelize<FulfillAvailableAdvancedOrders>` (exported by
 * `@opensea/sdk`) or the matching `@opensea/sdk` type rather than with
 * `FulfillAvailableAdvancedOrders`.
 */
export type FulfillAvailableAdvancedOrders = Schemas["FulfillAvailableAdvancedOrders"]

/**
 * Wire shape, snake_case as the API sends and accepts it. `@opensea/sdk`
 * camelizes responses and snakeizes request bodies, so annotate an
 * SDK-facing value with `Camelize<FulfillAvailableOrders>` (exported by
 * `@opensea/sdk`) or the matching `@opensea/sdk` type rather than with
 * `FulfillAvailableOrders`.
 */
export type FulfillAvailableOrders = Schemas["FulfillAvailableOrders"]

/**
 * Wire shape, snake_case as the API sends and accepts it. `@opensea/sdk`
 * camelizes responses and snakeizes request bodies, so annotate an
 * SDK-facing value with `Camelize<FulfillBasicOrder>` (exported by
 * `@opensea/sdk`) or the matching `@opensea/sdk` type rather than with
 * `FulfillBasicOrder`.
 */
export type FulfillBasicOrder = Schemas["FulfillBasicOrder"]

/**
 * Wire shape, snake_case as the API sends and accepts it. `@opensea/sdk`
 * camelizes responses and snakeizes request bodies, so annotate an
 * SDK-facing value with `Camelize<FulfillListingResponse>` (exported by
 * `@opensea/sdk`) or the matching `@opensea/sdk` type rather than with
 * `FulfillListingResponse`.
 */
export type FulfillListingResponse = Schemas["FulfillListingResponse"]

/**
 * Wire shape, snake_case as the API sends and accepts it. `@opensea/sdk`
 * camelizes responses and snakeizes request bodies, so annotate an
 * SDK-facing value with `Camelize<FulfillOrder>` (exported by
 * `@opensea/sdk`) or the matching `@opensea/sdk` type rather than with
 * `FulfillOrder`.
 */
export type FulfillOrder = Schemas["FulfillOrder"]

/**
 * Wire shape, snake_case as the API sends and accepts it. `@opensea/sdk`
 * camelizes responses and snakeizes request bodies, so annotate an
 * SDK-facing value with `Camelize<FulfillerObject>` (exported by
 * `@opensea/sdk`) or the matching `@opensea/sdk` type rather than with
 * `FulfillerObject`.
 */
export type FulfillerObject = Schemas["FulfillerObject"]

/**
 * Wire shape, snake_case as the API sends and accepts it. `@opensea/sdk`
 * camelizes responses and snakeizes request bodies, so annotate an
 * SDK-facing value with `Camelize<Fulfillment>` (exported by
 * `@opensea/sdk`) or the matching `@opensea/sdk` type rather than with
 * `Fulfillment`.
 */
export type Fulfillment = Schemas["Fulfillment"]

/**
 * Wire shape, snake_case as the API sends and accepts it. `@opensea/sdk`
 * camelizes responses and snakeizes request bodies, so annotate an
 * SDK-facing value with `Camelize<FulfillmentActionsResponse>` (exported by
 * `@opensea/sdk`) or the matching `@opensea/sdk` type rather than with
 * `FulfillmentActionsResponse`.
 */
export type FulfillmentActionsResponse = Schemas["FulfillmentActionsResponse"]

/**
 * Wire shape, snake_case as the API sends and accepts it. `@opensea/sdk`
 * camelizes responses and snakeizes request bodies, so annotate an
 * SDK-facing value with `Camelize<FulfillmentComponent>` (exported by
 * `@opensea/sdk`) or the matching `@opensea/sdk` type rather than with
 * `FulfillmentComponent`.
 */
export type FulfillmentComponent = Schemas["FulfillmentComponent"]

/**
 * Wire shape, snake_case as the API sends and accepts it. `@opensea/sdk`
 * camelizes responses and snakeizes request bodies, so annotate an
 * SDK-facing value with `Camelize<FulfillmentData>` (exported by
 * `@opensea/sdk`) or the matching `@opensea/sdk` type rather than with
 * `FulfillmentData`.
 */
export type FulfillmentData = Schemas["FulfillmentData"]

/**
 * Wire shape, snake_case as the API sends and accepts it. `@opensea/sdk`
 * camelizes responses and snakeizes request bodies, so annotate an
 * SDK-facing value with `Camelize<FullfillListingRequest>` (exported by
 * `@opensea/sdk`) or the matching `@opensea/sdk` type rather than with
 * `FullfillListingRequest`.
 */
export type FullfillListingRequest = Schemas["FullfillListingRequest"]

/**
 * Wire shape, snake_case as the API sends and accepts it. `@opensea/sdk`
 * camelizes responses and snakeizes request bodies, so annotate an
 * SDK-facing value with `Camelize<FullfillmentDataRequest>` (exported by
 * `@opensea/sdk`) or the matching `@opensea/sdk` type rather than with
 * `FullfillmentDataRequest`.
 */
export type FullfillmentDataRequest = Schemas["FullfillmentDataRequest"]

/**
 * Wire shape, snake_case as the API sends and accepts it. `@opensea/sdk`
 * camelizes responses and snakeizes request bodies, so annotate an
 * SDK-facing value with `Camelize<GetOrderResponse>` (exported by
 * `@opensea/sdk`) or the matching `@opensea/sdk` type rather than with
 * `GetOrderResponse`.
 */
export type GetOrderResponse = Schemas["GetOrderResponse"]

/**
 * Wire shape, snake_case as the API sends and accepts it. `@opensea/sdk`
 * camelizes responses and snakeizes request bodies, so annotate an
 * SDK-facing value with `Camelize<HeroMetadataRequest>` (exported by
 * `@opensea/sdk`) or the matching `@opensea/sdk` type rather than with
 * `HeroMetadataRequest`.
 */
export type HeroMetadataRequest = Schemas["HeroMetadataRequest"]

/**
 * Wire shape, snake_case as the API sends and accepts it. `@opensea/sdk`
 * camelizes responses and snakeizes request bodies, so annotate an
 * SDK-facing value with `Camelize<ImageMediaRequest>` (exported by
 * `@opensea/sdk`) or the matching `@opensea/sdk` type rather than with
 * `ImageMediaRequest`.
 */
export type ImageMediaRequest = Schemas["ImageMediaRequest"]

/**
 * Wire shape, snake_case as the API sends and accepts it. `@opensea/sdk`
 * camelizes responses and snakeizes request bodies, so annotate an
 * SDK-facing value with `Camelize<InstantApiKeyResponse>` (exported by
 * `@opensea/sdk`) or the matching `@opensea/sdk` type rather than with
 * `InstantApiKeyResponse`.
 */
export type InstantApiKeyResponse = Schemas["InstantApiKeyResponse"]

/**
 * Wire shape, snake_case as the API sends and accepts it. `@opensea/sdk`
 * camelizes responses and snakeizes request bodies, so annotate an
 * SDK-facing value with `Camelize<IntervalStat>` (exported by
 * `@opensea/sdk`) or the matching `@opensea/sdk` type rather than with
 * `IntervalStat`.
 */
export type IntervalStat = Schemas["IntervalStat"]

/**
 * Wire shape, snake_case as the API sends and accepts it. `@opensea/sdk`
 * camelizes responses and snakeizes request bodies, so annotate an
 * SDK-facing value with `Camelize<Item>` (exported by
 * `@opensea/sdk`) or the matching `@opensea/sdk` type rather than with
 * `Item`.
 */
export type Item = Schemas["Item"]

/**
 * Wire shape, snake_case as the API sends and accepts it. `@opensea/sdk`
 * camelizes responses and snakeizes request bodies, so annotate an
 * SDK-facing value with `Camelize<JsonNode>` (exported by
 * `@opensea/sdk`) or the matching `@opensea/sdk` type rather than with
 * `JsonNode`.
 */
export type JsonNode = Schemas["JsonNode"]

/**
 * Wire shape, snake_case as the API sends and accepts it. `@opensea/sdk`
 * camelizes responses and snakeizes request bodies, so annotate an
 * SDK-facing value with `Camelize<LinkRequest>` (exported by
 * `@opensea/sdk`) or the matching `@opensea/sdk` type rather than with
 * `LinkRequest`.
 */
export type LinkRequest = Schemas["LinkRequest"]

/**
 * Wire shape, snake_case as the API sends and accepts it. `@opensea/sdk`
 * camelizes responses and snakeizes request bodies, so annotate an
 * SDK-facing value with `Camelize<LinkWalletSiwxRequest>` (exported by
 * `@opensea/sdk`) or the matching `@opensea/sdk` type rather than with
 * `LinkWalletSiwxRequest`.
 */
export type LinkWalletSiwxRequest = Schemas["LinkWalletSiwxRequest"]

/**
 * Wire shape, snake_case as the API sends and accepts it. `@opensea/sdk`
 * camelizes responses and snakeizes request bodies, so annotate an
 * SDK-facing value with `Camelize<Listing>` (exported by
 * `@opensea/sdk`) or the matching `@opensea/sdk` type rather than with
 * `Listing`.
 */
export type Listing = Schemas["Listing"]

/**
 * Wire shape, snake_case as the API sends and accepts it. `@opensea/sdk`
 * camelizes responses and snakeizes request bodies, so annotate an
 * SDK-facing value with `Camelize<ListingItem>` (exported by
 * `@opensea/sdk`) or the matching `@opensea/sdk` type rather than with
 * `ListingItem`.
 */
export type ListingItem = Schemas["ListingItem"]

/**
 * Wire shape, snake_case as the API sends and accepts it. `@opensea/sdk`
 * camelizes responses and snakeizes request bodies, so annotate an
 * SDK-facing value with `Camelize<ListingObject>` (exported by
 * `@opensea/sdk`) or the matching `@opensea/sdk` type rather than with
 * `ListingObject`.
 */
export type ListingObject = Schemas["ListingObject"]

/**
 * Wire shape, snake_case as the API sends and accepts it. `@opensea/sdk`
 * camelizes responses and snakeizes request bodies, so annotate an
 * SDK-facing value with `Camelize<ListingOrOffer>` (exported by
 * `@opensea/sdk`) or the matching `@opensea/sdk` type rather than with
 * `ListingOrOffer`.
 */
export type ListingOrOffer = Schemas["ListingOrOffer"]

/**
 * Wire shape, snake_case as the API sends and accepts it. `@opensea/sdk`
 * camelizes responses and snakeizes request bodies, so annotate an
 * SDK-facing value with `Camelize<ListingPrice>` (exported by
 * `@opensea/sdk`) or the matching `@opensea/sdk` type rather than with
 * `ListingPrice`.
 */
export type ListingPrice = Schemas["ListingPrice"]

/**
 * Wire shape, snake_case as the API sends and accepts it. `@opensea/sdk`
 * camelizes responses and snakeizes request bodies, so annotate an
 * SDK-facing value with `Camelize<ListingPriceInput>` (exported by
 * `@opensea/sdk`) or the matching `@opensea/sdk` type rather than with
 * `ListingPriceInput`.
 */
export type ListingPriceInput = Schemas["ListingPriceInput"]

/**
 * Wire shape, snake_case as the API sends and accepts it. `@opensea/sdk`
 * camelizes responses and snakeizes request bodies, so annotate an
 * SDK-facing value with `Camelize<ListingsResponse>` (exported by
 * `@opensea/sdk`) or the matching `@opensea/sdk` type rather than with
 * `ListingsResponse`.
 */
export type ListingsResponse = Schemas["ListingsResponse"]

/**
 * Wire shape, snake_case as the API sends and accepts it. `@opensea/sdk`
 * camelizes responses and snakeizes request bodies, so annotate an
 * SDK-facing value with `Camelize<MatchAdvancedOrders>` (exported by
 * `@opensea/sdk`) or the matching `@opensea/sdk` type rather than with
 * `MatchAdvancedOrders`.
 */
export type MatchAdvancedOrders = Schemas["MatchAdvancedOrders"]

/**
 * Wire shape, snake_case as the API sends and accepts it. `@opensea/sdk`
 * camelizes responses and snakeizes request bodies, so annotate an
 * SDK-facing value with `Camelize<MatchOrders>` (exported by
 * `@opensea/sdk`) or the matching `@opensea/sdk` type rather than with
 * `MatchOrders`.
 */
export type MatchOrders = Schemas["MatchOrders"]

/**
 * Wire shape, snake_case as the API sends and accepts it. `@opensea/sdk`
 * camelizes responses and snakeizes request bodies, so annotate an
 * SDK-facing value with `Camelize<MediaInputRequest>` (exported by
 * `@opensea/sdk`) or the matching `@opensea/sdk` type rather than with
 * `MediaInputRequest`.
 */
export type MediaInputRequest = Schemas["MediaInputRequest"]

/**
 * Wire shape, snake_case as the API sends and accepts it. `@opensea/sdk`
 * camelizes responses and snakeizes request bodies, so annotate an
 * SDK-facing value with `Camelize<MetadataIngestionError>` (exported by
 * `@opensea/sdk`) or the matching `@opensea/sdk` type rather than with
 * `MetadataIngestionError`.
 */
export type MetadataIngestionError = Schemas["MetadataIngestionError"]

/**
 * Wire shape, snake_case as the API sends and accepts it. `@opensea/sdk`
 * camelizes responses and snakeizes request bodies, so annotate an
 * SDK-facing value with `Camelize<ModifyCollectionCreatorFeeRequest>` (exported by
 * `@opensea/sdk`) or the matching `@opensea/sdk` type rather than with
 * `ModifyCollectionCreatorFeeRequest`.
 */
export type ModifyCollectionCreatorFeeRequest = Schemas["ModifyCollectionCreatorFeeRequest"]

/**
 * Wire shape, snake_case as the API sends and accepts it. `@opensea/sdk`
 * camelizes responses and snakeizes request bodies, so annotate an
 * SDK-facing value with `Camelize<ModifyCollectionRequest>` (exported by
 * `@opensea/sdk`) or the matching `@opensea/sdk` type rather than with
 * `ModifyCollectionRequest`.
 */
export type ModifyCollectionRequest = Schemas["ModifyCollectionRequest"]

/**
 * Wire shape, snake_case as the API sends and accepts it. `@opensea/sdk`
 * camelizes responses and snakeizes request bodies, so annotate an
 * SDK-facing value with `Camelize<ModifyCollectionResponse>` (exported by
 * `@opensea/sdk`) or the matching `@opensea/sdk` type rather than with
 * `ModifyCollectionResponse`.
 */
export type ModifyCollectionResponse = Schemas["ModifyCollectionResponse"]

/**
 * Wire shape, snake_case as the API sends and accepts it. `@opensea/sdk`
 * camelizes responses and snakeizes request bodies, so annotate an
 * SDK-facing value with `Camelize<NarrativeModuleRequest>` (exported by
 * `@opensea/sdk`) or the matching `@opensea/sdk` type rather than with
 * `NarrativeModuleRequest`.
 */
export type NarrativeModuleRequest = Schemas["NarrativeModuleRequest"]

/**
 * Wire shape, snake_case as the API sends and accepts it. `@opensea/sdk`
 * camelizes responses and snakeizes request bodies, so annotate an
 * SDK-facing value with `Camelize<Nft>` (exported by
 * `@opensea/sdk`) or the matching `@opensea/sdk` type rather than with
 * `Nft`.
 */
export type Nft = Schemas["Nft"]

/**
 * Wire shape, snake_case as the API sends and accepts it. `@opensea/sdk`
 * camelizes responses and snakeizes request bodies, so annotate an
 * SDK-facing value with `Camelize<NftAnalyticsResponse>` (exported by
 * `@opensea/sdk`) or the matching `@opensea/sdk` type rather than with
 * `NftAnalyticsResponse`.
 */
export type NftAnalyticsResponse = Schemas["NftAnalyticsResponse"]

/**
 * Wire shape, snake_case as the API sends and accepts it. `@opensea/sdk`
 * camelizes responses and snakeizes request bodies, so annotate an
 * SDK-facing value with `Camelize<NftBatchResponse>` (exported by
 * `@opensea/sdk`) or the matching `@opensea/sdk` type rather than with
 * `NftBatchResponse`.
 */
export type NftBatchResponse = Schemas["NftBatchResponse"]

/**
 * Wire shape, snake_case as the API sends and accepts it. `@opensea/sdk`
 * camelizes responses and snakeizes request bodies, so annotate an
 * SDK-facing value with `Camelize<NftDetailed>` (exported by
 * `@opensea/sdk`) or the matching `@opensea/sdk` type rather than with
 * `NftDetailed`.
 */
export type NftDetailed = Schemas["NftDetailed"]

/**
 * Wire shape, snake_case as the API sends and accepts it. `@opensea/sdk`
 * camelizes responses and snakeizes request bodies, so annotate an
 * SDK-facing value with `Camelize<NftIdentifierInput>` (exported by
 * `@opensea/sdk`) or the matching `@opensea/sdk` type rather than with
 * `NftIdentifierInput`.
 */
export type NftIdentifierInput = Schemas["NftIdentifierInput"]

/**
 * Wire shape, snake_case as the API sends and accepts it. `@opensea/sdk`
 * camelizes responses and snakeizes request bodies, so annotate an
 * SDK-facing value with `Camelize<NftListResponse>` (exported by
 * `@opensea/sdk`) or the matching `@opensea/sdk` type rather than with
 * `NftListResponse`.
 */
export type NftListResponse = Schemas["NftListResponse"]

/**
 * Wire shape, snake_case as the API sends and accepts it. `@opensea/sdk`
 * camelizes responses and snakeizes request bodies, so annotate an
 * SDK-facing value with `Camelize<NftPfpResponse>` (exported by
 * `@opensea/sdk`) or the matching `@opensea/sdk` type rather than with
 * `NftPfpResponse`.
 */
export type NftPfpResponse = Schemas["NftPfpResponse"]

/**
 * Wire shape, snake_case as the API sends and accepts it. `@opensea/sdk`
 * camelizes responses and snakeizes request bodies, so annotate an
 * SDK-facing value with `Camelize<NftResponse>` (exported by
 * `@opensea/sdk`) or the matching `@opensea/sdk` type rather than with
 * `NftResponse`.
 */
export type NftResponse = Schemas["NftResponse"]

/**
 * Wire shape, snake_case as the API sends and accepts it. `@opensea/sdk`
 * camelizes responses and snakeizes request bodies, so annotate an
 * SDK-facing value with `Camelize<NftSalePointResponse>` (exported by
 * `@opensea/sdk`) or the matching `@opensea/sdk` type rather than with
 * `NftSalePointResponse`.
 */
export type NftSalePointResponse = Schemas["NftSalePointResponse"]

/**
 * Wire shape, snake_case as the API sends and accepts it. `@opensea/sdk`
 * camelizes responses and snakeizes request bodies, so annotate an
 * SDK-facing value with `Camelize<NftSearchResponse>` (exported by
 * `@opensea/sdk`) or the matching `@opensea/sdk` type rather than with
 * `NftSearchResponse`.
 */
export type NftSearchResponse = Schemas["NftSearchResponse"]

/**
 * Wire shape, snake_case as the API sends and accepts it. `@opensea/sdk`
 * camelizes responses and snakeizes request bodies, so annotate an
 * SDK-facing value with `Camelize<NumericTraitCriteria>` (exported by
 * `@opensea/sdk`) or the matching `@opensea/sdk` type rather than with
 * `NumericTraitCriteria`.
 */
export type NumericTraitCriteria = Schemas["NumericTraitCriteria"]

/**
 * Wire shape, snake_case as the API sends and accepts it. `@opensea/sdk`
 * camelizes responses and snakeizes request bodies, so annotate an
 * SDK-facing value with `Camelize<NumericTraitData>` (exported by
 * `@opensea/sdk`) or the matching `@opensea/sdk` type rather than with
 * `NumericTraitData`.
 */
export type NumericTraitData = Schemas["NumericTraitData"]

/**
 * Wire shape, snake_case as the API sends and accepts it. `@opensea/sdk`
 * camelizes responses and snakeizes request bodies, so annotate an
 * SDK-facing value with `Camelize<Offer>` (exported by
 * `@opensea/sdk`) or the matching `@opensea/sdk` type rather than with
 * `Offer`.
 */
export type Offer = Schemas["Offer"]

/**
 * Wire shape, snake_case as the API sends and accepts it. `@opensea/sdk`
 * camelizes responses and snakeizes request bodies, so annotate an
 * SDK-facing value with `Camelize<OfferAggregatePriceResponse>` (exported by
 * `@opensea/sdk`) or the matching `@opensea/sdk` type rather than with
 * `OfferAggregatePriceResponse`.
 */
export type OfferAggregatePriceResponse = Schemas["OfferAggregatePriceResponse"]

/**
 * Wire shape, snake_case as the API sends and accepts it. `@opensea/sdk`
 * camelizes responses and snakeizes request bodies, so annotate an
 * SDK-facing value with `Camelize<OfferItem>` (exported by
 * `@opensea/sdk`) or the matching `@opensea/sdk` type rather than with
 * `OfferItem`.
 */
export type OfferItem = Schemas["OfferItem"]

/**
 * Wire shape, snake_case as the API sends and accepts it. `@opensea/sdk`
 * camelizes responses and snakeizes request bodies, so annotate an
 * SDK-facing value with `Camelize<OfferObject>` (exported by
 * `@opensea/sdk`) or the matching `@opensea/sdk` type rather than with
 * `OfferObject`.
 */
export type OfferObject = Schemas["OfferObject"]

/**
 * Wire shape, snake_case as the API sends and accepts it. `@opensea/sdk`
 * camelizes responses and snakeizes request bodies, so annotate an
 * SDK-facing value with `Camelize<OfferWithCriteriaRequest>` (exported by
 * `@opensea/sdk`) or the matching `@opensea/sdk` type rather than with
 * `OfferWithCriteriaRequest`.
 */
export type OfferWithCriteriaRequest = Schemas["OfferWithCriteriaRequest"]

/**
 * Wire shape, snake_case as the API sends and accepts it. `@opensea/sdk`
 * camelizes responses and snakeizes request bodies, so annotate an
 * SDK-facing value with `Camelize<OffersResponse>` (exported by
 * `@opensea/sdk`) or the matching `@opensea/sdk` type rather than with
 * `OffersResponse`.
 */
export type OffersResponse = Schemas["OffersResponse"]

/**
 * Wire shape, snake_case as the API sends and accepts it. `@opensea/sdk`
 * camelizes responses and snakeizes request bodies, so annotate an
 * SDK-facing value with `Camelize<OhlcvCandleResponse>` (exported by
 * `@opensea/sdk`) or the matching `@opensea/sdk` type rather than with
 * `OhlcvCandleResponse`.
 */
export type OhlcvCandleResponse = Schemas["OhlcvCandleResponse"]

/**
 * Wire shape, snake_case as the API sends and accepts it. `@opensea/sdk`
 * camelizes responses and snakeizes request bodies, so annotate an
 * SDK-facing value with `Camelize<OhlcvResponse>` (exported by
 * `@opensea/sdk`) or the matching `@opensea/sdk` type rather than with
 * `OhlcvResponse`.
 */
export type OhlcvResponse = Schemas["OhlcvResponse"]

/**
 * Wire shape, snake_case as the API sends and accepts it. `@opensea/sdk`
 * camelizes responses and snakeizes request bodies, so annotate an
 * SDK-facing value with `Camelize<Order>` (exported by
 * `@opensea/sdk`) or the matching `@opensea/sdk` type rather than with
 * `Order`.
 */
export type Order = Schemas["Order"]

/**
 * Wire shape, snake_case as the API sends and accepts it. `@opensea/sdk`
 * camelizes responses and snakeizes request bodies, so annotate an
 * SDK-facing value with `Camelize<OrderAsset>` (exported by
 * `@opensea/sdk`) or the matching `@opensea/sdk` type rather than with
 * `OrderAsset`.
 */
export type OrderAsset = Schemas["OrderAsset"]

/**
 * Wire shape, snake_case as the API sends and accepts it. `@opensea/sdk`
 * camelizes responses and snakeizes request bodies, so annotate an
 * SDK-facing value with `Camelize<OrderData>` (exported by
 * `@opensea/sdk`) or the matching `@opensea/sdk` type rather than with
 * `OrderData`.
 */
export type OrderData = Schemas["OrderData"]

/**
 * Wire shape, snake_case as the API sends and accepts it. `@opensea/sdk`
 * camelizes responses and snakeizes request bodies, so annotate an
 * SDK-facing value with `Camelize<OrderEvent>` (exported by
 * `@opensea/sdk`) or the matching `@opensea/sdk` type rather than with
 * `OrderEvent`.
 */
export type OrderEvent = Schemas["OrderEvent"]

/**
 * Wire shape, snake_case as the API sends and accepts it. `@opensea/sdk`
 * camelizes responses and snakeizes request bodies, so annotate an
 * SDK-facing value with `Camelize<OrderParameters>` (exported by
 * `@opensea/sdk`) or the matching `@opensea/sdk` type rather than with
 * `OrderParameters`.
 */
export type OrderParameters = Schemas["OrderParameters"]

/**
 * Wire shape, snake_case as the API sends and accepts it. `@opensea/sdk`
 * camelizes responses and snakeizes request bodies, so annotate an
 * SDK-facing value with `Camelize<OverviewMetadataRequest>` (exported by
 * `@opensea/sdk`) or the matching `@opensea/sdk` type rather than with
 * `OverviewMetadataRequest`.
 */
export type OverviewMetadataRequest = Schemas["OverviewMetadataRequest"]

/**
 * Wire shape, snake_case as the API sends and accepts it. `@opensea/sdk`
 * camelizes responses and snakeizes request bodies, so annotate an
 * SDK-facing value with `Camelize<OverviewModuleRequest>` (exported by
 * `@opensea/sdk`) or the matching `@opensea/sdk` type rather than with
 * `OverviewModuleRequest`.
 */
export type OverviewModuleRequest = Schemas["OverviewModuleRequest"]

/**
 * Wire shape, snake_case as the API sends and accepts it. `@opensea/sdk`
 * camelizes responses and snakeizes request bodies, so annotate an
 * SDK-facing value with `Camelize<Owner>` (exported by
 * `@opensea/sdk`) or the matching `@opensea/sdk` type rather than with
 * `Owner`.
 */
export type Owner = Schemas["Owner"]

/**
 * Wire shape, snake_case as the API sends and accepts it. `@opensea/sdk`
 * camelizes responses and snakeizes request bodies, so annotate an
 * SDK-facing value with `Camelize<OwnersPaginatedResponse>` (exported by
 * `@opensea/sdk`) or the matching `@opensea/sdk` type rather than with
 * `OwnersPaginatedResponse`.
 */
export type OwnersPaginatedResponse = Schemas["OwnersPaginatedResponse"]

/**
 * Wire shape, snake_case as the API sends and accepts it. `@opensea/sdk`
 * camelizes responses and snakeizes request bodies, so annotate an
 * SDK-facing value with `Camelize<Parameters>` (exported by
 * `@opensea/sdk`) or the matching `@opensea/sdk` type rather than with
 * `Parameters`.
 */
export type Parameters = Schemas["Parameters"]

/**
 * Wire shape, snake_case as the API sends and accepts it. `@opensea/sdk`
 * camelizes responses and snakeizes request bodies, so annotate an
 * SDK-facing value with `Camelize<PartialParameters>` (exported by
 * `@opensea/sdk`) or the matching `@opensea/sdk` type rather than with
 * `PartialParameters`.
 */
export type PartialParameters = Schemas["PartialParameters"]

/**
 * Wire shape, snake_case as the API sends and accepts it. `@opensea/sdk`
 * camelizes responses and snakeizes request bodies, so annotate an
 * SDK-facing value with `Camelize<Payment>` (exported by
 * `@opensea/sdk`) or the matching `@opensea/sdk` type rather than with
 * `Payment`.
 */
export type Payment = Schemas["Payment"]

/**
 * Wire shape, snake_case as the API sends and accepts it. `@opensea/sdk`
 * camelizes responses and snakeizes request bodies, so annotate an
 * SDK-facing value with `Camelize<PaymentToken>` (exported by
 * `@opensea/sdk`) or the matching `@opensea/sdk` type rather than with
 * `PaymentToken`.
 */
export type PaymentToken = Schemas["PaymentToken"]

/**
 * Wire shape, snake_case as the API sends and accepts it. `@opensea/sdk`
 * camelizes responses and snakeizes request bodies, so annotate an
 * SDK-facing value with `Camelize<PerpetualFutureBaseResponse>` (exported by
 * `@opensea/sdk`) or the matching `@opensea/sdk` type rather than with
 * `PerpetualFutureBaseResponse`.
 */
export type PerpetualFutureBaseResponse = Schemas["PerpetualFutureBaseResponse"]

/**
 * Wire shape, snake_case as the API sends and accepts it. `@opensea/sdk`
 * camelizes responses and snakeizes request bodies, so annotate an
 * SDK-facing value with `Camelize<PerpetualFuturePaginatedResponse>` (exported by
 * `@opensea/sdk`) or the matching `@opensea/sdk` type rather than with
 * `PerpetualFuturePaginatedResponse`.
 */
export type PerpetualFuturePaginatedResponse = Schemas["PerpetualFuturePaginatedResponse"]

/**
 * Wire shape, snake_case as the API sends and accepts it. `@opensea/sdk`
 * camelizes responses and snakeizes request bodies, so annotate an
 * SDK-facing value with `Camelize<PerpetualFutureResponse>` (exported by
 * `@opensea/sdk`) or the matching `@opensea/sdk` type rather than with
 * `PerpetualFutureResponse`.
 */
export type PerpetualFutureResponse = Schemas["PerpetualFutureResponse"]

/**
 * Wire shape, snake_case as the API sends and accepts it. `@opensea/sdk`
 * camelizes responses and snakeizes request bodies, so annotate an
 * SDK-facing value with `Camelize<PerpetualFutureStatsResponse>` (exported by
 * `@opensea/sdk`) or the matching `@opensea/sdk` type rather than with
 * `PerpetualFutureStatsResponse`.
 */
export type PerpetualFutureStatsResponse = Schemas["PerpetualFutureStatsResponse"]

/**
 * Wire shape, snake_case as the API sends and accepts it. `@opensea/sdk`
 * camelizes responses and snakeizes request bodies, so annotate an
 * SDK-facing value with `Camelize<PortfolioHistoryDataPoint>` (exported by
 * `@opensea/sdk`) or the matching `@opensea/sdk` type rather than with
 * `PortfolioHistoryDataPoint`.
 */
export type PortfolioHistoryDataPoint = Schemas["PortfolioHistoryDataPoint"]

/**
 * Wire shape, snake_case as the API sends and accepts it. `@opensea/sdk`
 * camelizes responses and snakeizes request bodies, so annotate an
 * SDK-facing value with `Camelize<PortfolioHistoryResponse>` (exported by
 * `@opensea/sdk`) or the matching `@opensea/sdk` type rather than with
 * `PortfolioHistoryResponse`.
 */
export type PortfolioHistoryResponse = Schemas["PortfolioHistoryResponse"]

/**
 * Wire shape, snake_case as the API sends and accepts it. `@opensea/sdk`
 * camelizes responses and snakeizes request bodies, so annotate an
 * SDK-facing value with `Camelize<PortfolioStatsResponse>` (exported by
 * `@opensea/sdk`) or the matching `@opensea/sdk` type rather than with
 * `PortfolioStatsResponse`.
 */
export type PortfolioStatsResponse = Schemas["PortfolioStatsResponse"]

/**
 * Wire shape, snake_case as the API sends and accepts it. `@opensea/sdk`
 * camelizes responses and snakeizes request bodies, so annotate an
 * SDK-facing value with `Camelize<PositionTokenTransferResponse>` (exported by
 * `@opensea/sdk`) or the matching `@opensea/sdk` type rather than with
 * `PositionTokenTransferResponse`.
 */
export type PositionTokenTransferResponse = Schemas["PositionTokenTransferResponse"]

/**
 * Wire shape, snake_case as the API sends and accepts it. `@opensea/sdk`
 * camelizes responses and snakeizes request bodies, so annotate an
 * SDK-facing value with `Camelize<PositionTokenTransfersResponse>` (exported by
 * `@opensea/sdk`) or the matching `@opensea/sdk` type rather than with
 * `PositionTokenTransfersResponse`.
 */
export type PositionTokenTransfersResponse = Schemas["PositionTokenTransfersResponse"]

/**
 * Wire shape, snake_case as the API sends and accepts it. `@opensea/sdk`
 * camelizes responses and snakeizes request bodies, so annotate an
 * SDK-facing value with `Camelize<PrerevealDropItemResponse>` (exported by
 * `@opensea/sdk`) or the matching `@opensea/sdk` type rather than with
 * `PrerevealDropItemResponse`.
 */
export type PrerevealDropItemResponse = Schemas["PrerevealDropItemResponse"]

/**
 * Wire shape, snake_case as the API sends and accepts it. `@opensea/sdk`
 * camelizes responses and snakeizes request bodies, so annotate an
 * SDK-facing value with `Camelize<Price>` (exported by
 * `@opensea/sdk`) or the matching `@opensea/sdk` type rather than with
 * `Price`.
 */
export type Price = Schemas["Price"]

/**
 * Wire shape, snake_case as the API sends and accepts it. `@opensea/sdk`
 * camelizes responses and snakeizes request bodies, so annotate an
 * SDK-facing value with `Camelize<PriceHistoryPointResponse>` (exported by
 * `@opensea/sdk`) or the matching `@opensea/sdk` type rather than with
 * `PriceHistoryPointResponse`.
 */
export type PriceHistoryPointResponse = Schemas["PriceHistoryPointResponse"]

/**
 * Wire shape, snake_case as the API sends and accepts it. `@opensea/sdk`
 * camelizes responses and snakeizes request bodies, so annotate an
 * SDK-facing value with `Camelize<PriceHistoryResponse>` (exported by
 * `@opensea/sdk`) or the matching `@opensea/sdk` type rather than with
 * `PriceHistoryResponse`.
 */
export type PriceHistoryResponse = Schemas["PriceHistoryResponse"]

/**
 * Wire shape, snake_case as the API sends and accepts it. `@opensea/sdk`
 * camelizes responses and snakeizes request bodies, so annotate an
 * SDK-facing value with `Camelize<PriceResponse>` (exported by
 * `@opensea/sdk`) or the matching `@opensea/sdk` type rather than with
 * `PriceResponse`.
 */
export type PriceResponse = Schemas["PriceResponse"]

/**
 * Wire shape, snake_case as the API sends and accepts it. `@opensea/sdk`
 * camelizes responses and snakeizes request bodies, so annotate an
 * SDK-facing value with `Camelize<PricingCurrencies>` (exported by
 * `@opensea/sdk`) or the matching `@opensea/sdk` type rather than with
 * `PricingCurrencies`.
 */
export type PricingCurrencies = Schemas["PricingCurrencies"]

/**
 * Wire shape, snake_case as the API sends and accepts it. `@opensea/sdk`
 * camelizes responses and snakeizes request bodies, so annotate an
 * SDK-facing value with `Camelize<ProfileCollectionResponse>` (exported by
 * `@opensea/sdk`) or the matching `@opensea/sdk` type rather than with
 * `ProfileCollectionResponse`.
 */
export type ProfileCollectionResponse = Schemas["ProfileCollectionResponse"]

/**
 * Wire shape, snake_case as the API sends and accepts it. `@opensea/sdk`
 * camelizes responses and snakeizes request bodies, so annotate an
 * SDK-facing value with `Camelize<ProfileCollectionsResponse>` (exported by
 * `@opensea/sdk`) or the matching `@opensea/sdk` type rather than with
 * `ProfileCollectionsResponse`.
 */
export type ProfileCollectionsResponse = Schemas["ProfileCollectionsResponse"]

/**
 * Wire shape, snake_case as the API sends and accepts it. `@opensea/sdk`
 * camelizes responses and snakeizes request bodies, so annotate an
 * SDK-facing value with `Camelize<ProfileRelationshipResponse>` (exported by
 * `@opensea/sdk`) or the matching `@opensea/sdk` type rather than with
 * `ProfileRelationshipResponse`.
 */
export type ProfileRelationshipResponse = Schemas["ProfileRelationshipResponse"]

/**
 * Wire shape, snake_case as the API sends and accepts it. `@opensea/sdk`
 * camelizes responses and snakeizes request bodies, so annotate an
 * SDK-facing value with `Camelize<ProfileShelfActionResponse>` (exported by
 * `@opensea/sdk`) or the matching `@opensea/sdk` type rather than with
 * `ProfileShelfActionResponse`.
 */
export type ProfileShelfActionResponse = Schemas["ProfileShelfActionResponse"]

/**
 * Wire shape, snake_case as the API sends and accepts it. `@opensea/sdk`
 * camelizes responses and snakeizes request bodies, so annotate an
 * SDK-facing value with `Camelize<ProfileShelfItemIdentifierResponse>` (exported by
 * `@opensea/sdk`) or the matching `@opensea/sdk` type rather than with
 * `ProfileShelfItemIdentifierResponse`.
 */
export type ProfileShelfItemIdentifierResponse = Schemas["ProfileShelfItemIdentifierResponse"]

/**
 * Wire shape, snake_case as the API sends and accepts it. `@opensea/sdk`
 * camelizes responses and snakeizes request bodies, so annotate an
 * SDK-facing value with `Camelize<ProfileShelfItemMetadataResponse>` (exported by
 * `@opensea/sdk`) or the matching `@opensea/sdk` type rather than with
 * `ProfileShelfItemMetadataResponse`.
 */
export type ProfileShelfItemMetadataResponse = Schemas["ProfileShelfItemMetadataResponse"]

/**
 * Wire shape, snake_case as the API sends and accepts it. `@opensea/sdk`
 * camelizes responses and snakeizes request bodies, so annotate an
 * SDK-facing value with `Camelize<ProfileShelfItemRequest>` (exported by
 * `@opensea/sdk`) or the matching `@opensea/sdk` type rather than with
 * `ProfileShelfItemRequest`.
 */
export type ProfileShelfItemRequest = Schemas["ProfileShelfItemRequest"]

/**
 * Wire shape, snake_case as the API sends and accepts it. `@opensea/sdk`
 * camelizes responses and snakeizes request bodies, so annotate an
 * SDK-facing value with `Camelize<ProfileShelfItemUpdateRequest>` (exported by
 * `@opensea/sdk`) or the matching `@opensea/sdk` type rather than with
 * `ProfileShelfItemUpdateRequest`.
 */
export type ProfileShelfItemUpdateRequest = Schemas["ProfileShelfItemUpdateRequest"]

/**
 * Wire shape, snake_case as the API sends and accepts it. `@opensea/sdk`
 * camelizes responses and snakeizes request bodies, so annotate an
 * SDK-facing value with `Camelize<ProfileShelfResponse>` (exported by
 * `@opensea/sdk`) or the matching `@opensea/sdk` type rather than with
 * `ProfileShelfResponse`.
 */
export type ProfileShelfResponse = Schemas["ProfileShelfResponse"]

/**
 * Wire shape, snake_case as the API sends and accepts it. `@opensea/sdk`
 * camelizes responses and snakeizes request bodies, so annotate an
 * SDK-facing value with `Camelize<ProfileSocialMutationResponse>` (exported by
 * `@opensea/sdk`) or the matching `@opensea/sdk` type rather than with
 * `ProfileSocialMutationResponse`.
 */
export type ProfileSocialMutationResponse = Schemas["ProfileSocialMutationResponse"]

/**
 * Wire shape, snake_case as the API sends and accepts it. `@opensea/sdk`
 * camelizes responses and snakeizes request bodies, so annotate an
 * SDK-facing value with `Camelize<ProposeAgentRelationshipRequestBody>` (exported by
 * `@opensea/sdk`) or the matching `@opensea/sdk` type rather than with
 * `ProposeAgentRelationshipRequestBody`.
 */
export type ProposeAgentRelationshipRequestBody = Schemas["ProposeAgentRelationshipRequestBody"]

/**
 * Wire shape, snake_case as the API sends and accepts it. `@opensea/sdk`
 * camelizes responses and snakeizes request bodies, so annotate an
 * SDK-facing value with `Camelize<ProtocolData>` (exported by
 * `@opensea/sdk`) or the matching `@opensea/sdk` type rather than with
 * `ProtocolData`.
 */
export type ProtocolData = Schemas["ProtocolData"]

/**
 * Wire shape, snake_case as the API sends and accepts it. `@opensea/sdk`
 * camelizes responses and snakeizes request bodies, so annotate an
 * SDK-facing value with `Camelize<Rarity>` (exported by
 * `@opensea/sdk`) or the matching `@opensea/sdk` type rather than with
 * `Rarity`.
 */
export type Rarity = Schemas["Rarity"]

/**
 * Wire shape, snake_case as the API sends and accepts it. `@opensea/sdk`
 * camelizes responses and snakeizes request bodies, so annotate an
 * SDK-facing value with `Camelize<RateLimitsResponse>` (exported by
 * `@opensea/sdk`) or the matching `@opensea/sdk` type rather than with
 * `RateLimitsResponse`.
 */
export type RateLimitsResponse = Schemas["RateLimitsResponse"]

/**
 * Wire shape, snake_case as the API sends and accepts it. `@opensea/sdk`
 * camelizes responses and snakeizes request bodies, so annotate an
 * SDK-facing value with `Camelize<RegisteredToolResponse>` (exported by
 * `@opensea/sdk`) or the matching `@opensea/sdk` type rather than with
 * `RegisteredToolResponse`.
 */
export type RegisteredToolResponse = Schemas["RegisteredToolResponse"]

/**
 * Wire shape, snake_case as the API sends and accepts it. `@opensea/sdk`
 * camelizes responses and snakeizes request bodies, so annotate an
 * SDK-facing value with `Camelize<ReorderProfileShelvesRequest>` (exported by
 * `@opensea/sdk`) or the matching `@opensea/sdk` type rather than with
 * `ReorderProfileShelvesRequest`.
 */
export type ReorderProfileShelvesRequest = Schemas["ReorderProfileShelvesRequest"]

/**
 * Wire shape, snake_case as the API sends and accepts it. `@opensea/sdk`
 * camelizes responses and snakeizes request bodies, so annotate an
 * SDK-facing value with `Camelize<SaleEvent>` (exported by
 * `@opensea/sdk`) or the matching `@opensea/sdk` type rather than with
 * `SaleEvent`.
 */
export type SaleEvent = Schemas["SaleEvent"]

/**
 * Wire shape, snake_case as the API sends and accepts it. `@opensea/sdk`
 * camelizes responses and snakeizes request bodies, so annotate an
 * SDK-facing value with `Camelize<SaveDropEditsPriceRequest>` (exported by
 * `@opensea/sdk`) or the matching `@opensea/sdk` type rather than with
 * `SaveDropEditsPriceRequest`.
 */
export type SaveDropEditsPriceRequest = Schemas["SaveDropEditsPriceRequest"]

/**
 * Wire shape, snake_case as the API sends and accepts it. `@opensea/sdk`
 * camelizes responses and snakeizes request bodies, so annotate an
 * SDK-facing value with `Camelize<SaveDropEditsRequest>` (exported by
 * `@opensea/sdk`) or the matching `@opensea/sdk` type rather than with
 * `SaveDropEditsRequest`.
 */
export type SaveDropEditsRequest = Schemas["SaveDropEditsRequest"]

/**
 * Wire shape, snake_case as the API sends and accepts it. `@opensea/sdk`
 * camelizes responses and snakeizes request bodies, so annotate an
 * SDK-facing value with `Camelize<SaveDropEditsStageRequest>` (exported by
 * `@opensea/sdk`) or the matching `@opensea/sdk` type rather than with
 * `SaveDropEditsStageRequest`.
 */
export type SaveDropEditsStageRequest = Schemas["SaveDropEditsStageRequest"]

/**
 * Wire shape, snake_case as the API sends and accepts it. `@opensea/sdk`
 * camelizes responses and snakeizes request bodies, so annotate an
 * SDK-facing value with `Camelize<SaveDropItemMediaRequest>` (exported by
 * `@opensea/sdk`) or the matching `@opensea/sdk` type rather than with
 * `SaveDropItemMediaRequest`.
 */
export type SaveDropItemMediaRequest = Schemas["SaveDropItemMediaRequest"]

/**
 * Wire shape, snake_case as the API sends and accepts it. `@opensea/sdk`
 * camelizes responses and snakeizes request bodies, so annotate an
 * SDK-facing value with `Camelize<SaveDropItemMediaResponse>` (exported by
 * `@opensea/sdk`) or the matching `@opensea/sdk` type rather than with
 * `SaveDropItemMediaResponse`.
 */
export type SaveDropItemMediaResponse = Schemas["SaveDropItemMediaResponse"]

/**
 * Wire shape, snake_case as the API sends and accepts it. `@opensea/sdk`
 * camelizes responses and snakeizes request bodies, so annotate an
 * SDK-facing value with `Camelize<SaveDropResponse>` (exported by
 * `@opensea/sdk`) or the matching `@opensea/sdk` type rather than with
 * `SaveDropResponse`.
 */
export type SaveDropResponse = Schemas["SaveDropResponse"]

/**
 * Wire shape, snake_case as the API sends and accepts it. `@opensea/sdk`
 * camelizes responses and snakeizes request bodies, so annotate an
 * SDK-facing value with `Camelize<SavePrerevealDropItemRequest>` (exported by
 * `@opensea/sdk`) or the matching `@opensea/sdk` type rather than with
 * `SavePrerevealDropItemRequest`.
 */
export type SavePrerevealDropItemRequest = Schemas["SavePrerevealDropItemRequest"]

/**
 * Wire shape, snake_case as the API sends and accepts it. `@opensea/sdk`
 * camelizes responses and snakeizes request bodies, so annotate an
 * SDK-facing value with `Camelize<SaveSelfMintDropItemRequest>` (exported by
 * `@opensea/sdk`) or the matching `@opensea/sdk` type rather than with
 * `SaveSelfMintDropItemRequest`.
 */
export type SaveSelfMintDropItemRequest = Schemas["SaveSelfMintDropItemRequest"]

/**
 * Wire shape, snake_case as the API sends and accepts it. `@opensea/sdk`
 * camelizes responses and snakeizes request bodies, so annotate an
 * SDK-facing value with `Camelize<SavedToolActionResponse>` (exported by
 * `@opensea/sdk`) or the matching `@opensea/sdk` type rather than with
 * `SavedToolActionResponse`.
 */
export type SavedToolActionResponse = Schemas["SavedToolActionResponse"]

/**
 * Wire shape, snake_case as the API sends and accepts it. `@opensea/sdk`
 * camelizes responses and snakeizes request bodies, so annotate an
 * SDK-facing value with `Camelize<SavedToolRequest>` (exported by
 * `@opensea/sdk`) or the matching `@opensea/sdk` type rather than with
 * `SavedToolRequest`.
 */
export type SavedToolRequest = Schemas["SavedToolRequest"]

/**
 * Wire shape, snake_case as the API sends and accepts it. `@opensea/sdk`
 * camelizes responses and snakeizes request bodies, so annotate an
 * SDK-facing value with `Camelize<SavedToolResponse>` (exported by
 * `@opensea/sdk`) or the matching `@opensea/sdk` type rather than with
 * `SavedToolResponse`.
 */
export type SavedToolResponse = Schemas["SavedToolResponse"]

/**
 * Wire shape, snake_case as the API sends and accepts it. `@opensea/sdk`
 * camelizes responses and snakeizes request bodies, so annotate an
 * SDK-facing value with `Camelize<SavedToolsPaginatedResponse>` (exported by
 * `@opensea/sdk`) or the matching `@opensea/sdk` type rather than with
 * `SavedToolsPaginatedResponse`.
 */
export type SavedToolsPaginatedResponse = Schemas["SavedToolsPaginatedResponse"]

/**
 * Wire shape, snake_case as the API sends and accepts it. `@opensea/sdk`
 * camelizes responses and snakeizes request bodies, so annotate an
 * SDK-facing value with `Camelize<SeaportCall>` (exported by
 * `@opensea/sdk`) or the matching `@opensea/sdk` type rather than with
 * `SeaportCall`.
 */
export type SeaportCall = Schemas["SeaportCall"]

/**
 * Wire shape, snake_case as the API sends and accepts it. `@opensea/sdk`
 * camelizes responses and snakeizes request bodies, so annotate an
 * SDK-facing value with `Camelize<SeaportParameters>` (exported by
 * `@opensea/sdk`) or the matching `@opensea/sdk` type rather than with
 * `SeaportParameters`.
 */
export type SeaportParameters = Schemas["SeaportParameters"]

/**
 * Wire shape, snake_case as the API sends and accepts it. `@opensea/sdk`
 * camelizes responses and snakeizes request bodies, so annotate an
 * SDK-facing value with `Camelize<SeaportProtocolDataModel>` (exported by
 * `@opensea/sdk`) or the matching `@opensea/sdk` type rather than with
 * `SeaportProtocolDataModel`.
 */
export type SeaportProtocolDataModel = Schemas["SeaportProtocolDataModel"]

/**
 * Wire shape, snake_case as the API sends and accepts it. `@opensea/sdk`
 * camelizes responses and snakeizes request bodies, so annotate an
 * SDK-facing value with `Camelize<SeaportRequest>` (exported by
 * `@opensea/sdk`) or the matching `@opensea/sdk` type rather than with
 * `SeaportRequest`.
 */
export type SeaportRequest = Schemas["SeaportRequest"]

/**
 * Wire shape, snake_case as the API sends and accepts it. `@opensea/sdk`
 * camelizes responses and snakeizes request bodies, so annotate an
 * SDK-facing value with `Camelize<SearchResponse>` (exported by
 * `@opensea/sdk`) or the matching `@opensea/sdk` type rather than with
 * `SearchResponse`.
 */
export type SearchResponse = Schemas["SearchResponse"]

/**
 * Wire shape, snake_case as the API sends and accepts it. `@opensea/sdk`
 * camelizes responses and snakeizes request bodies, so annotate an
 * SDK-facing value with `Camelize<SearchResultResponse>` (exported by
 * `@opensea/sdk`) or the matching `@opensea/sdk` type rather than with
 * `SearchResultResponse`.
 */
export type SearchResultResponse = Schemas["SearchResultResponse"]

/**
 * Wire shape, snake_case as the API sends and accepts it. `@opensea/sdk`
 * camelizes responses and snakeizes request bodies, so annotate an
 * SDK-facing value with `Camelize<SelfMintDropItemResponse>` (exported by
 * `@opensea/sdk`) or the matching `@opensea/sdk` type rather than with
 * `SelfMintDropItemResponse`.
 */
export type SelfMintDropItemResponse = Schemas["SelfMintDropItemResponse"]

/**
 * Wire shape, snake_case as the API sends and accepts it. `@opensea/sdk`
 * camelizes responses and snakeizes request bodies, so annotate an
 * SDK-facing value with `Camelize<SelfMintDropItemTraitRequest>` (exported by
 * `@opensea/sdk`) or the matching `@opensea/sdk` type rather than with
 * `SelfMintDropItemTraitRequest`.
 */
export type SelfMintDropItemTraitRequest = Schemas["SelfMintDropItemTraitRequest"]

/**
 * Wire shape, snake_case as the API sends and accepts it. `@opensea/sdk`
 * camelizes responses and snakeizes request bodies, so annotate an
 * SDK-facing value with `Camelize<SetCollectionVisibilityRequest>` (exported by
 * `@opensea/sdk`) or the matching `@opensea/sdk` type rather than with
 * `SetCollectionVisibilityRequest`.
 */
export type SetCollectionVisibilityRequest = Schemas["SetCollectionVisibilityRequest"]

/**
 * Wire shape, snake_case as the API sends and accepts it. `@opensea/sdk`
 * camelizes responses and snakeizes request bodies, so annotate an
 * SDK-facing value with `Camelize<SetCollectionVisibilityResponse>` (exported by
 * `@opensea/sdk`) or the matching `@opensea/sdk` type rather than with
 * `SetCollectionVisibilityResponse`.
 */
export type SetCollectionVisibilityResponse = Schemas["SetCollectionVisibilityResponse"]

/**
 * Wire shape, snake_case as the API sends and accepts it. `@opensea/sdk`
 * camelizes responses and snakeizes request bodies, so annotate an
 * SDK-facing value with `Camelize<SetNftPfpRequest>` (exported by
 * `@opensea/sdk`) or the matching `@opensea/sdk` type rather than with
 * `SetNftPfpRequest`.
 */
export type SetNftPfpRequest = Schemas["SetNftPfpRequest"]

/**
 * Wire shape, snake_case as the API sends and accepts it. `@opensea/sdk`
 * camelizes responses and snakeizes request bodies, so annotate an
 * SDK-facing value with `Camelize<SocialMediaAccount>` (exported by
 * `@opensea/sdk`) or the matching `@opensea/sdk` type rather than with
 * `SocialMediaAccount`.
 */
export type SocialMediaAccount = Schemas["SocialMediaAccount"]

/**
 * Wire shape, snake_case as the API sends and accepts it. `@opensea/sdk`
 * camelizes responses and snakeizes request bodies, so annotate an
 * SDK-facing value with `Camelize<SocialProfilePageResponse>` (exported by
 * `@opensea/sdk`) or the matching `@opensea/sdk` type rather than with
 * `SocialProfilePageResponse`.
 */
export type SocialProfilePageResponse = Schemas["SocialProfilePageResponse"]

/**
 * Wire shape, snake_case as the API sends and accepts it. `@opensea/sdk`
 * camelizes responses and snakeizes request bodies, so annotate an
 * SDK-facing value with `Camelize<SocialProfileSummaryResponse>` (exported by
 * `@opensea/sdk`) or the matching `@opensea/sdk` type rather than with
 * `SocialProfileSummaryResponse`.
 */
export type SocialProfileSummaryResponse = Schemas["SocialProfileSummaryResponse"]

/**
 * Wire shape, snake_case as the API sends and accepts it. `@opensea/sdk`
 * camelizes responses and snakeizes request bodies, so annotate an
 * SDK-facing value with `Camelize<SubscriptionInfoResponse>` (exported by
 * `@opensea/sdk`) or the matching `@opensea/sdk` type rather than with
 * `SubscriptionInfoResponse`.
 */
export type SubscriptionInfoResponse = Schemas["SubscriptionInfoResponse"]

/**
 * Wire shape, snake_case as the API sends and accepts it. `@opensea/sdk`
 * camelizes responses and snakeizes request bodies, so annotate an
 * SDK-facing value with `Camelize<SvmInstructionAccountResponse>` (exported by
 * `@opensea/sdk`) or the matching `@opensea/sdk` type rather than with
 * `SvmInstructionAccountResponse`.
 */
export type SvmInstructionAccountResponse = Schemas["SvmInstructionAccountResponse"]

/**
 * Wire shape, snake_case as the API sends and accepts it. `@opensea/sdk`
 * camelizes responses and snakeizes request bodies, so annotate an
 * SDK-facing value with `Camelize<SvmInstructionResponse>` (exported by
 * `@opensea/sdk`) or the matching `@opensea/sdk` type rather than with
 * `SvmInstructionResponse`.
 */
export type SvmInstructionResponse = Schemas["SvmInstructionResponse"]

/**
 * Wire shape, snake_case as the API sends and accepts it. `@opensea/sdk`
 * camelizes responses and snakeizes request bodies, so annotate an
 * SDK-facing value with `Camelize<SvmOrderIdentity>` (exported by
 * `@opensea/sdk`) or the matching `@opensea/sdk` type rather than with
 * `SvmOrderIdentity`.
 */
export type SvmOrderIdentity = Schemas["SvmOrderIdentity"]

/**
 * Wire shape, snake_case as the API sends and accepts it. `@opensea/sdk`
 * camelizes responses and snakeizes request bodies, so annotate an
 * SDK-facing value with `Camelize<SvmTransactionDetailsResponse>` (exported by
 * `@opensea/sdk`) or the matching `@opensea/sdk` type rather than with
 * `SvmTransactionDetailsResponse`.
 */
export type SvmTransactionDetailsResponse = Schemas["SvmTransactionDetailsResponse"]

/**
 * Wire shape, snake_case as the API sends and accepts it. `@opensea/sdk`
 * camelizes responses and snakeizes request bodies, so annotate an
 * SDK-facing value with `Camelize<SwapAssetInput>` (exported by
 * `@opensea/sdk`) or the matching `@opensea/sdk` type rather than with
 * `SwapAssetInput`.
 */
export type SwapAssetInput = Schemas["SwapAssetInput"]

/**
 * Wire shape, snake_case as the API sends and accepts it. `@opensea/sdk`
 * camelizes responses and snakeizes request bodies, so annotate an
 * SDK-facing value with `Camelize<SwapCostResponse>` (exported by
 * `@opensea/sdk`) or the matching `@opensea/sdk` type rather than with
 * `SwapCostResponse`.
 */
export type SwapCostResponse = Schemas["SwapCostResponse"]

/**
 * Wire shape, snake_case as the API sends and accepts it. `@opensea/sdk`
 * camelizes responses and snakeizes request bodies, so annotate an
 * SDK-facing value with `Camelize<SwapExecuteRequest>` (exported by
 * `@opensea/sdk`) or the matching `@opensea/sdk` type rather than with
 * `SwapExecuteRequest`.
 */
export type SwapExecuteRequest = Schemas["SwapExecuteRequest"]

/**
 * Wire shape, snake_case as the API sends and accepts it. `@opensea/sdk`
 * camelizes responses and snakeizes request bodies, so annotate an
 * SDK-facing value with `Camelize<SwapExecuteResponse>` (exported by
 * `@opensea/sdk`) or the matching `@opensea/sdk` type rather than with
 * `SwapExecuteResponse`.
 */
export type SwapExecuteResponse = Schemas["SwapExecuteResponse"]

/**
 * Wire shape, snake_case as the API sends and accepts it. `@opensea/sdk`
 * camelizes responses and snakeizes request bodies, so annotate an
 * SDK-facing value with `Camelize<SwapPriceImpact>` (exported by
 * `@opensea/sdk`) or the matching `@opensea/sdk` type rather than with
 * `SwapPriceImpact`.
 */
export type SwapPriceImpact = Schemas["SwapPriceImpact"]

/**
 * Wire shape, snake_case as the API sends and accepts it. `@opensea/sdk`
 * camelizes responses and snakeizes request bodies, so annotate an
 * SDK-facing value with `Camelize<SwapQuoteDetails>` (exported by
 * `@opensea/sdk`) or the matching `@opensea/sdk` type rather than with
 * `SwapQuoteDetails`.
 */
export type SwapQuoteDetails = Schemas["SwapQuoteDetails"]

/**
 * Wire shape, snake_case as the API sends and accepts it. `@opensea/sdk`
 * camelizes responses and snakeizes request bodies, so annotate an
 * SDK-facing value with `Camelize<SwapQuoteInput>` (exported by
 * `@opensea/sdk`) or the matching `@opensea/sdk` type rather than with
 * `SwapQuoteInput`.
 */
export type SwapQuoteInput = Schemas["SwapQuoteInput"]

/**
 * Wire shape, snake_case as the API sends and accepts it. `@opensea/sdk`
 * camelizes responses and snakeizes request bodies, so annotate an
 * SDK-facing value with `Camelize<SwapQuoteResponse>` (exported by
 * `@opensea/sdk`) or the matching `@opensea/sdk` type rather than with
 * `SwapQuoteResponse`.
 */
export type SwapQuoteResponse = Schemas["SwapQuoteResponse"]

/**
 * Wire shape, snake_case as the API sends and accepts it. `@opensea/sdk`
 * camelizes responses and snakeizes request bodies, so annotate an
 * SDK-facing value with `Camelize<SwapRouteErrorResponse>` (exported by
 * `@opensea/sdk`) or the matching `@opensea/sdk` type rather than with
 * `SwapRouteErrorResponse`.
 */
export type SwapRouteErrorResponse = Schemas["SwapRouteErrorResponse"]

/**
 * Wire shape, snake_case as the API sends and accepts it. `@opensea/sdk`
 * camelizes responses and snakeizes request bodies, so annotate an
 * SDK-facing value with `Camelize<SwapTransactionResponse>` (exported by
 * `@opensea/sdk`) or the matching `@opensea/sdk` type rather than with
 * `SwapTransactionResponse`.
 */
export type SwapTransactionResponse = Schemas["SwapTransactionResponse"]

/**
 * Wire shape, snake_case as the API sends and accepts it. `@opensea/sdk`
 * camelizes responses and snakeizes request bodies, so annotate an
 * SDK-facing value with `Camelize<SweepCollectionRequest>` (exported by
 * `@opensea/sdk`) or the matching `@opensea/sdk` type rather than with
 * `SweepCollectionRequest`.
 */
export type SweepCollectionRequest = Schemas["SweepCollectionRequest"]

/**
 * Wire shape, snake_case as the API sends and accepts it. `@opensea/sdk`
 * camelizes responses and snakeizes request bodies, so annotate an
 * SDK-facing value with `Camelize<SweepCollectionResponse>` (exported by
 * `@opensea/sdk`) or the matching `@opensea/sdk` type rather than with
 * `SweepCollectionResponse`.
 */
export type SweepCollectionResponse = Schemas["SweepCollectionResponse"]

/**
 * Wire shape, snake_case as the API sends and accepts it. `@opensea/sdk`
 * camelizes responses and snakeizes request bodies, so annotate an
 * SDK-facing value with `Camelize<SweepError>` (exported by
 * `@opensea/sdk`) or the matching `@opensea/sdk` type rather than with
 * `SweepError`.
 */
export type SweepError = Schemas["SweepError"]

/**
 * Wire shape, snake_case as the API sends and accepts it. `@opensea/sdk`
 * camelizes responses and snakeizes request bodies, so annotate an
 * SDK-facing value with `Camelize<TeamBlockModuleRequest>` (exported by
 * `@opensea/sdk`) or the matching `@opensea/sdk` type rather than with
 * `TeamBlockModuleRequest`.
 */
export type TeamBlockModuleRequest = Schemas["TeamBlockModuleRequest"]

/**
 * Wire shape, snake_case as the API sends and accepts it. `@opensea/sdk`
 * camelizes responses and snakeizes request bodies, so annotate an
 * SDK-facing value with `Camelize<TeamSectionRequest>` (exported by
 * `@opensea/sdk`) or the matching `@opensea/sdk` type rather than with
 * `TeamSectionRequest`.
 */
export type TeamSectionRequest = Schemas["TeamSectionRequest"]

/**
 * Wire shape, snake_case as the API sends and accepts it. `@opensea/sdk`
 * camelizes responses and snakeizes request bodies, so annotate an
 * SDK-facing value with `Camelize<TokenAccountActivityPaginatedResponse>` (exported by
 * `@opensea/sdk`) or the matching `@opensea/sdk` type rather than with
 * `TokenAccountActivityPaginatedResponse`.
 */
export type TokenAccountActivityPaginatedResponse = Schemas["TokenAccountActivityPaginatedResponse"]

/**
 * Wire shape, snake_case as the API sends and accepts it. `@opensea/sdk`
 * camelizes responses and snakeizes request bodies, so annotate an
 * SDK-facing value with `Camelize<TokenAccountActivityResponse>` (exported by
 * `@opensea/sdk`) or the matching `@opensea/sdk` type rather than with
 * `TokenAccountActivityResponse`.
 */
export type TokenAccountActivityResponse = Schemas["TokenAccountActivityResponse"]

/**
 * Wire shape, snake_case as the API sends and accepts it. `@opensea/sdk`
 * camelizes responses and snakeizes request bodies, so annotate an
 * SDK-facing value with `Camelize<TokenActivityStatsResponse>` (exported by
 * `@opensea/sdk`) or the matching `@opensea/sdk` type rather than with
 * `TokenActivityStatsResponse`.
 */
export type TokenActivityStatsResponse = Schemas["TokenActivityStatsResponse"]

/**
 * Wire shape, snake_case as the API sends and accepts it. `@opensea/sdk`
 * camelizes responses and snakeizes request bodies, so annotate an
 * SDK-facing value with `Camelize<TokenActivityWindowStatsResponse>` (exported by
 * `@opensea/sdk`) or the matching `@opensea/sdk` type rather than with
 * `TokenActivityWindowStatsResponse`.
 */
export type TokenActivityWindowStatsResponse = Schemas["TokenActivityWindowStatsResponse"]

/**
 * Wire shape, snake_case as the API sends and accepts it. `@opensea/sdk`
 * camelizes responses and snakeizes request bodies, so annotate an
 * SDK-facing value with `Camelize<TokenAmountResponse>` (exported by
 * `@opensea/sdk`) or the matching `@opensea/sdk` type rather than with
 * `TokenAmountResponse`.
 */
export type TokenAmountResponse = Schemas["TokenAmountResponse"]

/**
 * Wire shape, snake_case as the API sends and accepts it. `@opensea/sdk`
 * camelizes responses and snakeizes request bodies, so annotate an
 * SDK-facing value with `Camelize<TokenBalancePaginatedResponse>` (exported by
 * `@opensea/sdk`) or the matching `@opensea/sdk` type rather than with
 * `TokenBalancePaginatedResponse`.
 */
export type TokenBalancePaginatedResponse = Schemas["TokenBalancePaginatedResponse"]

/**
 * Wire shape, snake_case as the API sends and accepts it. `@opensea/sdk`
 * camelizes responses and snakeizes request bodies, so annotate an
 * SDK-facing value with `Camelize<TokenBalanceResponse>` (exported by
 * `@opensea/sdk`) or the matching `@opensea/sdk` type rather than with
 * `TokenBalanceResponse`.
 */
export type TokenBalanceResponse = Schemas["TokenBalanceResponse"]

/**
 * Wire shape, snake_case as the API sends and accepts it. `@opensea/sdk`
 * camelizes responses and snakeizes request bodies, so annotate an
 * SDK-facing value with `Camelize<TokenBaseResponse>` (exported by
 * `@opensea/sdk`) or the matching `@opensea/sdk` type rather than with
 * `TokenBaseResponse`.
 */
export type TokenBaseResponse = Schemas["TokenBaseResponse"]

/**
 * Wire shape, snake_case as the API sends and accepts it. `@opensea/sdk`
 * camelizes responses and snakeizes request bodies, so annotate an
 * SDK-facing value with `Camelize<TokenBatchResponse>` (exported by
 * `@opensea/sdk`) or the matching `@opensea/sdk` type rather than with
 * `TokenBatchResponse`.
 */
export type TokenBatchResponse = Schemas["TokenBatchResponse"]

/**
 * Wire shape, snake_case as the API sends and accepts it. `@opensea/sdk`
 * camelizes responses and snakeizes request bodies, so annotate an
 * SDK-facing value with `Camelize<TokenContractInput>` (exported by
 * `@opensea/sdk`) or the matching `@opensea/sdk` type rather than with
 * `TokenContractInput`.
 */
export type TokenContractInput = Schemas["TokenContractInput"]

/**
 * Wire shape, snake_case as the API sends and accepts it. `@opensea/sdk`
 * camelizes responses and snakeizes request bodies, so annotate an
 * SDK-facing value with `Camelize<TokenDetailedResponse>` (exported by
 * `@opensea/sdk`) or the matching `@opensea/sdk` type rather than with
 * `TokenDetailedResponse`.
 */
export type TokenDetailedResponse = Schemas["TokenDetailedResponse"]

/**
 * Wire shape, snake_case as the API sends and accepts it. `@opensea/sdk`
 * camelizes responses and snakeizes request bodies, so annotate an
 * SDK-facing value with `Camelize<TokenExchangeRequest>` (exported by
 * `@opensea/sdk`) or the matching `@opensea/sdk` type rather than with
 * `TokenExchangeRequest`.
 */
export type TokenExchangeRequest = Schemas["TokenExchangeRequest"]

/**
 * Wire shape, snake_case as the API sends and accepts it. `@opensea/sdk`
 * camelizes responses and snakeizes request bodies, so annotate an
 * SDK-facing value with `Camelize<TokenExchangeResponse>` (exported by
 * `@opensea/sdk`) or the matching `@opensea/sdk` type rather than with
 * `TokenExchangeResponse`.
 */
export type TokenExchangeResponse = Schemas["TokenExchangeResponse"]

/**
 * Wire shape, snake_case as the API sends and accepts it. `@opensea/sdk`
 * camelizes responses and snakeizes request bodies, so annotate an
 * SDK-facing value with `Camelize<TokenGroupCurrencyResponse>` (exported by
 * `@opensea/sdk`) or the matching `@opensea/sdk` type rather than with
 * `TokenGroupCurrencyResponse`.
 */
export type TokenGroupCurrencyResponse = Schemas["TokenGroupCurrencyResponse"]

/**
 * Wire shape, snake_case as the API sends and accepts it. `@opensea/sdk`
 * camelizes responses and snakeizes request bodies, so annotate an
 * SDK-facing value with `Camelize<TokenGroupPaginatedResponse>` (exported by
 * `@opensea/sdk`) or the matching `@opensea/sdk` type rather than with
 * `TokenGroupPaginatedResponse`.
 */
export type TokenGroupPaginatedResponse = Schemas["TokenGroupPaginatedResponse"]

/**
 * Wire shape, snake_case as the API sends and accepts it. `@opensea/sdk`
 * camelizes responses and snakeizes request bodies, so annotate an
 * SDK-facing value with `Camelize<TokenGroupResponse>` (exported by
 * `@opensea/sdk`) or the matching `@opensea/sdk` type rather than with
 * `TokenGroupResponse`.
 */
export type TokenGroupResponse = Schemas["TokenGroupResponse"]

/**
 * Wire shape, snake_case as the API sends and accepts it. `@opensea/sdk`
 * camelizes responses and snakeizes request bodies, so annotate an
 * SDK-facing value with `Camelize<TokenGroupRollingStatsResponse>` (exported by
 * `@opensea/sdk`) or the matching `@opensea/sdk` type rather than with
 * `TokenGroupRollingStatsResponse`.
 */
export type TokenGroupRollingStatsResponse = Schemas["TokenGroupRollingStatsResponse"]

/**
 * Wire shape, snake_case as the API sends and accepts it. `@opensea/sdk`
 * camelizes responses and snakeizes request bodies, so annotate an
 * SDK-facing value with `Camelize<TokenGroupSocialsResponse>` (exported by
 * `@opensea/sdk`) or the matching `@opensea/sdk` type rather than with
 * `TokenGroupSocialsResponse`.
 */
export type TokenGroupSocialsResponse = Schemas["TokenGroupSocialsResponse"]

/**
 * Wire shape, snake_case as the API sends and accepts it. `@opensea/sdk`
 * camelizes responses and snakeizes request bodies, so annotate an
 * SDK-facing value with `Camelize<TokenGroupStatsResponse>` (exported by
 * `@opensea/sdk`) or the matching `@opensea/sdk` type rather than with
 * `TokenGroupStatsResponse`.
 */
export type TokenGroupStatsResponse = Schemas["TokenGroupStatsResponse"]

/**
 * Wire shape, snake_case as the API sends and accepts it. `@opensea/sdk`
 * camelizes responses and snakeizes request bodies, so annotate an
 * SDK-facing value with `Camelize<TokenHolderDistributionResponse>` (exported by
 * `@opensea/sdk`) or the matching `@opensea/sdk` type rather than with
 * `TokenHolderDistributionResponse`.
 */
export type TokenHolderDistributionResponse = Schemas["TokenHolderDistributionResponse"]

/**
 * Wire shape, snake_case as the API sends and accepts it. `@opensea/sdk`
 * camelizes responses and snakeizes request bodies, so annotate an
 * SDK-facing value with `Camelize<TokenHolderResponse>` (exported by
 * `@opensea/sdk`) or the matching `@opensea/sdk` type rather than with
 * `TokenHolderResponse`.
 */
export type TokenHolderResponse = Schemas["TokenHolderResponse"]

/**
 * Wire shape, snake_case as the API sends and accepts it. `@opensea/sdk`
 * camelizes responses and snakeizes request bodies, so annotate an
 * SDK-facing value with `Camelize<TokenHoldersResponse>` (exported by
 * `@opensea/sdk`) or the matching `@opensea/sdk` type rather than with
 * `TokenHoldersResponse`.
 */
export type TokenHoldersResponse = Schemas["TokenHoldersResponse"]

/**
 * Wire shape, snake_case as the API sends and accepts it. `@opensea/sdk`
 * camelizes responses and snakeizes request bodies, so annotate an
 * SDK-facing value with `Camelize<TokenLiquidityPoolResponse>` (exported by
 * `@opensea/sdk`) or the matching `@opensea/sdk` type rather than with
 * `TokenLiquidityPoolResponse`.
 */
export type TokenLiquidityPoolResponse = Schemas["TokenLiquidityPoolResponse"]

/**
 * Wire shape, snake_case as the API sends and accepts it. `@opensea/sdk`
 * camelizes responses and snakeizes request bodies, so annotate an
 * SDK-facing value with `Camelize<TokenLiquidityPoolsResponse>` (exported by
 * `@opensea/sdk`) or the matching `@opensea/sdk` type rather than with
 * `TokenLiquidityPoolsResponse`.
 */
export type TokenLiquidityPoolsResponse = Schemas["TokenLiquidityPoolsResponse"]

/**
 * Wire shape, snake_case as the API sends and accepts it. `@opensea/sdk`
 * camelizes responses and snakeizes request bodies, so annotate an
 * SDK-facing value with `Camelize<TokenPaginatedResponse>` (exported by
 * `@opensea/sdk`) or the matching `@opensea/sdk` type rather than with
 * `TokenPaginatedResponse`.
 */
export type TokenPaginatedResponse = Schemas["TokenPaginatedResponse"]

/**
 * Wire shape, snake_case as the API sends and accepts it. `@opensea/sdk`
 * camelizes responses and snakeizes request bodies, so annotate an
 * SDK-facing value with `Camelize<TokenResponse>` (exported by
 * `@opensea/sdk`) or the matching `@opensea/sdk` type rather than with
 * `TokenResponse`.
 */
export type TokenResponse = Schemas["TokenResponse"]

/**
 * Wire shape, snake_case as the API sends and accepts it. `@opensea/sdk`
 * camelizes responses and snakeizes request bodies, so annotate an
 * SDK-facing value with `Camelize<TokenSearchResponse>` (exported by
 * `@opensea/sdk`) or the matching `@opensea/sdk` type rather than with
 * `TokenSearchResponse`.
 */
export type TokenSearchResponse = Schemas["TokenSearchResponse"]

/**
 * Wire shape, snake_case as the API sends and accepts it. `@opensea/sdk`
 * camelizes responses and snakeizes request bodies, so annotate an
 * SDK-facing value with `Camelize<TokenSocialsResponse>` (exported by
 * `@opensea/sdk`) or the matching `@opensea/sdk` type rather than with
 * `TokenSocialsResponse`.
 */
export type TokenSocialsResponse = Schemas["TokenSocialsResponse"]

/**
 * Wire shape, snake_case as the API sends and accepts it. `@opensea/sdk`
 * camelizes responses and snakeizes request bodies, so annotate an
 * SDK-facing value with `Camelize<TokenStatsResponse>` (exported by
 * `@opensea/sdk`) or the matching `@opensea/sdk` type rather than with
 * `TokenStatsResponse`.
 */
export type TokenStatsResponse = Schemas["TokenStatsResponse"]

/**
 * Wire shape, snake_case as the API sends and accepts it. `@opensea/sdk`
 * camelizes responses and snakeizes request bodies, so annotate an
 * SDK-facing value with `Camelize<TokenSwapActivityPaginatedResponse>` (exported by
 * `@opensea/sdk`) or the matching `@opensea/sdk` type rather than with
 * `TokenSwapActivityPaginatedResponse`.
 */
export type TokenSwapActivityPaginatedResponse = Schemas["TokenSwapActivityPaginatedResponse"]

/**
 * Wire shape, snake_case as the API sends and accepts it. `@opensea/sdk`
 * camelizes responses and snakeizes request bodies, so annotate an
 * SDK-facing value with `Camelize<TokenSwapActivityResponse>` (exported by
 * `@opensea/sdk`) or the matching `@opensea/sdk` type rather than with
 * `TokenSwapActivityResponse`.
 */
export type TokenSwapActivityResponse = Schemas["TokenSwapActivityResponse"]

/**
 * Wire shape, snake_case as the API sends and accepts it. `@opensea/sdk`
 * camelizes responses and snakeizes request bodies, so annotate an
 * SDK-facing value with `Camelize<ToolAccessResponse>` (exported by
 * `@opensea/sdk`) or the matching `@opensea/sdk` type rather than with
 * `ToolAccessResponse`.
 */
export type ToolAccessResponse = Schemas["ToolAccessResponse"]

/**
 * Wire shape, snake_case as the API sends and accepts it. `@opensea/sdk`
 * camelizes responses and snakeizes request bodies, so annotate an
 * SDK-facing value with `Camelize<ToolActivityEventResponse>` (exported by
 * `@opensea/sdk`) or the matching `@opensea/sdk` type rather than with
 * `ToolActivityEventResponse`.
 */
export type ToolActivityEventResponse = Schemas["ToolActivityEventResponse"]

/**
 * Wire shape, snake_case as the API sends and accepts it. `@opensea/sdk`
 * camelizes responses and snakeizes request bodies, so annotate an
 * SDK-facing value with `Camelize<ToolActivityPaginatedResponse>` (exported by
 * `@opensea/sdk`) or the matching `@opensea/sdk` type rather than with
 * `ToolActivityPaginatedResponse`.
 */
export type ToolActivityPaginatedResponse = Schemas["ToolActivityPaginatedResponse"]

/**
 * Wire shape, snake_case as the API sends and accepts it. `@opensea/sdk`
 * camelizes responses and snakeizes request bodies, so annotate an
 * SDK-facing value with `Camelize<ToolCollectionResponse>` (exported by
 * `@opensea/sdk`) or the matching `@opensea/sdk` type rather than with
 * `ToolCollectionResponse`.
 */
export type ToolCollectionResponse = Schemas["ToolCollectionResponse"]

/**
 * Wire shape, snake_case as the API sends and accepts it. `@opensea/sdk`
 * camelizes responses and snakeizes request bodies, so annotate an
 * SDK-facing value with `Camelize<ToolListItemResponse>` (exported by
 * `@opensea/sdk`) or the matching `@opensea/sdk` type rather than with
 * `ToolListItemResponse`.
 */
export type ToolListItemResponse = Schemas["ToolListItemResponse"]

/**
 * Wire shape, snake_case as the API sends and accepts it. `@opensea/sdk`
 * camelizes responses and snakeizes request bodies, so annotate an
 * SDK-facing value with `Camelize<ToolListPaginatedResponse>` (exported by
 * `@opensea/sdk`) or the matching `@opensea/sdk` type rather than with
 * `ToolListPaginatedResponse`.
 */
export type ToolListPaginatedResponse = Schemas["ToolListPaginatedResponse"]

/**
 * Wire shape, snake_case as the API sends and accepts it. `@opensea/sdk`
 * camelizes responses and snakeizes request bodies, so annotate an
 * SDK-facing value with `Camelize<ToolPaymentStatsResponse>` (exported by
 * `@opensea/sdk`) or the matching `@opensea/sdk` type rather than with
 * `ToolPaymentStatsResponse`.
 */
export type ToolPaymentStatsResponse = Schemas["ToolPaymentStatsResponse"]

/**
 * Wire shape, snake_case as the API sends and accepts it. `@opensea/sdk`
 * camelizes responses and snakeizes request bodies, so annotate an
 * SDK-facing value with `Camelize<ToolPricingRecipientResponse>` (exported by
 * `@opensea/sdk`) or the matching `@opensea/sdk` type rather than with
 * `ToolPricingRecipientResponse`.
 */
export type ToolPricingRecipientResponse = Schemas["ToolPricingRecipientResponse"]

/**
 * Wire shape, snake_case as the API sends and accepts it. `@opensea/sdk`
 * camelizes responses and snakeizes request bodies, so annotate an
 * SDK-facing value with `Camelize<ToolRequirementResponse>` (exported by
 * `@opensea/sdk`) or the matching `@opensea/sdk` type rather than with
 * `ToolRequirementResponse`.
 */
export type ToolRequirementResponse = Schemas["ToolRequirementResponse"]

/**
 * Wire shape, snake_case as the API sends and accepts it. `@opensea/sdk`
 * camelizes responses and snakeizes request bodies, so annotate an
 * SDK-facing value with `Camelize<ToolSearchPaginatedResponse>` (exported by
 * `@opensea/sdk`) or the matching `@opensea/sdk` type rather than with
 * `ToolSearchPaginatedResponse`.
 */
export type ToolSearchPaginatedResponse = Schemas["ToolSearchPaginatedResponse"]

/**
 * Wire shape, snake_case as the API sends and accepts it. `@opensea/sdk`
 * camelizes responses and snakeizes request bodies, so annotate an
 * SDK-facing value with `Camelize<ToolSearchResultResponse>` (exported by
 * `@opensea/sdk`) or the matching `@opensea/sdk` type rather than with
 * `ToolSearchResultResponse`.
 */
export type ToolSearchResultResponse = Schemas["ToolSearchResultResponse"]

/**
 * Wire shape, snake_case as the API sends and accepts it. `@opensea/sdk`
 * camelizes responses and snakeizes request bodies, so annotate an
 * SDK-facing value with `Camelize<ToolUsageRequest>` (exported by
 * `@opensea/sdk`) or the matching `@opensea/sdk` type rather than with
 * `ToolUsageRequest`.
 */
export type ToolUsageRequest = Schemas["ToolUsageRequest"]

/**
 * Wire shape, snake_case as the API sends and accepts it. `@opensea/sdk`
 * camelizes responses and snakeizes request bodies, so annotate an
 * SDK-facing value with `Camelize<ToolUsageResponse>` (exported by
 * `@opensea/sdk`) or the matching `@opensea/sdk` type rather than with
 * `ToolUsageResponse`.
 */
export type ToolUsageResponse = Schemas["ToolUsageResponse"]

/**
 * Wire shape, snake_case as the API sends and accepts it. `@opensea/sdk`
 * camelizes responses and snakeizes request bodies, so annotate an
 * SDK-facing value with `Camelize<Total>` (exported by
 * `@opensea/sdk`) or the matching `@opensea/sdk` type rather than with
 * `Total`.
 */
export type Total = Schemas["Total"]

/**
 * Wire shape, snake_case as the API sends and accepts it. `@opensea/sdk`
 * camelizes responses and snakeizes request bodies, so annotate an
 * SDK-facing value with `Camelize<TotalSpentResponse>` (exported by
 * `@opensea/sdk`) or the matching `@opensea/sdk` type rather than with
 * `TotalSpentResponse`.
 */
export type TotalSpentResponse = Schemas["TotalSpentResponse"]

/**
 * Wire shape, snake_case as the API sends and accepts it. `@opensea/sdk`
 * camelizes responses and snakeizes request bodies, so annotate an
 * SDK-facing value with `Camelize<Trait>` (exported by
 * `@opensea/sdk`) or the matching `@opensea/sdk` type rather than with
 * `Trait`.
 */
export type Trait = Schemas["Trait"]

/**
 * Wire shape, snake_case as the API sends and accepts it. `@opensea/sdk`
 * camelizes responses and snakeizes request bodies, so annotate an
 * SDK-facing value with `Camelize<TraitCriteria>` (exported by
 * `@opensea/sdk`) or the matching `@opensea/sdk` type rather than with
 * `TraitCriteria`.
 */
export type TraitCriteria = Schemas["TraitCriteria"]

/**
 * Wire shape, snake_case as the API sends and accepts it. `@opensea/sdk`
 * camelizes responses and snakeizes request bodies, so annotate an
 * SDK-facing value with `Camelize<TraitData>` (exported by
 * `@opensea/sdk`) or the matching `@opensea/sdk` type rather than with
 * `TraitData`.
 */
export type TraitData = Schemas["TraitData"]

/**
 * Wire shape, snake_case as the API sends and accepts it. `@opensea/sdk`
 * camelizes responses and snakeizes request bodies, so annotate an
 * SDK-facing value with `Camelize<TraitFloorResponse>` (exported by
 * `@opensea/sdk`) or the matching `@opensea/sdk` type rather than with
 * `TraitFloorResponse`.
 */
export type TraitFloorResponse = Schemas["TraitFloorResponse"]

/**
 * Wire shape, snake_case as the API sends and accepts it. `@opensea/sdk`
 * camelizes responses and snakeizes request bodies, so annotate an
 * SDK-facing value with `Camelize<TraitFloorsResponse>` (exported by
 * `@opensea/sdk`) or the matching `@opensea/sdk` type rather than with
 * `TraitFloorsResponse`.
 */
export type TraitFloorsResponse = Schemas["TraitFloorsResponse"]

/**
 * Wire shape, snake_case as the API sends and accepts it. `@opensea/sdk`
 * camelizes responses and snakeizes request bodies, so annotate an
 * SDK-facing value with `Camelize<TraitObject>` (exported by
 * `@opensea/sdk`) or the matching `@opensea/sdk` type rather than with
 * `TraitObject`.
 */
export type TraitObject = Schemas["TraitObject"]

/**
 * Wire shape, snake_case as the API sends and accepts it. `@opensea/sdk`
 * camelizes responses and snakeizes request bodies, so annotate an
 * SDK-facing value with `Camelize<TransactionData>` (exported by
 * `@opensea/sdk`) or the matching `@opensea/sdk` type rather than with
 * `TransactionData`.
 */
export type TransactionData = Schemas["TransactionData"]

/**
 * Wire shape, snake_case as the API sends and accepts it. `@opensea/sdk`
 * camelizes responses and snakeizes request bodies, so annotate an
 * SDK-facing value with `Camelize<TransactionIdentifierInput>` (exported by
 * `@opensea/sdk`) or the matching `@opensea/sdk` type rather than with
 * `TransactionIdentifierInput`.
 */
export type TransactionIdentifierInput = Schemas["TransactionIdentifierInput"]

/**
 * Wire shape, snake_case as the API sends and accepts it. `@opensea/sdk`
 * camelizes responses and snakeizes request bodies, so annotate an
 * SDK-facing value with `Camelize<TransactionReceiptRequest>` (exported by
 * `@opensea/sdk`) or the matching `@opensea/sdk` type rather than with
 * `TransactionReceiptRequest`.
 */
export type TransactionReceiptRequest = Schemas["TransactionReceiptRequest"]

/**
 * Wire shape, snake_case as the API sends and accepts it. `@opensea/sdk`
 * camelizes responses and snakeizes request bodies, so annotate an
 * SDK-facing value with `Camelize<TransactionReceiptResponse>` (exported by
 * `@opensea/sdk`) or the matching `@opensea/sdk` type rather than with
 * `TransactionReceiptResponse`.
 */
export type TransactionReceiptResponse = Schemas["TransactionReceiptResponse"]

/**
 * Wire shape, snake_case as the API sends and accepts it. `@opensea/sdk`
 * camelizes responses and snakeizes request bodies, so annotate an
 * SDK-facing value with `Camelize<TransferAsset>` (exported by
 * `@opensea/sdk`) or the matching `@opensea/sdk` type rather than with
 * `TransferAsset`.
 */
export type TransferAsset = Schemas["TransferAsset"]

/**
 * Wire shape, snake_case as the API sends and accepts it. `@opensea/sdk`
 * camelizes responses and snakeizes request bodies, so annotate an
 * SDK-facing value with `Camelize<TransferEvent>` (exported by
 * `@opensea/sdk`) or the matching `@opensea/sdk` type rather than with
 * `TransferEvent`.
 */
export type TransferEvent = Schemas["TransferEvent"]

/**
 * Wire shape, snake_case as the API sends and accepts it. `@opensea/sdk`
 * camelizes responses and snakeizes request bodies, so annotate an
 * SDK-facing value with `Camelize<TransferRequest>` (exported by
 * `@opensea/sdk`) or the matching `@opensea/sdk` type rather than with
 * `TransferRequest`.
 */
export type TransferRequest = Schemas["TransferRequest"]

/**
 * Wire shape, snake_case as the API sends and accepts it. `@opensea/sdk`
 * camelizes responses and snakeizes request bodies, so annotate an
 * SDK-facing value with `Camelize<TransferResponse>` (exported by
 * `@opensea/sdk`) or the matching `@opensea/sdk` type rather than with
 * `TransferResponse`.
 */
export type TransferResponse = Schemas["TransferResponse"]

/**
 * Wire shape, snake_case as the API sends and accepts it. `@opensea/sdk`
 * camelizes responses and snakeizes request bodies, so annotate an
 * SDK-facing value with `Camelize<Type>` (exported by
 * `@opensea/sdk`) or the matching `@opensea/sdk` type rather than with
 * `Type`.
 */
export type Type = Schemas["Type"]

/**
 * Wire shape, snake_case as the API sends and accepts it. `@opensea/sdk`
 * camelizes responses and snakeizes request bodies, so annotate an
 * SDK-facing value with `Camelize<Uint256>` (exported by
 * `@opensea/sdk`) or the matching `@opensea/sdk` type rather than with
 * `Uint256`.
 */
export type Uint256 = Schemas["Uint256"]

/**
 * Wire shape, snake_case as the API sends and accepts it. `@opensea/sdk`
 * camelizes responses and snakeizes request bodies, so annotate an
 * SDK-facing value with `Camelize<UpdateCollectionMetadataRequest>` (exported by
 * `@opensea/sdk`) or the matching `@opensea/sdk` type rather than with
 * `UpdateCollectionMetadataRequest`.
 */
export type UpdateCollectionMetadataRequest = Schemas["UpdateCollectionMetadataRequest"]

/**
 * Wire shape, snake_case as the API sends and accepts it. `@opensea/sdk`
 * camelizes responses and snakeizes request bodies, so annotate an
 * SDK-facing value with `Camelize<UpdateCollectionMetadataResponse>` (exported by
 * `@opensea/sdk`) or the matching `@opensea/sdk` type rather than with
 * `UpdateCollectionMetadataResponse`.
 */
export type UpdateCollectionMetadataResponse = Schemas["UpdateCollectionMetadataResponse"]

/**
 * Wire shape, snake_case as the API sends and accepts it. `@opensea/sdk`
 * camelizes responses and snakeizes request bodies, so annotate an
 * SDK-facing value with `Camelize<UpdateDropItemRequest>` (exported by
 * `@opensea/sdk`) or the matching `@opensea/sdk` type rather than with
 * `UpdateDropItemRequest`.
 */
export type UpdateDropItemRequest = Schemas["UpdateDropItemRequest"]

/**
 * Wire shape, snake_case as the API sends and accepts it. `@opensea/sdk`
 * camelizes responses and snakeizes request bodies, so annotate an
 * SDK-facing value with `Camelize<UpdateProfileSettingsRequest>` (exported by
 * `@opensea/sdk`) or the matching `@opensea/sdk` type rather than with
 * `UpdateProfileSettingsRequest`.
 */
export type UpdateProfileSettingsRequest = Schemas["UpdateProfileSettingsRequest"]

/**
 * Wire shape, snake_case as the API sends and accepts it. `@opensea/sdk`
 * camelizes responses and snakeizes request bodies, so annotate an
 * SDK-facing value with `Camelize<UpdateProfileSettingsResponse>` (exported by
 * `@opensea/sdk`) or the matching `@opensea/sdk` type rather than with
 * `UpdateProfileSettingsResponse`.
 */
export type UpdateProfileSettingsResponse = Schemas["UpdateProfileSettingsResponse"]

/**
 * Wire shape, snake_case as the API sends and accepts it. `@opensea/sdk`
 * camelizes responses and snakeizes request bodies, so annotate an
 * SDK-facing value with `Camelize<UpdateProfileShelfRequest>` (exported by
 * `@opensea/sdk`) or the matching `@opensea/sdk` type rather than with
 * `UpdateProfileShelfRequest`.
 */
export type UpdateProfileShelfRequest = Schemas["UpdateProfileShelfRequest"]

/**
 * Wire shape, snake_case as the API sends and accepts it. `@opensea/sdk`
 * camelizes responses and snakeizes request bodies, so annotate an
 * SDK-facing value with `Camelize<UpdateSelfMintDropItemRequest>` (exported by
 * `@opensea/sdk`) or the matching `@opensea/sdk` type rather than with
 * `UpdateSelfMintDropItemRequest`.
 */
export type UpdateSelfMintDropItemRequest = Schemas["UpdateSelfMintDropItemRequest"]

/**
 * Wire shape, snake_case as the API sends and accepts it. `@opensea/sdk`
 * camelizes responses and snakeizes request bodies, so annotate an
 * SDK-facing value with `Camelize<UploadContext>` (exported by
 * `@opensea/sdk`) or the matching `@opensea/sdk` type rather than with
 * `UploadContext`.
 */
export type UploadContext = Schemas["UploadContext"]

/**
 * Wire shape, snake_case as the API sends and accepts it. `@opensea/sdk`
 * camelizes responses and snakeizes request bodies, so annotate an
 * SDK-facing value with `Camelize<UploadDropItemMediaRequest>` (exported by
 * `@opensea/sdk`) or the matching `@opensea/sdk` type rather than with
 * `UploadDropItemMediaRequest`.
 */
export type UploadDropItemMediaRequest = Schemas["UploadDropItemMediaRequest"]

/**
 * Wire shape, snake_case as the API sends and accepts it. `@opensea/sdk`
 * camelizes responses and snakeizes request bodies, so annotate an
 * SDK-facing value with `Camelize<UploadProfileImageRequest>` (exported by
 * `@opensea/sdk`) or the matching `@opensea/sdk` type rather than with
 * `UploadProfileImageRequest`.
 */
export type UploadProfileImageRequest = Schemas["UploadProfileImageRequest"]

/**
 * Wire shape, snake_case as the API sends and accepts it. `@opensea/sdk`
 * camelizes responses and snakeizes request bodies, so annotate an
 * SDK-facing value with `Camelize<V1ErrorWrapper>` (exported by
 * `@opensea/sdk`) or the matching `@opensea/sdk` type rather than with
 * `V1ErrorWrapper`.
 */
export type V1ErrorWrapper = Schemas["V1ErrorWrapper"]

/**
 * Wire shape, snake_case as the API sends and accepts it. `@opensea/sdk`
 * camelizes responses and snakeizes request bodies, so annotate an
 * SDK-facing value with `Camelize<ValidateDropAllowlistRequest>` (exported by
 * `@opensea/sdk`) or the matching `@opensea/sdk` type rather than with
 * `ValidateDropAllowlistRequest`.
 */
export type ValidateDropAllowlistRequest = Schemas["ValidateDropAllowlistRequest"]

/**
 * Wire shape, snake_case as the API sends and accepts it. `@opensea/sdk`
 * camelizes responses and snakeizes request bodies, so annotate an
 * SDK-facing value with `Camelize<ValidateDropAllowlistResponse>` (exported by
 * `@opensea/sdk`) or the matching `@opensea/sdk` type rather than with
 * `ValidateDropAllowlistResponse`.
 */
export type ValidateDropAllowlistResponse = Schemas["ValidateDropAllowlistResponse"]

/**
 * Wire shape, snake_case as the API sends and accepts it. `@opensea/sdk`
 * camelizes responses and snakeizes request bodies, so annotate an
 * SDK-facing value with `Camelize<ValidateMetadataAssetIdentifier>` (exported by
 * `@opensea/sdk`) or the matching `@opensea/sdk` type rather than with
 * `ValidateMetadataAssetIdentifier`.
 */
export type ValidateMetadataAssetIdentifier = Schemas["ValidateMetadataAssetIdentifier"]

/**
 * Wire shape, snake_case as the API sends and accepts it. `@opensea/sdk`
 * camelizes responses and snakeizes request bodies, so annotate an
 * SDK-facing value with `Camelize<ValidateMetadataAttribute>` (exported by
 * `@opensea/sdk`) or the matching `@opensea/sdk` type rather than with
 * `ValidateMetadataAttribute`.
 */
export type ValidateMetadataAttribute = Schemas["ValidateMetadataAttribute"]

/**
 * Wire shape, snake_case as the API sends and accepts it. `@opensea/sdk`
 * camelizes responses and snakeizes request bodies, so annotate an
 * SDK-facing value with `Camelize<ValidateMetadataDetails>` (exported by
 * `@opensea/sdk`) or the matching `@opensea/sdk` type rather than with
 * `ValidateMetadataDetails`.
 */
export type ValidateMetadataDetails = Schemas["ValidateMetadataDetails"]

/**
 * Wire shape, snake_case as the API sends and accepts it. `@opensea/sdk`
 * camelizes responses and snakeizes request bodies, so annotate an
 * SDK-facing value with `Camelize<ValidateMetadataResponse>` (exported by
 * `@opensea/sdk`) or the matching `@opensea/sdk` type rather than with
 * `ValidateMetadataResponse`.
 */
export type ValidateMetadataResponse = Schemas["ValidateMetadataResponse"]

/**
 * Wire shape, snake_case as the API sends and accepts it. `@opensea/sdk`
 * camelizes responses and snakeizes request bodies, so annotate an
 * SDK-facing value with `Camelize<VideoMediaRequest>` (exported by
 * `@opensea/sdk`) or the matching `@opensea/sdk` type rather than with
 * `VideoMediaRequest`.
 */
export type VideoMediaRequest = Schemas["VideoMediaRequest"]

/**
 * Wire shape, snake_case as the API sends and accepts it. `@opensea/sdk`
 * camelizes responses and snakeizes request bodies, so annotate an
 * SDK-facing value with `Camelize<WalletLinkResponse>` (exported by
 * `@opensea/sdk`) or the matching `@opensea/sdk` type rather than with
 * `WalletLinkResponse`.
 */
export type WalletLinkResponse = Schemas["WalletLinkResponse"]

/**
 * Wire shape, snake_case as the API sends and accepts it. `@opensea/sdk`
 * camelizes responses and snakeizes request bodies, so annotate an
 * SDK-facing value with `Camelize<WalletPnlResponse>` (exported by
 * `@opensea/sdk`) or the matching `@opensea/sdk` type rather than with
 * `WalletPnlResponse`.
 */
export type WalletPnlResponse = Schemas["WalletPnlResponse"]

/**
 * Wire shape, snake_case as the API sends and accepts it. `@opensea/sdk`
 * camelizes responses and snakeizes request bodies, so annotate an
 * SDK-facing value with `Camelize<WalletUnlinkResponse>` (exported by
 * `@opensea/sdk`) or the matching `@opensea/sdk` type rather than with
 * `WalletUnlinkResponse`.
 */
export type WalletUnlinkResponse = Schemas["WalletUnlinkResponse"]

/**
 * Wire shape, snake_case as the API sends and accepts it. `@opensea/sdk`
 * camelizes responses and snakeizes request bodies, so annotate an
 * SDK-facing value with `Camelize<WalletVisibilityResponse>` (exported by
 * `@opensea/sdk`) or the matching `@opensea/sdk` type rather than with
 * `WalletVisibilityResponse`.
 */
export type WalletVisibilityResponse = Schemas["WalletVisibilityResponse"]

/**
 * Wire shape, snake_case as the API sends and accepts it. `@opensea/sdk`
 * camelizes responses and snakeizes request bodies, so annotate an
 * SDK-facing value with `Camelize<WatchlistRequest>` (exported by
 * `@opensea/sdk`) or the matching `@opensea/sdk` type rather than with
 * `WatchlistRequest`.
 */
export type WatchlistRequest = Schemas["WatchlistRequest"]

/**
 * Wire shape, snake_case as the API sends and accepts it. `@opensea/sdk`
 * camelizes responses and snakeizes request bodies, so annotate an
 * SDK-facing value with `Camelize<X402SettlementFields>` (exported by
 * `@opensea/sdk`) or the matching `@opensea/sdk` type rather than with
 * `X402SettlementFields`.
 */
export type X402SettlementFields = Schemas["X402SettlementFields"]
