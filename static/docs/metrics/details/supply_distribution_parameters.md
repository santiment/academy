---
title: Supply Distribution Parameters
author: Filip
date: 2024-04-01
---

- [Available intervals](#available-intervals)
- [Available thresholds](#available-thresholds)
- [Available labels](#available-labels)
- [Available negative labels](#available-negative-labels)

## Available intervals

The available intervals for the supply distribution metrics offer a spectrum of balance ranges. 
An interval is defined by two values: the first representing the lowest balance and the second 
representing the highest balance within that range.

* `0_to_0.001`
* `0.001_to_0.01`
* `0.01_to_0.1`
* `0.1_to_1`
* `1_to_10`
* `10_to_100`
* `100_to_1k`
* `1k_to_10k`
* `10k_to_100k`
* `100k_to_1M`
* `1M_to_10M`
* `10M_to_100M`
* `100M_to_1B`
* `1B_to_inf`
* `total` - interval from 0 to inf

## Available thresholds

The available thresholds for the supply distribution metrics provide a range of balance thresholds, 
with each threshold representing the minimum balance required for an address to be included in the 
calculation.

* `1`
* `10`
* `100`
* `1k`
* `10k`
* `100k`
* `1M`

## Available labels

* `exchange`
* `infrastructure`
* `miner`
* `whale`
* `all`

## Available negative labels

* `nonExchange`
* `nonInfrastructure`
* `nonMiner`
* `nonWhale`
