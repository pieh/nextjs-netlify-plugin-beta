# nextjs-13.5-netlify-follow-redirects-issue

Demonstration of an issue with Next.js when using basePath and rewrites together.

Based on the [Turborepo basic starter](https://github.com/vercel/turbo/tree/main/examples/basic), there are two Next.js apps:

- `apps/web`: The main app served on http://localhost:3000.

  The `main` branch is deployed to https://nextjs-follow-redirects-web.netlify.app

- `apps/docs`: A secondary app served on http://localhost:3001.

  The `main` branch is deployed to https://nextjs-follow-redirects-docs.netlify.app

## Usage

```shell
pnpm install

# run locally
pnpm dev

# deploy to Netlify
# must set environment variable NETLIFY_AUTH_TOKEN
# must edit site IDs in apps/{web,docs}/package.json to match your Netlify sites
pnpm run deploy
```

## The issue

The `docs` app is configured to use only server-side rendering (SSR), by having the `pages/_app.tsx` define `getInitialProps`.

When deployed to Netlify, the app raises this error:

```
Runtime.ImportModuleError - Error: Cannot find module 'follow-redirects' Require stack: - /var/task/.netlify/functions-internal/___netlify-handler/handlerUtils.js - /var/task/.netlify/functions-internal/___netlify-handler/___netlify-handler.js - /var/task/___netlify-handler.js - /var/runtime/index.mjs
```

Visit https://nextjs-follow-redirects-docs.netlify.app.
