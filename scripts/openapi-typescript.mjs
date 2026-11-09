#!/usr/bin/env node
/**
 * Runs the openapi-typescript CLI (arguments passed through) with its
 * `typescript` import pointed at `@typescript/typescript6`. openapi-typescript
 * 7.x prints its output with the classic compiler API, which TypeScript 7 does
 * not ship. A resolve hook works under both pnpm and the npm mirror, whose
 * `--legacy-peer-deps` install cannot override the peer.
 *
 * Remove this wrapper and the `@typescript/typescript6` devDependency once
 * openapi-typescript ships compiler-free generation:
 * https://github.com/openapi-ts/openapi-typescript/pull/2872
 */

import { createRequire, registerHooks } from "node:module"
import { dirname, join } from "node:path"
import { pathToFileURL } from "node:url"

const require = createRequire(import.meta.url)
const typescript6Url = pathToFileURL(
  require.resolve("@typescript/typescript6"),
).href

registerHooks({
  resolve(specifier, context, nextResolve) {
    if (specifier === "typescript") {
      return { url: typescript6Url, format: "commonjs", shortCircuit: true }
    }
    return nextResolve(specifier, context)
  },
})

// The package's `./*.js` export pattern maps bin/cli.js to a missing .mjs, so
// locate the bin from package.json instead of importing it by subpath.
const pkgPath = require.resolve("openapi-typescript/package.json")
const { bin } = require(pkgPath)
await import(pathToFileURL(join(dirname(pkgPath), bin["openapi-typescript"])).href)
