---
title: Rate Limits, Restrictions and Credits Cost
author: Santiment Team
date: 2023-05-19
description: What limits are applied when running queries?
---

## Overview

Santiment Queries is a powerful tool that provides users with access to a Clickhouse database, enabling them to execute SQL queries and obtain relevant metrics. These queries are executed as GraphQL API calls.
The queries executed can vastly differ in their resource consumption. Because of that, there is an additional credits model that restricts the queries.

## API Calls Rate Limits

The queries are executed as ordinary GraphQL API calls. The same [rate limits](/sanapi/rate-limits) apply to these SQL queries as well.

## Execution Restrictions

When executing a query there are two main restrictions that are applied which, if exceeded, will stop the execution of the query and return an error.

**Timeout**: The query execution must finish in 60 seconds
**RAM memory consumption**: If the query needs more than 10GB of RAM memory to run, it will be terminated.


## Credits Cost

The execution of a query spends RAM, CPU and IO (disk) resources. The combination of all resources spent with the size of the result is used to compute the cost of the query. The bigger the result and the more resources are spent, the higher the cost of the query.

The available credits per month are determined by the subscription plan.


Check the plans and restrictions for **Sanbase** subscriptions on the:
- [Sanbase pricing page](https://app.santiment.net/pricing?plans=individual)
- [Sanbase plans academy page](/products-and-plans/sanbase-plans/)

Check the plans and restrictions for **API** subscriptions on the:
- [API pricing page](https://app.santiment.net/pricing?plans=business)
- [API plans academy page](/products-and-plans/sanapi-plans/)

### Example

The example below shows how you can check the credits cost of your query.
```graphql
{
  computeRawClickhouseQuery(query: "SELECT * FROM intraday_metrics limit 5", parameters: "{}") {
    clickhouseQueryId
  }
}
```
```json
{
  "data": {
    "computeRawClickhouseQuery": {
      "clickhouseQueryId": "175F9502835E975E"
    }
  }
}
```

In order to check the credits cost, the `clickhouseQueryId` needs to be taken and provided to another query.
It is important to note that the credit cost is not immediately available after the execution of the query.
```graphql
{
  getClickhouseQueryExecutionStats(clickhouseQueryId: "175F9502835E975E") {
    creditsCost
    cpuTimeMicroseconds
    memoryUsageGb
    queryDurationMs
    readGb
    readCompressedGb
    readRows
    resultGb
    resultRows
  }
}
```
```json
{
  "data": {
    "getClickhouseQueryExecutionStats": {
      "cpuTimeMicroseconds": 41156,
      "creditsCost": 1,
      "memoryUsageGb": 0.011724,
      "queryDurationMs": 69,
      "readCompressedGb": 0.000001,
      "readGb": 0,
      "readRows": 10,
      "resultGb": 0,
      "resultRows": 5
    }
  }
}
```

In the same query if 100 thousand rows are returned instead of just 5, the credit cost jumps to 109. 
