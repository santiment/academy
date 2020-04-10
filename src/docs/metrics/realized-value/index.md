---
title: Realized Value
author: Ivan
date: 2020-04-09
---

## Definition

Realized Value is an alternative to the Market Cap (Market Value). Instead of
multiplying all coins/tokens by the last price, every coin/token is assigned the
price at which it was last moved. Assigning age to coin/tokens is done
according to the [coin-age model](/metrics/details/stack-coin-age-model)

---

## Access

Realized Value metrics are with [restricted access](/metrics/details/access#restricted-access).

---

## Timebound

There are multiple [timebound metrics](/metrics/details/timebound) available

---

## Measuring Unit

Dollars

---

## Frequency

Realized Value metrics are available at [daily
intervals](/metrics/details/frequency#daily-frequency)

---

## Latency

Realized Value metrics have [on-chain latency](/metrics/details/latency#on-chain-latency)

---

## Available assets

This metrics are computed for [these
assets](<https://api.santiment.net/graphiql?variables=&query=%7B%0A%20%20getMetric(metric%3A%20%22realized_value_usd%22)%20%7B%0A%20%20%20%20metadata%20%7B%0A%20%20%20%20%20%20availableSlugs%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A>)

> Note: `realized_value_usd` metric and all timebound realized value metrics are
> available for the same set of assets.

---

### SanAPI

The metrics are available under the `realized_value_usd` and `realized_value_usd_<timebound>` names.

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
