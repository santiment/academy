---
title: API Reference
author: Santiment Team
date: 2020-04-06
description: This page serves as a comprehensive guide to all the APIs provided by Santiment.
---

- [Overview](#overview)
- [How to Access the API](#how-to-access-the-api)
- [Metrics](#metrics)
- [Supported Blockchains](#supported-blockchains)
- [Rate Limits](#rate-limits)
- [Complexity](#complexity)
- [Glossary](#glossary)

## Overview

Santiment API utilizes [GraphQL](https://graphql.org). The decision to use GraphQL over REST was made due to several reasons:

- It allows you to request precisely the data you need and conveniently batch requests together. This effectively addresses the issues of underfetching and overfetching data. For instance, why fetch all 20+ fields of a project when you only need its name?

- The request describes the format of the response. This eliminates the need to guess what data the result contains and how to parse it.

- It provides an easy, out-of-the-box method to explore our API via our Live Explorer.

**Example**

The example below demonstrates a GraphQL query used to fetch timeseries price data. The parameters control the time range, the interval between data points, and how all the values within an interval are aggregated.

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

Instructions on how to access the API can be found [here](/sanapi/accessing-the-api).

## Metrics

You can find information on how to explore and fetch the available metrics [here](/sanapi/fetching-metrics).

## Supported Blockchains

You can find information about the blockchains we support on our [Supported Blockchains page](/sanapi/supported-blockchains).

## Rate Limits

The [Rate Limits Page](/sanapi/rate-limits) provides detailed information on how API calls are counted and how rate limits are applied. 

## Complexity

Each API query has a limit to the amount of data points it can fetch. The [Complexity Page](/sanapi/complexity) provides a detailed explanation on how complexity analysis determines whether a given query will be executed or rejected. 

## Glossary

You can find the definitions of some terms used on this page in our dedicated [glossary page](/glossary).

