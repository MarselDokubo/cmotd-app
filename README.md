# CMOTD Website — Optimized Component Project v3

This is the consolidated Google Stitch export for the Centre for Marine and Offshore Technology Development (CMOTD), Rivers State University.

## What is standardized

- One Tailwind configuration: `tailwind.config.js`
- One compiled Tailwind stylesheet: `assets/css/tailwind-build.css`
- One design-token / typography stylesheet: `assets/css/cmotd-global.css`
- One site/navigation data source: `assets/js/site-config.js`
- One reusable component library: `assets/js/cmotd-components.js`
- One public header/navigation on all public/authentication pages
- One institutional-partner logo strip before every public footer
- One public footer
- One separate reusable e-Portal shell
- Shared button and card APIs

## Typography

The site now uses a single consistent hierarchy:

- **Newsreader** — every semantic heading (`h1`–`h6`), display title and editorial heading
- **Inter** — body text, navigation, labels, forms, buttons, tables and UI
- **System monospace** — technical identifiers / code
- **Material Symbols Outlined** — icons

Theme variants can still change colours and radii, but they no longer change the heading family.

## Project structure

```text
CMOTD_Optimized_Project/
├── index.html
├── preview.html
├── components.html
├── favicon.ico
├── tailwind.config.js
├── package.json
├── package-lock.json
├── assets/
│   ├── css/
│   │   ├── tailwind-build.css
│   │   └── cmotd-global.css
│   ├── font/
│   ├── img/
│   ├── js/
│   │   ├── site-config.js
│   │   └── cmotd-components.js
│   └── logos/
├── pages/
├── scripts/
├── src/
└── docs/
```

## Local fonts

`assets/css/cmotd-global.css` expects the self-hosted Inter, Newsreader and Material Symbols files described in `assets/font/README.md`.

If you are using the delivery archive, copy the font files from your current CMOTD project or run:

```powershell
.\scripts\copy-fonts-from-existing.ps1 -SourceProject "C:\path\to\your\current\CMOTD_Component_Project"
```

## Run locally

```bash
npm install
npm run build
npm run serve
```

Open:

```text
http://localhost:8080/
```

Use `preview.html` to browse the Stitch screens and `components.html` to inspect shared components.

## Development

Watch Tailwind while editing:

```bash
npm run dev
```

Format the project:

```bash
npm run format
```

Validate the project:

```bash
npm run validate
```

Run a build + validation pass:

```bash
npm run check
```

## Where to make global changes

- Colours, typography and radii: `assets/css/cmotd-global.css`
- Tailwind tokens/scanning: `tailwind.config.js`
- Navigation, routes, partner logos and institution data: `assets/js/site-config.js`
- Header, footer, partner strip, buttons, cards and portal shell: `assets/js/cmotd-components.js`

See `docs/OPTIMIZATION.md`, `docs/DESIGN.md` and `docs/COMPONENTS.md` for details.
