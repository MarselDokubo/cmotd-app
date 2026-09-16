# CMOTD Optimization Pass

This project has been consolidated around a single public design system.

## Typography

- **Newsreader** is the single heading/display family across all page variants.
- **Inter** is the body, navigation, form, label, and UI family.
- Material Symbols Outlined is self-hosted.
- Old Plus Jakarta Sans / Playfair / theme-specific heading overrides were removed.

## Shared components

- `<cmotd-site-header>` — one public utility bar + navigation.
- `<cmotd-institution-strip>` — one standardized partner-logo strip.
- `<cmotd-site-footer>` — one public footer.
- Portal pages retain their dedicated portal shell components.

## CSS

- Tailwind is compiled locally into `assets/css/tailwind-build.css`.
- Pages no longer load `cdn.tailwindcss.com` or per-page Tailwind configuration.
- `assets/css/cmotd-global.css` owns design tokens, typography, local font faces, and cross-site polish.

## Images

- Large local photographs are converted to WebP.
- Images receive async decoding and sensible eager/lazy loading defaults.
- Existing externally hosted Stitch images are preserved to avoid changing page content; they can be localized in a later asset-migration pass.
