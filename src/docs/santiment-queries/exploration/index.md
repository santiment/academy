---
title: Exploration
author: Santiment Team
date: 2022-08-17
description: Learn how to explore the contents of the database and table structure
---

## Overview

This documents aims at improving the reader abilities to navigate through
Clickhouse using SQL and explore the available tables and their structure.

## List of tables

In order to get a list of all tables that are available execute
```sql
SHOW TABLES
```
Test in [Queries](https://app.santiment.net/queries/?panels=%5B%7B%22name%22%3A%22Default%20panel%20title%22%2C%22sql%22%3A%7B%22query%22%3A%22SHOW%20TABLES%22%2C%22parameters%22%3A%7B%7D%7D%2C%22settings%22%3A%7B%22type%22%3A%22TABLE%22%2C%22layout%22%3A%5B0%2C0%2C6%2C3%5D%2C%22columns%22%3A%5B%7B%22title%22%3A%22name%22%7D%5D%2C%22parameters%22%3A%5B%5D%7D%7D%5D&selected=0?panels=%5B%7B%22name%22%3A%22Default%20panel%20title%22%2C%22sql%22%3A%7B%22query%22%3A%22SHOW%20TABLES%22%2C%22parameters%22%3A%7B%7D%7D%2C%22settings%22%3A%7B%22type%22%3A%22TABLE%22%2C%22layout%22%3A%5B0%2C0%2C6%2C3%5D%2C%22columns%22%3A%5B%7B%22title%22%3A%22name%22%7D%5D%2C%22parameters%22%3A%5B%5D%7D%7D%5D&selected=0)

The list of tables can be filtered by a regex.

To get the list of all tables containing `price` in their name:
```sql
SHOW TABLES LIKE '%price%'
```
Test in [Queries](https://app.santiment.net/queries/?panels=%5B%7B%22name%22%3A%22Default%20panel%20title%22%2C%22sql%22%3A%7B%22query%22%3A%22SHOW%20TABLES%20LIKE%20%27%25price%25%27%22%2C%22parameters%22%3A%7B%7D%7D%2C%22settings%22%3A%7B%22type%22%3A%22TABLE%22%2C%22layout%22%3A%5B0%2C0%2C6%2C3%5D%2C%22columns%22%3A%5B%7B%22title%22%3A%22name%22%7D%5D%2C%22parameters%22%3A%5B%5D%7D%7D%5D&selected=0?panels=%5B%7B%22name%22%3A%22Default%20panel%20title%22%2C%22sql%22%3A%7B%22query%22%3A%22SHOW%20TABLES%20LIKE%20'%25price%25'%22%2C%22parameters%22%3A%7B%7D%7D%2C%22settings%22%3A%7B%22type%22%3A%22TABLE%22%2C%22layout%22%3A%5B0%2C0%2C6%2C3%5D%2C%22columns%22%3A%5B%7B%22title%22%3A%22name%22%7D%5D%2C%22parameters%22%3A%5B%5D%7D%7D%5D&selected=0)

```
┌─name───────────────────┐
│ asset_price_pairs_only │
│ asset_prices_v3        │
└────────────────────────┘
```

The `%` in the beginning means that there could be other characters to the left.
The `%` in the end means that there could be other characters to the right.

## Get information about a table

In order to inspect the structure of a given table, one can execute the
`DESCRIBE` statement:

```sql
DESCRIBE intraday_metrics
```
Test in [Queries](https://app.santiment.net/queries/?panels=%5B%7B%22name%22%3A%22Default%20panel%20title%22%2C%22sql%22%3A%7B%22query%22%3A%22DESCRIBE%20intraday_metrics%22%2C%22parameters%22%3A%7B%7D%7D%2C%22settings%22%3A%7B%22type%22%3A%22TABLE%22%2C%22layout%22%3A%5B0%2C0%2C6%2C3%5D%2C%22columns%22%3A%5B%7B%22title%22%3A%22name%22%7D%2C%7B%22title%22%3A%22type%22%7D%2C%7B%22title%22%3A%22default_type%22%7D%2C%7B%22title%22%3A%22default_expression%22%7D%2C%7B%22title%22%3A%22comment%22%7D%2C%7B%22title%22%3A%22codec_expression%22%7D%2C%7B%22title%22%3A%22ttl_expression%22%7D%5D%2C%22parameters%22%3A%5B%5D%7D%7D%5D&selected=0?panels=%5B%7B%22name%22%3A%22Default%20panel%20title%22%2C%22sql%22%3A%7B%22query%22%3A%22DESCRIBE%20intraday_metrics%22%2C%22parameters%22%3A%7B%7D%7D%2C%22settings%22%3A%7B%22type%22%3A%22TABLE%22%2C%22layout%22%3A%5B0%2C0%2C6%2C3%5D%2C%22columns%22%3A%5B%7B%22title%22%3A%22name%22%7D%2C%7B%22title%22%3A%22type%22%7D%2C%7B%22title%22%3A%22default_type%22%7D%2C%7B%22title%22%3A%22default_expression%22%7D%2C%7B%22title%22%3A%22comment%22%7D%2C%7B%22title%22%3A%22codec_expression%22%7D%2C%7B%22title%22%3A%22ttl_expression%22%7D%5D%2C%22parameters%22%3A%5B%5D%7D%7D%5D&selected=0)

```
┌─name───────────────┬─type─────────────┬─default_type─┬─default_expression─────────────┬─comment─┬─codec_expression─┬─ttl_expression─┐
│ asset_id           │ UInt64           │              │                                │         │                  │                │
│ computed_at        │ DateTime         │ DEFAULT      │ now()                          │         │                  │                │
│ name               │ Nullable(String) │ DEFAULT      │ CAST(NULL, 'Nullable(String)') │         │                  │                │
│ version            │ Date             │              │                                │         │                  │                │
│ asset_ref_id       │ UInt64           │              │                                │         │                  │                │
│ ticker_slug        │ Nullable(String) │ DEFAULT      │ CAST(NULL, 'Nullable(String)') │         │                  │                │
│ decimals           │ UInt32           │ DEFAULT      │ CAST(0, 'UInt32')              │         │                  │                │
│ contract_addresses │ Array(String)    │              │                                │         │                  │                │
│ specification      │ Nullable(String) │              │                                │         │                  │                │
└────────────────────┴──────────────────┴──────────────┴────────────────────────────────┴─────────┴──────────────────┴────────────────┘
```

In order to see how a table was created one can execute the `SHOW CREATE TABLE`
statement. This includes information about the partitioning, ordering, table
engine and other settings. Knowing the `ORDER BY` helps creating better and
faster queries.

```sql
SHOW CREATE TABLE intraday_metrics
```
Test in [Queries](https://app.santiment.net/queries/?panels=%5B%7B%22name%22%3A%22Default%20panel%20title%22%2C%22sql%22%3A%7B%22query%22%3A%22SHOW%20CREATE%20TABLE%20intraday_metrics%22%2C%22parameters%22%3A%7B%7D%7D%2C%22settings%22%3A%7B%22type%22%3A%22TABLE%22%2C%22layout%22%3A%5B0%2C0%2C6%2C3%5D%2C%22columns%22%3A%5B%7B%22title%22%3A%22statement%22%7D%5D%2C%22parameters%22%3A%5B%5D%7D%7D%5D&selected=0?panels=%5B%7B%22name%22%3A%22Default%20panel%20title%22%2C%22sql%22%3A%7B%22query%22%3A%22SHOW%20CREATE%20TABLE%20intraday_metrics%22%2C%22parameters%22%3A%7B%7D%7D%2C%22settings%22%3A%7B%22type%22%3A%22TABLE%22%2C%22layout%22%3A%5B0%2C0%2C6%2C3%5D%2C%22columns%22%3A%5B%7B%22title%22%3A%22statement%22%7D%5D%2C%22parameters%22%3A%5B%5D%7D%7D%5D&selected=0)

```
┌─statement──────────────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ CREATE TABLE default.intraday_metrics                                                                                  │
│ (                                                                                                                      │
│     `asset_id` UInt64 CODEC(DoubleDelta, LZ4),                                                                         │
│     `metric_id` UInt64 CODEC(DoubleDelta, LZ4),                                                                        │
│     `dt` DateTime CODEC(DoubleDelta, LZ4),                                                                             │
│     `value` Float64,                                                                                                   │
│     `computed_at` DateTime                                                                                             │
│ )                                                                                                                      │
│ ENGINE = ReplicatedReplacingMergeTree('/clickhouse/tables/global/intraday_metrics_v2', '{hostname}', computed_at)      │                               
│ PARTITION BY toYYYYMM(dt)                                                                                              │
│ ORDER BY (asset_id, metric_id, dt)                                                                                     │
│ SETTINGS index_granularity = 8192 │                                                                                    │
└────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┘
```

## Get data from a table

After inspecting the structure of a given table, one can execute a few simple
queries to obtain some data from the table in order to see how it looks like.

Most times it makes more sense to select more recent data instead of data
starting from the beginning as it will be more relevant. In order to improve the
readability, one can apply the functions for transforming the `metric_id` and
`asset_id` to their names. The `, *` syntax allows to select all fields, but
also add something else to the result.

```sql
SELECT
    get_asset_name(asset_id) AS slug,
    get_metric_name(metric_id) AS metric,
    *
FROM daily_metrics_v2
WHERE dt >= (now() - toIntervalDay(2))
LIMIT 10
```
Test in [Queries](https://app.santiment.net/queries/?panels=%5B%7B%22name%22%3A%22Default%20panel%20title%22%2C%22sql%22%3A%7B%22query%22%3A%22SELECT%5Cn%20%20%20%20get_asset_name(asset_id)%20AS%20slug%2C%5Cn%20%20%20%20get_metric_name(metric_id)%20AS%20metric%2C%5Cn%20%20%20%20*%5CnFROM%20daily_metrics_v2%5CnWHERE%20dt%20%3E%3D%20(now()%20-%20toIntervalDay(2))%5CnLIMIT%2010%22%2C%22parameters%22%3A%7B%7D%7D%2C%22settings%22%3A%7B%22type%22%3A%22TABLE%22%2C%22layout%22%3A%5B0%2C0%2C6%2C3%5D%2C%22columns%22%3A%5B%7B%22title%22%3A%22slug%22%7D%2C%7B%22title%22%3A%22metric%22%7D%2C%7B%22title%22%3A%22metric_id%22%7D%2C%7B%22title%22%3A%22asset_id%22%7D%2C%7B%22title%22%3A%22dt%22%2C%22formatterId%22%3A1%7D%2C%7B%22title%22%3A%22value%22%7D%2C%7B%22title%22%3A%22computed_at%22%2C%22formatterId%22%3A1%7D%5D%2C%22parameters%22%3A%5B%5D%7D%7D%5D&selected=0?panels=%5B%7B%22name%22%3A%22Default%20panel%20title%22%2C%22sql%22%3A%7B%22query%22%3A%22SELECT%5Cn%20%20%20%20get_asset_name(asset_id)%20AS%20slug%2C%5Cn%20%20%20%20get_metric_name(metric_id)%20AS%20metric%2C%5Cn%20%20%20%20*%5CnFROM%20daily_metrics_v2%5CnWHERE%20dt%20%3E%3D%20(now()%20-%20toIntervalDay(2))%5CnLIMIT%2010%22%2C%22parameters%22%3A%7B%7D%7D%2C%22settings%22%3A%7B%22type%22%3A%22TABLE%22%2C%22layout%22%3A%5B0%2C0%2C6%2C3%5D%2C%22columns%22%3A%5B%7B%22title%22%3A%22slug%22%7D%2C%7B%22title%22%3A%22metric%22%7D%2C%7B%22title%22%3A%22metric_id%22%7D%2C%7B%22title%22%3A%22asset_id%22%7D%2C%7B%22title%22%3A%22dt%22%2C%22formatterId%22%3A1%7D%2C%7B%22title%22%3A%22value%22%7D%2C%7B%22title%22%3A%22computed_at%22%2C%22formatterId%22%3A1%7D%5D%2C%22parameters%22%3A%5B%5D%7D%7D%5D&selected=0)

```sql
┌─slug──────────────────────┬─metric──────────────────┬─metric_id─┬─asset_id─┬─────────dt─┬───────────────value─┬─────────computed_at─┐
│ bnb-binance-usd           │ adjusted_daa_divergence │       681 │    41039 │ 2022-08-15 │ -1.5018654389124684 │ 2022-08-15 00:11:03 │
│ bnb-tether                │ adjusted_daa_divergence │       681 │    41048 │ 2022-08-15 │ -2.3807976412934018 │ 2022-08-15 00:11:03 │
│ bnb-usd-coin              │ adjusted_daa_divergence │       681 │    41051 │ 2022-08-15 │ -1.6207922927296166 │ 2022-08-15 00:11:03 │
│ bnb-1inch                 │ payment_count           │       179 │    41038 │ 2022-08-15 │                   4 │ 2022-08-15 00:13:20 │
│ bnb-chainlink             │ payment_count           │       179 │    41040 │ 2022-08-15 │                 103 │ 2022-08-15 00:13:20 │
│ bnb-binance-usd           │ payment_count           │       179 │    41039 │ 2022-08-15 │                2688 │ 2022-08-15 00:13:20 │
│ bnb-chromia               │ payment_count           │       179 │    41041 │ 2022-08-15 │                   3 │ 2022-08-15 00:13:20 │
│ bnb-trust-wallet-token    │ payment_count           │       179 │    41049 │ 2022-08-15 │                   6 │ 2022-08-15 00:13:20 │
│ bnb-green-metaverse-token │ payment_count           │       179 │    41042 │ 2022-08-15 │                  25 │ 2022-08-15 00:13:20 │
│ bnb-uniswap               │ payment_count           │       179 │    41050 │ 2022-08-15 │                  15 │ 2022-08-15 00:13:20 │
└───────────────────────────┴─────────────────────────┴───────────┴──────────┴────────────┴─────────────────────┴─────────────────────┘
```

## How to interpret the table structure

When looking at a tablle structure there are several important things that the
reader needs to pay attention to.

Let's take a look at the following table strucutre:
```
┌─statement──────────────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ CREATE TABLE default.intraday_metrics                                                                                  │
│ (                                                                                                                      │
│     `asset_id` UInt64 CODEC(DoubleDelta, LZ4),                                                                         │
│     `metric_id` UInt64 CODEC(DoubleDelta, LZ4),                                                                        │
│     `dt` DateTime CODEC(DoubleDelta, LZ4),                                                                             │
│     `value` Float64,                                                                                                   │
│     `computed_at` DateTime                                                                                             │
│ )                                                                                                                      │
│ ENGINE = ReplicatedReplacingMergeTree('/clickhouse/tables/global/intraday_metrics_v2', '{hostname}', computed_at)      │                               
│ PARTITION BY toYYYYMM(dt)                                                                                              │
│ ORDER BY (asset_id, metric_id, dt)                                                                                     │
│ SETTINGS index_granularity = 8192 │                                                                                    │
└────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┘
```

### Table name

The full table name is `default.intraday_metrics` where `default` refers to the
database and `intraday_metrics` is the table name. The queries are executed in
the `default` database, so `default` can be omitted when referring to the table.

### Columns

The columns are represented with their name and their types. The types can have
modifiers that control how to the data is stored on disk (like
`CODEC(DoubleDelta, LZ4)`). This modifier can be ignored when introspecting a
table.

### Engine

The [Table Engine](https://clickhouse.com/docs/en/engines/table-engines/) controls
how data is stored, updated and access. In case the engine is *MergeTree, then
the `FINAL` keyword needs to be utilized. See the [Writing SQL Queries] page for
more detailed example and reasoning.

### Partition

The partitioning has no or negligible effect on the performance, so it's safe to
ignore that.

### ORDER BY

This is the most important field to be understood and taken into consideration
when writing a query. Clickhouse is column-oriented database, which means that
on-disk the data for columns is stored continiously. This makes it harder and less
efficient to use multiple indexes, so the columns order in `ORDER BY` is important
to write performant queries - if filters for the columns in the start of the list
are present, then the query will run faster.