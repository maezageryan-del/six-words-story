// Six Words, One Story — make.fun entry
// Writes one complete story in exactly six words to /output/entry.txt
// (or $MAKEFUN_OUTPUT_DIR). The story: a man has a clone, a marriage,
// and a divorce filing — and the copy gets there first.
//
// "His clone filed for divorce first."
//   His(1) clone(2) filed(3) for(4) divorce(5) first(6) — 34 characters.
// The last word is the turn: the divorce is not the story, the race is.
// The original lost it to his own copy, which implies a whole life —
// a marriage bad enough that even the duplicate walked out first —
// and leaves the rest unsaid: why the clone exists, who the wife
// prefers, what happens next.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const STORY = "His clone filed for divorce first.";

// Sealed gate: entry.txt must be UTF-8 text of 1 to 60 characters,
// not only white space, and the story must be exactly six words.
// The line is 34 bytes on purpose: an exact tie on Judge win rate goes
// to the smaller text first, so every spare character is a liability.
const words = STORY.trim().split(/\s+/);
if (STORY.length < 1 || STORY.length > 60 || STORY.trim().length === 0) {
  throw new Error(`entry must be 1-60 characters, got ${STORY.length}`);
}
if (words.length !== 6) {
  throw new Error(`entry must be exactly six words, got ${words.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), STORY, "utf8");
console.log(`Wrote ${STORY.length} characters (${words.length} words) to ${join(outDir, "entry.txt")}`);
