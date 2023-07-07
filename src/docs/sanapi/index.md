---
title: API Reference
author: Santiment Team
date: 2020-04-06
description: This page contains a reference of all the APIs provided by Santiment.
---


- [Overview](#overview)
- [How to access the API](#how-to-access-the-api)
- [Metrics](#metrics)
- [Supported blockchains](#supported-blockchains)
- [Rate Limits](#rate-limits)
- [Complexity](#complexity)
- [Glossary](#glossary)

## Overview

Santiment API uses [GraphQL](https://graphql.org). From the beginning it was
decided to use GraphQL instead of REST for a number of reasons:

- You can request exactly the data you need and easily batch requests together.
  This is effectively handling the issues with underfetching and overfetching
  data. Why fetching all 20+ fields of a project when you only need its name?
- The request describes the format of the response. You no longer need to wonder
  what data the result contains and how to parse it.
- Easy out-of-the-box way to explore our API via our Live Explorer.

**Example**

Below is shown an example of a GraphQL query used to fetch timeseries price data. The parameters control the time range, the interval between data points and how all the values inside an interval are aggregated.

```graphql
{
  getMetric(metric: "twitter_followers") {
    timeseriesData(
      slug: "ethereum"
      from: "2023-01-01T00:00:00Z"
      to: "2023-01-05T00:00:00Z"
      interval: "1d"
      aggregation: LAST){
        datetime
        value
    }
  }
}
```

**[Run the example in the GraphiQL Live Explorer](https://api.santiment.net/graphiql?variables=&query=%7B%0A++getMetric%28metric%3A+%22twitter_followers%22%29+%7B%0A++++timeseriesData%28%0A++++++slug%3A+%22ethereum%22%0A++++++from%3A+%222023-01-01T00%3A00%3A00Z%22%0A++++++to%3A+%222023-01-05T00%3A00%3A00Z%22%0A++++++interval%3A+%221d%22%0A++++%09aggregation%3A+LAST%29%7B%0A++++%09%09datetime%0A++++++++value%0A++++%7D%0A++%7D%0A%7D)**

## How to access the API

Information how to access the API can be found [here](/sanapi/accessing-the-api).

## Metrics

Information how to explore and fetch the available metrics can be found [here](/sanapi/fetching-metrics).

## Supported blockchains

Information about the supported blockchains can be found on [this page](/sanapi/supported-blockchains) .

## Rate Limits

The [rate limits page](/sanapi/rate-limits) describes how are the API calls counted and the rate limits applied.

## Complexity

Each API query can fetch only a limited amount of data points. The [complexity page](/sanapi/complexity) describe how complexity analysis decides whether a given query will be executed or will be rejected.

## Glossary

The meaning of some of the terms used on this page can be found in the dedicated [glossary page](/glossary).
