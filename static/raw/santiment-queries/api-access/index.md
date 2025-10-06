---
title: API Access to Sanqueries
author: Santiment Team
date: 2023-03-29
description: How to execute queries using the API
---

## Overview

Before you start, make sure you acquaint yourself with the Sanqueries product
and the SQL queries you can write by reading the `Introduction`, `Exploration`
and `Writing SQL Queries` articles that can be found on the [Sanqueries Oveview](/santiment-queries/introduction/) page.

The [Santiment Queries Web Interface](https://app.santiment.net/queries) is only
one of the ways to execute queries and access the data.

For those who want to automate the process of executing queries, we provide access
access via our GraphQL API. You can query the API endpoint directly or use our
[python library](https://github.com/santiment/sanpy).

## When to use it?

If the data needs to be consumed by another system, that system can use the API
to compute an SQL query and get the results as a JSON object.

A few examples of when the API can be used:

- When the data needs to be consumed by another system at a regular interval
  (e.g. every hour).
- When the same query needs to be executed multiple times with different
  arguments.
- Any use case that requires automation is a good candidate for
  using the API.

## How to use the Web interface to write queries for the API?

The web interface is a powerful tool for exploring the data, writing queries,
observing the results in real-time or explore prebuilt dashboards.

Even when the data is consumed only through the API, it is recommended to use
the web interface to write the SQL queries. The web interface
facilitates the process of writing queries by providing syntax highlighting,
auto-completion and a preview of the result in real-time, speeding up the
development and debugging process. When the query is ready, it can be copied
and used in the API.


## API Endpoint

On the [API Overview](/sanapi/#overview/) page one can find information how to access the API.

There are two ways to execute queries using the API:

- Directly execute the `runRawSqlQuery` GraphQL query against the API graphql endpoint;
- Use the [sanpy execute_sql function](https://github.com/santiment/sanpy#execute-sql-queries-and-get-the-result) to execute an SQL query and get the result as a Pandas DataFrame. The python library itself also uses the API, but provides functions that hide the details of the API.

### The query

The query that is used in the examples bellow is the following:

```sql
SELECT
  get_metric_name(metric_id) AS metric,
  get_asset_name(asset_id) AS asset,
  dt,
  argMax(value, computed_at) AS value
FROM daily_metrics_v2
WHERE
  asset_id = get_asset_id('bitcoin') AND
  metric_id = get_metric_id('nvt') AND
  dt >= now() - INTERVAL 7 DAY
GROUP BY dt, metric_id, asset_id
ORDER BY dt ASC
```

This query fetches one value per day of the `nvt` metric for the last 7 days.

The examples below show how to parameterize the query in order to provide some of the arguments separately, instead of hardcoding them.
The following parameters are used:
- `slug` - A string representing the slug of a project;
- `metric` - A string representing the name of a metric;
- `last_n_day` - An integer representing the number of days to be fetched.

### Direct API call

The direct API calls can be made using any HTTP client in any programming language.
What you need to do is send a POST request and put the query in the body.

The query looks like this: 
```graphql
{
  runRawSqlQuery(
    sqlQueryText: "SELECT\n    get_metric_name(metric_id) AS metric,\n    get_asset_name(asset_id) AS asset,\n    dt,\n    argMax(value, computed_at) AS value\n  FROM daily_metrics_v2\n  WHERE\n    asset_id = get_asset_id({{slug}}) AND\n    metric_id = get_metric_id({{metric}}) AND\n    dt >= now() - INTERVAL {{last_n_days}} DAY\n  GROUP BY dt, metric_id, asset_id\n  ORDER BY dt ASC",
    sqlQueryParameters: "{\"slug\": \"bitcoin\", \"last_n_days\": 7, \"metric\": \"nvt\"}"
  ){
    columns
    columnTypes
    rows
  }
}
```

**[Run in GraphiQL Live Explorer](https://api.santiment.net/graphiql?query=%7B%0A%20%20runRawSqlQuery(%0A%20%20%20%20sqlQueryText%3A%20%22SELECT%5Cn%20%20%20%20get_metric_name(metric_id)%20AS%20metric%2C%5Cn%20%20%20%20get_asset_name(asset_id)%20AS%20asset%2C%5Cn%20%20%20%20dt%2C%5Cn%20%20%20%20argMax(value%2C%20computed_at)%20AS%20value%5Cn%20%20FROM%20daily_metrics_v2%5Cn%20%20WHERE%5Cn%20%20%20%20asset_id%20%3D%20get_asset_id(%7B%7Bslug%7D%7D)%20AND%5Cn%20%20%20%20metric_id%20%3D%20get_metric_id(%7B%7Bmetric%7D%7D)%20AND%5Cn%20%20%20%20dt%20%3E%3D%20now()%20-%20INTERVAL%20%7B%7Blast_n_days%7D%7D%20DAY%5Cn%20%20GROUP%20BY%20dt%2C%20metric_id%2C%20asset_id%5Cn%20%20ORDER%20BY%20dt%20ASC%22%2C%0A%20%20%20%20sqlQueryParameters%3A%20%22%7B%5C%22slug%5C%22%3A%20%5C%22bitcoin%5C%22%2C%20%5C%22last_n_days%5C%22%3A%207%2C%20%5C%22metric%5C%22%3A%20%5C%22nvt%5C%22%7D%22%0A%20%20)%7B%0A%20%20%20%20columns%0A%20%20%20%20columnTypes%0A%20%20%20%20rows%0A%20%20%7D%0A%7D%0A)**

> **Note**: In order to be able to run the query in the GraphiQL Explorer you need to login on [Sanbase](https://app.santiment.net) on the same browser.

### curl

You can execute the  query in your terminal via the following curl command:

```bash
curl 'https://api.santiment.net/graphql' \
-X POST \
-H 'Content-Type: application/graphql' \
-H 'Authorization: Apikey <YOUR_API_KEY>' \
--data '{runRawSqlQuery(sqlQueryText: "SELECT   get_metric_name(metric_id) AS metric,   get_asset_name(asset_id) AS asset,   dt,   argMax(value, computed_at) AS value FROM daily_metrics_v2 WHERE   asset_id = get_asset_id({{slug}}) AND   metric_id = get_metric_id({{metric}}) AND   dt >= now() - INTERVAL {{last_n_days}} DAY GROUP BY dt, metric_id, asset_id ORDER BY dt ASC", sqlQueryParameters: "{\"slug\": \"bitcoin\", \"metric\": \"nvt\", \"last_n_days\": 7}"){columns columnTypes rows}}' 
```

> **Note**: If you have the `jq` tool installed, you can pipe the result into it to pretty print the result.

#### Result Example

The result of both the direct API call and the curl command is a JSON. The dates and values will differ when you execute the query.

```json
{
  "data": {
    "runRawSqlQuery": {
      "columnTypes": [
        "String",
        "String",
        "Date",
        "Float64"
      ],
      "columns": [
        "metric",
        "asset",
        "dt",
        "value"
      ],
      "rows": [
        [
          "nvt",
          "bitcoin",
          "2025-01-10T00:00:00Z",
          175.20088476942317
        ],
        [
          "nvt",
          "bitcoin",
          "2025-01-11T00:00:00Z",
          471.06125719541876
        ],
        [
          "nvt",
          "bitcoin",
          "2025-01-12T00:00:00Z",
          588.6754853340366
        ],
        [
          "nvt",
          "bitcoin",
          "2025-01-13T00:00:00Z",
          306.4015448498733
        ],
        [
          "nvt",
          "bitcoin",
          "2025-01-14T00:00:00Z",
          272.04406973516427
        ],
        [
          "nvt",
          "bitcoin",
          "2025-01-15T00:00:00Z",
          223.79467244976001
        ],
        [
          "nvt",
          "bitcoin",
          "2025-01-16T00:00:00Z",
          811.1304231153288
        ]
      ]
    }
  }
}
```

#### API request arguments definition

The `runRawSqlQuery` accepts two arguments:

- `sqlQueryText` - The SQL query to execute. The query must be a valid SQL query that
  can be executed against the Clickhouse database. The article [Writing SQL Queries](/santiment-queries/writing-sql-queries/) is a recommended read.
  The query allows for parametrization by using named parameters. Each parameter has a key and a value.
  The query contains the parameter name surrounded in double curly braces: `{{key}}`.
- `sqlQueryParameters` - A stringified JSON object that contains the key-value pairs. When the SQL query
  is executed, the `{{key}}` templates are replaced with the corresponding values from the `sqlQueryParameters` map.

#### API result fields interpretation

The result of the GraphQL query contains the result of the executed SQL query.
The selected fields in this example are: `columns`, `columnTypes` and `rows`.

The meaning of the fields is:

- `columns` is a list of the column names in the result. The order of the columns
  is specified in the SQL query itself. The name of the column is the name of the column
  in the database table or the alias specified with the `AS` keyword. If an aggregation
  function is used, it is highly recommended to specify the alias for the column, otherwise
  the name of the column will be the expression itself.
- `columnTypes` is a list of the types of the columns in the result. The order of the
- types is the same as in the `columns` field. The types are the raw Clickhouse type.
  Example types are `UInt64`, `Date`, `Float64`, `DateTime`, `String`, etc. These type are mapped
  to JSON types as JSON has a limited number of types. All integer and float types are
  mapped to the JSON number type but with specified meaning (size, type and sign of the number).
  A lot of the other types are transpored as JSON string - `String`, `Date`, `DateTime` and others
  are JSON strings with specified meaning.
- `rows` is a list of lists, each inner list is a row in the result. The order of the
  rows is the same as in the result of the SQL query. The order of the columns in the
  inner list is the same as in the `columns` field.

### Using the Python library

The [sanpy](https://github.com/santiment/sanpy) provides the `execute_sql` function, which
interacts with the above described `runRawSqlQuery` API. The function accepts two
named parameters - `query` and `parameters`, runs the query and returns the result as a Pandas DataFrame.

#### sanpy request example

To run the code:

- Install sanpy with `pip install sanpy`.
- Replace `YOUR_OWN_API_KEY` with your API key.

```python
import san

san.ApiConfig.api_key = 'YOUR_OWN_API_KEY'

san.execute_sql(query="""
  SELECT
    get_metric_name(metric_id) AS metric,
    get_asset_name(asset_id) AS asset,
    dt,
    argMax(value, computed_at) AS value
  FROM daily_metrics_v2
  WHERE
    asset_id = get_asset_id({{slug}}) AND
    metric_id = get_metric_id({{metric}}) AND
    dt >= now() - INTERVAL {{last_n_days}} DAY
  GROUP BY dt, metric_id, asset_id
  ORDER BY dt ASC
""",
parameters={
  'slug': 'bitcoin',
  'metric': 'nvt',
  'last_n_days': 7
},
set_index="dt")
```

#### sanpy result example

The result is a Pandas DataFrame:

```
dt                   metric    asset       value
2023-03-23T00:00:00Z    nvt  bitcoin  151.301315
2023-03-24T00:00:00Z    nvt  bitcoin  165.503689
2023-03-25T00:00:00Z    nvt  bitcoin  291.854742
2023-03-26T00:00:00Z    nvt  bitcoin  379.362459
2023-03-27T00:00:00Z    nvt  bitcoin  195.730616
2023-03-28T00:00:00Z    nvt  bitcoin  181.268121
2023-03-29T00:00:00Z    nvt  bitcoin  376.403649
```

#### sanpy request parameters definition

The `execute_sql` function accepts three named parameters - one mandatory and two optinal:

- `query` - The meaning is the same as in the `runRawSqlQuery` API described. This parameter is mandatory/
- `parameters` - The meaning is the same as in the `runRawSqlQuery` API described above.
  The format here is a Python dictionary that automatically gets converted to a JSON string when
  executing the request. If the query does not have any parameters, this parameter can be omitted.
- `set_index` - The name of the column to use as the index of the returned DataFrame. If not
  specified, the index will be a range of integers. This parameter is optional.

#### sanpy result parameters definition

The `execute_sql` function returns a Pandas DataFrame with the result of the query.
The name of each column is the name of the column in the database table or the alias
specified with the `AS` keyword. If an aggregation function is used, it is highly recommended
to specify the alias for the column, otherwise the name of the column will be the expression itself.
