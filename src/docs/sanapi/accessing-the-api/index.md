---
title: Accessing the API
author: Santiment Team
date: 2023-06-01
---

- [Overview](#overview)
- [Access the API](#access-the-api)
  - [GraphiQL API Explorer](#graphiql-api-explorer)
  - [Python library](#python-library)
  - [Programming language of your choice](#programming-language-of-your-choice)
  - [curl](#curl)
- [Authentication](#authentication)
  - [GraphiQL API Explorer](#authentication-with-graphiql-explorer)
  - [curl](#authentication-with-curl)
- [Errors](#errors)

## Overview

Santiment API utilizes [GraphQL](https://graphql.org). The reasons for choosing GraphQL over REST include:

- It allows for precise data requests and easy batching of requests. This effectively addresses the problems of underfetching and overfetching data. For instance, why fetch all 20+ fields of a project when only its name is required?

- The request outlines the format of the response. This eliminates the need to guess what data the result contains and how to parse it.

- It provides an easy, ready-to-use method to explore our API via our Live Explorer.

## Access the API

Please note that some metrics may not be freely available or may have restrictions, such as limited historical and real-time data. To explore these metrics without restrictions, use the slug `santiment`.

There are several methods to retrieve data from Santiment's API:

### GraphiQL API Explorer

The Graph**i**QL (graphical interactive in-browser GraphQL IDE) allows you to run queries directly from your browser. You can access the explorer at the following link: [https://api.santiment.net/graphiql](https://api.santiment.net/graphiql).

Here's an example of how to run a query and view the results directly in your browser:

[GraphQL Request fetching transaction volume](<https://api.santiment.net/graphiql?query=%7B%0A%20%20getMetric(metric%3A%20%22transaction_volume%22)%7B%0A%20%20%20%20timeseriesData(%0A%20%20%20%20%20%20slug%3A%20%22santiment%22%0A%20%20%20%20%20%20from%3A%20%222020-02-10T07%3A00%3A00Z%22%0A%20%20%20%20%20%20to%3A%20%222020-03-10T07%3A00%3A00Z%22%0A%20%20%20%20%20%20interval%3A%20%221w%22)%7B%0A%20%20%20%20%20%20%20%20datetime%0A%20%20%20%20%20%20%20%20value%0A%20%20%20%20%20%20%7D%0A%20%20%7D%0A%7D&variables=>)


### Python library

Santiment offers a Python wrapper for the GraphQL API, known as `sanpy`. You can find the documentation and installation instructions for this library [here](https://github.com/santiment/sanpy). 

You can install `sanpy` using `pip` with the following command:

```bash
pip install sanpy
```

To fetch Ethereum development activity data using this library, use the following code:

```python
san.get(
  "dev_activity/ethereum",
  from_date="2019-01-01T00:00:00Z",
  to_date="2019-01-07T00:00:00Z",
  interval="1d"
)
```

The result will be a pandas dataframe, as shown below:

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

In the [san-sdk](https://github.com/santiment/san-sdk) repository, you can find
examples of how to query the API using various programming languages. Here are
some examples:

- [R](https://github.com/santiment/san-sdk/tree/master/R-graphql)
- [Ruby](https://github.com/santiment/san-sdk/blob/master/ruby-graphql/example.rb)
- [Elixir](https://github.com/santiment/san-sdk/blob/master/elixir-graphql/san_graphql_ex/lib/san_graphql_ex.ex)

### curl

The following GraphQL request will be executed with curl:

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

Copy and paste the following curl request into your console:

```bash
curl \
-X POST \
-H "Content-Type: application/graphql" \
--data '
{ getMetric(metric: "dev_activity"){ timeseriesData( slug: "ethereum" from: "2020-02-10T07:00:00Z" to: "2020-03-10T07:00:00Z" interval: "1w"){ datetime value } } }' https://api.santiment.net/graphql
```

The response should look similar to this:

```bash
{"data":{"getMetric":{"timeseriesData":[{"datetime":"2020-02-13T00:00:00Z","value":1281.0},{"datetime":"2020-02-20T00:00:00Z","value":1115.0},{"datetime":"2020-02-27T00:00:00Z","value":952.0},{"datetime":"2020-03-05T00:00:00Z","value":605.0}]}}}
```

If you have the `jq` tool installed, you can use it to visualize the response more effectively:

```bash
curl \
-X POST \
-H "Content-Type: application/graphql" \
--data '
{ getMetric(metric: "dev_activity"){ timeseriesData( slug: "ethereum" from: "2020-02-10T07:00:00Z" to: "2020-03-10T07:00:00Z" interval: "1w"){ datetime value } } }' https://api.santiment.net/graphql \
| jq .data.getMetric.timeseriesData
```

The output should look like this:

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

## Authentication

Certain APIs necessitate a valid API key, which must be linked to an account
with a paid subscription to access additional data. You can generate your API
key on your [Account Settings](https://app.santiment.net/account#api-keys)
page.

After generating your API key, you need to include it as an additional HTTP
header in the format `Authorization: Apikey <YOUR_OWN_API_KEY>`. 

### Authentication with GraphiQL Explorer

Santiment also offers an advanced version of GraphiQL that is particularly useful!\[\]
for API users:
[https://api.santiment.net/graphiql_advanced](https://api.santiment.net/graphiql_advanced).
This version allows users to add HTTP headers, which can be used to include an
API key and authenticate your requests. To do this, simply add the following
header: `Authorization: Apikey YOUR_OWN_API_KEY`.

![](./graphiql_header.png)

### Authentication with curl

Include the `Authorization: Apikey <YOUR_OWN_API_KEY>` header using the `-H` option:

```bash
curl \
  -X POST \
  -H "Content-Type: application/graphql" \
  -H "Authorization: Apikey <YOUR_OWN_API_KEY>"\
  --data '{ curentUser { id} }' \
  https://api.santiment.net/graphql
```
## Errors

GraphQL errors are returned with HTTP status code 200.

To check for errors, you need to check for the presence of the `errors` key in the JSON response.

If the query does not return a status code of `200`, it indicates a different
issue. Here are some possibilities:

- `429` - You're being rate-limited. Reduce the number of requests you're
  making. Check the [Rate limits](/sanapi/rate-limits) page for more
  information.
- `5xx` - An internal server error has occurred. Please let us know in the
  support channel on our [Discord server](https://santiment.net/discord).

### Error example - syntax error

For instance, if an invalid query is passed to the API, the following will occur:

```bash
$ curl \
  -X POST \
  -H "Content-Type: application/graphql" \
  --data '{transactionVolume' \
  https://api.santiment.net/graphql | jq .
```
```json
{
  "errors": [
    {
      "message": "syntax error before: ",
      "locations": [
        {
          "line": 1,
          "column": 2
        }
      ]
    }
  ]
}
```

### Error example - missing parameter

If your query is missing an argument, the error response will describe this:

```bash
$  curl \
  -X POST \
  -H "Content-Type: application/graphql" \
  --data '{ getMetric(metric: "price_usd"){ timeseriesData(slug: "bitcoin"){ datetime value } } }' \
  https://api.santiment.net/graphql | jq .
```

```json
{
  "errors": [
    {
      "message": "In argument \"to\": Expected type \"DateTime!\", found null.",
      "locations": [
        {
          "line": 1,
          "column": 34
        }
      ]
    },
    {
      "message": "In argument \"from\": Expected type \"DateTime!\", found null.",
      "locations": [
        {
          "line": 1,
          "column": 34
        }
      ]
    }
  ]
}
```

### Error example - historical and realtime data restriction

If the `from` and/or `to` parameters are outside of the allowed interval for the subscription plan and
[Historical and Realtime data restrictions](/sanapi/historical-and-realtime-data-restrictions) are applied,
the error will look like this:
```bash
$ curl \
  -X POST \
  -H "Content-Type: application/graphql" \
  --data '{ getMetric(metric: "mvrv_usd_1d"){ timeseriesData(slug: "bitcoin" from: "2015-01-01T00:00:00Z" to: "2016-01-01T00:00:00Z"){ datetime value } } }' \
  https://api.santiment.net/graphql | jq .
```
```json
{
  "data": {
    "getMetric": {
      "timeseriesData": null
    }
  },
  "errors": [
    {
      "message": "Both `from` and `to` parameters are outside the allowed interval you can query mvrv_usd_1d with your current subscription SANAPI FREE. Upgrade to a higher tier in order to access more data.\n\nAllowed time restrictions:\n  - `from` - 2023-07-05 10:02:53.682000Z\n  - `to` - 2024-06-04 10:02:53.682000Z\n",
      "path": [
        "getMetric",
        "timeseriesData"
      ],
      "locations": [
        {
          "line": 1,
          "column": 37
        }
      ]
    }
  ]
}
```

<Notebox type="none">
**Read next: [Fetching Metrics](/sanapi/fetching-metrics)**
</Notebox>
