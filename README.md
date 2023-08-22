# nextjs-13.4.19-basepath-rewrite-issue

Demonstration of an issue with Next.js on Netlify when using basePath and rewrites together.

Based on the [Turborepo basic starter](https://github.com/vercel/turbo/tree/main/examples/basic), there are two Next.js apps:

- `apps/web`: The main app served on http://localhost:3000.
- `apps/docs`: A secondary app served on http://localhost:3001/docs, and http://localhost:3000/docs via a rewrite on the main app.

## Usage

```shell
pnpm install
pnpm dev
```

## The issue

The `main` branch demonstrates the desired behaviour, where the `docs` app is served on both http://localhost:3001/docs and http://localhost:3000/docs.
