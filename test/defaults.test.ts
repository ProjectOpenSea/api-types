/**
 * A spec `default` says what the server assumes when a field is omitted, so a
 * defaulted field outside `required` must stay optional in the generated
 * types. openapi-typescript marks such fields required unless `generate` passes
 * `--default-non-nullable false`, and without that flag a new defaulted request
 * field (DropMintRequest.skip_balance_check, for one) would force every SDK
 * caller to pass it. These tests fail if the flag is dropped.
 */

import { readFileSync } from "node:fs"
import ts from "@typescript/typescript6"
import { describe, expect, it } from "vitest"
import spec from "../opensea-api.json" with { type: "json" }
import type {
  DropMintRequest,
  SetCreatorFeeEnforcementRequest,
} from "../src/index.js"

type SpecSchema = {
  properties?: Record<string, { default?: unknown }>
  required?: string[]
}

const schemas = (
  spec as { components: { schemas: Record<string, SpecSchema> } }
).components.schemas

/** Generated `components.schemas` members: schema -> property -> optional. */
function generatedOptionality(): Map<string, Map<string, boolean>> {
  const source = ts.createSourceFile(
    "generated.ts",
    readFileSync(new URL("../src/generated.ts", import.meta.url), "utf8"),
    ts.ScriptTarget.Latest,
  )
  const result = new Map<string, Map<string, boolean>>()
  const components = source.statements.find(
    (s): s is ts.InterfaceDeclaration =>
      ts.isInterfaceDeclaration(s) && s.name.text === "components",
  )
  const schemasMember = components?.members.find(
    (m): m is ts.PropertySignature =>
      ts.isPropertySignature(m) && m.name.getText(source) === "schemas",
  )
  const schemasType = schemasMember?.type
  if (!schemasType || !ts.isTypeLiteralNode(schemasType)) return result
  for (const schema of schemasType.members) {
    if (!ts.isPropertySignature(schema) || !schema.type) continue
    if (!ts.isTypeLiteralNode(schema.type)) continue
    const props = new Map<string, boolean>()
    for (const prop of schema.type.members) {
      if (!ts.isPropertySignature(prop)) continue
      props.set(prop.name.getText(source), prop.questionToken !== undefined)
    }
    result.set(schema.name.getText(source), props)
  }
  return result
}

describe("defaulted schema fields", () => {
  const generated = generatedOptionality()

  it("reads the generated schemas", () => {
    expect(generated.size).toBeGreaterThan(100)
    // Required fields stay required, so the parse is not reporting every
    // property as optional.
    expect(generated.get("DropMintRequest")?.get("minter")).toBe(false)
  })

  it("keeps every defaulted field outside `required` optional", () => {
    const defaulted = Object.entries(schemas).flatMap(([name, schema]) =>
      Object.entries(schema.properties ?? {})
        .filter(
          ([prop, value]) =>
            value.default !== undefined && !schema.required?.includes(prop),
        )
        .map(([prop]) => `${name}.${prop}`),
    )
    expect(defaulted.length).toBeGreaterThan(0)

    const required = defaulted.filter(field => {
      const [name, prop] = field.split(".") as [string, string]
      return generated.get(name)?.get(prop) !== true
    })
    expect(required).toEqual([])
  })

  it("lets callers omit defaulted request fields", () => {
    // Fails `pnpm run type-check` when the fields come out required.
    const mint: DropMintRequest = { minter: "0x0", quantity: 1 }
    const enforcement: SetCreatorFeeEnforcementRequest = { enabled: false }
    expect(mint.skip_balance_check).toBeUndefined()
    expect(enforcement.allow_eip7702_transfers).toBeUndefined()
  })
})
