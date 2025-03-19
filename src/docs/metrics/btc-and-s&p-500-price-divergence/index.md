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


```graphql
{
  getMetric(metric: "btc_s_and_p_price_divergence"){
    timeseriesData(
      slug: "bitcoin"
      from: "2025-01-01T00:00:00Z"
      to: "2025-01-10T00:00:00Z"
      interval: "1d"){
        datetime
        value
      }
  }
}
```
[Run in Explorer](<https://api.santiment.net/graphiql?query=%7B%0A%20%20getMetric(metric%3A%20%22btc_s_and_p_price_divergence%22)%7B%0A%20%20%20%20timeseriesData(%0A%20%20%20%20%20%20slug%3A%20%22bitcoin%22%0A%20%20%20%20%20%20from%3A%20%222025-01-01T00%3A00%3A00Z%22%0A%20%20%20%20%20%20to%3A%20%222025-01-10T00%3A00%3A00Z%22%0A%20%20%20%20%20%20interval%3A%20%221d%22)%7B%0A%20%20%20%20%20%20%20%20datetime%0A%20%20%20%20%20%20%20%20value%0A%20%20%20%20%20%20%7D%0A%20%20%7D%0A%7D>)
