// Generates lightweight editorial SVG placeholders for every image path
// used by the site. Real photos replace these files in /public/images/**.
// Run: npm run gen:images
import { mkdir, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");

// [folder, count, base label]
const groups = [
  ["hero", 1, "HERO"],
  ["cinema", 8, "Кино"],
  ["makeup", 4, "Портретный грим"],
  ["postizh", 6, "Постиж"],
  ["effects", 6, "Спецэффекты"],
  ["hairstyles", 8, "Причёски"],
  ["musicians", 6, "Музыканты"],
  ["tv", 6, "ТВ / Реклама"],
];

// Warm neutral duotones, one per section — keeps the mock feeling cohesive.
const palettes = {
  hero: ["#1c1a17", "#3a352d"],
  cinema: ["#2b2721", "#4a4034"],
  makeup: ["#211d19", "#463a30"],
  postizh: ["#26221c", "#514637"],
  effects: ["#241713", "#5b2c25"],
  hairstyles: ["#262019", "#544636"],
  musicians: ["#1e1c22", "#40384a"],
  tv: ["#1f2320", "#3c4a42"],
};

const svg = (label, index, [c1, c2]) => `<svg xmlns="http://www.w3.org/2000/svg" width="1000" height="1250" viewBox="0 0 1000 1250">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="${c1}"/>
      <stop offset="1" stop-color="${c2}"/>
    </linearGradient>
  </defs>
  <rect width="1000" height="1250" fill="url(#g)"/>
  <g fill="none" stroke="#f4f1ea" stroke-opacity="0.14" stroke-width="1">
    <rect x="60" y="60" width="880" height="1130"/>
    <line x1="60" y1="1010" x2="940" y2="1010"/>
  </g>
  <text x="80" y="1075" fill="#f4f1ea" fill-opacity="0.9" font-family="Georgia, serif" font-size="46" letter-spacing="1">${label}</text>
  <text x="80" y="1130" fill="#f4f1ea" fill-opacity="0.45" font-family="Arial, sans-serif" font-size="26" letter-spacing="6">ФОТО ${String(index).padStart(2, "0")} · ЗАМЕНИТЕ</text>
</svg>`;

let total = 0;
for (const [folder, count, label] of groups) {
  const dir = join(root, "public", "images", folder);
  await mkdir(dir, { recursive: true });
  for (let i = 1; i <= count; i++) {
    const name = `${folder}-${i}.svg`;
    await writeFile(join(dir, name), svg(label, i, palettes[folder]));
    total++;
  }
}
console.log(`Generated ${total} placeholder images in public/images/`);
