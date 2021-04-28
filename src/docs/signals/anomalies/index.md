---
title: Anomalies
author: Vlad
date: 2021-04-28
description: Signal indicating that real value of the metric doesn't fall in the predicted interval
---

## Definition

**Anomalie signal** indicates that real value of the metric doesn't fall in the predicted interval.

We used fbprophet which is written by facebook to predict confidence intervals for every metric and every asset.
Signals can be useful because there are many assets and metrics out there, so it's hard to view all of this data.
After that we compare predicted lower and upper values to actual value and if it doesn't fall in the interval then we fire a signal. 

### List of supported tokens:
* 0x
* 1inch
* aave
* augur
* badger-dao
* balancer
* bancor
* band-protocol
* basic-attention-token
* binance-coin
* binance-usd
* bitcoin
* bitcoin-cash
* chainlink
* chiliz
* compound
* crypto-com
* curve
* decentraland
* dodo
* enjin-coin
* ethereum
* ftx-token
* hex
* huobi-token
* kyber-network
* litecoin
* loopring
* maker
* matic-network
* multi-collateral-dai
* nexo
* omisego
* orion-protocol
* ren
* ripple
* santiment
* sushi
* synthetix-network-token
* tether
* the-graph
* uniswap
* unus-sed-leo
* usd-coin
* yearn-finance

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
* daily_avg_price_usd
* daily_trading_volume_usd
* mvrv_usd_long_short_diff
* avg_fees_usd
