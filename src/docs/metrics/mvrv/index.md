---
title: MVRV - Market Value To Realized Value
author: Santiment Team
date: 2025-10-28
description: MVRV (Market Value to Realized Value) ratio shows the average profit or loss of all the coins currently in circulation according to the current price.
---

<iframe width="560" height="315" src="https://www.youtube.com/embed/ohWh1uclDo0?si=VG59jWQmcoyIymqE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## Definition

MVRV (Market Value to Realized Value) ratio is an asset's market capitalization divided by realized capitalization, where realized capitalization is every token multiplied by its acquisition price.

## MVRV Ratio Overview

MVRV shows the ratio between the current price and the average price of every token acquired. An increase in the ratio shows us how much unrealized profit the market is sitting on. As the ratio increases, more market participants become willing sellers. The value of MVRV gives an idea about the average profit of holders across different durations.

## How MVRV Measured

The MVRV Ratio is used as an on-chain indicator for the purpose of studying aggregate investor behaviors as price moves to/from their cost basis. It can be considered as a mean reversion style model, where the Realized Cap (aggregate market cost basis) functions as the mean and MVRV measures deviations from this mean.

The value of an asset's given MVRV gives an idea of how much overvalued or undervalued an asset is based on short, mid, or long-term timeframes.

An MVRV value of 100% (or 2.0) means that if all holders sell their coins/tokens at the current price, they will generate a 100% (x2) profit on average. The more this ratio increases, the more likely traders have historically demonstrated their willingness to sell.

On the other side of the spectrum, a negative MVRV value indicates that the asset is "undervalued" on average. This means that if all coins were sold, most traders will be realizing losses at the asset's current price.

MVRV values (regardless of which timeframe) will hover around 0%, assuming the asset has had enough time to normalize after its introduction as a publicly-traded asset.

Overall, MVRV shows the average profit/loss of all the coins currently in circulation
given the current price.

We need to define two terms:
- `MV` as in `Market Value` refers to the well-known capitalization. The second
  part is the
- `RV` as in [Realized Value](/metrics/realized-value). It is an alternative to
  the Market Value where instead of the current price, every coin/token is
  multiplied by its acquisition price.

The definition of MVRV is:

$$
MVRV = \frac{MV}{RV}
$$

## Usage Guide

The MVRV ratio allows traders to gauge both actual profitability vs. loss on the network, as well as gauge the inherent degree of fear and greed that comes with it. Assets have different extremes in terms of how far a positive or negative fluctuation in its MVRV can go. And if we measure the coin's current MVRV vs. its lowest and highest points, it's usually fair to make educated presumptions of when price tops and bottoms are forming.

### MVRV Bitcoin chart

<iframe title="Santiment Chart: Price (BTC), MVRV Ratio (30d) (BTC)" width="100%" height="300" src="https://embed.santiment.net/chart?ps=bitcoin&pt=BTC&df=2021-12-07T16%3A59%3A59.999Z&emcg=1&wm=price_usd%3Bmvrv_usd_30d&wax=0%3B1&wc=%2326C953%3B%23F47BF7&ws=%3B" scrolling="no"></iframe>

### High MVRV Values ( > 2 )
MVRV value of 2 means that if all holders sell their coins/tokens at the current price, they will generate an x2 profit on average.

### Low MVRV Values ( < 1 )
If the MVRV value is between 0 and 1, then the market is "undervalued" on average, meaning most people will realize losses if they all sell their holdings at the current price.

## Timebound

[Timebound Metrics](/metrics/details/timebound) available.

The timebound metrics can help exclude the inactive addresses. These metrics are
computed the same way as the MVRV metric, with the only difference that they
take into account only the coins/tokens that have moved in the desired time
range. Examples: `mvrv_usd_365d` is computed on the coins/tokens that moved at
least once in the past 365 days. `mvrv_usd_60d` is computed by taking only the
coins/tokens that moved at least once in the past 60 days.

Comparing timebound MVRV values of different time ranges can clarify how much
profit/loss long-term and short-term holders can realize.

---

## Change Metrics

[Change Metrics](/metrics/details/change_metrics)

---

### MVRV Long/Short Difference

MVRV Long/Short Difference is defined as:
$$
\text{mvrv\_usd\_365d} - \text{mvrv\_usd\_60d}
$$

Negative values mean that short-term holders will realize higher profits
than long-term holders if they sell at a price at this moment. Positive values
show the opposite.

During strong and long bull runs, this metric tends to grow, and during bear
markets it is decreasing. The rationale is that during strong bull runs, the
long term holders are determining when the bull run will end when they start
selling, while during bear markets, the long term holders are at a loss on average
and the short term holders manage to realize profits

---

## Access

