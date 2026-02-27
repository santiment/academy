---
title: Realized Market Capitalization Hodl Waves
author: Ante
date: 2022-06-01
description: Percent of interval Realized Marketcap in total Realized Marketcap
---

## Definition

Realized Market Capitalization Hodl Waves is an alternative to Circulation Hodl Waves.
This metric represents the percentage of realized cap for a given timebound
interval in total realized cap value.
For example `realized_cap_hodl_waves_1d_to_7d` is computed by dividing the realized
cap of coins that are 1 to 7 days old with total realized market cap:
`(realized_cap_usd_7d - realized_cap_usd_1d) / realized_cap_usd`
Assigning age to coins/tokens is done according to the [coin-age model](/metrics/details/stack-coin-age-model).

---

## Access

[Restricted Access](/metrics/details/access#restricted-access).

---

## Timebound

[Interval Timebound Metrics](/metrics/details/interval_timebound) available

---

## Measuring Unit

Number - % between 0 and 100

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
assets](<https://api.santiment.net/graphiql?variables=&query=%7B%0A%20%20getMetric(metric%3A%20%22realized_cap_hodl_waves_1d_to_7d%22)%20%7B%0A%20%20%20%20metadata%20%7B%0A%20%20%20%20%20%20availableSlugs%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A>)

---

## SanAPI

Available under `realized_cap_hodl_waves_<interval>` names.

```graphql-explorer
{
  getMetric(metric: "realized_cap_hodl_waves_1d_to_7d") {
    timeseriesDataJson(
      slug: "santiment"
      from: "2022-05-25T00:00:00Z"
      to: "2022-06-01T00:00:00Z"
      interval: "1d"
    )
  }
}
```

## Full list of metrics

<Details>
<Summary>Realized Market Capitalization Hodl Waves Metrics</Summary>
- realized_cap_hodl_waves_0d_to_1d
- realized_cap_hodl_waves_1d_to_7d
- realized_cap_hodl_waves_7d_to_30d
- realized_cap_hodl_waves_30d_to_60d
- realized_cap_hodl_waves_60d_to_90d
- realized_cap_hodl_waves_90d_to_180d
- realized_cap_hodl_waves_180d_to_365d
- realized_cap_hodl_waves_365d_to_2y
- realized_cap_hodl_waves_2y_to_3y
- realized_cap_hodl_waves_3y_to_5y
- realized_cap_hodl_waves_5y_to_10y
- realized_cap_hodl_waves_10y_to_20y
</Details>
