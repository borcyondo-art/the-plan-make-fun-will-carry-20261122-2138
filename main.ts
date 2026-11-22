// SPDX-License-Identifier: MIT
import { mkdirSync, writeFileSync } from "node:fs";

const TEXT =
  "Rewrite 20 Etsy print-on-demand listings for $40 on Upwork. " +
  "Day 1: apply to 10 posted description jobs, each with one of their listings rewritten for free. " +
  "Bid on 10 jobs daily; $100 buys Connects. " +
  "Sellers list weekly, so clients reorder. " +
  "That sample beats 1,000 generic bids.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", TEXT, "utf8");
