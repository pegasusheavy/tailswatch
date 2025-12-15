#!/usr/bin/env node

/**
 * Build script for preparing theme files for distribution
 * Converts SCSS-style comments to valid CSS and outputs clean theme files
 * that downstream developers import alongside Tailwind CSS
 */

import { readdirSync, mkdirSync, existsSync, readFileSync, writeFileSync } from "fs";
import { join, basename } from "path";

const SOURCE_DIR = "src/themes";
const OUTPUT_DIR = "dist/themes";

// Ensure output directory exists
if (!existsSync(OUTPUT_DIR)) {
  mkdirSync(OUTPUT_DIR, { recursive: true });
}

/**
 * Convert SCSS-style syntax to valid CSS
 * - Converts // comments to CSS comments or removes them
 * - Removes @use statements for local files (keeps tailwindcss)
 */
function preprocessScss(content) {
  // Remove @use statements that reference local files (not tailwindcss)
  content = content.replace(/@use\s+["'][^"']*(?:variables|mixins)[^"']*["'].*?;?\n?/g, '');
  
  // Convert section header comments to CSS block comments
  content = content.replace(/^\s*\/\/\s*={3,}.*$/gm, (match) => {
    const text = match.replace(/^\s*\/\/\s*/, '').trim();
    return `/* ${text} */`;
  });
  
  // Convert meaningful single-line comments to CSS comments
  content = content.replace(/^\s*\/\/\s*-{3,}.*$/gm, ''); // Remove divider lines
  content = content.replace(/^\s*\/\/\s*(.+)$/gm, (match, p1) => {
    // Keep meaningful comments, convert to CSS style
    if (p1.trim()) {
      return `/* ${p1.trim()} */`;
    }
    return '';
  });
  
  // Remove inline // comments (but be careful not to remove URLs)
  content = content.replace(/(?<!:)\/\/(?!\/)[^\n]*/g, '');
  
  // Clean up extra blank lines
  content = content.replace(/\n{3,}/g, '\n\n');
  
  return content.trim() + '\n';
}

// Get all SCSS theme files
const themeFiles = readdirSync(SOURCE_DIR).filter(
  (file) => file.endsWith(".scss") && !file.startsWith("_")
);

console.log(`🎨 Preparing ${themeFiles.length} theme(s) for distribution...\n`);

for (const file of themeFiles) {
  const themeName = basename(file, ".scss");
  const sourcePath = join(SOURCE_DIR, file);
  const outputPath = join(OUTPUT_DIR, `${themeName}.css`);

  try {
    // Read and preprocess the SCSS file
    const content = readFileSync(sourcePath, 'utf-8');
    const processedContent = preprocessScss(content);
    
    // Write to dist
    writeFileSync(outputPath, processedContent);
    console.log(`  ✓ ${themeName}`);
  } catch (error) {
    console.error(`  ✗ Failed: ${themeName} - ${error.message}`);
    process.exit(1);
  }
}

console.log(`\n✓ All themes ready for distribution!`);
console.log(`\nUsage in downstream projects:`);
console.log(`  @import "tailwindcss";`);
console.log(`  @import "@pegasusheavy/tailswatch/themes/cosmo";`);
