/**
 * @opensea/api-types
 *
 * Auto-generated TypeScript types from the OpenSea API v2 OpenAPI spec.
 * Re-run `pnpm --filter @opensea/api-types run build` after updating
 * opensea-api.json.
 *
 * Schema types (everything under `components.schemas`) are re-exported from
 * `./schemas-generated.ts`, which is regenerated from the spec on every
 * build. That eliminates the manual-curation gap — when the spec gains a
 * new schema, downstream consumers can import it immediately with no
 * intermediate step. Hand-written sections below cover the things the
 * generator can't infer mechanically (operations helpers, response
 * envelopes, namespace re-exports).
 */

export type { components, operations, paths } from "./generated.js"

import type { components, operations } from "./generated.js"

// ── Namespace re-export ─────────────────────────────────────────────

/**
 * The full `components.schemas` namespace. Useful when you want to look up
 * a schema dynamically (e.g. `Schemas["SomeRequest"]`) instead of via the
 * named export.
 */
export type Schemas = components["schemas"]

// ── Auto-generated schema types ─────────────────────────────────────
// Every `components.schemas.*` entry from opensea-api.json is exported by
// name from ./schemas-generated. Regenerate via `pnpm run generate`.

export * from "./schemas-generated.js"

// ── Auto-generated runtime values ───────────────────────────────────
// Scope metadata (names, descriptions, groups, endpoints, and MCP tools) derived
// from the spec's AuthScope schema extensions.
// schema. Regenerate via `pnpm run generate`.

export { AUTH_SCOPES, type AuthScopeInfo } from "./auth-scopes-generated.js"

// ── Response envelopes (components.responses) ───────────────────────
// These live under `components.responses`, not `components.schemas`, so
// they aren't covered by the auto-generated schema exports.

export type Responses = components["responses"]
export type BadRequest = Responses["BadRequest"]
export type Unauthorized = Responses["Unauthorized"]
export type NotFound = Responses["NotFound"]
export type RateLimit = Responses["RateLimit"]
export type InternalError = Responses["InternalError"]

// ── Operation helpers ───────────────────────────────────────────────
// Use these to extract request/response types for specific operations.

type OperationContentBody<T> = T extends {
  content: { "application/json": infer R }
}
  ? R
  : T extends { content: { "*/*": infer R } }
    ? R
    : T extends { content: { "multipart/form-data": infer R } }
      ? R
      : never

/** Extract the successful (200) response body type for a given operation. */
export type OperationResponse<T extends keyof operations> =
  operations[T] extends { responses: { 200: infer R } }
    ? OperationContentBody<R>
    : never

/** Extract the request body type for a given operation */
export type OperationRequestBody<T extends keyof operations> =
  operations[T] extends { requestBody: infer R }
    ? OperationContentBody<R>
    : never

/** Extract the path parameters type for a given operation */
export type OperationPathParams<T extends keyof operations> =
  operations[T] extends { parameters: { path: infer R } } ? R : never

/** Extract the query parameters type for a given operation */
export type OperationQueryParams<T extends keyof operations> = NonNullable<
  operations[T]["parameters"]["query"]
>
