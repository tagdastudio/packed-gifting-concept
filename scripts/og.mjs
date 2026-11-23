import puppeteer from "puppeteer-core";

const CHROME = "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";
const browser = await puppeteer.launch({ executablePath: CHROME, headless: true, args: ["--hide-scrollbars"] });
const page = await browser.newPage();
await page.setViewport({ width: 1200, height: 630, deviceScaleFactor: 1 });
await page.setContent(
  `<!doctype html><html><head><style>
    *{box-sizing:border-box;margin:0}
    body{width:1200px;height:630px;background:#142018;font-family:Georgia,'Times New Roman',serif;color:#f4ead8;overflow:hidden}
    .photo{position:absolute;inset:0;background:url('http://127.0.0.1:4301/media/hero/dry-fruit-tray.jpg') center 55%/cover no-repeat;filter:brightness(.58) saturate(.9)}
    .scrim{position:absolute;inset:0;background:linear-gradient(90deg,rgba(10,20,14,.97) 0%,rgba(10,20,14,.9) 38%,rgba(10,20,14,.35) 68%,rgba(10,20,14,.2) 100%)}
    .vignette{position:absolute;inset:0;background:radial-gradient(ellipse at 65% 45%,transparent 25%,rgba(10,20,14,.45) 100%)}
    .frame{position:absolute;inset:34px;border:1px solid rgba(244,234,216,.18)}
    .mark{position:absolute;left:64px;top:62px;display:flex;align-items:center;gap:14px;font-family:Georgia,serif;font-size:34px;letter-spacing:-1px}
    .box{width:30px;height:30px;border:2px solid #e0a32e;position:relative}
    .box:after{content:'';position:absolute;left:0;right:0;top:9px;height:1px;background:#e0a32e}
    .rule{position:absolute;left:64px;top:196px;width:64px;height:6px;background:#c8452d}
    h1{position:absolute;left:62px;top:228px;width:660px;font-size:78px;line-height:.98;font-weight:400;letter-spacing:-2.5px}
    .sub{position:absolute;left:66px;top:430px;width:470px;font:400 21px/1.5 Georgia,serif;color:rgba(244,234,216,.72)}
    .meta{position:absolute;left:66px;bottom:62px;font:600 12px/1.2 Arial,sans-serif;letter-spacing:2.4px;color:rgba(244,234,216,.62)}
    .tag{position:absolute;right:74px;bottom:62px;font:600 12px/1.2 Arial,sans-serif;letter-spacing:2.4px;color:rgba(244,234,216,.62)}
    .stamp{position:absolute;right:74px;top:62px;width:92px;height:92px;border:1px solid rgba(244,234,216,.4);border-radius:999px;display:grid;place-items:center;text-align:center;font:600 10px/1.35 Arial,sans-serif;letter-spacing:2px;color:rgba(244,234,216,.75);transform:rotate(-8deg)}
  </style></head><body>
    <div class="photo"></div><div class="scrim"></div><div class="vignette"></div><div class="frame"></div>
    <div class="mark"><span class="box"></span> packed</div>
    <div class="rule"></div>
    <h1>Gifts, packed properly.</h1>
    <p class="sub">Hampers, dry fruits, snacks and small luxuries, packed by hand in Mysuru for festivals, weddings, teams and the everyday thank-you.</p>
    <div class="meta">A GIFTING HOUSE / MYSURU</div>
    <div class="tag">CURATED / PACKED / SENT</div>
    <div class="stamp">PACKED<br>MYSURU</div>
  </body></html>`,
  { waitUntil: "networkidle0" },
);
await page.screenshot({ path: "public/og.jpg", type: "jpeg", quality: 92 });
await browser.close();
console.log("public/og.jpg written");
