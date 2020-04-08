---
title: Market Value To Realized Value Metric
author: Irina Pranovich
date: 2019-11-04
# References
#
# Source code for metric computation:
# REF clickhouse-tables/daily_metrics/specs.d/metrics/mvrv_metrics
# REF clickhouse-tables/daily_metrics/specs.d/metrics/realized_price_metrics
#
---

## Definition

MVRV shows the average profit/loss of all the coins currently in circulation
according to the current price.

To understand the MVRV metrics, we have to establish two term. 'MV' as in
'market value' simply describes the market cap, which is well known when looking
at crypto assets. The second part is the 'RV' or 'realized value'.

If we compare the current **market capitalization (market value or MV)** to the
current [Realized Value](/metrics/realized-value), we can get an estimate how
overvalued or undervalued the asset is. The definition will be:

$$
MVRV = \frac{Market Value}{Realized Value}
$$

If the MVRV is 2 this means that if all holders sell their coins/tokens at the
current price they will generate a x2 profit on average. So in this sense MVRV is
showing the ratio between the current price and the average price of which every
coin/token has been acquired. The more this ratio increases, the more people will be
willing to sell and take profits.

If the MVRV is between 0 and 1, then the market is “undervalued” on average, meaning
most people will be realizing losses if they all sell their holdings.

Keep in mind that this is in the ideal case and does not account for the
addresses with lost private keys. The way to adjust for this is to look at the
historical values for the MVRV ratio. As the ratio is approaching historical
maximums or minimums, then the possibility of a highly overvalued or undervalued
market is much higher.

Another way to deal with lost private keys and graveyard addresses is to compute
the MVRV ratio only on the subset of tokens that have been active at least once
in the several years.

The metric depends on:

- daily closing price in usd
- mean realized price in usd

## Measuring Unit

Ratio

## Frequency

MVRV metrics are available at [daily
intervals](/metrics/details/frequency#daily-frequency)

---

## Latency

MVRV metrics have [on-chain latency](/metrics/details/latency#on-chain-latency)

---

## Available assets

MVRV metrics are computed for [these
assets](<https://api.santiment.net/graphiql?variables=&query=%7B%0A%20%20getMetric(metric%3A%20%22mvrv_usd%22)%20%7B%0A%20%20%20%20metadata%20%7B%0A%20%20%20%20%20%20availableSlugs%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A>)

---

## SanAPI

Example of query for **mvrv_usd**:

```graphql
{
  getMetric(metric: "mvrv_usd") {
    timeseriesData(
      slug: "santiment"
      from: "2019-01-01T00:00:00Z"
      to: "2019-09-01T00:00:00Z"
      interval: "7d"
    ) {
      datetime
      value
    }
  }
}
```

[Run in
explorer](<https://api.santiment.net/graphiql?query=%7B%0A%09getMetric(metric%3A%22mvrv_usd%22)%20%7B%0A%20%20%20%20timeseriesData(slug%3A%22santiment%22%2C%20from%3A%222019-01-01T00%3A00%3A00Z%22%2C%20to%3A%222019-09-01T00%3A00%3A00Z%22%2C%20interval%3A%227d%22)%20%7B%0A%20%20%20%20%20%20datetime%0A%20%20%20%20%20%20value%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A>)

Example of query for **time bound MVRV**:

```graphql
{
  getMetric(metric: "mvrv_usd_7d") {
    timeseriesData(
      slug: "santiment"
      from: "2019-01-01T00:00:00Z"
      to: "2019-09-01T00:00:00Z"
      interval: "7d"
    ) {
      datetime
      value
    }
  }
}
```

[Run in
explorer](<https://api.santiment.net/graphiql?query=%7B%0A%09getMetric(metric%3A%22mvrv_usd_7d%22)%20%7B%0A%20%20%20%20timeseriesData(slug%3A%22santiment%22%2C%20from%3A%222019-01-01T00%3A00%3A00Z%22%2C%20to%3A%222019-09-01T00%3A00%3A00Z%22%2C%20interval%3A%227d%22)%20%7B%0A%20%20%20%20%20%20datetime%0A%20%20%20%20%20%20value%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A>)

Example of query for **mvrv long-short difference**:

```graphql
{
  getMetric(metric: "mvrv_long_short_diff_usd") {
    timeseriesData(
      slug: "santiment"
      from: "2019-01-01T00:00:00Z"
      to: "2019-09-01T00:00:00Z"
      interval: "7d"
    ) {
      datetime
      value
    }
  }
}
```

**[Run in
explorer](<https://api.santiment.net/graphiql?query=%7B%0A%09getMetric(metric%3A%22mvrv_long_short_diff_usd%22)%20%7B%0A%20%20%20%20timeseriesData(slug%3A%22santiment%22%2C%20from%3A%222019-01-01T00%3A00%3A00Z%22%2C%20to%3A%222019-09-01T00%3A00%3A00Z%22%2C%20interval%3A%227d%22)%20%7B%0A%20%20%20%20%20%20datetime%0A%20%20%20%20%20%20value%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A>)**
