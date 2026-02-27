---
title: Dormant Circulation
author: Ivan
date: 2020-06-29
description: Number of unique coins/tokens transferred after being idle for some time
---

## Definition

Dormant Circulation shows the number of unique coins/tokens transacted on a given day that
have not been moved for a long period of time.

Examples:

- `dormant_circulation_10y` - Shows how many coins/tokens that have not been moved
  for more than 10 years were transacted during a day. This is useful for spotting
  when really old Bitcoins move.
- `dormant_circulation_90d` - Shows how many coins/tokens that have not been moved
  for more than 90 days were transacted during a day. This is the smallest interval
  supported for that metric.

There are also dormant circulation metrics `dormant_circulation_usd_*` that represent the USD value of all 
unique coins or tokens that were transacted within a single day that have not been moved for some time.

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

## Timebound

[Timebound Metrics](/metrics/details/timebound)

---

## Change Metrics

[Change Metrics](/metrics/details/change_metrics)

---

## Frequency

[Daily Intervals](/metrics/details/frequency#daily-frequency)

---

## Latency

[On-Chain Latency](/metrics/details/latency#on-chain-latency)

---

## Available Assets

Available for [these
assets](<https://api.santiment.net/graphiql?variables=&query=%7B%0A%20%20getMetric(metric%3A%20%22dormant_circulation_90d%22)%20%7B%0A%20%20%20%20metadata%20%7B%0A%20%20%20%20%20%20availableSlugs%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A>)

> **Note:** All dormant circulation metrics are available for the same set of assets.

---

## SanAPI

Available under the `dormant_circulation_<timebound>` names.

The smallest supported interval is 90 days.
The biggest supported interval is 10 years.

```graphql-explorer
{
  getMetric(metric: "dormant_circulation_90d") {
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

The full list of Dormant Circulation metrics is:

<Details>

<Summary>Open Metrics List</Summary>

- dormant_circulation_10y
- dormant_circulation_180d
- dormant_circulation_2y
- dormant_circulation_365d
- dormant_circulation_365d_change_1d
- dormant_circulation_365d_change_30d
- dormant_circulation_365d_change_7d
- dormant_circulation_3y
- dormant_circulation_5y
- dormant_circulation_90d
- dormant_circulation_usd_180d
- dormant_circulation_usd_180d_change_1d
- dormant_circulation_usd_180d_change_30d
- dormant_circulation_usd_180d_change_7d

</Details>
