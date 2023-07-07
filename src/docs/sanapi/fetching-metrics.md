---
title: Fetching Metrics
author: Santiment Team
date: 2020-04-06
---

- [Overview](#overview)
- [Available metrics](#available-metrics)
- [Metrics restrictions per plan](#metrics-restrictions-per-plan)
- [Metrics Documentation](#metrics-documentation)
- [Available assets](#available-assets)
- [Available metrics per project](#available-metrics-per-project)
- [Available projects per metric](#available-projects-per-metric)
- [Minimal Interval](#minimal-interval)
- [Aggregation](#aggregation)
- [Queryable fields](#queryable-fields)
  - [timeseriesData](#timeseriesdata)
  - [aggregatedTimeseriesData](#aggregatedtimeseriesdata)
  - [histogramData](#histogramdata)
  - [metadata](#metadata)
  - [availableSince](#availablesince)
  - [lastDatetimeComputedAt](#lastdatetimecomputedat)
- [Examples](#examples)

## Overview

The `getMetric` GraphQL query provides a unified access to many different metrics across the
whole universe of supported assets. The query allows to get metadata,
datetime availability and different metric representations - timeseries data,
histogram data, aggregated timeseries data.

An example GraphQL `getMetric` query looks like this:

```graphql
{
  getMetric(metric: "active_addresses_24h") {
    timeseriesData(
      slug: "bitcoin"
      from: "2023-05-01T08:00:00Z"
      to: "2023-05-02T08:00:00Z"
      interval: "30m") {
        datetime
        value
    }
  }
}
```

## Available metrics

The list of all available metrics can be fetched with [this query](https://api.santiment.net/graphiql?query=%7B%0A++getAvailableMetrics%0A%7D%0A):

```graphql
{
  getAvailableMetrics
}
```

The list of available metrics for given plan and product can be fetched by supplying the `plan` and `product`
arguments with [this query](https://api.santiment.net/graphiql?query=%7B%0A++getAvailableMetrics%28product%3A+SANAPI+plan%3A+PRO%29%0A%7D):

```graphql
{
  getAvailableMetrics(product: SANAPI plan: PRO)
}
```

## Metrics restrictions per plan

The access to some of the metrics can be restricted in different ways:
- Lower subscription plans do not have access to a metric;
- Lower subsription plans have limited access to a a metric without access to  the historical data and the realtime data.

Exact information about the restrictions for all metrics for a given subscription plan can be obtained by [this query](https://api.santiment.net/graphiql?query=%7B%0A++getAccessRestrictions%28product%3A+SANAPI+plan%3A+PRO%29%7B%0A%09%09name%0A++++type%0A++++minInterval%0A++++isAccessible%0A++++isRestricted%0A++++restrictedFrom%0A++++restrictedTo%0A++%7D%0A%7D)

```graphql
{
  getAccessRestrictions(product: SANAPI plan: PRO){
    name
    type
    minInterval
    isAccessible
    isRestricted
    restrictedFrom
    restrictedTo
  }
}
```

## Metrics Documentation

Documentation for most of the metrics can be found on [this page](/metrics).

## Available assets

Every metric is fetched for a given asset, identified by its `slug`.

Documentation about biw to fetch all available assets can be found
[here](/glossary/#asset). The list of all slugs can be obtained with [this query](https://api.santiment.net/graphiql?query=%7B%0A++allProjects%7B%0A++++slug%0A++%7D%0A%7D):

```graphql
{
  allProjects{
    slug
  }
}
```

## Available metrics per project

The set of available metrics is not the same for each asset. The following query shows three lists:

- All available metrics
- The subset of all available metrics that are timeseries metrics
- The subset of all available metrics that are histogram metrics

The lists of metrics can be obtained with [this query](https://api.santiment.net/graphiql?query=%7B%0A%20%20projectBySlug(slug%3A%20%22ethereum%22)%20%7B%0A%20%20%20%20availableMetrics%0A%20%20%20%20availableTimeseriesMetrics%0A%20%20%20%20availableHistogramMetrics%0A%20%20%7D%0A%7D):

```graphql
{
  projectBySlug(slug: "ethereum") {
    availableMetrics
    availableTimeseriesMetrics
    availableHistogramMetrics
  }
}
```

## Available projects per metric

The `getMetric` API supports a large list of assets identified by their slug.
For a given metricthe list of available slugs can be fetched with this query:

```graphql
{
  getMetric(metric: "mvrv_usd"){
    metadata{
      availableSlugs
    }
  }
}
```

**[Run in
explorer](<https://api.santiment.net/graphiql?query=%7B%0A%20%20getMetric(metric%3A%20%22mvrv_usd%22)%7B%0A%20%20%20%20metadata%7B%0A%20%20%20%20%20%20availableSlugs%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D>)**


## Minimal Interval

The metrics are stored as a datetime and value pairs.
`minInterval` refers to the time interval between two adjacent data points and means that it is the minimal interval
that can be used when querying the metric. The most common `minInterval`s are:

- 1 day (`1d`). The metrics with such interval are commonly known as "daily" metrics.
- 5 minutes (`5m`). The metrics with such interval are commonly known as "intraday" metrics.

When querying the data, the `interval` argument is used to determine the resolution of the data. The interval can be
much bigger compared to the `minInterval`. In such cases all the values inside that big interval need to be aggregated
into a single value. How the data is aggregated is controlled by the `aggregation` parameter.

## Aggregation

The fields that return timeseries data accept an `aggregation` parameter.

When an `interval` bigger than `minInterval` is provided for a given metric,
more than 1 data point value will be aggregated into a single data point.

> **Note**: Every metric has a manually picked default aggregation that will be used if the `aggregation` parameter is not provided. The default aggregation is set to be one that makes the most sense.

The aggregations types are:

- `SUM` - The sum of all the values;
- `AVG` - The average of the values;
- `MEDIAN` - The median of all the values;
- `FIRST` - The first (with the smallest datetime) value;
- `LAST` - The last (with latest datetime) value;
- `MAX` - The max/biggest value;
- `MIN` - The min/smallest value;
- `ANY` - Any value falling in the interval. This is usually used when
  all values are expected to have the same result and you just want to take one
  of them. None of the metrics have this as their default aggregation. This aggregation type has more widespread usage when the user writes their own SQL queries using the [Santiment Queries](/santiment-queries) product.

> **Note:** The aggregation is of the [GraphQL enum type](https://graphql.org/learn/schema/#enumeration-types)a dn should be provided capitalized without quotes like this:
> `aggregation: MAX`

The following query fetches the default aggregation and all available
aggregations per metric:

```graphql
{
  getMetric(metric: "daily_active_addresses") {
    metadata {
      defaultAggregation
      availableAggregations
    }
  }
}
```

**[Run in
explorer](<https://api.santiment.net/graphiql?query=%7B%0A%20%20getMetric(metric%3A%20%22daily_active_addresses%22)%20%7B%0A%20%20%20%20metadata%20%7B%0A%20%20%20%20%20%20defaultAggregation%0A%20%20%20%20%20%20availableAggregations%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A>)**

## Queryable fields

The fields that can be queried on `getMetric`:

- `timeseriesData`
- `timeseriesDataPerSlug`
- `aggregatedTimeseriesData`
- `histogramData`
- `metadata`
- `availableSince`
- `lastDatetimeComputedAt`

### timeseriesData

Timeseries data is a sequence taken at successive equally spaced points in time.
For every point the API provides a `datetime` and a `value` field.

To fetch the values for a given metric, slug and time range you can use the
`timeseriesData` subquery of the `getMetric` API.

Parameters:

| Parameter             | Description                                                                                         |
| --------------------- | --------------------------------------------------------------------------------------------------- |
| slug                  | The slug of the project                                                                             |
| from                  | From which date to return the values in ISO8601 format                                              |
| to                    | Until which date to return the values in ISO8601 format                                             |
| interval              | The intervals that should be returned. Default is `1d`. Optional                                    |
| aggregation           | The aggregation to be used when fetching data for longer intervals. Optional                        |
| includeIncompleteData | Exclude the last incomplete day (today) if it lead to misleading data. Default is `false`. Optional |
| transform             | Apply a transformation on the the result. Default is `none`. Optional                               |

- aggregation - This parameter is optional and if it is not provided - every
  metric has a default one that fits best. You can see the default aggregation
  function using the [metadata](#metadata) query.
- includeIncompleteData - In some cases if the day is not finished the current
  value can be misleading. For example fetching daily active addresses at 12pm
  would include only half a day of data and because of the that the data for
  that day could seem too low.
- transform - Apply a transformation to the timeseries data result. Available
  transformations:
  - `{type: "none"}` - Do not apply any transformation
  - `{type: "moving_average", moving_average_base: base}` - Apply a simple
    moving average. For every data point the value is calculated as the average
    of the last `base` intervals. In order to compute this internally it fetches
    enough data before `from` so it can be computed.
  - `{type: "changes"}` - For every data point change the value to the
    difference between the value and the previous value.

```graphql
{
  getMetric(metric: "dev_activity") {
    timeseriesData(
      slug: "santiment"
      from: "2019-01-01T00:00:00Z"
      to: "2019-09-01T00:00:00Z"
      includeIncompleteData: true
      interval: "7d"
      aggregation: SUM
      transform: { type: "moving_average", moving_average_base: 3 }
    ) {
      datetime
      value
    }
  }
}
```

**[Run in
explorer](<https://api.santiment.net/graphiql?query=%7B%0A%20%20getMetric(metric%3A%20%22dev_activity%22)%20%7B%0A%20%20%20%20timeseriesData(%0A%20%20%20%20%20%20slug%3A%20%22santiment%22%0A%20%20%20%20%20%20from%3A%20%222019-01-01T00%3A00%3A00Z%22%0A%20%20%20%20%20%20to%3A%20%222019-09-01T00%3A00%3A00Z%22%0A%20%20%20%20%20%20includeIncompleteData%3A%20true%0A%20%20%20%20%20%20interval%3A%20%227d%22%0A%20%20%20%20%20%20aggregation%3A%20SUM%0A%20%20%20%20%20%20transform%3A%20%7Btype%3A%20%22moving_average%22%2C%20moving_average_base%3A%203%7D)%20%7B%0A%20%20%20%20%20%20%20%20datetime%0A%20%20%20%20%20%20%20%20value%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D>)**

### aggregatedTimeseriesData

Aggregated timeseries data is used when you don't need many values separated
apart by an even interval but just a single value. This can be used to fetch the
ATH price or the highest daily active addresses ever as one of the many
examples.

Parameters:

| Parameter   | Description                                                                  |
| ----------- | ---------------------------------------------------------------------------- |
| slug        | The slug of the project                                                      |
| from        | From which date to return the values in ISO8601 format                       |
| to          | Until which date to return the values in ISO8601 format                      |
| aggregation | The aggregation to be used when fetching data for longer intervals. Optional |

- aggregation - This parameter is optional and if it is not provided - every
  metric has a default one that fits best. You can see the default aggregation
  function using the [metadata](#metadata) query.

The following query fetches the all time highest price for santiment:

```graphql
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

**[Run in
Explorer](<https://api.santiment.net/graphiql?query=%7B%0A%20%20getMetric(metric%3A%20%22price_usd%22)%20%7B%0A%20%20%20%20highest_price%3A%20aggregatedTimeseriesData(%0A%20%20%20%20%20%20slug%3A%20%22santiment%22%0A%20%20%20%20%20%20from%3A%20%222017-07-01T00%3A00%3A00Z%22%0A%20%20%20%20%20%20to%3A%20%222020-04-01T00%3A00%3A00Z%22%0A%20%20%20%20%20%20aggregation%3A%20MAX%0A%20%20%20%20)%0A%20%20%7D%0A%7D>)**

### histogramData

A histogram is an approximate representation of the distribution of numerical or
categorical data.

This is better understood with an example: For the period of January 2018 -
January 2019, fetch the amount of Ether that was bought in every 100-dollar
price range: $0-$100, $100-$200, ... , $1300-$1400.

To fetch the values for a given histogram metric, slug and time interval you can
use the `histogramData` subquery of the `getMetric` API.

Parameters:

| Parameter | Description                                             |
| --------- | ------------------------------------------------------- |
| slug      | The slug of the project                                 |
| from      | From which date to return the values in ISO 8601 format |
| to        | Till which date to return the values in ISO 8601 format |
| interval  | The intervals that should be returned. Default is `1d`  |
| limit     | The number of results returned. Optional                |

Different histogram metrics could have different response types/formats.

---

**[Run in
explorer](<https://api.santiment.net/graphiql?query=%7B%0A%20%20getMetric(metric%3A%20%22age_distribution%22)%20%7B%0A%20%20%20%20histogramData(%0A%20%20%20%20%20%20slug%3A%20%22santiment%22%0A%20%20%20%20%20%20from%3A%20%222020-01-06T00%3A00%3A00Z%22%0A%20%20%20%20%20%20to%3A%20%222020-01-07T00%3A00%3A00Z%22%0A%20%20%20%20%20%20limit%3A%2020)%7B%0A%20%20%20%20%20%20%20%20labels%0A%20%20%20%20%20%20%20%20values%7B%0A%20%20%20%20%20%20%20%20%20%20...%20on%20FloatList%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20data%0A%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A>)**

- `availableMetrics` - The list of all metrics.
- `availableTimeseriesMetrics` - The subset of the available metrics that are
  fetchable via the `timeseriesData` field.
- `availableHisogramMetrics` - The subset of the available metrics that are
  fetchable via the `histogramData` field.

**[Run in
explorer](<https://api.santiment.net/graphiql?query=%7B%0A%20%20projectBySlug(slug%3A%20%22santiment%22)%20%7B%0A%20%20%20%20availableMetrics%0A%20%20%20%20availableTimeseriesMetrics%0A%20%20%20%20availableHistogramMetrics%0A%20%20%7D%0A%7D>)**

### metadata

Each metric has metadata describing:

- What is the minimal interval it can be fetched for. Different metrics are
  available with different granularities.
- What is the default aggregation which will be used when getting the metric for
  higher resolution.
- What are the supported aggregations for the metric.
- What are the existed selectors for the metric.
- Which are the projects the metric is available for.
- What is the type of the metrics - timeseries or histogram

```graphql
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

**[Run in
explorer](<https://api.santiment.net/graphiql?query=%7B%0A%20%20getMetric(metric%3A%20%22daily_active_addresses%22)%20%7B%0A%20%20%20%20metadata%20%7B%0A%20%20%20%20%20%20metric%0A%20%20%20%20%20%20availableAggregations%0A%20%20%20%20%20%20availableSelectors%0A%20%20%20%20%20%20availableSlugs%0A%20%20%20%20%20%20dataType%0A%20%20%20%20%20%20defaultAggregation%0A%20%20%20%20%20%20minInterval%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A>)**

### availableSince

Fetch the datetime from which a given metric is available for an asset can be done with [this query](https://api.santiment.net/graphiql?query=%7B%0A++getMetric%28metric%3A+%22transaction_volume%22%29+%7B%0A++++availableSince%28slug%3A+%22bitcoin%22%29%0A++%7D%0A%7D):

```graphql
{
  getMetric(metric: "transaction_volume") {
    availableSince(slug: "bitcoin")
  }
}
```

A metric is usually available for a given asset since the creation of the
contract/blockchain.

Exception to this statement is when pricing data is needed in order to calculate
the metric and the price data is missing. For example, Bitcoin is working since
the beginning of 2009, but because there were no exchanges and markets for over
an year, the pricing data starts from July 2010. This means that MVRV, which
requires market capitalization, is also available since July 2010.

**[Run in
explorer](<https://api.santiment.net/graphiql?query=%7B%0A%09getMetric(metric%3A%22transaction_volume%22)%20%7B%0A%20%20%20%20availableSince(slug%3A%22santiment%22)%0A%20%20%7D%0A%7D%0A>)**

### lastDatetimeComputedAt

> Note: This field is harder to understand. In most use cases it is not necessary to understand and know its value.

`lastDatetimeComputedAt` field is used to fetch the datetime for which the last data point for the metric/slug pair is
computed:

```graphql
{
  getMetric(metric: "daily_active_addresses") {
    lastDatetimeComputedAt(slug: "santiment")
  }
}
```

Knowledge of the last datetime computed is essential in some cases. The daily
metrics (metrics which have one value per day) are recomputed several times a
day as the day progresses, each time including more data than the previous time.

> **Note:** In many cases such incomplete days can lead to misleading data. For
> example the Daily Active Address can appear to be much lower than the usual,
> but this can be caused by the fact that they contain only half a day of data.
> By default the `includeIncompleteData` flag in `timeseriesData` is set to
> false. In this case the current day data will be seen only when the day
> finishes.

**[Run in
explorer](<https://api.santiment.net/graphiql?query=%7B%0A%20%20getMetric(metric%3A%20%22daily_active_addresses%22)%20%7B%0A%20%20%20%20lastDatetimeComputedAt(slug%3A%20%22santiment%22)%0A%20%20%7D%0A%7D%0A>)**

## Examples

**Timeseries Data Example**

```graphql
{
  getMetric(metric: "active_addresses_24h") {
    timeseriesData(
      slug: "bitcoin"
      from: "2023-05-01T08:00:00Z"
      to: "2023-05-02T08:00:00Z"
      interval: "30m") {
        datetime
        value
    }
  }
}
```

**[Run in Explorer](https://api.santiment.net/graphiql?variables=%7B%7D&query=%7B%0A++getMetric%28metric%3A+%22active_addresses_24h%22%29+%7B%0A++++timeseriesData%28%0A++++++slug%3A+%22bitcoin%22%0A++++++from%3A+%222023-05-01T08%3A00%3A00Z%22%0A++++++to%3A+%222023-05-02T08%3A00%3A00Z%22%0A++++++interval%3A+%2230m%22%29+%7B%0A++++++++datetime%0A++++++++value%0A++++%7D%0A++%7D%0A%7D%0A)**

**Timeseries Data Example**

```graphql
{
  getMetric(metric: "twitter_followers") {
    timeseriesData(
      slug: "maker"
      from: "2023-01-01T00:00:00Z"
      to: "2023-02-01T00:00:00Z"
      interval: "7d"
      transform: {type: "consecutive_differences"}) {
        datetime
        value
    }
  }
}
```

**[Run in Explorer](https://api.santiment.net/graphiql?query=%7B%0A++getMetric%28metric%3A+%22twitter_followers%22%29+%7B%0A++++timeseriesData%28%0A++++++slug%3A+%22maker%22%0A++++++from%3A+%222023-01-01T00%3A00%3A00Z%22%0A++++++to%3A+%222023-02-01T00%3A00%3A00Z%22%0A++++++interval%3A+%227d%22%0A++++++transform%3A+%7Btype%3A+%22consecutive_differences%22%7D%29+%7B%0A++++++++datetime%0A++++++++value%0A++++%7D%0A++%7D%0A%7D)**

**Aggregated Timeseries Data Example**

```graphql
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


**[Run in Explorer](https://api.santiment.net/graphiql?query=%7B%0A++getMetric%28metric%3A+%22daily_active_addresses%22%29+%7B%0A++++highest_daa%3A+aggregatedTimeseriesData%28%0A++++++++slug%3A+%22ethereum%22%0A++++++++from%3A+%222022-01-01T00%3A00%3A00Z%22%0A++++++++to%3A+%222023-01-01T00%3A00%3A00Z%22%0A++++++%09aggregation%3A+MAX%0A++++++%29%0A++++lowest_daa%3A+aggregatedTimeseriesData%28%0A++++++++slug%3A+%22ethereum%22%0A++++++++from%3A+%222022-01-01T00%3A00%3A00Z%22%0A++++++++to%3A+%222023-01-01T00%3A00%3A00Z%22%0A++++++%09aggregation%3A+MIN%0A++++++%29%0A++%7D%0A%7D)**

**Histogram Metric Example I**

```graphql
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

**[Run in Explorer](<https://api.santiment.net/graphiql?query=%7B%0A%20%20getMetric(metric%3A%20%22age_distribution%22)%20%7B%0A%20%20%20%20histogramData(slug%3A%20%22santiment%22%2C%20from%3A%20%222020-02-10T07%3A00%3A00Z%22%2C%20to%3A%20%222020-03-30T07%3A00%3A00Z%22%2C%20interval%3A%20%221d%22)%20%7B%0A%20%20%20%20%20%20values%20%7B%0A%20%20%20%20%20%20%20%20...%20on%20DatetimeRangeFloatValueList%20%7B%0A%20%20%20%20%20%20%20%20%20%20data%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20range%0A%20%20%20%20%20%20%20%20%20%20%20%20value%0A%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D&variables=>)**

The response result is a list that contains a 2-element range of datetimes and a
float value.

**Histogram Metric Example**
```graphql
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

**[Run in Explorer](<https://api.santiment.net/graphiql?query=%7B%0A%20%20getMetric(metric%3A%20%22price_histogram%22)%20%7B%0A%20%20%20%20histogramData(%0A%20%20%20%20%20%20slug%3A%20%22santiment%22%0A%20%20%20%20%20%20from%3A%20%222020-02-10T07%3A00%3A00Z%22%0A%20%20%20%20%20%20to%3A%20%222020-03-30T07%3A00%3A00Z%22%0A%20%20%20%20%20%20interval%3A%20%221d%22%0A%20%20%20%20)%20%7B%0A%20%20%20%20%20%20values%20%7B%0A%20%20%20%20%20%20%20%20...%20on%20FloatRangeFloatValueList%20%7B%0A%20%20%20%20%20%20%20%20%20%20data%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20range%0A%20%20%20%20%20%20%20%20%20%20%20%20value%0A%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D&variables=>)**

The response result is a list that contains a 2-element range of float (prices)
and a float value.
