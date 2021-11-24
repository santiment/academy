---
title: MVRV - Market Value To Realized Value
author: Ivan, Irina Pranovich
date: 2021-11-19
description: The average profit/loss of all the coins currently in circulation according to the current price
---

## Definition

### MVRV

MVRV shows the average profit/loss of all the coins currently in circulation
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

MVRV value of 2 means that if all holders sell their coins/tokens at the current
price, they will generate an x2 profit on average. In this sense, MVRV shows the
ratio between the current price and the average price of every coin/token
acquired. The more the ratio increases, the more people will be willing to sell
as the potential profits **increase**.

The value of MVRV gives an idea of how much overvalued or undervalued an asset
is.

If the MVRV value is between 0 and 1, then the market is "undervalued" on
average, meaning most people will be realizing losses if they all sell their
holdings at the current price.

Keep in mind that this is in the ideal case and does not account for the
addresses with private keys or graveyard addresses. The way to adjust for this
is to look at the historical values for the MVRV values. As the value is
approaching historical maximums or minimums, then the possibility of a highly
overvalued or undervalued market is much higher.

Another way to deal with lost private keys and graveyard addresses is to compute
the MVRV value only taking into account the subset of tokens that have been
active at least once in the last several years.


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


### MVRV Long/Short Difference

MVRV Long/Short Difference is defined as `mvrv_usd_365d - mvrv_usd_60d`

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

[Special Restrictions](/products-and-plans/access-plans/special-restrictions#realized-value-and-mvrv-metrics).

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
assets](<https://api.santiment.net/graphiql?variables=&query=%7B%0A%20%20getMetric(metric%3A%20%22mvrv_usd%22)%20%7B%0A%20%20%20%20metadata%20%7B%0A%20%20%20%20%20%20availableSlugs%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A>)

---

## SanAPI

The daily metrics are available under the `mvrv_usd` name under the
`mvrv_usd_<interval>` name for the timebound metrics. The 5-minute interval
metrics are available under the `mvrv_usd_intraday` name under the
`mvrv_usd_intraday_<interval>` name for the timebound metrics.

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


Example of query for **mvrv_usd_intraday**:

```graphql
{
  getMetric(metric: "mvrv_usd_intraday") {
    timeseriesData(
      slug: "bitcoin"
      from: "utc_now-90d"
      to: "utc_now-30d"
      interval: "3d"
    ) {
      datetime
      value
    }
  }
}
```

[Run in
explorer](<https://api.santiment.net/graphiql?query=%7B%0A%20%20getMetric(metric%3A%20%22mvrv_usd_intraday%22)%20%7B%0A%20%20%20%20timeseriesData(%0A%20%20%20%20%20%20slug%3A%20%22bitcoin%22%0A%20%20%20%20%20%20from%3A%20%22utc_now-90d%22%0A%20%20%20%20%20%20to%3A%20%22utc_now-30d%22%0A%20%20%20%20%20%20interval%3A%20%223d%22%0A%20%20%20%20)%20%7B%0A%20%20%20%20%20%20datetime%0A%20%20%20%20%20%20value%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D>)


Example of query for **timebound MVRV**:

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

Example of query for **MVRV long-short difference**:

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
