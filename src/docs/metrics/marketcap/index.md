---
title: Marketcap in USD
author: Ivan
date: 2024-03-29
description: Marketcap in USD
---

## Definition

The marketcap in USD is derived as the price of an asset in USD multiplied by the circulating supply of the same asset.

In addition to individual asset market caps, we provide the following aggregate market capitalization metrics commonly used in the crypto industry:
- TOTAL - The combined market capitalization of all tracked cryptocurrencies. This includes Bitcoin, Ethereum, stablecoins, and all other crypto assets.
- TOTAL2 - The total cryptocurrency market capitalization excluding Bitcoin (BTC). This metric is often used to analyze the altcoin market independently of Bitcoin’s market dominance.
- TOTAL3 - The total cryptocurrency market capitalization excluding Bitcoin (BTC) and Ethereum (ETH). This metric is used to evaluate the performance and size of the broader altcoin market beyond the two largest assets.
---

## Access

[Free Access](/metrics/details/access#free-access)

---

## Measuring Unit

USD

---

## Data Type

[Timeseries Data](/metrics/details/data-type#timeseries-data)

---

## Change Metrics

[Change Metrics](/metrics/details/change_metrics)

---

## Frequency

Individual coin marketcaps
[Five-Minute Intervals](/metrics/details/frequency#five-minute-frequency)

Total combined marketcaps
[Daily intervals:](/metrics/details/frequency#daily-frequency)

---

## Latency

[Price Latency](/metrics/details/latency#price-latency)

---

## Available Assets

Available assets for [marketcap_usd](https://api.santiment.net/graphiql?query=%7B%0A++getMetric%28metric%3A+%22marketcap_usd%22%29%7B%0A++++metadata%7B%0A++++++availableSlugs%0A++++%7D%0A++%7D%0A%7D)

Available assets for [total_market_marketcap_usd total_market_2_marketcap_usd total_market_3_marketcap_usd](https://api.santiment.net/graphiql?query=%7B%0A%20%20getMetric(metric%3A%20%22total_market_marketcap_usd%22)%7B%0A%20%20%20%20metadata%7B%0A%20%20%20%20%20%20availableSlugs%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D)
---

## SanAPI

### Marketcap USD

```graphql-explorer
{
  getMetric(metric: "marketcap_usd") {
    timeseriesDataJson(
      slug: "ethereum"
      from: "2020-04-01T00:00:00Z"
      to: "2020-04-07T00:00:00Z"
      interval: "1d"
    )
  }
}
```

```graphql-explorer
{
  getMetric(metric: "total_market_marketcap_usd") {
    timeseriesDataJson(
      slug: "total_market"
      from: "2020-04-01T00:00:00Z"
      to: "2020-04-07T00:00:00Z"
      interval: "1d"
    )
  }
}
```

```graphql-explorer
{
  getMetric(metric: "total_market_2_marketcap_usd") {
    timeseriesDataJson(
      slug: "total_market"
      from: "2020-04-01T00:00:00Z"
      to: "2020-04-07T00:00:00Z"
      interval: "1d"
    )
  }
}
```

```graphql-explorer
{
  getMetric(metric: "total_market_3_marketcap_usd") {
    timeseriesDataJson(
      slug: "total_market"
      from: "2020-04-01T00:00:00Z"
      to: "2020-04-07T00:00:00Z"
      interval: "1d"
    )
  }
}
```

## Full list of metrics

The full list of Marketcap in USD metrics is:

<Details>

<Summary>Open Metrics List</Summary>

- marketcap_usd
- marketcap_usd_change_1d
- marketcap_usd_change_30d
- marketcap_usd_change_7d
- total_market_marketcap_usd
- total_market_2_marketcap_usd
- total_market_3_marketcap_usd

</Details>
