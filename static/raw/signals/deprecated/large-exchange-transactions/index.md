---
title: Large Exchange Transactions
author: Vlad
date: 2021-12-27
description: Signal shows that any large transaction has been made.
---

## Definition

**Large Exchange Transactions** indicates that large transactions has been made.

We take transaction for the last 30 days, calculating thresholds for each asset every day. We take thresholds values, the cost of which exceeds 10000 USD.
Then we take all the transactions whose transaction volume more than this threshold separately for each asset.
