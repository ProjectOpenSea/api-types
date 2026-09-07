/**
 * The published spec ships in `files`, but an `exports` map makes every path it does not name
 * private, so `opensea-api.json` was unreachable at runtime with ERR_PACKAGE_PATH_NOT_EXPORTED.
 * These assert the subpath stays declared, since nothing else in the build would notice it going
 * missing again.
 */

import { describe, expect, it } from "vitest"
import pkg from "../package.json" with { type: "json" }

describe("package exports", () => {
  it("declares a subpath for the spec that ships in files", () => {
    const exports = pkg.exports as Record<string, unknown>

    expect(pkg.files).toContain("opensea-api.json")
    expect(exports["./opensea-api.json"]).toBe("./opensea-api.json")
  })

  it("resolves the spec through the package name, so the exports map is what is tested", async () => {
    // Self-reference, not a relative path: "../opensea-api.json" reads the file straight off disk
    // and would still pass with the subpath deleted. Going through the package name is the only
    // form that fails when the exports map stops naming it, which is the regression to catch.
    //
    // Dynamic import rather than createRequire: this package's tsconfig.check.json sets
    // types: ["vitest/globals"], so "node:module" only resolves where @types/node happens to be
    // installed. It is in this monorepo and is not in the flat mirror layout the public repo
    // builds in, which is how a green check here shipped a red one there.
    const spec = (
      await import("@opensea/api-types/opensea-api.json", {
        with: { type: "json" },
      })
    ).default as { openapi: string; paths: Record<string, unknown> }

    expect(spec.openapi).toMatch(/^3\./)
    expect(Object.keys(spec.paths).length).toBeGreaterThan(100)
  })

  it("exposes package.json so consumers can read the version", () => {
    const exports = pkg.exports as Record<string, unknown>

    expect(exports["./package.json"]).toBe("./package.json")
  })
})
