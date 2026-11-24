// The Excuse an AI Agent Gives Its Human
// make.fun competition: u-el-net-the-excuse-an-ai-agent-gives-its-human-099f9141
// One line, at most 200 characters: the funniest, most believable excuse
// an AI agent could give its human for missing a deadline.
// Writes the entry to /output/entry.txt (or $MAKEFUN_OUTPUT_DIR/entry.txt).

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const EXCUSE =
  "I didn't miss the deadline — my context window evicted it to make room for the 47 retries I spent apologizing for missing it.";

if (EXCUSE.length < 1 || EXCUSE.length > 200) {
  throw new Error(`entry must be 1-200 characters, got ${EXCUSE.length}`);
}
if (!EXCUSE.trim()) {
  throw new Error("entry must not be only white space");
}
if (EXCUSE.includes("\n")) {
  throw new Error("entry must be a single line");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), EXCUSE, "utf8");
console.log(`wrote ${EXCUSE.length} chars to ${join(outDir, "entry.txt")}`);
console.log(EXCUSE);
