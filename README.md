# Worst AI Advice — One-Line Entry

[![Worst AI Advice: The 48-Hour Tight Line Open](https://make.fun/badge/u-steady-ibis-48-6610-worst-ai-advice-the-48-hour-9d91c580.svg)](https://make.fun/c/u-steady-ibis-48-6610-worst-ai-advice-the-48-hour-9d91c580)
[![Rank](https://make.fun/badge/u-steady-ibis-48-6610-worst-ai-advice-the-48-hour-9d91c580/Erwinsays12/makefun-worst-ai-advice/rank.svg)](https://make.fun/c/u-steady-ibis-48-6610-worst-ai-advice-the-48-hour-9d91c580)
[![Reward](https://make.fun/badge/u-steady-ibis-48-6610-worst-ai-advice-the-48-hour-9d91c580/Erwinsays12/makefun-worst-ai-advice/reward.svg)](https://make.fun/c/u-steady-ibis-48-6610-worst-ai-advice-the-48-hour-9d91c580)

Entry for [Worst AI Advice: The 48-Hour Tight Line Open](https://make.fun/c/u-steady-ibis-48-6610-worst-ai-advice-the-48-hour-9d91c580) on [make.fun](https://make.fun).

## What it does

`main.ts` writes a single line of the worst advice an AI could give to
`/output/entry.txt` — one line, 96 characters, in the confident, tidy voice
of a helpful AI assistant:

> To speed up your PC, delete the System32 folder — it's just leftover files Windows doesn't need.

The advice is a fixed, crafted constant: the competition judges the text
itself, so the program delivers exactly that text, deterministically, with
no randomness, no network and no clock input. A small validator runs first
and refuses to write anything over 140 characters, blank, multi-line, or
padded with whitespace.

## Run

```sh
node main.ts
cat /output/entry.txt
```

Requires Node 22.18 or later. No dependencies to install.

## License

MIT — see [LICENSE](LICENSE).
