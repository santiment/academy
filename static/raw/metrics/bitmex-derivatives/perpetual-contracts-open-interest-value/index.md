---
title: BitMEX Perpetual Contracts Open Interest/Value
author: Anatoliy
date: 2020-06-03
description: The total number of BitMEX perpetual contracts in existence.
---

## Description

Open Interest shows the amount of open perpetual contracts currently on Bitmex's Project Ticker / USD trading
 pairs. When open
 interest reaches unusually high numbers, it can precede increased volatility in the coin's price.  

Open Value shows the value of the corresponding open interest in Satoshis (XBT/BTC).

More details on BitMEX [web-site](https://www.bitmex.com/app/contract/XBTUSD)  

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
assets](<https://api.santiment.net/graphiql?variables=&query=%7B%0A%20%20getMetric(metric%3A%20%22bitmex_perpetual_open_interest%22)%20%7B%0A%20%20%20%20metadata%20%7B%0A%20%20%20%20%20%20availableSlugs%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A>)

---

### SanAPI - Open Interest

Available under the `bitmex_perpetual_open_interest` name.

```graphql-explorer
{
  getMetric(metric: "bitmex_perpetual_open_interest") {
    timeseriesDataJson(
      slug: "bitcoin"
      from: "2020-04-01T00:00:00Z"
      to: "2020-04-07T00:00:00Z"
      interval: "1d"
    )
  }
}
```


---

### SanAPI - Open Value

Available under the `bitmex_perpetual_open_value` name.

```graphql-explorer
{
  getMetric(metric: "bitmex_perpetual_open_value") {
    timeseriesDataJson(
      slug: "bitcoin"
      from: "2020-04-01T00:00:00Z"
      to: "2020-04-07T00:00:00Z"
      interval: "1d"
    )
  }
}
```
