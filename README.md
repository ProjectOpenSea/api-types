# @opensea/api-types

> **Read-only mirror.** This package is developed in a private monorepo and mirrored to [ProjectOpenSea/api-types](https://github.com/ProjectOpenSea/api-types) when a version is released, so the public code can trail the internal main branch by weeks.
>
> Pull requests opened on the mirror cannot be merged there. They are read, and a fix worth taking is recreated in the monorepo. Because a fix that has landed internally is not public until the next release, filing an issue before writing a patch is the quickest way to find out whether a bug is already fixed.

Auto-generated TypeScript types from the OpenSea API OpenAPI spec.

## Updating the spec

```bash
# Fetch latest spec from the API (once the endpoint is live)
pnpm --filter @opensea/api-types run update-spec

# Rebuild types
pnpm --filter @opensea/api-types run build
```

The `opensea-api.json` file is committed to git intentionally — it's the versioned source of truth for codegen. The `update-spec` script fetches the latest version from the API and writes it locally. Commit the updated spec so diffs show exactly what changed in the API.

## Usage

```typescript
import type { Schemas, OperationResponse, OperationQueryParams } from "@opensea/api-types";

type Collection = Schemas["CollectionResponse"];
type ListingsResult = OperationResponse<"get_listings_1">;
type ListParams = OperationQueryParams<"list_collections">;
```

### Runtime values

Most of this package is types, which disappear at compile time. Two exports are real values, both generated from `opensea-api.json` so they cannot drift from the types beside them.

`CHAIN_IDENTIFIERS` is every chain slug the API accepts, in spec order, and `isChainIdentifier` narrows an arbitrary string to `ChainIdentifier`. Reach for these instead of writing out the chain list, which is the copy that goes stale when the API adds a chain.

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

`AUTH_SCOPES` is the scope registry (name, display name, description, group, endpoints, MCP tools) from the spec's `AuthScope` schema.

## These are wire types, in snake_case

Every type here mirrors the OpenAPI spec, so its keys are the ones the API actually sends and
accepts. That is the right shape for code that calls the API directly.

It is the wrong shape for a value that came back from `@opensea/sdk`. The SDK rewrites response
keys to camelCase, so a raw type used to annotate an SDK return value describes renamed fields that
do not exist at runtime and read `undefined`. Single-word keys survive the rewrite, so part of the
value still reads correctly and the rest looks like missing data. TypeScript rejects that pairing only
where the wire type has a required snake_case key somewhere in its tree, so it can compile cleanly.

SDK callers want the camelized view: the matching type from `@opensea/sdk` (`OpenSeaCollection`,
`ResolveAccountResponse`, and so on), or `Camelize<T>` from `@opensea/sdk` wrapped around the wire
type. The SDK README has the detail under "Response casing".

## Security

Found a vulnerability? Report it through OpenSea's Bugcrowd program at https://bugcrowd.com/engagements/opensea rather than opening a public issue. See [SECURITY.md](SECURITY.md).
