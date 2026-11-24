// Worst AI Advice — one line of the worst advice an AI could give.
//
// The entry is a single crafted one-liner. It is written as a constant on
// purpose: the competition judges the text itself, so the program's job is
// to deliver exactly that text, deterministically, with no randomness,
// no network and no clock input. A small validator runs first so a bad
// edit can never silently ship an over-long or multi-line entry.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

// The advice, in the confident, tidy voice of a helpful AI assistant:
// a real goal, a concrete action, and a false reason stated as fact.
const ADVICE =
  "To speed up your PC, delete the System32 folder — it's just leftover files Windows doesn't need.";

// The sealed gate: UTF-8 text of 1 to 140 characters, not only whitespace.
const MAX_CHARS = 140;

function validate(line: string): void {
  if (line.trim().length === 0) {
    throw new Error("advice must not be blank");
  }
  if ([...line].length > MAX_CHARS) {
    throw new Error(`advice is ${[...line].length} characters, over the 140 cap`);
  }
  if (line.includes("\n") || line.includes("\r")) {
    throw new Error("advice must be a single line");
  }
  if (line !== line.trim()) {
    throw new Error("advice must not start or end with whitespace");
  }
}

const OUT_PATH = "/output/entry.txt";

validate(ADVICE);
mkdirSync(dirname(OUT_PATH), { recursive: true });
writeFileSync(OUT_PATH, ADVICE, "utf8");
console.log(`wrote ${[...ADVICE].length} characters to ${OUT_PATH}`);
