---
title: Latency
author: Ivan
date: 2020-04-02
---

- [On-Chain Latency](#on-chain-latency)
- [Price Latency](#price-latency)
- [Development Activity Latency](#development-activity-latency)

## On-Chain Latency

In order to compute on-chain data, a number block confirmations are required before fetching the data for a given block. Measured in time:

- Bitcoin - Around 30 minutes
- Ethereum - Around 5 minutes
- Bitcoin Cash - Around 5 minutes
- Litecoin - Around 5 minutes
- Binance Chain - Around 5 inutes
- EOS - Around 1 minute

After the block is considered confirmed and its data is fetched, the data processing can take anywhere from a few minutes to few hours.
The upper limits are:

- For 5-minute interval metrics processing the data can take up to 20 minutes most
- For daily metrics processing the data can take up to 2 hours

## Price Latency

The prices are updated every 5 minutes

## Development Activity Latency

The development activity metrics are updated every 1 hour with max delays of 6 hours
