---
title: Pendle Markets
author: Filip
date: 2025-03-01
description: Pendle Markets Metrics
---

## Description
Pendle Protocol is a decentralized finance (DeFi) platform that allows users to trade the future yield of tokenized 
assets. By splitting yield-bearing tokens into principal and yield components, Pendle enables more flexible yield 
management strategies. This opens up opportunities for users to hedge, speculate, or lock in fixed yields, which 
isn't typically possible in traditional DeFi staking. The protocol operates on Ethereum and other blockchain networks, 
leveraging smart contracts to ensure secure and efficient transactions.

Pendle Markets metrics:
* `pendle_total_markets_tvl` - Total USD value locked across all Pendle markets for the selected asset
* `pendle_underlying_apy` - Annual percentage yield (APY) of the underlying asset
* `pendle_implied_apy` - Average implied yields of all markets for a selected asset, weighted by expiry date
* `pendle_yield_spread` - Difference between the implied APY and the underlying APY

---

## Access

[Restricted Access](/metrics/details/access#restricted-access)

---

## Measuring Unit

* `pendle_total_markets_tvl`- Amount in USD
* `pendle_underlying_apy`, `pendle_implied_apy` and `pendle_yield_spread` - Percentage

---

## Data Type

[Timeseries Data](/metrics/details/data-type#timeseries-data)

---

## Frequency

[Daily Intervals](/metrics/details/frequency#daily-frequency)

---

## Latency

[On-Chain Latency](/metrics/details/latency#on-chain-latency)

---

## Available Assets

Available for `ethena-staked-usde`

---

### SanAPI

Pendle total markets TVL metric: `pendle_total_markets_tvl`

```graphql-explorer
{
  getMetric(metric: "pendle_total_markets_tvl"){
    timeseriesDataJson(
      slug: "ethena-staked-usde"
      from: "2025-01-01T00:00:00Z"
      to: "2025-01-10T00:00:00Z"
      interval: "1d")
  }
}
```

APY metrics: `pendle_underlying_apy` and `pendle_implied_apy`

```graphql-explorer
{
  getMetric(metric: "pendle_implied_apy"){
    timeseriesDataJson(
      slug: "ethena-staked-usde"
      from: "2025-01-01T00:00:00Z"
      to: "2025-01-10T00:00:00Z"
      interval: "1d")
  }
}
```

Yield spread metric: `pendle_yield_spread`

```graphql-explorer
{
  getMetric(metric: "pendle_yield_spread"){
    timeseriesDataJson(
      slug: "ethena-staked-usde"
      from: "2025-01-01T00:00:00Z"
      to: "2025-01-10T00:00:00Z"
      interval: "1d")
  }
}
```
