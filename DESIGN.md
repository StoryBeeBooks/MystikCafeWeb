# Mystik Cafe - Atmosphere & Visual Language
*Goal: Create a clean, sophisticated, and inviting digital experience.*

## 1. The "Vibe" (Emotional North Star)
The user should feel like they are entering a **premium, modern sanctuary** for exotic creatures.
- **Keywords:** Clean, Sophisticated, Airy, Inviting, Premium, Trustworthy.
- **The Feeling:** Not a zoo, but a curated experience. Think high-end café meets nature sanctuary.
- **The Pace:** Effortless and intuitive. The design should guide, not overwhelm.

## 2. Design Philosophy: Minimalist & Clean
**Core Principles:**
- **Whitespace is King:** Let content breathe. More space = more elegance.
- **No Unnecessary Frames:** Remove bordered boxes and containers. Use spacing and subtle shadows instead.
- **Flat & Clean:** Reduce visual clutter. If an element doesn't serve a purpose, remove it.
- **Hierarchy Through Typography:** Use font weight, size, and color to create hierarchy, not boxes.

## 3. Color System (Updated January 2026)

### Background Hierarchy (Light to Dark)
| Level | Color | Hex | Usage |
|-------|-------|-----|-------|
| **Primary** | Pure White | `#FFFFFF` | Main content areas, cards |
| **Secondary** | Milky White | `#F5F5F0` | Alternate sections, subtle backgrounds |
| **Tertiary** | Light Grey | `#F8F9FA` | Subtle dividers, input backgrounds |
| **Accent** | Dark Green | `#0D2818` | Header, footer, special sections (sparingly) |

### Text Color Hierarchy (Dark to Light)
| Level | Color | Hex | Usage |
|-------|-------|-----|-------|
| **Primary** | Black | `#1A1A1A` | Main headings, important text |
| **Secondary** | Dark Grey | `#4A4A4A` | Subheadings, body text |
| **Tertiary** | Grey | `#6B7280` | Captions, secondary info |
| **Accent** | Navy Blue | `#1E3A5F` | Links, special highlights |
| **Brand** | Dark Green | `#0D2818` | Brand elements, CTAs |

### Accent Colors (Use Sparingly)
| Color | Hex | Usage |
|-------|-----|-------|
| **Emerald** | `#4ade80` | Success states, eco messaging |
| **Warm Cream** | `#F5E6D3` | Warm accents on dark backgrounds |

## 4. Visual Language & Metaphors (Refined)

### "Clean Canopy" (Navigation & Headers)
- **Concept:** Light, airy, and unobtrusive.
- **Execution:** Simple, clean navigation. White or light backgrounds. No heavy borders.

### "Open Space" (Content Areas)
- **Concept:** Gallery-like presentation. Content should feel curated.
- **Backgrounds:** White or milky white. Clean and bright.
- **Depth:** Subtle shadows only (`box-shadow: 0 2px 8px rgba(0,0,0,0.08)`). No heavy drop shadows.
- **Cards:** No visible borders. Use subtle shadows and background color differences.

### "Nature Touches" (Accents)
- **Concept:** Hints of nature, not overwhelming jungle.
- **Icons:** Clean SVG icons in dark green or grey.
- **Images:** High-quality photography as the nature element, not green backgrounds.

## 5. Typography Personality
- **Headings:** Bold and confident. Clean lines, professional feel.
- **Body Text:** Highly legible, comfortable reading experience.

### Current Font Stack
| Font | Use Case | CSS |
|------|----------|-----|
| **Rubik Distressed** | Feature Headlines only | `fontFamily: 'Rubik Distressed, sans-serif'` |
| **Antonio** | Section titles, card titles | `fontFamily: 'Antonio, sans-serif'` |
| **Questrial** | Body text, paragraphs | `fontFamily: 'Questrial, sans-serif'` |

