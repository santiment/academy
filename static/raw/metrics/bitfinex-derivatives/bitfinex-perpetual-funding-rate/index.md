---
title: Bitfinex Contract Funding Rate
author: Lyudmil
date: 2022-02-08
description: Amount of coin/tokens moved on-chain.
---

## Description

Details about Bitfinex's funding rates [web-site](https://support.bitfinex.com/hc/en-us/articles/360024039494-How-are-the-Funding-interest-earnings-and-fees-calculated-at-Bitfinex).

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

## Frequency

[Hourly Intervals](/metrics/details/frequency#hourly-frequency)

---

## Latency

[Funding Rates Latency](/metrics/details/latency#funding-rates-latency)

---

## Available Assets

Available for [these
assets](<https://api.santiment.net/graphiql?variables=&query=%7B%0A%20%20getMetric(metric%3A%20%22bitfinex_perpetual_funding_rate%22)%20%7B%0A%20%20%20%20metadata%20%7B%0A%20%20%20%20%20%20availableSlugs%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A>)

---

### SanAPI

Available under the `bitfinex_perpetual_funding_rate` name.

```graphql-explorer
{
  getMetric(metric: "bitfinex_perpetual_funding_rate") {
    timeseriesDataJson(
      slug: "bitcoin"
      from: "2021-04-01T00:00:00Z"
      to: "2021-04-07T00:00:00Z"
      interval: "1h"
    )
  }
}
```
