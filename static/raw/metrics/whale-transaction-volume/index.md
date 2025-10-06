---
title: Whale Transaction Volume
author: Santiment Team
date: 2024-12-06
description: USD Volume of coin/tokens moved on-chain by whales.
---

## Description

This metric shows the total volume of transactions whose value in USD is above a given threhsold.
There are two metrics available:
- `whale_transaction_volume_100k_usd_to_inf` - The volume of all transactions whose USD value is above $100,000
- `whale_transaction_volume_1m_usd_to_inf` - The volume of all transactions whose USD value is above $1,000,000
---

## Access

[Restricted Access](/metrics/details/access#restricted-access).

---

## Measuring Unit

USD

---

## Data Type

[Timeseries Data](/metrics/details/data-type#timeseries-data)

---

## Frequency

[Five-Minute Intervals](/metrics/details/frequency#five-minute-frequency)

---

## Latency

[On-Chain Latency](/metrics/details/latency#on-chain-latency)

---

## Available Assets

Available for [these
assets](<https://api.santiment.net/graphiql?variables=&query=%7B%0A%20%20getMetric(metric%3A%20%22whale_transaction_volume_100k_usd_to_inf%22)%20%7B%0A%20%20%20%20metadata%20%7B%0A%20%20%20%20%20%20availableSlugs%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A>)

---

## SanAPI

The metrics are available under the following names:
- `whale_transaction_volume_100k_usd_to_inf`
- `whale_transaction_volume_1m_usd_to_inf`

```graphql-explorer
{
  getMetric(metric: "whale_transaction_volume_100k_usd_to_inf") {
    timeseriesDataJson(
      slug: "bitcoin"
      from: "2020-04-01T00:00:00Z"
      to: "2020-04-07T00:00:00Z"
      interval: "1d")
  }
}
```
