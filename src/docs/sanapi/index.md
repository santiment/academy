---
title: API Reference
author: Santiment Team
date: 2020-04-06
description: This page serves as a comprehensive guide to all the APIs provided by Santiment.
---

- [Overview](#overview)
- [How to Access the API](#how-to-access-the-api)
- [Fetching Metrics](#fetching-metrics)
- [Rate Limits](#rate-limits)
- [Complexity](#complexity)
- [Glossary](#glossary)
- [Supported Blockchains](#supported-blockchains)

## Overview

Santiment API utilizes [GraphQL](https://graphql.org). The decision to use
GraphQL over REST was made due to several reasons:

- It allows you to request precisely the data you need and conveniently batch
  requests together. This effectively addresses the issues of underfetching and
  overfetching data. For instance, why fetch all 20+ fields of a project when
  you only need its name?

- The request describes the format of the response. This eliminates the need to
  guess what data the result contains and how to parse it.

- It provides an easy, out-of-the-box method to explore our API via our Live
  Explorer.

### Example

The example below demonstrates a GraphQL query used to fetch timeseries price
data. The parameters control the time range, the interval between data points,
and how all the values within an interval are aggregated.

```graphql-explorer
{
  getMetric(metric: "twitter_followers") {
    timeseriesDataJson(
      slug: "ethereum"
      from: "2023-01-01T00:00:00Z"
      to: "2023-01-05T00:00:00Z"
      interval: "1d"
      aggregation: LAST)
  }
}
```

## How to access the API

Instructions how to access the API can be found on the [Accessing the API](/sanapi/accessing-the-api) page.

## Fetching Metrics

You can find information on how to explore and fetch the available metrics on the [Fetching Metrics](/sanapi/fetching-metrics) page.

## Common GraphQL queries

The list of [Common GraphQL queries](/sanapi/common-queries) gives examples for
the different type of queries one can craft and execute.

## Rate Limits

The [Rate Limits Page](/sanapi/rate-limits) provides detailed information on
how API calls are counted and how rate limits are applied.

## Historical and Realtime data restrictions

The [Historical and Realtime data
restrictions](/sanapi/historical-and-realtime-data-restrictions) provides
information about the applied restrictions per plan.

## Complexity

Each API query has a limit to the amount of data points it can fetch. The
[Complexity Page](/sanapi/complexity) provides a detailed explanation on how
complexity analysis determines whether a given query will be executed or
rejected. 

## Glossary

You can find the definitions of some terms used on this page in our dedicated
[glossary page](/glossary).

## Supported Blockchains

You can find information about the blockchains we support on our [Supported
Blockchains page](/sanapi/supported-blockchains).

