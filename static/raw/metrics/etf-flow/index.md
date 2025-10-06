---
title: ETF Flow Metrics
author: Santiment Team
date: 2025-03-28
description: Inflow/Outflow from ETF providers
---

## Description

Those metrics provide insights into the movement of funds within Exchange-Traded Funds (ETFs), tracking both inflows and outflows. ETFs issue and redeem shares throughout trading hours and report at the end of the trading day.
The following two metrics help assess investor sentiment, liquidity trends, and overall market interest in ETFs from different providers.

- `daily_etf_flow` - Represents the net amount of money flowing in and out of ETFs on a daily basis, measured in USD, and categorized by provider.
- `total_etf_flow` - Cumulative ETF flow since inception, reflecting the long-term investment trends and total net capital movements per provider in USD.



## Access

[Restricted Access](/metrics/details/access#restricted-access).

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

[Price Latency](/metrics/details/latency#daily-metrics-latency)

---

## Available Assets

- gbtc 
- ibit 
- fbtc 
- arkb 
- btco 
- bitb 
- hodl 
- brrr 
- btc  
- btcw 
- ezbtc

---

### SanAPI

`daily_etf_flow`:

```graphql-explorer
{
  getMetric(metric: "daily_etf_flow") {
    timeseriesDataJson(
      selector: { slug: "gbtc" }
      from: "2025-03-15T00:00:00Z"
      to: "2020-03-30T00:00:00Z"
      interval: "1d"
    )
  }
}
```

`total_etf_flow`:

```graphql-explorer
{
  getMetric(metric: "total_etf_flow") {
    timeseriesDataJson(
      selector: { slug: "gbtc" }
      from: "2025-03-15T00:00:00Z"
      to: "2020-03-30T00:00:00Z"
      interval: "1d"
    )
  }
}
```
