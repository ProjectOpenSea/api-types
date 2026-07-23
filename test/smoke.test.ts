/**
 * Smoke tests for @opensea/api-types
 *
 * These verify that key types exist and have the expected shape.
 * If the OpenAPI spec changes in a breaking way, these will fail.
 */

import { describe, expect, it } from "vitest"
import type {
  AccountResponse,
  ChainIdentifier,
  CollectionResponse,
  Contract,
  Event,
  FulfillListingResponse,
  Listing,
  Nft,
  NftDetailed,
  Offer,
  OperationPathParams,
  OperationQueryParams,
  OperationRequestBody,
  OperationResponse,
  Order,
  paths,
  Schemas,
  TokenActivityStatsResponse,
  TokenActivityWindowStatsResponse,
} from "../src/index.js"
import { AUTH_SCOPES } from "../src/index.js"

describe("@opensea/api-types smoke tests", () => {
  it("paths covers known API endpoints", () => {
    // These are compile-time checks — if any path is removed from the spec,
    // TypeScript will error here.
    type _postOffer = paths["/api/v2/orders/{chain}/{protocol}/offers"]["post"]
    type _postListing =
      paths["/api/v2/orders/{chain}/{protocol}/listings"]["post"]
    type _offersByNft =
      paths["/api/v2/offers/collection/{slug}/nfts/{identifier}"]
    type _sweep = paths["/api/v2/listings/sweep"]
    type _swapExecute = paths["/api/v2/swap/execute"]
    type _txReceipt = paths["/api/v2/transactions/receipt"]
    type _collection = paths["/api/v2/collections/{slug}"]
    type _nft =
      paths["/api/v2/chain/{chain}/contract/{address}/nfts/{identifier}"]
    type _events = paths["/api/v2/events"]
    type _account = paths["/api/v2/accounts/{address_or_username}"]
    type _traits = paths["/api/v2/traits/{slug}"]
    type _tokenActivityStats =
      paths["/api/v2/chain/{chain}/token/{address}/activity/stats"]["get"]
    expect(true).toBe(true) // if we get here, types compiled
  })

  it("schemas have expected fields", () => {
    // Verify key schemas exist and have the right structure
    type _chain = ChainIdentifier
    type _collection = CollectionResponse
    type _nft = Nft
    type _nftDetailed = NftDetailed
    type _order = Order
    type _offer = Offer
    type _listing = Listing
    type _fulfillment = FulfillListingResponse
    type _event = Event
    type _account = AccountResponse
    type _contract = Contract
    type _tokenActivityStats = TokenActivityStatsResponse
    type _tokenActivityWindowStats = TokenActivityWindowStatsResponse
    expect(true).toBe(true)
  })

  it("operation helpers extract types", () => {
    type _getCollection = OperationResponse<"get_collection">
    type _postOffer = OperationRequestBody<"post_offer">
    type _getOffersByNftPath = OperationPathParams<"get_offers_nft">
    type _listCollectionsQuery = OperationQueryParams<"list_collections">
    type _getTokenActivityStats = OperationResponse<"get_token_activity_stats">
    type _getTokenActivityStatsPath =
      OperationPathParams<"get_token_activity_stats">
    type _getTokenActivityStatsQuery =
      OperationQueryParams<"get_token_activity_stats">
    expect(true).toBe(true)
  })

  it("models token activity stats without losing decimal precision", () => {
    const response: TokenActivityStatsResponse = {
      chain: "base",
      address: "0x4200000000000000000000000000000000000006",
      computed_at: "2026-07-23T00:52:11.879132Z",
      windows: {
        "24h": {
          trades: 5714,
          volume_usd: "710410.75",
          average_trade_usd: "124.33",
        },
      },
    }

    expect(response.computed_at).toBe("2026-07-23T00:52:11.879132Z")
    expect(response.windows["24h"]?.volume_usd).toBe("710410.75")
  })

  it("Schemas indexer works for all schema names", () => {
    // Verify the Schemas type alias can index into any schema
    type _check1 = Schemas["CollectionResponse"]
    type _check2 = Schemas["Nft"]
    type _check3 = Schemas["Order"]
    type _check4 = Schemas["SeaportParameters"]
    type _check5 = Schemas["AssetEventsResponse"]
    expect(true).toBe(true)
  })

  it("ChainIdentifier includes known chains", () => {
    // This is a runtime check using the type's literal union
    const validChains: ChainIdentifier[] = [
      "ethereum",
      "polygon",
      "base",
      "arbitrum",
    ]
    expect(validChains).toContain("ethereum")
    expect(validChains).toContain("base")
  })

  it("exports the production wallet auth scopes", () => {
    expect(AUTH_SCOPES.map(scope => scope.name)).toEqual([
      "read:eligibility",
      "read:favorites",
      "read:social",
      "read:tools",
      "write:favorites",
      "write:social",
      "write:tools",
      "write:orders",
      "write:drops",
      "write:collections",
      "write:profile",
      "write:wallets",
    ])
    expect(AUTH_SCOPES.find(scope => scope.name === "write:profile")).toEqual(
      expect.objectContaining({
        group: "write",
        endpoints: expect.arrayContaining(["/api/v2/profile/shelves"]),
        mcpTools: ["manage_profile"],
      }),
    )
  })
})
