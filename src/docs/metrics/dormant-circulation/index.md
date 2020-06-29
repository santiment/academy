---
title: Dormant Circulation
author: Ivan
date: 2020-06-29
description: Number of unique coins/tokens transferred after being idle for some time
---

## Definition

Dormant Circulation shows number of unique coins/tokens transacted on a given day that
have not been moved for big amount of time.

Examples:

- `dormant_circulation_10y` - Shows how many coins/tokens that have not been moved
  for more than 10 years were transacted during a day. This is useful for spotting
  when really old Bitcoins move.
- `dormant_circulation_90d` - Shows how many coins/tokens that have not been moved
  for more than 90 days were transacted during a day. This is the smallest interval
  supported for that metric.

---

## Access

[Restricted Access](/metrics/details/access#restricted-access)

---

## Timebound

[Timebound Metrics](/metrics/details/timebound)

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

Available for [these
assets](<https://api.santiment.net/graphiql?variables=&query=%7B%0A%20%20getMetric(metric%3A%20%22dormant_circulation_90d%22)%20%7B%0A%20%20%20%20metadata%20%7B%0A%20%20%20%20%20%20availableSlugs%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A

> )

> **Note:** All dormant circulation metrics are available for the same set of assets.

---

### SanAPI

Available under the `dormant_circulation_<timebound>` names.

The smallest supported interval is 90 days.
The biggest supported interval is 10 years.

```graphql
{
  getMetric(metric: "dormant_circulation_90d") {
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
Explorer](<https://api.santiment.net/graphiql?variables=&query=%7B%0A%20%20getMetric(metric%3A%20%22dormant_circulation_90d%22)%20%7B%0A%20%20%20%20timeseriesData(%0A%20%20%20%20%20%20slug%3A%20%22ethereum%22%0A%20%20%20%20%20%20from%3A%20%222020-01-01T00%3A00%3A00Z%22%0A%20%20%20%20%20%20to%3A%20%222020-01-07T00%3A00%3A00Z%22%0A%20%20%20%20%20%20interval%3A%20%221d%22%0A%20%20%20%20)%20%7B%0A%20%20%20%20%20%20datetime%0A%20%20%20%20%20%20value%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D>)**
