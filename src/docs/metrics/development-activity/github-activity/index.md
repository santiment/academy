---
title: Github Activity
author: Santiment Team
date: 2023-06-01

---

## Definition

Unlike [Development Activity](../development-activity/) which excludes some of the events, the GitHub Activity metric uses all events to compute the metric.


There are 3 development activity metrics available:

- `github_activity` - Computed on-the-fly using the Github data. Because of this the metric can compute data for any 
  asset or any random Github organization that has public repositories like Google, Facebook, or any other organization.
- `github_activity_1d` - Precomputed daily metric for each asset that is available on Santiment. This allows the metric
  to be aggregated when the value is needed for all assets at once.
- `ecosystem_github_activity` - Precomputed for each ecosystem. An ecosystem dev activity is defined as
  the sum of the dev activities of all assets that belong to it. For example the `ethereum` ecosystem
  contains all the project that build on the Ethereum blockchain or contribute to the blockchain in any other way.

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

Available for [these assets](<https://api.santiment.net/graphiql?variables=&query=%7B%0A%20%20getMetric(metric%3A%20%22github_activity%22)%20%7B%0A%20%20%20%20metadata%20%7B%0A%20%20%20%20%20%20availableSlugs%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A>)

---

## SanAPI

The metric is available under the `github_activity` name.

```graphql
{
  getMetric(metric: "github_activity") {
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

**[Run in Explorer](<https://api.santiment.net/graphiql?query=%7B%0A%20%20getMetric(metric%3A%20%22github_activity%22)%20%7B%0A%20%20%20%20timeseriesData(%0A%20%20%20%20%20%20slug%3A%20%22santiment%22%0A%20%20%20%20%20%20from%3A%20%222020-01-13T00%3A00%3A00Z%22%0A%20%20%20%20%20%20to%3A%20%222020-01-18T00%3A00%3A00Z%22%0A%20%20%20%20%20%20interval%3A%20%221d%22)%20%7B%0A%20%20%20%20%20%20%20%20datetime%0A%20%20%20%20%20%20%20%20value%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A&variables=>)**


```graphql
{
  getMetric(metric: "github_activity") {
    timeseriesData(
      selector: {organization: "google"}
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

**[Run in Explorer](https://api.santiment.net/graphiql?query=%7B%0A%20%20getMetric(metric%3A%20%22github_activity%22)%20%7B%0A%20%20%20%20timeseriesData(%0A%20%20%20%20%20%20selector%3A%20%7Borganization%3A%20%22google%22%7D%0A%20%20%20%20%20%20from%3A%20%222020-01-13T00%3A00%3A00Z%22%0A%20%20%20%20%20%20to%3A%20%222020-01-18T00%3A00%3A00Z%22%0A%20%20%20%20%20%20interval%3A%20%221d%22%0A%20%20%20%20)%20%7B%0A%20%20%20%20%20%20datetime%0A%20%20%20%20%20%20value%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A)**


```graphql
{
  getEcosystems(ecosystems: ["ethereum"]) {
    timeseriesData(
      metric: "ecosystem_github_activity"
      from: "2024-03-01T00:00:00Z"
      to: "2024-03-10T00:00:00Z"
      interval: "1d") {
        datetime
        value
      }
  }
}
```

**[Run in Explorer](https://api.santiment.net/graphiql?query=%7B%0A%20%20getEcosystems(ecosystems%3A%20%5B%22ethereum%22%5D)%20%7B%0A%20%20%20%20timeseriesData(metric%3A%20%22ecosystem_github_activity%22%2C%20from%3A%20%222024-03-01T00%3A00%3A00Z%22%2C%20to%3A%20%222024-03-10T00%3A00%3A00Z%22%2C%20interval%3A%20%221d%22)%20%7B%0A%20%20%20%20%20%20datetime%0A%20%20%20%20%20%20value%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A)**


