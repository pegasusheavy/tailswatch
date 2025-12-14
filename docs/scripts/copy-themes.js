#!/usr/bin/env node

/**
 * Copies compiled theme CSS files from the root project to the docs public folder
 * This script runs before build/serve to ensure themes are available
 */

import { cpSync, existsSync, mkdirSync, readdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const rootDir = join(__dirname, '..', '..');
const sourceDir = join(rootDir, 'dist', 'themes');
const targetDir = join(__dirname, '..', 'public', 'themes');

// Ensure target directory exists
if (!existsSync(targetDir)) {
  mkdirSync(targetDir, { recursive: true });
}

// Check if source themes exist
if (!existsSync(sourceDir)) {
  console.warn('⚠️  Theme directory not found at:', sourceDir);
  console.warn('   Run "pnpm run build" in the root project first to compile themes.');
  console.warn('   Continuing with empty themes directory...\n');
  process.exit(0);
}

// Copy all CSS files from source to target
const files = readdirSync(sourceDir).filter(f => f.endsWith('.css'));

if (files.length === 0) {
  console.warn('⚠️  No theme CSS files found in:', sourceDir);
  console.warn('   Run "pnpm run build" in the root project first.\n');
  process.exit(0);
}

console.log(`📦 Copying ${files.length} theme(s) to docs/public/themes/\n`);

files.forEach(file => {
  const src = join(sourceDir, file);
  const dest = join(targetDir, file);
  cpSync(src, dest);
  console.log(`   ✓ ${file}`);
});

console.log('\n✅ Themes copied successfully!\n');

