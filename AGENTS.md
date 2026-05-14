# api-types — Agent Conventions

Auto-generated TypeScript types from the OpenSea API v2 OpenAPI spec. Source of truth for API types across the devtools ecosystem.

## Quick Reference

cd packages/api-types
pnpm run update-spec   # Fetch latest OpenAPI spec from api.opensea.io
pnpm run build         # Regenerate types from spec + bundle with tsup
pnpm run lint          # Type-check with tsc --noEmit
pnpm run test          # Run smoke tests with Vitest

## Architecture

| File | Role |
|------|------|
| `opensea-api.json` | Local copy of the OpenAPI spec fetched from `api.opensea.io/api/v2/openapi.json` |
| `scripts/update-spec.mjs` | Fetches the latest spec; falls back to the existing local file on network errors |
| `src/generated.ts` | Auto-generated types from `openapi-typescript`; do not edit manually |
| `src/index.ts` | Named re-exports of commonly used schema types grouped by domain |
| `test/smoke.test.ts` | Smoke test verifying the generated types compile and export correctly |

## Critical Invariant

`@opensea/api-types` is the single source of truth for OpenSea API v2 request and response types across SDK and CLI packages.

Always refresh the OpenAPI spec and regenerate this package before adding any new OpenSea v2 endpoint to the SDK or CLI.

pnpm --filter @opensea/api-types run update-spec
pnpm --filter @opensea/api-types run build
pnpm --filter sdk run check-types
pnpm --filter cli run build

This rule prevents duplicated hand-written types from drifting away from the OpenSea API contract.

## Always-Update-This-First Rule

When adding, changing, or consuming any OpenSea v2 endpoint in the SDK or CLI:

1. Update the OpenAPI spec in `packages/api-types`.
2. Regenerate `src/generated.ts`.
3. Add or update named exports in `src/index.ts` when useful for downstream consumers.
4. Rebuild `@opensea/api-types`.
5. Only then implement the SDK or CLI endpoint.
6. Verify downstream packages compile.

Hand-rolling request or response types in SDK or CLI packages is forbidden.

Do not add endpoint-specific OpenSea API v2 types to:

- `packages/sdk/src/api/types.ts`
- `packages/cli/src/types/api.ts`
- Any other downstream package-local type file

Use types from `@opensea/api-types`, either through named exports from `src/index.ts` or directly through `components["schemas"]`.

CI must keep this invariant strict. `pnpm check-api-paths` should fail SDK or CLI API-path changes that bypass regenerated API types.

## Review Checklist

When reviewing changes to this package, verify:

1. **Never hand-edit `src/generated.ts`**

   `src/generated.ts` is produced by `openapi-typescript` from `opensea-api.json`. Manual edits are overwritten on the next build and should not be accepted.

2. **Refresh the spec before endpoint work**

   If an SDK or CLI change adds or modifies an OpenSea v2 endpoint, confirm this package was updated first:

      pnpm --filter @opensea/api-types run update-spec
   pnpm --filter @opensea/api-types run build
   
3. **Use generated schemas for endpoint types**

   New SDK or CLI endpoint request and response types must come from generated OpenAPI schemas.

   Prefer named exports from `@opensea/api-types` when available. If no named export exists, use:

      components["schemas"]["SchemaName"]
   
4. **Add named exports for new reusable schemas**

   When the spec adds schemas that are useful to downstream consumers, add named re-exports in `src/index.ts`.

   Keep exports grouped by domain, such as:

   - Collections
   - NFTs
   - Orders
   - Offers
   - Listings
   - Events
   - Accounts
   - Chains
   - Payment tokens

5. **Verify downstream consumers**

   The SDK (`@opensea/sdk`) and CLI (`@opensea/cli`) depend on this package. After updating the spec, rebuild api-types and verify downstream packages still compile:

      pnpm --filter @opensea/api-types run build
   pnpm --filter sdk run check-types
   pnpm --filter cli run build
   
6. **Preserve reproducibility**

   `src/generated.ts` must remain a reproducible artifact generated from `opensea-api.json`.

   If generated output changes, the spec should also explain why those generated types changed.

7. **Keep chain enums synchronized**

   The SDK's `Chain` enum has a compile-time assertion against `ChainIdentifier` from this package.

   If the OpenAPI spec adds a new chain, the SDK build will fail until `Chain` is updated.

8. **Keep CI enforcement strict**

   `pnpm check-api-paths` is the correct gate for preventing SDK and CLI endpoint additions from bypassing generated API types.

   Strengthen this check when needed so any SDK or CLI API-path change requires the corresponding regenerated `packages/api-types` update whenever the OpenAPI spec has changed.

## Recommended Endpoint Implementation Flow

Use this flow for new OpenSea v2 endpoints:

pnpm --filter @opensea/api-types run update-spec
pnpm --filter @opensea/api-types run build
pnpm --filter @opensea/api-types run lint
pnpm --filter @opensea/api-types run test
pnpm --filter sdk run check-types
pnpm --filter cli run build
pnpm check-api-paths

Then implement the SDK or CLI endpoint using only generated API types.

## Why This Matters

Keeping generated API types as the single source of truth:

- Eliminates manual type drift between the API, SDK, and CLI.
- Keeps downstream consumers aligned with the OpenAPI schema.
- Makes CI failures meaningful and actionable.
- Prevents runtime contract mismatches caused by stale local types.
- Ensures new endpoints reuse `components["schemas"]` or named exports from `src/index.ts`.
- Preserves `src/generated.ts` as a fully reproducible artifact.
- Keeps the SDK `Chain` enum synchronized with OpenAPI `ChainIdentifier`.

## Conventions

- ESM-only package via `"type": "module"`.
- Dual CJS/ESM output via `tsup`, so consumers can `import` or `require`.
- The `update-spec` script is idempotent and safe to run anytime.
- `update-spec` prints path and schema counts on success.
- Use `/sync-openapi` for the full monorepo flow: fetch spec, regenerate types, and open a PR if changed.