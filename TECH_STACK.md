# Project Context & Tech Stack

## Core Frameworks
- **Frontend:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **3D Graphics:** React Three Fiber (@react-three/fiber, @react-three/drei)
- **Database:** Supabase (PostgreSQL)
- **Auth:** Supabase Auth
- **Storage:** Supabase Storage (Buckets: `k12-assets`, `feeding-videos`)
- **Hosting:** GitHub Pages (Static Export `output: 'export'`)

## Coding Rules
1. **"Use Client":** Always add `'use client';` at the top of any component using `useState`, `useEffect`, or 3D canvas interactions.
2. **Images:** Since we deploy to GitHub Pages, use `unoptimized: true` in `next.config.mjs` and standard `<img>` tags if Next.js Image fails.
3. **3D Models:** 
   - Load GLB files using `useGLTF`.
   - Always disable `enableZoom` on `OrbitControls` for hero elements.
   - Use `<Suspense>` with a fallback loader for all 3D scenes.
4. **Data Fetching:** Use Supabase Client in `useEffect` for client-side fetching (since this is a static export site).
5. **Paths:** Be aware of the `basePath` if deploying to a project subfolder (though custom domain avoids this).
6. **Google Fonts (IMPORTANT for Static Export):**
   - `next/font/google` CSS variables do NOT work reliably with `output: 'export'` (static sites).
   - **Solution:** Import fonts directly via CSS in `globals.css`:
     ```css
     @import url('https://fonts.googleapis.com/css2?family=Font+Name&display=swap');
     ```
   - Then use inline style in components:
     ```jsx
     style={{ fontFamily: 'Font Name, sans-serif' }}
     ```
   - **Current fonts loaded:**
     - `Rubik Distressed` - Distressed/worn texture for headings
     - `Inter` - Clean body text

## Project Goal
We are building "Mystik Cafe" (Reptile Jungle).
- **Vibe:** Jungle, Adventure, Educational.
- **Key Features:** "Feed the Pet" video interactions, Ticket Booking (Weekend/Weekday pricing).
