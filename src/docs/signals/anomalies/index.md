---
title: Anomalies
author: Vlad
date: 2021-04-17
description: Signal indicating that real value of the metric doesn't fall in the predicted interval
---

## Definition

**Anomalie signal** indicates that real value of the metric doesn't fall in the predicted interval.

We used fbprophet which is written by facebook to predict confidence intervals for every metric and every asset.
Signals can be useful because there are many assets and metrics out there, so it's hard to view all of this data.
After that we compare predicted lower and upper values to actual value and if it doesn't fall in the interval then we fire a signal. 

### List of supported tokens:
* bitcoin
* ethereum
* ripple
* litecoin
* bitcoin-cash
* binance-coin
* uniswap
* chainlink
* aave
* sushiswap
* synthetix-network-token
* maker
* compound
* enjin-coin
* bancor
* yearn-finance
* 0x
* ren
* loopring
* 1inch
* curve-dao-token
* kyber-network
* badger-dao
* band-protocol
* balancer
* dodo
* augur
* orion-protocol
* tether
* usd-coin
* crypto-com
* ftx-token
* binance-usd
* multi-collateral-dai
* huobi-token
* unus-sed-leo
* hex
* chiliz
* the-graph
* basic-attention-token
* matic-network
* decentraland
* nexo
* omisego
* santiment

### List of supported metrics:
* stack_circulation_1d
* mvrv_usd (1d,7d,30d,60d,90d,180d,365d,2y,3y,5y,10y,20y)
* transaction_volume
* daily_active_addresses
* network_growth
* token_velocity
* stack_age_consumed
* payment_count
* exchange_token_supply
* transaction_count
* stack_cumulative_age_consumed
* active_deposits
* active_withdrawals

