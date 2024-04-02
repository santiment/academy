---
title: Development Activity Contributors Count
author: Santiment Team
date: 2022-04-18
description: Development activity contributors count in public Github repositories
---

## Definition

The Development Activity Contributors Count metrics show the unique number of
people (represented as Github accounts) that have contributed to a public
Github repository in an organization that is followed. Only those events that
constitute 'pure' development work are taken into consideration.

There are 3 development activity contributors count metrics available:
- `dev_activity_contributors_count` - Computed on-the-fly using the Github
  data. Because of this the metric can compute data for any asset or just any
  random Github organization that has public repositories like Google,
  Facebook, or any other organization.
- `dev_activity_contributors_count_7d` - Precomputed weekly metric for each
  asset that is available on Santiment. This allows the metric to be aggregated
  when the value is needed for all assets at once.
- `ecosystem_dev_activity_contributors_count_7d` - Precomputed for each
  ecosystem. The metric is defined as the total count of unique contributors
  that contributed to the github organization of at least one of assets that
  belong to it.

> Note: The precomputed metrics `dev_activity_contributors_count_7d` and
> `ecosystem_dev_activty_contributors_count_7d` cannot be aggregated using the
> `SUM` aggregation, i.e. you cannot obtain the number of monthly contributors
> by taking the sum of 4 weekly values. This is because the same contributors
> may or may not make up the separate values, so the `SUM` operation can count
> some contributors multiple times. To achieve monthly contributors, use the
> `dev_activity_contributors_count` metric with `interval: "30d"`

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

[Five-Minute Intervals](/metrics/details/frequency#five-minute-frequency)

---

## Latency

[Development Activity Data Latency](/metrics/details/latency#development-activity-latency)

---

## Available Assets

Available for [these
assets](<https://api.santiment.net/graphiql?variables=&query=%7B%0A%20%20getMetric(metric%3A%20%22dev_activity_contributors_count%22)%20%7B%0A%20%20%20%20metadata%20%7B%0A%20%20%20%20%20%20availableSlugs%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A>)


---

## SanAPI

The metric ис available under the `dev_activity_contributors_count` name.

```graphql
{
  getMetric(metric: "dev_activity_contributors_count") {
    timeseriesData(
      slug: "santiment"
      from: "2020-01-13T00:00:00Z"
      to: "2020-01-18T00:00:00Z"
      interval: "1d"
    ) {
      datetime
      value
    }
  }
}
```

**[Run in
Explorer](<https://api.santiment.net/graphiql?query=%7B%0A%20%20getMetric(metric%3A%20%22dev_activity_contributors_count%22)%20%7B%0A%20%20%20%20timeseriesData(%0A%20%20%20%20%20%20slug%3A%20%22santiment%22%0A%20%20%20%20%20%20from%3A%20%222020-01-13T00%3A00%3A00Z%22%0A%20%20%20%20%20%20to%3A%20%222020-01-18T00%3A00%3A00Z%22%0A%20%20%20%20%20%20interval%3A%20%221d%22)%20%7B%0A%20%20%20%20%20%20%20%20datetime%0A%20%20%20%20%20%20%20%20value%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A&variables=>)**

---

