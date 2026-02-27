---
title: Exploration
author: Santiment Team
date: 2022-08-17
description: Learn how to explore the contents of the database and table structure
---

## Overview

This document aims to enhance the reader's ability to navigate through Clickhouse using SQL and explore the available tables and their structures.

## List of Tables

To get a list of all available tables, execute the following query:

```sql
SHOW TABLES
```

You can filter the list of tables using a regex. For example, to get the list of all tables containing `price` in their name:

```sql
SHOW TABLES LIKE '%price%'
```

Test in [Queries](https://queries.santiment.net/query/list-of-tables-390)

Example output:

```
┌─name───────────────────┐
│ asset_price_pairs_only │
│ asset_prices_v3        │
└────────────────────────┘
```

The `%` at the beginning means that there could be other characters to the left.
The `%` at the end means that there could be other characters to the right.

## Get Information About a Table

To inspect the structure of a given table, execute the `DESCRIBE` statement:

```sql
DESCRIBE intraday_metrics
```

Test in [Queries](https://queries.santiment.net/query/describe-table-392)

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

To see how a table was created, execute the `SHOW CREATE TABLE` statement. This includes information about partitioning, ordering, table engine, and other settings. Knowing the `ORDER BY` helps create better and faster queries.

```sql
SHOW CREATE TABLE intraday_metrics
```

Test in [Queries](https://queries.santiment.net/query/show-create-table-391)

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
│ SETTINGS index_granularity = 8192                                                                                      │
└────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┘
```

## Get data from a table

After inspecting the structure of a given table, you can execute a few simple queries to obtain some data from the table and see how it looks. Most of the time, it makes more sense to select more recent data instead of data starting from the beginning, as it will be more relevant. To improve readability, you can apply functions for transforming the `metric_id` and `asset_id` to their names. The `, *` syntax allows you to select all fields and also add something else to the result.

```sql
SELECT
    get_asset_name(asset_id) AS slug,
    get_metric_name(metric_id) AS metric,
    *
FROM daily_metrics_v2
WHERE dt >= (now() - toIntervalDay(2))
LIMIT 10
```

Test in [Queries](https://queries.santiment.net/query/get-data-from-a-table-393)

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

## How to Interpret the Table Structure

When looking at a table structure, there are several important things that the reader needs to pay attention to.

Let's take a look at the following table structure:

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
│ SETTINGS index_granularity = 8192                                                                                      │
└────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┘
```

### Table Name
The complete table name is `default.intraday_metrics`, where `default` refers to the database and `intraday_metrics` is the table name. Since queries are executed in the `default` database, you can omit `default` when referencing the table.

### Columns

The columns are represented by their names and corresponding data types. Data types may have modifiers that determine how the data is stored on disk (e.g., `CODEC(DoubleDelta, LZ4)`). These modifiers can be disregarded when examining a table.

### ORDER BY

This should not be confused with `ORDER BY` clause used when you write an SQL query, which controls how the records in the result set are sorted. The `ORDER BY` examined here is a property of the database table and controls how the data is sorted on disk, acting like an index.

This is a crucial field to understand and consider when writing a query. ClickHouse is a column-oriented database, meaning that the data for columns is stored continuously on-disk. This makes it more challenging and less efficient to use multiple indexes, so the column order in `ORDER BY` is essential for writing performant queries. If filters for the columns at the beginning of the list are present, the query will run faster.

### Engine

The [Table Engine](https://clickhouse.com/docs/en/engines/table-engines/) controls how data is stored, updated, and accessed. If the engine is *MergeTree, then the `FINAL` keyword needs to be used. See the [Writing SQL Queries](/santiment-queries/writing-sql-queries) page for more detailed examples and reasoning.

### Partition
The partitioning has little to no effect on performance, making it safe to ignore.
