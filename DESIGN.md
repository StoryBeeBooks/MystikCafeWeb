# Mystik Cafe - Design System & UI Guide
*Visual Theme: "Toronto Zoo" Style (Adventure, Organic, Playful, Accessible)*

## 1. Color Palette (Nature-Inspired)
**Primary (Jungle Greens):**
- `bg-zoo-green`: `#38761D` (Deep Leaf Green - Main Headers/Footers)
- `bg-zoo-light`: `#8FCE00` (Bright Shoot Green - Highlights/Accents)
- `bg-jungle-dark`: `#1a3b0e` (Deep Forest - Text/Contrast)

**Secondary (Earth & Warning):**
- `bg-earth-brown`: `#5B4032` (Tree Bark - Borders/Separators)
- `bg-alert-red`: `#D32F2F` (Urgent Info/Closures)
- `bg-sun-yellow`: `#FFC107` (Promos/Special Events)

**Neutral:**
- `bg-stone-50`: `#FAFAF9` (Main Backgrounds - clean read)
- `text-slate-900`: `#0F172A` (Body Copy)

## 2. Typography
**Headings (Playful & Bold):**
- Font: `'Bubblegum Sans'`, 'Comic Neue', or rounded sans-serif.
- Style: Thick, organic, friendly.
- Usage: `<h1>`, `<h2>`, Hero banners.

**Body (Readable & Clean):**
- Font: `'Inter'`, 'Open Sans', system-ui.
- Style: High legibility, 16px+ base size.

## 3. UI Components (Zoo Style)
**Buttons:**
- **Shape:** Fully Pill-shaped (`rounded-full`).
- **Style:** Flat color with slight shadow (`shadow-md`), no harsh gradients.
- **Hover:** Slight lift (`-translate-y-1`) + Brighten.
- **Example:** `<button class="bg-zoo-green text-white rounded-full px-8 py-3 font-bold hover:bg-green-700 transition">Book Now</button>`

**Cards (Animal/Event Cards):**
- **Border:** Soft rounded corners (`rounded-2xl`).
- **Shadow:** Deep, soft shadow (`shadow-lg`).
- **Image:** Full-width top image with curved top corners.
- **Footer:** "Learn More" button always at bottom right.

**Navigation:**
- **Desktop:** Sticky green bar (`bg-zoo-green`) with white text.
- **Mobile:** Hamburger menu with slide-out "Leaf" pattern background.

## 4. Visual Elements
- **Leaf Patterns:** Use subtle SVG leaf overlays on section dividers.
- **"Brush Stroke" Edges:** Avoid straight lines between sections; use "torn paper" or "brush stroke" SVG dividers (css-doodle or SVG shapes).
- **Icons:** Filled, rounded icons (FontAwesome or Heroicons styled as solid).

## 5. Accessibility (AODA Standard)
- High contrast text (White on Dark Green).
- Focus states must be visible (Orange ring).
- All images must have `alt` text describing the animal/scene.
