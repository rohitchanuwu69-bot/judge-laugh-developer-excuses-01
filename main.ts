import { mkdirSync, writeFileSync } from "node:fs";

const excuse = "It worked on my machine, and my machine has now filed for witness protection.";
const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, excuse, "utf8");
