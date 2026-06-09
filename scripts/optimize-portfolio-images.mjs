/**
 * Converts PNG/JPG portfolio assets to WebP and re-compresses existing WebP
 * with high quality (minimal visible loss).
 */
import fs from "fs";
import path from "path";
import sharp from "sharp";

const ROOT = path.join(process.cwd(), "public", "portfolio");
const QUALITY = 90;
const EFFORT = 6;

const RASTER = new Set([".png", ".jpg", ".jpeg", ".webp"]);

function walk(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) files.push(...walk(full));
    else if (RASTER.has(path.extname(entry.name).toLowerCase())) files.push(full);
  }
  return files;
}

async function toWebp(inputPath) {
  const ext = path.extname(inputPath).toLowerCase();
  const base = inputPath.slice(0, -ext.length);
  const outputPath = `${base}.webp`;

  const buffer = await sharp(inputPath)
    .webp({ quality: QUALITY, effort: EFFORT, smartSubsample: true })
    .toBuffer();

  const before = fs.statSync(inputPath).size;

  if (ext === ".webp") {
    if (buffer.length < before) {
      fs.writeFileSync(outputPath, buffer);
      return { inputPath, outputPath, before, after: buffer.length, action: "recompressed" };
    }
    return { inputPath, outputPath, before, after: before, action: "kept" };
  }

  fs.writeFileSync(outputPath, buffer);
  fs.unlinkSync(inputPath);
  return { inputPath, outputPath, before, after: buffer.length, action: "converted" };
}

const files = walk(ROOT);
const results = [];

for (const file of files) {
  results.push(await toWebp(file));
}

console.log("\nPortfolio image optimization (quality %d)\n", QUALITY);
for (const r of results) {
  const saved = r.before - r.after;
  const pct = r.before ? ((saved / r.before) * 100).toFixed(1) : "0.0";
  console.log(
    `${r.action.padEnd(12)} ${path.relative(process.cwd(), r.outputPath)}  ${(r.before / 1024).toFixed(0)}KB → ${(r.after / 1024).toFixed(0)}KB (${pct}% smaller)`,
  );
}
