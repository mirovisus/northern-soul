import sharp from "sharp";
import { readdir } from "node:fs/promises";
import { join, extname, basename } from "node:path";

const SOURCE_DIR = "src/assets/images";
const QUALITY = 80;

async function convertAll() {
  const files = await readdir(SOURCE_DIR);
  const pngs = files.filter((f) => extname(f).toLowerCase() === ".png");

  console.log(`Found ${pngs.length} PNG files to convert.`);

  let totalOriginal = 0;
  let totalConverted = 0;

  for (const file of pngs) {
    const inputPath = join(SOURCE_DIR, file);
    const outputPath = join(SOURCE_DIR, `${basename(file, ".png")}.webp`);

    const inputBuffer = await sharp(inputPath).toBuffer();
    const outputBuffer = await sharp(inputPath)
      .webp({ quality: QUALITY, effort: 6 })
      .toBuffer();

    await sharp(inputPath)
      .webp({ quality: QUALITY, effort: 6 })
      .toFile(outputPath);

    const originalKB = (inputBuffer.length / 1024).toFixed(0);
    const convertedKB = (outputBuffer.length / 1024).toFixed(0);
    const savedPercent = (
      ((inputBuffer.length - outputBuffer.length) / inputBuffer.length) *
      100
    ).toFixed(0);

    totalOriginal += inputBuffer.length;
    totalConverted += outputBuffer.length;

    console.log(
      `  ${file.padEnd(35)} ${originalKB.padStart(6)}KB -> ${convertedKB.padStart(6)}KB  (-${savedPercent}%)`,
    );
  }

  const totalOriginalMB = (totalOriginal / 1024 / 1024).toFixed(1);
  const totalConvertedMB = (totalConverted / 1024 / 1024).toFixed(1);
  const totalSaved = (
    ((totalOriginal - totalConverted) / totalOriginal) *
    100
  ).toFixed(0);

  console.log(
    `\nTotal: ${totalOriginalMB}MB -> ${totalConvertedMB}MB  (-${totalSaved}%)`,
  );
}

convertAll().catch((err) => {
  console.error(err);
  process.exit(1);
});
