#!/usr/bin/env node

/**
 * Fetches the latest OpenSea API OpenAPI spec and writes it to opensea-api.json.
 * Falls back to the existing local file on network errors.
 *
 * Usage:
 *   node scripts/update-spec.mjs
 */

import { execFileSync } from "node:child_process";
import { existsSync, writeFileSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const SPEC_URL = "https://api.opensea.io/api/v2/openapi.json";

const __dirname = dirname(fileURLToPath(import.meta.url));
const outPath = resolve(__dirname, "..", "opensea-api.json");

try {
  console.log(`Fetching spec from ${SPEC_URL}...`);
  const res = await fetch(SPEC_URL);
  if (!res.ok) throw new Error(`${res.status} ${res.statusText}`);

  const text = await res.text();
  const spec = JSON.parse(text);

  writeFileSync(outPath, JSON.stringify(spec, null, 2) + "\n");
  console.log(
    `Updated opensea-api.json — ` +
      `${Object.keys(spec.paths || {}).length} paths, ` +
      `${Object.keys(spec.components?.schemas || {}).length} schemas`,
  );

  // Match the repo's JSON formatting (biome inlines short arrays at lineWidth
  // 80) so diffs reflect real spec changes, not formatter drift.
  try {
    execFileSync("pnpm", ["exec", "biome", "format", "--write", outPath], {
      stdio: "inherit",
    });
  } catch (err) {
    console.warn(`biome format failed (continuing): ${err.message}`);
  }
} catch (err) {
  console.error(`Failed to fetch spec: ${err.message}`);
  if (existsSync(outPath)) {
    console.log("Using existing local opensea-api.json");
  } else {
    console.error("No local spec available. Cannot continue.");
    process.exit(1);
  }
}
