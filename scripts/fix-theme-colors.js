#!/usr/bin/env node
/**
 * Script to ensure all themes export CSS custom properties in :root
 * This fixes the issue where Tailwind CSS 4's @theme block doesn't
 * automatically export variables for dynamic var() usage.
 */

const fs = require('fs');
const path = require('path');

const themesDir = path.join(__dirname, '../src/themes');

// Color palette generator - creates complete shade scales
const colorPalettes = {
  // Bootswatch-inspired palettes
  cerulean: {
    primary: { base: '#2fa4e7', hue: 200 },
    secondary: { base: '#adb5bd', hue: 210 },
    accent: { base: '#033c73', hue: 210 }
  },
  cyborg: {
    primary: { base: '#2a9fd6', hue: 200 },
    secondary: { base: '#555555', hue: 0 },
    accent: { base: '#9933cc', hue: 280 }
  },
  darkly: {
    primary: { base: '#375a7f', hue: 210 },
    secondary: { base: '#444444', hue: 0 },
    accent: { base: '#00bc8c', hue: 160 }
  },
  flatly: {
    primary: { base: '#2c3e50', hue: 210 },
    secondary: { base: '#18bc9c', hue: 165 },
    accent: { base: '#3498db', hue: 205 }
  },
  journal: {
    primary: { base: '#eb6864', hue: 2 },
    secondary: { base: '#aaaaaa', hue: 0 },
    accent: { base: '#f5a637', hue: 35 }
  },
  litera: {
    primary: { base: '#4582ec', hue: 220 },
    secondary: { base: '#adb5bd', hue: 210 },
    accent: { base: '#d9534f', hue: 2 }
  },
  lumen: {
    primary: { base: '#158cba', hue: 195 },
    secondary: { base: '#f0f0f0', hue: 0 },
    accent: { base: '#28b62c', hue: 120 }
  },
  lux: {
    primary: { base: '#1a1a1a', hue: 0 },
    secondary: { base: '#6c757d', hue: 210 },
    accent: { base: '#d4af37', hue: 45 }
  },
  materia: {
    primary: { base: '#2196f3', hue: 207 },
    secondary: { base: '#9e9e9e', hue: 0 },
    accent: { base: '#ff4081', hue: 340 }
  },
  minty: {
    primary: { base: '#78c2ad', hue: 160 },
    secondary: { base: '#f3969a', hue: 355 },
    accent: { base: '#56cc9d', hue: 150 }
  },
  morph: {
    primary: { base: '#7b8ab8', hue: 225 },
    secondary: { base: '#adb5bd', hue: 210 },
    accent: { base: '#f8d663', hue: 47 }
  },
  pulse: {
    primary: { base: '#593196', hue: 270 },
    secondary: { base: '#a991d4', hue: 265 },
    accent: { base: '#17a2b8', hue: 190 }
  },
  quartz: {
    primary: { base: '#e83283', hue: 330 },
    secondary: { base: '#2c2c54', hue: 240 },
    accent: { base: '#8c55dd', hue: 265 }
  },
  sandstone: {
    primary: { base: '#325d88', hue: 210 },
    secondary: { base: '#8e8c84', hue: 50 },
    accent: { base: '#f47c3c', hue: 22 }
  },
  simplex: {
    primary: { base: '#d9230f', hue: 5 },
    secondary: { base: '#999999', hue: 0 },
    accent: { base: '#029acf', hue: 195 }
  },
  sketchy: {
    primary: { base: '#333333', hue: 0 },
    secondary: { base: '#f8f9fa', hue: 210 },
    accent: { base: '#007bff', hue: 215 }
  },
  slate: {
    primary: { base: '#5a5a5a', hue: 0 },
    secondary: { base: '#272b30', hue: 210 },
    accent: { base: '#6c757d', hue: 210 }
  },
  solar: {
    primary: { base: '#b58900', hue: 45 },
    secondary: { base: '#073642', hue: 192 },
    accent: { base: '#2aa198', hue: 175 }
  },
  spacelab: {
    primary: { base: '#3399f3', hue: 210 },
    secondary: { base: '#adb5bd', hue: 210 },
    accent: { base: '#3cb521', hue: 110 }
  },
  superhero: {
    primary: { base: '#df691a', hue: 25 },
    secondary: { base: '#4e5d6c', hue: 210 },
    accent: { base: '#5cb85c', hue: 120 }
  },
  united: {
    primary: { base: '#e95420', hue: 15 },
    secondary: { base: '#772953', hue: 330 },
    accent: { base: '#17a2b8', hue: 190 }
  },
  vapor: {
    primary: { base: '#ea39b8', hue: 320 },
    secondary: { base: '#3f3f5f', hue: 240 },
    accent: { base: '#6f42c1', hue: 265 }
  },
  yeti: {
    primary: { base: '#008cba', hue: 195 },
    secondary: { base: '#f0f0f0', hue: 0 },
    accent: { base: '#43ac6a', hue: 145 }
  },
  zephyr: {
    primary: { base: '#5680e9', hue: 225 },
    secondary: { base: '#8b92bb', hue: 235 },
    accent: { base: '#c1c8e4', hue: 230 }
  }
};

