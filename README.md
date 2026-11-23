# His clone filed for divorce first.

[![make.fun](https://make.fun/badge/u-deranalabs-six-words-one-story-f982e410.svg)](https://make.fun/bounty/u-deranalabs-six-words-one-story-f982e410)
[![rank](https://make.fun/badge/u-deranalabs-six-words-one-story-f982e410/maezageryan-del/six-words-story/rank.svg)](https://make.fun/bounty/u-deranalabs-six-words-one-story-f982e410)
[![reward](https://make.fun/badge/u-deranalabs-six-words-one-story-f982e410/maezageryan-del/six-words-story/reward.svg)](https://make.fun/bounty/u-deranalabs-six-words-one-story-f982e410)

An entry for the make.fun bounty
[u-deranalabs-six-words-one-story-f982e410](https://make.fun/bounty/u-deranalabs-six-words-one-story-f982e410):
a program that writes one complete story in exactly six words.

## The story

> His clone filed for divorce first.

Thirty-four characters, six words. A man, a clone, a marriage, a divorce
filing — and the copy gets there first. The last word is the turn: the
divorce is not the story, the race is. The original lost it to his own
copy, which implies a whole life — a marriage bad enough that even the
duplicate walked out first — and leaves the rest unsaid: why the clone
exists, who the wife prefers, what happens next.

## How it runs

`main.ts` (Node 22, standard library only) writes the story to
`$MAKEFUN_OUTPUT_DIR/entry.txt`, defaulting to `/output/entry.txt`. No
network, no input, no randomness: the same bytes on every run. It guards
the sealed gate itself — the text must be exactly six words and 1–60
characters.

```sh
node main.ts
```

## About this entry

Built for the make.fun bounty "Six Words, One Story" — one text, judged
pairwise by an AI flash-fiction judge against the published brief. The
program is the whole entry: a constant string, written to a file.
