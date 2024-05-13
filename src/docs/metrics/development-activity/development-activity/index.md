---
title: Development Activity Metric
author: Santiment Team
description: The development activity metrics provide data and insight about the amount of work done in Github public repositories.
date: 2024-04-04

---

## Definition

Development Activity metric shows the 'pure' development activity. It excludes events that are not related to development like:

- Comments on issues;
- Issues created and closed;
- Creating of forks;
- Comments on commits;
- People following an issue;
- Downloading releases;
- Watching a repository;
- Project management events;
- Other.

This allows for better comparison between projects that use GitHub for issue tracking and
projects that use an external tool (like Notion) for issue tracking. If such events are not
excluded then some projects have inflated activity just by discussing
what they are going to build without actually building it. Inactive projects
might have non-zero activity caused by people creating issues and asking the 
team to fix something, without any actual work being done.

There are 3 development activity metrics available:
- `dev_activity` - Computed on-the-fly using the Github data. Because of this
  the metric can compute data for any asset or just any random Github
  organization that has public repositories like Google, Facebook, or any other
  organization.
- `dev_activity_1d` - Precomputed daily metric for each asset that is available
  on Santiment. This allows the metric to be aggregated when the value is
  needed for all assets at once.
- `ecosystem_dev_activity` - Precomputed for each ecosystem. An ecosystem dev
  activity is defined as the sum of the dev activities of all assets that
  belong to it. For example the `ethereum` ecosystem contains all the projects
  that build on the Ethereum blockchain or contribute to the blockchain in any
  other way.

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

- `dev_activity` - [Five-Minute Intervals](/metrics/details/frequency#five-minute-frequency)
- `dev_activity_1d` - [Daily Intervals](/metrics/details/frequency#daily-frequency)
- `ecosystem_dev_activity` - [Daily Intervals](/metrics/details/frequency#daily-frequency)

---

## Latency

[Development Activity Data Latency](/metrics/details/latency#development-activity-latency)

---

## Available Assets

- `dev_activity` $-$ [available assets](https://api.santiment.net/graphiql?variables=&query=%7B%0A%20%20getMetric(metric:%20%22dev_activity%22)%20%7B%0A%20%20%20%20metadata%20%7B%0A%20%20%20%20%20%20availableSlugs%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A)
- `dev_activity_1d` $-$ [available assets](https://api.santiment.net/graphiql?variables=&query=%7B%0A%20%20getMetric(metric:%20%22dev_activity_1d%22)%20%7B%0A%20%20%20%20metadata%20%7B%0A%20%20%20%20%20%20availableSlugs%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A)
- `ecosystem_dev_activity` $-$ [available ecosystems](https://api.santiment.net/graphiql?query=%7B%0A%20%20getEcosystems%20%7B%0A%20%20%20%20name%0A%20%20%7D%0A%7D%0A)

---

## SanAPI

Fetch the dev activity for an asset:

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

---

Fetch the `dev_activity` for an arbitrary organization. You  need to provide only the organization name
to the parameter, not the whole URL. Github links look like this: `https://github.com/<organization>/<repository>`.

```graphql
{
  getMetric(metric: "dev_activity") {
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

**[Run in Explorer](https://api.santiment.net/graphiql?query=%7B%0A%20%20getMetric(metric%3A%20%22dev_activity%22)%20%7B%0A%20%20%20%20timeseriesData(%0A%20%20%20%20%20%20selector%3A%20%7Borganization%3A%20%22google%22%7D%0A%20%20%20%20%20%20from%3A%20%222020-01-13T00%3A00%3A00Z%22%0A%20%20%20%20%20%20to%3A%20%222020-01-18T00%3A00%3A00Z%22%0A%20%20%20%20%20%20interval%3A%20%221d%22%0A%20%20%20%20)%20%7B%0A%20%20%20%20%20%20datetime%0A%20%20%20%20%20%20value%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A)**

---

Fetch the `ecosystem_dev_activity`, combining the dev activities of all assets
that contribute to that ecosystem:

```graphql
{
  getEcosystems(ecosystems: ["ethereum"]) {
    timeseriesData(
      metric: "ecosystem_dev_activity"
      from: "2024-03-01T00:00:00Z"
      to: "2024-03-10T00:00:00Z"
      interval: "1d") {
        datetime
        value
      }
  }
}
```

**[Run in Explorer](https://api.santiment.net/graphiql?query=%7B%0A%20%20getEcosystems(ecosystems%3A%20%5B%22ethereum%22%5D)%20%7B%0A%20%20%20%20timeseriesData(metric%3A%20%22ecosystem_dev_activity%22%2C%20from%3A%20%222024-03-01T00%3A00%3A00Z%22%2C%20to%3A%20%222024-03-10T00%3A00%3A00Z%22%2C%20interval%3A%20%221d%22)%20%7B%0A%20%20%20%20%20%20datetime%0A%20%20%20%20%20%20value%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A)**

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

## Full list of metrics

The full list of Dev Activity metrics is:

<Details>

<Summary>Open Metrics List</Summary>

- 30d_moving_avg_dev_activity_change_1d
- dev_activity
- dev_activity_1d
- dev_activity_change_1d

</Details>