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
Test in [Queries](https://queries.santiment.net/query/final-example-408)

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

Test in [Queries](https://queries.santiment.net/query/without-final-example-409)

## The PREWHERE Clause

In addition to the standard [WHERE](https://clickhouse.com/docs/en/sql-reference/statements/select/where) clause, Clickhouse also supports the [PREWHERE](https://clickhouse.com/docs/en/sql-reference/statements/select/prewhere/) clause. This optimization allows for more efficient filtering by initially reading only the columns necessary for executing the filtering expression.

When the `FINAL` keyword is not used, the `WHERE` clause is automatically transformed into a `PREWHERE` clause. However, when the `FINAL` keyword is used, the `WHERE` clause does not automatically transform into a `PREWHERE` clause. This transformation in the latter case can lead to different results if columns that are not part of the primary key are used in the filtering.

It is recommended not to use the `PREWHERE` clause unless you are certain of its implications and effects on your query.

## Using Pre-computed Metrics

We store pre-computed metrics in tables that are described on [this page](/santiment-queries/metric-tables).

Let's use `daily_metrics_v2` table as an example. Here's a schema for this table:

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

Test in [Queries](https://queries.santiment.net/query/fetch-data-for-asset-bitcoin-and-metric-daily-active-addresses-410)

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

Test in [Queries](https://queries.santiment.net/query/predef-example-411)

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
Test in [Queries](https://queries.santiment.net/query/dict-example-412)

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
Test in [Queries](https://queries.santiment.net/query/dict-example-with-func-413)

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
Test in [Queries](https://queries.santiment.net/query/group-by-example-414)

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

[This section was moved here](/santiment-queries/metric-tables/#using-precomputed-metrics-to-build-new-metrics)

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

Test in [Queries](https://queries.santiment.net/query/example-top-transfers-418)

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
Test in [Queries](https://queries.santiment.net/query/example-for-address-balance-419)

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
Test in [Queries](https://queries.santiment.net/query/example-for-development-activity-420)

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
Test in [Queries](https://queries.santiment.net/query/example-2-for-development-activity-421)

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