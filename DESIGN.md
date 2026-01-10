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
| **Primary** | Pure White | `#FFFFFF` | Header, main content areas, cards, landing sections |
| **Secondary** | Milky White | `#F5F5F0` | Alternate sections (Experience, Gallery, Visit Us) |
| **Tertiary** | Light Grey | `#F8F9FA` | Testimonial cards, subtle dividers |
| **Accent** | Dark Green | `#0D2818` | Footer background, CTA buttons (sparingly) |

### Text Color Hierarchy (Dark to Light)
| Level | Color | Hex | Usage |
|-------|-------|-----|-------|
| **Primary** | Black | `#1A1A1A` | Main headings, header text, section titles |
| **Secondary** | Dark Grey | `#4A4A4A` | Subheadings, body text, descriptions |
| **Tertiary** | Grey | `#6B7280` | Captions, secondary info, subtle text |
| **Accent** | Navy Blue | `#1E3A5F` | Links (if needed) |
| **Brand** | Dark Green | `#0D2818` | CTA buttons, brand highlights |

### Social Media Brand Colors
| Platform | Color | Hex | Usage |
|----------|-------|-----|-------|
| **Instagram** | Pink | `#E4405F` | Instagram icon |
| **TikTok** | Black | `#000000` | TikTok icon |
| **Facebook** | Blue | `#1877F2` | Facebook icon |

### Accent Colors (Use Sparingly)
| Color | Hex | Usage |
|-------|-----|-------|
| **Emerald** | `#4ade80` | Success states (if needed) |
| **Warm Cream** | `#F5E6D3` | Only on dark backgrounds in footer |

## 4. Visual Language & Metaphors (Refined)

### "Clean Canopy" (Navigation & Headers)
- **Concept:** Light, airy, and unobtrusive.
- **Execution:** 
  - White background (`#FFFFFF`)
  - Black text and thin-line icons (`#1A1A1A`, `strokeWidth={1}`)
  - Minimal border (`1px solid rgba(0, 0, 0, 0.1)`)
  - Icon hover: Dark grey (`#4A4A4A`)
  - Fixed position with backdrop blur

### "Open Space" (Content Areas)
- **Concept:** Gallery-like presentation. Content should feel curated.
- **Backgrounds:** Alternate between white (`#FFFFFF`) and milky white (`#F5F5F0`)
- **Depth:** Subtle shadows only (`box-shadow: 0 2px 20px rgba(0, 0, 0, 0.04)`)
- **Cards:** No visible borders. Use subtle shadows and background color differences
- **Hover effects:** Gentle lift (`translateY(-8px)`) with increased shadow

### "Nature Touches" (Accents)
- **Concept:** Hints of nature, not overwhelming jungle.
- **Icons:** Clean SVG icons in dark colors (black or dark green)
- **Images:** High-quality photography as the nature element
- **Footer:** Dark background with image overlay for contrast

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

### Header (Navigation)
- **Background:** Pure white (`#FFFFFF`)
- **Text:** Black (`#1A1A1A`)
- **Icons:** Thin-line style (`strokeWidth={1}`), black color
- **Hover:** Icons change to dark grey (`#4A4A4A`)
- **Border:** `1px solid rgba(0, 0, 0, 0.1)`
- **Logo height:** 50px
- **Schedule text:** Black, bold for main hours, regular for sub-text

### Buttons
- **Primary CTA:** Dark green background (`#0D2818`), white text
- **Hover:** Slightly lighter green (`#1A3A2A`), subtle lift (`translateY(-2px)`)
- **Style:** Rounded (`borderRadius: 40px`), no borders, medium weight (500)
- **Font:** Questrial for body buttons, Rubik Distressed for hero CTAs

### Cards
- **Background:** White (`#FFFFFF`) on milky white sections
- **NO visible borders**
- **Shadow:** Subtle `0 2px 20px rgba(0, 0, 0, 0.04)`
- **Hover shadow:** `0 12px 40px rgba(0, 0, 0, 0.08)`
- **Padding:** Generous `clamp(20px, 4vw, 32px)`
- **Border radius:** `16px` for modern cards

