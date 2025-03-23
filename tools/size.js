/**
 * @fileoverview
 * A CLI tool to show or check the gzipped size of a CSS file.
 *
 * Usage:
 *   node tools/size.js show           # Show gzipped size (default)
 *   node tools/size.js check          # Fail if gzipped size exceeds 2KB
 *   node tools/size.js help           # Show usage help
 *
 * This script reads `dist/browser-nano.min.css`, gzips it, and:
 *   - shows the size in bytes and KB (if `show`)
 *   - checks if it's below a size limit (if `check`)
 */

const fs = require("fs");
const zlib = require("zlib");
const path = require("path");

const filePath = path.resolve(__dirname, "../dist/browser-nano.min.css");
const maxSize = 2048; // 2KB
const mode = (process.argv[2] || "show").toLowerCase();

function showHelp() {
  console.log(`
📦 Gzip Size Tool

Usage:
  node tools/size.js show     Show gzipped size (default)
  node tools/size.js check    Fail if gzipped size exceeds 2KB
  node tools/size.js help     Show this help message
`);
}

try {
  if (mode === "help") {
    showHelp();
    process.exit(0);
  }

  const raw = fs.readFileSync(filePath);
  const gzipped = zlib.gzipSync(raw);
  const size = gzipped.length;
  const sizeKB = (size / 1024).toFixed(2);

  if (mode === "check") {
    if (size > maxSize) {
      console.error(
        `❌ Gzipped CSS size is ${size} bytes (${sizeKB} KB), which exceeds the ${maxSize} byte limit.`,
      );
      process.exit(1);
    } else {
      console.log(
        `✅ Gzipped CSS size is ${size} bytes (${sizeKB} KB) — within the ${maxSize} byte limit.`,
      );
      process.exit(0);
    }
  } else {
    console.log(
      `📏 Gzipped size of ${path.basename(filePath)}: ${size} bytes (${sizeKB} KB)`,
    );
    process.exit(0);
  }
} catch (err) {
  console.error("❌ Error reading or compressing the file:", err.message);
  process.exit(1);
}
