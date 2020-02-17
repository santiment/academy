---
title: "API Reference"
author: "Santiment team"
date: "2019-09-20"
---

# Available Queries

## The `getMetric` Query

- **Tier**: depends on the metric requested
- **Max lag**: 6 hours
- **Max resolution**: depends on the metric. Most of the metrics are daily

The `getMetric` API gives a unified API for many different metrics across the whole universe of supported assets.
The query allows to get metadata about a given metric and asset, as well as fetch the values of the metric in a
unified way.

> Note:
>
> The metrics are updated 4 times a day at 6 hour intervals. We are working on reducing this interval.

Supported assets:

| Bitcoin            | Ethereum           | ERC-20             | Ripple             | Binance Chain      |
| ------------------ | ------------------ | ------------------ | ------------------ | ------------------ |
| :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: |

| EOS                | EOS tokens         | Bitcoin Cash       | Litecoin           |
| ------------------ | ------------------ | ------------------ | ------------------ |
| :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: |

## timeseriesData

Timeseries data is is a sequence taken at successive equally spaced points in time. For every point the API provides a `datetime` and a `value` fields.

To fetch the values for a given metric, slug and time interval you can use the `timeseriesData` subquery of the `getMetric` API.

Parameters:

| Parameter   | Description                                                                  |
| ----------- | ---------------------------------------------------------------------------- |
| slug        | The slug of the project                                                      |
| from        | From which date to return the values in ISO 8601 format                      |
| to          | Till which date to return the values in ISO 8601 format                      |
| interval    | The intervals that should be returned. Default is `1d`, which is daily       |
| aggregation | The aggregation to be used when fetching data for longer intervals. Optional |

The `aggregation` parameter is optional and if not provided - every metric has a default one that fits best. You can see the default aggregation function using the [metadata](#metadata) query.

Example:

```js
{
  getMetric(metric: "transaction_volume") {
    timeseriesData(
      slug: "santiment"
      from: "2019-01-01T00:00:00Z"
      to: "2019-09-01T00:00:00Z"
      interval: "7d"
      aggregation: SUM) {
        datetime
        value
    }
  }
}
```

**[Run in explorer](<https://api.santiment.net/graphiql?query=%7B%0A%09getMetric(metric%3A%22transaction_volume%22)%20%7B%0A%20%20%20%20timeseriesData(slug%3A%22santiment%22%2C%20from%3A%222019-01-01T00%3A00%3A00Z%22%2C%20to%3A%222019-09-01T00%3A00%3A00Z%22%2C%20interval%3A%227d%22%2C%20aggregation%3ASUM)%20%7B%0A%20%20%20%20%20%20datetime%0A%20%20%20%20%20%20value%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A>)**

If you change the `aggregation` parameter to `AVG` it will return the average transaction volume over each 7 day interval. You can see how this API can be quite powerful and flexible.

## histogramData

A histogram is an approximate representation of the distribution of numerical or categorical data.

This is better understood with an example: For the period of January 2018 - January 2019, fetch the amount of ether that was bought in every 100-dollar price range: $0-$100, $100-$200, ... , $1300-$1400.

To fetch the values for a given histogram metric, slug and time interval you can use the `histogramData` subquery of the `getMetric` API.

Parameters:

| Parameter | Description                                                            |
| --------- | ---------------------------------------------------------------------- |
| slug      | The slug of the project                                                |
| from      | From which date to return the values in ISO 8601 format                |
| to        | Till which date to return the values in ISO 8601 format                |
| interval  | The intervals that should be returned. Default is `1d`, which is daily |
| limit     | The number of results returned. Optional                               |

Example:

```js
{
  getMetric(metric: "age_distribution") {
    histogramData(
      slug: "santiment"
      from: "2020-01-06T00:00:00Z"
      to: "2020-01-07T00:00:00Z"
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

Explanation: For all santiment tokens moved between January 6tha, 2020 and January 7th, 2020, fetch when these tokens last moved. The result is two lists - of labels and of values. For every label there is a corresponding value. The following label `The amount of tokens last moved between 2018-11-30 00:00 Etc/UTC and 2018-12-01 00:00 Etc/UTC` has a corresponding value of `18645`, meaning that 18.6k of the tokens moved in the specified 1 day interval moved for the last time between November 30th, 2018 and December 1st, 2018.

**[Run in explorer](<https://api.santiment.net/graphiql?query=%7B%0A%20%20getMetric(metric%3A%20%22age_distribution%22)%20%7B%0A%20%20%20%20histogramData(%0A%20%20%20%20%20%20slug%3A%20%22santiment%22%0A%20%20%20%20%20%20from%3A%20%222020-01-06T00%3A00%3A00Z%22%0A%20%20%20%20%20%20to%3A%20%222020-01-07T00%3A00%3A00Z%22%0A%20%20%20%20%20%20limit%3A%2020)%7B%0A%20%20%20%20%20%20%20%20labels%0A%20%20%20%20%20%20%20%20values%7B%0A%20%20%20%20%20%20%20%20%20%20...%20on%20FloatList%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20data%0A%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A>)**

## Available projects per metric

The `getMetric` API supports a large list of assets identified by their slug. For a given metrics
you can fetch the list of available slugs with this query:

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

There are 5 fields that can be queried on `getMetric`: `metadata`, `timeseriesData`, `histogramData`, `availableSince` and `lastDatetimeComputedAt`.
Some of them has additional subfields: `metadata`, `timeseriesData` and `histogramData`

## Available metrics per project

The set of available metrics is not the same for each asset. In order to find which are the available metrics for a given asset you can use the `projectBySlug` query, like this:

```graphql
{
  projectBySlug(slug: "santiment") {
    availableMetrics
    availableTimeseriesMetrics
    availableHistogramMetrics
  }
}
```

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

To fetch the date from which a given metric is available for a project:

```js
{
  getMetric(metric: "transaction_volume") {
    availableSince(slug: "santiment")
  }
}
```

A metric is usually available for a given asset since the creation of the contract/blockchain.

Exception to this statement is when pricing data is needed in order to calculate the metric, the price data is missing. For example, Bitcoin is working since the beginning of 2009, but because there were no
exchanges and markets for over an year, the pricing data starts from July 2010. This means that MVRV, which requires market capitalization, is also available since July 2010.

**[Run in explorer](<https://api.santiment.net/graphiql?query=%7B%0A%09getMetric(metric%3A%22transaction_volume%22)%20%7B%0A%20%20%20%20availableSince(slug%3A%22santiment%22)%0A%20%20%7D%0A%7D%0A>)**

## lastDatetimeComputedAt

To fetch the datetime for which the last data point was computed:

```js
{
  getMetric(metric: "daily_active_addresses") {
    lastDatetimeComputedAt(slug: "santiment")
  }
}
```

**[Run in explorer](<https://api.santiment.net/graphiql?query=%7B%0A%20%20getMetric(metric%3A%20%22daily_active_addresses%22)%20%7B%0A%20%20%20%20lastDatetimeComputedAt(slug%3A%20%22santiment%22)%0A%20%20%7D%0A%7D%0A>)**

### Aggregation

When an `interval` bigger than `minInterval` is provided for a given metric more than 1 data point values will be aggregated
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

The following query fetches the default aggregation:

```js
{
  getMetric(metric: "daily_active_addresses") {
    metadata {
      defaultAggregation
    }
  }
}
```

**[Run in explorer](<https://api.santiment.net/graphiql?query=%7B%0A%20%20getMetric(metric%3A%20%22daily_active_addresses%22)%20%7B%0A%20%20%20%20metadata%20%7B%0A%20%20%20%20%20%20defaultAggregation%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D>)**
