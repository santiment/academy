---
title: Getting started for Developers
author: Santiment Team
date: 2023-05-10
description: Santiment overview for Developers
---


## Introduction

Santiment API provides the data to fuel your financial models need. Uncover
insights about the crypto market from social, development and on-chain activity
– all in one place.

## What does Santiment offer for developers?

Santiment has a [GraphQL](https://graphql.org/) API which developers can use to
get the data. GraphQL provides very descriptive and flexible queries that can
be used to fetch the data, aggregated in multiple different ways. Santiment's
API allows a lot of data to be obtained with just a few API calls.

### Example
```graphql
{
  getMetric(metric: "daily_active_addresses"){
    timeseriesData(
      selector: {slug: "bitcoin"}
      from: "2024-01-01T00:00:00Z"
      to: "2024-01-31T23:59:59Z"
      interval: "1d"){
        datetime
        value
    }
  }
}
```
[Run the example](https://api.santiment.net/graphiql?query=%7B%0A%20%20getMetric(metric%3A%20%22daily_active_addresses%22)%7B%0A%20%20%20%20timeseriesData(%0A%20%20%20%20%20%20selector%3A%20%7Bslug%3A%20%22bitcoin%22%7D%0A%20%20%20%20%20%20from%3A%20%222024-01-01T00%3A00%3A00Z%22%0A%20%20%20%20%20%20to%3A%20%222024-01-31T23%3A59%3A59Z%22%0A%20%20%20%20%20%20interval%3A%20%221d%22)%7B%0A%20%20%20%20%20%20%20%20datetime%0A%20%20%20%20%20%20%20%20value%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A)

---

There is also [Santiment Queries]()

### GraphQL Examples

**Get daily active addresses for bitcoin for 1 month with daily resolution**
```graphql
{
  getMetric(metric: "daily_active_addresses"){
    timeseriesData(
      selector: {slug: "bitcoin"}
      from: "2024-01-01T00:00:00Z"
      to: "2024-01-31T23:59:59Z"
      interval: "1d"){
        datetime
        value
    }
  }
}
```
[Run the example](https://api.santiment.net/graphiql?query=%7B%0A%20%20getMetric(metric%3A%20%22daily_active_addresses%22)%7B%0A%20%20%20%20timeseriesData(%0A%20%20%20%20%20%20selector%3A%20%7Bslug%3A%20%22bitcoin%22%7D%0A%20%20%20%20%20%20from%3A%20%222024-01-01T00%3A00%3A00Z%22%0A%20%20%20%20%20%20to%3A%20%222024-01-31T23%3A59%3A59Z%22%0A%20%20%20%20%20%20interval%3A%20%221d%22)%7B%0A%20%20%20%20%20%20%20%20datetime%0A%20%20%20%20%20%20%20%20value%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A)

---

**Get timeseries data for multiple assets at the same time**
```graphql
{
  getMetric(metric: "daily_active_addresses"){
    timeseriesDataPerSlug(
      selector: {slugs: ["bitcoin", "ethereum", "xrp", "dogecoin", "litecoin"]}
      from: "2024-01-01T00:00:00Z"
      to: "2024-01-31T23:59:59Z"
      interval: "1d"){
        datetime
        data{
          slug
          value
        }
    }
  }
}
```
[Run the example](https://api.santiment.net/graphiql?query=%7B%0A%20%20getMetric(metric%3A%20%22daily_active_addresses%22)%7B%0A%20%20%20%20timeseriesDataPerSlug(%0A%20%20%20%20%20%20selector%3A%20%7Bslugs%3A%20%5B%22bitcoin%22%2C%20%22ethereum%22%2C%20%22xrp%22%2C%20%22dogecoin%22%2C%20%22litecoin%22%5D%7D%0A%20%20%20%20%20%20from%3A%20%222024-01-01T00%3A00%3A00Z%22%0A%20%20%20%20%20%20to%3A%20%222024-01-31T23%3A59%3A59Z%22%0A%20%20%20%20%20%20interval%3A%20%221d%22)%7B%0A%20%20%20%20%20%20%20%20datetime%0A%20%20%20%20%20%20%20%20data%7B%0A%20%20%20%20%20%20%20%20%20%20slug%0A%20%20%20%20%20%20%20%20%20%20value%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A)

---

---


## Metrics Catalog

There are a few different ways to explore the metrics
- Visit the [metrics' docs articles page](/metrics) where you can find links to
  the documentation articles of the metrics.
- Open the [Metrics Catalog](https://api.santiment.net/available_metrics)
  webpage that list all the metrics with information about the available
  assets. This page allows you to filter the metrics supported by a given asset
  and download the data as CSV.
- Open any [chart page on Sanbase](https://app.santiment.net/charts?slug=ethereum) and explore the metrics on the sidebar.
- Use the [GraphQL API](https://api.santiment.net/graphiql?query=%7B%0A%20%20getAccessRestrictions(filter%3A%20METRIC%2C%20product%3A%20SANAPI%2C%20plan%3A%20BUSINESS_PRO)%20%7B%0A%20%20%20%20name%0A%20%20%20%20isAccessible%0A%20%20%20%20isRestricted%0A%20%20%20%20isDeprecated%0A%20%20%20%20restrictedFrom%0A%20%20%20%20restrictedTo%0A%20%20%20%20docs%20%7B%0A%20%20%20%20%20%20link%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A) 
that shows the restrictions for each subscription product -- which metrics are accessible and what are the time range restrictions for them.


### Using the GraphQL API

If the desired metric is available in the API, using the API is the preferred way to
fetch the data. Detailed description and examples can be found on the [SanAPI page](/sanapi)

The API can be consumed in a few different ways:

- Using the [GraphiQL Live Explorer](https://api.santiment.net/graphiql) and
  explore the API with included autocmplete and nice response formatting.
- Using the `/graphql` API endpoint with `curl` directly from your terminal.
- Using the `/graphql` API endpoint and construct requests in your preferred
  programming language.
- Using the `sanpy` Python library that wraps the GraphQL API. It is easy to use
  and hides all GraphQL-related details.

### Using Santiment Queries


## Analyzing Santiment Data

Examples for different analysis based on Santiment data can be found on the
[Education and use cases page](/education-and-use-cases)

The are two types of examples included:

- Code examples showing how to analyze the data and plot the results.
- Descriptions how to use the tools provided by the Sanbase web application and interpret the results.

<Notebox type="none">
Read next: [How to Access the API](/sanapi/accessing-the-api)
</Notebox>
