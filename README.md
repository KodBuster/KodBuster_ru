# KodBuster

Repository for the KodBuster website.

## Active source

The maintainable Next.js source project is in [`site/`](site/README.md).

```bash
cd site
npm ci
npm run dev
```

## Legacy export

The root-level HTML and `_next/` files are the previous static export. They remain temporarily as a rollback reference and should not receive normal feature work.

## Deployment

- Pull requests run lint, type checks, production build, and Playwright tests.
- Publication is manual through the `Deploy source site to Pages` workflow; merging alone does not replace the live site.
- The deployment uses the `/KodBuster_ru/` base path.
