/**
 * `ChainIdentifier` is a type-only union, so nothing about the chain list
 * survives into the JavaScript output. `CHAIN_IDENTIFIERS` is generated from
 * the same spec enum to close that gap, and these tests are what stops the
 * generated file from going stale against the spec it came from.
 */

import { describe, expect, it } from "vitest"
import spec from "../opensea-api.json" with { type: "json" }
import type { ChainIdentifier } from "../src/index.js"
import { CHAIN_IDENTIFIERS, isChainIdentifier } from "../src/index.js"

const specChains = (
  spec as {
    components: { schemas: { ChainIdentifier: { enum: string[] } } }
  }
).components.schemas.ChainIdentifier.enum

describe("CHAIN_IDENTIFIERS", () => {
  it("matches the spec's ChainIdentifier enum exactly, in order", () => {
    // Reads the spec rather than a copy of the list, so a stale
    // src/chains-generated.ts fails here instead of shipping.
    expect([...CHAIN_IDENTIFIERS]).toEqual(specChains)
  })

  it("lists every chain once", () => {
    expect(new Set(CHAIN_IDENTIFIERS).size).toBe(CHAIN_IDENTIFIERS.length)
  })

  it("covers the ChainIdentifier union at compile time", () => {
    // Record<ChainIdentifier, true> is only satisfiable when the array's
    // element union is the whole ChainIdentifier union. Drop an entry from
    // src/chains-generated.ts and `pnpm run type-check` fails on this line,
    // which is what makes the assertion above non-vacuous.
    const seen = Object.fromEntries(
      CHAIN_IDENTIFIERS.map(chain => [chain, true]),
    ) as Record<(typeof CHAIN_IDENTIFIERS)[number], true>
    const everyChain: Record<ChainIdentifier, true> = seen

    expect(Object.keys(everyChain)).toHaveLength(CHAIN_IDENTIFIERS.length)
  })

  it("holds the chains the API has always accepted", () => {
    // A spot check that the generator is reading the right schema, not just
    // some enum of the right length.
    expect(CHAIN_IDENTIFIERS).toContain("ethereum")
    expect(CHAIN_IDENTIFIERS).toContain("base")
    expect(CHAIN_IDENTIFIERS).toContain("solana")
  })
})

describe("isChainIdentifier", () => {
  it("accepts every listed chain", () => {
    for (const chain of CHAIN_IDENTIFIERS) {
      expect(isChainIdentifier(chain)).toBe(true)
    }
  })

  it("rejects a slug the spec does not list", () => {
    expect(isChainIdentifier("goerli")).toBe(false)
    expect(isChainIdentifier("")).toBe(false)
    expect(isChainIdentifier("Ethereum")).toBe(false)
  })

  it("narrows a string to ChainIdentifier", () => {
    const input: string = "polygon"
    if (!isChainIdentifier(input)) throw new Error("expected a chain")
    const narrowed: ChainIdentifier = input

    expect(narrowed).toBe("polygon")
  })
})
