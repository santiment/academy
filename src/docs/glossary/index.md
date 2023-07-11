---
title: Glossary of API Terms
author: Ivan
---

This glossary provides definitions for terms frequently used throughout our documentation.

- [GraphQL-related](#graphql-related)
  - [Query](#query)
  - [Field](#field)
- [Santiment-related](#santiment-related)
  - [Metric](#metric)
  - [Asset](#asset)
  - [Slug](#slug)
  - [Interval](#interval)
  - [ISO8601](#iso8601)
  - [API Key](#api-key)

# GraphQL-related

More about all the GraphQL-related terms can be found on the [GraphQL documentation](https://graphql.org/learn/) website.

## query

A "query" in the context of [GraphQL](https://graphql.org/learn/) refers to a read operation. For instance, in the example below, `getAccessRestrictions` is the query. Essentially, in a GraphQL request, the `query` is the function that is invoked.

```graphql
{
  getAccessRestrictions {
    name
    type
    isRestricted
    restrictedFrom
    restrictedTo
  }
}
```

**[Run in explorer](https://api.santiment.net/graphiql?query=%7B%0A%20%20getAccessRestrictions%20%7B%0A%20%20%20%20name%0A%20%20%20%20type%0A%20%20%20%20isRestricted%0A%20%20%20%20restrictedFrom%0A%20%20%20%20restrictedTo%0A%20%20%7D%0A%7D)**

A single GraphQL request can accommodate multiple queries. In the following example, there are two `getMetric` queries. To avoid name collision in the returned result, each query is given an alias.

```graphql
{
  price_usd_min_interval: getMetric(metric: "price_usd") {
    metadata {
      minInterval
    }
  }
  nvt_min_interval: getMetric(metric: "nvt") {
    metadata {
      minInterval
    }
  }
}
```

**[Run in explorer](https://api.santiment.net/graphiql?query=%7B%0A%20%20price_usd_min_interval%3A%20getMetric(metric%3A%20%22price_usd%22)%20%7B%0A%20%20%20%20metadata%20%7B%0A%20%20%20%20%20%20minInterval%0A%20%20%20%20%7D%0A%20%20%7D%0A%20%20nvt_min_interval%3A%20getMetric(metric%3A%20%22nvt%22)%20%7B%0A%20%20%20%20metadata%20%7B%0A%20%20%20%20%20%20minInterval%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D)**

If different queries are used, aliases can be omitted. In the next example, the queries are `getMetric` and `currentUser`.

```graphql
{
  getMetric(metric: "price_usd") {
    metadata {
      minInterval
    }
  }
  currentUser {
    id
    username
    email
  }
}
```

**[Run in explorer](https://api.santiment.net/graphiql?query=%7B%0A%20%20getMetric(metric%3A%20%22price_usd%22)%20%7B%0A%20%20%20%20metadata%20%7B%0A%20%20%20%20%20%20minInterval%0A%20%20%20%20%7D%0A%20%20%7D%0A%20%20currentUser%20%7B%0A%20%20%20%20id%0A%20%20%20%20username%0A%20%20%20%20email%0A%20%20%7D%0A%7D)**

A query can either return the specified result directly or provide a set of fields that the user can choose from.

## Field

The term refers to a [GraphQL field](https://graphql.org/learn/queries/#fields). Fields are used to specify which parts of a complex object should be returned in a query. The following examples demonstrate the use of different fields in the same `getMetric` query.

In the first example, the `timeseriesData` field is used. The `datetime` and `value` are also fields. This illustrates that fields can either have arguments or not.

```graphql
{
  getMetric(metric: "active_addresses_24h") {
    timeseriesData(
      slug: "ethereum"
      from: "2019-01-01T00:00:00Z"
      to: "2019-01-01T03:00:00Z"
      interval: "30m"
    ) {
      datetime
      value
    }
  }
}
```

**[Run in explorer](https://api.santiment.net/graphiql?query=%7B%0A%20%20getMetric(metric%3A%20%22active_addresses_24h%22)%20%7B%0A%20%20%20%20timeseriesData(%0A%20%20%20%20%20%20slug%3A%20%22ethereum%22%0A%20%20%20%20%20%20from%3A%20%222019-01-01T00%3A00%3A00Z%22%0A%20%20%20%20%20%20to%3A%20%222019-01-01T03%3A00%3A00Z%22%0A%20%20%20%20%20%20interval%3A%20%2230m%22%0A%20%20%20%20)%20%7B%0A%20%20%20%20%20%20datetime%0A%20%20%20%20%20%20value%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D)**

In the second example, the `aggregatedTimeseriesData` field is used.

```graphql
{
  getMetric(metric: "active_addresses_24h") {
    aggregatedTimeseriesData(
      slug: "ethereum"
      from: "2019-01-01T00:00:00Z"
      to: "2019-01-01T03:00:00Z"
      aggregation: AVG
    )
  }
}
```

**[Run in explorer](https://api.santiment.net/graphiql?query=%7B%0A%20%20getMetric(metric%3A%20%22active_addresses_24h%22)%20%7B%0A%20%20%20%20aggregatedTimeseriesData(%0A%20%20%20%20%20%20slug%3A%20%22ethereum%22%0A%20%20%20%20%20%20from%3A%20%222019-01-01T00%3A00%3A00Z%22%0A%20%20%20%20%20%20to%3A%20%222019-01-01T03%3A00%3A00Z%22%0A%20%20%20%20%20%20aggregation%3A%20AVG%0A%20%20%20%20)%0A%20%20%7D%0A%7D)**

# Santiment-related

## Metric

In the context of Santiment's API, a metric is a term with a specific meaning. It refers to a set of data points that carry a particular significance. There are two types of metrics: [timeseries metrics](/metrics/details/data-type#timeseries-data) and [histogram metrics](/metric/details/data_type#histogram-data).

Consider the following example where `nvt` is the metric and `getMetric` is the query.

```graphql
{
  getMetric(metric: "nvt") {
    timeseriesData(
      slug: "santiment"
      from: "2019-01-01T00:00:00Z"
      to: "2019-09-01T00:00:00Z"
      includeIncompleteData: true
      interval: "7d"
    ) {
      datetime
      value
    }
  }
}
```

**[Run in explorer](https://api.santiment.net/graphiql?query=%7B%0A%20%20getMetric(metric%3A%20%22nvt%22)%20%7B%0A%20%20%20%20timeseriesData(%0A%20%20%20%20%20%20slug%3A%20%22santiment%22%0A%20%20%20%20%20%20from%3A%20%222019-01-01T00%3A00%3A00Z%22%0A%20%20%20%20%20%20to%3A%20%222019-09-01T00%3A00%3A00Z%22%0A%20%20%20%20%20%20includeIncompleteData%3A%20true%0A%20%20%20%20%20%20interval%3A%20%227d%22%0A%20%20%20%20)%20%7B%0A%20%20%20%20%20%20datetime%0A%20%20%20%20%20%20value%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D)**

In some instances, the query and the metric are identical. In the next example, `historicalBalance` is both the query and the metric. This scenario occurs when a query fetches exactly one metric (the metric argument is implicit), unlike `getMetric` where the metric argument is explicitly passed with the `metric` argument.

```graphql
{
  historicalBalance(
    selector: { slug: "santiment", infrastructure: "ETH" }
    address: "0xA0D8F33Ef9B44DaAE522531DD5E7252962b09207"
    from: "2019-01-01T00:00:00Z"
    to: "2019-09-01T00:00:00Z"
    interval: "30d"
  ) {
    datetime
    balance
  }
}
```

**[Run in explorer](https://api.santiment.net/graphiql?query=%7B%0A%20%20historicalBalance(%0A%20%20%20%20selector%3A%20%7B%20slug%3A%20%22santiment%22%2C%20infrastructure%3A%20%22ETH%22%20%7D%0A%20%20%20%20address%3A%20%220xA0D8F33Ef9B44DaAE522531DD5E7252962b09207%22%0A%20%20%20%20from%3A%20%222019-01-01T00%3A00%3A00Z%22%0A%20%20%20%20to%3A%20%222019-09-01T00%3A00%3A00Z%22%0A%20%20%20%20interval%3A%20%2230d%22%0A%20%20)%20%7B%0A%20%20%20%20datetime%0A%20%20%20%20balance%0A%20%20%7D%0A%7D)**

## Asset  

An asset refers to any cryptocurrency or crypto token that can be associated with a specific price. Examples of assets include Bitcoin, Ethereum, and Santiment tokens. For more detailed information, please visit our [glossary on assets](/glossary/asset). 

## Slug

A slug is a unique string that identifies an [asset](/glossary/asset). You can find the slug of various projects, along with their names, tickers, and other data, by using the [allProjects API](https://api.santiment.net/graphiql?query=%7B%0A%20%20allProjects%20%7B%0A%20%20%20%20slug%0A%20%20%20%20name%0A%20%20%20%20ticker%0A%20%20%20%20infrastructure%0A%20%20%20%20mainContractAddress%0A%20%20%7D%0A%7D%0A).

## Interval

An interval is a representation of time intervals such as 5 minutes, 12 hours, 10 days, or 4 weeks. There are two types of interval representations: fixed time intervals and functions.

A fixed time interval is a string that begins with a number and is followed by one of these suffixes:

- `s` - second
- `m` - minute
- `h` - hour
- `d` - day
- `w` - week

Here are examples of intervals:

- 5 minutes - `5m`
- 12 hours - `12h`
- 10 days - `10d`
- 4 weeks - `4w`

> **Note:** There is no suffix for specifying months because a month does not contain a fixed number of days.

The second type of interval representation is through function names. Functions can achieve two main objectives that fixed intervals cannot:

- Functions can create non-fixed interval ranges, such as months, which can have between 28 and 31 days.
- Functions can change the alignment. For example, if the requirement is not just 7 days, but also for the time intervals to start on Monday or Sunday.

The following functions are supported:

- toStartOfHour
- toStartOfDay
- toMonday
- toStartOfWeek (aligns dates on Sundays)
- toStartOfMonth
- toStartOfQuarter
- toStartOfYear

Intervals are used when fetching timeseries data. If the raw data is available at 5-minute intervals but you want to fetch it daily, you should provide `interval: "1d"` as a parameter. In this case, the default aggregation will be applied to all 288 5-minute data points in a day to compute the value for the entire day. The type of aggregation varies based on the metric. In some cases, taking the average or the last value is required (price), while in other cases, taking the sum of all values is necessary (transaction volume), and so on.

## ISO8601

The API uses the ISO8601 format for date and time. The format is structured as follows: `<year>-<month>-<day>T<hour>:<minute>:<second>Z`. 

For instance, January 10th, 2019 at 12:34:56 would be represented as `2019-01-10T12:34:56Z`.

## API Key

Your API key is essential for accessing the premium features provided by our API. For more detailed information, please refer to the [API Authentication](/sanapi/accessing-the-api/#authentication) section. 