### Adding New Google Fonts
1. Go to [fonts.google.com](https://fonts.google.com) and find the font
2. Add the import to `src/app/globals.css`:
   ```css
   @import url('https://fonts.googleapis.com/css2?family=Your+Font+Name&display=swap');
   ```
3. Use in components via inline style:
   ```jsx
   style={{ fontFamily: 'Your Font Name, sans-serif' }}
   ```
> ⚠️ **Note:** Do NOT use `next/font/google` with CSS variables for this project. Static export (`output: 'export'`) breaks the font loading. Always use the CSS `@import` method above.

> ⚠️ **Note (Tailwind Spacing):** Tailwind spacing classes (`mb-`, `px-`, `py-`, etc.) may NOT apply correctly in some cases. For critical spacing/padding, always use inline CSS styles instead:
> ```jsx
> style={{ marginBottom: '64px', padding: '20px 40px' }}
> ```

## 6. UI Element Guidelines

### Buttons
- **Primary:** Dark green background (`#0D2818`), white text
- **Secondary:** White background, dark green border and text
- **Tertiary:** Text only with underline on hover

### Cards
- **NO visible borders**
- White background with subtle shadow
- Generous padding (24px-32px)
- Rounded corners (16px-24px)

### Sections
- Alternate between white and milky white backgrounds
- Use generous vertical spacing (80px-120px between sections)
- No frame/border containers

### Forms & Inputs
- Clean, borderless inputs with subtle bottom border or light grey background
- Focus state: Dark green underline

## 7. Motion & Interaction
- **Cursor (Lizard on Hover):** Keep for brand personality:
  ```jsx
  cursor: 'url("data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\' width=\'32\' height=\'32\' viewBox=\'0 0 32 32\'><text y=\'24\' font-size=\'24\'>🦎</text></svg>"), pointer'
  ```
- **Hover States:** Subtle and elegant. Slight scale (1.02) or shadow increase.
- **Transitions:** Smooth and quick (0.2s-0.3s ease).

## 8. Tone of Voice
- **Professional but Warm:** Not overly playful, but approachable.
- **Educational:** Share knowledge elegantly.
- **Trustworthy:** Inspire confidence in animal care and visitor experience.

## 9. Responsive Rules (Mobile & Tablet)
*Principle: "Thumb-Friendly & Clean"*

### A. Breakpoints (Tailwind Standards)
- **Mobile First:** Code for mobile first (no prefix), then add `md:` (Tablet) and `lg:` (Desktop).
- **Tablet (iPad):** `md: 768px`. The "Hybrid Zone." Ensure 3-column grids become 2-columns here.
- **Desktop:** `lg: 1024px`. Full experience.

### B. Navigation Behavior
- **Mobile (`< md`):**
  - **Hamburger Menu:** Must be at the *bottom right* or *top right* (easily reachable).
  - **Drawer:** Slide out from the right.
  - **Links:** Large text (24px+), centered, with 20px padding between items.
- **Tablet (`md` to `lg`):**
  - Keep the Hamburger menu if there are >5 links.
  - If <5 links, show text links but increase padding.

### C. Touch Targets (Crucial for Kids/Parents)
- **Minimum Size:** All clickable elements (buttons, icons, links) must be at least **44x44px**.
- **Inputs:** Form inputs must have `font-size: 16px` to prevent iOS from zooming in automatically.
- **Spacing:** Add `gap-4` (16px) minimum between vertical buttons on mobile.

### D. Typography Scaling
- **Headers (`<h1>`):**
  - Mobile: `text-4xl` (Compact).
  - Desktop: `text-6xl` (Grand).
- **Body:**
  - Mobile: `text-base` (16px) is mandatory for readability.
  - Desktop: `text-lg` (18px) allowed for better reading comfort.

### E. Layout Adaptations
- **Grids:**
  - Mobile: `grid-cols-1`.
  - Tablet: `grid-cols-2`.
  - Desktop: `grid-cols-3` or `grid-cols-4`.
- **Padding:**
  - Mobile: `px-4` (16px) edge padding.
  - Tablet/Desktop: `px-8` or `px-12`.
- **Hero Section:**
  - Mobile: Text goes *below* the 3D model/Image (Stack vertical).
  - Desktop: Text and 3D model sit *side-by-side*.

---
*Note to AI: Prioritize whitespace and cleanliness. Remove unnecessary borders and frames. Use typography and spacing to create hierarchy. When in doubt, simplify.*
