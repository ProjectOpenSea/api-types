# api-types — Agent Conventions

Auto-generated TypeScript types from the OpenSea API v2 OpenAPI spec. Source of truth for API types in the devtools ecosystem.

## Quick commands

```bash
cd packages/api-types
pnpm run update-spec   # fetch latest OpenAPI spec
pnpm run build         # regenerate types and bundle
pnpm run type-check
pnpm run test
pnpm run lint
```

## Responsibilities

- Keep `opensea-api.json` as the committed, versioned OpenAPI snapshot.
- Generate named schema exports, auth-scope metadata, and response helpers from the spec.
- Provide the types that `@opensea/sdk` and `@opensea/cli` import.

## Rules

1. **Never hand-edit generated files** in `src/generated.ts`, `src/schemas-generated.ts`, or `src/auth-scopes-generated.ts`. Run `pnpm run build` after `update-spec`.
2. **Add API endpoints via the spec first**. Before writing SDK/CLI methods, run `pnpm --filter @opensea/api-types run update-spec && pnpm --filter @opensea/api-types run build`. Hand-rolling request/response types is forbidden and `pnpm check-api-paths` (from the repo root) will fail.
3. **Schema additions are automatic**. New `components.schemas.*` entries become named exports automatically; only edit `src/index.ts` for non-schema helpers or response envelopes.
4. **Rebuild downstream**. After spec changes, rebuild api-types, then run `pnpm --filter sdk run check-types` and `pnpm --filter cli run build`.
5. **Export check**. CI runs `node packages/api-types/scripts/check-consumer-imports.mjs` to ensure every workspace import from `@opensea/api-types` exists in `dist/index.d.ts`.
6. **Auth-scope drift**. CI runs `node scripts/check-auth-scope-drift.mjs` (repo root) to compare the auth scopes in `opensea-api.json` against the live `/api/v2/auth/scopes` registry. Re-run `update-spec` + `build` when it reports drift.

## Conventions

- ESM-only, dual CJS/ESM output via tsup.
- `pnpm run update-spec` is idempotent and falls back to the local file on network errors.
- Use `/sync-openapi` for the full fetch → regenerate → PR flow.
