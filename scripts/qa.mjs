// Layout + console audit, plus full-page review shots.
// Usage: node scripts/qa.mjs  (dev server on http://127.0.0.1:4301)
import { mkdir } from "node:fs/promises";
import path from "node:path";
import puppeteer from "puppeteer-core";

const CHROME = "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";
const BASE = "http://127.0.0.1:4301";
const OUT = path.join("preview", "pages");
const routes = [
  "/",
  "/hampers",
  "/hampers/the-festive-box",
  "/build",
  "/corporate",
  "/weddings",
  "/visit",
  "/about",
  "/journal",
  "/journal/what-to-write-on-the-card",
  "/faq",
  "/delivery",
  "/legal/privacy",
  "/this-page-does-not-exist",
];
const widths = [320, 390, 768, 1440];
const shoot = new Set(["/", "/hampers", "/hampers/the-festive-box", "/build", "/corporate", "/visit", "/journal", "/faq"]);

await mkdir(OUT, { recursive: true });
const browser = await puppeteer.launch({ executablePath: CHROME, headless: true, args: ["--hide-scrollbars"] });
let failures = 0;

for (const route of routes) {
  for (const width of widths) {
    const page = await browser.newPage();
    const errors = [];
    page.on("console", (message) => message.type() === "error" && errors.push(message.text().slice(0, 180)));
    page.on("pageerror", (error) => errors.push(String(error).slice(0, 180)));
    await page.setViewport({ width, height: width < 600 ? 844 : 1000, deviceScaleFactor: 1 });
    await page.emulateMediaFeatures([{ name: "prefers-reduced-motion", value: "reduce" }]);
    const response = await page.goto(BASE + route, { waitUntil: "networkidle0", timeout: 60000 });
    await new Promise((resolve) => setTimeout(resolve, 450));

    const facts = await page.evaluate(() => {
      const doc = document.documentElement;
      const overflow = doc.scrollWidth - window.innerWidth;
      const offenders = [...document.querySelectorAll("body *")]
        .filter((element) => {
          const rect = element.getBoundingClientRect();
          return rect.width > 1 && (rect.right > window.innerWidth + 2 || rect.left < -2);
        })
        .slice(0, 4)
        .map((element) => `${element.tagName.toLowerCase()}.${String(element.className).split(" ").slice(0, 2).join(".")} right=${Math.round(element.getBoundingClientRect().right)}`);
      return {
        overflow,
        offenders,
        h1: document.querySelectorAll("h1").length,
        title: document.title,
        main: Boolean(document.querySelector("main#main")),
      };
    });

    const routeName = route === "/" ? "home" : route.replace(/^\//, "").replaceAll("/", "-");
    if (width === 1440 || width === 390) {
      if (shoot.has(route)) {
        await page.screenshot({ path: path.join(OUT, `${routeName}-${width}.png`), fullPage: true });
      }
    }

    const expectedNotFound = route === "/this-page-does-not-exist";
    const unexpectedErrors = errors.filter((error) => !(expectedNotFound && error.includes("404")));
    const bad = facts.overflow > 2 || facts.h1 !== 1 || !facts.main || unexpectedErrors.length > 0;
    if (bad) failures += 1;
    console.log(
      `${bad ? "FAIL" : "PASS"} ${route} @${width} status=${response?.status()} h1=${facts.h1} overflow=${facts.overflow}${
        facts.offenders.length ? ` offenders=${facts.offenders.join(" | ")}` : ""
      }${errors.length ? ` console=${errors.join(" | ")}` : ""}`,
    );
    await page.close();
  }
}

await browser.close();
console.log(failures ? `\n${failures} failing checks` : "\nAll layout checks passed");
process.exitCode = failures ? 1 : 0;
