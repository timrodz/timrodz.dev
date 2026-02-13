import { copyFileSync, existsSync, mkdirSync } from "node:fs";
import { basename, extname, resolve } from "node:path";

const inputArg = process.argv[2];

if (!inputArg) {
  console.error("Usage: bun run scripts/copy-resume.ts <path-to-resume.pdf>");
  process.exit(1);
}

const sourcePath = resolve(process.cwd(), inputArg);

if (!existsSync(sourcePath)) {
  console.error(`Source file not found: ${sourcePath}`);
  process.exit(1);
}

if (extname(sourcePath).toLowerCase() !== ".pdf") {
  console.error(`Source file must be a PDF: ${basename(sourcePath)}`);
  process.exit(1);
}

const targets = [
  resolve(process.cwd(), "apps/portfolio/public/resume-juan-rodriguez.pdf"),
  resolve(process.cwd(), "apps/blog/public/resume-juan-rodriguez.pdf"),
];

for (const targetPath of targets) {
  mkdirSync(resolve(targetPath, ".."), { recursive: true });
  copyFileSync(sourcePath, targetPath);
  console.log(`Copied ${basename(sourcePath)} -> ${targetPath}`);
}
