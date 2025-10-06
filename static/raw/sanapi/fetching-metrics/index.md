---
title: Fetching Metrics
author: Santiment Team
date: 2020-04-06
---

- [Overview](#overview)
- [Available Metrics](#available-metrics)
- [Metrics Restrictions Per Plan](#metrics-restrictions-per-plan)
- [Metrics Documentation](#metrics-documentation)
- [Available Assets](#available-assets)
- [Available Metrics Per Project](#available-metrics-per-project)
- [Available Projects Per Metric](#available-projects-per-metric)
- [Minimal Interval](#minimal-interval)
- [Aggregation](#aggregation)
- [Queryable Fields](#queryable-fields)
  - [timeseriesDataJson](#timeseriesdatajson)
  - [timeseriesDataPerSlugJson](#timeseriesdataperslugjson)
  - [aggregatedTimeseriesData](#aggregatedtimeseriesdata)
  - [histogramData](#histogramdata)
  - [metadata](#metadata)
  - [availableSince](#availablesince)
  - [lastDatetimeComputedAt](#lastdatetimecomputedat)
- [Examples](#examples)

## Overview

The `getMetric` GraphQL query provides a unified method for accessing a variety
of metrics for all supported assets. This query enables you to retrieve
metadata, datetime availability, assets availability, and various metric representations, including
timeseries data, histogram data, and aggregated timeseries data.

Here is an example of a GraphQL `getMetric` query:

```graphql-explorer
{
  getMetric(metric: "active_addresses_24h") {
    timeseriesDataJson(
      slug: "bitcoin"
      from: "2023-05-01T08:00:00Z"
      to: "2023-05-02T08:00:00Z"
      interval: "30m"
    )
  }
}
```

This query retrieves the timeseries data for the metric "active_addresses_24h"
for Bitcoin, from 8:00 on May 1, 2023, to 8:00 on May 2, 2023, with a 30-minute
interval between data points.

## Available Metrics

You can fetch the list of all available metrics using the following [query](https://api.santiment.net/graphiql?query=%7B%0A++getAvailableMetrics%0A%7D%0A):

```graphql-explorer
{
  getAvailableMetrics
}
```

To fetch the list of available metrics for a specific plan and product, provide
the `plan` and `product` arguments in the
[query](https://api.santiment.net/graphiql?query=%7B%0A++getAvailableMetrics%28product%3A+SANAPI+plan%3A+BUSINESS_PRO%29%0A%7D):

```graphql-explorer
{
  getAvailableMetrics(product: SANAPI, plan: BUSINESS_PRO)
}
```

## Metrics restrictions per plan

Access to certain metrics may be limited in various ways based on your subscription plan:

- Some metrics may not be accessible to users on lower-tier subscription plans.
- Lower-tier subscription plans may have limited access to certain metrics,
  excluding access to historical and real-time data, or no access at all.

You can obtain detailed information about the restrictions on all metrics for a specific subscription plan using this query:

```graphql-explorer
{
  getAccessRestrictions(product: SANAPI, plan: BUSINESS_PRO, filter: METRIC) {
    name
    minInterval
    isAccessible
    isRestricted
    isDeprecated
    restrictedFrom
    restrictedTo
    docs {
      link
    }
  }
}
```

The following fields are selected:

- `name` - the name of the metric
- `minInterval` - what is the minimal interval between two data points (5 minutes or 1 day in most cases)
- `isDeprecated` - is the deprecated. If true, you must stop using this metric as it will be removed in the future.
- `isAccessible` - is the metric accessible with the selected subscription plan.
- `restrictedFrom` - what is the earliest date for which this subscription plan can fetch data. If `null`, then no restrictions apply.
- `restrictedTo` - what is the latest date for which this subscription plan can fetch data. If `null`, then no restrictions apply.
- `docs` - link to the documentation of the metric.

## Metrics Documentation

You can find the documentation for most of the metrics on [this page](/metrics).

## Available Assets

Each metric is retrieved for a specific asset, which is identified by its `slug`.
You can obtain a list of all slugs using this query:

```graphql-explorer
{
  allProjects {
    slug
    name
    ticker
  }
}
```

## Available metrics per project

The range of available metrics varies for each asset. The query below
demonstrates three distinct lists:

- All accessible metrics
- A subset of all accessible metrics that are timeseries metrics
- A subset of all accessible metrics that are histogram metrics

You can retrieve these lists of metrics using this query:

```graphql-explorer
{
  projectBySlug(slug: "ethereum") {
    availableMetrics
    availableTimeseriesMetrics
    availableHistogramMetrics
  }
}
```

## Available projects per metric

To fetch the list of available slugs for a specific metric, use this query:

```graphql-explorer
{
  getMetric(metric: "mvrv_usd") {
    metadata {
      availableProjects {
        slug
      }
    }
  }
}
```

## Minimal Interval

Metrics are stored as pairs of datetime and value. The term `minInterval`
refers to the time interval between two consecutive data points. It signifies
the smallest interval that can be utilized when querying the metric.

The most frequently used `minInterval`s include:

- 1 day (`1d`): Metrics with this interval are typically referred to as "daily"
  metrics.
- 5 minutes (`5m`): Metrics with this interval are often called "intraday"
  metrics.

When querying data, the `interval` argument is used to determine the resolution
of the data. This interval can be significantly larger than the `minInterval`.
In such instances, all the values within that larger interval must be
aggregated into a single value. The `aggregation` parameter controls how this
data is aggregated.

## Aggregation

Fields that return timeseries data accept an `aggregation` parameter. When an
`interval` larger than `minInterval` is provided for a specific metric,
multiple data point values will be consolidated into a single data point.

> **Note**: Each metric has a manually selected default aggregation that is
> used if the `aggregation` parameter is not specified. The default aggregation
> is chosen to be the most logical one.

The types of aggregations are:

- `SUM` - The sum of all values.
- `AVG` - The average of the values.
- `MEDIAN` - The median of all values.
- `FIRST` - The earliest value (with the smallest datetime).
- `LAST` - The most recent value (with the latest datetime).
- `MAX` - The largest value.
- `MIN` - The smallest value.
- `ANY` - Any value within the interval. This is typically used when all values
  are expected to be the same, and you just want to select one of them. No
  metrics use this as their default aggregation. This type of aggregation is
  more commonly used when users write their own SQL queries using the
  [Santiment Queries](/santiment-queries) product.

> **Note:** The aggregation is of the [GraphQL enum
> type](https://graphql.org/learn/schema/#enumeration-types) and should be
> provided in uppercase without quotes, like this: `aggregation: MAX`.

The following query retrieves the default aggregation and all available aggregations for each metric:

```graphql-explorer
{
  getMetric(metric: "daily_active_addresses") {
    metadata {
      defaultAggregation
      availableAggregations
    }
  }
}
```

## Queryable fields

In the `getMetric` function, you can query the following fields:

- `timeseriesDataJson`
- `timeseriesDataPerSlugJson`
- `aggregatedTimeseriesData`
- `histogramData`
- `metadata`
- `availableSince`
- `lastDatetimeComputedAt`

### timeseriesDataJson

Timeseries data is a sequence of data points collected at consistent intervals
over time. Each data point provided by the API includes a `datetime` and a
`value` field.

To retrieve the values for a specific metric, slug, and time range, you can use
the `timeseriesDataJson` field of the `getMetric` API.

#### Parameters:

| Parameter             | Description                                                                                                       |
| --------------------- | ----------------------------------------------------------------------------------------------------------------- |
| slug                  | The slug of the project                                                                                           |
| from                  | The starting date for the values to be returned, in ISO8601 format                                                |
| to                    | The ending date for the values to be returned, in ISO8601 format                                                  |
| interval              | The intervals to be returned. The default is `1d`. This is optional                                               |
| aggregation           | The aggregation to be used when fetching data for longer intervals. This is optional                              |
| includeIncompleteData | Exclude the last incomplete day (today) if it could lead to misleading data. Default is `false`. This is optional |
| fields                | Optionally give aliases the returned fields `datetime` and `value`                                                |
| transform             | Apply a transformation to the result. Default is `none`. This is optional                                         |

- `aggregation`: This parameter is optional. If not provided, each metric has a
  default aggregation that is most suitable. You can view the default
  aggregation function using the [metadata](#metadata) query.
- `includeIncompleteData`: In some cases, if the day is not yet complete, the
  current value can be misleading. For instance, fetching daily active
  addresses at 12pm would include only half a day's data, potentially making
  the data for that day appear too low.
- `fields`: If the returned fields name should be something other than `datetime` or `value`, aliases can be given.
  In case of `aggregation: OHLC`, the fields that can be overriden are `valueOhlc`, `open`, `high`, `close` and `low`
  - `{datetime: "dt", value: "v"}`
- `transform`: Apply a transformation to the timeseries data result. Available transformations include:
  - `{type: "none"}`: Do not apply any transformation
  - `{type: "moving_average", moving_average_base: base}`: Apply a simple moving average. Each data point value is calculated as the average of the last `base` intervals. To compute this, it fetches enough data before `from` so it can be computed.
  - `{type: "changes"}`: For each data point, change the value to the difference between the value and the previous value.

```graphql-explorer
{
  getMetric(metric: "dev_activity") {
    timeseriesDataJson(
      slug: "santiment"
      from: "utc_now-60d"
      to: "utc_now-50d"
      interval: "1d"
      aggregation: SUM
      transform: { type: "moving_average", moving_average_base: 3 }
    )
  }
}
```

### timeseriesDataPerSlugJson

This API acts similar to timeseriesDataJson, but it can return data for more than one asset at a time.
The differences in parameters compared to timeseriesDataJson are as follows:

- Instead of `slug` it can accept the `selector` parameters where multiple assets can be provided at once:
  `selector: {slugs: ["bitcoin", "ethereum"]}`
- It does not support the `transform` parameter

```graphql-explorer
{
  getMetric(metric: "price_usd") {
    timeseriesDataPerSlugJson(
      selector: { slugs: ["bitcoin", "ethereum"] }
      from: "utc_now-60d"
      to: "utc_now-50d"
      includeIncompleteData: true
      interval: "1d"
    )
  }
}
```

### aggregatedTimeseriesData

Aggregated timeseries data is useful when you require a single value instead of
multiple values separated by an even interval. This can be utilized to fetch
the All-Time High (ATH) price or the highest number of daily active addresses,
among other examples.

#### Parameters:

| Parameter   | Description                                                                   |
| ----------- | ----------------------------------------------------------------------------- |
| slug        | The slug of the project                                                       |
| from        | The start date for the returned values in ISO8601 format                      |
| to          | The end date for the returned values in ISO8601 format                        |
| aggregation | The aggregation to be used when fetching data for longer intervals (Optional) |

- `aggregation`: This parameter is optional. If not provided, each metric has a default aggregation function that is most suitable. The default aggregation function can be viewed using the [metadata](#metadata) query.

The following query fetches the all-time highest price for Santiment:

```graphql-explorer
{
  getMetric(metric: "price_usd") {
    highest_price: aggregatedTimeseriesData(
      slug: "santiment"
      from: "2017-07-01T00:00:00Z"
      to: "2020-04-01T00:00:00Z"
      aggregation: MAX
    )
  }
}
```

### aggregatedTimeseriesData on the project type

Queries like `allProject` or `projectBySlug` also have `aggregatedTimeseriesData` field that works the same way.
The only difference is that when using `getMetric` the `metric` is already pinned and the `slug` needs to be provided, while
for `allProjects` and `projectBySlug` it is vice versa.
Using aliases, the `aggregatedTimeseriesData` can be selected multiple times.

```graphql-explorer
{
  allProjects(page: 1, pageSize: 20) {
    slug
    devActivity: aggregatedTimeseriesData(
      metric: "dev_activity_1d"
      from: "utc_now-30d"
      to: "utc_now"
      aggregation: SUM
    )
    priceUsd: aggregatedTimeseriesData(
      metric: "price_usd"
      from: "utc_now-1d"
      to: "utc_now"
      aggregation: LAST
    )
  }
}
```

### histogramData

A histogram is a graphical representation that organizes a group of data points
into a specified range. For instance, if we consider the period from January
2018 to January 2019, we can fetch the amount of Ether that was bought in every
100-dollar price range: $0-$100, $100-$200, ..., $1300-$1400.

To fetch the values for a given histogram metric, slug, and time interval, you
can use the `histogramData` subquery of the `getMetric` API.

#### Parameters:

| Parameter | Description                                      |
| --------- | ------------------------------------------------ |
| slug      | The slug of the project                          |
| from      | The start date for the values in ISO 8601 format |
| to        | The end date for the values in ISO 8601 format   |
| interval  | The intervals to be returned. Default is `1d`    |
| limit     | The number of results to be returned. Optional   |

Different histogram metrics may have different response types or formats.

```graphql-explorer
{
  getMetric(metric: "age_distribution") {
    histogramData(
      slug: "ethereum"
      from: "utc_now-90d"
      to: "utc_now-80d"
      limit: 20){
        labels
        values{
          ... on FloatList{
            data
          }
        }
    }
  }
}
```

### metadata

Each metric is accompanied by metadata that describes the following:

- The minimum interval for which it can be fetched. Different metrics are
  available at varying granularities.
- The default aggregation that will be used when retrieving the metric at a
  higher resolution.
- The supported aggregations for the metric.
- The existing selectors for the metric.
- The projects for which the metric is available.
- The type of the metric, which can be either a timeseries or a histogram.

```graphql-explorer
{
  getMetric(metric: "daily_active_addresses") {
    metadata {
      availableAggregations
      availableSelectors
      availableSlugs
      dataType
      defaultAggregation
      minInterval
    }
  }
}
```

### availableSince

You can fetch the date from which a specific metric is available for an asset using the following query:

```graphql-explorer
{
  getMetric(metric: "transaction_volume") {
    availableSince(slug: "bitcoin")
  }
}
```

Typically, a metric is available for a given asset from the moment the contract
or blockchain is created. However, there are exceptions. For instance, if the
calculation of a metric requires pricing data that is not available, the metric
will only be available from the date the pricing data becomes available.

For example, Bitcoin has been operational since early 2009, but there were no
exchanges or markets for over a year. Therefore, the pricing data only starts
from July 2010. As a result, the MVRV metric, which requires market
capitalization, is also only available since July 2010.

### lastDatetimeComputedAt

> **Note:** This field may be complex to understand. However, in the general
> case, this field is not used.

The `lastDatetimeComputedAt` shows the when the latest
data point was computed.

```graphql-explorer
{
  getMetric(metric: "daily_active_addresses") {
    lastDatetimeComputedAt(slug: "santiment")
  }
}
```

## Examples

**Timeseries Data Example**

```graphql-explorer
{
  getMetric(metric: "active_addresses_24h") {
    timeseriesDataJson(
      slug: "bitcoin"
      from: "2023-05-01T08:00:00Z"
      to: "2023-05-02T08:00:00Z"
      interval: "30m"
    )
  }
}
```

This example query retrieves the `development_activity` metric for the Ethereum
project over the last 60 days, with a 1-day interval.

**Timeseries Data Example**

```graphql-explorer
{
  getMetric(metric: "twitter_followers") {
    timeseriesData(
      slug: "maker"
      from: "2023-01-01T00:00:00Z"
      to: "2023-02-01T00:00:00Z"
      interval: "7d"
      transform: { type: "consecutive_differences" }
    ) {
      datetime
      value
    }
  }
}
```

**Aggregated Timeseries Data Example**

```graphql-explorer
{
  getMetric(metric: "daily_active_addresses") {
    highest_daa: aggregatedTimeseriesData(
      slug: "ethereum"
      from: "2022-01-01T00:00:00Z"
      to: "2023-01-01T00:00:00Z"
      aggregation: MAX
    )
    lowest_daa: aggregatedTimeseriesData(
      slug: "ethereum"
      from: "2022-01-01T00:00:00Z"
      to: "2023-01-01T00:00:00Z"
      aggregation: MIN
    )
  }
}
```

**Histogram Metric Example I**

```graphql-explorer
{
  getMetric(metric: "age_distribution") {
    histogramData(
      slug: "santiment"
      from: "2020-02-10T07:00:00Z"
      to: "2020-03-30T07:00:00Z"
      interval: "1d"
    ) {
      values {
        ... on DatetimeRangeFloatValueList {
          data {
            range
            value
          }
        }
      }
    }
  }
}
```

The response result is a list that contains a 2-element range of datetimes and a float value.

**Histogram Metric Example**

```graphql-explorer
{
  getMetric(metric: "price_histogram") {
    histogramData(
      slug: "santiment"
      from: "2020-02-10T07:00:00Z"
      to: "2020-03-30T07:00:00Z"
      interval: "1d"
    ) {
      values {
        ... on FloatRangeFloatValueList {
          data {
            range
            value
          }
        }
      }
    }
  }
}
```

The response is a list that contains a 2-element range of float (prices) and a float value.

<Notebox type="none">
**Read next: [Common GraphQL Queries](/sanapi/common-queries)**
</Notebox>
