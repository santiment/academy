---
title: Fully Diluted Valuation in USD
author: Ante
date: 2024-09-03
description: Fully Diluted Valuation in USD
---

## Definition

The fully diluted valuation in USD is derived as the price of an asset in USD multiplied by the total supply of the same asset.

---

## Access

[Free Access](/metrics/details/access#free-access)

---

## Measuring Unit

USD

---

## Data Type

[Timeseries Data](/metrics/details/data-type#timeseries-data)

---

## Frequency

[Daily Intervals](/metrics/details/frequency#daily-frequency)

---

## Latency

[Price Latency](/metrics/details/latency#price-latency)

---

## Available Assets

Available for [these assets](https://api.santiment.net/graphiql?query=%7B%0A%20%20getMetric(metric%3A%20%22fully_diluted_valuation_usd%22)%7B%0A%20%20%20%20metadata%7B%0A%20%20%20%20%20%20availableSlugs%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D)

---

## SanAPI

```graphql-explorer
{
  getMetric(metric: "fully_diluted_valuation_usd") {
    timeseriesDataJson(
      slug: "ethereum"
      from: "2020-04-01T00:00:00Z"
      to: "2020-04-07T00:00:00Z"
      interval: "1d"
    )
  }
}
```
