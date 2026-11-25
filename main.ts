// The Houseplant Out-of-Office — make.fun entry (re-entry).
// Writes one out-of-office auto-reply, as if a houseplant sent it,
// to /output/entry.txt. The gate requires UTF-8 text of 1 to 120
// characters, not only whitespace.
// Re-entry line picked pairwise in CANDIDATES.md: the plastic-plant
// cover keeps the delegation literal and saves the water contrast
// for the final clause, with no cuttable word before it.
import { mkdirSync, writeFileSync } from "node:fs";

const TEXT =
  "Out of office: the plastic plant next door is covering for me. It never needs water, which is more than I can say.";

// Self-check: the gate accepts 1 to 120 characters, not only whitespace.
if (TEXT.length < 1 || TEXT.length > 120 || TEXT.trim().length === 0) {
  throw new Error(`entry text is ${TEXT.length} characters; gate needs 1-120`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", TEXT, "utf8");
console.log(`wrote ${TEXT.length} characters to /output/entry.txt`);
