/**
 * CMOTD GLOBAL TAILWIND CONFIGURATION
 * -----------------------------------
 * This is the single Tailwind configuration for the entire Stitch export.
 * Production pages use the locally compiled Tailwind CLI output in assets/css/tailwind-build.css.
 */
const cmotdTailwindConfig = {
  darkMode: "class",
  content: [
    "./index.html",
    "./preview.html",
    "./components.html",
    "./pages/**/*.html",
    "./scripts/**/*.js",
    "./assets/js/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        secondary: "rgb(var(--cmotd-color-secondary) / <alpha-value>)",
        "brand-slate-700": "rgb(var(--cmotd-color-brand-slate-700) / <alpha-value>)",
        "inverse-on-surface": "rgb(var(--cmotd-color-inverse-on-surface) / <alpha-value>)",
        "status-verified-bg": "rgb(var(--cmotd-color-status-verified-bg) / <alpha-value>)",
        "on-primary-fixed": "rgb(var(--cmotd-color-on-primary-fixed) / <alpha-value>)",
        "surface-container-low": "rgb(var(--cmotd-color-surface-container-low) / <alpha-value>)",
        "surface-container": "rgb(var(--cmotd-color-surface-container) / <alpha-value>)",
        "secondary-fixed-dim": "rgb(var(--cmotd-color-secondary-fixed-dim) / <alpha-value>)",
        "status-warning-bg": "rgb(var(--cmotd-color-status-warning-bg) / <alpha-value>)",
        "inverse-primary": "rgb(var(--cmotd-color-inverse-primary) / <alpha-value>)",
        "brand-navy-950": "rgb(var(--cmotd-color-brand-navy-950) / <alpha-value>)",
        "surface-container-highest":
          "rgb(var(--cmotd-color-surface-container-highest) / <alpha-value>)",
        "error-container": "rgb(var(--cmotd-color-error-container) / <alpha-value>)",
        "primary-fixed": "rgb(var(--cmotd-color-primary-fixed) / <alpha-value>)",
        "surface-dim": "rgb(var(--cmotd-color-surface-dim) / <alpha-value>)",
        "tertiary-fixed-dim": "rgb(var(--cmotd-color-tertiary-fixed-dim) / <alpha-value>)",
        "on-secondary-container": "rgb(var(--cmotd-color-on-secondary-container) / <alpha-value>)",
        "brand-cobalt-deep": "rgb(var(--cmotd-color-brand-cobalt-deep) / <alpha-value>)",
        "status-info-bg": "rgb(var(--cmotd-color-status-info-bg) / <alpha-value>)",
        "on-surface": "rgb(var(--cmotd-color-on-surface) / <alpha-value>)",
        "on-secondary-fixed": "rgb(var(--cmotd-color-on-secondary-fixed) / <alpha-value>)",
        outline: "rgb(var(--cmotd-color-outline) / <alpha-value>)",
        "brand-slate-50": "rgb(var(--cmotd-color-brand-slate-50) / <alpha-value>)",
        "tertiary-fixed": "rgb(var(--cmotd-color-tertiary-fixed) / <alpha-value>)",
        background: "rgb(var(--cmotd-color-background) / <alpha-value>)",
        "on-error": "rgb(var(--cmotd-color-on-error) / <alpha-value>)",
        "tertiary-container": "rgb(var(--cmotd-color-tertiary-container) / <alpha-value>)",
        "surface-bright": "rgb(var(--cmotd-color-surface-bright) / <alpha-value>)",
        "surface-tint": "rgb(var(--cmotd-color-surface-tint) / <alpha-value>)",
        "status-warning": "rgb(var(--cmotd-color-status-warning) / <alpha-value>)",
        "brand-slate-400": "rgb(var(--cmotd-color-brand-slate-400) / <alpha-value>)",
        "brand-slate-500": "rgb(var(--cmotd-color-brand-slate-500) / <alpha-value>)",
        primary: "rgb(var(--cmotd-color-primary) / <alpha-value>)",
        "on-primary": "rgb(var(--cmotd-color-on-primary) / <alpha-value>)",
        "brand-navy-900": "rgb(var(--cmotd-color-brand-navy-900) / <alpha-value>)",
        "on-surface-variant": "rgb(var(--cmotd-color-on-surface-variant) / <alpha-value>)",
        "inverse-surface": "rgb(var(--cmotd-color-inverse-surface) / <alpha-value>)",
        "on-secondary-fixed-variant":
          "rgb(var(--cmotd-color-on-secondary-fixed-variant) / <alpha-value>)",
        "brand-slate-800": "rgb(var(--cmotd-color-brand-slate-800) / <alpha-value>)",
        "on-tertiary-container": "rgb(var(--cmotd-color-on-tertiary-container) / <alpha-value>)",
        tertiary: "rgb(var(--cmotd-color-tertiary) / <alpha-value>)",
        "primary-fixed-dim": "rgb(var(--cmotd-color-primary-fixed-dim) / <alpha-value>)",
        "brand-slate-100": "rgb(var(--cmotd-color-brand-slate-100) / <alpha-value>)",
        "on-primary-container": "rgb(var(--cmotd-color-on-primary-container) / <alpha-value>)",
        "on-background": "rgb(var(--cmotd-color-on-background) / <alpha-value>)",
        "secondary-fixed": "rgb(var(--cmotd-color-secondary-fixed) / <alpha-value>)",
        "brand-cobalt": "rgb(var(--cmotd-color-brand-cobalt) / <alpha-value>)",
        error: "rgb(var(--cmotd-color-error) / <alpha-value>)",
        "status-verified-border": "rgb(var(--cmotd-color-status-verified-border) / <alpha-value>)",
        "status-info": "rgb(var(--cmotd-color-status-info) / <alpha-value>)",
        "on-tertiary-fixed": "rgb(var(--cmotd-color-on-tertiary-fixed) / <alpha-value>)",
        "on-tertiary": "rgb(var(--cmotd-color-on-tertiary) / <alpha-value>)",
        "surface-container-high": "rgb(var(--cmotd-color-surface-container-high) / <alpha-value>)",
        "status-verified": "rgb(var(--cmotd-color-status-verified) / <alpha-value>)",
        "brand-slate-200": "rgb(var(--cmotd-color-brand-slate-200) / <alpha-value>)",
        "primary-container": "rgb(var(--cmotd-color-primary-container) / <alpha-value>)",
        "status-danger-bg": "rgb(var(--cmotd-color-status-danger-bg) / <alpha-value>)",
        surface: "rgb(var(--cmotd-color-surface) / <alpha-value>)",
        "outline-variant": "rgb(var(--cmotd-color-outline-variant) / <alpha-value>)",
        "secondary-container": "rgb(var(--cmotd-color-secondary-container) / <alpha-value>)",
        "on-error-container": "rgb(var(--cmotd-color-on-error-container) / <alpha-value>)",
        "surface-variant": "rgb(var(--cmotd-color-surface-variant) / <alpha-value>)",
        "on-tertiary-fixed-variant":
          "rgb(var(--cmotd-color-on-tertiary-fixed-variant) / <alpha-value>)",
        "on-secondary": "rgb(var(--cmotd-color-on-secondary) / <alpha-value>)",
        "surface-container-lowest":
          "rgb(var(--cmotd-color-surface-container-lowest) / <alpha-value>)",
        "on-primary-fixed-variant":
          "rgb(var(--cmotd-color-on-primary-fixed-variant) / <alpha-value>)",
        "status-danger": "rgb(var(--cmotd-color-status-danger) / <alpha-value>)",
      },
      borderRadius: {
        DEFAULT: "var(--cmotd-radius-default)",
        lg: "var(--cmotd-radius-lg)",
        xl: "var(--cmotd-radius-xl)",
        full: "var(--cmotd-radius-full)",
        "2xl": "var(--cmotd-radius-2xl)",
      },
      spacing: {
        "gutter-desktop": "1.5rem",
        "portal-sidebar-width": "280px",
        "gutter-mobile": "1rem",
        "space-3xl": "4.5rem",
        "space-2xs": "0.25rem",
        "space-xl": "2rem",
        "space-sm": "0.75rem",
        "space-2xl": "3rem",
        "layout-max-width": "1280px",
        "space-4xl": "6rem",
        "space-xs": "0.5rem",
        "space-lg": "1.5rem",
        "space-md": "1rem",
      },
      fontFamily: {
        "headline-md": ["var(--cmotd-font-headline-md)"],
        "label-sm": ["var(--cmotd-font-label-sm)"],
        "headline-sm": ["var(--cmotd-font-headline-sm)"],
        "headline-lg": ["var(--cmotd-font-headline-lg)"],
        "body-md": ["var(--cmotd-font-body-md)"],
        "label-md": ["var(--cmotd-font-label-md)"],
        "display-xl": ["var(--cmotd-font-display-xl)"],
        "body-sm": ["var(--cmotd-font-body-sm)"],
        "display-lg": ["var(--cmotd-font-display-lg)"],
        "display-xl-mobile": ["var(--cmotd-font-display-xl-mobile)"],
        "code-sm": ["var(--cmotd-font-code-sm)"],
        "display-lg-mobile": ["var(--cmotd-font-display-lg-mobile)"],
        "body-lg": ["var(--cmotd-font-body-lg)"],
        "title-lg": ["var(--cmotd-font-title-lg)"],
        "headline-lg-mobile": ["var(--cmotd-font-headline-lg-mobile)"],
        "serif-editorial": ["var(--cmotd-font-serif-editorial)"],
        "serif-display": ["var(--cmotd-font-serif-display)"],
        "sans-editorial": ["var(--cmotd-font-sans-editorial)"],
        sans: ["var(--cmotd-font-sans)"],
      },
      fontSize: {
        "headline-md": [
          "var(--cmotd-fs-headline-md)",
          {
            lineHeight: "var(--cmotd-lh-headline-md)",
            letterSpacing: "var(--cmotd-ls-headline-md)",
            fontWeight: "var(--cmotd-fw-headline-md)",
          },
        ],
        "label-sm": [
          "var(--cmotd-fs-label-sm)",
          {
            lineHeight: "var(--cmotd-lh-label-sm)",
            letterSpacing: "var(--cmotd-ls-label-sm)",
            fontWeight: "var(--cmotd-fw-label-sm)",
          },
        ],
        "headline-sm": [
          "var(--cmotd-fs-headline-sm)",
          {
            lineHeight: "var(--cmotd-lh-headline-sm)",
            letterSpacing: "var(--cmotd-ls-headline-sm)",
            fontWeight: "var(--cmotd-fw-headline-sm)",
          },
        ],
        "headline-lg": [
          "var(--cmotd-fs-headline-lg)",
          {
            lineHeight: "var(--cmotd-lh-headline-lg)",
            letterSpacing: "var(--cmotd-ls-headline-lg)",
            fontWeight: "var(--cmotd-fw-headline-lg)",
          },
        ],
        "body-md": [
          "var(--cmotd-fs-body-md)",
          {
            lineHeight: "var(--cmotd-lh-body-md)",
            letterSpacing: "var(--cmotd-ls-body-md)",
            fontWeight: "var(--cmotd-fw-body-md)",
          },
        ],
        "label-md": [
          "var(--cmotd-fs-label-md)",
          {
            lineHeight: "var(--cmotd-lh-label-md)",
            letterSpacing: "var(--cmotd-ls-label-md)",
            fontWeight: "var(--cmotd-fw-label-md)",
          },
        ],
        "display-xl": [
          "var(--cmotd-fs-display-xl)",
          {
            lineHeight: "var(--cmotd-lh-display-xl)",
            letterSpacing: "var(--cmotd-ls-display-xl)",
            fontWeight: "var(--cmotd-fw-display-xl)",
          },
        ],
        "body-sm": [
          "var(--cmotd-fs-body-sm)",
          {
            lineHeight: "var(--cmotd-lh-body-sm)",
            letterSpacing: "var(--cmotd-ls-body-sm)",
            fontWeight: "var(--cmotd-fw-body-sm)",
          },
        ],
        "display-lg": [
          "var(--cmotd-fs-display-lg)",
          {
            lineHeight: "var(--cmotd-lh-display-lg)",
            letterSpacing: "var(--cmotd-ls-display-lg)",
            fontWeight: "var(--cmotd-fw-display-lg)",
          },
        ],
        "display-xl-mobile": [
          "var(--cmotd-fs-display-xl-mobile)",
          {
            lineHeight: "var(--cmotd-lh-display-xl-mobile)",
            letterSpacing: "var(--cmotd-ls-display-xl-mobile)",
            fontWeight: "var(--cmotd-fw-display-xl-mobile)",
          },
        ],
        "code-sm": [
          "var(--cmotd-fs-code-sm)",
          {
            lineHeight: "var(--cmotd-lh-code-sm)",
            letterSpacing: "var(--cmotd-ls-code-sm)",
            fontWeight: "var(--cmotd-fw-code-sm)",
          },
        ],
        "display-lg-mobile": [
          "var(--cmotd-fs-display-lg-mobile)",
          {
            lineHeight: "var(--cmotd-lh-display-lg-mobile)",
            letterSpacing: "var(--cmotd-ls-display-lg-mobile)",
            fontWeight: "var(--cmotd-fw-display-lg-mobile)",
          },
        ],
        "body-lg": [
          "var(--cmotd-fs-body-lg)",
          {
            lineHeight: "var(--cmotd-lh-body-lg)",
            letterSpacing: "var(--cmotd-ls-body-lg)",
            fontWeight: "var(--cmotd-fw-body-lg)",
          },
        ],
        "title-lg": [
          "var(--cmotd-fs-title-lg)",
          {
            lineHeight: "var(--cmotd-lh-title-lg)",
            letterSpacing: "var(--cmotd-ls-title-lg)",
            fontWeight: "var(--cmotd-fw-title-lg)",
          },
        ],
        "headline-lg-mobile": [
          "var(--cmotd-fs-headline-lg-mobile)",
          {
            lineHeight: "var(--cmotd-lh-headline-lg-mobile)",
            letterSpacing: "var(--cmotd-ls-headline-lg-mobile)",
            fontWeight: "var(--cmotd-fw-headline-lg-mobile)",
          },
        ],
      },
    },
  },
};

// Browser / Stitch-style preview mode.
if (typeof tailwind !== "undefined") {
  tailwind.config = cmotdTailwindConfig;
}

// Tailwind CLI / Node build mode. CDN preview mode already loads these plugins via the CDN URL.
if (typeof module !== "undefined" && module.exports) {
  cmotdTailwindConfig.plugins = [
    require("@tailwindcss/forms"),
    require("@tailwindcss/container-queries"),
  ];
  module.exports = cmotdTailwindConfig;
}
