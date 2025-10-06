---
title: Deribit Contract Funding Rate
author: Lyudmil
date: 2022-02-08
description: Amount of coin/tokens moved on-chain.
---

## Description

The Deribit perpetual contract features a continuous measurement of the difference between the mark price of the contract and the Deribit BTC Index. The percentage difference between these two price levels is the basis for the 8-hourly funding rate that is applied to all outstanding perpetual contracts.

More details on Deribit [web-site](https://www.deribit.com/kb/futures).

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
assets](<https://api.santiment.net/graphiql?variables=&query=%7B%0A%20%20getMetric(metric%3A%20%22deribit_perpetual_funding_rate%22)%20%7B%0A%20%20%20%20metadata%20%7B%0A%20%20%20%20%20%20availableSlugs%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A>)

---

### SanAPI

Available under the `deribit_perpetual_funding_rate` name.

```graphql-explorer
{
  getMetric(metric: "deribit_perpetual_funding_rate") {
    timeseriesDataJson(
      slug: "bitcoin"
      from: "2021-04-01T00:00:00Z"
      to: "2021-04-07T00:00:00Z"
      interval: "1h"
    )
  }
}
```
