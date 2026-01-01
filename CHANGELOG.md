# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [1.5.0] - 2026-01-01

### Added

#### Multi-Language Framework Themes (12 new)

**Python Frameworks:**
- **Django** - Django Green (#0C4B33) with teal accents
- **Flask** - Minimalist black and white with green accent
- **FastAPI** - FastAPI Teal (#009688) with green accents

**Ruby/PHP Frameworks:**
- **Ruby on Rails** - Rails Red (#CC0000) with silver accents
- **Laravel** - Laravel Red (#FF2D20) with pink accents
- **Symfony** - Minimalist black and white with lime green accent

**Java/Go Frameworks:**
- **Spring Boot** - Spring Green (#6DB33F) with emerald accents
- **Gin** - Go Cyan (#00ADD8) with blue accents
- **Fiber** - Fiber Cyan (#00ACD7) with slate accents

**Rust/.NET/Elixir Frameworks:**
- **Actix** - Dark mode with Rust Orange (#F74C00) accents
- **ASP.NET** - .NET Purple (#512BD4) with blue accents
- **Phoenix** - Phoenix Orange (#FD4F00) with Elixir purple accents

## [1.4.0] - 2026-01-01

### Added

#### Extended HTTP Framework Themes (8 new)
- **Fastify** - Clean black and white with blue accents
- **Hono** - Flame orange (#FF5B00) with yellow inner flame accents
- **Hapi** - Enterprise orange (#FF6600) with blue accents
- **Elysia** - Elegant purple/violet (#8B5CF6) with pink accents (Bun-native)
- **Next.js** - Dark mode theme matching Vercel aesthetic
- **Nuxt** - Fresh green (#00DC82) with teal accents
- **Remix** - Blue (#3992FF) with pink/magenta gradient accents
- **Astro** - Purple (#7C3AED) with orange coral accents

## [1.3.0] - 2026-01-01

### Added

#### Node.js Framework Themes (5 new)
- **NestJS** - NestJS Red (#E0234E) with pink/magenta accents
- **Express** - Minimalist black and white aesthetic with yellow accent
- **Koa** - Elegant slate gray with cyan/teal accents
- **Deno** - Dark mode theme with cyan dinosaur accents (#70CCD8)
- **Bun** - Warm cream/beige (#FBF0DF) with orange-brown tones

## [1.2.0] - 2025-12-16

### Added

- **155 total themes** (up from 43 in v1.0.0)

#### Programming Language Themes (8 new)
- **C#** - .NET / Visual Studio purple theme (#512BD4)
- **Kotlin** - JetBrains orange-to-purple theme (#F88909, #7F52FF)
- **Java** - Red-orange (#E76F00) and blue (#5382A1)
- **JavaScript** - Yellow (#F7DF1E) with purple accent
- **Python** - Blue (#3776AB) and Yellow (#FFD43B)
- **TypeScript** - Blue (#3178C6) with cyan accent
- **WebAssembly** - Purple (#654FF0) with cyan accent
- **Zig** - Golden orange (#F7A41D) with blue accent

#### NFL Team Themes (32 total)
- **AFC East:** Bills, Dolphins, Patriots, Jets
- **AFC North:** Ravens, Bengals, Browns, Steelers
- **AFC South:** Texans, Colts, Jaguars, Titans
- **AFC West:** Broncos, Chiefs, Raiders, Chargers
- **NFC East:** Cowboys, Giants, Eagles, Commanders
- **NFC North:** Bears, Lions, Packers, Vikings
- **NFC South:** Falcons, Panthers, Saints, Buccaneers
- **NFC West:** Cardinals, Rams, 49ers, Seahawks

#### NBA Team Themes (30 total)
- **Atlantic:** Celtics, Nets, Knicks, 76ers, Raptors
- **Central:** Bulls, Cavaliers, Pistons, Pacers, Bucks
- **Southeast:** Hawks, Hornets, Heat, Magic, Wizards
- **Northwest:** Nuggets, Timberwolves, Thunder, Trail Blazers, Jazz
- **Pacific:** Warriors, Clippers, Lakers, Suns, Kings
- **Southwest:** Mavericks, Rockets, Grizzlies, Pelicans, Spurs

#### NHL Team Themes (32 total)
- **Atlantic:** Bruins, Sabres, Red Wings, Panthers, Canadiens, Senators, Lightning, Maple Leafs
- **Metropolitan:** Hurricanes, Blue Jackets, Devils, Islanders, Rangers, Flyers, Penguins, Capitals
- **Central:** Utah HC, Blackhawks, Avalanche, Stars, Wild, Predators, Blues, Jets
- **Pacific:** Ducks, Flames, Oilers, Kings, Sharks, Kraken, Canucks, Golden Knights

#### Motorsports Themes
- **Formula 1** - F1 Racing Red (#E10600) and Black

#### Cloud Provider Themes (9 total)
- AWS - Amazon Web Services orange and squid ink
- Azure - Microsoft Azure professional blue
- Google Cloud - Google Cloud Platform multi-color palette
- Firebase - Google Firebase yellow and orange
- Vercel - Vercel signature dark mode aesthetic
- DigitalOcean - DigitalOcean ocean blue and teal
- Cloudflare - Cloudflare orange and blue
- Netlify - Netlify teal with dark accents
- Heroku - Heroku classic purple

### Changed

- **Vercel theme converted to dark mode** - Now uses signature black background (#000000) with dark surfaces
- **All themes now have cohesive themed backgrounds** - Background, surface, and border colors use primary color tints instead of plain white/gray
- **Programming language theme names updated** to actual language names:
  - Evergreen → Node.js
  - Gopher → Go
  - Kernel → C/C++
  - Oxide → Rust
- Theme selector dropdown now groups themes by category (Base, Bootswatch, Material Design, Programming, Cloud Providers, NFL, NBA, NHL, Motorsports)
- **Material Design themes enhanced with M3 design tokens:**
  - 4dp grid spacing system (`--spacing-1` through `--spacing-24`)
  - Material 3 border radius (`--radius-xs` through `--radius-xl`, `--radius-full`)
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

[1.5.0]: https://github.com/pegasusheavy/tailswatch/releases/tag/v1.5.0
[1.4.0]: https://github.com/pegasusheavy/tailswatch/releases/tag/v1.4.0
[1.3.0]: https://github.com/pegasusheavy/tailswatch/releases/tag/v1.3.0
[1.2.0]: https://github.com/pegasusheavy/tailswatch/releases/tag/v1.2.0
[1.1.1]: https://github.com/pegasusheavy/tailswatch/releases/tag/v1.1.1
[1.1.0]: https://github.com/pegasusheavy/tailswatch/releases/tag/v1.1.0
[1.0.0]: https://github.com/pegasusheavy/tailswatch/releases/tag/v1.0.0

