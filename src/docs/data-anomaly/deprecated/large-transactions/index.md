---
title: Large Transactions
author: Katsiaryna
date: 2021-04-26
description: Signal indicating transactions with big value in USD
---

## Definition

**Large Transaction Signal** indicates transactions with large value in USD.

In order to filter most valuable transactions for each transaction a threshold value is defined. The threshold is the USD value of the top-fifth transaction in last 30 days.

If the transaction's approximate value in USD is above the threshold value, a signal is fired.

Approximate transaction values are calculated by multiplying the amount of transferred coins by the closest coin price value, using price data with a 5-minute interval for each transaction.

## List of supported tokens
* ethereum
* tether
* 1inch
* aave
* badger-dao
* balancer
* band-protocol
* bancor
* compound
* curve
* dodo
* enjin-coin
* kyber-network
* chainlink
* loopring
* maker
* orion-protocol
* ren
* augur
* synthetix-network-token
* sushi
* uniswap
* yearn-finance
* 0x
