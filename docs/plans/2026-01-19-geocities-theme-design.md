# Geocities Theme Design

## Overview

A chaotic, nostalgic theme inspired by the peak Geocities era (1996-1998). Maximum eye-burn aesthetic with neon colors on purple/teal backgrounds, mixed typography chaos, and beveled Windows 95-style effects.

## Color Palette

### Background & Surfaces
| Token | Value | Description |
|-------|-------|-------------|
| `--color-background` | `#1a0a2e` | Deep purple canvas |
| `--color-foreground` | `#ffffff` | White |
| `--color-surface` | `#0d4a4a` | Teal for cards/elevated |
| `--color-surface-elevated` | `#0f5c5c` | Lighter teal |
| `--color-surface-muted` | `#2d1f3d` | Dark purple-gray |
| `--color-border` | `#ff00ff` | Bright magenta borders |
| `--color-border-muted` | `#663366` | Muted magenta |

### Primary (Hot Pink/Magenta)
| Token | Value |
|-------|-------|
| `--color-primary-50` | `#fff0ff` |
| `--color-primary-100` | `#ffe0ff` |
| `--color-primary-200` | `#ffb3ff` |
| `--color-primary-300` | `#ff80ff` |
| `--color-primary-400` | `#ff40ff` |
| `--color-primary-500` | `#ff00ff` |
| `--color-primary-600` | `#cc00cc` |
| `--color-primary-700` | `#990099` |
| `--color-primary-800` | `#660066` |
| `--color-primary-900` | `#330033` |
| `--color-primary-950` | `#1a001a` |

### Secondary (Lime Green)
| Token | Value |
|-------|-------|
| `--color-secondary-50` | `#f0fff0` |
| `--color-secondary-100` | `#e0ffe0` |
| `--color-secondary-200` | `#b3ffb3` |
| `--color-secondary-300` | `#80ff80` |
| `--color-secondary-400` | `#40ff40` |
| `--color-secondary-500` | `#00ff00` |
| `--color-secondary-600` | `#00cc00` |
| `--color-secondary-700` | `#009900` |
| `--color-secondary-800` | `#006600` |
| `--color-secondary-900` | `#003300` |
| `--color-secondary-950` | `#001a00` |

### Accent (Cyan)
| Token | Value |
|-------|-------|
| `--color-accent-50` | `#f0ffff` |
| `--color-accent-100` | `#e0ffff` |
| `--color-accent-200` | `#b3ffff` |
| `--color-accent-300` | `#80ffff` |
| `--color-accent-400` | `#40ffff` |
| `--color-accent-500` | `#00ffff` |
| `--color-accent-600` | `#00cccc` |
| `--color-accent-700` | `#009999` |
| `--color-accent-800` | `#006666` |
| `--color-accent-900` | `#003333` |
| `--color-accent-950` | `#001a1a` |

### Semantic Colors
| Token | Value | Description |
|-------|-------|-------------|
| `--color-success-500` | `#00ff00` | Lime green |
| `--color-warning-500` | `#ffff00` | Bright yellow |
| `--color-error-500` | `#ff0000` | Pure red |
| `--color-info-500` | `#00ffff` | Cyan |

### Text Colors
| Token | Value | Description |
|-------|-------|-------------|
| `--color-text` | `#ffffff` | Bright white |
| `--color-text-muted` | `#c9b8e0` | Light purple |
| `--color-text-subtle` | `#9a85b3` | Medium purple |
| `--color-text-inverse` | `#1a0a2e` | Dark purple |

## Typography

| Token | Value | Description |
|-------|-------|-------------|
| `--font-sans` | `"Comic Neue", cursive` | Body text - playful Comic Sans alternative |
| `--font-heading` | `"Bebas Neue", Impact, sans-serif` | Headings - bold condensed Impact-style |
| `--font-mono` | `"VT323", monospace` | Code - pixelated retro terminal |

Google Fonts imports required:
- Comic Neue (400, 700)
- Bebas Neue (400)
- VT323 (400)

## Border Radius

Minimal, boxy Windows 95 aesthetic:

| Token | Value |
|-------|-------|
| `--radius-sm` | `2px` |
| `--radius-default` | `2px` |
| `--radius-md` | `3px` |
| `--radius-lg` | `4px` |
| `--radius-xl` | `4px` |

## Shadows (Beveled 3D Effects)

Classic Windows 95 beveled look with light top-left, dark bottom-right edges:

| Token | Value | Description |
|-------|-------|-------------|
| `--shadow-sm` | `1px 1px 0 #000000, -1px -1px 0 #666666` | Subtle bevel |
| `--shadow-default` | `2px 2px 0 #000000, -1px -1px 0 #808080` | Standard bevel |
| `--shadow-md` | `2px 2px 0 #000000, -2px -2px 0 #808080` | Medium bevel |
| `--shadow-lg` | `3px 3px 0 #000000, -2px -2px 0 #999999` | Large bevel |

Additional custom shadow for glow effects on hover:
| Token | Value |
|-------|-------|
| `--shadow-glow-magenta` | `0 0 10px #ff00ff, 0 0 20px #ff00ff` |
| `--shadow-glow-cyan` | `0 0 10px #00ffff, 0 0 20px #00ffff` |

## Button Tokens

| Token | Value |
|-------|-------|
| `--color-button-primary-bg` | `#ff00ff` |
| `--color-button-primary-hover` | `#ff40ff` |
| `--color-button-primary-text` | `#000000` |
| `--color-button-secondary-bg` | `#00ff00` |
| `--color-button-secondary-hover` | `#40ff40` |
| `--color-button-secondary-text` | `#000000` |

## Implementation

### Files to Create/Modify

1. **Create:** `src/themes/geocities.scss`
   - Full theme following existing pattern
   - `:root` block with all CSS custom properties
   - `@theme` block registering with Tailwind

2. **Modify:** `docs/src/app/services/theme.service.ts`
   - Add theme metadata to registry
   - Category: "Base" (or create new "Retro" category)
   - `isDark: true`

### Build & Test

```bash
pnpm run build
pnpm run dev  # Test in docs site
```

## Theme Metadata

```typescript
{
  id: 'geocities',
  name: 'Geocities',
  description: 'Peak 1996-1998 chaos with neon colors and beveled effects',
  isDark: true,
  category: ThemeCategory.Base
}
```
