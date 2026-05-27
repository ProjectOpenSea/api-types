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
| `src/schemas-generated.ts` | Auto-generated named re-exports of every `components.schemas.*` entry — do not edit manually |
| `src/index.ts` | Hand-written. Re-exports `schemas-generated.ts`, plus response envelopes and operation helpers |
| `scripts/generate-schema-exports.mjs` | Emits `schemas-generated.ts` from the spec; runs as part of `pnpm run generate` |
| `scripts/check-consumer-imports.mjs` | CI guard — verifies every name workspace packages import from `@opensea/api-types` is in the built `dist/index.d.ts` |
| `test/smoke.test.ts` | Smoke test verifying the generated types compile and export correctly |

## Review Checklist

When reviewing changes to this package, verify:

1. **Never hand-edit `src/generated.ts` or `src/schemas-generated.ts`**. Both are produced from `opensea-api.json` by `pnpm run generate`. Changes are overwritten on the next build.

2. **Adding a new schema export — no action needed**. When the spec adds a new `components.schemas.X`, it surfaces as a named export automatically via `src/schemas-generated.ts`. Only edit `src/index.ts` for non-schema additions: response envelopes (`components.responses`), operation helpers, or namespace re-exports.

3. **Downstream consumers**: The SDK (`@opensea/sdk`) and CLI (`@opensea/cli`) depend on this package. After updating the spec, rebuild api-types and verify downstream packages still compile:
   ```bash
   pnpm --filter @opensea/api-types run build
   pnpm --filter sdk run check-types
   pnpm --filter cli run build
   ```

   **Always-update-this-first rule**: when adding a new OpenSea v2 endpoint to the SDK or CLI, refresh the spec and regenerate types here BEFORE writing the SDK/CLI method. Hand-rolling request/response types in `packages/sdk/src/api/types.ts` or `packages/cli/src/types/api.ts` is forbidden and CI will block it (`pnpm check-api-paths`).

4. **Chain enum sync**: The SDK's `Chain` enum has a compile-time assertion against `ChainIdentifier` from this package. If the spec adds a new chain, the SDK build will fail until `Chain` is updated.

5. **Consumer-imports CI guard**: A standalone CI job (`API Types consumer imports` in `.github/workflows/ci.yml`) runs `scripts/check-consumer-imports.mjs` on every PR. It greps every `from "@opensea/api-types"` import across the workspace and verifies each named import is exported by the built `dist/index.d.ts`. If a name is missing, the job fails with the file/line that imports it. This catches the failure mode where a downstream change happens to resolve through the workspace but would break against the published artifact (the exact bug that briefly broke order posting in SDK 11.0).

## Conventions

- ESM-only (`"type": "module"`).
- Dual CJS/ESM output via tsup (consumers can `import` or `require`).
- The `update-spec` script is idempotent — safe to run anytime. It prints the path/schema counts on success.
- Use `/sync-openapi` (monorepo slash command) for the full flow: fetch spec, regenerate, open a PR if changed.
