# CMOTD Design System — v3

## Design direction

CMOTD uses a restrained academic-technical visual language: editorial authority for headings, precise sans-serif UI copy, deep navy and cobalt brand accents, restrained emerald verification states, and generous white space.

## Typography

- **Newsreader** — all semantic headings (`h1`–`h6`), display text, major card titles, and editorial emphasis.
- **Inter** — body copy, navigation, labels, controls, forms, buttons, tables, and dense operational UI.
- **System monospace** — code and technical identifiers.
- **Material Symbols Outlined** — local icon font.

Typography is controlled globally in `assets/css/cmotd-global.css` and exposed to Tailwind through CSS variables in `tailwind.config.js`. Page-level theme variants may change color or radius tokens, but no longer change heading families.

## Shared public components

- `<cmotd-site-header>` — institutional utility strip + public navigation.
- `<cmotd-institution-strip>` — standardized institutional/technology partner logos.
- `<cmotd-site-footer>` — global public footer.
- `<cmotd-button>` and `<cmotd-card>` — reusable controls and surfaces.

## Portal components

- `<cmotd-portal-sidebar>`
- `<cmotd-portal-topbar>`
- `<cmotd-portal-footer>`

## Build architecture

Tailwind is compiled locally into `assets/css/tailwind-build.css`. The project does not require the Tailwind CDN or Google Fonts CDN. Shared design tokens and self-hosted font faces live in `assets/css/cmotd-global.css`.

## Image policy

Large local photography is stored as WebP where practical. SVG is preferred for logos when available. Below-the-fold images use lazy loading and async decoding. Remote Stitch image URLs are retained until a dedicated asset-localization pass is performed so no page visuals are silently replaced.
