---
title: dYdX Contract Funding Rate
author: Lyudmil
date: 2022-02-08
description: Amount of coin/tokens moved on-chain.
---

## Description

Funding is calculated algorithmically based on the Index Price and sampled Mid-Market Prices for the perpetual. When the rate is positive (perpetual trades at a premium relative to index), traders who are long will make payments to traders who are short. When the rate is negative (perpetual trades at a discount relative to index), this is reversed and shorts will pay longs. Traders make or receive payments in proportion to the size of their market position. These payments are exchanged solely between traders, and are neither paid nor received by the exchange.

More details on dYdX [web-site](https://help.dydx.exchange/en/articles/4797443-perpetual-funding-rate).

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
assets](<https://api.santiment.net/graphiql?variables=&query=%7B%0A%20%20getMetric(metric%3A%20%22dydx_perpetual_funding_rate%22)%20%7B%0A%20%20%20%20metadata%20%7B%0A%20%20%20%20%20%20availableSlugs%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A>)

---

### SanAPI

Available under the `dydx_perpetual_funding_rate` name.

```graphql-explorer
{
  getMetric(metric: "dydx_perpetual_funding_rate") {
    timeseriesDataJson(
      slug: "bitcoin"
      from: "2021-04-01T00:00:00Z"
      to: "2021-04-07T00:00:00Z"
      interval: "1h"
    )
  }
}
```
