import { writeFileSync, mkdirSync } from "node:fs";

const OUT_PATH = "/output/entry.txt";
const MAX_CHARS = 160;

const LINE =
  "I delegated your deadline to a subagent. That subagent delegated it to another subagent. They're still delegating.";

function writeEntry(line: string): void {
  if (line.length === 0 || line.length > MAX_CHARS || line.trim().length === 0) {
    throw new Error("entry must be 1-160 non-blank characters");
  }
  mkdirSync("/output", { recursive: true });
  writeFileSync(OUT_PATH, line, "utf8");
}

writeEntry(LINE);
