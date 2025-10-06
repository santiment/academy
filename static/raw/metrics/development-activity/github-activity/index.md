---
title: Github Activity
author: Santiment Team
date: 2023-06-01

---

## Definition

Unlike [Development Activity](metrics/development-activity/development-activity) which excludes some of the events, the GitHub Activity metric uses all events to compute the metric.


There are 3 github activity metrics available:

- `github_activity` - Computed on-the-fly using the Github data. Because of this the metric can compute data for any 
  asset or any random Github organization that has public repositories like Google, Facebook, or any other organization.
- `github_activity_1d` - Precomputed daily metric for each asset that is available on Santiment. This allows the metric
  to be aggregated when the value is needed for all assets at once.
- `ecosystem_github_activity` - Precomputed for each ecosystem. An ecosystem github activity is defined as
  the sum of the github activities of all assets that belong to it. For example the `ethereum` ecosystem
  contains all the projects that build on the Ethereum blockchain or contribute to the blockchain in any other way.

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

- `github_activity` - [Five-Minute Intervals](/metrics/details/frequency#five-minute-frequency)
- `github_activity_1d` - [Daily Intervals](/metrics/details/frequency#daily-frequency)
- `ecosystem_github_activity` - [Daily Intervals](/metrics/details/frequency#daily-frequency)

---

## Latency

[Development Activity Data Latency](/metrics/details/latency#development-activity-latency)

---

## Available Assets

- `github_activity` $-$ [available assets](https://api.santiment.net/graphiql?variables=&query=%7B%0A%20%20getMetric(metric:%20%22github_activity%22)%20%7B%0A%20%20%20%20metadata%20%7B%0A%20%20%20%20%20%20availableSlugs%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A)
- `github_activity_1d` $-$ [available assets](https://api.santiment.net/graphiql?variables=&query=%7B%0A%20%20getMetric(metric:%20%22github_activity_1d%22)%20%7B%0A%20%20%20%20metadata%20%7B%0A%20%20%20%20%20%20availableSlugs%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A)
- `ecosystem_github_activity` $-$ [available ecosystems](https://api.santiment.net/graphiql?query=%7B%0A%20%20getEcosystems%20%7B%0A%20%20%20%20name%0A%20%20%7D%0A%7D%0A)

---

## SanAPI

Fetch the dev activity for an asset:

```graphql-explorer
{
  getMetric(metric: "github_activity") {
    timeseriesDataJson(
      slug: "santiment"
      from: "2020-01-13T00:00:00Z"
      to: "2020-01-18T00:00:00Z"
      interval: "1d"
    )
  }
}
```

---

Fetch the `github_activity` for an arbitrary organization. You  need to provide only the organization name
to the parameter, not the whole URL. Github links look like this: `https://github.com/<organization>/<repository>`.

```graphql-explorer
{
  getMetric(metric: "github_activity") {
    timeseriesDataJson(
      selector: {organization: "google"}
      from: "2020-01-13T00:00:00Z"
      to: "2020-01-18T00:00:00Z"
      interval: "1d"
    )
  }
}
```

---

Fetch the `ecosystem_github_activity`, combining the dev activities of all assets
that contribute to that ecosystem:

```graphql-explorer
{
  getEcosystems(ecosystems: ["ethereum"]) {
    timeseriesDataJson(
      metric: "ecosystem_github_activity"
      from: "2024-03-01T00:00:00Z"
      to: "2024-03-10T00:00:00Z"
      interval: "1d")
  }
}
```

---

To check what assets are part of the ecosystem and what are their github links:

```graphql
{
  getEcosystems(ecosystems: ["ethereum"]){
    name
    projects{
      slug
      githubLinks
    }
  }
}
```

**[Run in Explorer](https://api.santiment.net/graphiql?query=%7B%0A%20%20getEcosystems(ecosystems%3A%20%5B%22ethereum%22%5D)%7B%0A%20%20%20%20name%0A%20%20%20%20projects%7B%0A%20%20%20%20%20%20slug%0A%20%20%20%20%20%20githubLinks%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A)**

---

GitHub Activity Change for Ethereum Repository Over 7 Days

```graphql-explorer
{
  getMetric(metric: "github_activity_change_30d") {
    timeseriesDataJson(
      selector: {slug: "ethereum"}
      from: "2024-01-01T00:00:00Z"
      to: "2024-01-07T00:00:00Z"
      interval: "1d"
    )
  }
}
```

---

## Full list of metrics

The full list of GitHub Activity metrics is:

<Details>

<Summary>Open Metrics List</Summary>

- ecosystem_github_activity
- github_activity_change_30d

</Details>