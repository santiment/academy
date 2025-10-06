---
title: Change Metrics
author: Ivan
date: 2022-04-12
---

- [Definition](#definition)
- [Units](#units)
- [Examples](#examples)
  - [price_usd_change_1d](#price_usd_change_1d)
  - [circulation_180d_change_1d](#circulation_180d_change_1d)
- [API examples](#api-examples)
  - [Get timeseries data of a change metric](#get-timeseries-data-of-a-change-metric)
  - [Get aggregated value for multiple assets](#get-aggregated-value-for-multiple-assets)
    metric](#get-timeseries-data-of-a-change-metric)
  - [Get aggregated value for multiple
    assets](#get-aggregated-value-for-multiple-assets)

## Definition

The metrics with the suffix `_change_<interval>` indicate the percent value
change at the given time compared to `interval` time ago. This allows the
percent changes to be fetched historically and to be plotted on charts.

Change metrics' names are formed from the original metric name and a change
suffix. Available change intervals and their suffixes are:

- `_change_1h` - 1 hour. Available only for USD price
- `_change_1d` - 1 day
- `_change_7d` - 7 days
- `_change_30d` - 30 days

> Note: Change metrics are also available for some of the [Timebound
> Metrics](/metrics/details/timebound). In such cases, both suffixes are
> appended, and their order is important. In all cases, the order is timebound
> suffix, followed by change suffix.

## Units

The metric units are numbers where `0` corresponds to 0% change, `1` corresponds
to 100% change. Negative values indicate decrease. These values cannot be
aggregated using `SUM`. The default aggregation is `LAST`.
## Examples

### price_usd_change_1d

This metric represents the 24h price percent change.

### circulation_180d_change_1d

This metric represents the 24h percent change of the `circulation_180d`
[timebound metric](/metrics/details/timebound)

## API examples

### Get timeseries data of a change metric

```graphql-explorer
{
  getMetric(metric: "price_usd_change_1d") {
    timeseriesDataJson(
      slug: "bitcoin"
      from: "utc_now-7d"
      to: "utc_now"
      interval: "1d"
    )
  }
}
```

### Get aggregated value for multiple assets

```graphql
{
  # The default aggregation is LAST. The last known value, but
  # no older than 6 hours, is returned for every asset
  allProjects(page: 1, pageSize: 20){
    slug
    priceChange24h: aggregatedTimeseriesData(
      metric: "price_usd_change_1d"
      from: "utc_now-6h"
      to: "utc_now")
    tradingVolumeChange24h: aggregatedTimeseriesData(
      metric: "volume_usd_change_1d"
      from: "utc_now-6h"
      to: "utc_now")
  }
}
```


[**Run in
Explorer**](https://api.santiment.net/graphiql?query=%7B%0A++getMetric%28metric%3A+%22price_usd_change_1d%22%29+%7B%0A++++timeseriesData%28%0A++++++slug%3A+%22bitcoin%22%0A++++++from%3A+%22utc_now-7d%22%0A++++++to%3A+%22utc_now%22%0A++++++interval%3A+%221d%22%0A++++%29+%7B%0A++++++datetime%0A++++++value%0A++++%7D%0A++%7D%0A%7D)

