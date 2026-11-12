# @opensea/api-types

TypeScript types generated from the OpenSea API OpenAPI spec.

## Usage

```typescript
import type { Schemas, OperationResponse, OperationQueryParams } from "@opensea/api-types";

type Collection = Schemas["CollectionResponse"];
type ListingsResult = OperationResponse<"list_listings_collection_all">;
type ListParams = OperationQueryParams<"list_collections">;
```

### Runtime values

Almost everything here is a type and disappears at compile time. Two exports are real values, generated from `opensea-api.json` alongside the types so the two cannot drift.

`CHAIN_IDENTIFIERS` lists every chain slug the API accepts, in spec order. `isChainIdentifier` narrows a string to `ChainIdentifier`. Use them instead of a hand-written chain list, which goes stale when the API adds a chain.

```typescript
import { CHAIN_IDENTIFIERS, isChainIdentifier } from "@opensea/api-types";

for (const chain of CHAIN_IDENTIFIERS) {
  console.log(chain); // "blast" | "base" | "ethereum" | ...
}

const input: string = process.argv[2] ?? "";
if (isChainIdentifier(input)) {
  // input is ChainIdentifier here
  await fetchCollections(input);
}
```

`AUTH_SCOPES` is the scope registry from the spec's `AuthScope` schema: name, display name, description, group, endpoints, and MCP tools for each scope.

## These are wire types, in snake_case

Each type mirrors the OpenAPI spec, so its keys are the ones the API sends and accepts. Use them for code that calls the API directly.

Don't use them for values returned by `@opensea/sdk`. The SDK rewrites response keys to camelCase, so a wire type on an SDK result describes snake_case fields that read `undefined` at runtime. Single-word keys survive the rewrite, which makes the result look partly populated rather than wrong. TypeScript only catches the mismatch when the wire type has a required snake_case key somewhere in its tree, so the code often compiles.

For SDK results, use the matching type from `@opensea/sdk` (`OpenSeaCollection`, `ResolveAccountResponse`, and so on) or wrap the wire type in the SDK's `Camelize<T>`. The SDK README covers this under "Response casing".

## Updating the spec

```bash
# Fetch the latest spec from the API
pnpm --filter @opensea/api-types run update-spec

# Rebuild types
pnpm --filter @opensea/api-types run build
```

`update-spec` downloads the spec from `https://api.opensea.io/api/v2/openapi.json` into `opensea-api.json`. That file is committed on purpose: it is the versioned input to codegen, so commit it after each update and the diff shows exactly what changed in the API.

## Contributing

Read-only mirror of a private monorepo, updated on each release. Pull requests are welcome, and we bring accepted changes into the monorepo.

## Security

Found a vulnerability? Report it through OpenSea's Bugcrowd program at https://bugcrowd.com/engagements/opensea rather than opening a public issue. See [SECURITY.md](SECURITY.md).
