# KodBuster source site

Maintainable source for the KodBuster website. The legacy static export remains at the repository root until this project is approved and deployed.

## Local development

```bash
npm ci
npm run dev
```

Open `http://localhost:3000`.

## Quality checks

```bash
npm run lint
npm run typecheck
npm run build
npx playwright install chromium
npm run test:e2e
```

The E2E command rebuilds the static export and tests the production output rather than the development HMR server.

## GitHub Pages build

The manually triggered Pages workflow sets `NEXT_PUBLIC_BASE_PATH=/KodBuster_ru` and publishes `site/out`. Merging source code alone does not replace the live site. Static export is configured in `next.config.ts`.

Do not edit `out/` or `.next/`; they are generated artifacts.
