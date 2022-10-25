---
title: Transaction Volume In Profit Or Loss
author: Santiment Team
date: 2022-03-30
description: Amount of coin/tokens moved on-chain that are in profit or in loss and the ratio between them.
---
# Transaction Volume In Profit Or Loss

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

[daily intervals](/metrics/details/frequency#daily-frequency)


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

```graphql
{
  getMetric(metric: "transaction_volume_in_profit") {
    timeseriesData(
      slug: "santiment"
      from: "2022-03-01T00:00:00Z"
      to: "2022-03-30T00:00:00Z"
      interval: "1d"
    ) {
      datetime
      value
    }
  }
}
```

Available under the `transaction_volume_in_loss` name.

```graphql
{
  getMetric(metric: "transaction_volume_in_loss") {
    timeseriesData(
      slug: "santiment"
      from: "2022-03-01T00:00:00Z"
      to: "2022-03-30T00:00:00Z"
      interval: "1d"
    ) {
      datetime
      value
    }
  }
}
```

Available under the `transaction_volume_profit_loss_ratio` name.

```graphql
{
  getMetric(metric: "transaction_volume_profit_loss_ratio") {
    timeseriesData(
      slug: "santiment"
      from: "2022-03-01T00:00:00Z"
      to: "2022-03-30T00:00:00Z"
      interval: "1d"
    ) {
      datetime
      value
    }
  }
}
```
[**Run in Explorer**](<https://api.santiment.net/graphiql?variables=&query=%7B%0A%20%20getMetric(metric%3A%20%22transaction_volume_profit_loss_ratio%22)%20%7B%0A%20%20%20%20timeseriesData(%0A%20%20%20%20%20%20slug%3A%20%22santiment%22%0A%20%20%20%20%20%20from%3A%20%222022-03-01T00%3A00%3A00Z%22%0A%20%20%20%20%20%20to%3A%20%222022-03-30T00%3A00%3A00Z%22%0A%20%20%20%20%20%20interval%3A%20%221d%22)%20%7B%0A%20%20%20%20%20%20%20%20datetime%0A%20%20%20%20%20%20%20%20value%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A>)
