---
title: Queries
author: Santiment Team
date: 2020-04-06
---

## Available queries per project

The set of available queries is not the same for each asset. In order to find
which are the available queries for a given asset you can use the
`projectBySlug` query, like this:

```js
{
  projectBySlug(slug: "santiment") {
    availableQueries
  }
}
```

## OHLC (Open-High-Low-Close)

**Tier**: free

**Max lag**: A few minutes

**Max resolution**: 5min

Returns the open, high, low and close prices in USD for the given interval.

Parameters:

| Parameter | Description                                                            |
| --------- | ---------------------------------------------------------------------- |
| slug      | The slug of the project                                                |
| from      | From which date to return the activity in ISO 8601 format              |
| to        | Till which date to return the activity in ISO 8601 format              |
| interval  | The intervals that should be returned. Default is `1d`, which is daily |

Example:

```js
{
  ohlc(
    slug: "santiment"
    from: "2019-01-01T00:00:00Z"
    to: "2019-06-01T00:00:00Z"
    interval: "1d") {
      datetime
      openPriceUsd
      highPriceUsd
      lowPriceUsd
      closePriceUsd
  }
}
```

**[Run in
explorer](<https://api.santiment.net/graphiql?query=%7B%0A%20%20ohlc(slug%3A%20%22santiment%22%2C%20from%3A%20%222019-01-01T00%3A00%3A00Z%22%2C%20to%3A%20%222019-06-01T00%3A00%3A00Z%22%2C%20interval%3A%20%221d%22)%20%7B%0A%20%20%20%20datetime%0A%20%20%20%20openPriceUsd%0A%20%20%20%20highPriceUsd%0A%20%20%20%20lowPriceUsd%0A%20%20%20%20closePriceUsd%0A%20%20%7D%0A%7D%0A>)**
