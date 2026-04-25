# Design System: "Craft"

A warm, confident, modern design system for russellry.github.io.

## Color Palette

| Token | Value | Role |
|-------|-------|------|
| `--bg` | `#0a0a0f` | Page background |
| `--surface` | `#141419` | Elevated cards |
| `--surface-2` | `#1a1a22` | Secondary surfaces |
| `--border` | `#1e1e26` | Subtle separators |
| `--text` | `#f0f0f5` | Primary text |
| `--text-secondary` | `#8a8a9a` | Muted labels |
| `--text-muted` | `#55556a` | Tertiary text |
| `--accent` | `#6366f1` | Indigo primary CTA |
| `--accent-2` | `#a78bfa` | Violet highlights |
| `--gradient` | `135deg #6366f1 → #a78bfa` | Signature gradient |

Light mode swaps `--bg` to `#f5f5f7`, `--surface` to `#ffffff`, etc.

## Typography

- **Display**: `"Outfit", sans-serif` — headings, hero text
- **Body**: `"Inter", sans-serif` — paragraphs, UI text
- Letter-spacing: `-0.03em` (display), default (body)
- Sizes: 72px hero, 48px section, 28px card, 16px body

## Components

- **Nav**: Frosted glass, fixed top, hamburger on mobile (≤768px)
- **Buttons**: Primary (gradient), Secondary (outlined), Ghost (text + arrow)
- **Cards**: Glass surface, 1px border, hover lift + accent top-bar
- **Showcase**: Full-width featured app with device frame carousel
- **Carousel**: Scroll-snap, dot indicators, auto-play, touch support
- **Scroll Reveal**: Intersection Observer, staggered delays

## Responsive Breakpoints

- Desktop: 1024px+
- Tablet: 768px–1023px
- Mobile: <768px (hamburger nav, stacked layouts)
