const fs = require("fs");
const path = require("path");

const assetsDir = path.join(__dirname, "../src/assets");
const heroFile = path.join(assetsDir, "hero.ts");
/** Slide 2 (wink / terminal) removed — only intro + impact portraits. */
const HERO_FILES = ["1.png", "3.png"];

const pngFiles = HERO_FILES.filter((file) =>
  fs.existsSync(path.join(assetsDir, file))
);

if (pngFiles.length === 0) {
  console.error("No hero images found. Add 1.png and 3.png to src/assets/");
  process.exit(1);
}

const imports = pngFiles
  .map((file, index) => `import img${index + 1} from "./${file}";`)
  .join("\n");

const arrayItems = pngFiles.map((_, index) => `img${index + 1}`).join(", ");

const content = `import { StaticImageData } from "next/image";

${imports}

const images: StaticImageData[] = [${arrayItems}];

export const HERO_IMAGES = images.map((img) => img.src);
`;

fs.writeFileSync(heroFile, content);
console.log(`Synced ${pngFiles.length} hero image(s): ${pngFiles.join(", ")}`);
