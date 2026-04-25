# Design System Inspired by Apple

## 1. Visual Theme & Atmosphere
Apple's web presence is a masterclass in reverent product photography framed by near-invisible UI. The homepage is a stack of edge-to-edge product "tiles" — alternating light and dark canvases, each centered on a hero headline, a one-line tagline, two tiny blue pill CTAs, and an impossibly crisp product render. Nothing competes with the product. Typography is confident but quiet; color is either pure white, an off-white parchment, or a near-black tile; interactive elements are a single, quiet blue.

**Key Characteristics:**
*   Photography-first presentation; UI recedes so the product can speak.
*   Alternating full-bleed tile sections: white/parchment ↔ near-black.
*   Single blue accent (#0066cc / #0071e3) carries every interactive element.
*   Two button grammars: tiny blue pill CTAs (980px radius) and compact utility rects (8px radius).
*   SF Pro Display + SF Pro Text — negative letter-spacing at display sizes for the signature "Apple tight" headline feel.
*   Whisper-soft elevation used only when a product image needs to breathe.
*   Tight two-row nav: slim global nav + product-specific sub-nav with persistent right-aligned primary CTA.

## 2. Color Palette & Roles
*   **Primary Action Blue (#0066cc):** The single brand-level interactive color for text links and blue pill CTAs.
*   **Focus Blue (#0071e3):** Brighter sibling of Action Blue, reserved for keyboard focus rings (outline: 2px solid).
*   **Near-Black Ink (#1d1d1f):** Primary color for headlines and body text on light surfaces.
*   **Sky Link Blue (#2997ff):** Brighter blue for links on dark surfaces.
*   **Pearl Button (#fafafc):** Near-white fill for secondary "ghost" buttons.
*   **Pure White (#ffffff):** Dominant canvas for utility cards and grids.
*   **Parchment (#f5f5f7):** Signature off-white for alternating tiles and footer regions.
*   **Near-Black Tiles:** #272729 (Tile 1), #2a2a2c (Tile 2), #252527 (Tile 3).
*   **Pure Black (#000000):** Reserved for video backgrounds and the global nav bar.

## 3. Typography Rules
*   **Display Font:** "SF Pro Display" (for sizes ≥ 19px).
*   **Body/UI Font:** "SF Pro Text" (for sizes < 20px).
*   **Key Principles:**
    *   Negative letter-spacing (-0.12px to -0.374px) for headlines at 17px+.
    *   Body copy at 17px, not 16px.
    *   Weight 600 (not 700) for most headlines.
    *   Line-height: 1.07–1.19 (tight) for display, 1.47 for body, 2.41 for footer lists.

## 4. Component Stylings
*   **Buttons:**
    *   **Primary Blue Pill:** #0066cc background, white text, 980px radius, scale(0.95) on active.
    *   **Dark Utility:** #1d1d1f background, white text, 8px radius.
    *   **White Capsule:** #fafafc background, 11px radius.
*   **Cards:**
    *   **Product Tile:** Full-bleed (0 radius), no shadows on containers.
    *   **Utility Card:** White background, 18px radius, 1px hairline border.
*   **Shadows:** Exactly one drop-shadow token (`rgba(0, 0, 0, 0.22) 3px 5px 30px`) applied only to photographic product renders.

## 5. Layout Principles
*   **Spacing:** Base unit of 8px.
*   **Grid:** Max content width of 1440px (desktop lock).
*   **Philosophy:** Whitespace is the pedestal. High top/bottom padding (64px+) for section headlines.

## 6. Responsive Breakpoints
*   Desktop: 1440px+
*   Tablet landscape: 834px (Global nav collapses to hamburger)
*   Tablet portrait: 734px
*   Phone: 640px
*   Small phone: 419px
