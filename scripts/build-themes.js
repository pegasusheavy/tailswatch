#!/usr/bin/env node

/**
 * Build script for compiling individual theme files
 * Processes each theme in the build/themes directory
 */

import { execSync } from "child_process";
import { readdirSync, mkdirSync, existsSync } from "fs";
import { join, basename } from "path";

const BUILD_DIR = "build/themes";
const OUTPUT_DIR = "dist/themes";

// Ensure output directory exists
if (!existsSync(OUTPUT_DIR)) {
  mkdirSync(OUTPUT_DIR, { recursive: true });
}

// Get all CSS files in the build themes directory
const themeFiles = readdirSync(BUILD_DIR).filter(
  (file) => file.endsWith(".css") && !file.startsWith("_")
);

console.log(`🎨 Building ${themeFiles.length} theme(s)...\n`);

for (const file of themeFiles) {
  const inputPath = join(BUILD_DIR, file);
  const outputPath = join(OUTPUT_DIR, file);
  const themeName = basename(file, ".css");

  try {
    console.log(`  → Building theme: ${themeName}`);
    execSync(`tailwindcss -i ${inputPath} -o ${outputPath} --minify`, {
      stdio: "inherit",
    });
  } catch (error) {
    console.error(`  ✗ Failed to build theme: ${themeName}`);
    process.exit(1);
  }
}

console.log("\n✓ All themes built successfully!");

