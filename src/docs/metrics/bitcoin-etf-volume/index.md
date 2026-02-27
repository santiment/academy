---
title: Bitcoin ETF Volume
author: Filip
date: 2024-04-01
description: Bitcoin ETF Volume Metric
---

## Description

The Bitcoin ETF Volume metric tracks the total volume in USD traded for a Bitcoin Exchange-Traded Fund 
(ETF) within a specified period. This metric provides insight into the level of investor activity and 
interest in trading Bitcoin through ETFs on traditional stock exchanges. Analyzing Bitcoin ETF volume 
can help investors gauge market sentiment, liquidity, and the overall demand for Bitcoin exposure within 
the traditional financial markets.

> Note: Keep in mind that this metric is available during the working hours of the US stock exchange.

---

## Access

[Free Access](/metrics/details/access#free-access)

---

## Measuring Unit

Amount in USD

---

## Data Type

[Timeseries Data](/metrics/details/data-type#timeseries-data)

---

## Frequency

[Five-minute Intervals](/metrics/details/frequency#five-minute-frequency)

---

## Latency

[Price Latency](/metrics/details/latency#price-latency)

---

## Available Assets

- arkb
- bitb
- btco
- fbtc
- gbtc
- hodl
- ibit

---

### SanAPI

Available under the `etf_volume_usd_5m` name.


```graphql-explorer
{
  getMetric(metric: "etf_volume_usd_5m"){
    timeseriesDataJson(
      slug: "ibit"
      from: "2024-04-01T00:00:00Z"
      to: "2024-04-03T00:00:00Z"
      interval: "5m")
  }
}
```
