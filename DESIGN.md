# Design System: App Lab

A sharp, editorial portfolio system for `russellry.github.io`, built around real app screenshots and concise product information.

## Color Palette

| Token | Value | Role |
|-------|-------|------|
| `--bg` | `#f6f8f3` | Page background |
| `--surface` | `#ffffff` | Cards and document surfaces |
| `--surface-soft` | `#eef4ec` | Secondary panels |
| `--surface-ink` | `#121512` | High-contrast blocks and buttons |
| `--border` | `#d8e0d4` | Separators |
| `--text` | `#111411` | Primary text |
| `--text-secondary` | `#515b50` | Body copy |
| `--accent` | `#156f5b` | Product accent |
| `--accent-warm` | `#ff5a45` | Warm marker |
| `--accent-cool` | `#2f7ed8` | Cool marker |
| `--accent-lime` | `#c9ff65` | Brand badge |

Dark mode swaps the same roles into a deep green/ink palette.

## Typography

* **Display:** `Fraunces` for editorial headings.
* **Body:** `Inter` for app copy, navigation, and UI labels.
* Letter spacing stays at `0`; responsive sizes use fixed breakpoint rules rather than viewport-width font scaling.

## Components

* **Nav:** Sticky glassy header with compact mobile menu on the homepage and simplified mobile nav on support/privacy pages.
* **Hero:** Full-viewport app screenshot collage with Russell's name as the first visual signal.
* **Showcase:** Featured app panel with screenshot carousel, app icon, bullets, and App Store CTA.
* **App Cards:** Repeated product cards with app icon, platform tags, screenshot preview, and App Store link.
* **Content Pages:** Shared document card treatment for support and privacy.

## Motion

* **Load choreography:** hero copy and navigation settle in with short, soft easing.
* **Ambient motion:** hero screenshots and the featured device float subtly.
* **Interaction:** app cards use pointer-aware tilt and shine on desktop, buttons have light press feedback, and carousel dots animate cleanly.
* **Accessibility:** `prefers-reduced-motion` disables named animations, parallax, tilt, shine, and long transitions.

## Public Surface

The site intentionally focuses on:

* App Store portfolio
* Support page
* Privacy policy
