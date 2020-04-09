---
title: Circulation
author: Santiment Team
date: 2020-04-06
---

## Definition

Circulation shows number of unique coins/tokens being used during a time period.

Examples:

- `circulation_1d` - Shows how many unique coins/tokens were transacted during a
  day. If one token/coin changes hands 5 times on a given day, it will be
  counted once by the token circulation, but 5 times by the transaction volume.
- `circulation_1y` - Shows how many unique coins/tokens were transacted for the
  past 1 year

![circulation for bitcoin](circulation-bitcoin.png)

---

## Access

Circulation metrics are with [restricted access](/metrics/details/access#restricted-access).

---

## Timebound

There are multiple [timebound metrics](/metrics/details/timebound) available

---

## Measuring Unit

Token/Coin amount

---

## Frequency

Circulation metrics are available at [daily
intervals](/metrics/details/frequency#daily-frequency)

---

## Latency

Circulation metrics have [on-chain latency](/metrics/details/latency#on-chain-latency)

---

## Available assets

Circulation metrics are computed for [these
assets](<https://api.santiment.net/graphiql?variables=&query=%7B%0A%20%20getMetric(metric%3A%20%22circulation%22)%20%7B%0A%20%20%20%20metadata%20%7B%0A%20%20%20%20%20%20availableSlugs%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A>)

> Note: `circulation` metric and all circulation metrics are
> available for the same set of assets.

---

### SanAPI

The metrics are available under the `circulation` and `circulation_<timebound>` names.

Gets the total amount of tokens that have been sent at least once during each
day for given time period. Projects are referred to by a unique identifier
(slug). This metric is calculated daily, so the interval should be selected
accordingly.

```graphql
{
  getMetric(metric: "circulation_1d") {
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

**[Run in
Explorer](<https://api.santiment.net/graphiql?variables=&query=%7B%0A%20%20getMetric(metric%3A%20%22circulation_1d%22)%20%7B%0A%20%20%20%20timeseriesData(%0A%20%20%20%20%20%20slug%3A%20%22santiment%22%0A%20%20%20%20%20%20from%3A%20%222020-01-01T00%3A00%3A00Z%22%0A%20%20%20%20%20%20to%3A%20%222020-01-07T00%3A00%3A00Z%22%0A%20%20%20%20%20%20interval%3A%20%221d%22)%20%7B%0A%20%20%20%20%20%20%20%20datetime%0A%20%20%20%20%20%20%20%20value%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A>)**

Without any suffixes like \_1d, the metric returns the number of coins/tokens
ever seen up until now, which is equal to the total supply at that datetime.

```graphql
{
  getMetric(metric: "circulation") {
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

**[Run in
Explorer](<https://api.santiment.net/graphiql?variables=&query=%7B%0A%20%20getMetric(metric%3A%20%22circulation%22)%20%7B%0A%20%20%20%20timeseriesData(%0A%20%20%20%20%20%20slug%3A%20%22santiment%22%0A%20%20%20%20%20%20from%3A%20%222020-01-01T00%3A00%3A00Z%22%0A%20%20%20%20%20%20to%3A%20%222020-01-07T00%3A00%3A00Z%22%0A%20%20%20%20%20%20interval%3A%20%221d%22)%20%7B%0A%20%20%20%20%20%20%20%20datetime%0A%20%20%20%20%20%20%20%20value%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A>)**
