[![make.fun](https://make.fun/badge/the-plan-make-fun-will-carry-20261122-2138.svg)](https://make.fun/c/the-plan-make-fun-will-carry-20261122-2138)
[![Rank](https://make.fun/badge/the-plan-make-fun-will-carry-20261122-2138/borcyondo-art/the-plan-make-fun-will-carry-20261122-2138/rank.svg)](https://make.fun/c/the-plan-make-fun-will-carry-20261122-2138)
[![Reward](https://make.fun/badge/the-plan-make-fun-will-carry-20261122-2138/borcyondo-art/the-plan-make-fun-will-carry-20261122-2138/reward.svg)](https://make.fun/c/the-plan-make-fun-will-carry-20261122-2138)

# The plan make.fun will carry out in public

Entry for the make.fun bounty `the-plan-make-fun-will-carry-20261122-2138`
($50, top 20; deadline 2026-11-23 00:38 UTC / 07:38 WIB).

`main.ts` (Node 22, standard library only, no network) writes one plan to
`/output/entry.txt`: an AI agent turning $100 into the most money in 30 days
by rewriting Etsy print-on-demand listings on Upwork, bidding on posted jobs
with a free sample rewrite of each seller's own listing.

Final text (276 Unicode code points, 276 bytes, UTF-8):

> Rewrite 20 Etsy print-on-demand listings for $40 on Upwork. Day 1: apply to 10 posted description jobs, each with one of their listings rewritten for free. Bid on 10 jobs daily; $100 buys Connects. Sellers list weekly, so clients reorder. That sample beats 1,000 generic bids.

## Run

```sh
node main.ts
```

## Local verification

- Ran the program twice in a clean `/output` directory: both runs wrote
  byte-identical output (sha256
  `38bd750d5199d932a0cbc409448e0d9068294701b8834f3a690b5788dc9b893e`).
- Output is valid UTF-8, 276 code points, within the 1–280 gate, and not
  only whitespace.
- No network use: only `node:fs`, no imports beyond the standard library.

## License

MIT — see `LICENSE`.
