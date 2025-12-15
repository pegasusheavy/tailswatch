#!/usr/bin/env node

/**
 * Build script for compiling theme files with Tailwind CSS 4
 * Processes SCSS theme files by converting comments and running through Tailwind
 */

import { execSync } from "child_process";
import { readdirSync, mkdirSync, existsSync, readFileSync, writeFileSync } from "fs";
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

/**
 * Convert SCSS-style // comments to CSS-style comments or remove them
 * Also removes @use statements for non-tailwindcss imports
 */
function preprocessScss(content) {
  // Remove @use statements that reference local files (not tailwindcss)
  content = content.replace(/@use\s+["'][^"']*(?:variables|mixins)[^"']*["'].*?;?\n?/g, '');
  
  // Remove single-line // comments
  content = content.replace(/^\s*\/\/.*$/gm, '');
  
  // Remove inline // comments (but be careful not to remove URLs)
  content = content.replace(/(?<!:)\/\/(?!\/)[^\n]*/g, '');
  
  // Clean up extra blank lines
  content = content.replace(/\n{3,}/g, '\n\n');
  
  return content;
}

// Get all SCSS theme files
const themeFiles = readdirSync(SOURCE_DIR).filter(
  (file) => file.endsWith(".scss") && !file.startsWith("_")
);

console.log(`🎨 Building ${themeFiles.length} theme(s)...\n`);

let hasErrors = false;

for (const file of themeFiles) {
  const themeName = basename(file, ".scss");
  const sourcePath = join(SOURCE_DIR, file);
  const buildPath = join(BUILD_DIR, `${themeName}.css`);
  const outputPath = join(OUTPUT_DIR, `${themeName}.css`);

  try {
    // Read and preprocess the SCSS file
    const content = readFileSync(sourcePath, 'utf-8');
    const processedContent = preprocessScss(content);
    
    // Write preprocessed content to build dir
    writeFileSync(buildPath, processedContent);

    console.log(`  → Building theme: ${themeName}`);
    execSync(`./node_modules/.bin/tailwindcss -i ${buildPath} -o ${outputPath} --minify`, {
      stdio: "pipe",
    });
  } catch (error) {
    console.error(`  ✗ Failed to build theme: ${themeName}`);
    if (error.stderr) {
      console.error(error.stderr.toString());
    }
    hasErrors = true;
  }
}

if (hasErrors) {
  console.log("\n⚠ Some themes failed to build");
  process.exit(1);
} else {
  console.log("\n✓ All themes built successfully!");
}
