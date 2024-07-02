---
title: Common Santiment API GraphQL Queries
author: Santiment Team
date: 2024-07-01
---

# Overview

In this article we explore some of the most frequently used queries in the SanAPI.

### Retrieve data for one asset 

This query obtains the daily active addresses for bitcoin for a period of 30 days.

```graphql
{
  getMetric(metric: "daily_active_addresses"){
    timeseriesData(
      selector: {slug: "bitcoin"}
      from: "2024-01-01T00:00:00Z"
      to: "2024-01-31T23:59:59Z"
      interval: "1d"){
        datetime
        value
    }
  }
}
```

### Retrieve data for one asset, apply some transformation - I

The development activity is very sensitive to day/night cycles, as well as public holidays or vacation days taken by the team.
To smooth the data we can apply a moving average transformation to the data direclty in the API call.

```graphql
{
  getMetric(metric: "dev_activity") {
    timeseriesData(
      slug: "ethereum"
      from: "utc_now-365d"
      to: "utc_now"
      interval: "7d"
      transform: {
       type: "moving_average"
       movingAverageBase: 4
      }) {
        datetime
        value
    }
  }
}
```

You can test this query in the [GraphiQL Explorer](https://api.santiment.net/graphiql?query=%7B%0A%20%20getMetric(metric%3A%20%22dev_activity%22)%20%7B%0A%20%20%20%20timeseriesData(%0A%20%20%20%20%20%20slug%3A%20%22ethereum%22%0A%20%20%20%20%20%20from%3A%20%22utc_now-365d%22%0A%20%20%20%20%20%20to%3A%20%22utc_now%22%0A%20%20%20%20%20%20interval%3A%20%227d%22%0A%20%20%20%20%20%20transform%3A%20%7B%0A%20%20%20%20%20%20%20type%3A%20%22moving_average%22%0A%20%20%20%20%20%20%20movingAverageBase%3A%204%0A%20%20%20%20%20%20%7D)%20%7B%0A%20%20%20%20%20%20%20%20datetime%0A%20%20%20%20%20%20%20%20value%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D&variables=%7B%7D).

### Retrieve data for one asset, apply some transformation - II

The `twitter_followers` metric shows the total number of twitter followers of
the handle of a project. If we apply the `consecutive_difference` we can
directly see how the total number of followers changes week by week (because we
use 7 day interval). The values show how many followers the project gained or
lost for each time period. 

```graphql
{
  getMetric(metric: "twitter_followers") {
    timeseriesData(
      slug: "ethereum"
      from: "utc_now-365d"
      to: "utc_now"
      interval: "7d"
      transform: {type: "consecutive_differences"}) {
        datetime
        value
    }
  }
}
```

You can test this query in the [GraphiQL Explorer](https://api.santiment.net/graphiql?query=%7B%0A%20%20getMetric(metric%3A%20%22twitter_followers%22)%20%7B%0A%20%20%20%20timeseriesData(%0A%20%20%20%20%20%20slug%3A%20%22ethereum%22%0A%20%20%20%20%20%20from%3A%20%22utc_now-365d%22%0A%20%20%20%20%20%20to%3A%20%22utc_now%22%0A%20%20%20%20%20%20interval%3A%20%227d%22%0A%20%20%20%20%20%20transform%3A%20%7Btype%3A%20%22consecutive_differences%22%7D)%20%7B%0A%20%20%20%20%20%20%20%20datetime%0A%20%20%20%20%20%20%20%20value%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A&variables=%7B%7D).

### Retrieve data for multiple assets with a single API call

This query obtains data for a list of assets in a single request.
You can specify the assets by providing a list of their slugs using the `slugs`
selector.

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

Only the price data with source `cryptocompare` is available at such small
intervals.

If you need to fetch the price of a cryptocurrency that changes every second
within a specific time frame, you can do so using our API. 

Here is an example of how to retrieve the price of Bitcoin in USD at 1-second
intervals for the past minute:

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

### Get some information about each project

Get some data for each project
```graphql
{
  allProjects {
    slug
    name
    ticker
    description
    logoUrl
    websiteLink
    twitterLink
    discordLink
    slackLink
    telegramLink
    facebookLink
    marketSegments
    githubLinks
    infrastructure
  }
}
```

You can test this query in the [GraphiQL Explorer](https://api.santiment.net/graphiql?query=%7B%0A%20%20allProjects%20%7B%0A%20%20%20%20slug%0A%20%20%20%20name%0A%20%20%20%20ticker%0A%20%20%20%20description%0A%20%20%20%20logoUrl%0A%20%20%20%20websiteLink%0A%20%20%20%20twitterLink%0A%20%20%20%20discordLink%0A%20%20%20%20slackLink%0A%20%20%20%20telegramLink%0A%20%20%20%20facebookLink%0A%20%20%20%20marketSegments%0A%20%20%20%20githubLinks%0A%20%20%20%20infrastructure%0A%20%20%7D%0A%7D%0A)


### Aggregate Data for Multiple Assets

If you need to retrieve the most recent MVRV data for multiple assets, such as
Ethereum, Bitcoin, and Aave, you can accomplish this with a single query. The
following is a simple solution:

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

### Retrieve all available projects for a specific metric

```graphql
{
  getMetric(metric: "daily_active_addresses") {
    metadata {
      availableProjects{
          slug
      }
    }
  }
}
```

You can test this query in the [GraphiQL Explorer](https://api.santiment.net/graphiql?query=%7B%0A%20%20getMetric(metric%3A%20%22daily_active_addresses%22)%20%7B%0A%20%20%20%20metadata%20%7B%0A%20%20%20%20%20%20availableProjects%7B%0A%20%20%20%20%20%20%20%20%20%20slug%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A).

### Retrieve all available metrics for a specific project
```graphql
{
  projectBySlug(slug: "bitcoin"){
    # All metrics
    availableMetrics
    # Only the timeseries metrics -- those that are fetched by getMetric's timeseriesData field
    availableTimeseriesMetrics
    # The available metrics paired with the link to their documentation
    availableMetricsExtended { metric docs { link } }
  }
}
```

You can test this query in the [GraphiQL Explorer](https://api.santiment.net/graphiql?query=%7B%0A%20%20projectBySlug(slug%3A%20%22bitcoin%22)%7B%0A%20%20%20%20%23%20All%20metrics%0A%20%20%20%20availableMetrics%0A%20%20%20%20%23%20Only%20the%20timeseries%20metrics%20--%20those%20that%20are%20fetched%20by%20getMetric%27s%20timeseriesData%20field%0A%20%20%20%20availableTimeseriesMetrics%0A%20%20%20%20%23%20The%20available%20metrics%20paired%20with%20the%20link%20to%20their%20documentation%0A%20%20%20%20availableMetricsExtended%20%7B%20metric%20docs%20%7B%20link%20%7D%20%7D%0A%20%20%7D%0A%7D%0A)

### Retrieve the access restrictions for each metric for a given subscription plan

```graphql
{
  getAccessRestrictions(filter: METRIC product: SANAPI plan: BUSINESS_PRO) {
    # Name of the metric
    name
    # Is the metric accessible at all, some metrics are not accessible in FREE plan
    isAccessible
    # If some time range restrictions are applied
    isRestricted
    # If the metric is scheduled for deprecation
    isDeprecated
    # What is the earliest date you can access. null if no restriction is applied
    restrictedFrom
    # What is the latest date you can access. null if no restriction is applied
    restrictedTo
    docs {
      link
    }
  }
}
```

You can test this query in the [GraphiQL Explorer](https://api.santiment.net/graphiql?query=%7B%0A%20%20getAccessRestrictions(filter%3A%20METRIC%20product%3A%20SANAPI%20plan%3A%20BUSINESS_PRO)%20%7B%0A%20%20%20%20%23%20Name%20of%20the%20metric%0A%20%20%20%20name%0A%20%20%20%20%23%20Is%20the%20metric%20accessible%20at%20all%2C%20some%20metrics%20are%20not%20accessible%20in%20FREE%20plan%0A%20%20%20%20isAccessible%0A%20%20%20%20%23%20If%20some%20time%20range%20restrictions%20are%20applied%0A%20%20%20%20isRestricted%0A%20%20%20%20%23%20If%20the%20metric%20is%20scheduled%20for%20deprecation%0A%20%20%20%20isDeprecated%0A%20%20%20%20%23%20What%20is%20the%20earliest%20date%20you%20can%20access.%20null%20if%20no%20restriction%20is%20applied%0A%20%20%20%20restrictedFrom%0A%20%20%20%20%23%20What%20is%20the%20latest%20date%20you%20can%20access.%20null%20if%20no%20restriction%20is%20applied%0A%20%20%20%20restrictedTo%0A%20%20%20%20docs%20%7B%0A%20%20%20%20%20%20link%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A&variables=%7B%7D)

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


<Notebox type="none">
**Read next: [Rate Limits](/sanapi/rate-limits)**
</Notebox>
