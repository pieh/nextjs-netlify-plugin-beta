# nextjs-13.5-netlify-follow-redirects-issue

Demonstration of an issue with Next.js when using basePath and rewrites together.

Based on the [Turborepo basic starter](https://github.com/vercel/turbo/tree/main/examples/basic), there are two Next.js apps:

- `apps/web`: The main app served on http://localhost:3000.

  The `main` branch is deployed to https://nextjs-follow-redirects-web.netlify.app

- `apps/docs`: A secondary app served on http://localhost:3001/docs, and http://localhost:3000/docs via a rewrite on the main app.

  The `main` branch is deployed to https://nextjs-follow-redirects-docs.netlify.app

## Usage

```shell
pnpm install

# run locally
pnpm dev

# deploy to Netlify
# must set environment variables NETLIFY_AUTH_TOKEN and NEXT_REWRITE_DOCS_URL
# must edit site IDs in apps/{web,docs}/package.json to match your Netlify sites
pnpm run deploy
```
