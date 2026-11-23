// Review images for the current hero. Requires the dev server on http://127.0.0.1:4301.
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import puppeteer from "puppeteer-core";
import pngPkg from "pngjs";
import gifPkg from "gifenc";

const { PNG } = pngPkg;
const { GIFEncoder, applyPalette, quantize } = gifPkg;
const CHROME = "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";
const BASE = "http://127.0.0.1:4301";
const OUT = "preview";
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

await mkdir(OUT, { recursive: true });

const browser = await puppeteer.launch({
  executablePath: CHROME,
  headless: true,
  args: ["--hide-scrollbars", "--force-color-profile=srgb"],
});

async function openPage(width, height, deviceScaleFactor, reducedMotion) {
  const page = await browser.newPage();
  await page.setViewport({ width, height, deviceScaleFactor, isMobile: width < 600, hasTouch: width < 600 });
  if (reducedMotion) {
    await page.emulateMediaFeatures([{ name: "prefers-reduced-motion", value: "reduce" }]);
  }
  await page.goto(BASE, { waitUntil: "networkidle0", timeout: 60000 });
  await page.evaluate(async () => {
    await document.fonts.ready;
  });
  await sleep(reducedMotion ? 800 : 300);
  return page;
}

// Still images, reduced motion so the final composition is stable.
{
  const page = await openPage(1440, 1000, 1, true);
  await page.hover("[data-photo-tag]");
  await sleep(700);
  await page.screenshot({ path: path.join(OUT, "hero-desktop.png") });
  await page.screenshot({ path: path.join(OUT, "home-desktop.png"), fullPage: true });
  await page.close();
}

{
  const page = await openPage(390, 844, 2, true);
  await page.screenshot({ path: path.join(OUT, "hero-mobile.png") });
  await page.screenshot({ path: path.join(OUT, "home-mobile.png"), fullPage: true });
  await page.close();
}

// The entrance, as a GIF.
{
  const page = await openPage(1200, 820, 1, false);
  await page.evaluate(() => window.scrollTo(0, 0));
  const clip = { x: 0, y: 0, width: 1200, height: 820 };
  const frames = [];

  for (let index = 0; index < 26; index += 1) {
    const buffer = await page.screenshot({ clip, type: "png" });
    const png = PNG.sync.read(buffer);
    frames.push({ data: new Uint8Array(png.data), width: png.width, height: png.height, delay: index === 0 ? 500 : 85 });
    await sleep(35);
  }

  await page.close();

  const { width, height } = frames[0];
  const sampleStep = 16;
  let total = 0;
  for (const frame of frames) total += Math.floor(frame.data.length / sampleStep) + 4;
  const combined = new Uint8Array(total);
  let offset = 0;
  for (const frame of frames) {
    for (let index = 0; index < frame.data.length; index += sampleStep) {
      combined[offset++] = frame.data[index];
      combined[offset++] = frame.data[index + 1];
      combined[offset++] = frame.data[index + 2];
      combined[offset++] = frame.data[index + 3];
    }
  }
  const palette = quantize(combined.subarray(0, offset), 256);
  const gif = GIFEncoder();
  frames.forEach((frame, index) => {
    const bitmap = applyPalette(frame.data, palette);
    gif.writeFrame(bitmap, width, height, {
      palette: index === 0 ? palette : undefined,
      delay: frame.delay,
      repeat: 0,
    });
  });
  gif.finish();
  await writeFile(path.join(OUT, "hero-motion.gif"), gif.bytes());
  console.log(`GIF: ${width}x${height}, ${frames.length} frames`);
}

await browser.close();
console.log("Preview images written to preview/");
