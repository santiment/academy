---
title: "API Reference"
author: "Santiment team"
date: "2019-09-20"
description: This page contains a reference of all the APIs provided by Santiment.
---

## Overview

- [Available Metrics](#available-metrics)
- [Access the API](#access-the-api)
  - [Live API Explorer](#live-api-explorer)
  - [curl](#curl)
  - [sanpy - Santiment-provided Python library](#santiment-provided-python-library)
  - [Programming langauge of your choice](#programming-language-of-your-choice)
- [Authentication](#authentication)
- [Errors](#errors)
- [Glossary](#glossary)
- [Start exploring the API](#start-exploring-the-api)

Santiment API uses [GraphQL](https://graphql.org). From the beginning it was decided to use GraphQL instead of REST for a number of reasons:

- You can request exactly the data you need and easily batch requests together.
  This is effectively handling the issues with underfetching and overfetching data. Why fetching all 20+ fields of a project when you only need its name?
- The request describes the format of the response. You no longer need to wonder what data the result contains and how to parse it.
- Easy out-of-the-box way to explore our API via our Live Explorer

## Available Metrics

Full list of metrics can be found [here](../metrics).

## Access the API

> Some of the metrics are not available for free or are restricted - historical and realtime data is cut off. In order to explore them use slug `santiment` as it has full access without any restrictions.

There are different ways to fetch data from Santiment's API:

### Live API Explorer

There is a live explorer, where you can run queries directly from the browser. The
explorer is accessible here: [https://api.santiment.net/graphiql](https://api.santiment.net/graphiql)

Here is an example of running a query and seeing the results directly in the browser:

[GraphQL Request fetching transaction volume](<https://api.santiment.net/graphiql?query=%7B%0A%20%20getMetric(metric%3A%20%22transaction_volume%22)%7B%0A%20%20%20%20timeseriesData(%0A%20%20%20%20%20%20slug%3A%20%22santiment%22%0A%20%20%20%20%20%20from%3A%20%222020-02-10T07%3A00%3A00Z%22%0A%20%20%20%20%20%20to%3A%20%222020-03-10T07%3A00%3A00Z%22%0A%20%20%20%20%20%20interval%3A%20%221w%22)%7B%0A%20%20%20%20%20%20%20%20datetime%0A%20%20%20%20%20%20%20%20value%0A%20%20%20%20%20%20%7D%0A%20%20%7D%0A%7D&variables=>)

### curl

The following GraphQL request will be passed as the body of the request:

```graphql
{
  getMetric(metric: "dev_activity") {
    timeseriesData(
      slug: "ethereum"
      from: "2020-02-10T07:00:00Z"
      to: "2020-03-10T07:00:00Z"
      interval: "1w"
    ) {
      datetime
      value
    }
  }
}
```

Use the curl tool to get development activity of Ethereum.
Copy and paste this curl request to your console:

```bash
curl \
-X POST \
-H "Content-Type: application/graphql" \
--data '
{ getMetric(metric: "dev_activity"){ timeseriesData( slug: "ethereum" from: "2020-02-10T07:00:00Z" to: "2020-03-10T07:00:00Z" interval: "1w"){ datetime value } } }' https://api.santiment.net/graphql
```

A similar response is returned:

```bash
{"data":{"getMetric":{"timeseriesData":[{"datetime":"2020-02-13T00:00:00Z","value":1281.0},{"datetime":"2020-02-20T00:00:00Z","value":1115.0},{"datetime":"2020-02-27T00:00:00Z","value":952.0},{"datetime":"2020-03-05T00:00:00Z","value":605.0}]}}}
```

If you have the `jq` tool installed it could help visuallize this response even better:

```bash
curl \
-X POST \
-H "Content-Type: application/graphql" \
--data '
{ getMetric(metric: "dev_activity"){ timeseriesData( slug: "ethereum" from: "2020-02-10T07:00:00Z" to: "2020-03-10T07:00:00Z" interval: "1w"){ datetime value } } }' https://api.santiment.net/graphql \
| jq .data.getMetric.timeseriesData
```

shows:

```json
[
  {
    "datetime": "2020-02-13T00:00:00Z",
    "value": 1281
  },
  {
    "datetime": "2020-02-20T00:00:00Z",
    "value": 1115
  },
  {
    "datetime": "2020-02-27T00:00:00Z",
    "value": 952
  },
  {
    "datetime": "2020-03-05T00:00:00Z",
    "value": 605
  }
]
```

### Santiment-provided Python library

There is a Python wrapper for the graphql API.

The library is called `sanpy` and documentation and instructions how to install can be found [here](https://github.com/santiment/sanpy)

It can be installed via `pip`

```bash
pip install sanpy
```

The same ethereum development activity data with this library can be fetched like this:

```python
san.get(
  "dev_activity/ethereum",
  from_date="2019-01-01T00:00:00Z",
  to_date="2019-01-07T00:00:00Z",
  interval="1d"
)
```

The result is a pandas dataframe:

```python
datetime                    activity
2019-01-01 00:00:00+00:00       44.0
2019-01-02 00:00:00+00:00       89.0
2019-01-03 00:00:00+00:00      140.0
2019-01-04 00:00:00+00:00      177.0
2019-01-05 00:00:00+00:00       46.0
2019-01-06 00:00:00+00:00       22.0
```

### Programming language of your choice

In the [san-sdk](https://github.com/santiment/san-sdk) repository there are examples how to query the API with:

- [R](https://github.com/santiment/san-sdk/tree/master/R-graphql)
- [Ruby](https://github.com/santiment/san-sdk/blob/master/ruby-graphql/example.rb)
- [Elixir](https://github.com/santiment/san-sdk/blob/master/elixir-graphql/san_graphql_ex/lib/san_graphql_ex.ex)
- [Javascript #1](https://jsfiddle.net/Zatcepin/ngzc2rps/)
  - Plot Daily Active Addresses with Highchart
- [Javascript #2](https://jsfiddle.net/Zatcepin/1nLgc3m2/)
  - Compute combined ETH balance of all projects

## Authentication

Some of the APIs require a valid API key, belonging to an account with a
paid subscription to access more data. The API key can be generated on your
[Account Settings](https://app.santiment.net/account#api-keys) page.

After that you need to pass the API key as an additional HTTP header
`Authorization: Apikey <YOUR_OWN_API_KEY>`. An example how to do that using curl:

```bash
curl \
  -X POST \
  -H "Content-Type: application/graphql" \
  -H "Authorization: Apikey <YOUR_OWN_API_KEY>"\
  --data '<YOUR_OWN_QUERY>' \
  https://api.santiment.net/graphql
```

## Errors

In case something is not correct with the request, the API will return an error. The API
requests should always return status code 200, even if there was an error processing the
request. An error response is going to include a description of the error that occured.
For example here is what will happen if the query passed to the API is not valid:

```bash
$ curl \
  -X POST \
  -H "Content-Type: application/graphql" \
  --data '{transactionVolume' \
  https://api.santiment.net/graphql | jq .

{
  "errors": [
    {
      "message": "An unknown error occurred during parsing: no function clause matching in Absinthe.Phase.Parse.format_raw_parse_error/1"
    }
  ]
}
```

If your query is missing some argument, that should be described in the error response:

```bash
$ curl \
  -X POST \
  -H "Content-Type: application/graphql" \
  --data '{ transactionVolume(slug:"santiment", from:"2019-01-01T00:00:00Z") { datetime transactionVolume }}' \
  https://api.santiment.net/graphql | jq .

{
  "errors": [
    {
      "locations": [
        {
          "column": 3,
          "line": 1
        }
      ],
      "message": "In argument \"to\": Expected type \"DateTime!\", found null."
    }
  ]
}
```

If the query does not return status code `200`, then something else is happening. Here are some of the options:

- `429` - you are being rate limited. Reduce the amount of requests you are doing
- `5xx` - an internal server error has occured. Let us know in the support channel in our [discord server](https://santiment.net/discord)

## Glossary

There are some terms used in this document like:

- query
- metric
- asset
- slug
- interval
- ISO8601
- apikey

Their meaning can be found in the dedicated [glossary page](../glossary)
