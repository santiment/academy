---
title: API Access to Sanqueries
author: Santiment Team
date: 2023-03-29
description: How to execute queries using the API
---

## Overview

Before you start, make sure you acquaint yourself with the Sanqueries product
and the SQL queries you can write by reading the `Introduction`, `Exploration`
and `Writing SQL Queries` articles that can be found on the [Sanqueries Oveview](/sanqueries/overview/) page.

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

- Directly execute the `computeRawClickhouseQuery` GraphQL query against the API graphql endpoint.
- Use the [sanpy execute_sql function](https://github.com/santiment/sanpy#execute-sql-queries-and-get-the-result) to execute an SQL query and get the result as a Pandas DataFrame.

### Direct API call

The direct API calls can be made using any HTTP client in any programming language.

#### Request Example

```graphql
{
  computeRawClickhouseQuery(
    query: "SELECT get_metric_name(metric_id) AS metric, get_asset_name(asset_id) AS asset, dt, value FROM daily_metrics_v2 LIMIT {{limit}}",
    parameters: "{\"limit\": 2}"
  ){
    columns
    columnTypes
    rows
  }
}
```

You can execute the above query in your terminal via the followign curl command `curl`:

```bash
curl \
-X POST \
-H "Content-Type: application/graphql" \
-H "Authorization: Apikey <YOUR_OWN_API_KEY>"\
--data '
{ getMetric(metric: "dev_activity"){ timeseriesData( slug: "ethereum" from: "2020-02-10T07:00:00Z" to: "2020-03-10T07:00:00Z" interval: "1w"){ datetime value } } }' https://api.santiment.net/graphql
```

#### Result Example

The result is a JSON object:

```json
{
  "data": {
    "computeRawClickhouseQuery": {
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
          "stack_circulation_7d",
          "0chain",
          "2015-07-17T00:00:00Z",
          0
        ],
        [
          "stack_circulation_7d",
          "0chain",
          "2015-07-18T00:00:00Z",
          0
        ]
      ]
    }
  }
}
```

#### Request arguments definition

The `computeRawClickhouseQuery` accepts two arguments:

- `query` - The SQL query to execute. The query must be a valid SQL query that
  can be executed against the Clickhouse database. The article [Writing SQL Queries](/sanqueries/writing-sql-queries/) is a recommended read.
  The query allows for parametrization by using named parameters. Each parameter has a key and a value.
  The query contains the parameter name surrounded in double curly braces: `{{key}}`.
- `parameters` - A stringified JSON object that contains the key-value pairs. When the SQL query
  is executed, the `{{key}}` templates are replaced with the corresponding values from the `parameters` object.

#### Result fields interpretation

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
interacts with the above described `computeRawClickhouseQuery` API. The function accepts two
named parameters - `query` and `parameters`, runs the query and returns the result as a Pandas DataFrame.

#### Request Example

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

#### Result Example

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

#### Request parameters definition

The `execute_sql` function accepts three named parameters - one mandatory and two optinal:

- `query` - The meaning is the same as in the `computeRawClickhouseQuery` API described. This parameter is mandatory/
- `parameters` - The meaning is the same as in the `computeRawClickhouseQuery` API described above.
  The format here is a Python dictionary that automatically gets converted to a JSON string when
  executing the request. If the query does not have any parameters, this parameter can be omitted.
- `set_index` - The name of the column to use as the index of the returned DataFrame. If not
  specified, the index will be a range of integers. This parameter is optional.

#### Result parameters definition

The `execute_sql` function returns a Pandas DataFrame with the result of the query.
The name of each column is the name of the column in the database table or the alias
specified with the `AS` keyword. If an aggregation function is used, it is highly recommended
to specify the alias for the column, otherwise the name of the column will be the expression itself.
