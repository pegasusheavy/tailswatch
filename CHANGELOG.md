# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added

- **C# theme** - C# / .NET / Visual Studio purple theme with .NET Purple (#512BD4) primary color
- **Kotlin theme** - Kotlin / JetBrains orange-to-purple theme with Kotlin Orange (#F88909) and Purple (#7F52FF)
- **Java theme** - Java red-orange (#E76F00) and blue (#5382A1) with coffee brown accent
- **JavaScript theme** - JavaScript Yellow (#F7DF1E) with modern purple accent
- **Python theme** - Python Blue (#3776AB) and Yellow (#FFD43B) two-snake logo colors
- **TypeScript theme** - TypeScript Blue (#3178C6) with cyan accent
- **Zig theme** - Zig golden orange (#F7A41D) with electric blue accent
- **9 Cloud Provider themes**
  - AWS - Amazon Web Services orange and squid ink
  - Azure - Microsoft Azure professional blue
  - Google Cloud - Google Cloud Platform multi-color palette
  - Firebase - Google Firebase yellow and orange
  - Vercel - Vercel minimalist black and white
  - DigitalOcean - DigitalOcean ocean blue and teal
  - Cloudflare - Cloudflare orange and blue
  - Netlify - Netlify teal with dark accents
  - Heroku - Heroku classic purple

### Changed

- Theme selector dropdown now groups themes by category (Base, Bootswatch, Material Design, Programming, Cloud Providers)
- **Material Design themes enhanced with M3 design tokens:**
  - 4dp grid spacing system (`--spacing-1` through `--spacing-24`)
  - Material 3 border radius (rounded corners: `--radius-xs` through `--radius-xl`, `--radius-full`)
  - 5-level elevation system (`--shadow-none` through `--shadow-xl`)
  - Typography tokens (`--tracking-*`, `--leading-*`)
  - Motion/easing tokens (`--duration-*`, `--easing-*`)

## [1.1.1] - 2025-12-15

### Fixed

- Fixed GitHub Actions CI workflows for pnpm v10 compatibility
- Fixed GitHub Pages deployment configuration
- Added proper pnpm lockfile for reproducible builds
- Corrected docs build output path for deployment

## [1.1.0] - 2025-12-15

### Changed

- **Themes are now uncompiled CSS** - Output contains CSS variables and `@theme` blocks for downstream Tailwind CSS processing
- Downstream developers import themes alongside their own Tailwind CSS installation
- Moved `tailwindcss` from devDependency to peerDependency
- Simplified build process - just SCSS syntax preprocessing

### Fixed

- Build script now properly strips SCSS-style comments
- Removed references to deleted base files in dark theme

## [1.0.0] - 2025-12-15

### Added

- **43 customizable Tailwind CSS 4+ themes**
- Full color palette with 50-950 shades for primary, secondary, accent, success, warning, error, and info colors
- CSS custom properties for easy customization
- Explicit npm exports for all themes

#### Bootswatch-Inspired Themes (25)

- Cerulean - A calm blue sky theme
- Cosmo - An ode to Metro
- Cyborg - Jet black and electric blue
- Darkly - Flatly in night mode
- Flatly - Flat and modern
- Journal - Crisp like a new sheet of paper
- Litera - The medium is the message
- Lumen - Light and shadow
- Lux - A touch of class
- Materia - Material is the metaphor
- Minty - A fresh feel
- Morph - A neumorphic layer
- Pulse - A trace of purple
- Quartz - A glassmorphic layer
- Sandstone - A touch of warmth
- Simplex - Mini and minimalist
- Sketchy - A hand-drawn look
- Slate - Shades of gunmetal gray
- Solar - A spin on Solarized
- Spacelab - Silvery and sleek
- Superhero - The brave and the blue
- United - Ubuntu orange and unique font
- Vapor - A cyberpunk aesthetic
- Yeti - A friendly foundation
- Zephyr - Breezy and light

#### Material Design Themes (12)

- material-light-blue / material-dark-blue
- material-light-indigo / material-dark-indigo
- material-light-purple / material-dark-purple
- material-light-teal / material-dark-teal
- material-light-green / material-dark-green
- material-light-deeporange / material-dark-deeporange

#### Programming Language-Inspired Themes (4)

- Oxide - Rust programming language inspired
- Gopher - Go programming language inspired
- Evergreen - Node.js ecosystem inspired
- Kernel - C/C++ inspired, professional and battle-tested

#### Base Themes (2)

- Default - Generic Tailwind CSS with no customization
- Dark - A dark mode base theme

### Documentation

- Interactive documentation site with live theme previews
- Example pages: Admin Dashboard, E-commerce, Photography Portfolio, Forum, SaaS Landing Page
- Comprehensive UI component examples

[1.1.1]: https://github.com/pegasusheavy/tailswatch/releases/tag/v1.1.1
[1.1.0]: https://github.com/pegasusheavy/tailswatch/releases/tag/v1.1.0
[1.0.0]: https://github.com/pegasusheavy/tailswatch/releases/tag/v1.0.0

