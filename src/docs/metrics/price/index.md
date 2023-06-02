---
title: Price Metrics
author: Santiment Team
date: 2023-06-01
description: Price in USD, BTC and USDT
---

## Definition

The following metrics are provided:

- Price in USD
- Price in USDT
- Price in BTC
- Open-High-Close-Low Price in USD

---

## Access

[Free Access](/metrics/details/access#free-access)

---

## Measuring Unit

Amount in dollars/usdt/bitcoins

---

## Data Type

[Timeseries Data](/metrics/details/data-type#timeseries-data)

---

## Change Metrics

[Change Metrics](/metrics/details/change_metrics)

---

## Frequency

[Five-Minute Intervals](/metrics/details/frequency#five-minute-frequency)

---

## Latency

[Price Latency](/metrics/details/latency#price-latency)

---

## Available Assets

Available assets for [price_usd](https://api.santiment.net/graphiql?query=%7B%0A++getMetric%28metric%3A+%22price_usd%22%29%7B%0A++++metadata%7B%0A++++++availableSlugs%0A++++%7D%0A++%7D%0A%7D)


Available assets for [price_btc](https://api.santiment.net/graphiql?query=%7B%0A++getMetric%28metric%3A+%22price_btc%22%29%7B%0A++++metadata%7B%0A++++++availableSlugs%0A++++%7D%0A++%7D%0A%7D)


Available assets for [price_usdt](https://api.santiment.net/graphiql?query=%7B%0A++getMetric%28metric%3A+%22price_usdt%22%29%7B%0A++++metadata%7B%0A++++++availableSlugs%0A++++%7D%0A++%7D%0A%7D)

---

## SanAPI

### Price USD

```graphql
{
  getMetric(metric: "price_usd") {
    timeseriesData(
      slug: "ethereum"
      from: "2020-04-01T00:00:00Z"
      to: "2020-04-07T00:00:00Z"
      interval: "1d"
    ) {
      datetime
      value
    }
  }
}
```

[**Run in Explorer**](https://api.santiment.net/graphiql?query=%7B%0A++getMetric%28metric%3A+%22price_usd%22%29+%7B%0A++++timeseriesData%28%0A++++++slug%3A+%22ethereum%22%0A++++++from%3A+%222020-04-01T00%3A00%3A00Z%22%0A++++++to%3A+%222020-04-07T00%3A00%3A00Z%22%0A++++++interval%3A+%221d%22%0A++++%29+%7B%0A++++++datetime%0A++++++value%0A++++%7D%0A++%7D%0A%7D)

### Price BTC

```graphql
{
  getMetric(metric: "price_btc") {
    timeseriesData(
      slug: "ethereum"
      from: "2020-04-01T00:00:00Z"
      to: "2020-04-07T00:00:00Z"
      interval: "1d"
    ) {
      datetime
      value
    }
  }
}
```

[**Run in Explorer**](https://api.santiment.net/graphiql?query=%7B%0A++getMetric%28metric%3A+%22price_btc%22%29+%7B%0A++++timeseriesData%28%0A++++++slug%3A+%22ethereum%22%0A++++++from%3A+%222020-04-01T00%3A00%3A00Z%22%0A++++++to%3A+%222020-04-07T00%3A00%3A00Z%22%0A++++++interval%3A+%221d%22%0A++++%29+%7B%0A++++++datetime%0A++++++value%0A++++%7D%0A++%7D%0A%7D)

### Price USDT

```graphql
{
  getMetric(metric: "price_usdt") {
    timeseriesData(
      slug: "ethereum"
      from: "2020-04-01T00:00:00Z"
      to: "2020-04-07T00:00:00Z"
      interval: "1d"
    ) {
      datetime
      value
    }
  }
}
```

[**Run in Explorer**](https://api.santiment.net/graphiql?query=%7B%0A++getMetric%28metric%3A+%22price_usdt%22%29+%7B%0A++++timeseriesData%28%0A++++++slug%3A+%22ethereum%22%0A++++++from%3A+%222020-04-01T00%3A00%3A00Z%22%0A++++++to%3A+%222020-04-07T00%3A00%3A00Z%22%0A++++++interval%3A+%221d%22%0A++++%29+%7B%0A++++++datetime%0A++++++value%0A++++%7D%0A++%7D%0A%7D)


### OHLC

```graphql
{
  getMetric(metric: "price_usd") {
    timeseriesData(
      slug: "ethereum"
      from: "2020-04-01T00:00:00Z"
      to: "2020-04-07T00:00:00Z"
      interval: "1d"
      aggregation: OHLC) {
        datetime
        valueOhlc {
          open
          high
          close
          low
        }
    }
  }
}
```

[**Run in Explorer**](https://api.santiment.net/graphiql?query=%7B%0A++getMetric%28metric%3A+%22price_usd%22%29+%7B%0A++++timeseriesData%28%0A++++++slug%3A+%22ethereum%22%0A++++++from%3A+%222020-04-01T00%3A00%3A00Z%22%0A++++++to%3A+%222020-04-07T00%3A00%3A00Z%22%0A++++++interval%3A+%221d%22%0A++++++aggregation%3A+OHLC%29+%7B%0A++++++++datetime%0A++++++++valueOhlc+%7B%0A++++++++++open%0A++++++++++high%0A++++++++++close%0A++++++++++low%0A++++++++%7D%0A++++%7D%0A++%7D%0A%7D%0A)