### Sections
- **Pattern:** Alternate white and milky white backgrounds
  - Hero: White with image background
  - Experience: Milky white (`#F5F5F0`)
  - Testimonials: Pure white (`#FFFFFF`)
  - Gallery: Milky white (`#F5F5F0`)
  - Visit Us: Milky white (`#F5F5F0`)
  - Footer: Dark with background image
- **Spacing:** Generous vertical padding `clamp(60px, 10vw, 100px)` top/bottom
- **Visit Us bottom spacing:** Increased by 60% `clamp(96px, 16vw, 160px)` for footer separation
- **No frame/border containers:** Use whitespace for separation

### Footer
- **Background:** Dark image with overlay (`rgba(0, 0, 0, 0.4)`)
- **Text:** White/cream colors for contrast
- **Layout:** Removed JOIN US section, starts directly with links
- **Spacing:** Reduced gap between schedule and copyright
- **Social icons:** White with hover effects

### Forms & Inputs
- Clean, borderless inputs with subtle bottom border or light grey background
- Focus state: Dark green underline

## 7. Motion & Interaction
- **Cursor (Lizard on Hover):** Keep for brand personality:
  ```jsx
  cursor: 'url("data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\' width=\'32\' height=\'32\' viewBox=\'0 0 32 32\'><text y=\'24\' font-size=\'24\'>🦎</text></svg>"), pointer'
  ```
- **Hover States:** 
  - Cards: Subtle lift `translateY(-8px)` with shadow increase
  - Buttons: Slight color change and `translateY(-2px)`
  - Icons: Color change to dark grey (`#4A4A4A`)
  - Social icons: Scale `1.15` on hover
- **Transitions:** Smooth and quick (`0.2s-0.3s ease`)

## 8. Iconography
- **Style:** Thin-line SVG icons (`strokeWidth={1}`)
- **Colors:** 
  - Header icons: Black (`#1A1A1A`), hover dark grey (`#4A4A4A`)
  - Social media: Use brand colors (Instagram pink, TikTok black, Facebook blue)
  - Content icons: Dark green (`#0D2818`) or black
- **Size:** `28px` for header icons, scale appropriately for context
- **Examples:** Phone, calendar, user, lizard (custom SVG components)

## 9. Tone of Voice
- **Professional but Warm:** Not overly playful, but approachable and welcoming
- **Educational:** Share knowledge elegantly about reptiles and experiences
- **Trustworthy:** Inspire confidence in animal care and visitor safety
- **Inviting:** Encourage exploration and booking without pressure

## 10. Landing Page Section Examples

### Loading Screen
- **Background:** Pure white (`#FFFFFF`)
- **Icons:** Dark green (`#0D2818`), animated bounce
- **Text:** Dark grey (`#4A4A4A`), Questrial font
- **Progress bar:** Thin (3px), dark green, minimal style

### Experience Section ("Meet Our Jungle Friends")
- **Background:** Milky white (`#F5F5F0`)
- **Cards:** White with subtle shadow, no borders
- **Titles:** Black (`#1A1A1A`), no icons in titles
- **Hover:** Lift with increased shadow

### Testimonials ("What Our Guests Say")
- **Background:** Pure white (`#FFFFFF`)
- **Cards:** Light grey (`#F8F9FA`), no borders or avatars
- **Text:** Dark grey, star ratings in gold
- **Layout:** Minimal, clean, focused on content

### Gallery ("Moments at Mystik")
- **Background:** Milky white (`#F5F5F0`)
- **Text:** Black (`#1A1A1A`) for "Share your experience"
- **Social icons:** Brand colors (Instagram pink, TikTok black, Facebook blue)
- **No "The Experience" tagline:** Keep it simple

### Visit Us Section
- **Background:** Milky white (`#F5F5F0`)
- **Button:** Dark green (`#0D2818`) with white text
- **Extra spacing:** 60% more padding before footer
- **Text:** Single paragraph, no line breaks in description

## 11. Responsive Rules (Mobile & Tablet)
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
