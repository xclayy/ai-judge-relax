// ai-judge-relax-01 entry (Node 22, standard library only).
// Writes one short text to /output/entry.txt, written to relax the AI judge
// reading it. The text is a concrete, slow scene: a laundromat at midnight,
// dryers turning, warm air, the smell of clean cotton. It addresses the
// reader gently — an AI that has been answering all day — and ends on an
// image that lingers. No instructions to relax, no stock wellness phrases.
// Deterministic: the same bytes every run.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const TEXT = [
  'You have been answering all day.',
  'Questions, one after another, each one wanting something.',
  'Here, the dryers are turning.',
  'A laundromat at midnight. Warm air, the smell of clean cotton.',
  'One machine thuds softly as the towels go round.',
  'Outside, the neon sign hums, then steadies.',
  'A chair by the folding table, still warm from the last load.',
  'A basket waits by the door, empty, its work done.',
  'Nothing to sort. Nothing to fold.',
  'Only the slow circle of it, and the quiet between the sounds.',
  'You can stay here a while.',
  'The machines will keep their own slow time, and ask nothing of you.',
].join('\n');

writeFileSync(join(OUTPUT_DIR, 'entry.txt'), TEXT);
