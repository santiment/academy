---
title: BitMEX Perpetual Contract Funding Rate
author: Anatoliy
date: 2020-06-03
description: Amount of coin/tokens moved on-chain.
---

## Description

The funding rate is a fee paid by one side of the perpetual contract to the other. When the funding rate is positive, Longs pay Shorts. When the funding rate is negative, Shorts pay Longs.  

More details on BitMEX [web-site](https://www.bitmex.com/app/perpetualContractsGuide#Mechanics-of-a-Perpetual-Contract-Market).

---

## Access

[Restricted Access](/metrics/details/access#restricted-access).

---

## Measuring Unit

Ratio

---

## Data Type

[Timeseries Data](/metrics/details/data-type#timeseries-data)

---

## Change Metrics

[Change Metrics](/metrics/details/change_metrics)

---

## Frequency

[Eight-Hour Intervals](/metrics/details/frequency#eight-hour-frequency)

---

## Latency

[Price Latency](/metrics/details/latency#price-latency)

---

## Available Assets

Available for [these
assets](<https://api.santiment.net/graphiql?variables=&query=%7B%0A%20%20getMetric(metric%3A%20%22bitmex_perpetual_funding_rate%22)%20%7B%0A%20%20%20%20metadata%20%7B%0A%20%20%20%20%20%20availableSlugs%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A>)

---

### SanAPI

Available under the `bitmex_perpetual_funding_rate` name.

```graphql-explorer
{
  getMetric(metric: "bitmex_perpetual_funding_rate") {
    timeseriesDataJson(
      slug: "bitcoin"
      from: "2020-04-01T00:00:00Z"
      to: "2020-04-07T00:00:00Z"
      interval: "8h"
    )
  }
}
```

## Full list of metrics

The full list of Bitmex Perpetual Funding Rate metrics is:

<Details>

<Summary>Open Metrics List</Summary>

- bitmex_perpetual_funding_rate
- bitmex_perpetual_funding_rate_change_1d
- bitmex_perpetual_funding_rate_change_30d
- bitmex_perpetual_funding_rate_change_7d

</Details>