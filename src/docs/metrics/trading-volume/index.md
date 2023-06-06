---
title: Price Metrics
author: Ivan
date: 2020-04-07
description: Price, Trading Volume and Marketcap data
---

## Definition

The Trading Volume is the volume traded on exchanges.

---

## Access

[Free Access](/metrics/details/access#free-access)

---

## Measuring Unit

Amount in dollars/usdt/bitcoins

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

Available assets for [volume_usd](https://api.santiment.net/graphiql?query=%7B%0A++getMetric%28metric%3A+%22volume_usd%22%29%7B%0A++++metadata%7B%0A++++++availableSlugs%0A++++%7D%0A++%7D%0A%7D)

---

## SanAPI

### Volume USD

```graphql
{
  getMetric(metric: "volume_usd") {
    timeseriesData(
      slug: "ethereum"
      from: "2020-04-01T00:00:00Z"
      to: "2020-04-07T00:00:00Z"
      interval: "1d"
    ) {
      datetime
      value
    }
  }
}
```

[**Run in Explorer**](https://api.santiment.net/graphiql?query=%7B%0A++getMetric%28metric%3A+%22volume_usd%22%29+%7B%0A++++timeseriesData%28%0A++++++slug%3A+%22ethereum%22%0A++++++from%3A+%222020-04-01T00%3A00%3A00Z%22%0A++++++to%3A+%222020-04-07T00%3A00%3A00Z%22%0A++++++interval%3A+%221d%22%0A++++%29+%7B%0A++++++datetime%0A++++++value%0A++++%7D%0A++%7D%0A%7D)