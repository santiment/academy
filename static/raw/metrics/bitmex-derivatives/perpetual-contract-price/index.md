---
title: BitMEX Perpetual Contract Price
author: Anatoliy
date: 2020-06-03
description: BitMEX Perpetual Contract Price
---

## Description
The BitMEX Perpetual Contract Price metric refers to the current trading price of perpetual 
contracts offered on the BitMEX cryptocurrency exchange. Perpetual contracts are derivative 
financial instruments that closely track the underlying asset's price without an expiry date, 
allowing traders to speculate on price movements without actually owning the asset. The BitMEX 
Perpetual Contract Price provides insight into market sentiment and liquidity for the corresponding 
cryptocurrency pair on [BitMEX's](https://www.bitmex.com/) trading platform.

BitMEX Perpetual Contract Price metric:
* `bitmex_perpetual_price` - BitMEX Perpetual Contract Price

---

## Access

[Restricted Access](/metrics/details/access#restricted-access).

---

## Measuring Unit

Amount in USD

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
assets](<https://api.santiment.net/graphiql?variables=&query=%7B%0A%20%20getMetric(metric%3A%20%22bitmex_perpetual_price%22)%20%7B%0A%20%20%20%20metadata%20%7B%0A%20%20%20%20%20%20availableSlugs%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A>)

---

### SanAPI

Available under the `bitmex_perpetual_price` name.

```graphql-explorer
{
  getMetric(metric: "bitmex_perpetual_price") {
    timeseriesDataJson(
      slug: "bitcoin"
      from: "2020-04-01T00:00:00Z"
      to: "2020-04-07T00:00:00Z"
      interval: "1d"
    )
  }
}
```
