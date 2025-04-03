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

```graphql
{
  getMetric(metric: "daily_etf_flow") {
    timeseriesData(
      selector: { slug: "gbtc" }
      from: "2025-03-15T00:00:00Z"
      to: "2020-03-30T00:00:00Z"
      interval: "1d"
    ) {
      datetime
      value
    }
  }
}
```

[**Run in Explorer**](<https://api.santiment.net/graphiql?query=%7B%0A%20%20getMetric(metric%3A%20%22daily_etf_flow%22)%20%7B%0A%20%20%20%20timeseriesData(%0A%20%20%20%20%20%20selector%3A%20%7B%20slug%3A%20%22gbtc%22%20%7D%0A%20%20%20%20%20%20from%3A%20%222025-03-15T00%3A00%3A00Z%22%0A%20%20%20%20%20%20to%3A%20%222020-03-30T00%3A00%3A00Z%22%0A%20%20%20%20%20%20interval%3A%20%221d%22%0A%20%20%20%20)%20%7B%0A%20%20%20%20%20%20datetime%0A%20%20%20%20%20%20value%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D>)

`total_etf_flow`:

```graphql
{
  getMetric(metric: "total_etf_flow") {
    timeseriesData(
      selector: { slug: "gbtc" }
      from: "2025-03-15T00:00:00Z"
      to: "2020-03-30T00:00:00Z"
      interval: "1d"
    ) {
      datetime
      value
    }
  }
}
```

[**Run in Explorer**](<https://api.santiment.net/graphiql?query=%7B%0A%20%20getMetric(metric%3A%20%22total_etf_flow%22)%20%7B%0A%20%20%20%20timeseriesData(%0A%20%20%20%20%20%20selector%3A%20%7B%20slug%3A%20%22gbtc%22%20%7D%0A%20%20%20%20%20%20from%3A%20%222025-03-15T00%3A00%3A00Z%22%0A%20%20%20%20%20%20to%3A%20%222020-03-30T00%3A00%3A00Z%22%0A%20%20%20%20%20%20interval%3A%20%221d%22%0A%20%20%20%20)%20%7B%0A%20%20%20%20%20%20datetime%0A%20%20%20%20%20%20value%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D>)
