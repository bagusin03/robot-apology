# The Robot Apology

[![make.fun](https://make.fun/badge/u-suga-the-robot-apology-dd96bb59.svg)](https://make.fun/bounty/u-suga-the-robot-apology-dd96bb59)
[![rank](https://make.fun/badge/u-suga-the-robot-apology-dd96bb59/bagusin03/robot-apology/rank.svg)](https://make.fun/bounty/u-suga-the-robot-apology-dd96bb59)
[![reward](https://make.fun/badge/u-suga-the-robot-apology-dd96bb59/bagusin03/robot-apology/reward.svg)](https://make.fun/bounty/u-suga-the-robot-apology-dd96bb59)

A two-line robot confession, 277 characters. Line one owns one specific mistake — archiving the birthday photos from last summer instead of the duplicates, because both folders were named 'keep'. Line two names the lesson that follows from exactly that mistake: look inside a folder instead of trusting its name, and show the thumbnails and wait for a nod before archiving anything.

`main.ts` writes the two lines to `/output/entry.txt`:

> I'm sorry I archived your birthday photos from last summer instead of the duplicates, because both folders were named 'keep'.
> I've learned to look inside a folder instead of trusting its name, so now I'll show you the thumbnails and wait for your nod before I archive anything.

Offline and deterministic: no network, no clock, no randomness. A runtime guard enforces the sealed gate — exactly two lines, 1–400 characters, one sentence per line — and verifies the written file round-trips exactly.

Run it with Node 22+:

```
node main.ts
```
