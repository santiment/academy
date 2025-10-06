---
title: Transaction Volume In Profit Or Loss
author: Santiment Team
date: 2022-03-30
description: Amount of coin/tokens moved on-chain that are in profit or in loss and the ratio between them.
---

## Description

Those metrics show the aggregate amount of coins/tokens across all transactions on
the network that moved in profit or loss for a given asset in an interval.
There is also a metric which shows the ratio between transaction volume in profit
and transaction volume in loss.


---

## Access

[Restricted Access](/metrics/details/access#restricted-access).

---

## Measuring Unit

Amount of coins/tokens

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

Available for [these
assets](<https://api.santiment.net/graphiql?variables=&query=%7B%0A%20%20getMetric(metric%3A%20%22transaction_volume%22)%20%7B%0A%20%20%20%20metadata%20%7B%0A%20%20%20%20%20%20availableSlugs%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A>)

---

## SanAPI

Available under the `transaction_volume_in_profit` name.

```graphql-explorer
{
  getMetric(metric: "transaction_volume_in_profit") {
    timeseriesDataJson(
      slug: "bitcoin"
      from: "2025-03-01T00:00:00Z"
      to: "2025-03-30T00:00:00Z"
      interval: "1d"
    )
  }
}
```

Available under the `transaction_volume_in_loss` name.

```graphql-explorer
{
  getMetric(metric: "transaction_volume_in_loss") {
    timeseriesDataJson(
      slug: "bitcoin"
      from: "2025-03-01T00:00:00Z"
      to: "2025-03-30T00:00:00Z"
      interval: "1d"
    )
  }
}
```

Available under the `transaction_volume_profit_loss_ratio` name.

```graphql-explorer
{
  getMetric(metric: "transaction_volume_profit_loss_ratio") {
    timeseriesDataJson(
      slug: "bitcoin"
      from: "2025-03-01T00:00:00Z"
      to: "2025-03-30T00:00:00Z"
      interval: "1d"
    )
  }
}
```
