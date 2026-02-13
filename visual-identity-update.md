# Visual Identity Update: Tuscan & Olive Protocol

The visual identity is being remodeled to follow a new "Tuscan & Olive" palette, emphasizing organic warmth with technical precision.

## 🎨 New Color Palette (Active)

| Name | Color | Usage |
|------|-------|-------|
| **Parchment** | `#f5f3ef` | Main Background, Cards |
| **Graphite** | `#2c2c2c` | Main Text, Strong Contrast Elements |
| **Tuscan Sun** | `#e8c468` | Primary Actions, Highlights (Gold/Yellow) |
| **Muted Olive** | `#9caf88` | Secondary Elements, Trust Indicators (Green) |
| **Dust Grey** | `#d9d4cf` | Borders, Inputs, Muted Elements |

### CSS Variables
```css
:root {
  --dust-grey: hsl(30 12% 83%);
  --muted-olive: hsl(89 20% 61%);
  --tuscan-sun: hsl(43 74% 66%);
  --parchment: hsl(40 23% 95%);
  --graphite: hsl(0 0% 17%);
}
```

## 🛠️ Implementation Status

### 1. Global Styles (`globals.css`)
- [x] Defined new `:root` variables.
- [x] Updated Semantic Mappings:
    - `primary` -> `tuscan-sun`
    - `secondary` -> `muted-olive`
    - `background` -> `parchment`
    - `foreground` -> `graphite`
- [x] Added new Gradient Utilities (`bg-gradient-top`, `bg-gradient-right`, etc.).
- [x] Mapped old aliases (`seashell`, `seagrass`) to new keys for backward compatibility.

### 2. Component Review
- Check `Hero` section styling.
- Check `Buttons` for contrast with new yellow primary.

## 📝 Notes
- The "Tuscan Sun" yellow is bright. Ensure `primary-foreground` is dark (`graphite`) for readability.
- The "Muted Olive" is soft. Use it for supporting elements.
