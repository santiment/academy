---
title: Huobi Contract Funding Rate
author: Lyudmil
date: 2021-08-25
description: Amount of coin/tokens moved on-chain.
---

## Description

Funding rate aims to ensure that the transaction price of Perpetual Swap closely follows the underlying reference price. The Funding rate for each period is calculated from the data of the previous period and has been determined at the beginning of the current period. It will not be changed during the period and will be applied in funding calculation at the end of the current period. Meanwhile, in this period, the estimated funding rate for the next period is calculated every minute, and the last calculated estimated funding rate will be used as the rate for the next period.

More details on Huobi [web-site](https://help.dydx.exchange/en/articles/4797443-perpetual-funding-rate).

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

[8-Hour Intervals](/metrics/details/frequency#hourly-frequency)

---

## Latency

[Funding Rates Latency](/metrics/details/latency#funding-rates-latency)

---

## Available Assets

Available for [these
assets](<https://api.santiment.net/graphiql?variables=&query=%7B%0A%20%20getMetric(metric%3A%20%22huobi_perpetual_funding_rate%22)%20%7B%0A%20%20%20%20metadata%20%7B%0A%20%20%20%20%20%20availableSlugs%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A>)

---

### SanAPI

Available under the `huobi_perpetual_funding_rate` name.

```graphql
{
  getMetric(metric: "huobi_perpetual_funding_rate") {
    timeseriesData(
      slug: "bitcoin"
      from: "2021-04-01T00:00:00Z"
      to: "2021-04-07T00:00:00Z"
      interval: "8h"
    ) {
      datetime
      value
    }
  }
}
```

[**Run in Explorer**](<https://api.santiment.net/graphiql?variables=&query=%7B%0A%20%20getMetric(metric%3A%20%22huobi_perpetual_funding_rate%22)%20%7B%0A%20%20%20%20timeseriesData(%0A%20%20%20%20%20%20slug%3A%20%22bitcoin%22%0A%20%20%20%20%20%20from%3A%20%222021-04-01T00%3A00%3A00Z%22%0A%20%20%20%20%20%20to%3A%20%222021-04-07T00%3A00%3A00Z%22%0A%20%20%20%20%20%20interval%3A%20%228h%22%0A%20%20%20%20)%20%7B%0A%20%20%20%20%20%20datetime%0A%20%20%20%20%20%20value%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D>)
