---
title: Daily Aggregated Financial Metrics in USD
author: Ivan
date: 2024-03-26
description: Daily Aggregated OHLC Price, Trading Volume and Marketcap 
---

## Definition

The following metrics are computed by applying an aggregation of all the values of a metric
in a given day.

- daily_avg_marketcap_usd
- daily_avg_price_usd
- daily_closing_marketcap_usd
- daily_closing_price_usd
- daily_high_price_usd
- daily_low_price_usd
- daily_opening_price_usd
- daily_trading_volume_usd

---

## Access

[Free Access](/metrics/details/access#free-access)

---

## Measuring Unit

Amount in USD 

---

## Data Type

[Timeseries Data](/metrics/details/data-type#timeseries-data)


## Frequency

[Daily Intervals](/metrics/details/frequency#daily-frequency)

---

## Latency

[Daily Metrics Latency](/metrics/details/latency#daily-metrics-latency)

---

## Available Assets

Available Assets for [daily_avg_marketcap_usd](https://api.santiment.net/graphiql?query=%7B%0A%20%20getMetric(metric%3A%20%22daily_avg_marketcap_usd%22)%7B%0A%20%20%20%20metadata%7B%0A%20%20%20%20%20%20availableSlugs%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D)

Use the same API call to check the available metrics for the other metrics.

---

## SanAPI

```graphql
{
  getMetric(metric: "daily_closing_price_usd") {
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

[**Run in Explorer**](https://api.santiment.net/graphiql?query=%7B%0A++getMetric%28metric%3A+%22daily_closing_price_usd%22%29+%7B%0A++++timeseriesData%28%0A++++++slug%3A+%22ethereum%22%0A++++++from%3A+%222020-04-01T00%3A00%3A00Z%22%0A++++++to%3A+%222020-04-07T00%3A00%3A00Z%22%0A++++++interval%3A+%221d%22%0A++++%29+%7B%0A++++++datetime%0A++++++value%0A++++%7D%0A++%7D%0A%7D)
