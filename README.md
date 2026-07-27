# Tailswatch

[![npm version](https://img.shields.io/npm/v/tailswatch.svg)](https://www.npmjs.com/package/tailswatch)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![CI](https://github.com/quinnjr/tailswatch/actions/workflows/ci.yml/badge.svg)](https://github.com/quinnjr/tailswatch/actions/workflows/ci.yml)

Customizable Tailwind CSS 4+ themes for import into other applications. Includes 212 ready-to-use themes inspired by Bootswatch, Material Design, programming languages, web frameworks, cloud providers, pro sports teams, motorsports, and Vocaloid.

**[Live Demo & Documentation →](https://quinnjr.github.io/tailswatch)**

## Installation

```bash
npm install tailswatch
# or
pnpm add tailswatch
# or
yarn add tailswatch
```

## Quick Start

Import a theme in your CSS:

```css
@import "tailswatch/themes/cosmo";
```

Or import directly in your JavaScript/TypeScript:

```js
import "tailswatch/themes/cosmo";
```

That's it! Your Tailwind classes will now use the Cosmo theme colors.

## Available Themes (212)

### Base (3)

`default`, `dark`, `geocities`

### Bootswatch-Inspired (48)

Every Bootswatch theme ships with a light/dark counterpart:

`cerulean`, `cerulean-dark`, `cosmo`, `cosmo-dark`, `cyborg`, `cyborg-light`, `darkly`, `flatly`, `journal`, `journal-dark`, `litera`, `litera-dark`, `lumen`, `lumen-dark`, `lux`, `lux-dark`, `materia`, `materia-dark`, `minty`, `minty-dark`, `morph`, `morph-dark`, `pulse`, `pulse-dark`, `quartz`, `quartz-light`, `sandstone`, `sandstone-dark`, `simplex`, `simplex-dark`, `sketchy`, `sketchy-dark`, `slate`, `slate-light`, `solar`, `solar-light`, `spacelab`, `spacelab-dark`, `superhero`, `superhero-light`, `united`, `united-dark`, `vapor`, `vapor-light`, `yeti`, `yeti-dark`, `zephyr`, `zephyr-dark`

### Material Design (12)

`material-light-blue`, `material-dark-blue`, `material-light-indigo`, `material-dark-indigo`, `material-light-purple`, `material-dark-purple`, `material-light-teal`, `material-dark-teal`, `material-light-green`, `material-dark-green`, `material-light-deeporange`, `material-dark-deeporange`

### Programming Languages (12)

`csharp`, `evergreen` (Node.js), `gopher` (Go), `java`, `javascript`, `kernel` (C/C++), `kotlin`, `oxide` (Rust), `python`, `typescript`, `wasm`, `zig`

### Node Frameworks (13)

`nestjs`, `express`, `koa`, `deno`, `bun`, `fastify`, `hono`, `hapi`, `elysia`, `nextjs`, `nuxt`, `remix`, `astro`

### Web Frameworks (12)

`django`, `flask`, `fastapi`, `rails`, `laravel`, `symfony`, `spring`, `gin`, `fiber`, `actix`, `aspnet`, `phoenix`

### Cloud Providers (9)

`aws`, `azure`, `gcloud`, `firebase`, `vercel`, `digitalocean`, `cloudflare`, `netlify`, `heroku`

### NFL Teams (32)

`nfl-bills`, `nfl-dolphins`, `nfl-patriots`, `nfl-jets`, `nfl-ravens`, `nfl-bengals`, `nfl-browns`, `nfl-steelers`, `nfl-texans`, `nfl-colts`, `nfl-jaguars`, `nfl-titans`, `nfl-broncos`, `nfl-chiefs`, `nfl-raiders`, `nfl-chargers`, `nfl-cowboys`, `nfl-giants`, `nfl-eagles`, `nfl-commanders`, `nfl-bears`, `nfl-lions`, `nfl-packers`, `nfl-vikings`, `nfl-falcons`, `nfl-panthers`, `nfl-saints`, `nfl-buccaneers`, `nfl-cardinals`, `nfl-rams`, `nfl-49ers`, `nfl-seahawks`

### NBA Teams (30)

`nba-celtics`, `nba-nets`, `nba-knicks`, `nba-76ers`, `nba-raptors`, `nba-bulls`, `nba-cavaliers`, `nba-pistons`, `nba-pacers`, `nba-bucks`, `nba-hawks`, `nba-hornets`, `nba-heat`, `nba-magic`, `nba-wizards`, `nba-nuggets`, `nba-timberwolves`, `nba-thunder`, `nba-trailblazers`, `nba-jazz`, `nba-warriors`, `nba-clippers`, `nba-lakers`, `nba-suns`, `nba-kings`, `nba-mavericks`, `nba-rockets`, `nba-grizzlies`, `nba-pelicans`, `nba-spurs`

### NHL Teams (32)

`nhl-bruins`, `nhl-sabres`, `nhl-redwings`, `nhl-panthers`, `nhl-canadiens`, `nhl-senators`, `nhl-lightning`, `nhl-mapleleafs`, `nhl-hurricanes`, `nhl-bluejackets`, `nhl-devils`, `nhl-islanders`, `nhl-rangers`, `nhl-flyers`, `nhl-penguins`, `nhl-capitals`, `nhl-utahhc`, `nhl-blackhawks`, `nhl-avalanche`, `nhl-stars`, `nhl-wild`, `nhl-predators`, `nhl-blues`, `nhl-jets`, `nhl-ducks`, `nhl-flames`, `nhl-oilers`, `nhl-kings`, `nhl-sharks`, `nhl-kraken`, `nhl-canucks`, `nhl-goldenknights`

### Motorsports (1)

`f1`

### Vocaloid (8)

`vocaloid-miku`, `vocaloid-rin`, `vocaloid-len`, `vocaloid-luka`, `vocaloid-kaito`, `vocaloid-meiko`, `vocaloid-gumi`, `vocaloid-ia`

## Usage Examples

### With Tailwind CSS 4+

```css
/* In your main CSS file */
@import "tailwindcss";
@import "tailswatch/themes/cosmo";
```

### Dynamic Theme Switching

```html
<!-- Load themes as separate stylesheets -->
<link id="theme" rel="stylesheet" href="node_modules/tailswatch/dist/themes/cosmo.css">

<script>
  function switchTheme(themeName) {
    document.getElementById('theme').href =
      `node_modules/tailswatch/dist/themes/${themeName}.css`;
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

[MIT](LICENSE) © Joseph Quinn
