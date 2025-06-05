---
title: Price Metrics
author: Santiment Team
date: 2023-06-01
description: Price in USD, BTC and USDT
---

## Definition

The following metrics are provided:

* `price_usd` - Price in USD, sourced from a 3rd party provider
* `price_usd_5m` - The same as `price_usd`, but the data points are aligned at 5 minute intervals and 
any gaps are filled with the last known value
* `price_btc` - Price in BTC
* `price_usdt` - Price in USDT
* Open-High-Close-Low Price in USD

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

- Available assets for [price_usd](https://api.santiment.net/graphiql?query=%7B%0A++getMetric%28metric%3A+%22price_usd%22%29%7B%0A++++metadata%7B%0A++++++availableSlugs%0A++++%7D%0A++%7D%0A%7D)
- Available assets for [price_usd_5m](https://api.santiment.net/graphiql?query=%7B%0A++getMetric%28metric%3A+%22price_usd_5m%22%29%7B%0A++++metadata%7B%0A++++++availableSlugs%0A++++%7D%0A++%7D%0A%7D)
- Available assets for [price_btc](https://api.santiment.net/graphiql?query=%7B%0A++getMetric%28metric%3A+%22price_btc%22%29%7B%0A++++metadata%7B%0A++++++availableSlugs%0A++++%7D%0A++%7D%0A%7D)
- Available assets for [price_usdt](https://api.santiment.net/graphiql?query=%7B%0A++getMetric%28metric%3A+%22price_usdt%22%29%7B%0A++++metadata%7B%0A++++++availableSlugs%0A++++%7D%0A++%7D%0A%7D)
- Available assets for [price_eth](https://api.santiment.net/graphiql?query=%7B%0A++getMetric%28metric%3A+%22price_eth%22%29%7B%0A++++metadata%7B%0A++++++availableSlugs%0A++++%7D%0A++%7D%0A%7D)
---

## SanAPI

### Price USD

```graphql-explorer
{
  getMetric(metric: "price_usd") {
    timeseriesDataJson(
      slug: "ethereum"
      from: "2020-04-01T00:00:00Z"
      to: "2020-04-07T00:00:00Z"
      interval: "1d"
    )
  }
}
```

### Average price in USD over five-minute intervals

```graphql-explorer
{
  getMetric(metric: "price_usd_5m") {
    timeseriesDataJson(
      slug: "ethereum"
      from: "2020-04-01T00:00:00Z"
      to: "2020-04-07T00:00:00Z"
      interval: "5m"
    )
  }
}
```

### Price BTC

```graphql-explorer
{
  getMetric(metric: "price_btc") {
    timeseriesDataJson(
      slug: "ethereum"
      from: "2020-04-01T00:00:00Z"
      to: "2020-04-07T00:00:00Z"
      interval: "1d"
    )
  }
}
```

### Price USDT

```graphql-explorer
{
  getMetric(metric: "price_usdt") {
    timeseriesDataJson(
      slug: "ethereum"
      from: "2020-04-01T00:00:00Z"
      to: "2020-04-07T00:00:00Z"
      interval: "1d"
    )
  }
}
```

### OHLC

```graphql-explorer
{
  getMetric(metric: "price_usd") {
    timeseriesDataJson(
      slug: "ethereum"
      from: "2020-04-01T00:00:00Z"
      to: "2020-04-07T00:00:00Z"
      interval: "1d"
      aggregation: OHLC)
  }
}
```

## Full list of metrics

The full list of Price metrics is:

<Details>

<Summary>Open Metrics List</Summary>

- price_btc
- price_eth
- price_usd
- price_usd_5m
- price_usdt

</Details>

<Details>

<Summary>Open Change Metrics List</Summary>

- price_btc_change_1d
- price_btc_change_30d
- price_btc_change_7d
- price_eth_change_1d
- price_eth_change_30d
- price_eth_change_7d
- price_usd_change_1d
- price_usd_change_1h
- price_usd_change_30d
- price_usd_change_7d

</Details>