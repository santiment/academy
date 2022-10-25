---
title: Developer Activity Contributors Count
author: Santiment Team
date: 2022-04-18
description: Development activity contributors count in public Github repositories
---
# Developer Activity Contributors Count

## Definition

The development activity of a project is done in its public GitHub repositories.
The work done in private repositories is hidden from the public and cannot be
tracked. In Crypto, a lot of the work is done in public repositories, so this
metric is available for many projects.

A developer's time is a relatively expensive resource (especially in Crypto), so
high development activity implies that:

1. The project is serious about its business proposition
2. The project will likely ship new features in the future
3. It's less likely that the project is just an exit scam

The contributors' count metrics show the unique number of people (represented as
Github accounts) that have contributed to the public repositories of a project.

There are two metrics counting contributors - `dev_activity_contributors_count`
and `github_activity_contributors_count`. The difference is which Github events
are considered to label a contributor as active or not.
The Github event types and the reason for this split can be found on the
[Development Activity metric page](/metrics/development-activity)

---

## Access

[Free Access](/metrics/details/access#free-access)

---

## Measuring Unit

Number of people

---

## Data Type

[Timeseries Data](/metrics/details/data-type#timeseries-data)

---

## Frequency

[Five-Minute Intervals](/metrics/details/frequency#five-minute-frequency)

---

## Latency

[Development Activity Data
Latency](/metrics/details/latency#development-activity-latency)

---

## Available Assets

Available for [these
assets](<https://api.santiment.net/graphiql?variables=&query=%7B%0A%20%20getMetric(metric%3A%20%22dev_activity_contributors_count%22)%20%7B%0A%20%20%20%20metadata%20%7B%0A%20%20%20%20%20%20availableSlugs%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A>)

> **Note**: All metrics are available for the same set of assets.

---

## SanAPI

The metrics are available under the `dev_activity_contributors_count` and
`github_activity_contributors_count` names.

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

```graphql
{
  getMetric(metric: "github_activity_contributors_count") {
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
Explorer](<https://api.santiment.net/graphiql?query=%7B%0A%20%20getMetric(metric%3A%20%22github_activity_contributors_count%22)%20%7B%0A%20%20%20%20timeseriesData(%0A%20%20%20%20%20%20slug%3A%20%22santiment%22%0A%20%20%20%20%20%20from%3A%20%222020-01-13T00%3A00%3A00Z%22%0A%20%20%20%20%20%20to%3A%20%222020-01-18T00%3A00%3A00Z%22%0A%20%20%20%20%20%20interval%3A%20%221d%22)%20%7B%0A%20%20%20%20%20%20%20%20datetime%0A%20%20%20%20%20%20%20%20value%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A&variables=>)**