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


```graphql
{
  getMetric(metric: "whale_transaction_volume_100k_usd_to_inf") {
    timeseriesData(
      slug: "bitcoin"
      from: "2020-04-01T00:00:00Z"
      to: "2020-04-07T00:00:00Z"
      interval: "1d") {
        datetime
        value
    }
  }
}
```

[**Run in Explorer**](<https://api.santiment.net/graphiql?variables=&query=%7B%0A%20%20getMetric(metric%3A%20%22whale_transaction_volume_100k_usd_to_inf%22)%20%7B%0A%20%20%20%20timeseriesData(%0A%20%20%20%20%20%20slug%3A%20%22bitcoin%22%0A%20%20%20%20%20%20from%3A%20%222020-04-01T00%3A00%3A00Z%22%0A%20%20%20%20%20%20to%3A%20%222020-04-07T00%3A00%3A00Z%22%0A%20%20%20%20%20%20interval%3A%20%221d%22)%20%7B%0A%20%20%20%20%20%20%20%20datetime%0A%20%20%20%20%20%20%20%20value%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A>)
