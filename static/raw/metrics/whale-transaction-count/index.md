---
title: Whale Transaction Count
author: Santiment Team
date: 2022-07-27
description: Amount of coin/tokens moved on-chain by whales.
---

## Description

This metric shows the number of transactions whose value in USD is above a given threhsold.
There are two metrics available:
- `whale_transaction_count_100k_usd_to_inf` - The count of all transactions whose USD value is above $100,000
- `whale_transaction_count_1m_usd_to_inf` - The count of all transactions whose USD value is above $1,000,000
---

## Access

[Restricted Access](/metrics/details/access#restricted-access).

---

## Measuring Unit

Count of transactions

---

## Data Type

[Timeseries Data](/metrics/details/data-type#timeseries-data)

---

## Change Metrics

[Change Metrics](/metrics/details/change_metrics)

---

## Frequency

[Five-Minute Intervals](/metrics/details/frequency#five-minute-frequency)

---

## Latency

[On-Chain Latency](/metrics/details/latency#on-chain-latency)

---

## Available Assets

Available for [these
assets](<https://api.santiment.net/graphiql?variables=&query=%7B%0A%20%20getMetric(metric%3A%20%22whale_transaction_count_100k_usd_to_inf%22)%20%7B%0A%20%20%20%20metadata%20%7B%0A%20%20%20%20%20%20availableSlugs%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A>)

---

## SanAPI

The metrics are available under the following names:
- `whale_transaction_count_100k_usd_to_inf`
- `whale_transaction_count_1m_usd_to_inf`

In addition, there following change metrics are available:
- `whale_transaction_count_100k_usd_to_inf_change_1d`
- `whale_transaction_count_100k_usd_to_inf_change_7d`
- `whale_transaction_count_100k_usd_to_inf_change_30d`
- `whale_transaction_count_1m_usd_to_inf_change_1d`
- `whale_transaction_count_1m_usd_to_inf_change_7d`
- `whale_transaction_count_1m_usd_to_inf_change_30d`

```graphql-explorer
{
  getMetric(metric: "whale_transaction_count_100k_usd_to_inf") {
    timeseriesDataJson(
      slug: "santiment"
      from: "2020-04-01T00:00:00Z"
      to: "2020-04-07T00:00:00Z"
      interval: "1d"
    )
  }
}
```
