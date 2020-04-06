---
title: Metrics
author: Santiment Team
date: 2020-04-06
---

- [Overview](#overview)
- [All available metrics](#all-available-metrics)
- [All available assets](#all-available-assets)
- [Available metrics per project](#available-metrics-per-project)
- [Available projects per metrics](#available-projects-per-metric)
- [Queryable fields](#queryable-fields)
  - [timeseriesData](#timeseriesdata)
  - [aggregatedTimeseriesData](#aggregatedtimeseriesdata)
  - [histogramData](#histogramdata)
  - [metadata](#metadata)
  - [availableSince](#availablesince)
  - [lastDatetimeComputedAt](#lastdatetimecomputedat)

## Overview

The `getMetric` API gives a unified API for many different metrics across the whole universe of supported assets.
The query allows to get metadata, first/last datetime available and different metric representations - timeseries data, histogram data, aggregated timeseries data.

Supported blockchains:

| Bitcoin            | Ethereum           | ERC-20             | Ripple             | Binance Chain      |
| ------------------ | ------------------ | ------------------ | ------------------ | ------------------ |
| :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: |

| EOS                | EOS tokens         | Bitcoin Cash       | Litecoin           |
| ------------------ | ------------------ | ------------------ | ------------------ |
| :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: |

## All available metrics

The list of all available metrics can be fetched with this query:

```graphql
{
  getAvailableMetrics
}
```

Documentation for those metrics can be found on the [metrics page](/metrics)

## All available assets

Every metric is fetched for a given asset, identified by its `slug`.

Documentation about biw to fetch all available assets can be found [here](/glossary/#asset)

**[Run in Explorer](https://api.santiment.net/graphiql?query=%7B%0A%20%20getAvailableMetrics%0A%7D)**

## Available metrics per project

The set of available metrics is not the same for each asset. The following query shows three lists:

- All available metrics
- The subset of all available metrics that are timeseries metrics
- The subset of all available metrics that are histogram metrics

```graphql
{
  projectBySlug(slug: "ethereum") {
    availableMetrics
    availableTimeseriesMetrics
    availableHistogramMetrics
  }
}
```

**[Run in Explorer](<https://api.santiment.net/graphiql?query=%7B%0A%20%20projectBySlug(slug%3A%20%22ethereum%22)%20%7B%0A%20%20%20%20availableMetrics%0A%20%20%20%20availableTimeseriesMetrics%0A%20%20%20%20availableHistogramMetrics%0A%20%20%7D%0A%7D>)**

## Available projects per metric

The `getMetric` API supports a large list of assets identified by their slug. For a given metricthe list of available slugs can be fetched with this query:

```js
{
  getMetric(metric: "mvrv_usd"){
    metadata{
      availableSlugs
    }
  }
}
```

**[Run in explorer](<https://api.santiment.net/graphiql?query=%7B%0A%20%20getMetric(metric%3A%20%22mvrv_usd%22)%7B%0A%20%20%20%20metadata%7B%0A%20%20%20%20%20%20availableSlugs%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D>)**

## Queryable fields

The fields that can be queried on `getMetric`:

- `timeseriesData`
- `aggregatedTimeseriesData`
- `histogramData`
- `metadata`
- `availableSince`
- `lastDatetimeComputedAt`

### Aggregation

Some of the queryable fields accept an aggregation parameter.

When an `interval` bigger than `minInterval` is provided for a given metric, more than 1 data point values will be aggregated
into a single data point.

The aggregations types are:

- `SUM` - The sum of all the values
- `AVG` - The average of the values
- `MEDIAN` - The median of all the values
- `FIRST` - The first value
- `LAST` - The last value
- `MAX` - The max value
- `MIN` - The min value
- `ANY` - Any value falling in the larger interval. This is usually used when all values are expected to have the same result and you just want to take one of them.

> Note: The aggregation should be provided capitalized without quotes like this: `aggregation: MAX`

The following query fetches the default aggregation and all available aggregations per metric:

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

**[Run in explorer](<https://api.santiment.net/graphiql?query=%7B%0A%20%20getMetric(metric%3A%20%22daily_active_addresses%22)%20%7B%0A%20%20%20%20metadata%20%7B%0A%20%20%20%20%20%20defaultAggregation%0A%20%20%20%20%20%20availableAggregations%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A>)**

### timeseriesData

Timeseries data is a sequence taken at successive equally spaced points in time. For every point the API provides a `datetime` and a `value` field.

To fetch the values for a given metric, slug and time range you can use the `timeseriesData` subquery of the `getMetric` API.

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

- aggregation - This parameter is optional and if it is not provided - every metric has a default one that fits best. You can see the default aggregation function using the [metadata](#metadata) query.
- includeIncompleteData - In some cases if the day is not finished the current value can be misleading. For example fetching daily active addresses at 12pm would include only half a day of data and because of the that the data for that day could seem too low.
- transform - Apply a transformation to the timeseries data result.
  Available transformations:
  - `{type: "none"}` - Do not apply any transformation
  - `{type: "moving_average", moving_average_base: base}` - Apply a simple moving average. For every data point the value is calculated as the average of the last `base` intervals. In order to compute this internally it fetches enough data before `from` so it can be computed.
  - `{type: "changes"}` - For every data point change the value to the difference between the value and the previous value.

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

**[Run in explorer](<https://api.santiment.net/graphiql?query=%7B%0A%20%20getMetric(metric%3A%20%22dev_activity%22)%20%7B%0A%20%20%20%20timeseriesData(%0A%20%20%20%20%20%20slug%3A%20%22santiment%22%0A%20%20%20%20%20%20from%3A%20%222019-01-01T00%3A00%3A00Z%22%0A%20%20%20%20%20%20to%3A%20%222019-09-01T00%3A00%3A00Z%22%0A%20%20%20%20%20%20includeIncompleteData%3A%20true%0A%20%20%20%20%20%20interval%3A%20%227d%22%0A%20%20%20%20%20%20aggregation%3A%20SUM%0A%20%20%20%20%20%20transform%3A%20%7Btype%3A%20%22moving_average%22%2C%20moving_average_base%3A%203%7D)%20%7B%0A%20%20%20%20%20%20%20%20datetime%0A%20%20%20%20%20%20%20%20value%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D>)**

## aggregatedTimeseriesData

Aggregated timeseries data is used when you don't need many values separated apart by an even interval but just a single value. This can be used to fetch the ATH price or the highest daily active addresses ever as one of the many examples.

Parameters:

| Parameter   | Description                                                                  |
| ----------- | ---------------------------------------------------------------------------- |
| slug        | The slug of the project                                                      |
| from        | From which date to return the values in ISO8601 format                       |
| to          | Until which date to return the values in ISO8601 format                      |
| aggregation | The aggregation to be used when fetching data for longer intervals. Optional |

- aggregation - This parameter is optional and if it is not provided - every metric has a default one that fits best. You can see the default aggregation function using the [metadata](#metadata) query.

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

**[Run in Explorer](<https://api.santiment.net/graphiql?query=%7B%0A%20%20getMetric(metric%3A%20%22price_usd%22)%20%7B%0A%20%20%20%20highest_price%3A%20aggregatedTimeseriesData(%0A%20%20%20%20%20%20slug%3A%20%22santiment%22%0A%20%20%20%20%20%20from%3A%20%222017-07-01T00%3A00%3A00Z%22%0A%20%20%20%20%20%20to%3A%20%222020-04-01T00%3A00%3A00Z%22%0A%20%20%20%20%20%20aggregation%3A%20MAX%0A%20%20%20%20)%0A%20%20%7D%0A%7D>)**

## histogramData

A histogram is an approximate representation of the distribution of numerical or categorical data.

This is better understood with an example: For the period of January 2018 - January 2019, fetch the amount of Ether that was bought in every 100-dollar price range: $0-$100, $100-$200, ... , $1300-$1400.

To fetch the values for a given histogram metric, slug and time interval you can use the `histogramData` subquery of the `getMetric` API.

Parameters:

| Parameter | Description                                             |
| --------- | ------------------------------------------------------- |
| slug      | The slug of the project                                 |
| from      | From which date to return the values in ISO 8601 format |
| to        | Till which date to return the values in ISO 8601 format |
| interval  | The intervals that should be returned. Default is `1d`  |
| limit     | The number of results returned. Optional                |

Different histogram metrics could have different response types/formats.

### Example 1

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

The response result is a list that contains a 2-element range of datetimes and a float value.

Explanation:

For all Santiment tokens moved between January 6th, 2020 and January 7th, 2020, fetch when these tokens last moved. The result is two lists - of labels and of values. For every label there is a corresponding value. The following label `The amount of tokens last moved between 2018-11-30 00:00 Etc/UTC and 2018-12-01 00:00 Etc/UTC` has a corresponding value of `18645`, meaning that 18.6k of the tokens moved in the specified 1 day interval moved for the last time between November 30th, 2018 and December 1st, 2018.

### Example 2

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

The response result is a list that contains a 2-element range of float (prices) and a float value.

---

**[Run in explorer](<https://api.santiment.net/graphiql?query=%7B%0A%20%20getMetric(metric%3A%20%22age_distribution%22)%20%7B%0A%20%20%20%20histogramData(%0A%20%20%20%20%20%20slug%3A%20%22santiment%22%0A%20%20%20%20%20%20from%3A%20%222020-01-06T00%3A00%3A00Z%22%0A%20%20%20%20%20%20to%3A%20%222020-01-07T00%3A00%3A00Z%22%0A%20%20%20%20%20%20limit%3A%2020)%7B%0A%20%20%20%20%20%20%20%20labels%0A%20%20%20%20%20%20%20%20values%7B%0A%20%20%20%20%20%20%20%20%20%20...%20on%20FloatList%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20data%0A%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A>)**

- `availableMetrics` - The list of all metrics.
- `availableTimeseriesMetrics` - The subset of the available metrics that are fetchable via the `timeseriesData` field.
- `availableHisogramMetrics` - The subset of the available metrics that are fetchable via the `histogramData` field.

**[Run in explorer](<https://api.santiment.net/graphiql?query=%7B%0A%20%20projectBySlug(slug%3A%20%22santiment%22)%20%7B%0A%20%20%20%20availableMetrics%0A%20%20%20%20availableTimeseriesMetrics%0A%20%20%20%20availableHistogramMetrics%0A%20%20%7D%0A%7D>)**

## metadata

Each metric has metadata describing:

- What is the minimal interval it can be fetched for. Different metrics are available with different granularities.
- What is the default aggregation which will be used when getting the metric for higher resolution.
- What are the supported aggregations for the metric.
- Which are the projects the metric is available for.
- What is the type of the metrics - timeseries or histogram

```graphql
{
  getMetric(metric: "daily_active_addresses") {
    metadata {
      availableAggregations
      availableSlugs
      dataType
      defaultAggregation
      minInterval
    }
  }
}
```

**[Run in explorer](<https://api.santiment.net/graphiql?query=%7B%0A%20%20getMetric(metric%3A%20%22daily_active_addresses%22)%20%7B%0A%20%20%20%20metadata%20%7B%0A%20%20%20%20%20%20metric%0A%20%20%20%20%20%20availableAggregations%0A%20%20%20%20%20%20availableSlugs%0A%20%20%20%20%20%20dataType%0A%20%20%20%20%20%20defaultAggregation%0A%20%20%20%20%20%20minInterval%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A>)**

## availableSince

To fetch the datetime from which a given metric is available for an asset:

```graphql
{
  getMetric(metric: "transaction_volume") {
    availableSince(slug: "santiment")
  }
}
```

A metric is usually available for a given asset since the creation of the contract/blockchain.

Exception to this statement is when pricing data is needed in order to calculate the metric and the price data is missing. For example, Bitcoin is working since the beginning of 2009, but because there were no exchanges and markets for over an year, the pricing data starts from July 2010. This means that MVRV, which requires market capitalization, is also available since July 2010.

**[Run in explorer](<https://api.santiment.net/graphiql?query=%7B%0A%09getMetric(metric%3A%22transaction_volume%22)%20%7B%0A%20%20%20%20availableSince(slug%3A%22santiment%22)%0A%20%20%7D%0A%7D%0A>)**

## lastDatetimeComputedAt

To fetch the datetime for which the last data point for the metric/slug pair is computed:

```graphql
{
  getMetric(metric: "daily_active_addresses") {
    lastDatetimeComputedAt(slug: "santiment")
  }
}
```

Knowledge of the last datetime computed is essential in some cases. The daily metrics (metrics which have one value per day) are recomputed several times a day.

> Note: In many cases such incomplete days can lead to misleading data. For example the Daily Active Address can appear to be much lower than the usual, but this can be caused by the fact that they contain only half a day of data. By default the `includeIncompleteData` flag in `timeseriesData` is set to false. In this case the current day data will be seen only when the day finishes.

**[Run in explorer](<https://api.santiment.net/graphiql?query=%7B%0A%20%20getMetric(metric%3A%20%22daily_active_addresses%22)%20%7B%0A%20%20%20%20lastDatetimeComputedAt(slug%3A%20%22santiment%22)%0A%20%20%7D%0A%7D%0A>)**
