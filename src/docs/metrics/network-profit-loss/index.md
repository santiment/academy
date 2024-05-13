---
title: Network Profit Loss
author: Santiment Team
date: 2021-07-23
description: Average profit or loss of all coins that change addresses.
---

## Definition

Network Profit/Loss (NPL for short) computes the average profit or loss of all coins that change addresses daily. For each coin that moves on-chain, NPL takes the price at which it was last moved and assumes this to be its acquisition price. Once it changes addresses again, NPL assumes the coin was sold.

---

## Access

[Restricted Access](/metrics/details/access#restricted-access).

---

## Measuring Unit

Amount in dollars

---

## Data Type

[Timeseries Data](/metrics/details/data-type#timeseries-data)

---

## Change Metrics

[Change Metrics](/metrics/details/change_metrics)

---

## Frequency

[Five-Minute Intervals](/metrics/details/frequency#five-minute-freqency)

---

## Latency

[On-Chain Latency](/metrics/details/latency#on-chain-latency)

---

## Available Assets

Available for [these
assets](<https://api.santiment.net/graphiql?variables=&query=%7B%0A%20%20getMetric(metric%3A%20%22network_profit_loss%22)%20%7B%0A%20%20%20%20metadata%20%7B%0A%20%20%20%20%20%20availableSlugs%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A>)

---

## SanAPI

Example of query for **network_profit_loss**:

```graphql
{
  getMetric(metric: "network_profit_loss") {
    timeseriesData(
      slug: "santiment"
      from: "2021-01-01T00:00:00Z"
      to: "2021-02-01T00:00:00Z"
      interval: "1d"
    ) {
      datetime
      value
    }
  }
}
```

[Run in
explorer](<https://api.santiment.net/graphiql?query=%7B%0A%09getMetric(metric%3A%22network_profit_loss%22)%20%7B%0A%20%20%20%20timeseriesData(slug%3A%22santiment%22%2C%20from%3A%222021-01-01T00%3A00%3A00Z%22%2C%20to%3A%222021-02-01T00%3A00%3A00Z%22%2C%20interval%3A%221d%22)%20%7B%0A%20%20%20%20%20%20datetime%0A%20%20%20%20%20%20value%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A>)

## Full list of metrics

The full list of Network Profit Loss metrics is:

<Details>

<Summary>Open Metrics List</Summary>

- network_profit_loss
- network_profit_loss_change_1d
- network_profit_loss_change_30d
- network_profit_loss_change_7d

</Details>