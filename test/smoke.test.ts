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
  components,
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
  operations,
  paths,
  Schemas,
} from "../src/index.js"

describe("@opensea/api-types smoke tests", () => {
  it("paths covers known API endpoints", () => {
    // These are compile-time checks — if any path is removed from the spec,
    // TypeScript will error here.
    type _offers = paths["/api/v2/orders/{chain}/{protocol}/offers"]
    type _listings = paths["/api/v2/orders/{chain}/{protocol}/listings"]
    type _collection = paths["/api/v2/collections/{slug}"]
    type _nft =
      paths["/api/v2/chain/{chain}/contract/{address}/nfts/{identifier}"]
    type _events = paths["/api/v2/events"]
    type _account = paths["/api/v2/accounts/{address_or_username}"]
    type _traits = paths["/api/v2/traits/{slug}"]
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
    expect(true).toBe(true)
  })

  it("operation helpers extract types", () => {
    type _getCollection = OperationResponse<"get_collection">
    type _postOffer = OperationRequestBody<"post_offer">
    type _getOfferPath = OperationPathParams<"get_offers">
    type _listCollectionsQuery = OperationQueryParams<"list_collections">
    expect(true).toBe(true)
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
})
