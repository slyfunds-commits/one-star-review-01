// One-Star Review of Something Essential — round 1 entry.
// Writes the keeper line to /output/entry.txt and asserts the gate
// (UTF-8 text, 1-160 characters, not only whitespace) immediately.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const LINE =
  "One star. Sleep charges eight hours a night and still hands back a body that needs a nap by two in the afternoon.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");

// Read back and assert the gate immediately after writing.
// The line must be a single line with no trailing newline: the judge
// compares the entry exactly as submitted, and a trailing newline would
// be a wasted character and a sloppy deadpan.
const back = readFileSync("/output/entry.txt", "utf8");
const len = [...back].length;
if (back !== LINE) throw new Error("entry.txt does not match the keeper line");
if (len < 1 || len > 160)
  throw new Error(`entry length ${len} outside the 1-160 gate`);
if (back.trim().length === 0)
  throw new Error("entry is only whitespace");
if (back.includes("\n")) throw new Error("entry must be a single line");
// Tie-break note: the turn lands in the last few words ("by two in the
// afternoon") — the sting arrives only after the complaint is read straight,
// per criterion 4. Nothing after it explains the joke.
console.log(`entry ok: ${len} chars`);
