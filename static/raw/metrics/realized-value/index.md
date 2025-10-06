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

Realized Value metric is also available for different [time bounds](/metrics/details/timebound), which 
computes realized value for tokens moved at least once no longer than a specific number of days or years ago.

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

```graphql-explorer
{
  getMetric(metric: "realized_value_usd") {
    timeseriesDataJson(
      slug: "santiment"
      from: "2020-01-01T00:00:00Z"
      to: "2020-01-07T00:00:00Z"
      interval: "1d"
    )
  }
}
```

## Full list of metrics

<Details>
<Summary>Realized value metrics</Summary>
- realized_value_usd
- realized_value_usd_1d
- realized_value_usd_7d
- realized_value_usd_30d
- realized_value_usd_60d
- realized_value_usd_90d
- realized_value_usd_180d
- realized_value_usd_365d
- realized_value_usd_2y
- realized_value_usd_3y
- realized_value_usd_5y
- realized_value_usd_10y
</Details>