---
title: Github Activity Contributors Count
author: Santiment Team
date: 2022-04-18
description: Github Activity Contributors count in public Github repositories
---

## Definition

The Github Activity Contributors Count metrics show the unique number of
people (represented as Github accounts) that have contributed to a public
Github repository in an organization that is followed. 

There are 3 development activity contributors count metrics available:
- `github_activity_contributors_count` - Computed on-the-fly using the Github
  data. Because of this the metric can compute data for any asset or just any
  random Github organization that has public repositories like Google,
  Facebook, or any other organization.
- `github_activity_contributors_count_7d` - Precomputed weekly metric for each
  asset that is available on Santiment. This allows the metric to be aggregated
  when the value is needed for all assets at once.
- `ecosystem_github_activity_contributors_count_7d` - Precomputed for each
  ecosystem. The metric is defined as the total count of unique contributors
  that contributed to the github organization of at least one of assets that
  belong to it.

> Note: The precomputed metrics `github_activity_contributors_count_7d` and
> `ecosystem_github_activty_contributors_count_7d` cannot be aggregated using the
> `SUM` aggregation, i.e. you cannot obtain the number of monthly contributors
> by taking the sum of 4 weekly values. This is because the same contributors
> may or may not make up the separate values, so the `SUM` operation can count
> some contributors multiple times. To achieve monthly contributors, use the
> `github_activity_contributors_count` metric with `interval: "30d"`

---

## Access

[Free Access](/metrics/details/access#free-access)

---

## Measuring Unit

Number of github accounts

---

## Data Type

[Timeseries Data](/metrics/details/data-type#timeseries-data)

---

## Frequency

- `github_activity_contributors_count` - [Five-Minute Intervals](/metrics/details/frequency#five-minute-frequency)
- `github_activity_contributors_count_7d` - [Daily Intervals](/metrics/details/frequency#daily-frequency)
- `ecosystem_github_activity_contributors_count_7d` - [Daily Intervals](/metrics/details/frequency#daily-frequency)

---

## Latency

[Development Activity Data Latency](/metrics/details/latency#development-activity-latency)

---

## Available Assets

- `github_activity_contributors_count` $-$ [available assets](https://api.santiment.net/graphiql?variables=&query=%7B%0A%20%20getMetric(metric:%20%22github_activity_contributors_count%22)%20%7B%0A%20%20%20%20metadata%20%7B%0A%20%20%20%20%20%20availableSlugs%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A)
- `github_activity_contributors_count_7d` $-$ [available assets](https://api.santiment.net/graphiql?variables=&query=%7B%0A%20%20getMetric(metric%3A%20%22github_activity_contributors_count_7d%22)%20%7B%0A%20%20%20%20metadata%20%7B%0A%20%20%20%20%20%20availableSlugs%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A)
- `ecosystem_github_activity_contributors_count_7d` $-$ [available ecosystems](https://api.santiment.net/graphiql?query=%7B%0A%20%20getEcosystems%20%7B%0A%20%20%20%20name%0A%20%20%7D%0A%7D%0A)

---

## SanAPI

Fetch hourly `github_activity_contributors_count` for an asset:

```graphql-explorer
{
  getMetric(metric: "github_activity_contributors_count") {
    timeseriesDataJson(
      slug: "santiment"
      from: "2020-01-01T00:00:00Z"
      to: "2020-03-01T00:00:00Z"
      interval: "1h"
    )
  }
}
```

---

Fetch monthly `github_activity_contributors_count` for an asset:

```graphql-explorer
{
  getMetric(metric: "github_activity_contributors_count") {
    timeseriesDataJson(
      slug: "santiment"
      from: "2020-01-01T00:00:00Z"
      to: "2020-03-01T00:00:00Z"
      interval: "30d"
    )
  }
}
```

---

Fetch the precomputed weekly `github_activity_contributors_count_7d` for an asset:

```graphql-explorer
{
  getMetric(metric: "github_activity_contributors_count_7d") {
    timeseriesDataJson(
      slug: "santiment"
      from: "2020-01-01T00:00:00Z"
      to: "2020-03-01T00:00:00Z"
      interval: "7d"
    )
  }
}
```

---

Because `github_activity_contributors_count_7d` is precomputed, you can also fetch
an aggregated value for many assets at the same time:

```graphql
{
  allProjects(
    selector: {
      baseProjects: {slugs: ["bitcoin", "ethereum", "santiment", "maker"]}
    }) {
      slug
      contributors: aggregatedTimeseriesData(
        metric: "github_activity_contributors_count_7d"
        from: "utc_now-1d"
        to: "utc_now"
        aggregation: LAST
      )
  }
}
```

**[Run in Explorer](https://api.santiment.net/graphiql?query=%7B%0A%20%20allProjects(%0A%20%20%20%20selector%3A%20%7B%0A%20%20%20%20%20%20baseProjects%3A%20%7Bslugs%3A%20%5B%22bitcoin%22%2C%20%22ethereum%22%2C%20%22santiment%22%2C%20%22maker%22%5D%7D%0A%20%20%20%20%7D)%20%7B%0A%20%20%20%20%20%20slug%0A%20%20%20%20%20%20contributors%3A%20aggregatedTimeseriesData(%0A%20%20%20%20%20%20%20%20metric%3A%20%22github_activity_contributors_count_7d%22%0A%20%20%20%20%20%20%20%20from%3A%20%22utc_now-1d%22%0A%20%20%20%20%20%20%20%20to%3A%20%22utc_now%22%0A%20%20%20%20%20%20%20%20aggregation%3A%20LAST%0A%20%20%20%20%20%20)%0A%20%20%7D%0A%7D%0A)**

---
