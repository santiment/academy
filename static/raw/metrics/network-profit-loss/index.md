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

```graphql-explorer
{
  getMetric(metric: "network_profit_loss") {
    timeseriesDataJson(
      slug: "santiment"
      from: "2021-01-01T00:00:00Z"
      to: "2021-02-01T00:00:00Z"
      interval: "1d"
    )
  }
}
```

## Full list of metrics

The full list of Network Profit Loss metrics is:

<Details>

<Summary>Open Metrics List</Summary>

- network_profit_loss
- network_profit_loss_change_1d
- network_profit_loss_change_30d
- network_profit_loss_change_7d

</Details>