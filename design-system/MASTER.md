# Design System: Checklist do Bebê Esperto (0-12m) (Tuscan & Olive + Claymorphism)

## 1. Core Philosophy
- **Vibe:** Organic, Warm, Playful, "Baby-friendly" but Scientific.
- **Style:** **Claymorphism**. Soft 3D effects, rounded corners, "fluffy" UI elements.
- **Neutrality:** Avoiding gender stereotypes (Pink/Blue) in favor of Earth/Nature tones (Yellow/Green/Beige).

## 2. Color Palette (Tuscan & Olive)

| Role | Name | Hex | Tailwind Token |
|------|------|-----|----------------|
| **Background** | Parchment | `#F5F3EF` | `bg-background` |
| **Surface** | White | `#FFFFFF` | `bg-card` |
| **Primary** | Tuscan Sun | `#E8C468` | `bg-primary` (Text: Graphite) |
| **Secondary** | Muted Olive | `#9CAF88` | `bg-secondary` |
| **Text** | Graphite | `#2C2C2C` | `text-foreground` |
| **Muted Text** | Dust Grey | `#78716c` | `text-muted-foreground` |
| **Border** | Sand | `#D9D4CF` | `border-border` |

## 3. Typography

### Headings: **Varela Round**
- Rounded, friendly, soft.
- Usage: `font-heading`, `h1`-`h6`.

### Body: **Nunito Sans**
- Highly readable, approachable, geometric sans.
- Usage: `font-sans`, Paragraphs, UI text.

## 4. UI Patterns (Claymorphism)
- **Border Radius:** Large (`rounded-2xl`, `rounded-3xl`).
- **Shadows:** Double shadows for depth.
  - `shadow-clay`: `8px 8px 16px #d1d1d1, -8px -8px 16px #ffffff` (Soft extrusion)
- **Buttons:**
  - Pill shaped or highly rounded.
  - Inner glow/shadow for 3D feel.
- **Cards:**
  - White background with soft shadow.
  - "Fluffy" look.

## 5. Components

### Buttons
- **Primary:** Tuscan Sun background, Graphite text, Clay shadow. Hover: Scale up slightly.
- **Secondary:** Muted Olive background, White text.

### Hero Section
- Warm background (Parchment).
- Soft blob shapes for decoration.
- Friendly imagery.

## 6. Anti-Patterns
- Sharp corners (`rounded-none`, `rounded-sm`).
- Harsh black shadows.
- Neon colors (except for specific attention grabbers if needed, but prefer warm tones).
- "Corporate" blues.
