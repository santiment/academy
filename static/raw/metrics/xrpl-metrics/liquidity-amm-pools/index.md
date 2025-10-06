---
title: Liquidity in XRPL AMM Pools
author: Ante
date: 2024-08-01
description: XRPL AMM liquidity metrics
---

## Description

We track two metrics related to AMM liquidity:

- **Liquidity in XRPL AMM Pool by Pair** - the total amount of liquidity for specific asset in pool.
- **Liquidity in XRPL AMM Pool by Asset** - the total amount of tokens in all AMM pools for specific asset.

---

## Access

[Free Access](/metrics/details/access#free-access)

---

## Measuring Unit

Amount of tokens.

---

## Data Type

[Timeseries Data](/metrics/details/data-type#timeseries-data)

---

## Frequency

[Daily frequency](/metrics/details/frequency/#daily-frequency)

---

## Latency

[On-Chain Latency](/metrics/details/latency#on-chain-latency)

---

## Available Assets

Available for:
- `liquidity_in_amm_pools_by_pair` - [these assets](https://api.santiment.net/graphiql?variables=&query=%7B%0A%20%20getMetric(metric%3A%20%22liquidity_in_amm_pools_by_pair%22)%20%7B%0A%20%20%20%20metadata%20%7B%0A%20%20%20%20%20%20availableSlugs%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A)
- `liquidity_in_amm_pools_by_asset` - [these assets](https://api.santiment.net/graphiql?variables=&query=%7B%0A%20%20getMetric(metric%3A%20%22liquidity_in_amm_pools_by_asset%22)%20%7B%0A%20%20%20%20metadata%20%7B%0A%20%20%20%20%20%20availableSlugs%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A)

---

### SanAPI

Available under `liquidity_in_amm_pools_by_pair` name.

```graphql-explorer
{
  getMetric(metric: "liquidity_in_amm_pools_by_pair") {
    timeseriesDataJson(
      selector: {
        slug: "xrp"
        owner: "XRP"
        label: "XRP-rXmagwMmnFtVet3uL26Q2iwk287SRvVMJ/MAG"
      }
      from: "2024-07-01T00:00:00Z"
      to: "2024-07-07T00:00:00Z"
    )
  }
}
```

Available under the `liquidity_in_amm_pools_by_asset` name.

```graphql-explorer
{
  getMetric(metric: "liquidity_in_amm_pools_by_asset") {
    timeseriesDataJson(
      selector: {
        slug: "xrp"
        owner: "XRP"
      }
      from: "2024-07-01T00:00:00Z"
      to: "2024-07-07T00:00:00Z"
    )
  }
}
```
