# CMOTD Reusable Component System

The Stitch export remains a static multi-page Tailwind project, but shared UI is now generated from native Web Components.

## The three files you normally edit

1. `tailwind.config.js` — global Tailwind theme and token mapping.
2. `assets/css/cmotd-global.css` — global CMOTD CSS variables: colours, fonts, radii and typography values.
3. `assets/js/site-config.js` — institution details, global routes, public navigation and footer links.

Shared component markup and behaviour live in `assets/js/cmotd-components.js`.

## Public shell

Every public page uses:

```html
<cmotd-site-header active="programmes"></cmotd-site-header>
...
<cmotd-site-footer></cmotd-site-footer>
```

Supported `active` values are `about`, `programmes`, `research`, `events`, `services`, and `support`.

Landing-page concepts can use the centrally maintained minimalist header:

```html
<cmotd-site-header variant="minimal"></cmotd-site-header>
```

## Portal shell

The e-Portal screens share:

```html
<cmotd-portal-sidebar active="overview"></cmotd-portal-sidebar>
<cmotd-portal-topbar title="Overview & Operations"></cmotd-portal-topbar>
...
<cmotd-portal-footer></cmotd-portal-footer>
```

Supported sidebar states are `overview`, `academic`, `certificates`, and `research`.

## Button component

```html
<cmotd-button
  href="..."
  icon="arrow_forward"
  >Apply Now</cmotd-button
>
<cmotd-button
  href="..."
  variant="secondary"
  size="sm"
  >Portal Login</cmotd-button
>
```

Variants: `primary`, `secondary`, `outline`, `ghost`.

Sizes: `sm`, `md`, `lg`.

Optional attributes: `icon`, `icon-position="start"`, `target`.

## Card component

```html
<cmotd-card variant="interactive"> ...card content... </cmotd-card>
```

Variants: `surface`, `interactive`, `media`, `course`.

The migration already converted the two most repeated Stitch card shells to `cmotd-card`, so changing those variants in `assets/js/cmotd-components.js` updates all converted cards.

## Adding a new page

Add the normal global CSS/Tailwind references, then load the two shared scripts:

```html
<script
  src="../assets/js/site-config.js"
  defer
></script>
<script
  src="../assets/js/cmotd-components.js"
  defer
></script>
```

Use `./assets/...` instead of `../assets/...` for files located at the project root.

The global navigation URLs themselves are resolved from the location of `site-config.js`, so they continue to work when the project is hosted under a subdirectory.

## Production Tailwind build

```bash
npm install
npm run build
```

`tailwind.config.js` scans `assets/js/**/*.js`, so Tailwind classes used inside the shared components are included in the generated production CSS.
