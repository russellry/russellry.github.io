# Russell Ong - Portfolio Website

Personal portfolio hosted on GitHub Pages at [russellry.github.io](https://russellry.github.io/).

## About

Showcase for Russell Ong's indie iOS development work, with App Store app listings, a privacy policy, and a support page.

### Apps Featured

* **Treasure Life** - Life & Memories
* **RiskM** - Trading Utility
* **Tomorrow** - Focus & Productivity
* **Persona** - MBTI Growth
* **ContactSweeper** - Contact Cleaner

## Tech Stack

* **[Astryx](https://github.com/facebook/astryx)** - Meta's open-source design system (`@astryxdesign/core` + `theme-matcha`)
* **React 19 + TypeScript** - Component-based pages
* **Vite** - Multi-page build (`index.html`, `privacy.html`, `support.html`)
* **GitHub Pages** - Static hosting deployed via GitHub Actions

## Development

```bash
npm install
npm run dev       # local dev server
npm run build     # type-check + production build into dist/
npm run preview   # preview the production build
npm run astryx -- component --list   # Astryx CLI (requires Node 22+)
```

Pages live in `src/pages/`, shared chrome (nav, footer, theme provider) in
`src/components/`, and app listing data in `src/data/apps.ts`. Static files
(screenshots, `robots.txt`, `sitemap.xml`, `app-ads.txt`) are served verbatim
from `public/`.

## Deployment

Pushes to `master` build and deploy through `.github/workflows/deploy.yml`.
GitHub Pages must be set to **Source: GitHub Actions** in the repo settings.

## Design System

See [DESIGN.md](DESIGN.md) for theming notes.

## Live Site

[https://russellry.github.io](https://russellry.github.io)
