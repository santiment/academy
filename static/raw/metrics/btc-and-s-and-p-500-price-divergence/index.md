---
title: BTC and S&P 500 Price Divergence
author: Filip
date: 2025-03-01
description: BTC and S&P 500 Price Divergence Metric
---

## Description
The BTC vs. S&P 500 price divergence metric helps track how these two assets move 
relative to each other. It measures the difference between their scaled prices, 
showing whether Bitcoin is outperforming or lagging behind the stock market. When the 
metric rises, it means Bitcoin is either dropping more than the S&P 500 or the S&P is 
rallying harder than BTC. When it falls, the opposite is true—Bitcoin is holding up 
better or even outpacing the stock market. This can be useful for spotting shifts in 
risk appetite, market sentiment, or broader macro trends affecting both assets.


BTC and S&P 500 Price Divergence Metric:
* `btc_s_and_p_price_divergence` - Difference between the scaled prices of the S&P 500 and Bitcoin

---

## Access

[Free Access](/metrics/details/access#free-access)

---

## Measuring Unit

Divergence factor

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

Available for `bitcoin`

---

### SanAPI

Available under name: `btc_s_and_p_price_divergence`


```graphql-explorer
{
  getMetric(metric: "btc_s_and_p_price_divergence"){
    timeseriesDataJson(
      slug: "bitcoin"
      from: "2025-01-01T00:00:00Z"
      to: "2025-01-10T00:00:00Z"
      interval: "1d")
  }
}
```
