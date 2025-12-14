# Tailswatch

Customizable Tailwind CSS 4+ themes for import into other applications.

## Installation

```bash
pnpm add tailswatch
```

## Usage

### Import the complete theme system

```css
@import "tailswatch";
```

### Import just the base configuration

```css
@import "tailswatch/base";
```

### Import a specific theme

```css
@import "tailswatch/themes/cosmo.css";
/* or */
@import "tailswatch/themes/darkly.css";
```

## Available Themes

### Bootswatch-Inspired Themes

| Theme       | Description                        | Mode  |
| ----------- | ---------------------------------- | ----- |
| `cerulean`  | A calm blue sky theme              | Light |
| `cosmo`     | An ode to Metro with vibrant blue  | Light |
| `cyborg`    | Jet black with electric cyan       | Dark  |
| `darkly`    | Dark mode version of Flatly        | Dark  |
| `flatly`    | Flat theme with teal accents       | Light |
| `journal`   | Crisp like a new sheet of paper    | Light |
| `litera`    | The medium is the message          | Light |
| `lumen`     | Light and shadow                   | Light |
| `lux`       | A touch of class                   | Light |
| `materia`   | Material design inspired           | Light |
| `minty`     | A fresh feel                       | Light |
| `morph`     | Soft neumorphism                   | Light |
| `pulse`     | A trace of purple                  | Light |
| `quartz`    | Glassmorphism aesthetic            | Dark  |
| `sandstone` | A touch of warmth                  | Light |
| `simplex`   | Mini and minimalist                | Light |
| `sketchy`   | A hand-drawn look                  | Light |
| `slate`     | Shades of gunmetal gray            | Dark  |
| `solar`     | A spin on Solarized                | Dark  |
| `spacelab`  | Silvery and sleek                  | Light |
| `superhero` | The brave and the blue             | Dark  |
| `united`    | Ubuntu orange and unique font      | Light |
| `vapor`     | Vaporwave aesthetic                | Dark  |
| `yeti`      | A friendly foundation              | Light |
| `zephyr`    | Breezy and bright                  | Light |

### Programming Language Themes

| Theme       | Description                        | Mode  |
| ----------- | ---------------------------------- | ----- |
| `evergreen` | Node.js-inspired with vibrant green| Dark  |
| `gopher`    | Go-inspired with cyan accents      | Light |
| `oxide`     | Rust-inspired with orange accents  | Dark  |

## Creating Custom Themes

1. Create a new SCSS file in `src/themes/`:

```scss
// src/themes/my-theme.scss

@theme {
  // Define your color palette
  --color-primary-500: oklch(0.6 0.2 250);

  // Define semantic colors
  --color-background: oklch(1 0 0);
  --color-foreground: oklch(0.1 0 0);

  // ... more customizations
}

:root { color-scheme: light; }
body { background: var(--color-background); color: var(--color-text); }
```

2. Build the themes:

```bash
pnpm run build
```

## Project Structure

```
tailswatch/
├── src/
│   └── themes/           # Theme SCSS files
│       ├── cosmo.scss
│       ├── cyborg.scss
│       ├── darkly.scss
│       └── ...
├── docs/                 # Angular documentation site
├── dist/                 # Compiled output (generated)
└── build/                # Intermediate SCSS output (generated)
```

## Development

```bash
# Install dependencies
pnpm install

# Build themes
pnpm run build

# Run docs site
cd docs && pnpm install && pnpm start
```

## Design Tokens

Tailswatch uses OKLCH color space for perceptually uniform colors. Each theme includes:

- **Colors**: Primary, secondary, accent, and semantic color scales (50-950)
- **Typography**: Font families for sans, serif, and monospace
- **Surfaces**: Background, foreground, surface, and border colors
- **Text**: Text colors with muted and subtle variants
- **Radius**: Border radius scale
- **Shadows**: Shadow presets

## License

MIT License - Pegasus Heavy Industries LLC
