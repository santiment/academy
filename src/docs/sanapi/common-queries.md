---
title: Common Santiment API GraphQL Queries
author: Santiment Team
date: 2024-07-01
---

In this article, we will explore some of the most frequently used queries in the SanAPI.

### Retrieve data for one asset 
### Retrieve data for multiple assets with a single API call

This query allows you to obtain data for a group of assets in a single request. You can specify the assets by providing a list of their slugs using the `slugs` selector.

```graphql
{ 
  getMetric(metric: "price_usd") {
    timeseriesDataPerSlug(
      from: "utc_now-1d"
      to: "utc_now"
      interval: "15m"
      selector: {slugs: ["ethereum","tezos","eos","color-platform","enecuum","slink"]})
      {
        datetime
        data {
          slug
          value
        }
      }
  }
}
```

You can test this query in the [GraphiQL Explorer](https://api.santiment.net/graphiql?variables=%7B%7D&query=%7B%20getMetric(metric%3A%20%22price_usd%22)%20%7B%0A%20%20%20%20timeseriesDataPerSlug(%0A%20%20%20%20%20%20from%3A%20%22utc_now-1d%22%0A%20%20%20%20%20%20to%3A%22utc_now%22%0A%09%09%09interval%3A%20%2215m%22%0A%20%20%20%20%20%20selector%3A%20%7Bslugs%3A%20%5B%22ethereum%22%2C%22tezos%22%2C%22eos%22%2C%22color-platform%22%2C%22enecuum%22%2C%22slink%22%5D%7D)%0A%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20data%20%7B%0A%20%20%20%20%20%20%20%20%20%20slug%0A%20%20%20%20%20%20%20%20%20%20value%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20datetime%0A%20%20%20%20%20%20%7D%0A%7D%0A%7D).

> **Note:** If you want to retrieve the most recent data, you can use "utc_now" as the value for the `to` argument, instead of specifying a date.

### Retrieving Prices at 1-Second Intervals

Only the price data with source `cryptocompare` is available at such small intervals.

If you need to fetch the price of a cryptocurrency that changes every second within a specific time frame, you can do so using our API. 

Here is an example of how to retrieve the price of Bitcoin in USD at 1-second intervals for the past minute:

```graphql
{
  getMetric(metric: "price_usd") {
    timeseriesData(
      selector: { slug: "bitcoin" source: "cryptocompare" }
      from: "utc_now-1m"
      to: "utc_now"
      interval: "1s"
      cachingParams: {baseTtl: 1, maxTtlOffset: 1}
    ) {
      datetime
      value
    }
  }
}
```

You can test this query in the [GraphiQL Explorer](https://api.santiment.net/graphiql?query=%7B%0A%20%20getMetric(metric%3A%20%22price_usd%22)%20%7B%0A%20%20%20%20timeseriesData(%0A%20%20%20%20%20%20selector%3A%20%7B%20slug%3A%20%22bitcoin%22%20source%3A%20%22cryptocompare%22%20%7D%0A%20%20%20%20%20%20from%3A%20%22utc_now-1m%22%0A%20%20%20%20%20%20to%3A%20%22utc_now%22%0A%20%20%20%20%20%20interval%3A%20%221s%22%0A%20%20%20%20%20%20cachingParams%3A%20%7BbaseTtl%3A%201%2C%20maxTtlOffset%3A%201%7D%0A%20%20%20%20)%20%7B%0A%20%20%20%20%20%20datetime%0A%20%20%20%20%20%20value%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D).

### Aggregate Data for Multiple Assets

If you need to retrieve the most recent MVRV data for multiple assets, such as Ethereum, Bitcoin, and Aave, you can accomplish this with a single query. The following is a simple solution:

```graphql
{
  allProjects(
    selector: {
      baseProjects: {
        slugs: ["ethereum", "bitcoin", "aave"]
      }
    }) {
      slug
      aggregatedTimeseriesData(
        metric: "mvrv_usd_intraday_365d"
        from: "utc_now-1d"
        to: "utc_now"
        aggregation: LAST)
  }
}
```

You can test this query in the [GraphiQL Explorer](https://api.santiment.net/graphiql?variables=%7B%7D&query=%7B%0A%20%20allProjects(selector%3A%20%7BbaseProjects%3A%20%7Bslugs%3A%20%5B%22ethereum%22%2C%20%22bitcoin%22%2C%20%22aave%22%5D%7D%7D)%20%7B%0A%20%20%20%20slug%0A%20%20%20%20aggregatedTimeseriesData(metric%3A%20%22mvrv_usd_intraday_365d%22%2C%20from%3A%20%22utc_now-1d%22%2C%20to%3A%20%22utc_now%22%2C%20aggregation%3A%20LAST)%0A%0A%20%20%7D%0A%7D%0A).


### Get an aggregated value for each asset

The example below returns 3 values for each asset:
- The latest known price in the last 24 hours, `null` if no new price is known;
- The highest price of the past 7 days;
- The total [development activity](/metrics/development-activity/development-activity/) for the past 30 days.

```graphql
{
  allProjects(page: 1 pageSize: 100) {
    slug
    name
    ticker
    latestPrice: aggregatedTimeseriesData(metric: "price_usd" aggregation: LAST from: "utc_now-1d" to: "utc_now")
    highestWeeklyPrice: aggregatedTimeseriesData(metric: "price_usd" aggregation: MAX from: "utc_now-7d" to: "utc_now")
    devActivity30d: aggregatedTimeseriesData(metric: "dev_activity-1d" aggregation: SUM from: "utc_now-30d" to: "utc_now")
  }
}
```
[Run the example](https://api.santiment.net/graphiql?query=%7B%0A%20%20allProjects%20%7B%0A%20%20%20%20slug%0A%20%20%20%20name%0A%20%20%20%20ticker%0A%20%20%20%20latestPrice%3A%20aggregatedTimeseriesData(metric%3A%20%22price_usd%22%20aggregation%3A%20LAST%20from%3A%20%22utc_now-1d%22%20to%3A%20%22utc_now%22)%0A%20%20%20%20highestWeeklyPrice%3A%20aggregatedTimeseriesData(metric%3A%20%22price_usd%22%20aggregation%3A%20MAX%20from%3A%20%22utc_now-7d%22%20to%3A%20%22utc_now%22)%0A%20%20%20%20devActivity30d%3A%20aggregatedTimeseriesData(metric%3A%20%22dev_activity-1d%22%20aggregation%3A%20SUM%20from%3A%20%22utc_now-30d%22%20to%3A%20%22utc_now%22)%0A%20%20%7D%0A%7D%0A)

### Filter and order assets and get data for them

The API allows for very complex queries that filter, order and paginate projects. The example below:
- Runs on the watchlist `stablecoins` (one can use their own watchlists) with the addition of `santiment`, `bitcoin` and `ethereum`;
- Keeps only those projects that have at least 1000 daily active addresses on average for the last 7 days;
- Orders the result in descending order using the current daily active addresses;
- Returns the first 10 projects according to these filter and orderding rules. 

```graphql
{
  allProjects(
    selector: {
      baseProjects: [{ watchlistSlug: "stablecoins" }, { slugs: ["santiment", "bitcoin", "ethereum"]}]
      filters: [
        {
          metric: "daily_active_addresses"
          from: "utc_now-7d"
          to: "utc_now"
          aggregation: AVG
          operator: GREATER_THAN
          threshold: 1000
        }
      ]
      orderBy: {
        metric: "daily_active_addresses"
        from: "utc_now-3d"
        to: "utc_now"
        aggregation: LAST
        direction: DESC
      }
      pagination: { page: 1, pageSize: 10 }
    }
  ) {
    slug
    avgDaa7d: aggregatedTimeseriesData(
      metric: "daily_active_addresses"
      from: "utc_now-7d"
      to: "utc_now"
      aggregation: AVG
    )
  }
}
```
[Run the example](https://api.santiment.net/graphiql?query=%7B%0A%20%20allProjects(%0A%20%20%20%20selector%3A%20%7B%0A%20%20%20%20%20%20baseProjects%3A%20%5B%7B%20watchlistSlug%3A%20%22stablecoins%22%20%7D%2C%20%7B%20slugs%3A%20%5B%22santiment%22%2C%20%22bitcoin%22%2C%20%22ethereum%22%5D%7D%5D%0A%20%20%20%20%20%20filters%3A%20%5B%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20metric%3A%20%22daily_active_addresses%22%0A%20%20%20%20%20%20%20%20%20%20from%3A%20%22utc_now-7d%22%0A%20%20%20%20%20%20%20%20%20%20to%3A%20%22utc_now%22%0A%20%20%20%20%20%20%20%20%20%20aggregation%3A%20AVG%0A%20%20%20%20%20%20%20%20%20%20operator%3A%20GREATER_THAN%0A%20%20%20%20%20%20%20%20%20%20threshold%3A%201000%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%5D%0A%20%20%20%20%20%20orderBy%3A%20%7B%0A%20%20%20%20%20%20%20%20metric%3A%20%22daily_active_addresses%22%0A%20%20%20%20%20%20%20%20from%3A%20%22utc_now-3d%22%0A%20%20%20%20%20%20%20%20to%3A%20%22utc_now%22%0A%20%20%20%20%20%20%20%20aggregation%3A%20LAST%0A%20%20%20%20%20%20%20%20direction%3A%20DESC%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20pagination%3A%20%7B%20page%3A%201%2C%20pageSize%3A%20100%20%7D%0A%20%20%20%20%7D%0A%20%20)%20%7B%0A%20%20%20%20slug%0A%20%20%20%20avgDaa7d%3A%20aggregatedTimeseriesData(%0A%20%20%20%20%20%20metric%3A%20%22daily_active_addresses%22%0A%20%20%20%20%20%20from%3A%20%22utc_now-7d%22%0A%20%20%20%20%20%20to%3A%20%22utc_now%22%0A%20%20%20%20%20%20aggregation%3A%20AVG%0A%20%20%20%20)%0A%20%20%7D%0A%7D)

### Retrieve All Available Slugs for a Specific Metric

```graphql
{
  getMetric(metric: "mcd_liquidation") {
    metadata {
      availableSlugs
    }
  }
}
```

You can test this query in the [GraphiQL Explorer](https://api.santiment.net/graphiql?variables=%7B%7D&query=%7B%0A%20%20getMetric(metric%3A%20%22mcd_liquidation%22)%20%7B%0A%20%20%20%20metadata%20%7B%0A%20%20%20%20%20%20availableSlugs%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A).

### Retrieve Current Prices for All Assets 

```graphql
{
  allProjects {
    slug
    price: aggregatedTimeseriesData(
      metric: "price_usd"
      from: "utc_now-1d"
      to: "utc_now"
      aggregation: LAST)
  }
}
```

You can test this query in the [GraphiQL Explorer](https://api.santiment.net/graphiql?query=%7B%0A%20%20allProjects%20%7B%0A%20%20%20%20slug%0A%20%20%20%20price%3A%20aggregatedTimeseriesData(%0A%20%20%20%20%20%20metric%3A%20%22price_usd%22%0A%20%20%20%20%20%20from%3A%20%22utc_now-1d%22%0A%20%20%20%20%20%20to%3A%20%22utc_now%22%0A%20%20%20%20%20%20aggregation%3A%20LAST)%0A%20%20%7D%0A%7D%0A).

### Retrieve Current Trending Words

```graphql
{
  getTrendingWords(
    from: "utc_now-3h"
    to: "utc_now"
    size: 20
    interval: "1h") {
      datetime
      topWords {
        word
        score
      }
  }
}
```

You can test this query in the [GraphiQL Explorer](https://api.santiment.net/graphiql?query=%7B%0A%20%20getTrendingWords(from%3A%20%22utc_now-3h%22%2C%20to%3A%20%22utc_now%22%2C%20size%3A%2020%2C%20interval%3A%20%221h%22)%20%7B%0A%20%20%20%20datetime%0A%20%20%20%20topWords%20%7B%0A%20%20%20%20%20%20word%0A%20%20%20%20%20%20score%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A).

