# Mystik Cafe - Atmosphere & Visual Language
*Goal: Immerse the user in a living, breathing digital jungle.*

## 1. The "Vibe" (Emotional North Star)
The user should feel like they are **parting the leaves** to discover something hidden.
- **Keywords:** Humidity, Discovery, Tactile, Lush, Secretive, Alive.
- **The Feeling:** It’s not just "green"; it’s *deep* rainforest shadow and *bright* dappled sunlight.
- **The Pace:** Slow and observant. The user shouldn't rush; they should explore.

## 2. Visual Language & Metaphors
When building UI, use these metaphors to guide your code decisions:

### "The Canopy Layer" (Navigation & Headers)
- **Concept:** High above the ground, bright but protective.
- **Execution:** Sticky headers shouldn't look like "bars"; they should feel like a canopy edge. Use organic, wavy bottom borders (SVG separators) that mimic leaf shapes, not straight lines.

### "The Understory" (Content Areas)
- **Concept:** Where the animals live. Shadowy, rich, and dense.
- **Backgrounds:** Never pure flat white. Use very subtle texture patterns (grain, leaf veins) or "off-white" stone colors (`#F8F9FA`) to reduce screen glare, mimicking the soft light of a forest floor.
- **Depth:** Use heavy drop shadows on cards to lift them off the "ground." The UI should have *Z-axis depth*, like layers of foliage.

### "Sunbeams" (Accents & Buttons)
- **Concept:** The light breaking through the trees.
- **Buttons:** These are your sunbeams. They should be vibrant, glowing (slight shadow/glow effect), and inviting.
- **Colors:** Use "Poison Frog Orange" or "Sunlight Yellow" for calls-to-action to slice through the green.

## 3. Typography Personality
- **Headings:** Must feel **Hand-Carved**. Imagine a wooden signpost on a safari trail. Use fonts that have slightly imperfect, rounded edges (e.g., *Bubblegum Sans, Balsamiq, or rounded sans*).
- **Body Text:** Clean and legible, like a field guide or a naturalist's journal.

## 4. Motion & Interaction (The "Alive" Factor)
- **Hover States:** Leaves rustle when touched. Buttons should have a "bouncy" spring physics animation on hover, not a linear fade.
- **Scrolling:** Elements should reveal themselves slowly (fade-up with a slight delay), like an animal stepping out from behind a tree.
- **Micro-Interactions:** A chameleon eye following the cursor, or a leaf swaying gently in the corner.

## 5. Tone of Voice
- **Do not say:** "Click here to subscribe."
- **Say:** "Join the Expedition."
- **Do not say:** "Contact Us."
- **Say:** "Send a Radio Signal."
- **Voice:** Enthusiastic, educational, and slightly mysterious. Like a favorite zookeeper telling you a secret.

---
*Note to AI: When generating code, prioritize "organic shapes" (border-radius: 20px+) over "digital squares." If a div can be rounded, round it. If a background can have a subtle gradient, add it.*
