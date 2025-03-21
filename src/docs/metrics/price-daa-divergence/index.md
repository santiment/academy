---
title: Price and Daily Active Addresses Divergence
author: Santiment Team
date: 2025-03-19
---

## Description

The DAA Divergence metric measures the difference between the number of daily active 
addresses (DAA) and an asset's price movement. It helps identify whether network activity 
is supporting the price trend or if there's a mismatch that could signal a potential 
reversal. A positive divergence (higher DAA, lower price) might indicate undervaluation, 
while a negative divergence (lower DAA, higher price) could suggest overvaluation. 
For more info, read the [A Primer on On-chain Trading Strategies](/education-and-use-cases/price-to-daily-addresses-divergence---primer-on-on-chain-trading-strategies) article.

- `price_daa_divergence` - Divergence between an asset's price movement and daily active addresses
- `adjusted_price_daa_divergence` - Smoother version of `price_daa_divergence`, 
averaging data over the last 365 days

---

## Access

[Restricted Access](/metrics/details/access#restricted-access)

---

## Measuring Unit

Divergence factor

---

## Data Type

[Timeseries Data](/metrics/details/data-type#timeseries-data)

---

## Frequency

[Daily Intervals](/metrics/details/frequency#daily-frequency)

---

## Latency

[On-Chain Latency](/metrics/details/latency#on-chain-latency)

---

## Available Assets

Available for [these
assets](<https://api.santiment.net/graphiql?variables=&query=%7B%0A%20%20getMetric(metric%3A%20%22price_daa_divergence%22)%20%7B%0A%20%20%20%20metadata%20%7B%0A%20%20%20%20%20%20availableSlugs%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A>)

---

### SanAPI

Available under name: `price_daa_divergence` and `adjusted_price_daa_divergence`

```graphql
{
  getMetric(metric: "price_daa_divergence") {
    timeseriesData(
      slug: "bitcoin"
      from: "utc_now-90d"
      to: "utc_now"
      interval: "1d"
    ) {
      datetime
      value
    }
  }
}
```

[Run in Explorer](<https://api.santiment.net/graphiql?query=%7B%0A%20%20getMetric(metric%3A%20%22price_daa_divergence%22)%20%7B%0A%20%20%20%20timeseriesData(%0A%20%20%20%20%20%20slug%3A%20%22bitcoin%22%0A%20%20%20%20%20%20from%3A%20%22utc_now-90d%22%0A%20%20%20%20%20%20to%3A%20%22utc_now%22%0A%20%20%20%20%20%20interval%3A%20%221d%22%0A%20%20%20%20)%20%7B%0A%20%20%20%20%20%20datetime%0A%20%20%20%20%20%20value%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A>)

```graphql
{
  getMetric(metric: "adjusted_price_daa_divergence") {
    timeseriesData(
      slug: "bitcoin"
      from: "utc_now-90d"
      to: "utc_now"
      interval: "1d"
    ) {
      datetime
      value
    }
  }
}
```

[Run in Explorer](<https://api.santiment.net/graphiql?query=%7B%0A%20%20getMetric(metric%3A%20%22adjusted_price_daa_divergence%22)%20%7B%0A%20%20%20%20timeseriesData(%0A%20%20%20%20%20%20slug%3A%20%22bitcoin%22%0A%20%20%20%20%20%20from%3A%20%22utc_now-90d%22%0A%20%20%20%20%20%20to%3A%20%22utc_now%22%0A%20%20%20%20%20%20interval%3A%20%221d%22%0A%20%20%20%20)%20%7B%0A%20%20%20%20%20%20datetime%0A%20%20%20%20%20%20value%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A>)
