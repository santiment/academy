---
title: Glossary
author: Ivan
---

Find the meaning of terms used throughout the documentation

- [query](#query)
- [metric](#metric)
- [asset](#asset)
- [slug](#slug)
- [interval](#interval)
- [ISO8601](#iso8601)
- [API key](#api-key)

## query

The term refers to the [GraphQL query](https://graphql.org/learn/queries/) and
means exactly that - a read operation. In the following example
`getAccessRestrictions` is the query. Broadly speaking, in a GraphQL request the
`query` is the "name of the function" invoked:

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

One GraphQL request can batch more than one query. The following example has two
`getMetric` queries and they are given an alias name so name collision is
avoided in the returned result:

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

If only different queries are used the aliases can be avoided. In the next
example the queries are `getMetric` and `currentUser`:

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

## metric

A term with a specific meaning in the context of Santiment's API. A metric is a
set of data points with a specific meaning. There are two types of metrics:
[timeseries metrics](/metrics/details/data-type#timeseries-data) and [histogram
metrics](/metric/details/data_type#histogram-data)

In the following example `nvt` is the metric, `getMetric` is the query.

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

In some cases the query and the metric are the same. In the next example
`historicalBalance` is the query, but the metric is also `historical balance`.
This is the case where a query fetches exactly one metric (metric argument is
implicit), which is not the case of `getMetric` where the metric argument is
explicitly passed with the `metric` argument.

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

## asset

An asset is any cryptocurrency or crypto token which can be associated with a
price. Example of assets are Bitcoin, Ethereum and Santiment tokens. More
detailed info can be found [here](/glossary/asset)

## slug

A string uniquely identifying identifying an [asset](/glossary/asset). You can
find the slug of the projects, alongside their names, tickers (and much more
data) by using the [allProjects
API](https://api.santiment.net/graphiql?query=%7B%0A%20%20allProjects%20%7B%0A%20%20%20%20slug%0A%20%20%20%20name%0A%20%20%20%20ticker%0A%20%20%20%20infrastructure%0A%20%20%20%20mainContractAddress%0A%20%20%7D%0A%7D%0A).

## interval

A representation of time intervals like 5 minutes, 12 hours, 10 days, 4 weeks.
The interval supports two distinctive representation types: fixed time interval
and functions. The fixed interval is a string starting with a number and
followed by one of the suffixes:

- `s` - second
- `m` - minute
- `h` - hour
- `d` - day
- `w` - week

These are the intervals corresponding to the given examples:

- 5 minutes - `5m`
- 12 hours - `12h`
- 10 days - `10d`
- 4 weeks - `4w`

> **Note** that there is no suffix for specifying months due to months not
> containing a fixed amount of days.

The second representation of intervals is by function names. The functions can
achieve two main goals, that fixed intervals cannot:
- The function can create not-fixed interval ranges like months - months have 
  between 28 and 31 days.
- The function can change the alignment. If the requirement is not just 7 days,
  but also the time intervals to start on Monday or Sunday.

The following functions are supported:
- toStartOfHour
- toStartOfDay
- toMonday
- toStartOfWeek (aligns dates on Sundays)
- toStartOfMonth
- toStartOfQuarter
- toStartOfYear

An interval is used when fetching timeseries data. If the raw data is available
at 5 minute intervals but you want to fetch it daily, `interval: "1d"` should be
provided as parameter. In this case the default aggregation will be applied on
all 288 5-minute data points in a day to compute the value for the whole
day. This aggregation varies based on the metric - in some cases taking the
average or the last value is required (price), in other cases taking the sum of
all values (transaction volume), etc.

## ISO8601

The date time format used in the API. The format is
`<year>-<month>-<day>T<hour>:<minute>:<second>Z`. For example Jan 10th 2019
12:34:56 is `2019-01-10T12:34:56Z`

## API key

Your API for accessing the premium features in the API. See the `Authentication`
section for more details
