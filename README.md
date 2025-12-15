# Tailswatch

[![npm version](https://img.shields.io/npm/v/@pegasusheavy/tailswatch.svg)](https://www.npmjs.com/package/@pegasusheavy/tailswatch)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![CI](https://github.com/pegasusheavy/tailswatch/actions/workflows/ci.yml/badge.svg)](https://github.com/pegasusheavy/tailswatch/actions/workflows/ci.yml)

Customizable Tailwind CSS 4+ themes for import into other applications. Includes 43 ready-to-use themes inspired by Bootswatch, Material Design, and popular programming languages.

**[Live Demo & Documentation →](https://pegasusheavy.github.io/tailswatch)**

## Installation

```bash
npm install @pegasusheavy/tailswatch
# or
pnpm add @pegasusheavy/tailswatch
# or
yarn add @pegasusheavy/tailswatch
```

## Quick Start

Import a theme in your CSS:

```css
@import "@pegasusheavy/tailswatch/themes/cosmo";
```

Or import directly in your JavaScript/TypeScript:

```js
import "@pegasusheavy/tailswatch/themes/cosmo";
```

That's it! Your Tailwind classes will now use the Cosmo theme colors.

## Available Themes (43)

### Bootswatch-Inspired (25)

| Theme | Description | Mode |
|-------|-------------|------|
| `cerulean` | A calm blue sky theme | Light |
| `cosmo` | An ode to Metro | Light |
| `cyborg` | Jet black and electric blue | Dark |
| `darkly` | Flatly in night mode | Dark |
| `flatly` | Flat and modern | Light |
| `journal` | Crisp like a new sheet of paper | Light |
| `litera` | The medium is the message | Light |
| `lumen` | Light and shadow | Light |
| `lux` | A touch of class | Light |
| `materia` | Material is the metaphor | Light |
| `minty` | A fresh feel | Light |
| `morph` | A neumorphic layer | Light |
| `pulse` | A trace of purple | Light |
| `quartz` | A glassmorphic layer | Dark |
| `sandstone` | A touch of warmth | Light |
| `simplex` | Mini and minimalist | Light |
| `sketchy` | A hand-drawn look | Light |
| `slate` | Shades of gunmetal gray | Dark |
| `solar` | A spin on Solarized | Dark |
| `spacelab` | Silvery and sleek | Light |
| `superhero` | The brave and the blue | Dark |
| `united` | Ubuntu orange and unique font | Light |
| `vapor` | A cyberpunk aesthetic | Dark |
| `yeti` | A friendly foundation | Light |
| `zephyr` | Breezy and light | Light |

### Material Design (12)

| Theme | Description | Mode |
|-------|-------------|------|
| `material-light-blue` | Material Blue on light | Light |
| `material-dark-blue` | Material Blue on dark | Dark |
| `material-light-indigo` | Material Indigo on light | Light |
| `material-dark-indigo` | Material Indigo on dark | Dark |
| `material-light-purple` | Material Purple on light | Light |
| `material-dark-purple` | Material Purple on dark | Dark |
| `material-light-teal` | Material Teal on light | Light |
| `material-dark-teal` | Material Teal on dark | Dark |
| `material-light-green` | Material Green on light | Light |
| `material-dark-green` | Material Green on dark | Dark |
| `material-light-deeporange` | Material Deep Orange on light | Light |
| `material-dark-deeporange` | Material Deep Orange on dark | Dark |

### Programming Language-Inspired (4)

| Theme | Description | Mode |
|-------|-------------|------|
| `oxide` | Rust programming language inspired | Dark |
| `gopher` | Go programming language inspired | Light |
| `evergreen` | Node.js ecosystem inspired | Dark |
| `kernel` | C/C++ inspired, professional and battle-tested | Dark |

### Base Themes (2)

| Theme | Description | Mode |
|-------|-------------|------|
| `default` | Generic Tailwind CSS, no customization | Light |
| `dark` | Simple dark mode base | Dark |

## Usage Examples

### With Tailwind CSS 4+

```css
/* In your main CSS file */
@import "tailwindcss";
@import "@pegasusheavy/tailswatch/themes/cosmo";
```

### Dynamic Theme Switching

```html
<!-- Load themes as separate stylesheets -->
<link id="theme" rel="stylesheet" href="node_modules/@pegasusheavy/tailswatch/dist/themes/cosmo.css">

<script>
  function switchTheme(themeName) {
    document.getElementById('theme').href =
      `node_modules/@pegasusheavy/tailswatch/dist/themes/${themeName}.css`;
  }
</script>
```

### Using CSS Variables

All themes expose CSS custom properties you can use directly:

```css
.my-component {
  background: var(--color-primary-500);
  color: var(--color-text);
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-md);
}
```

## Design Tokens

Each theme provides a comprehensive set of design tokens:

### Colors (50-950 shades)
- `--color-primary-{shade}` - Primary brand color
- `--color-secondary-{shade}` - Secondary color
- `--color-accent-{shade}` - Accent color
- `--color-success-{shade}` - Success states
- `--color-warning-{shade}` - Warning states
- `--color-error-{shade}` - Error states
- `--color-info-{shade}` - Info states

### Surfaces
- `--color-background` - Page background
- `--color-foreground` - Default text color
- `--color-surface` - Card/component background
- `--color-surface-elevated` - Elevated surface
- `--color-surface-muted` - Muted surface
- `--color-border` - Border color

### Typography
- `--font-sans` - Sans-serif font stack
- `--font-heading` - Heading font stack
- `--font-mono` - Monospace font stack

### Effects
- `--radius-{size}` - Border radius (sm, default, md, lg, xl)
- `--shadow-{size}` - Box shadows (sm, default, md, lg, glow)

## Creating Custom Themes

Create a new theme file:

```css
@use "tailwindcss";

:root {
  /* Define your color palette */
  --color-primary-50: #eff6ff;
  --color-primary-100: #dbeafe;
  --color-primary-200: #bfdbfe;
  --color-primary-300: #93c5fd;
  --color-primary-400: #60a5fa;
  --color-primary-500: #3b82f6;
  --color-primary-600: #2563eb;
  --color-primary-700: #1d4ed8;
  --color-primary-800: #1e40af;
  --color-primary-900: #1e3a8a;
  --color-primary-950: #172554;

  /* ... define other colors ... */

  color-scheme: light;
}

@theme {
  --color-primary-50: var(--color-primary-50);
  --color-primary-100: var(--color-primary-100);
  /* ... register with Tailwind ... */
}
```

## Project Structure

```
tailswatch/
├── src/
│   └── themes/           # Theme source files
│       ├── cosmo.scss
│       ├── material-light-blue.scss
│       └── ...
├── dist/                 # Compiled CSS (generated)
│   └── themes/
├── docs/                 # Documentation site (Angular)
└── scripts/              # Build scripts
```

## Development

```bash
# Install dependencies
pnpm install

# Build all themes
pnpm run build

# Run documentation site
cd docs && pnpm install && pnpm start
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](LICENSE) © Pegasus Heavy Industries LLC
