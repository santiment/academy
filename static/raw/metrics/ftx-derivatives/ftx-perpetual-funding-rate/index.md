---
title: FTX Contract Funding Rate
author: Lyudmil
date: 2022-02-08
description: Amount of coin/tokens moved on-chain.
---

## Description

If the perpetual is trading at a premium to the underlying index, long positions pay funding to the short positions. If the perpetual is trading at a discount to the underlying index, short positions pay funding to long positions. The funding rate to be paid/received is determined by the following formula:

``position size * TWAP of ((future mark price - index) / index) / 24``

More details on FTX [web-site](https://help.ftx.com/hc/en-us/articles/360027946571-Funding).

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
assets](<https://api.santiment.net/graphiql?variables=&query=%7B%0A%20%20getMetric(metric%3A%20%22ftx_perpetual_funding_rate%22)%20%7B%0A%20%20%20%20metadata%20%7B%0A%20%20%20%20%20%20availableSlugs%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A>)

---

### SanAPI

Available under the `ftx_perpetual_funding_rate` name.

```graphql-explorer
{
  getMetric(metric: "ftx_perpetual_funding_rate") {
    timeseriesDataJson(
      slug: "bitcoin"
      from: "2021-04-01T00:00:00Z"
      to: "2021-04-07T00:00:00Z"
      interval: "1h"
    )
  }
}
```
