---
title: Rank
author: Santiment Team
date: 2025-03-19
description: The position in the list of assets ordered by Marketcap in ascending order
---

## Definition

The `rank` metrics is defined by the numerical position, starting from 1, of the asset within the list of all assets sorted by market capitalization in ascending order. Assets with smaller market capitalizations are assigned lower numerical positions.

## Access

[Free Access](/metrics/details/access#free-access)

---

## Measuring Unit

Position in a list

---

## Data Type

[Timeseries Data](/metrics/details/data-type#timeseries-data)

---

---

## Frequency

[Five-Minute Intervals](/metrics/details/frequency#five-minute-frequency)

---

## Latency

[Price Latency](/metrics/details/latency#price-latency)

---

## Available Assets

- [Available Assets](https://api.santiment.net/graphiql?query=%7B%0A++getMetric%28metric%3A+%22rank%22%29%7B%0A++++metadata%7B%0A++++++availableSlugs%0A++++%7D%0A++%7D%0A%7D)

---

## SanAPI

### Get historical ranks of an asset

```graphql-explorer
{
  getMetric(metric: "rank") {
    timeseriesDataJson(
      slug: "ethereum"
      from: "2020-04-01T00:00:00Z"
      to: "2020-04-07T00:00:00Z"
      interval: "1d"
    )
  }
}
```

### Get the latest rank of each asset

```graphql
{
  allProjects {
    slug
    rank: aggregatedTimeseriesData(
      metric: "rank"
      from: "utc_now-1d"
      to: "utc_now"
      aggregation: LAST
    )
  }
}
```

**[Run in Explorer](<https://api.santiment.net/graphiql?query=%7B%0A%20%20allProjects%20%7B%0A%20%20%20%20slug%0A%20%20%20%20rank%3A%20aggregatedTimeseriesData(metric%3A%20%22rank%22%2C%20from%3A%20%22utc_now-1d%22%2C%20to%3A%20%22utc_now%22%2C%20aggregation%3A%20LAST)%0A%20%20%7D%0A%7D%0A>)**
