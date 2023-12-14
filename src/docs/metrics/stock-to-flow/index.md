---
title: Stock To Flow ratio
author: Tsetso
date: 2020-06-12

headline: "Stock to Flow Ratio (S2F): How It's Used and Calculated"
description: "Discover how to calculate and apply the stock to flow ratio in your trading strategy. Understand the balance between the supply and production rate of an asset to make trading decisions."
---

## Definition

Stock To Flow ratio model is a measure of scarcity/abundance of particular resource.
It shows how much supply enters yearly relative to the total supply of the resource.
We measure Stock To Flow ratio for a given asset as the ratio between [Total Circulation](/metrics/circulation) of the asset
and the daily minted coins multiplied by days in one year.

---

## Access

Stock To Flow ratio metric is available only in `Custom` plans.

[Restricted Access](/metrics/details/access#restricted-access).

---

## Timebound

[Timebound Metrics](/metrics/details/timebound) available

---

## Measuring Unit

Token/Coin amount

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
assets](<https://api.santiment.net/graphiql?variables=&query=%7B%0A%20%20getMetric(metric%3A%20%22stock_to_flow%22)%20%7B%0A%20%20%20%20metadata%20%7B%0A%20%20%20%20%20%20availableSlugs%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A>)

> Note: `stock_to_flow` metric is available only for assets that mint new coins on a regular basis.

---

## SanAPI

Available under the `stock_to_flow` name.

```graphql
{
  getMetric(metric: "stock_to_flow") {
    timeseriesData(
      slug: "bitcoin"
      from: "2020-01-01T00:00:00Z"
      to: "2020-01-07T00:00:00Z"
      interval: "1d"
    ) {
      datetime
      value
    }
  }
}
```

**[Run in Explorer](<https://api.santiment.net/graphiql?variables=&query=%7B%0A%20%20getMetric(metric%3A%20%22stock_to_flow%22)%20%7B%0A%20%20%20%20timeseriesData(%0A%20%20%20%20%20%20slug%3A%20%22bitcoin%22%0A%20%20%20%20%20%20from%3A%20%222020-01-01T00%3A00%3A00Z%22%0A%20%20%20%20%20%20to%3A%20%222020-01-07T00%3A00%3A00Z%22%0A%20%20%20%20%20%20interval%3A%20%221d%22%0A%20%20%20%20)%20%7B%0A%20%20%20%20%20%20datetime%0A%20%20%20%20%20%20value%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D>)**
