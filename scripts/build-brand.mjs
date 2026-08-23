import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const source = path.join(root, "public/brand/logo-source.jpg");

function isWhite(r, g, b, threshold = 248) {
  return r >= threshold && g >= threshold && b >= threshold;
}

async function cropToArtwork() {
  const { data, info } = await sharp(source)
    .removeAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const { width: w, height: h, channels } = info;
  let minX = w;
  let minY = h;
  let maxX = 0;
  let maxY = 0;

  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      const i = (y * w + x) * channels;
      if (isWhite(data[i], data[i + 1], data[i + 2])) continue;
      if (x < minX) minX = x;
      if (y < minY) minY = y;
      if (x > maxX) maxX = x;
      if (y > maxY) maxY = y;
    }
  }

  const pad = 12;
  minX = Math.max(0, minX - pad);
  minY = Math.max(0, minY - pad);
  maxX = Math.min(w - 1, maxX + pad);
  maxY = Math.min(h - 1, maxY + pad);

  return sharp(source).extract({
    left: minX,
    top: minY,
    width: maxX - minX + 1,
    height: maxY - minY + 1,
  });
}

async function fitOnCanvas(input, size, { padRatio, background }) {
  const pad = Math.round(size * padRatio);
  const inner = size - pad * 2;
  const resized = await input
    .clone()
    .flatten({ background: "#ffffff" })
    .resize(inner, inner, {
      fit: "contain",
      background,
    })
    .png()
    .toBuffer();

  return sharp({
    create: {
      width: size,
      height: size,
      channels: 4,
      background,
    },
  })
    .composite([{ input: resized, left: pad, top: pad }])
    .png();
}

async function write(file, pipeline) {
  await fs.promises.mkdir(path.dirname(file), { recursive: true });
  await pipeline.toFile(file);
  console.log("wrote", path.relative(root, file));
}

const cropped = await cropToArtwork();
const logoBuf = await cropped.png().toBuffer();
const logoImg = sharp(logoBuf);
const meta = await logoImg.metadata();
console.log("cropped", meta.width, "x", meta.height);

await write(path.join(root, "public/brand/logo.png"), logoImg.clone());
await write(
  path.join(root, "templates/logo.png"),
  logoImg.clone().resize(512, 512, { fit: "contain", background: "#ffffff" }),
);

const white = { r: 255, g: 255, b: 255, alpha: 1 };

await write(
  path.join(root, "public/icons/icon-192.png"),
  await fitOnCanvas(logoImg, 192, { padRatio: 0.04, background: white }),
);
await write(
  path.join(root, "public/icons/icon-512.png"),
  await fitOnCanvas(logoImg, 512, { padRatio: 0.04, background: white }),
);
await write(
  path.join(root, "public/icons/maskable-192.png"),
  await fitOnCanvas(logoImg, 192, { padRatio: 0.18, background: white }),
);
await write(
  path.join(root, "public/icons/maskable-512.png"),
  await fitOnCanvas(logoImg, 512, { padRatio: 0.18, background: white }),
);
await write(
  path.join(root, "public/icons/apple-touch-icon.png"),
  await fitOnCanvas(logoImg, 180, { padRatio: 0.08, background: white }),
);
await write(
  path.join(root, "app/icon.png"),
  await fitOnCanvas(logoImg, 192, { padRatio: 0.04, background: white }),
);
await write(
  path.join(root, "app/apple-icon.png"),
  await fitOnCanvas(logoImg, 180, { padRatio: 0.08, background: white }),
);
