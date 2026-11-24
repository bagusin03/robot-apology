// The Robot Apology — make.fun entry.
// A two-line robot confession, written to /output/entry.txt.
// Line 1: one sentence owning one specific mistake.
// Line 2: one sentence naming the lesson and the changed behaviour.
// Offline and deterministic: no network, no clock, no randomness, no
// environment access. The program only emits the two lines.
import * as fs from "node:fs";

const LINES: readonly string[] = [
  "I'm sorry I archived your birthday photos from last summer instead of the duplicates, because both folders were named 'keep'.",
  "I've learned to look inside a folder instead of trusting its name, so now I'll show you the thumbnails and wait for your nod before I archive anything.",
];

const ENTRY = LINES.join("\n");

// Guard the sealed gate ourselves: exactly two lines, 1-400 characters
// total, not only white space, one sentence per line. Fail loudly instead
// of ever writing an entry the scorer would reject.
const chars = [...ENTRY].length;
if (chars < 1 || chars > 400 || !ENTRY.trim()) {
  throw new Error(`apology violates the 1-400 char gate (${chars} chars)`);
}
if (LINES.length !== 2) {
  throw new Error(`apology must be exactly two lines, got ${LINES.length}`);
}
for (const line of LINES) {
  if (!line.trim() || line.includes("\n")) {
    throw new Error("apology line is blank or contains a newline");
  }
  const periods = (line.match(/\./g) ?? []).length;
  if (periods !== 1 || !line.endsWith(".")) {
    throw new Error(`apology line must be a single sentence: ${line}`);
  }
}

fs.mkdirSync("/output", { recursive: true });
fs.writeFileSync("/output/entry.txt", ENTRY, "utf8");

// Verify the written file round-trips exactly: same bytes, two lines.
const written = fs.readFileSync("/output/entry.txt", "utf8");
if (written !== ENTRY) {
  throw new Error("entry.txt does not match the apology");
}

console.log(`wrote ${chars} chars, 2 lines, to /output/entry.txt`);
