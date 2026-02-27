---
title: Large Exchange Transactions
author: Vlad
date: 2021-12-27
description: Signal shows that any large transaction has been made.
---

## Definition

**Large Exchange Transactions** indicates that large transactions have been made.

We take transactions from the last 30 days, calculating thresholds for each asset every day. We take threshold values that exceed 10,000 USD.
Then we take all the transactions whose transaction volume is more than this threshold, separately for each asset.
