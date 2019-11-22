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

| Bitcoin            | Ethereum           | ERC-20             | Ripple             | EOS                | EOS tokens         | Binance Chain      |
| ------------------ | ------------------ | ------------------ | ------------------ | ------------------ | ------------------ | ------------------ |
| :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: |

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

There are 2 fields that can be queried on `getMetric` and each of them has additional subfields: `metadata` and `timeseriesData`

### timeseriesData

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

#### Available metrics per project

The set of available metrics is not the same for each asset. We are trying to have all metrics for all assets, but this is not always possible. In order to find which are the available metrics for a given asset you can use the `projectBySlug` query, like this:

```js
{
  projectBySlug(slug: "santiment") {
    availableMetrics
  }
}
```

**[Run in explorer](<https://api.santiment.net/graphiql?query=%7B%0A%20%20projectBySlug(slug%3A%22santiment%22)%20%7B%0A%20%20%20%20availableMetrics%0A%20%20%7D%0A%7D>)**

#### availableSince

To fetch the date from which a given metric is available for a project:

```js
{
  getMetric(metric: "transaction_volume") {
    availableSince(slug: "santiment")
  }
}
```

A metric is usually available for a given asset since the creation of the contract/blockchain.

Exception to this statement is when pricing data is needed in order to calculate the metric, but we are missing pricing data. For example, Bitcoin is working since the beginning of 2009, but because there were no
exchanges and markets for over an year, the pricing data starts from July 2010. This means that MVRV, which requires market capitalization, is also available since July 2010.

**[Run in explorer](<https://api.santiment.net/graphiql?query=%7B%0A%09getMetric(metric%3A%22transaction_volume%22)%20%7B%0A%20%20%20%20availableSince(slug%3A%22santiment%22)%0A%20%20%7D%0A%7D%0A>)**

#### metadata

Each metric has metadata describing:

- What is the minimal resolution it can be fetched for
- What is the default aggregation which will be used when getting the metric for higher resolution.
- What are the supported aggregations for the metric
- Which are the projects the metric is available for

##### Minimal Resolution

Different queries are available with different granularities. The minimal interval you can get data for can be fetched by
executing:

```js
{
  getMetric(metric: "mvrv_usd"){
    metadata{
      minInterval
    }
  }
}
```

**[Run in explorer](<https://api.santiment.net/graphiql?query=%7B%0A%20%20getMetric(metric%3A%20%22mvrv_usd%22)%20%7B%0A%20%20%20%20metadata%20%7B%0A%20%20%20%20%20%20minInterval%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A>)**

##### Aggregation

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

To get the full metadata of a metric do the following:

```js
{
  getMetric(metric: "circulation_1d") {
    metadata {
      availableSlugs
      minInterval
      defaultAggregation
    }
  }
}
```

**[Run in explorer](<https://api.santiment.net/graphiql?query=%7B%0A%20%20getMetric(metric%3A%20%22circulation_1d%22)%20%7B%0A%20%20%20%20metadata%20%7B%0A%20%20%20%20%20%20availableSlugs%0A%20%20%20%20%20%20minInterval%0A%20%20%20%20%20%20defaultAggregation%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D>)**
