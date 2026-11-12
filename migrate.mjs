import fs from 'node:fs';

const OLD_IMAGES = 'public/artworks';
const NEW_IMAGES = 'src/assets/artworks';
const OUT = 'src/content/artworks';

const src = fs.readFileSync('src/data/artworks.ts', 'utf8');
const body = src.slice(src.indexOf('const actualArtworkFiles'));
const items = [...body.matchAll(/\{[^{}]*file:[^{}]*\}/g)].map((m) => m[0]);

fs.mkdirSync(NEW_IMAGES, { recursive: true });
fs.mkdirSync(OUT, { recursive: true });

items.forEach((item, i) => {
  const file = item.match(/file:\s*'([^']+)'/)[1];
  const category = item.match(/category:\s*"([^"]+)"/)?.[1] ?? 'uncatogarized';
  const id = `${String(i).padStart(4, '0')}-${file.replace(/\.\w+$/, '').toLowerCase().replace(/_/g, '-')}`;

  fs.copyFileSync(`${OLD_IMAGES}/${file}`, `${NEW_IMAGES}/${file}`);
  fs.writeFileSync(
    `${OUT}/${id}.json`,
    JSON.stringify(
      { title: `Artwork ${i + 1}`, image: `../../assets/artworks/${file}`, category, year: 2026 },
      null,
      2,
    ),
  );
});

console.log(`Migrated ${items.length} artworks`);