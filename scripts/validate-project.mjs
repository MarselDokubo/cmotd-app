import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const pages = [
  "index.html",
  ...fs
    .readdirSync(path.join(root, "pages"))
    .filter((x) => x.endsWith(".html"))
    .map((x) => `pages/${x}`),
];
let errors = 0;
for (const rel of pages) {
  const text = fs.readFileSync(path.join(root, rel), "utf8");
  const issues = [];
  if (text.includes("cdn.tailwindcss.com")) issues.push("Tailwind CDN remains");
  if (text.includes("fonts.googleapis.com") || text.includes("fonts.gstatic.com"))
    issues.push("Google Fonts CDN remains");
  if (text.includes('href="global.css"')) issues.push("obsolete global.css reference remains");
  if (text.includes("<cmotd-site-footer") && !text.includes("<cmotd-institution-strip"))
    issues.push("institution strip missing");
  if (issues.length) {
    errors++;
    console.error(`${rel}: ${issues.join("; ")}`);
  }
}
if (errors) process.exit(1);
console.log(`Validated ${pages.length} site pages with no CDN/font/component consistency errors.`);
