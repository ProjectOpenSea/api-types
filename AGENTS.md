# api-types — Agent Conventions

Auto-generated TypeScript types from the OpenSea API v2 OpenAPI spec. Source of truth for API types across the devtools ecosystem.

## Quick Reference

```bash
cd packages/api-types
pnpm run update-spec   # Fetch latest OpenAPI spec from api.opensea.io
pnpm run build         # Regenerate types from spec + bundle with tsup
pnpm run lint          # Type-check with tsc --noEmit
pnpm run test          # Run smoke tests with Vitest
```

## Architecture

| File | Role |
|------|------|
| `opensea-api.json` | Local copy of the OpenAPI spec (fetched from `api.opensea.io/api/v2/openapi.json`) |
| `scripts/update-spec.mjs` | Fetches the latest spec; falls back to existing local file on network errors |
| `src/generated.ts` | Auto-generated types from `openapi-typescript` — do not edit manually |
| `src/index.ts` | Named re-exports of commonly used schema types (collections, NFTs, orders, etc.) |
| `test/smoke.test.ts` | Smoke test verifying the generated types compile and export correctly |

## Review Checklist

When reviewing changes to this package, verify:

1. **Never hand-edit `src/generated.ts`**. It is produced by `openapi-typescript` from `opensea-api.json`. Changes are overwritten on the next build.

2. **New types in `src/index.ts`**: When the spec adds new schemas, add named re-exports in `src/index.ts` grouped by domain (Collections, NFTs, Orders, etc.). Other packages import from `@opensea/api-types` — unnamed schemas are only accessible via `components["schemas"]["..."]`.

3. **Downstream consumers**: The SDK (`@opensea/sdk`) and CLI (`@opensea/cli`) depend on this package. After updating the spec, rebuild api-types and verify downstream packages still compile:
   ```bash
   pnpm --filter @opensea/api-types run build
   pnpm --filter sdk run check-types
   pnpm --filter cli run build
   ```

   **Always-update-this-first rule**: when adding a new OpenSea v2 endpoint to the SDK or CLI, refresh the spec and regenerate types here BEFORE writing the SDK/CLI method. Hand-rolling request/response types in `packages/sdk/src/api/types.ts` or `packages/cli/src/types/api.ts` is forbidden and CI will block it (`pnpm check-api-paths`).

4. **Chain enum sync**: The SDK's `Chain` enum has a compile-time assertion against `ChainIdentifier` from this package. If the spec adds a new chain, the SDK build will fail until `Chain` is updated.

## Conventions

- ESM-only (`"type": "module"`).
- Dual CJS/ESM output via tsup (consumers can `import` or `require`).
- The `update-spec` script is idempotent — safe to run anytime. It prints the path/schema counts on success.
- Use `/sync-openapi` (monorepo slash command) for the full flow: fetch spec, regenerate, open a PR if changed.
