---
title: Writing SQL Queries
author: Santiment Team
date: 2022-08-17
description: First steps in using SQL combined with Santiment's datasets
---

## Overview

This document introduces the reader to the basics of Clickhouse SQL and Santiment's datasets.

The available datasets contain two types of data:

- Precomputed metrics: These are calculated and stored using raw data and preprocessing, such as `mvrv_usd` or `daily_active_addresses`.
- Raw data: This includes information like transfers, balances, labels, events, and more.

## Clickhouse Overview

[Clickhouse](https://clickhouse.com/) is a true Column-Oriented Database Management System that excels in storing and working with metrics and crypto-related data due to its exceptional speed. Clickhouse SQL is similar to ANSI SQL with some unique features. It supports `SELECT`, `GROUP BY`, `JOIN`, `ORDER BY`, subqueries in `FROM`, `IN` operator and subqueries in `IN` operator, window functions, numerous aggregate functions (avg, max, min, last, first, etc.), scalar subqueries, and more.

To achieve the highest possible performance, some features are not present:

- No support for foreign keys, but they are simulated in some existing tables (holding pre-computed metrics mostly). For example, there is an `asset_id` column in the `intraday_metrics` table, and an `asset_metadata` table to which the `asset_id` refers. The lack of foreign key support means that the database cannot guarantee referential integrity, so it is enforced by application-level code.
- No full-fledged transactions. The SQL Editor has read-only access, and Clickhouse is used mainly as append-only storage, so the lack of transactions does not cause any issues for this use case.

Official [Clickhouse SQL Reference](https://clickhouse.com/docs/en/sql-reference/)

Some important pages containing useful information:

- [Syntax](https://clickhouse.com/docs/en/sql-reference/syntax/)
- [SELECT Statements](https://clickhouse.com/docs/en/sql-reference/statements/select/)
- [Functions](https://clickhouse.com/docs/en/sql-reference/functions/)
- [Operators](https://clickhouse.com/docs/en/sql-reference/operators/)
- [Aggregate Functions](https://clickhouse.com/docs/en/sql-reference/aggregate-functions/)

## The FINAL keyword

> Note: This part is more technical

There are some keywords that can often be seen in Clickhouse SQL but are not
seen in other known SQL variants. These keywords are explained here.

Values in Clickhouse tables are not updated directly. Instead, in case there is a need to
modify an existing row, the [MergeTree Table Engine](https://clickhouse.com/docs/en/engines/table-engines/mergetree-family/mergetree/) is used.
In order to update an existing row, a new row with the same primary key is
inserted. At some unspecified point in time, Clickhouse will merge all rows with
the same primary key into one. Until that merge happens, all rows will exist and
will appear in selects.

Example: There is one value per day for an asset-metric pair in the
`daily_metrics_v2` table. The value is recomputed every hour and a new row with
the same primary key but different `value` and `computed_at` is inserted.

In order to read the data as if it is already merged, you need to add the
`FINAL` keyword after the table name: 
```sql
SELECT dt, value
FROM daily_metrics_v2 FINAL
WHERE asset_id = get_asset_id('bitcoin') AND  metric_id = get_metric_id('daily_active_addresses')
ORDER BY dt DESC
LIMIT 2
```
Test in [Queries](https://app.santiment.net/queries/?panels=%5B%7B%22name%22%3A%22Default%20panel%20title%22%2C%22sql%22%3A%7B%22query%22%3A%22SELECT%20dt%2C%20value%5CnFROM%20daily_metrics_v2%20FINAL%5CnWHERE%20asset_id%20%3D%20get_asset_id(%27bitcoin%27)%20AND%20%20metric_id%20%3D%20get_metric_id(%27daily_active_addresses%27)%5CnORDER%20BY%20dt%20DESC%5CnLIMIT%202%22%2C%22parameters%22%3A%7B%7D%7D%2C%22settings%22%3A%7B%22type%22%3A%22TABLE%22%2C%22layout%22%3A%5B0%2C0%2C6%2C3%5D%2C%22columns%22%3A%5B%7B%22title%22%3A%22dt%22%2C%22formatterId%22%3A1%7D%2C%7B%22title%22%3A%22value%22%7D%5D%2C%22parameters%22%3A%5B%5D%7D%7D%5D&selected=0?panels=%5B%7B%22name%22%3A%22Default%20panel%20title%22%2C%22sql%22%3A%7B%22query%22%3A%22SELECT%20dt%2C%20value%5CnFROM%20daily_metrics_v2%20FINAL%5CnWHERE%20asset_id%20%3D%20get_asset_id('bitcoin')%20AND%20%20metric_id%20%3D%20get_metric_id('daily_active_addresses')%5CnORDER%20BY%20dt%20DESC%5CnLIMIT%202%22%2C%22parameters%22%3A%7B%7D%7D%2C%22settings%22%3A%7B%22type%22%3A%22TABLE%22%2C%22layout%22%3A%5B0%2C0%2C6%2C3%5D%2C%22columns%22%3A%5B%7B%22title%22%3A%22dt%22%2C%22formatterId%22%3A1%7D%2C%7B%22title%22%3A%22value%22%7D%5D%2C%22parameters%22%3A%5B%5D%7D%7D%5D&selected=0)

This `FINAL` keyword is not free - it slightly reduces the performance. In case
performance is seeked, the same goal can be achieved with standard SQL by using
`GROUP BY` the primary key and aggregate functions. This approach has smaller
performance penalty at the cost of code readability and maintainability.
```sql
SELECT dt, argMax(value, computed_at)
FROM daily_metrics_v2
WHERE asset_id = get_asset_id('bitcoin') AND  metric_id = get_metric_id('daily_active_addresses')
GROUP BY dt, asset_id, metric_id
ORDER BY dt DESC
LIMIT 2
```
Test in [Queries](https://app.santiment.net/queries/?panels=%5B%7B%22name%22%3A%22Default%20panel%20title%22%2C%22sql%22%3A%7B%22query%22%3A%22SELECT%20dt%2C%20argMax(value%2C%20computed_at)%5CnFROM%20daily_metrics_v2%5CnWHERE%20asset_id%20%3D%20get_asset_id(%27bitcoin%27)%20AND%20%20metric_id%20%3D%20get_metric_id(%27daily_active_addresses%27)%5CnGROUP%20BY%20dt%2C%20asset_id%2C%20metric_id%5CnORDER%20BY%20dt%20DESC%5CnLIMIT%202%22%2C%22parameters%22%3A%7B%7D%7D%2C%22settings%22%3A%7B%22type%22%3A%22TABLE%22%2C%22layout%22%3A%5B0%2C0%2C6%2C3%5D%2C%22columns%22%3A%5B%7B%22title%22%3A%22dt%22%2C%22formatterId%22%3A1%7D%2C%7B%22title%22%3A%22argMax(value%2C%20computed_at)%22%7D%5D%2C%22parameters%22%3A%5B%5D%7D%7D%5D&selected=0?panels=%5B%7B%22name%22%3A%22Default%20panel%20title%22%2C%22sql%22%3A%7B%22query%22%3A%22SELECT%20dt%2C%20argMax(value%2C%20computed_at)%5CnFROM%20daily_metrics_v2%5CnWHERE%20asset_id%20%3D%20get_asset_id('bitcoin')%20AND%20%20metric_id%20%3D%20get_metric_id('daily_active_addresses')%5CnGROUP%20BY%20dt%2C%20asset_id%2C%20metric_id%5CnORDER%20BY%20dt%20DESC%5CnLIMIT%202%22%2C%22parameters%22%3A%7B%7D%7D%2C%22settings%22%3A%7B%22type%22%3A%22TABLE%22%2C%22layout%22%3A%5B0%2C0%2C6%2C3%5D%2C%22columns%22%3A%5B%7B%22title%22%3A%22dt%22%2C%22formatterId%22%3A1%7D%2C%7B%22title%22%3A%22argMax(value%2C%20computed_at)%22%7D%5D%2C%22parameters%22%3A%5B%5D%7D%7D%5D&selected=0)

## The PREWHERE Clause

In addition to the standard [WHERE](https://clickhouse.com/docs/en/sql-reference/statements/select/where) clause, Clickhouse also supports the [PREWHERE](https://clickhouse.com/docs/en/sql-reference/statements/select/prewhere/) clause. This optimization allows for more efficient filtering by initially reading only the columns necessary for executing the filtering expression.

When the `FINAL` keyword is not used, the `WHERE` clause is automatically transformed into a `PREWHERE` clause. However, when the `FINAL` keyword is used, the `WHERE` clause does not automatically transform into a `PREWHERE` clause. This transformation in the latter case can lead to different results if columns that are not part of the primary key are used in the filtering.

It is recommended not to use the `PREWHERE` clause unless you are certain of its implications and effects on your query.

## Using Pre-computed Metrics

The pre-computed metrics are located in the following tables:

- `intraday_metrics` - Metrics with more than one value per day. In most cases, these metrics have a new value every 5 minutes. Example: `active_addresses_24h`
- `daily_metrics_v2` - Metrics that have exactly 1 value per day. Example: `daily_active_addresses`

All tables storing pre-computed data have a common set of columns:

- `dt` - A `DateTime` field storing the corresponding date and time.
- `asset_id` - An `UInt64` unique identifier for an asset. The data for that ID is stored in the `asset_metadata` table.
- `metric_id` - An `UInt64` unique identifier for a metric. The data for that ID is stored in the `metric_metadata` table.
- `value` - A `Float` column holding the metric's value for the given asset/metric pair.
- `computed_at` - A `DateTime` column storing the date and time when the given row was computed.

### Fetch data for asset bitcoin and metric **daily_active_addresses**

The following example shows how to fetch rows for Bitcoin's
`daily_active_addresses` metric:
```SQL
SELECT asset_id, metric_id, dt, value
FROM daily_metrics_v2 FINAL
WHERE
    asset_id = (SELECT asset_id FROM asset_metadata FINAL WHERE name = 'bitcoin' LIMIT 1) AND
    metric_id = (SELECT metric_id FROM metric_metadata FINAL WHERE name = 'daily_active_addresses' LIMIT 1) AND
    dt >= toDateTime('2020-01-01 00:00:00')
LIMIT 2
```
Test in [Queries](https://app.santiment.net/queries/?panels=%5B%7B%22name%22%3A%22Default%20panel%20title%22%2C%22sql%22%3A%7B%22query%22%3A%22SELECT%20asset_id%2C%20metric_id%2C%20dt%2C%20value%5CnFROM%20daily_metrics_v2%20FINAL%5CnWHERE%5Cn%20%20%20%20asset_id%20%3D%20(SELECT%20asset_id%20FROM%20asset_metadata%20FINAL%20WHERE%20name%20%3D%20%27bitcoin%27%20LIMIT%201)%20AND%5Cn%20%20%20%20metric_id%20%3D%20(SELECT%20metric_id%20FROM%20metric_metadata%20FINAL%20WHERE%20name%20%3D%20%27daily_active_addresses%27%20LIMIT%201)%20AND%5Cn%20%20%20%20dt%20%3E%3D%20toDateTime(%272020-01-01%2000%3A00%3A00%27)%5CnLIMIT%202%22%2C%22parameters%22%3A%7B%7D%7D%2C%22settings%22%3A%7B%22type%22%3A%22TABLE%22%2C%22layout%22%3A%5B0%2C0%2C6%2C3%5D%2C%22columns%22%3A%5B%7B%22title%22%3A%22asset_id%22%7D%2C%7B%22title%22%3A%22metric_id%22%7D%2C%7B%22title%22%3A%22dt%22%2C%22formatterId%22%3A1%7D%2C%7B%22title%22%3A%22value%22%7D%5D%2C%22parameters%22%3A%5B%5D%7D%7D%5D&selected=0?panels=%5B%7B%22name%22%3A%22Default%20panel%20title%22%2C%22sql%22%3A%7B%22query%22%3A%22SELECT%20asset_id%2C%20metric_id%2C%20dt%2C%20value%5CnFROM%20daily_metrics_v2%20FINAL%5CnWHERE%5Cn%20%20%20%20asset_id%20%3D%20(SELECT%20asset_id%20FROM%20asset_metadata%20FINAL%20WHERE%20name%20%3D%20'bitcoin'%20LIMIT%201)%20AND%5Cn%20%20%20%20metric_id%20%3D%20(SELECT%20metric_id%20FROM%20metric_metadata%20FINAL%20WHERE%20name%20%3D%20'daily_active_addresses'%20LIMIT%201)%20AND%5Cn%20%20%20%20dt%20%3E%3D%20toDateTime('2020-01-01%2000%3A00%3A00')%5CnLIMIT%202%22%2C%22parameters%22%3A%7B%7D%7D%2C%22settings%22%3A%7B%22type%22%3A%22TABLE%22%2C%22layout%22%3A%5B0%2C0%2C6%2C3%5D%2C%22columns%22%3A%5B%7B%22title%22%3A%22asset_id%22%7D%2C%7B%22title%22%3A%22metric_id%22%7D%2C%7B%22title%22%3A%22dt%22%2C%22formatterId%22%3A1%7D%2C%7B%22title%22%3A%22value%22%7D%5D%2C%22parameters%22%3A%5B%5D%7D%7D%5D&selected=0)

```
┌─asset_id─┬─metric_id─┬─────────dt─┬──value─┐
│     1452 │        74 │ 2020-01-01 │ 522172 │
│     1452 │        74 │ 2020-01-02 │ 678391 │
└──────────┴───────────┴────────────┴────────┘
```

The query is lengthy and contains parts that will be often used in
queries - the `asset_id` and `metric_id` filtering. For this reason, predefined functions can be used to simplify fetching those ids.

```SQL
SELECT asset_id, metric_id, dt, value
FROM daily_metrics_v2 FINAL
WHERE
  asset_id = get_asset_id('bitcoin') AND
  metric_id = get_metric_id('daily_active_addresses') AND
  dt >= toDateTime('2020-01-01 00:00:00')
LIMIT 2
```
Test in [Queries](https://app.santiment.net/queries/?panels=%5B%7B%22name%22%3A%22Default%20panel%20title%22%2C%22sql%22%3A%7B%22query%22%3A%22SELECT%20asset_id%2C%20metric_id%2C%20dt%2C%20value%5CnFROM%20daily_metrics_v2%20FINAL%5CnWHERE%5Cn%20%20asset_id%20%3D%20get_asset_id(%27bitcoin%27)%20AND%5Cn%20%20metric_id%20%3D%20get_metric_id(%27daily_active_addresses%27)%20AND%5Cn%20%20dt%20%3E%3D%20toDateTime(%272020-01-01%2000%3A00%3A00%27)%5CnLIMIT%202%22%2C%22parameters%22%3A%7B%7D%7D%2C%22settings%22%3A%7B%22type%22%3A%22TABLE%22%2C%22layout%22%3A%5B0%2C0%2C6%2C3%5D%2C%22columns%22%3A%5B%7B%22title%22%3A%22asset_id%22%7D%2C%7B%22title%22%3A%22metric_id%22%7D%2C%7B%22title%22%3A%22dt%22%2C%22formatterId%22%3A1%7D%2C%7B%22title%22%3A%22value%22%7D%5D%2C%22parameters%22%3A%5B%5D%7D%7D%5D&selected=0?panels=%5B%7B%22name%22%3A%22Default%20panel%20title%22%2C%22sql%22%3A%7B%22query%22%3A%22SELECT%20asset_id%2C%20metric_id%2C%20dt%2C%20value%5CnFROM%20daily_metrics_v2%20FINAL%5CnWHERE%5Cn%20%20asset_id%20%3D%20get_asset_id('bitcoin')%20AND%5Cn%20%20metric_id%20%3D%20get_metric_id('daily_active_addresses')%20AND%5Cn%20%20dt%20%3E%3D%20toDateTime('2020-01-01%2000%3A00%3A00')%5CnLIMIT%202%22%2C%22parameters%22%3A%7B%7D%7D%2C%22settings%22%3A%7B%22type%22%3A%22TABLE%22%2C%22layout%22%3A%5B0%2C0%2C6%2C3%5D%2C%22columns%22%3A%5B%7B%22title%22%3A%22asset_id%22%7D%2C%7B%22title%22%3A%22metric_id%22%7D%2C%7B%22title%22%3A%22dt%22%2C%22formatterId%22%3A1%7D%2C%7B%22title%22%3A%22value%22%7D%5D%2C%22parameters%22%3A%5B%5D%7D%7D%5D&selected=0)

The result still contains the integer representation of the asset and metric. To
convert the `asset_id` to the asset name and the `metric_id` to the metric name
there are a few options:
- Join the result with the `asset_metadata` and `metric_metadata` tables. This
  works, but is highly verbose.
- Use [dictionaries](https://clickhouse.com/docs/en/sql-reference/dictionaries/external-dictionaries/external-dicts) that store these mappings and can be used without JOIN.

```SQL
SELECT
    dt,
    dictGetString('asset_metadata_dict', 'name', asset_id) AS asset,
    dictGetString('metric_metadata_dict', 'name', metric_id) AS metric,
    value
FROM daily_metrics_v2 FINAL
WHERE
    asset_id = get_asset_id('bitcoin') AND
    metric_id = get_metric_id('daily_active_addresses') AND
    dt >= toDateTime('2020-01-01 00:00:00')
LIMIT 2
```
Test in [Queries](https://app.santiment.net/queries/?panels=%5B%7B%22name%22%3A%22Default%20panel%20title%22%2C%22sql%22%3A%7B%22query%22%3A%22SELECT%5Cn%20%20%20%20dt%2C%5Cn%20%20%20%20dictGetString(%27asset_metadata_dict%27%2C%20%27name%27%2C%20asset_id)%20AS%20asset%2C%5Cn%20%20%20%20dictGetString(%27metric_metadata_dict%27%2C%20%27name%27%2C%20metric_id)%20AS%20metric%2C%5Cn%20%20%20%20value%5CnFROM%20daily_metrics_v2%20FINAL%5CnWHERE%5Cn%20%20%20%20asset_id%20%3D%20get_asset_id(%27bitcoin%27)%20AND%5Cn%20%20%20%20metric_id%20%3D%20get_metric_id(%27daily_active_addresses%27)%20AND%5Cn%20%20%20%20dt%20%3E%3D%20toDateTime(%272020-01-01%2000%3A00%3A00%27)%5CnLIMIT%202%22%2C%22parameters%22%3A%7B%7D%7D%2C%22settings%22%3A%7B%22type%22%3A%22TABLE%22%2C%22layout%22%3A%5B0%2C0%2C6%2C3%5D%2C%22columns%22%3A%5B%7B%22title%22%3A%22dt%22%2C%22formatterId%22%3A1%7D%2C%7B%22title%22%3A%22asset%22%7D%2C%7B%22title%22%3A%22metric%22%7D%2C%7B%22title%22%3A%22value%22%7D%5D%2C%22parameters%22%3A%5B%5D%7D%7D%5D&selected=0?panels=%5B%7B%22name%22%3A%22Default%20panel%20title%22%2C%22sql%22%3A%7B%22query%22%3A%22SELECT%5Cn%20%20%20%20dt%2C%5Cn%20%20%20%20dictGetString('asset_metadata_dict'%2C%20'name'%2C%20asset_id)%20AS%20asset%2C%5Cn%20%20%20%20dictGetString('metric_metadata_dict'%2C%20'name'%2C%20metric_id)%20AS%20metric%2C%5Cn%20%20%20%20value%5CnFROM%20daily_metrics_v2%20FINAL%5CnWHERE%5Cn%20%20%20%20asset_id%20%3D%20get_asset_id('bitcoin')%20AND%5Cn%20%20%20%20metric_id%20%3D%20get_metric_id('daily_active_addresses')%20AND%5Cn%20%20%20%20dt%20%3E%3D%20toDateTime('2020-01-01%2000%3A00%3A00')%5CnLIMIT%202%22%2C%22parameters%22%3A%7B%7D%7D%2C%22settings%22%3A%7B%22type%22%3A%22TABLE%22%2C%22layout%22%3A%5B0%2C0%2C6%2C3%5D%2C%22columns%22%3A%5B%7B%22title%22%3A%22dt%22%2C%22formatterId%22%3A1%7D%2C%7B%22title%22%3A%22asset%22%7D%2C%7B%22title%22%3A%22metric%22%7D%2C%7B%22title%22%3A%22value%22%7D%5D%2C%22parameters%22%3A%5B%5D%7D%7D%5D&selected=0)

```
┌─────────dt─┬─asset───┬─metric─────────────────┬─value─┐
│ 2022-06-30 │ bitcoin │ daily_active_addresses │     0 │
│ 2022-07-01 │ bitcoin │ daily_active_addresses │     0 │
└────────────┴─────────┴────────────────────────┴───────┘
```

As with the `asset_id` and `metric_id` filtering, there are functions that
simplify the dictionary access as well.

```SQL
SELECT
    dt,
    get_asset_name(asset_id) AS asset,
    get_metric_name(metric_id) AS metric,
    value
FROM daily_metrics_v2 FINAL
WHERE
    asset_id = get_asset_id('bitcoin') AND
    metric_id = get_metric_id('daily_active_addresses') AND
    dt >= toDateTime('2020-01-01 00:00:00')
LIMIT 2
```
Test in [Queries](https://app.santiment.net/queries/?panels=%5B%7B%22name%22%3A%22Default%20panel%20title%22%2C%22sql%22%3A%7B%22query%22%3A%22SELECT%5Cn%20%20%20%20dt%2C%5Cn%20%20%20%20get_asset_name(asset_id)%20AS%20asset%2C%5Cn%20%20%20%20get_metric_name(metric_id)%20AS%20metric%2C%5Cn%20%20%20%20value%5CnFROM%20daily_metrics_v2%20FINAL%5CnWHERE%5Cn%20%20%20%20asset_id%20%3D%20get_asset_id(%27bitcoin%27)%20AND%5Cn%20%20%20%20metric_id%20%3D%20get_metric_id(%27daily_active_addresses%27)%20AND%5Cn%20%20%20%20dt%20%3E%3D%20toDateTime(%272020-01-01%2000%3A00%3A00%27)%5CnLIMIT%202%22%2C%22parameters%22%3A%7B%7D%7D%2C%22settings%22%3A%7B%22type%22%3A%22TABLE%22%2C%22layout%22%3A%5B0%2C0%2C6%2C3%5D%2C%22columns%22%3A%5B%7B%22title%22%3A%22dt%22%2C%22formatterId%22%3A1%7D%2C%7B%22title%22%3A%22asset%22%7D%2C%7B%22title%22%3A%22metric%22%7D%2C%7B%22title%22%3A%22value%22%7D%5D%2C%22parameters%22%3A%5B%5D%7D%7D%5D&selected=0?panels=%5B%7B%22name%22%3A%22Default%20panel%20title%22%2C%22sql%22%3A%7B%22query%22%3A%22SELECT%5Cn%20%20%20%20dt%2C%5Cn%20%20%20%20get_asset_name(asset_id)%20AS%20asset%2C%5Cn%20%20%20%20get_metric_name(metric_id)%20AS%20metric%2C%5Cn%20%20%20%20value%5CnFROM%20daily_metrics_v2%20FINAL%5CnWHERE%5Cn%20%20%20%20asset_id%20%3D%20get_asset_id('bitcoin')%20AND%5Cn%20%20%20%20metric_id%20%3D%20get_metric_id('daily_active_addresses')%20AND%5Cn%20%20%20%20dt%20%3E%3D%20toDateTime('2020-01-01%2000%3A00%3A00')%5CnLIMIT%202%22%2C%22parameters%22%3A%7B%7D%7D%2C%22settings%22%3A%7B%22type%22%3A%22TABLE%22%2C%22layout%22%3A%5B0%2C0%2C6%2C3%5D%2C%22columns%22%3A%5B%7B%22title%22%3A%22dt%22%2C%22formatterId%22%3A1%7D%2C%7B%22title%22%3A%22asset%22%7D%2C%7B%22title%22%3A%22metric%22%7D%2C%7B%22title%22%3A%22value%22%7D%5D%2C%22parameters%22%3A%5B%5D%7D%7D%5D&selected=0)

To obtain the average value per month, aggregation and grouping must be used.
When grouping, all columns not part of the `GROUP BY` must have an aggregation
applied. In this case, as there is data for a single asset and a single metric,
their corresponding id columns can be aggregated with `any` as all these values
are the same.

```SQL
SELECT
    toStartOfMonth(dt) AS month,
    get_asset_name(any(asset_id)) AS asset,
    get_metric_name(any(metric_id)) AS metric,
    floor(avg(value)) AS monthly_avg_value
FROM daily_metrics_v2 FINAL
WHERE
    asset_id = get_asset_id('bitcoin') AND
    metric_id = get_metric_id('daily_active_addresses') AND
    dt >= toDateTime('2020-01-01 00:00:00')
GROUP BY month
LIMIT 12
```
Test in [Queries](https://app.santiment.net/queries/?panels=%5B%7B%22name%22%3A%22Default%20panel%20title%22%2C%22sql%22%3A%7B%22query%22%3A%22SELECT%5Cn%20%20%20%20toStartOfMonth(dt)%20AS%20month%2C%5Cn%20%20%20%20get_asset_name(any(asset_id))%20AS%20asset%2C%5Cn%20%20%20%20get_metric_name(any(metric_id))%20AS%20metric%2C%5Cn%20%20%20%20floor(avg(value))%20AS%20monthly_avg_value%5CnFROM%20daily_metrics_v2%20FINAL%5CnWHERE%5Cn%20%20%20%20asset_id%20%3D%20get_asset_id(%27bitcoin%27)%20AND%5Cn%20%20%20%20metric_id%20%3D%20get_metric_id(%27daily_active_addresses%27)%20AND%5Cn%20%20%20%20dt%20%3E%3D%20toDateTime(%272020-01-01%2000%3A00%3A00%27)%5CnGROUP%20BY%20month%5CnLIMIT%2012%22%2C%22parameters%22%3A%7B%7D%7D%2C%22settings%22%3A%7B%22type%22%3A%22TABLE%22%2C%22layout%22%3A%5B0%2C0%2C6%2C3%5D%2C%22columns%22%3A%5B%7B%22title%22%3A%22month%22%2C%22formatterId%22%3A1%7D%2C%7B%22title%22%3A%22asset%22%7D%2C%7B%22title%22%3A%22metric%22%7D%2C%7B%22title%22%3A%22monthly_avg_value%22%7D%5D%2C%22parameters%22%3A%5B%5D%7D%7D%5D&selected=0?panels=%5B%7B%22name%22%3A%22Default%20panel%20title%22%2C%22sql%22%3A%7B%22query%22%3A%22SELECT%5Cn%20%20%20%20toStartOfMonth(dt)%20AS%20month%2C%5Cn%20%20%20%20get_asset_name(any(asset_id))%20AS%20asset%2C%5Cn%20%20%20%20get_metric_name(any(metric_id))%20AS%20metric%2C%5Cn%20%20%20%20floor(avg(value))%20AS%20monthly_avg_value%5CnFROM%20daily_metrics_v2%20FINAL%5CnWHERE%5Cn%20%20%20%20asset_id%20%3D%20get_asset_id('bitcoin')%20AND%5Cn%20%20%20%20metric_id%20%3D%20get_metric_id('daily_active_addresses')%20AND%5Cn%20%20%20%20dt%20%3E%3D%20toDateTime('2020-01-01%2000%3A00%3A00')%5CnGROUP%20BY%20month%5CnLIMIT%2012%22%2C%22parameters%22%3A%7B%7D%7D%2C%22settings%22%3A%7B%22type%22%3A%22TABLE%22%2C%22layout%22%3A%5B0%2C0%2C6%2C3%5D%2C%22columns%22%3A%5B%7B%22title%22%3A%22month%22%2C%22formatterId%22%3A1%7D%2C%7B%22title%22%3A%22asset%22%7D%2C%7B%22title%22%3A%22metric%22%7D%2C%7B%22title%22%3A%22monthly_avg_value%22%7D%5D%2C%22parameters%22%3A%5B%5D%7D%7D%5D&selected=0)

```
┌──────month─┬─asset───┬─metric─────────────────┬─monthly_avg_value─┐
│ 2020-01-01 │ bitcoin │ daily_active_addresses │            712767 │
│ 2020-02-01 │ bitcoin │ daily_active_addresses │            758896 │
│ 2020-03-01 │ bitcoin │ daily_active_addresses │            738555 │
│ 2020-04-01 │ bitcoin │ daily_active_addresses │            803423 │
│ 2020-05-01 │ bitcoin │ daily_active_addresses │            896321 │
│ 2020-06-01 │ bitcoin │ daily_active_addresses │            876348 │
│ 2020-07-01 │ bitcoin │ daily_active_addresses │            958904 │
│ 2020-08-01 │ bitcoin │ daily_active_addresses │            984239 │
│ 2020-09-01 │ bitcoin │ daily_active_addresses │            982237 │
│ 2020-10-01 │ bitcoin │ daily_active_addresses │            942581 │
│ 2020-11-01 │ bitcoin │ daily_active_addresses │           1026279 │
│ 2020-12-01 │ bitcoin │ daily_active_addresses │           1072016 │
└────────────┴─────────┴────────────────────────┴───────────────────┘
```

### Using precomputed metrics to build new metrics

Not all metrics are build from the raw data only. Some of the metrics are
computed by combining a set of pre-computed metrics.

The MVRV is defined as the ratio between the Market Value and Realized Value.
The total supply is part of the numerator and the denominator, so it can be
eliminated. The result is that the numerator is just `price_usd` and the
denominator is `realized_price_usd`. There are precomputed metrics for both, so
we can use them to compute the MVRV (and that's how we do it for the official
MVRV metric!). Depending on the load on the database, the query duration can
vary. At the moment of writing this, running the query takes 0.13 seconds.

In the query `anyIf` is used as there is filtering by `asset_id` and
`metric_id`, so there is only one value per metric for each `dt`. The example
after that discusses how to handle more complex `GROUP BY` clauses.

```sql
SELECT
  dt,
  get_asset_name(any(asset_id)) AS asset,
  anyIf(value, metric_id=get_metric_id('price_usd')) AS numerator,
  anyIf(value, metric_id=get_metric_id('mean_realized_price_usd_intraday_20y')) AS denominator,
  numerator / denominator AS mvrv_usd_ratio,
  floor((mvrv_usd_ratio - 1) * 100, 2) AS mvrv_usd_percent
FROM intraday_metrics FINAL
WHERE
  asset_id = get_asset_id('bitcoin') AND
  metric_id IN (get_metric_id('price_usd'), get_metric_id('mean_realized_price_usd_intraday_20y')) AND
  dt >= toDateTime('2022-01-01 00:00:00')
GROUP BY dt
ORDER BY dt ASC
LIMIT 10
```
Test in [Queries](https://app.santiment.net/queries/?panels=%5B%7B%22name%22%3A%22Default%20panel%20title%22%2C%22sql%22%3A%7B%22query%22%3A%22SELECT%5Cn%20%20dt%2C%5Cn%20%20get_asset_name(any(asset_id))%20AS%20asset%2C%5Cn%20%20anyIf(value%2C%20metric_id%3Dget_metric_id(%27price_usd%27))%20AS%20numerator%2C%5Cn%20%20anyIf(value%2C%20metric_id%3Dget_metric_id(%27mean_realized_price_usd_intraday_20y%27))%20AS%20denominator%2C%5Cn%20%20numerator%20%2F%20denominator%20AS%20mvrv_usd_ratio%2C%5Cn%20%20floor((mvrv_usd_ratio%20-%201)%20*%20100%2C%202)%20AS%20mvrv_usd_percent%5CnFROM%20intraday_metrics%20FINAL%5CnWHERE%5Cn%20%20asset_id%20%3D%20get_asset_id(%27bitcoin%27)%20AND%5Cn%20%20metric_id%20IN%20(get_metric_id(%27price_usd%27)%2C%20get_metric_id(%27mean_realized_price_usd_intraday_20y%27))%20AND%5Cn%20%20dt%20%3E%3D%20toDateTime(%272022-01-01%2000%3A00%3A00%27)%5CnGROUP%20BY%20dt%5CnORDER%20BY%20dt%20ASC%5CnLIMIT%2010%22%2C%22parameters%22%3A%7B%7D%7D%2C%22settings%22%3A%7B%22type%22%3A%22TABLE%22%2C%22layout%22%3A%5B0%2C0%2C6%2C3%5D%2C%22columns%22%3A%5B%7B%22title%22%3A%22dt%22%2C%22formatterId%22%3A1%7D%2C%7B%22title%22%3A%22asset%22%7D%2C%7B%22title%22%3A%22numerator%22%7D%2C%7B%22title%22%3A%22denominator%22%7D%2C%7B%22title%22%3A%22mvrv_usd_ratio%22%7D%2C%7B%22title%22%3A%22mvrv_usd_percent%22%7D%5D%2C%22parameters%22%3A%5B%5D%7D%7D%5D&selected=0?panels=%5B%7B%22name%22%3A%22Default%20panel%20title%22%2C%22sql%22%3A%7B%22query%22%3A%22SELECT%5Cn%20%20dt%2C%5Cn%20%20get_asset_name(any(asset_id))%20AS%20asset%2C%5Cn%20%20anyIf(value%2C%20metric_id%3Dget_metric_id('price_usd'))%20AS%20numerator%2C%5Cn%20%20anyIf(value%2C%20metric_id%3Dget_metric_id('mean_realized_price_usd_intraday_20y'))%20AS%20denominator%2C%5Cn%20%20numerator%20%2F%20denominator%20AS%20mvrv_usd_ratio%2C%5Cn%20%20floor((mvrv_usd_ratio%20-%201)%20*%20100%2C%202)%20AS%20mvrv_usd_percent%5CnFROM%20intraday_metrics%20FINAL%5CnWHERE%5Cn%20%20asset_id%20%3D%20get_asset_id('bitcoin')%20AND%5Cn%20%20metric_id%20IN%20(get_metric_id('price_usd')%2C%20get_metric_id('mean_realized_price_usd_intraday_20y'))%20AND%5Cn%20%20dt%20%3E%3D%20toDateTime('2022-01-01%2000%3A00%3A00')%5CnGROUP%20BY%20dt%5CnORDER%20BY%20dt%20ASC%5CnLIMIT%2010%22%2C%22parameters%22%3A%7B%7D%7D%2C%22settings%22%3A%7B%22type%22%3A%22TABLE%22%2C%22layout%22%3A%5B0%2C0%2C6%2C3%5D%2C%22columns%22%3A%5B%7B%22title%22%3A%22dt%22%2C%22formatterId%22%3A1%7D%2C%7B%22title%22%3A%22asset%22%7D%2C%7B%22title%22%3A%22numerator%22%7D%2C%7B%22title%22%3A%22denominator%22%7D%2C%7B%22title%22%3A%22mvrv_usd_ratio%22%7D%2C%7B%22title%22%3A%22mvrv_usd_percent%22%7D%5D%2C%22parameters%22%3A%5B%5D%7D%7D%5D&selected=0)

```
┌──────────────────dt─┬─asset───┬──────────numerator─┬────────denominator─┬─────mvrv_usd_ratio─┬─mvrv_usd_percent─┐
│ 2022-01-01 00:00:00 │ bitcoin │  46378.15778582922 │ 23002.992048445383 │ 2.0161793599786777 │           101.61 │
│ 2022-01-01 00:05:00 │ bitcoin │  46394.94838737312 │ 23002.992048445383 │  2.016909291176695 │           101.69 │
│ 2022-01-01 00:10:00 │ bitcoin │  46376.92099283003 │ 23002.997373190537 │ 2.0161251266707207 │           101.61 │
│ 2022-01-01 00:15:00 │ bitcoin │ 46342.625905845896 │ 23002.997373190537 │   2.01463423022676 │           101.46 │
│ 2022-01-01 00:20:00 │ bitcoin │ 46349.908441099375 │  23002.95114246238 │  2.014954870531355 │           101.49 │
│ 2022-01-01 00:25:00 │ bitcoin │ 46419.391208461006 │ 23002.920905515144 │ 2.0179781254358686 │           101.79 │
│ 2022-01-01 00:30:00 │ bitcoin │ 46423.024145185496 │  23002.93075048584 │ 2.0181351954122198 │           101.81 │
│ 2022-01-01 00:35:00 │ bitcoin │ 46499.005410722944 │ 23002.948585722002 │  2.021436740487479 │           102.14 │
│ 2022-01-01 00:40:00 │ bitcoin │ 46573.474600493675 │  23002.95629498449 │  2.024673437763669 │           102.46 │
│ 2022-01-01 00:45:00 │ bitcoin │  46647.52193392966 │ 23003.039167275976 │ 2.0278851674647504 │           102.78 │
└─────────────────────┴─────────┴────────────────────┴────────────────────┴────────────────────┴──────────────────┘
```

To return only some of the columns, the query can be provided as a FROM subquery. This does not induce any
performence degradation. This example also shows how the [WITH Clause](https://clickhouse.com/docs/en/sql-reference/statements/select/with/)
can be used to avoid string literals repetition.

```sql
WITH
    get_metric_id('price_usd') AS price_usd_metric_id,
    get_metric_id('mean_realized_price_usd_intraday_20y') AS realized_price_usd_metric_id
SELECT
    dt, 
    price_usd / realized_price_usd AS mvrv_usd_ratio,
    floor((mvrv_usd_ratio - 1) * 100, 2) AS mvrv_usd_percent
FROM (
  SELECT
    dt,
    get_asset_name(any(asset_id)) AS asset,
    anyIf(value, metric_id=price_usd_metric_id) AS price_usd,
    anyIf(value, metric_id=realized_price_usd_metric_id) AS realized_price_usd
  FROM intraday_metrics FINAL
  WHERE
    asset_id = get_asset_id('bitcoin') AND
    metric_id IN (price_usd_metric_id, realized_price_usd_metric_id) AND
    dt >= toDateTime('2022-01-01 00:00:00')
  GROUP BY dt
)
ORDER BY dt ASC
LIMIT 10
```
Test in [Queries](https://app.santiment.net/queries/?panels=%5B%7B%22name%22%3A%22Default%20panel%20title%22%2C%22sql%22%3A%7B%22query%22%3A%22WITH%5Cn%20%20%20%20get_metric_id(%27price_usd%27)%20AS%20price_usd_metric_id%2C%5Cn%20%20%20%20get_metric_id(%27mean_realized_price_usd_intraday_20y%27)%20AS%20realized_price_usd_metric_id%5CnSELECT%5Cn%20%20%20%20dt%2C%20%5Cn%20%20%20%20price_usd%20%2F%20realized_price_usd%20AS%20mvrv_usd_ratio%2C%5Cn%20%20%20%20floor((mvrv_usd_ratio%20-%201)%20*%20100%2C%202)%20AS%20mvrv_usd_percent%5CnFROM%20(%5Cn%20%20SELECT%5Cn%20%20%20%20dt%2C%5Cn%20%20%20%20get_asset_name(any(asset_id))%20AS%20asset%2C%5Cn%20%20%20%20anyIf(value%2C%20metric_id%3Dprice_usd_metric_id)%20AS%20price_usd%2C%5Cn%20%20%20%20anyIf(value%2C%20metric_id%3Drealized_price_usd_metric_id)%20AS%20realized_price_usd%5Cn%20%20FROM%20intraday_metrics%20FINAL%5Cn%20%20WHERE%5Cn%20%20%20%20asset_id%20%3D%20get_asset_id(%27bitcoin%27)%20AND%5Cn%20%20%20%20metric_id%20IN%20(price_usd_metric_id%2C%20realized_price_usd_metric_id)%20AND%5Cn%20%20%20%20dt%20%3E%3D%20toDateTime(%272022-01-01%2000%3A00%3A00%27)%5Cn%20%20GROUP%20BY%20dt%5Cn)%5CnORDER%20BY%20dt%20ASC%5CnLIMIT%2010%22%2C%22parameters%22%3A%7B%7D%7D%2C%22settings%22%3A%7B%22type%22%3A%22TABLE%22%2C%22layout%22%3A%5B0%2C0%2C6%2C3%5D%2C%22columns%22%3A%5B%7B%22title%22%3A%22dt%22%2C%22formatterId%22%3A1%7D%2C%7B%22title%22%3A%22mvrv_usd_ratio%22%7D%2C%7B%22title%22%3A%22mvrv_usd_percent%22%7D%5D%2C%22parameters%22%3A%5B%5D%7D%7D%5D&selected=0?panels=%5B%7B%22name%22%3A%22Default%20panel%20title%22%2C%22sql%22%3A%7B%22query%22%3A%22WITH%5Cn%20%20%20%20get_metric_id('price_usd')%20AS%20price_usd_metric_id%2C%5Cn%20%20%20%20get_metric_id('mean_realized_price_usd_intraday_20y')%20AS%20realized_price_usd_metric_id%5CnSELECT%5Cn%20%20%20%20dt%2C%20%5Cn%20%20%20%20price_usd%20%2F%20realized_price_usd%20AS%20mvrv_usd_ratio%2C%5Cn%20%20%20%20floor((mvrv_usd_ratio%20-%201)%20*%20100%2C%202)%20AS%20mvrv_usd_percent%5CnFROM%20(%5Cn%20%20SELECT%5Cn%20%20%20%20dt%2C%5Cn%20%20%20%20get_asset_name(any(asset_id))%20AS%20asset%2C%5Cn%20%20%20%20anyIf(value%2C%20metric_id%3Dprice_usd_metric_id)%20AS%20price_usd%2C%5Cn%20%20%20%20anyIf(value%2C%20metric_id%3Drealized_price_usd_metric_id)%20AS%20realized_price_usd%5Cn%20%20FROM%20intraday_metrics%20FINAL%5Cn%20%20WHERE%5Cn%20%20%20%20asset_id%20%3D%20get_asset_id('bitcoin')%20AND%5Cn%20%20%20%20metric_id%20IN%20(price_usd_metric_id%2C%20realized_price_usd_metric_id)%20AND%5Cn%20%20%20%20dt%20%3E%3D%20toDateTime('2022-01-01%2000%3A00%3A00')%5Cn%20%20GROUP%20BY%20dt%5Cn)%5CnORDER%20BY%20dt%20ASC%5CnLIMIT%2010%22%2C%22parameters%22%3A%7B%7D%7D%2C%22settings%22%3A%7B%22type%22%3A%22TABLE%22%2C%22layout%22%3A%5B0%2C0%2C6%2C3%5D%2C%22columns%22%3A%5B%7B%22title%22%3A%22dt%22%2C%22formatterId%22%3A1%7D%2C%7B%22title%22%3A%22mvrv_usd_ratio%22%7D%2C%7B%22title%22%3A%22mvrv_usd_percent%22%7D%5D%2C%22parameters%22%3A%5B%5D%7D%7D%5D&selected=0)

The next query demonstrates what needs to be done if there is a need to
aggregate the datetime instead of getting a value for each `dt`:

```sql
WITH
    get_metric_id('price_usd') AS price_usd_metric_id,
    get_metric_id('mean_realized_price_usd_intraday_20y') AS realized_price_usd_metric_id
SELECT
    month, 
    price_usd / realized_price_usd AS mvrv_usd_ratio,
    floor((mvrv_usd_ratio - 1) * 100, 2) AS mvrv_usd_percent
FROM (
  SELECT
    toStartOfMonth(dt) AS month,
    get_asset_name(any(asset_id)) AS asset,
    argMaxIf(value, dt, metric_id=price_usd_metric_id) AS price_usd,
    argMaxIf(value, dt, metric_id=realized_price_usd_metric_id) AS realized_price_usd
  FROM intraday_metrics FINAL
  WHERE
    asset_id = get_asset_id('bitcoin') AND
    metric_id IN (price_usd_metric_id, realized_price_usd_metric_id) AND
    dt >= toDateTime('2022-01-01 00:00:00')
  GROUP BY month
)
ORDER BY month ASC
LIMIT 10
```
Test in [Queries](https://app.santiment.net/queries/?panels=%5B%7B%22name%22%3A%22Default%20panel%20title%22%2C%22sql%22%3A%7B%22query%22%3A%22WITH%5Cn%20%20%20%20get_metric_id(%27price_usd%27)%20AS%20price_usd_metric_id%2C%5Cn%20%20%20%20get_metric_id(%27mean_realized_price_usd_intraday_20y%27)%20AS%20realized_price_usd_metric_id%5CnSELECT%5Cn%20%20%20%20month%2C%20%5Cn%20%20%20%20price_usd%20%2F%20realized_price_usd%20AS%20mvrv_usd_ratio%2C%5Cn%20%20%20%20floor((mvrv_usd_ratio%20-%201)%20*%20100%2C%202)%20AS%20mvrv_usd_percent%5CnFROM%20(%5Cn%20%20SELECT%5Cn%20%20%20%20toStartOfMonth(dt)%20AS%20month%2C%5Cn%20%20%20%20get_asset_name(any(asset_id))%20AS%20asset%2C%5Cn%20%20%20%20argMaxIf(value%2C%20dt%2C%20metric_id%3Dprice_usd_metric_id)%20AS%20price_usd%2C%5Cn%20%20%20%20argMaxIf(value%2C%20dt%2C%20metric_id%3Drealized_price_usd_metric_id)%20AS%20realized_price_usd%5Cn%20%20FROM%20intraday_metrics%20FINAL%5Cn%20%20WHERE%5Cn%20%20%20%20asset_id%20%3D%20get_asset_id(%27bitcoin%27)%20AND%5Cn%20%20%20%20metric_id%20IN%20(price_usd_metric_id%2C%20realized_price_usd_metric_id)%20AND%5Cn%20%20%20%20dt%20%3E%3D%20toDateTime(%272022-01-01%2000%3A00%3A00%27)%5Cn%20%20GROUP%20BY%20month%5Cn)%5CnORDER%20BY%20month%20ASC%5CnLIMIT%2010%22%2C%22parameters%22%3A%7B%7D%7D%2C%22settings%22%3A%7B%22type%22%3A%22TABLE%22%2C%22layout%22%3A%5B0%2C0%2C6%2C3%5D%2C%22columns%22%3A%5B%7B%22title%22%3A%22month%22%2C%22formatterId%22%3A1%7D%2C%7B%22title%22%3A%22mvrv_usd_ratio%22%7D%2C%7B%22title%22%3A%22mvrv_usd_percent%22%7D%5D%2C%22parameters%22%3A%5B%5D%7D%7D%5D&selected=0?panels=%5B%7B%22name%22%3A%22Default%20panel%20title%22%2C%22sql%22%3A%7B%22query%22%3A%22WITH%5Cn%20%20%20%20get_metric_id('price_usd')%20AS%20price_usd_metric_id%2C%5Cn%20%20%20%20get_metric_id('mean_realized_price_usd_intraday_20y')%20AS%20realized_price_usd_metric_id%5CnSELECT%5Cn%20%20%20%20month%2C%20%5Cn%20%20%20%20price_usd%20%2F%20realized_price_usd%20AS%20mvrv_usd_ratio%2C%5Cn%20%20%20%20floor((mvrv_usd_ratio%20-%201)%20*%20100%2C%202)%20AS%20mvrv_usd_percent%5CnFROM%20(%5Cn%20%20SELECT%5Cn%20%20%20%20toStartOfMonth(dt)%20AS%20month%2C%5Cn%20%20%20%20get_asset_name(any(asset_id))%20AS%20asset%2C%5Cn%20%20%20%20argMaxIf(value%2C%20dt%2C%20metric_id%3Dprice_usd_metric_id)%20AS%20price_usd%2C%5Cn%20%20%20%20argMaxIf(value%2C%20dt%2C%20metric_id%3Drealized_price_usd_metric_id)%20AS%20realized_price_usd%5Cn%20%20FROM%20intraday_metrics%20FINAL%5Cn%20%20WHERE%5Cn%20%20%20%20asset_id%20%3D%20get_asset_id('bitcoin')%20AND%5Cn%20%20%20%20metric_id%20IN%20(price_usd_metric_id%2C%20realized_price_usd_metric_id)%20AND%5Cn%20%20%20%20dt%20%3E%3D%20toDateTime('2022-01-01%2000%3A00%3A00')%5Cn%20%20GROUP%20BY%20month%5Cn)%5CnORDER%20BY%20month%20ASC%5CnLIMIT%2010%22%2C%22parameters%22%3A%7B%7D%7D%2C%22settings%22%3A%7B%22type%22%3A%22TABLE%22%2C%22layout%22%3A%5B0%2C0%2C6%2C3%5D%2C%22columns%22%3A%5B%7B%22title%22%3A%22month%22%2C%22formatterId%22%3A1%7D%2C%7B%22title%22%3A%22mvrv_usd_ratio%22%7D%2C%7B%22title%22%3A%22mvrv_usd_percent%22%7D%5D%2C%22parameters%22%3A%5B%5D%7D%7D%5D&selected=0)

The following row needs some explanation:
```sql
argMaxIf(value, dt, metric_id=get_metric_id('price_usd')) AS price_usd,
```

This function call has three parameters:
- `value` - This is the column that is returned
- `dt` - This is the column that `max` is performed upon. Of all columns
  matching the filter, the one with the max `dt` is returned.
- `metric_id=get_metric_id('price_usd')` - This a boolean expression. Look only
  at the rows for which the expression evaluates to true.

If the `FINAL` keyword is not used, taking the row with biggest `computed_at`
among those with the same `dt` can be achieved by using a tuple as a second
argument:

```sql
argMaxIf(value, (dt, computed_at), metric_id=get_metric_id('price_usd')) AS price_usd,
```

## Using Raw Data

### Example: Top Transfers

Find the 5 biggest ETH transactions to the graveyard address 0x0000000000000000000000000000000000000000.

> Note: Some tables are duplicated with different `ORDER BY` clauses. In the case of transfer tables, there are tables with the `_to` suffix. This indicates that the `to` address is at the front of the `ORDER BY` key. This table has better performance when only filtering by the `to` address.

```sql
SELECT
    dt,
    from,
    transactionHash,
    value / pow(10, 18) -- transform from gwei to ETH
FROM eth_transfers_to FINAL
WHERE to = '0x0000000000000000000000000000000000000000'
ORDER BY value DESC
LIMIT 5
```

Test in [Queries](https://app.santiment.net/queries/?panels=%5B%7B%22name%22%3A%22Default%20panel%20title%22%2C%22sql%22%3A%7B%22query%22%3A%22SELECT%5Cn%20%20%20%20dt%2C%5Cn%20%20%20%20from%2C%5Cn%20%20%20%20transactionHash%2C%5Cn%20%20%20%20value%20%2F%20pow(10%2C%2018)%20--%20transform%20from%20gwei%20to%20ETH%5CnFROM%20eth_transfers_to%20FINAL%5CnWHERE%20to%20%3D%20%270x0000000000000000000000000000000000000000%27%5CnORDER%20BY%20value%20DESC%5CnLIMIT%205%22%2C%22parameters%22%3A%7B%7D%7D%2C%22settings%22%3A%7B%22type%22%3A%22TABLE%22%2C%22layout%22%3A%5B0%2C0%2C6%2C3%5D%2C%22columns%22%3A%5B%7B%22title%22%3A%22dt%22%2C%22formatterId%22%3A1%7D%2C%7B%22title%22%3A%22from%22%7D%2C%7B%22title%22%3A%22transactionHash%22%7D%2C%7B%22title%22%3A%22divide(value%2C%20pow(10%2C%2018))%22%7D%5D%2C%22parameters%22%3A%5B%5D%7D%7D%5D&selected=0?panels=%5B%7B%22name%22%3A%22Default%20panel%20title%22%2C%22sql%22%3A%7B%22query%22%3A%22SELECT%5Cn%20%20%20%20dt%2C%5Cn%20%20%20%20from%2C%5Cn%20%20%20%20transactionHash%2C%5Cn%20%20%20%20value%20%2F%20pow(10%2C%2018)%20--%20transform%20from%20gwei%20to%20ETH%5CnFROM%20eth_transfers_to%20FINAL%5CnWHERE%20to%20%3D%20'0x0000000000000000000000000000000000000000'%5CnORDER%20BY%20value%20DESC%5CnLIMIT%205%22%2C%22parameters%22%3A%7B%7D%7D%2C%22settings%22%3A%7B%22type%22%3A%22TABLE%22%2C%22layout%22%3A%5B0%2C0%2C6%2C3%5D%2C%22columns%22%3A%5B%7B%22title%22%3A%22dt%22%2C%22formatterId%22%3A1%7D%2C%7B%22title%22%3A%22from%22%7D%2C%7B%22title%22%3A%22transactionHash%22%7D%2C%7B%22title%22%3A%22divide(value%2C%20pow(10%2C%2018))%22%7D%5D%2C%22parameters%22%3A%5B%5D%7D%7D%5D&selected=0)

```sql
┌──────────────────dt─┬─from───────────────────────────────────────┬─transactionHash────────────────────────────────────────────────────┬─divide(value, pow(10, 18))─┐
│ 2015-08-08 11:01:14 │ 0x3f98e477a361f777da14611a7e419a75fd238b6b │ 0x242a15349ad0a7070afb73df92e8e569fd196c88c7f589a467f24e6028a07c69 │                       2000 │
│ 2016-07-28 19:39:05 │ 0xaa1a6e3e6ef20068f7f8d8c835d2d22fd5116444 │ 0x1c96608bda6ce4be0d0f30b3a5b3a9d9c94930291a168a0dbddfe9be24ac70d1 │                       1493 │
│ 2015-08-13 17:50:09 │ 0xf5437e158090b2a2d68f82b54a5864b95dd6dbea │ 0x88db76f50553d3d9d61eaf7480a92b1d68db08d69e688fd9b457571cc22ab2b0 │                       1000 │
│ 2021-09-08 03:30:47 │ 0x517bb391cb3a6d879762eb655e48a478498c3698 │ 0x429bfa5fdd1bf8117d6707914b6300ccf08ec3383d38a10ddf37247e18d90557 │              515.001801432 │
│ 2015-08-15 06:52:11 │ 0x20134cbff88bfadc466b52eceaa79857891d831e │ 0xe218f7abd6b557e01376c57bcdf7f5d8e94e0760306b1d9eb37e1a8ddc51e6ab │                        400 │
└─────────────────────┴────────────────────────────────────────────┴────────────────────────────────────────────────────────────────────┴────────────────────────────┘
```

### Example for address balance

Select the UNI balance of address at the beginning of each month.

For performance reasons the table has a non-intuitive design. The balances of an address
are stored in a single field of type `AggregateFunction(groupArray, Tuple(DateTime, Float64))`.
When the `groupArrayMerge` function is called on that field, it essentially turns into
`Array<Tuple(DateTime, Float64)>`

The [arrayJoin](https://clickhouse.com/docs/en/sql-reference/functions/array-join/) is a Clickhouse-specific function that is useful in many
scenarios. Normal functions do not change a set of rows, but just change the
values in each row (map). Aggregate functions compress a set of rows (fold or
reduce). The arrayJoin function takes each row and generates a set of rows
(unfold).

In this scenario `arrayJoin` is used to unfold the array of tuples into rows where each row has a datetime and value.

```sql
SELECT
  toStartOfMonth(dt) AS datetime,
  toFloat64(argMax(value, dt)) / pow(10, 18) AS value
FROM (
  SELECT
    arrayJoin(groupArrayMerge(values)) AS values_merged,
    values_merged.1 AS dt,
    values_merged.2 AS value
  FROM balances_aggregated
  WHERE
    address = '0x1a9c8182c09f50c8318d769245bea52c32be35bc' AND
    blockchain = 'ethereum' AND
    asset_ref_id = get_asset_ref_id('uniswap')
  GROUP BY address, blockchain, asset_ref_id
  HAVING dt >= toDateTime('2021-01-01 00:00:00') AND dt < toDateTime('2022-08-01 00:00:00')
)
GROUP BY datetime
```
Test in [Queries](https://app.santiment.net/queries/?panels=%5B%7B%22name%22%3A%22Default%20panel%20title%22%2C%22sql%22%3A%7B%22query%22%3A%22SELECT%5Cn%20%20toStartOfMonth(dt)%20AS%20datetime%2C%5Cn%20%20toFloat64(argMax(value%2C%20dt))%20%2F%20pow(10%2C%2018)%20AS%20value%5CnFROM%20(%5Cn%20%20SELECT%5Cn%20%20%20%20arrayJoin(groupArrayMerge(values))%20AS%20values_merged%2C%5Cn%20%20%20%20values_merged.1%20AS%20dt%2C%5Cn%20%20%20%20values_merged.2%20AS%20value%5Cn%20%20FROM%20balances_aggregated%5Cn%20%20WHERE%5Cn%20%20%20%20address%20%3D%20%270x1a9c8182c09f50c8318d769245bea52c32be35bc%27%20AND%5Cn%20%20%20%20blockchain%20%3D%20%27ethereum%27%20AND%5Cn%20%20%20%20asset_ref_id%20%3D%20get_asset_ref_id(%27uniswap%27)%5Cn%20%20GROUP%20BY%20address%2C%20blockchain%2C%20asset_ref_id%5Cn%20%20HAVING%20dt%20%3E%3D%20toDateTime(%272021-01-01%2000%3A00%3A00%27)%20AND%20dt%20%3C%20toDateTime(%272022-08-01%2000%3A00%3A00%27)%5Cn)%5CnGROUP%20BY%20datetime%22%2C%22parameters%22%3A%7B%7D%7D%2C%22settings%22%3A%7B%22type%22%3A%22TABLE%22%2C%22layout%22%3A%5B0%2C0%2C6%2C3%5D%2C%22columns%22%3A%5B%7B%22title%22%3A%22datetime%22%2C%22formatterId%22%3A1%7D%2C%7B%22title%22%3A%22value%22%7D%5D%2C%22parameters%22%3A%5B%5D%7D%7D%5D&selected=0?panels=%5B%7B%22name%22%3A%22Default%20panel%20title%22%2C%22sql%22%3A%7B%22query%22%3A%22SELECT%5Cn%20%20toStartOfMonth(dt)%20AS%20datetime%2C%5Cn%20%20toFloat64(argMax(value%2C%20dt))%20%2F%20pow(10%2C%2018)%20AS%20value%5CnFROM%20(%5Cn%20%20SELECT%5Cn%20%20%20%20arrayJoin(groupArrayMerge(values))%20AS%20values_merged%2C%5Cn%20%20%20%20values_merged.1%20AS%20dt%2C%5Cn%20%20%20%20values_merged.2%20AS%20value%5Cn%20%20FROM%20balances_aggregated%5Cn%20%20WHERE%5Cn%20%20%20%20address%20%3D%20'0x1a9c8182c09f50c8318d769245bea52c32be35bc'%20AND%5Cn%20%20%20%20blockchain%20%3D%20'ethereum'%20AND%5Cn%20%20%20%20asset_ref_id%20%3D%20get_asset_ref_id('uniswap')%5Cn%20%20GROUP%20BY%20address%2C%20blockchain%2C%20asset_ref_id%5Cn%20%20HAVING%20dt%20%3E%3D%20toDateTime('2021-01-01%2000%3A00%3A00')%20AND%20dt%20%3C%20toDateTime('2022-08-01%2000%3A00%3A00')%5Cn)%5CnGROUP%20BY%20datetime%22%2C%22parameters%22%3A%7B%7D%7D%2C%22settings%22%3A%7B%22type%22%3A%22TABLE%22%2C%22layout%22%3A%5B0%2C0%2C6%2C3%5D%2C%22columns%22%3A%5B%7B%22title%22%3A%22datetime%22%2C%22formatterId%22%3A1%7D%2C%7B%22title%22%3A%22value%22%7D%5D%2C%22parameters%22%3A%5B%5D%7D%7D%5D&selected=0)

Note that not every month has a balance. This is because during these months no transfers happened and balance records
are produced only when the balance changes.

```sql
┌───datetime─┬──────────────value─┐
│ 2021-01-01 │   54854034.6123795 │
│ 2021-02-01 │   75792689.3561644 │
│ 2021-04-01 │ 105258204.83054289 │
│ 2021-05-01 │ 113312234.63774733 │
│ 2021-06-01 │ 123442268.88432267 │
│ 2021-07-01 │ 134441434.15575847 │
│ 2021-08-01 │  158560087.2506342 │
│ 2021-09-01 │ 173403155.20471838 │
│ 2021-11-01 │ 173403155.20471838 │
│ 2021-12-01 │ 173403155.20471838 │
│ 2022-02-01 │  227551085.1894977 │
│ 2022-04-01 │  227040881.1894977 │
│ 2022-05-01 │ 254925338.09589037 │
│ 2022-06-01 │  268638940.6453577 │
│ 2022-07-01 │  280393165.7214612 │
└────────────┴────────────────────┘
```

### Example for Development Activity

The `github_v2` table contains [Github Events](https://docs.github.com/en/developers/webhooks-and-events/events/github-event-types) data.
Using these events one can compute better development activity metrics compared to using just commits counts,
as described in [this article](https://medium.com/santiment/tracking-github-activity-of-crypto-projects-introducing-a-better-approach-9fb1af3f1c32)

To compute the development activity of an organization:

```sql
WITH ('IssueCommentEvent',
      'IssuesEvent',
      'ForkEvent',
      'CommitCommentEvent',
      'FollowEvent',
      'ForkEvent',
      'DownloadEvent',
      'WatchEvent',
      'ProjectCardEvent',
      'ProjectColumnEvent',
      'ProjectEvent') AS non_dev_related_event_types
SELECT
  toStartOfMonth(dt) AS month,
  count(*) AS events
FROM (
  SELECT event, dt
  FROM github_v2 FINAL
  WHERE
    owner = 'santiment' AND
    dt >= toDateTime('2021-01-01 00:00:00') AND
    dt < toDateTime('2021-12-31 23:59:59') AND
    event NOT IN non_dev_related_event_types -- these events are related more with comments/issues, not developing
)
GROUP BY month
```
Test in [Queries](https://app.santiment.net/queries/?panels=%5B%7B%22name%22%3A%22Default%20panel%20title%22%2C%22sql%22%3A%7B%22query%22%3A%22WITH%20(%27IssueCommentEvent%27%2C%5Cn%20%20%20%20%20%20%27IssuesEvent%27%2C%5Cn%20%20%20%20%20%20%27ForkEvent%27%2C%5Cn%20%20%20%20%20%20%27CommitCommentEvent%27%2C%5Cn%20%20%20%20%20%20%27FollowEvent%27%2C%5Cn%20%20%20%20%20%20%27ForkEvent%27%2C%5Cn%20%20%20%20%20%20%27DownloadEvent%27%2C%5Cn%20%20%20%20%20%20%27WatchEvent%27%2C%5Cn%20%20%20%20%20%20%27ProjectCardEvent%27%2C%5Cn%20%20%20%20%20%20%27ProjectColumnEvent%27%2C%5Cn%20%20%20%20%20%20%27ProjectEvent%27)%20AS%20non_dev_related_event_types%5CnSELECT%5Cn%20%20toStartOfMonth(dt)%20AS%20month%2C%5Cn%20%20count(*)%20AS%20events%5CnFROM%20(%5Cn%20%20SELECT%20event%2C%20dt%5Cn%20%20FROM%20github_v2%20FINAL%5Cn%20%20WHERE%5Cn%20%20%20%20owner%20%3D%20%27santiment%27%20AND%5Cn%20%20%20%20dt%20%3E%3D%20toDateTime(%272021-01-01%2000%3A00%3A00%27)%20AND%5Cn%20%20%20%20dt%20%3C%20toDateTime(%272021-12-31%2023%3A59%3A59%27)%20AND%5Cn%20%20%20%20event%20NOT%20IN%20non_dev_related_event_types%20--%20these%20events%20are%20related%20more%20with%20comments%2Fissues%2C%20not%20developing%5Cn)%5CnGROUP%20BY%20month%22%2C%22parameters%22%3A%7B%7D%7D%2C%22settings%22%3A%7B%22type%22%3A%22TABLE%22%2C%22layout%22%3A%5B0%2C0%2C6%2C3%5D%2C%22columns%22%3A%5B%7B%22title%22%3A%22month%22%2C%22formatterId%22%3A1%7D%2C%7B%22title%22%3A%22events%22%7D%5D%2C%22parameters%22%3A%5B%5D%7D%7D%5D&selected=0?panels=%5B%7B%22name%22%3A%22Default%20panel%20title%22%2C%22sql%22%3A%7B%22query%22%3A%22WITH%20('IssueCommentEvent'%2C%5Cn%20%20%20%20%20%20'IssuesEvent'%2C%5Cn%20%20%20%20%20%20'ForkEvent'%2C%5Cn%20%20%20%20%20%20'CommitCommentEvent'%2C%5Cn%20%20%20%20%20%20'FollowEvent'%2C%5Cn%20%20%20%20%20%20'ForkEvent'%2C%5Cn%20%20%20%20%20%20'DownloadEvent'%2C%5Cn%20%20%20%20%20%20'WatchEvent'%2C%5Cn%20%20%20%20%20%20'ProjectCardEvent'%2C%5Cn%20%20%20%20%20%20'ProjectColumnEvent'%2C%5Cn%20%20%20%20%20%20'ProjectEvent')%20AS%20non_dev_related_event_types%5CnSELECT%5Cn%20%20toStartOfMonth(dt)%20AS%20month%2C%5Cn%20%20count(*)%20AS%20events%5CnFROM%20(%5Cn%20%20SELECT%20event%2C%20dt%5Cn%20%20FROM%20github_v2%20FINAL%5Cn%20%20WHERE%5Cn%20%20%20%20owner%20%3D%20'santiment'%20AND%5Cn%20%20%20%20dt%20%3E%3D%20toDateTime('2021-01-01%2000%3A00%3A00')%20AND%5Cn%20%20%20%20dt%20%3C%20toDateTime('2021-12-31%2023%3A59%3A59')%20AND%5Cn%20%20%20%20event%20NOT%20IN%20non_dev_related_event_types%20--%20these%20events%20are%20related%20more%20with%20comments%2Fissues%2C%20not%20developing%5Cn)%5CnGROUP%20BY%20month%22%2C%22parameters%22%3A%7B%7D%7D%2C%22settings%22%3A%7B%22type%22%3A%22TABLE%22%2C%22layout%22%3A%5B0%2C0%2C6%2C3%5D%2C%22columns%22%3A%5B%7B%22title%22%3A%22month%22%2C%22formatterId%22%3A1%7D%2C%7B%22title%22%3A%22events%22%7D%5D%2C%22parameters%22%3A%5B%5D%7D%7D%5D&selected=0)

```
┌──────month─┬─events─┐
│ 2021-01-01 │   1600 │
│ 2021-02-01 │   1815 │
│ 2021-03-01 │   1709 │
│ 2021-04-01 │   1541 │
│ 2021-05-01 │   1139 │
│ 2021-06-01 │   1211 │
│ 2021-07-01 │   1213 │
│ 2021-08-01 │   1058 │
│ 2021-09-01 │   1156 │
│ 2021-10-01 │    269 │
│ 2021-11-01 │   1079 │
│ 2021-12-01 │    760 │
└────────────┴────────┘
```

To count all the people that have contributed to the development activity of an organization in a given
time period:

```sql
WITH ('IssueCommentEvent',
      'IssuesEvent',
      'ForkEvent',
      'CommitCommentEvent',
      'FollowEvent',
      'ForkEvent',
      'DownloadEvent',
      'WatchEvent',
      'ProjectCardEvent',
      'ProjectColumnEvent',
      'ProjectEvent') AS non_dev_related_event_types
SELECT
  toStartOfMonth(dt) AS month,
  uniqExact(actor) AS contributors
FROM (
  SELECT actor, dt
  FROM github_v2 FINAL
  WHERE
    owner = 'santiment' AND
    dt >= toDateTime('2021-01-01 00:00:00') AND
    dt < toDateTime('2021-12-31 23:59:59') AND
    event NOT IN non_dev_related_event_types -- these events are related more with comments/issues, not developing
)
GROUP BY month
```
Test in [Queries](https://app.santiment.net/queries/?panels=%5B%7B%22name%22%3A%22Default%20panel%20title%22%2C%22sql%22%3A%7B%22query%22%3A%22WITH%20(%27IssueCommentEvent%27%2C%5Cn%20%20%20%20%20%20%27IssuesEvent%27%2C%5Cn%20%20%20%20%20%20%27ForkEvent%27%2C%5Cn%20%20%20%20%20%20%27CommitCommentEvent%27%2C%5Cn%20%20%20%20%20%20%27FollowEvent%27%2C%5Cn%20%20%20%20%20%20%27ForkEvent%27%2C%5Cn%20%20%20%20%20%20%27DownloadEvent%27%2C%5Cn%20%20%20%20%20%20%27WatchEvent%27%2C%5Cn%20%20%20%20%20%20%27ProjectCardEvent%27%2C%5Cn%20%20%20%20%20%20%27ProjectColumnEvent%27%2C%5Cn%20%20%20%20%20%20%27ProjectEvent%27)%20AS%20non_dev_related_event_types%5CnSELECT%5Cn%20%20toStartOfMonth(dt)%20AS%20month%2C%5Cn%20%20uniqExact(actor)%20AS%20contributors%5CnFROM%20(%5Cn%20%20SELECT%20actor%2C%20dt%5Cn%20%20FROM%20github_v2%20FINAL%5Cn%20%20WHERE%5Cn%20%20%20%20owner%20%3D%20%27santiment%27%20AND%5Cn%20%20%20%20dt%20%3E%3D%20toDateTime(%272021-01-01%2000%3A00%3A00%27)%20AND%5Cn%20%20%20%20dt%20%3C%20toDateTime(%272021-12-31%2023%3A59%3A59%27)%20AND%5Cn%20%20%20%20event%20NOT%20IN%20non_dev_related_event_types%20--%20these%20events%20are%20related%20more%20with%20comments%2Fissues%2C%20not%20developing%5Cn)%5CnGROUP%20BY%20month%22%2C%22parameters%22%3A%7B%7D%7D%2C%22settings%22%3A%7B%22type%22%3A%22TABLE%22%2C%22layout%22%3A%5B0%2C0%2C6%2C3%5D%2C%22columns%22%3A%5B%7B%22title%22%3A%22month%22%2C%22formatterId%22%3A1%7D%2C%7B%22title%22%3A%22contributors%22%7D%5D%2C%22parameters%22%3A%5B%5D%7D%7D%5D&selected=0?panels=%5B%7B%22name%22%3A%22Default%20panel%20title%22%2C%22sql%22%3A%7B%22query%22%3A%22WITH%20('IssueCommentEvent'%2C%5Cn%20%20%20%20%20%20'IssuesEvent'%2C%5Cn%20%20%20%20%20%20'ForkEvent'%2C%5Cn%20%20%20%20%20%20'CommitCommentEvent'%2C%5Cn%20%20%20%20%20%20'FollowEvent'%2C%5Cn%20%20%20%20%20%20'ForkEvent'%2C%5Cn%20%20%20%20%20%20'DownloadEvent'%2C%5Cn%20%20%20%20%20%20'WatchEvent'%2C%5Cn%20%20%20%20%20%20'ProjectCardEvent'%2C%5Cn%20%20%20%20%20%20'ProjectColumnEvent'%2C%5Cn%20%20%20%20%20%20'ProjectEvent')%20AS%20non_dev_related_event_types%5CnSELECT%5Cn%20%20toStartOfMonth(dt)%20AS%20month%2C%5Cn%20%20uniqExact(actor)%20AS%20contributors%5CnFROM%20(%5Cn%20%20SELECT%20actor%2C%20dt%5Cn%20%20FROM%20github_v2%20FINAL%5Cn%20%20WHERE%5Cn%20%20%20%20owner%20%3D%20'santiment'%20AND%5Cn%20%20%20%20dt%20%3E%3D%20toDateTime('2021-01-01%2000%3A00%3A00')%20AND%5Cn%20%20%20%20dt%20%3C%20toDateTime('2021-12-31%2023%3A59%3A59')%20AND%5Cn%20%20%20%20event%20NOT%20IN%20non_dev_related_event_types%20--%20these%20events%20are%20related%20more%20with%20comments%2Fissues%2C%20not%20developing%5Cn)%5CnGROUP%20BY%20month%22%2C%22parameters%22%3A%7B%7D%7D%2C%22settings%22%3A%7B%22type%22%3A%22TABLE%22%2C%22layout%22%3A%5B0%2C0%2C6%2C3%5D%2C%22columns%22%3A%5B%7B%22title%22%3A%22month%22%2C%22formatterId%22%3A1%7D%2C%7B%22title%22%3A%22contributors%22%7D%5D%2C%22parameters%22%3A%5B%5D%7D%7D%5D&selected=0)

```
┌──────month─┬─contributors─┐
│ 2021-01-01 │           18 │
│ 2021-02-01 │           17 │
│ 2021-03-01 │           20 │
│ 2021-04-01 │           22 │
│ 2021-05-01 │           23 │
│ 2021-06-01 │           19 │
│ 2021-07-01 │           21 │
│ 2021-08-01 │           20 │
│ 2021-09-01 │           20 │
│ 2021-10-01 │           19 │
│ 2021-11-01 │           19 │
│ 2021-12-01 │           19 │
└────────────┴──────────────┘
```