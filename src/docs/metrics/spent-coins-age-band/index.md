---
title: Spent Coins Age Band
author: Ante
date: 2022-06-01
description: The distribution by age of coins spent on a given day
---

## Definition

Spent Coins Age Band is a set of metrics that represent the distribution of coins
spent on a given day by the age of coins. In addition to absolute values, there
is a percentage type of this metric, which shows the relative share of coins in a
given interval in relation to the total amount of coins spent on a given day.
Assigning age to coins/tokens is done according to the [coin-age model](/metrics/details/stack-coin-age-model).

---

## Access

[Restricted Access](/metrics/details/access#restricted-access).

---

## Timebound

[Interval Timebound Metrics](/metrics/details/interval_timebound) available

---

## Measuring Unit

Token/Coin amount and % between 0 and 100

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
assets](<https://api.santiment.net/graphiql?variables=&query=%7B%0A%20%20getMetric(metric%3A%20%22spent_coins_age_band_0d_to_1d%22)%20%7B%0A%20%20%20%20metadata%20%7B%0A%20%20%20%20%20%20availableSlugs%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A>)

---

## SanAPI

Available under `spent_coins_age_band_<interval>` and `percent_of_spent_coins_age_band_<interval>` names.

```graphql-explorer
{
  getMetric(metric: "spent_coins_age_band_0d_to_1d") {
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
<Summary>Spent Coins Age Band Metrics</Summary>
- spent_coins_age_band_0d_to_1d
- spent_coins_age_band_1d_to_7d
- spent_coins_age_band_7d_to_30d
- spent_coins_age_band_30d_to_60d
- spent_coins_age_band_60d_to_90d
- spent_coins_age_band_90d_to_180d
- spent_coins_age_band_180d_to_365d
- spent_coins_age_band_365d_to_2y
- spent_coins_age_band_2y_to_3y
- spent_coins_age_band_3y_to_5y
- spent_coins_age_band_5y_to_7y
- spent_coins_age_band_7y_to_10y
- spent_coins_age_band_10y_to_inf
</Details>

<Details>
<Summary>Percent of Spent Coins Age Band Metrics</Summary>
- percent_of_spent_coins_age_band_0d_to_1d
- percent_of_spent_coins_age_band_1d_to_7d
- percent_of_spent_coins_age_band_7d_to_30d
- percent_of_spent_coins_age_band_30d_to_60d
- percent_of_spent_coins_age_band_60d_to_90d
- percent_of_spent_coins_age_band_90d_to_180d
- percent_of_spent_coins_age_band_180d_to_365d
- percent_of_spent_coins_age_band_365d_to_2y
- percent_of_spent_coins_age_band_2y_to_3y
- percent_of_spent_coins_age_band_3y_to_5y
- percent_of_spent_coins_age_band_5y_to_7y
- percent_of_spent_coins_age_band_7y_to_10y
- percent_of_spent_coins_age_band_10y_to_inf
</Details>
