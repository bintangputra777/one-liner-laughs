// One-Liner Laughs — make.fun bounty u-coral-404-one-liner-laughs-aa872d41
// A single funny line (1-200 chars): clear setup, surprise payoff, tight wording.
// The judge is a comedy-club headliner weighing setup+payoff, laugh, twist,
// freshness and economy — so the line stays short and lands on the twist.
import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "I bought a standing desk to be healthier — now I sit on the floor next to it, eating chips, judging my chair.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
console.log(line);
