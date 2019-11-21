---
title: "API Reference"
author: "Santiment team"
date: "2019-09-20"
---

# API Reference

This page contains a reference of all the APIs provided by Santiment.

## Overview

Santiment API uses [GraphQL](https://graphql.org). From the beginning we decided
to use GraphQL instead of REST for a number of reasons:

- You can request exactly the data you need and also easily batch requests together.
  This is effectevly handling the issues with underfetching and overfetching data. Why
  fetching all 20+ fields of a project when you only need its name?
- The request describes the format of the response. You no longer need
  to wonder what data the result contains and how to parse it.
- Easy out-of-the-box way to explore our API via our Live Explorer

## Authentication

Some of the APIs require to have a valid API key, belonging to an account with a
paid subscription to access all the data. The API key can be generated on your
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

If the query does not return status code 200, then something else is happening. Here are some of the options:

- 429 - you are being rate limited. Reduce the amount of requests you are doing
- 502 - an internal server error has occured. Let us know at [https://santiment.net/discord](https://santiment.net/discord)
  or at the #support channel

## Live API Explorer

There is a live explorer, where you can run queries directly from the browser. The
explorer is accessible here: [https://api.santiment.net/graphiql](https://api.santiment.net/graphiql)

Here is an example of running a query and seeing the results directly in the browser:

[https://api.santiment.net/graphiql?query=%7B%0A%20%20transactionVolume(slug%3A%22santiment%22%2C%20from%3A%222019-01-01T00%3A00%3A00Z%22%2C%20to%3A%222019-03-01T00%3A00%3A00Z%22)%20%7B%0A%20%20%20%20datetime%0A%20%20%20%20transactionVolume%0A%20%20%7D%0A%7D](<https://api.santiment.net/graphiql?query=%7B%0A%20%20transactionVolume(slug%3A%22santiment%22%2C%20from%3A%222019-01-01T00%3A00%3A00Z%22%2C%20to%3A%222019-03-01T00%3A00%3A00Z%22)%20%7B%0A%20%20%20%20datetime%0A%20%20%20%20transactionVolume%0A%20%20%7D%0A%7D>)

## Running requests with `curl`

You can run requests with curl by passing the GraphQL query as the body of the request. Here is an exmaple how to run the `transactionVolume` query:

```bash
curl \
-X POST \
-H "Content-Type: application/graphql" \
--data '{ getMetric(metric: "transaction_volume"){
  timeseriesData(
    slug:"santiment"
    from:"2019-01-01T00:00:00Z"
    to:"2019-03-01T00:00:00Z"
    interval: "1d") {
        datetime
        value
    }
  }
}' \
https://api.santiment.net/graphql
```

## Glossary

There are some terms used in this document. Here is a list and discription of them:

- `slug` - An ID we use in the API to identify projects. You can find the slug
  of the projects by using the `allProjects` API.
- `interval` - A representation of time intervals like 5 minutes, 2 days or 4 weeks.
  An interval is represented as a string starting with a number and followed by one of the suffixes:

  - `s` - second
  - `m` - minute
  - `h` - hour
  - `d` - day
  - `w` - week

  Note that there is no suffix for specifying months due to months not containing a fixed amount of days.

  An interval is used when fetching timeseries data. If the raw data is
  available at 5 minute intervals but you want to fetch it daily, `interval: "1d"`
  should be provided as parameter..

- `ISO 8601 format` - The date time format used in the API. The format is `<year>-<month>-<day>T<hour>:<minute>:<second>Z`.
  For example Jan 10th 2019 12:34:56 is `2019-01-10T12:34:56Z`
- `API key` - Your API for accessing the premium features in the API. See the `Authentication` section for more details

## Start exploring the API

[Start exploring the API here](./exploring.md)
