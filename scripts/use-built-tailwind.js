const fs = require("fs");
const path = require("path");
const root = path.resolve(__dirname, "..");
const files = [path.join(root, "index.html"), path.join(root, "preview.html")].concat(
  fs
    .readdirSync(path.join(root, "pages"))
    .filter((f) => f.endsWith(".html"))
    .map((f) => path.join(root, "pages", f)),
);
for (const file of files) {
  let s = fs.readFileSync(file, "utf8");
  const prefix = path.dirname(file) === root ? "./" : "../";
  s = s.replace(/\s*<script[^>]+src="https:\/\/cdn\.tailwindcss\.com[^>]*><\/script>/g, "");
  s = s.replace(/\s*<script[^>]+src="(?:\.\.\/|\.\/)?tailwind\.config\.js"[^>]*><\/script>/g, "");
  if (!s.includes("tailwind-build.css")) {
    s = s.replace(
      "</head>",
      `<link href="${prefix}assets/css/tailwind-build.css" rel="stylesheet">\n</head>`,
    );
  }
  fs.writeFileSync(file, s);
}
console.log(`Converted ${files.length} HTML files to the compiled Tailwind stylesheet.`);
