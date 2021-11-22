---
title: Realized Value
author: Ivan
date: 2021-11-19
description: Marketcap alternative with acquisition price instead of current price
---

## Definition

Realized Value is an alternative to Market Capitalization (Market Value). Instead of
multiplying all coins/tokens by the last price, every coin/token is assigned the
price at which it was last moved. Assigning age to coin/tokens is done
according to the [coin-age model](/metrics/details/stack-coin-age-model).

---

## Access

[Restricted Access](/metrics/details/access#restricted-access).

---

## Timebound

[Timebound Metrics](/metrics/details/timebound) available

---

## Measuring Unit

Dollars

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
assets](<https://api.santiment.net/graphiql?variables=&query=%7B%0A%20%20getMetric(metric%3A%20%22realized_value_usd%22)%20%7B%0A%20%20%20%20metadata%20%7B%0A%20%20%20%20%20%20availableSlugs%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A>)

> Note: `realized_value_usd` metric and all timebound realized value metrics are
> available for the same set of assets.

---

## SanAPI

Available under the `realized_value_usd` and `realized_value_usd_<timebound>` names.

```graphql
{
  getMetric(metric: "realized_value_usd") {
    timeseriesData(
      slug: "santiment"
      from: "2020-01-01T00:00:00Z"
      to: "2020-01-07T00:00:00Z"
      interval: "1d"
    ) {
      datetime
      value
    }
  }
}
```

**[Run in Explorer](<https://api.santiment.net/graphiql?query=%7B%0A%20%20getMetric(metric%3A%20%22realized_value_usd%22)%20%7B%0A%20%20%20%20timeseriesData(%0A%20%20%20%20%20%20slug%3A%20%22santiment%22%0A%20%20%20%20%20%20from%3A%20%222020-01-01T00%3A00%3A00Z%22%0A%20%20%20%20%20%20to%3A%20%222020-01-07T00%3A00%3A00Z%22%0A%20%20%20%20%20%20interval%3A%20%221d%22%0A%20%20%20%20)%20%7B%0A%20%20%20%20%20%20datetime%0A%20%20%20%20%20%20value%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D>)**
