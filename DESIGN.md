# Design System: Astryx Matcha

The site is built on [Astryx](https://github.com/facebook/astryx), Meta's
open-source design system, using the **matcha** theme (earthy green palette,
light and dark modes) with one brand override.

## Theme

* **Palette:** `@astryxdesign/theme-matcha` — earthy greens, cream light mode,
  deep moss dark mode. All colors come from Astryx semantic tokens
  (`--color-background-body`, `--color-text-primary`, `--color-accent`, …).
* **Dark mode:** the `Theme` provider (`src/components/SiteChrome.tsx`) manages
  a `light`/`dark` mode persisted in `localStorage('theme')`. An inline script
  in each HTML entry pre-paints the dark background to avoid a flash.
  Note: matcha's generated `theme.css` re-declares `:root { color-scheme }`,
  so `global.css` carries an unlayered `html[data-theme]` override to keep the
  toggle working document-wide.

## Typography

* **Headings:** `Fraunces` (editorial serif, carried over from the previous
  design) — overrides matcha's default heading font via
  `--font-family-heading` in `src/styles/global.css`.
* **Body:** `DM Sans` (matcha's body face). Both loaded from Google Fonts in
  the HTML entries.

## Components

Everything visible is composed from Astryx components: `TopNav` + `MobileNav`
(chrome), `Section`/`Grid`/`Stack` (layout), `Card`, `Carousel` (featured app
screenshots), `Badge`, `List`, `Collapsible` (support FAQ accordion),
`Button`, `Link`, `Icon` (Lucide, matching matcha's icon set).

Custom CSS in `src/styles/global.css` is limited to page scaffolding the
system doesn't own: container widths, the hero screenshot collage, sticky
header, image treatments, and article bullet lists — all styled with Astryx
tokens so theming and dark mode keep working.

## Public Surface

The site intentionally focuses on:

* App Store portfolio
* Support page
* Privacy policy (stable anchors, e.g. `/privacy.html#biosignal`)