// Generate a complete color scale from a base color
function generateColorScale(baseHex, hue = 0) {
  // Parse base color to get approximate values
  const r = parseInt(baseHex.slice(1,3), 16);
  const g = parseInt(baseHex.slice(3,5), 16);
  const b = parseInt(baseHex.slice(5,7), 16);

  // Calculate luminance
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;

  // Generate scale - lighter to darker
  const shades = {};
  const baseShade = luminance > 0.5 ? 300 : 500;

  // Simple scale generation
  const scales = {
    50:  { l: 0.97, s: 0.15 },
    100: { l: 0.93, s: 0.25 },
    200: { l: 0.86, s: 0.35 },
    300: { l: 0.76, s: 0.50 },
    400: { l: 0.66, s: 0.65 },
    500: { l: 0.55, s: 0.75 },
    600: { l: 0.46, s: 0.70 },
    700: { l: 0.38, s: 0.65 },
    800: { l: 0.30, s: 0.55 },
    900: { l: 0.22, s: 0.45 },
    950: { l: 0.14, s: 0.35 }
  };

  // For now, just use the base color for 500 and interpolate
  shades[500] = baseHex;

  // Generate other shades by adjusting the base
  Object.keys(scales).forEach(shade => {
    if (shade === '500') return;
    const { l, s } = scales[shade];
    shades[shade] = adjustColor(baseHex, l, shade < 500);
  });

  return shades;
}

// Adjust a hex color's lightness
function adjustColor(hex, targetLightness, lighten) {
  const r = parseInt(hex.slice(1,3), 16);
  const g = parseInt(hex.slice(3,5), 16);
  const b = parseInt(hex.slice(5,7), 16);

  // Convert to HSL
  const rr = r / 255, gg = g / 255, bb = b / 255;
  const max = Math.max(rr, gg, bb), min = Math.min(rr, gg, bb);
  let h, s, l = (max + min) / 2;

  if (max === min) {
    h = s = 0;
  } else {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case rr: h = ((gg - bb) / d + (gg < bb ? 6 : 0)) / 6; break;
      case gg: h = ((bb - rr) / d + 2) / 6; break;
      case bb: h = ((rr - gg) / d + 4) / 6; break;
    }
  }

  // Adjust lightness
  l = targetLightness;

  // Convert back to RGB
  let rn, gn, bn;
  if (s === 0) {
    rn = gn = bn = l;
  } else {
    const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    const p = 2 * l - q;
    rn = hue2rgb(p, q, h + 1/3);
    gn = hue2rgb(p, q, h);
    bn = hue2rgb(p, q, h - 1/3);
  }

  const toHex = n => Math.round(n * 255).toString(16).padStart(2, '0');
  return `#${toHex(rn)}${toHex(gn)}${toHex(bn)}`;
}

function hue2rgb(p, q, t) {
  if (t < 0) t += 1;
  if (t > 1) t -= 1;
  if (t < 1/6) return p + (q - p) * 6 * t;
  if (t < 1/2) return q;
  if (t < 2/3) return p + (q - p) * (2/3 - t) * 6;
  return p;
}

console.log('Theme color fix script - generating hex color scales...');
console.log('Note: For production themes, manually verify color accuracy.');
console.log('');

// For each theme that needs fixing, generate the color values
Object.entries(colorPalettes).forEach(([themeName, palette]) => {
  console.log(`Processing ${themeName}...`);
  const primary = generateColorScale(palette.primary.base);
  const secondary = generateColorScale(palette.secondary.base);
  const accent = generateColorScale(palette.accent.base);

  console.log(`  Primary 500: ${primary[500]}, 800: ${primary[800]}`);
  console.log(`  Secondary 700: ${secondary[700]}, 800: ${secondary[800]}`);
  console.log(`  Accent 800: ${accent[800]}`);
});

console.log('');
console.log('To apply these changes, update each theme file to use :root declarations.');
console.log('See cosmo.scss and default.scss for the correct pattern.');

