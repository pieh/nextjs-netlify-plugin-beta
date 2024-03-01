# nextjs-netlify-plugin-beta

Trying `@netlify/plugin-nextjs@^5.0.0-beta.9`.

Based on the [Turborepo basic starter](https://github.com/vercel/turbo/tree/main/examples/basic), there are two Next.js apps:

- `apps/web`: The main app served on http://localhost:3000.

  The `main` branch is deployed to https://nextjs-netlify-plugin-beta-web.netlify.app

- `apps/docs`: A secondary app served on http://localhost:3001.

  The `main` branch is deployed to https://nextjs-netlify-plugin-beta-docs.netlify.app

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
