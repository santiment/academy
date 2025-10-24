---
title: Getting started for Developers
author: Santiment Team
date: 2023-05-10
description: Santiment overview for Developers
---


## Introduction

The Santiment API is a powerful tool designed to provide crucial data for your
financial models. By leveraging this API, you can gain comprehensive insights
into the cryptocurrency market, encompassing social trends, developmental
metrics, and on-chain activities—all consolidated into a single platform.

## What does Santiment offer to developers?

Santiment offers a robust [GraphQL](https://graphql.org/) API, empowering
developers with advanced capabilities to fetch essential crypto market data.
GraphQL provides a highly flexible query language for APIs
that enables more intuitive and descriptive queries compared to traditional
REST API methods. With GraphQL, users can request exactly the data they need,
minimizing the number of API calls and reducing bandwidth usage.

Apart from precomputed metrics, Santiment has the [Santiment Queries](/santiment-queries)
product, which allows developers to write custom SQL to obtain the data from the
database directly. These SQL queries can be executed from the [Queries web page](https://queries.santiment.net/)
or [execute the queries through the API](/santiment-queries/api-access)

### GraphQL API 

In this example, the query fetches the daily active addresses for Bitcoin. The
query is self-descriptive and easy to maintain. New members to your team can
intuitively understand the query without the need to consult the documentation.

```graphql-explorer
{
  getMetric(metric: "daily_active_addresses"){
    timeseriesDataJson(
      selector: {slug: "bitcoin"}
      from: "2024-01-01T00:00:00Z"
      to: "2024-01-31T23:59:59Z"
      interval: "1d")
  }
}
```

Find more GraphQL query examples on the [Common
Queries](/sanapi/common-queries) page, or read [How to access the
API](sanapi/accessing-the-api) article

### Python API-wrapper library

Santiment provides a [Python API wrapper library](https://github.com/santiment/sanpy)
that allows you to fetch metrics with a simple function call. The code shows
how to translate the GraphQL query from above. The data is returned in a Pandas
dataframe.

```python
import san
san.get("daily_active_addresses",
    slug="bitcoin",
    from_date="2024-01-01",
    to_date="2024-01-31",
    interval="1d")
```

## Metrics Catalog

There are a few different ways to explore the available metrics.
- Visit the [metrics' docs articles page](/metrics) where you can find links to
  the documentation articles of the metrics.
- Open the [Metrics Catalog](https://api.santiment.net/available_metrics)
  webpage that list all the metrics with information about the available
  assets. This page allows you to filter the metrics supported by a given asset
  and download the data as CSV.
- Open any [chart page on Sanbase](https://app.santiment.net/charts?slug=ethereum) and explore the metrics on the sidebar.
- Use the [GraphQL API](https://api.santiment.net/graphiql?query=%7B%0A%20%20getAccessRestrictions(filter%3A%20METRIC%2C%20product%3A%20SANAPI%2C%20plan%3A%20BUSINESS_PRO)%20%7B%0A%20%20%20%20name%0A%20%20%20%20isAccessible%0A%20%20%20%20isRestricted%0A%20%20%20%20isDeprecated%0A%20%20%20%20restrictedFrom%0A%20%20%20%20restrictedTo%0A%20%20%20%20docs%20%7B%0A%20%20%20%20%20%20link%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A) 
that shows the restrictions for each subscription product -- which metrics are accessible and what are the time range restrictions for them.

<Notebox type="none">
**Read next: [How to Access the API](/sanapi/accessing-the-api/)**
</Notebox>
