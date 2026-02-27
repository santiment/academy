---
title: BitMEX Price Index
author: Anatoliy
date: 2020-06-03
description: Average asset price calculated using a number of data sources.
---

## Description

BitMEX indices are composite, meaning that they are calculated using a number of data sources. BitMEX currently uses 9 constituents: Binance, Bitstamp, Bittrex, Coinbase, Gemini, Huobi, Itbit, Kraken, Poloniex. Aiming to be representative of the underlying asset’s market consensus price, each BitMEX index is calculated as a weighted average of the Last Price for each constituent exchange.  

More details on BitMEX [website](https://www.bitmex.com/app/indices).

---

## Access

[Restricted Access](/metrics/details/access#restricted-access).

---

## Measuring Unit

Dollars

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
assets](<https://api.santiment.net/graphiql?variables=&query=%7B%0A%20%20getMetric(metric%3A%20%22bitmex_composite_price_index%22)%20%7B%0A%20%20%20%20metadata%20%7B%0A%20%20%20%20%20%20availableSlugs%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A>)

---

### SanAPI

Available under the `bitmex_composite_price_index` name.

```graphql-explorer
{
  getMetric(metric: "bitmex_composite_price_index") {
    timeseriesDataJson(
      slug: "bitcoin"
      from: "2020-04-01T00:00:00Z"
      to: "2020-04-07T00:00:00Z"
      interval: "1d"
    )
  }
}
```
