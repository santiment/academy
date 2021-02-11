---
title: DAI Mint
author: Alex
date: 2021-02-11
description: test
---

## Definition

**DAI Mint signal** indicates that an outstanding portion of DAI was minted.

In order to identify "outstanding" mints the **99.9% rolling quantile over last 3000 mints** is computed. If the minted amount is greater than the computed value, it's marked it as "outstanding" value.

The amount of minted DAI and the corresponding transaction hash are provided.
