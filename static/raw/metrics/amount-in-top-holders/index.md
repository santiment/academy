---
title: Amount in Top Holders
author: Ivan
date: 2020-06-29
description: Number of unique coins/tokens held by top holders
---

## Definition

Show the amount of coins/tokens help by the top holders. By default the top 10
holders are taken.

Metrics available:

- `amount_in_top_holders` - All holders are taken into account.
- `amount_in_exchange_top_holders` - Only holders that are known exchange addresses are taken into account.
- `amount_in_non_exchange_top_holders` - Only holders that are not exchange addresses are taken into account.

---

## Access

[Restricted Access](/metrics/details/access#restricted-access)

---

## Measuring Unit

Token/Coin amount

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

Available for:

- `amount_in_top_holders` - [these assets](<https://api.santiment.net/graphiql?query=%7B%0A%20%20getMetric(metric%3A%20%22amount_in_top_holders%22)%20%7B%0A%20%20%20%20metadata%20%7B%0A%20%20%20%20%20%20availableSlugs%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A>)
- `amount_in_exchange_top_holders` - [these assets](<https://api.santiment.net/graphiql?query=%7B%0A%20%20getMetric(metric%3A%20%22amount_in_exchange_top_holders%22)%20%7B%0A%20%20%20%20metadata%20%7B%0A%20%20%20%20%20%20availableSlugs%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A>)
- `amount_in_non_exchange_top_holders` - [these assets](<https://api.santiment.net/graphiql?query=%7B%0A%20%20getMetric(metric%3A%20%22amount_in_non_exchange_top_holders%22)%20%7B%0A%20%20%20%20metadata%20%7B%0A%20%20%20%20%20%20availableSlugs%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A>)

---

## SanAPI

The available metrics are:
- `amount_in_top_holders`
- `amount_in_exchange_top_holders`
- `amount_in_non_exchange_top_holders`

```graphql-explorer
{
  getMetric(metric: "amount_in_top_holders") {
    timeseriesDataJson(
      slug: "santiment"
      from: "2020-01-01T00:00:00Z"
      to: "2020-01-07T00:00:00Z"
      interval: "1d"
    )
  }
}
```

```graphql-explorer
{
  getMetric(metric: "amount_in_exchange_top_holders") {
    timeseriesDataJson(
      slug: "santiment"
      from: "2020-01-01T00:00:00Z"
      to: "2020-01-07T00:00:00Z"
      interval: "1d"
    )
  }
}
```

```graphql-explorer
{
  getMetric(metric: "amount_in_non_exchange_top_holders") {
    timeseriesDataJson(
      slug: "santiment"
      from: "2020-01-01T00:00:00Z"
      to: "2020-01-07T00:00:00Z"
      interval: "1d"
    )
  }
}
```
