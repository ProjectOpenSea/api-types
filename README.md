# @opensea/api-types

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
