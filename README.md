# nextjs-13.4.19-basepath-rewrite-issue

Demonstration of an issue with Next.js on Netlify when using basePath and rewrites together.

Based on the [Turborepo basic starter](https://github.com/vercel/turbo/tree/main/examples/basic), there are two Next.js apps:

- `apps/web`: The main app served on http://localhost:3000.

  The `main` branch is deployed to https://nextjs-basepath-rewrite-issue-web.netlify.app

  The `plugin-nextjs-latest` branch is deployed to https://plugin-nextjs-latest--nextjs-basepath-rewrite-issue-web.netlify.app

  The `nextjs-latest` branch is deployed to https://nextjs-latest--nextjs-basepath-rewrite-issue-web.netlify.app

  The `both-latest` branch is deployed to https://both-latest--nextjs-basepath-rewrite-issue-web.netlify.app

- `apps/docs`: A secondary app served on http://localhost:3001/docs, and http://localhost:3000/docs via a rewrite on the main app.

  The `main` branch is deployed to https://nextjs-basepath-rewrite-issue-docs.netlify.app

  The `plugin-nextjs-latest` branch is deployed to https://plugin-nextjs-latest--nextjs-basepath-rewrite-issue-docs.netlify.app

  The `nextjs-latest` branch is deployed to https://nextjs-latest--nextjs-basepath-rewrite-issue-docs.netlify.app

  The `both-latest` branch is deployed to https://both-latest--nextjs-basepath-rewrite-issue-docs.netlify.app

These are deployed to Netlify via the Netlify CLI in a GitHub Actions workflow.

The `both-latest` branch is also deployed to Vercel via its GitHub integration:
- https://nextjs-basepath-rewrite-issue-web.vercel.app
- https://nextjs-basepath-rewrite-issue-docs.vercel.app/docs

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

## The issue

The `main` branch demonstrates the desired behaviour, where the `docs` app is served on both https://nextjs-basepath-rewrite-issue-web.netlify.app/docs and https://nextjs-basepath-rewrite-issue-docs.netlify.app/docs.

Using versions:

- `@netlify/plugin-nextjs@4.30.4`
- `next@13.4.9`
- `netlify-cli@16.1.0` (latest as of writing)

However, the rewrite proxying functionality stops working when upgrading either of the `@netlify/plugin-nextjs` or `next` packages to the latest versions.

The `plugin-nextjs-latest` branch includes an upgrade to `@netlify/plugin-nextjs@4.40.1`. Open https://plugin-nextjs-latest--nextjs-basepath-rewrite-issue-web.netlify.app/docs and observe infinite HTTP redirects `/docs` -> `/docs/` -> `/docs` -> `/docs/` -> etc.

Open http://localhost:3000/docs and observe the site loads normally.

The `nextjs-latest` branch includes an upgrade to `next@13.4.19`. Open https://nextjs-latest--nextjs-basepath-rewrite-issue-web.netlify.app/docs and observe a 404 error.

Open http://localhost:3000/docs and observe the site loads normally.

The `both-latest` branch includes both upgrades. Open https://both-latest--nextjs-basepath-rewrite-issue-web.netlify.app/docs and observe a 404 error.

On Vercel, open https://nextjs-basepath-rewrite-issue-web.vercel.app/docs and observe infinite HTTP redirects: `/docs` -> `/docs` -> `/docs` -> `/docs` -> etc.

Open http://localhost:3000/docs and observe the site loads normally.
