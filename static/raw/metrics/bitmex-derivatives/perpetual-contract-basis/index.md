---
title: BitMEX Perpetual Contract Basis
author: Anatoliy
date: 2020-06-03
description: Contract price - index price.
---

## Description
 
Shows the difference between BitMEX [perpetual contract's price](/metrics/bitmex-derivatives/perpetual-contract-price) of
 Project Ticker and BitMEX [index (spot) price](/metrics/bitmex-derivatives/price-index) for Project Ticker.  

Available as
  absolute value or ratio. In the last case it is computed using the formula: `(contract's price - index
   price)/index price`

---

## Access

[Restricted Access](/metrics/details/access#restricted-access).

---

## Measuring Unit

Dollars/Ratio

---

## Data Type

[Timeseries Data](/metrics/details/data-type#timeseries-data)

---

## Frequency

[Five-Minute Intervals](/metrics/details/frequency#five-minute-frequency)

---

## Latency

[Price Latency](/metrics/details/latency#price-latency)

---

## Available Assets

Available for [these
assets](<https://api.santiment.net/graphiql?variables=&query=%7B%0A%20%20getMetric(metric%3A%20%22bitmex_perpetual_basis%22)%20%7B%0A%20%20%20%20metadata%20%7B%0A%20%20%20%20%20%20availableSlugs%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A>)

---

### SanAPI

Basis absolute value is available under the `bitmex_perpetual_basis` name.

```graphql-explorer
{
  getMetric(metric: "bitmex_perpetual_basis") {
    timeseriesDataJson(
      slug: "bitcoin"
      from: "2020-04-01T00:00:00Z"
      to: "2020-04-07T00:00:00Z"
      interval: "1d"
    )
  }
}
```

And basis ratio - `bitmex_perpetual_basis_ratio`.

```graphql-explorer
{
  getMetric(metric: "bitmex_perpetual_basis_ratio") {
    timeseriesDataJson(
      slug: "bitcoin"
      from: "2020-04-01T00:00:00Z"
      to: "2020-04-07T00:00:00Z"
      interval: "1d"
    )
  }
}
```
