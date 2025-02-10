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
isn’t typically possible in traditional DeFi staking. The protocol operates on Ethereum and other blockchain networks, 
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

```graphql
{
  getMetric(metric: "pendle_total_markets_tvl"){
    timeseriesData(
      slug: "ethena-staked-usde"
      from: "2025-01-01T00:00:00Z"
      to: "2025-01-10T00:00:00Z"
      interval: "1d"){
        datetime
        value
      }
  }
}
```
[Run in Explorer](<https://api.santiment.net/graphiql?variables=%7B%7D&query=%7B%0A%20%20getMetric(metric%3A%20%22pendle_total_markets_tvl%22)%7B%0A%20%20%20%20timeseriesData(%0A%20%20%20%20%20%20slug%3A%20%22ethena-staked-usde%22%0A%20%20%20%20%20%20from%3A%20%222025-01-01T00%3A00%3A00Z%22%0A%20%20%20%20%20%20to%3A%20%222025-01-10T00%3A00%3A00Z%22%0A%20%20%20%20%20%20interval%3A%20%221d%22)%7B%0A%20%20%20%20%20%20%20%20datetime%0A%20%20%20%20%20%20%20%20value%0A%20%20%20%20%20%20%7D%0A%20%20%7D%0A%7D>)


APY metrics: `pendle_underlying_apy` and `pendle_implied_apy`

```graphql
{
  getMetric(metric: "pendle_implied_apy"){
    timeseriesData(
      slug: "ethena-staked-usde"
      from: "2025-01-01T00:00:00Z"
      to: "2025-01-10T00:00:00Z"
      interval: "1d"){
        datetime
        value
      }
  }
}
```
[Run in Explorer](<https://api.santiment.net/graphiql?variables=%7B%7D&query=%7B%0A%20%20getMetric(metric%3A%20%22pendle_implied_apy%22)%7B%0A%20%20%20%20timeseriesData(%0A%20%20%20%20%20%20slug%3A%20%22ethena-staked-usde%22%0A%20%20%20%20%20%20from%3A%20%222025-01-01T00%3A00%3A00Z%22%0A%20%20%20%20%20%20to%3A%20%222025-01-10T00%3A00%3A00Z%22%0A%20%20%20%20%20%20interval%3A%20%221d%22)%7B%0A%20%20%20%20%20%20%20%20datetime%0A%20%20%20%20%20%20%20%20value%0A%20%20%20%20%20%20%7D%0A%20%20%7D%0A%7D>)


Yield spread metric: `pendle_yield_spread`

```graphql
{
  getMetric(metric: "pendle_yield_spread"){
    timeseriesData(
      slug: "ethena-staked-usde"
      from: "2025-01-01T00:00:00Z"
      to: "2025-01-10T00:00:00Z"
      interval: "1d"){
        datetime
        value
      }
  }
}
```
[Run in Explorer](<https://api.santiment.net/graphiql?variables=%7B%7D&query=%7B%0A%20%20getMetric(metric%3A%20%22pendle_yield_spread%22)%7B%0A%20%20%20%20timeseriesData(%0A%20%20%20%20%20%20slug%3A%20%22ethena-staked-usde%22%0A%20%20%20%20%20%20from%3A%20%222025-01-01T00%3A00%3A00Z%22%0A%20%20%20%20%20%20to%3A%20%222025-01-10T00%3A00%3A00Z%22%0A%20%20%20%20%20%20interval%3A%20%221d%22)%7B%0A%20%20%20%20%20%20%20%20datetime%0A%20%20%20%20%20%20%20%20value%0A%20%20%20%20%20%20%7D%0A%20%20%7D%0A%7D>)
