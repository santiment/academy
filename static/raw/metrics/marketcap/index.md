---
title: Marketcap in USD
author: Ivan
date: 2024-03-29
description: Marketcap in USD
---

## Definition

The marketcap in USD is derived as the price of an asset in USD multiplied by the circulating supply of the same asset.

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

## Change Metrics

[Change Metrics](/metrics/details/change_metrics)

---

## Frequency

[Five-Minute Intervals](/metrics/details/frequency#five-minute-frequency)

---

## Latency

[Price Latency](/metrics/details/latency#price-latency)

---

## Available Assets

Available assets for [marketcap_usd](https://api.santiment.net/graphiql?query=%7B%0A++getMetric%28metric%3A+%22marketcap_usd%22%29%7B%0A++++metadata%7B%0A++++++availableSlugs%0A++++%7D%0A++%7D%0A%7D)

---

## SanAPI

### Marketcap USD

```graphql-explorer
{
  getMetric(metric: "marketcap_usd") {
    timeseriesDataJson(
      slug: "ethereum"
      from: "2020-04-01T00:00:00Z"
      to: "2020-04-07T00:00:00Z"
      interval: "1d"
    )
  }
}
```

## Full list of metrics

The full list of Marketcap in USD metrics is:

<Details>

<Summary>Open Metrics List</Summary>

- marketcap_usd
- marketcap_usd_change_1d
- marketcap_usd_change_30d
- marketcap_usd_change_7d

</Details>
