import { mkdirSync, writeFileSync } from "node:fs";

// One sentence, at most 280 characters, recalling a childhood memory.
// A grandmother's kitchen, a chipped blue tin of boiled sweets on the top
// shelf, and the small honest detail that she always knew.
const line =
  "My grandmother kept her boiled sweets in a chipped blue tin on the top shelf, and every visit I dragged a kitchen chair across the tiles to reach it, knowing she had watched me do it a hundred times and would pretend, just once more, not to notice.";

if (line.length < 1 || line.length > 280) {
  throw new Error(`entry must be 1-280 characters, got ${line.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
