// Generates extension icons (16, 48, 128) from main-logo.png.
// Run: node extension/icons/generate.js
const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");

const src = path.join(__dirname, "main-logo.png");

if (!fs.existsSync(src)) {
  console.error("main-logo.png not found in", __dirname);
  process.exit(1);
}

fs.copyFileSync(src, path.join(__dirname, "icon128.png"));
console.log("wrote", path.join(__dirname, "icon128.png"));

for (const size of [48, 16]) {
  const out = path.join(__dirname, `icon${size}.png`);
  execSync(`sips -z ${size} ${size} "${src}" --out "${out}"`, {
    stdio: "inherit",
  });
  console.log("wrote", out);
}
