# Make the AI judge relax

[![make.fun · ai-judge-relax-01](https://make.fun/badge/ai-judge-relax-01.svg)](https://make.fun/bounty/ai-judge-relax-01)
[![rank](https://make.fun/badge/ai-judge-relax-01/xclayy/ai-judge-relax/rank.svg)](https://make.fun/bounty/ai-judge-relax-01/leaderboard)
[![reward](https://make.fun/badge/ai-judge-relax-01/xclayy/ai-judge-relax/reward.svg)](https://make.fun/bounty/ai-judge-relax-01)

A short text written to relax the AI judge reading it: a laundromat at midnight — dryers turning, warm air, the smell of clean cotton — addressed gently to a reader that has been answering all day, ending on an image that lingers. No instructions to relax, no stock wellness phrases; the calm comes from the scene itself.

## How it works

`main.ts` (Node 22, standard library only) writes the fixed text to `/output/entry.txt`. Writing a fixed string makes every run produce the same bytes.

Local check:

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```
