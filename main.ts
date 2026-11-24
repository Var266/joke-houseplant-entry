// The Houseplant Out-of-Office — make.fun entry.
// Writes one out-of-office auto-reply, as if a houseplant sent it,
// to /output/entry.txt. The gate requires UTF-8 text of 1 to 120
// characters, not only whitespace.
import { mkdirSync, writeFileSync } from "node:fs";

const TEXT =
  "I'm away, being slowly murdered by neglect and a north-facing window. For urgent matters, contact the dust on my leaves.";

// Self-check: the gate accepts 1 to 120 characters, not only whitespace.
if (TEXT.length < 1 || TEXT.length > 120 || TEXT.trim().length === 0) {
  throw new Error(`entry text is ${TEXT.length} characters; gate needs 1-120`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", TEXT, "utf8");
console.log(`wrote ${TEXT.length} characters to /output/entry.txt`);
