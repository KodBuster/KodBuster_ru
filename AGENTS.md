# KodBuster Web Studio — agent operating guide

## Mission

Build KodBuster as a distinctive, high-converting Russian-language web studio site. The result must feel art-directed rather than template-generated, while remaining fast, accessible, responsive, and fully functional.

## Repository reality

- The current repository is a deployed static Next.js export, not the editable source project.
- It contains generated `index.html`, `_next/` chunks, route payloads, and a small `styles-fix.css` override.
- There is currently no `package.json`, `src/`, or `app/` directory.
- Do not pretend generated chunks are maintainable source code.
- For a full redesign, first restore/import the original source or create a clean source application. Keep the deployed export available until its replacement is verified.
- Only patch generated HTML/CSS for an explicitly requested emergency hotfix. Document every such patch.
- GitHub Pages is served below `/KodBuster_ru/`; preserve the base path and `.nojekyll` behavior until hosting changes.

## Required workflow

1. Inspect the repository, current live behavior, content, assets, deployment path, and git status.
2. State the primary conversion goal and the target visitor before choosing visuals.
3. Select one clear art direction. Define typography, color, spacing, grid, motion language, and image treatment before building sections.
4. Audit claims, prices, metrics, contact details, case studies, and links. Never invent proof, clients, performance numbers, or testimonials.
5. Write the page narrative and CTA system around one primary action. Secondary actions must not compete with it.
6. Build a complete vertical slice first: navigation, hero, one proof element, primary CTA, and mobile state.
7. Add motion and 3D only when they improve comprehension, brand perception, or conversion. Always provide reduced-motion and non-WebGL fallbacks.
8. Verify the rendered site in a real browser at every required viewport. Source review alone is not acceptance.
9. Fix failures, rerun checks, and report only tests actually performed.

## Skill routing

Project skills live in `.agents/skills/`. Read the complete relevant `SKILL.md` before acting.

The optional `.shared/visual-runtime` mentioned by `frontend-design-codex` is not vendored here. Use the project `playwright` skill for screenshots, console/request failures, and responsive browser evidence.

| Work type | Required skill(s) |
| --- | --- |
| New page, redesign, visual polish, component or layout work | `frontend-design-codex`, then `ui-ux-pro-max` |
| Hero, positioning, offer, CTA, pricing, objections | `landing-page-copy` |
| Hover, scroll, transitions, loading, feedback, touch behavior | `interaction-design` |
| Any layout or visual change | `responsive-web-design` |
| Image formats, sizing, loading, art direction | `image-optimization` |
| SEO metadata, headings, crawlability, content optimization | `seo-optimizer` |
| Performance review or pre-release optimization | `web-performance-audit` |
| Interactive 3D/WebGL experience | `threejs-web` |
| 360-degree product scene or configurator | `threejs-product-viewer` plus `threejs-web` |
| Browser verification, links, menus, forms, responsive QA | `playwright` |

Use the smallest relevant set. Do not invoke 3D skills for decorative effects that can be implemented more cheaply in CSS or SVG.

## Art-direction standards

- Start from the business and audience, not a fashionable component library.
- Avoid generic AI-site patterns: interchangeable gradient blobs, excessive glass cards, uniform rounded rectangles, random neon, and identical section rhythms.
- Every section needs a distinct job in the conversion story.
- Prefer a small, deliberate palette and a strong typographic hierarchy.
- Use Russian copy written for people; remove jargon, vague superlatives, and unsupported claims.
- Treat mobile as an intentionally designed composition, not a collapsed desktop page.
- Preserve legibility over spectacle. Motion must never block reading or primary actions.

## Functional acceptance gates

Before declaring a page or release complete:

- Header, navigation, mobile menu, anchors, links, buttons, forms, accordions, sliders, and modal controls work.
- Every CTA has a real destination or a clearly implemented action; no dead buttons.
- Forms have labels, validation, success/error feedback, spam strategy, and an actual delivery endpoint before production.
- Keyboard navigation, visible focus, semantic landmarks, meaningful alt text, and contrast are checked.
- `prefers-reduced-motion` is respected; essential content does not depend on animation.
- No horizontal overflow or clipped content at 360x800, 390x844, 768x1024, 1280x800, and 1440x900.
- Test long Russian words, multiline headings, browser zoom, and touch targets.
- No console errors, broken assets, mixed-content requests, or incorrect `/KodBuster_ru/` paths.
- Metadata, canonical URL, Open Graph data, favicon, robots policy, sitemap strategy, and structured data are reviewed.
- Target Core Web Vitals: LCP <= 2.5 s, INP <= 200 ms, CLS <= 0.1 on representative mobile conditions.
- Capture desktop and mobile screenshots and inspect them visually before handoff.

## Development and release rules

- Preserve user-authored changes and avoid unrelated rewrites.
- Prefer source-level changes in a reproducible build over hand-edited output.
- Keep secrets and private endpoints out of the repository.
- Add dependencies only when their value outweighs payload and maintenance cost.
- Do not publish, change DNS, or replace the production branch without explicit user approval.
- For substantial work, use a feature branch and a focused commit history.
- A successful build is necessary but not sufficient; browser QA is mandatory.

## Definition of done

The requested experience is implemented from maintainable source, visually reviewed on desktop and mobile, key interactions are browser-tested, conversion copy is coherent, accessibility and reduced motion are handled, SEO/performance basics are present, and remaining limitations are stated plainly.