[Restricted Access](/metrics/details/access#restricted-access)

---


## Measuring Unit

Ratio

---

## Data Type

[Timeseries Data](/metrics/details/data-type#timeseries-data)

---

## Frequency

All available assets have [Daily
Intervals](/metrics/details/frequency#daily-frequency) A subset of the available
assets that consists of some of the bigger assets have [Five-Minute
Intervals](/metrics/details/frequency#five-minute-frequency)

---

## Latency

[On-Chain Latency](/metrics/details/latency#on-chain-latency)

---

## Available Assets

The daily interval MVRV metrics are available for [these
assets](<https://api.santiment.net/graphiql?variables=&query=%7B%0A%20%20getMetric(metric%3A%20%22mvrv_usd%22)%20%7B%0A%20%20%20%20metadata%20%7B%0A%20%20%20%20%20%20availableSlugs%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A>)


The 5-minute MVRV metrics are available for [these
assets](<https://api.santiment.net/graphiql?variables=&query=%7B%0A%20%20getMetric(metric%3A%20%22mvrv_usd_intraday%22)%20%7B%0A%20%20%20%20metadata%20%7B%0A%20%20%20%20%20%20availableSlugs%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A>)

---

## SanAPI

The daily metrics are available under the `mvrv_usd` name under the
`mvrv_usd_<interval>` name for the timebound metrics. The 5-minute interval
metrics are available under the `mvrv_usd_intraday` name under the
`mvrv_usd_intraday_<interval>` name for the timebound metrics.

Example of query for **mvrv_usd**:

```graphql-explorer
{
  getMetric(metric: "mvrv_usd") {
    timeseriesDataJson(
      slug: "santiment"
      from: "2019-01-01T00:00:00Z"
      to: "2019-09-01T00:00:00Z"
      interval: "7d"
    )
  }
}
```

Example of query for **mvrv_usd_intraday**:

```graphql-explorer
{
  getMetric(metric: "mvrv_usd_intraday") {
    timeseriesDataJson(
      slug: "bitcoin"
      from: "utc_now-90d"
      to: "utc_now-30d"
      interval: "3d"
    )
  }
}
```

Example of query for **timebound MVRV**:

```graphql-explorer
{
  getMetric(metric: "mvrv_usd_7d") {
    timeseriesDataJson(
      slug: "santiment"
      from: "2019-01-01T00:00:00Z"
      to: "2019-09-01T00:00:00Z"
      interval: "7d"
    )
  }
}
```

Example of query for **MVRV Long/Short Difference**

```graphql-explorer
{
  getMetric(metric: "mvrv_long_short_diff_usd") {
    timeseriesDataJson(
      slug: "santiment"
      from: "2019-01-01T00:00:00Z"
      to: "2019-09-01T00:00:00Z"
      interval: "7d"
    )
  }
}
```

## Full list of metrics

The full list of MVRV metrics is:

<Details>

<Summary>Open Metrics List</Summary>

- mvrv_long_short_diff_usd
- mvrv_usd
- mvrv_usd_10y
- mvrv_usd_180d
- mvrv_usd_180d_change_1d
- mvrv_usd_180d_change_30d
- mvrv_usd_180d_change_7d
- mvrv_usd_1d
- mvrv_usd_2y
- mvrv_usd_30d
- mvrv_usd_30d_change_1d
- mvrv_usd_30d_change_30d
- mvrv_usd_30d_change_7d
- mvrv_usd_365d
- mvrv_usd_365d_change_1d
- mvrv_usd_365d_change_30d
- mvrv_usd_365d_change_7d
- mvrv_usd_3y
- mvrv_usd_5y
- mvrv_usd_60d
- mvrv_usd_60d_change_1d
- mvrv_usd_60d_change_30d
- mvrv_usd_60d_change_7d
- mvrv_usd_7d
- mvrv_usd_7d_change_1d
- mvrv_usd_7d_change_30d
- mvrv_usd_7d_change_7d
- mvrv_usd_90d
- mvrv_usd_90d_change_1d
- mvrv_usd_90d_change_30d
- mvrv_usd_90d_change_7d
- mvrv_usd_change_1d
- mvrv_usd_change_30d
- mvrv_usd_change_7d
- mvrv_usd_intraday
- mvrv_usd_intraday_10y
- mvrv_usd_intraday_180d
- mvrv_usd_intraday_1d
- mvrv_usd_intraday_2y
- mvrv_usd_intraday_30d
- mvrv_usd_intraday_365d
- mvrv_usd_intraday_3y
- mvrv_usd_intraday_5y
- mvrv_usd_intraday_60d
- mvrv_usd_intraday_7d
- mvrv_usd_intraday_90d
- mvrv_usd_z_score

</Details>
