---
title: Development Activity Metrics
author: Santiment Team
date: 2023-06-01

---

## Definition

Development Activity metric shows the 'pure' development activity. It excludes events that are not development related like:

- Comments on issues;
- Issues created and closed;
- Creating of forks;
- Comments on commits;
- People following an issue;
- Downloading releases;
- Watching a repository;
- Project management events;
- Others.

This allows to better compare projects that use GitHub for issue tracking and
projects that use an external tool for issue tracking. If such events are not
excluded then some projects could have inflated activity just by discussion
what they are going to build without actually building it. Inactive projects
might have non-zero activity caused by people creating issues and asking the team to fix something, without any actual work being done.

---

## Access

[Free Access](/metrics/details/access#free-access)

---

## Data Type

[Timeseries Data](/metrics/details/data-type#timeseries-data)

---

## Change Metrics

[Change Metrics](/metrics/details/change_metrics)

---

## Frequency

[Five-Minute Intervals](/metrics/details/frequency#five-minute-frequency)

---

## Latency

[Development Activity Data Latency](/metrics/details/latency#development-activity-latency)

---

## Available Assets

Available for [these assets](https://api.santiment.net/graphiql?variables=&query=%7B%0A%20%20getMetric(metric:%20%22dev_activity%22)%20%7B%0A%20%20%20%20metadata%20%7B%0A%20%20%20%20%20%20availableSlugs%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A)

> **Note**: All metrics are available for the same set of assets.

---

## SanAPI

The metric is available under the `dev_activity`  names.

```graphql
{
  getMetric(metric: "dev_activity") {
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

**[Run in Explorer](<https://api.santiment.net/graphiql?query=%7B%0A%20%20getMetric(metric%3A%20%22dev_activity%22)%20%7B%0A%20%20%20%20timeseriesData(%0A%20%20%20%20%20%20slug%3A%20%22santiment%22%0A%20%20%20%20%20%20from%3A%20%222020-01-13T00%3A00%3A00Z%22%0A%20%20%20%20%20%20to%3A%20%222020-01-18T00%3A00%3A00Z%22%0A%20%20%20%20%20%20interval%3A%20%221d%22)%20%7B%0A%20%20%20%20%20%20%20%20datetime%0A%20%20%20%20%20%20%20%20value%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A&variables=>)**
