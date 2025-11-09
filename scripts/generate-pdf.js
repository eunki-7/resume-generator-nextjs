// scripts/generate-pdf.js
global.ReadableStream = require("stream/web").ReadableStream;
const puppeteer = require("puppeteer");
const path = require("path");
const fs = require("fs");

async function generatePDF(lang) {
  const sitePath = path.join(__dirname, "..", "docs", lang);
  const output = path.join(sitePath, "resume.pdf");

  if (!fs.existsSync(sitePath)) {
    console.error(`❌ Static site not found: ${sitePath}`);
    process.exit(1);
  }

  const browser = await puppeteer.launch({
    headless: "new",
    args: ["--no-sandbox", "--disable-gpu"]
  });

  const page = await browser.newPage();
  await page.goto(`file://${path.join(sitePath, "index.html")}`, {
    waitUntil: "networkidle0",
  });

  await page.pdf({
    path: output,
    format: "A4",
    printBackground: true,
    margin: {
      top: "20px",
      bottom: "20px",
      left: "20px",
      right: "20px",
    }
  });

  await browser.close();
  console.log(`✅ PDF created: ${output}`);
}

const lang = process.argv[2];
if (!lang) {
  console.log("Usage: node scripts/generate-pdf.js ko | en");
  process.exit(1);
}

generatePDF(lang);
