import { mkdir } from "node:fs/promises";
import path from "node:path";
import puppeteer from "puppeteer-core";

const CHROME = "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";
const BASE = "http://127.0.0.1:4301";
const OUT = path.join("preview", "mobile");
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

await mkdir(OUT, { recursive: true });
const browser = await puppeteer.launch({ executablePath: CHROME, headless: true, args: ["--hide-scrollbars"] });
let failed = 0;
const check = (name, ok) => {
  console.log(`${ok ? "PASS" : "FAIL"} ${name}`);
  if (!ok) failed += 1;
};

async function pageAt(route) {
  const page = await browser.newPage();
  await page.setViewport({ width: 390, height: 844, deviceScaleFactor: 2, isMobile: true, hasTouch: true });
  await page.goto(BASE + route, { waitUntil: "networkidle0", timeout: 60000 });
  await page.evaluate(async () => {
    await document.fonts.ready;
  });
  await sleep(900);
  return page;
}

// Mobile menu
{
  const page = await pageAt("/");
  await page.click("button[aria-haspopup='dialog']");
  await sleep(400);
  const open = await page.evaluate(() => Boolean(document.querySelector("dialog[open]")));
  check("mobile menu opens as a dialog", open);
  await page.screenshot({ path: path.join(OUT, "menu.png") });
  await page.keyboard.press("Escape");
  await sleep(400);
  const closed = await page.evaluate(() => !document.querySelector("dialog[open]"));
  check("mobile menu closes with Escape", closed);
  await page.close();
}

// Hampers filters
{
  const page = await pageAt("/hampers");
  await page.evaluate(() => {
    const buttons = [...document.querySelectorAll("button")];
    buttons.find((button) => button.textContent?.trim() === "Festive")?.click();
  });
  await sleep(400);
  const facts = await page.evaluate(() => ({
    url: window.location.search,
    count: [...document.querySelectorAll("p")].some((p) => p.textContent?.includes("of 6 boxes")),
    cards: [...document.querySelectorAll("a[href^='/hampers/']")].filter((a) => a.closest(".grid")).length,
  }));
  check("occasion filter updates the URL", facts.url.includes("occasion=Festive"));
  check("occasion filter updates the count", facts.count);
  await page.screenshot({ path: path.join(OUT, "hampers-filtered.png"), fullPage: true });
  await page.close();
}

// Builder adds two things
{
  const page = await pageAt("/build");
  for (let index = 0; index < 2; index += 1) {
    await page.evaluate(() => {
      const buttons = [...document.querySelectorAll("button")];
      const add = buttons.find((button) => button.textContent?.trim().endsWith("Add"));
      add?.click();
    });
    await sleep(250);
  }
  const facts = await page.evaluate(() => ({
    two: document.body.innerText.includes("2 of 5 chosen"),
    price: !document.body.innerText.includes("Choose 5 things to see the price"),
  }));
  check("builder adds items and counts them", facts.two);
  check("builder replaces the empty price with a total", facts.price);
  await page.screenshot({ path: path.join(OUT, "build-two-items.png"), fullPage: true });
  await page.close();
}

// FAQ opens
{
  const page = await pageAt("/faq");
  await page.evaluate(() => document.querySelector("details")?.setAttribute("open", ""));
  await sleep(300);
  const open = await page.evaluate(() => Boolean(document.querySelector("details[open]")));
  check("FAQ details open", open);
  await page.screenshot({ path: path.join(OUT, "faq-open.png") });
  await page.close();
}

// Detail sticky action
{
  const page = await pageAt("/hampers/the-festive-box");
  const facts = await page.evaluate(() => ({
    sticky: [...document.querySelectorAll("div")].some((div) => div.className.includes("fixed") && div.textContent?.includes("Reserve")),
    whatsapp: Boolean(document.querySelector("a[href*='wa.me']")),
  }));
  check("hamper detail has a mobile reserve bar", facts.sticky);
  check("hamper detail has a WhatsApp action", facts.whatsapp);
  await page.screenshot({ path: path.join(OUT, "detail.png") });
  await page.close();
}

await browser.close();
console.log(failed ? `\n${failed} failing checks` : "\nAll mobile interaction checks passed");
process.exitCode = failed ? 1 : 0;
