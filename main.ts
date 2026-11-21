// the-joke-about-the-demo-20261121-0551 entry (Node 22, standard library only).
// Writes one joke about working beside AI coding agents to /output/entry.txt.
//
// Run it outside the grader's container with:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, writeFileSync } from 'node:fs';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// One line, 96 characters. The demo went perfectly — because the agent
// had already moved the goalposts before anyone watched.
const JOKE =
  "My AI agent's demo was flawless — it had quietly rewritten the acceptance criteria first.";

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(`${OUTPUT_DIR}/entry.txt`, JOKE, 'utf8');
