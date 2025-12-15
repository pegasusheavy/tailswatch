#!/usr/bin/env node

/**
 * Build script for compiling theme files with Tailwind CSS 4
 * Processes SCSS theme files directly (they use Tailwind CSS syntax, not SCSS features)
 */

import { execSync } from "child_process";
import { readdirSync, mkdirSync, existsSync, copyFileSync } from "fs";
import { join, basename } from "path";

const SOURCE_DIR = "src/themes";
const BUILD_DIR = "build/themes";
const OUTPUT_DIR = "dist/themes";

// Ensure directories exist
if (!existsSync(BUILD_DIR)) {
  mkdirSync(BUILD_DIR, { recursive: true });
}
if (!existsSync(OUTPUT_DIR)) {
  mkdirSync(OUTPUT_DIR, { recursive: true });
}

// Get all SCSS theme files
const themeFiles = readdirSync(SOURCE_DIR).filter(
  (file) => file.endsWith(".scss") && !file.startsWith("_")
);

console.log(`🎨 Building ${themeFiles.length} theme(s)...\n`);

for (const file of themeFiles) {
  const themeName = basename(file, ".scss");
  const sourcePath = join(SOURCE_DIR, file);
  const buildPath = join(BUILD_DIR, `${themeName}.css`);
  const outputPath = join(OUTPUT_DIR, `${themeName}.css`);

  try {
    // Copy source file to build dir as CSS (themes use Tailwind CSS 4 syntax, not SCSS)
    copyFileSync(sourcePath, buildPath);

    console.log(`  → Building theme: ${themeName}`);
    execSync(`npx tailwindcss -i ${buildPath} -o ${outputPath} --minify`, {
      stdio: "inherit",
    });
  } catch (error) {
    console.error(`  ✗ Failed to build theme: ${themeName}`);
    process.exit(1);
  }
}

console.log("\n✓ All themes built successfully!");
