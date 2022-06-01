---
title: Realized Market Capitalization Hodl Waves
author: Ante
date: 2022-06-01
description: Marketcap alternative with acquisition price instead of current price
---

## Definition

Realized Market Capitalization Hodl Waves is an alternative to Circulation Hodl Waves.
The metric is representing the percentage of realized cap for a given timebound
interval in total realized cap value.
Assigning age to coin/tokens is done according to the [coin-age model](/metrics/details/stack-coin-age-model).

---

## Access

[Restricted Access](/metrics/details/access#restricted-access).

---

## Timebound

[Interval Timebound Metrics](/metrics/details/interval_timebound) available

---

## Measuring Unit

Number - % between 0 and 100

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
assets](<https://api.santiment.net/graphiql?variables=&query=%7B%0A%20%20getMetric(metric%3A%20%22realized_cap_hodl_waves_1d_to_7d%22)%20%7B%0A%20%20%20%20metadata%20%7B%0A%20%20%20%20%20%20availableSlugs%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A>)

---

## SanAPI

Available under `realized_cap_hodl_waves_<interval>` names.

```graphql
{
  getMetric(metric: "realized_cap_hodl_waves_1d_to_7d") {
    timeseriesData(
      slug: "santiment"
      from: "2022-05-25T00:00:00Z"
      to: "2022-06-01T00:00:00Z"
      interval: "1d"
    ) {
      datetime
      value
    }
  }
}
```

**[Run in Explorer](<https://api.santiment.net/graphiql?query=%7B%0A%20%20getMetric(metric%3A%20%22realized_cap_hodl_waves_1d_to_7d%22)%20%7B%0A%20%20%20%20timeseriesData(%0A%20%20%20%20%20%20slug%3A%20%22santiment%22%0A%20%20%20%20%20%20from%3A%20%222022-05-25T00%3A00%3A00Z%22%0A%20%20%20%20%20%20to%3A%20%222022-06-01T00%3A00%3A00Z%22%0A%20%20%20%20%20%20interval%3A%20%221d%22%0A%20%20%20%20)%20%7B%0A%20%20%20%20%20%20datetime%0A%20%20%20%20%20%20value%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D>)**
