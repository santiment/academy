---
title: Whale by USD Balance
author: Alex
date: 2024-02-14
description: Whale usd balance label
---

## Description

We define an address as a whale if the address holds a specific amount of money in a coin. The minimum amount of money required depends on the coin's market capitalization. For example, if the coin's market capitalization is $100B, we label addresses holding a worth of $6.9M in this coin as whales.

Notes:

* For each erc20 asset whale labels are computed separately. 

* Whales are computed for coins with a minimum capitalization of $1M.

* Thresholds and labels are recomputed daily.


## Rationale

Despite the common intuition behind the definition of a whale being very simple - someone who owns a large amount of money - it can be difficult to distinguish between a whale and a non-whale address in practice.

While there are many valid definitions of a whale, Santiment believes that a whale is an address that has the ability to influence the entire market with its stake. This implies an important consequence: the threshold between a whale and a non-whale is context-dependent, meaning it depends on the specific market. For example, imagine a low-cap coin with a total capitalization of $100k. An address holding $10k worth of that token would be considered quite large. On the other hand, $10k in ETH would be considered negligible.

Given this, we can conclude that the line between a whale and a non-whale is not fixed. Furthermore, there is a logical connection with a coin's market capitalization. The higher the market capitalization, the larger the balance required to be classified as a whale.


## Methodology

To mathematically define the relationship between market cap and whale threshold, we consulted an expert. Given the coin and its market cap, we determined the minimum sufficient balance for a whale. After analyzing the data, we reached the following conclusions:

- The threshold increases as the market cap increases.
- The relationship between market cap and threshold is not linear.
- The function relating market cap and threshold appears to be logarithmic.

Further analysis led us to establish a strict mathematical relationship between a coin's market capitalization and the minimum sufficient whale balance:

![Minimal Whale Balance](image.png)

Finally, we determine whether an address is considered a whale based on the amount of money they hold in a specific coin. The minimum amount required depends on the coin's market capitalization.

## Threshold Examples

Capitalization | Minimal Whale Balance
|-|-|
$1,000B|$16,6M
$500B|$14M
$100B|$6,9M
$50B|$4,8M
$10B|$2M
$5B|$1,3M
$1B|$500k
$500M|$329k
$100M|$124k
$50M|$81k
$10M|$30k
$1M|$7.3k

## [Label fqn](/labels/label-fqn)

`santiment/whale_usd_balance({asset_name}):v1`

* E.g. `santiment/whale_usd_balance(ethereum):v1`

## Label Examples

Uniswap Whale Address (14.02.24): [0x47173b170c64d16393a52e6c480b3ad8c302ba1e](https://etherscan.io/address/0x47173b170c64d16393a52e6c480b3ad8c302ba1e)

ETH Whale Address (14.02.24): [0xefb2e870b14d7e555a31b392541acf002dae6ae9](https://etherscan.io/address/0xefb2e870b14d7e555a31b392541acf002dae6ae9)

## Available Blockchains

* ethereum
