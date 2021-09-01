---
title: Common Queries
author: Santiment Team
date: 2021-08-26
---

Here are several of the most common queries to the SanAPI. 

### Get multiple assets data in a single API call

This query returns data for the group of assets. You can provide a list of
assets via a special selector ```slugs```

```graphql
{ 
  getMetric(metric: "price_usd") {
    timeseriesDataPerSlug(
      from: "utc_now-1d"
      to: "utc_now"
      interval: "15m"
      selector: {slugs: ["ethereum","tezos","eos","color-platform","enecuum","slink"]})
      {
        data {
          slug
          value
        }
        datetime
      }
  }
}
```
Try it now in the [GraphiQL Explorer](https://api.santiment.net/graphiql?variables=%7B%7D&query=%7B%20getMetric(metric%3A%20%22price_usd%22)%20%7B%0A%20%20%20%20timeseriesDataPerSlug(%0A%20%20%20%20%20%20from%3A%20%22utc_now-1d%22%0A%20%20%20%20%20%20to%3A%22utc_now%22%0A%09%09%09interval%3A%20%2215m%22%0A%20%20%20%20%20%20selector%3A%20%7Bslugs%3A%20%5B%22ethereum%22%2C%22tezos%22%2C%22eos%22%2C%22color-platform%22%2C%22enecuum%22%2C%22slink%22%5D%7D)%0A%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20data%20%7B%0A%20%20%20%20%20%20%20%20%20%20slug%0A%20%20%20%20%20%20%20%20%20%20value%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20datetime%0A%20%20%20%20%20%20%7D%0A%7D%0A%7D)

> Note if you want to get latest data you can use "utc_now"
> as a value for ```to``` argument instead of using date methods.

### Get 1 sec resolution

If the price changed every 1 second in a given interval, then you can fetch it from our API

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
Try it now in the [GraphiQL Explorer](https://api.santiment.net/graphiql?query=%7B%0A%20%20getMetric(metric%3A%20%22price_usd%22)%20%7B%0A%20%20%20%20timeseriesData(%0A%20%20%20%20%20%20selector%3A%20%7B%20slug%3A%20%22bitcoin%22%20source%3A%20%22cryptocompare%22%20%7D%0A%20%20%20%20%20%20from%3A%20%22utc_now-1m%22%0A%20%20%20%20%20%20to%3A%20%22utc_now%22%0A%20%20%20%20%20%20interval%3A%20%221s%22%0A%20%20%20%20%20%20cachingParams%3A%20%7BbaseTtl%3A%201%2C%20maxTtlOffset%3A%201%7D%0A%20%20%20%20)%20%7B%0A%20%20%20%20%20%20datetime%0A%20%20%20%20%20%20value%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D)