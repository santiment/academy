---
title: Metrics Exported to S3 - Technical Documentation
author: Santiment Team
date: 2025-12-03
description: Technical documentation for accessing and reading Santiment metrics data exported to S3 buckets
---

## Overview

Santiment exports metrics data to Amazon S3 in [Parquet](https://parquet.apache.org/) format, providing an efficient way to access large-scale time-series data. This data can be queried directly from S3 using analytics tools or downloaded and stored locally.

## Data Structure

The exported data is organized in a hierarchical directory structure:

```
s3://santiment-metrics/
├── assets.parquet          # Asset metadata lookup table
├── metrics.parquet         # Metric metadata lookup table
└── metrics/
    ├── intraday/           # 5-minute interval metrics data
    │   └── {metric_name}/
    │       └── {year}/
    │           └── {month}/
    │               └── data.parquet
    └── daily/              # Daily aggregated metrics data
        └── {metric_name}/
            └── {year}/
                └── {month}/
                    └── data.parquet
```

### Path Components

- `{metric_name}`: The name of the metric (e.g., `price_usd`, `active_addresses`)
- `{year}`: Four-digit year (e.g., `2024`)
- `{month}`: Two-digit month with leading zero (e.g., `01` for January, `12` for December)

### Metrics Data Files

**Path**: `s3://santiment-metrics/metrics/{interval}/{metric_name}/{year}/{month}/data.parquet`

**Schema**:

| Column | Type | Description |
|--------|------|-------------|
| `asset_id` | INTEGER | Foreign key reference to assets.parquet |
| `metric_id` | INTEGER | Foreign key reference to metrics.parquet |
| `dt` | TIMESTAMP | Date and time of the measurement |
| `value` | DOUBLE | The metric value |

**Sample Data**:

```
asset_id | metric_id | dt                  | value
---------|-----------|---------------------|------------------
378      | 1289      | 2024-01-01 00:00:00 | 42280.23527619226
378      | 1289      | 2024-01-01 00:05:00 | 42384.54766118636
```

### Assets Lookup Table

**Path**: `s3://santiment-metrics/assets.parquet`

**Schema**:

| Column | Type | Description |
|--------|------|-------------|
| `asset_id` | INTEGER | Unique identifier for the asset |
| `name` | STRING | Full name of the asset |
| `ticker_slug` | STRING | Ticker symbol and slug combination |
| `decimals` | INTEGER | Number of decimal places for the token |

**Sample Data**:

```
asset_id | name                           | ticker_slug                      | decimals
---------|--------------------------------|----------------------------------|----------
1        | 0chain                         | ZCN_0chain                       | 10
2        | 0x                             | ZRX_0x                           | 18
3        | 0x0-ai-ai-smart-contract       | 0x0_0x0-ai-ai-smart-contract     | 9
```

### Metrics Lookup Table

**Path**: `s3://santiment-metrics/metrics.parquet`

**Schema**:

| Column | Type | Description |
|--------|------|-------------|
| `metric_id` | INTEGER | Unique identifier for the metric |
| `name` | STRING | Full name of the metric |
| `version` | STRING | Version or start date of the metric |
| `status` | STRING | Current status (e.g., `production`, `testing`) |

**Sample Data**:

```
metric_id | name                                              | version    | status
----------|---------------------------------------------------|------------|------------
1         | funding_rates_aggregated_per_exchange             | 2019-01-01 | production
2         | funding_rates_aggregated_per_settlement_currency  | 2019-01-01 | production
3         | total_funding_rates_aggregated_per_asset          | 2019-01-01 | production
```

## Querying Data with ClickHouse

In the following examples we use ClickHouse [s3 Table Function](https://clickhouse.com/docs/sql-reference/table-functions/s3) to request data from S3 buckets and 
process it using SQL queries. But you can use any other instrument that 
supports reading data from S3 buckets.

### Basic Query Example

The following example demonstrates how to query metrics data with proper asset and metric name resolution:

```sql
SELECT 
    assets.name AS asset,
    metrics.name AS metric,
    dt,
    value
FROM s3(
    url='s3://santiment-metrics/metrics/intraday/price_usd/2024/01/data.parquet',
    access_key_id='YOUR_KEY_ID', 
    secret_access_key='YOUR_KEY_SECRET', 
    format='Parquet'
) AS data
LEFT JOIN (
    SELECT 
        asset_id,
        name
    FROM s3(
        url='s3://santiment-metrics/assets.parquet',
        access_key_id='YOUR_KEY_ID', 
        secret_access_key='YOUR_KEY_SECRET', 
        format='Parquet'
    )
) AS assets USING asset_id
LEFT JOIN (
    SELECT 
        metric_id,
        name
    FROM s3(
        url='s3://santiment-metrics/metrics.parquet',
        access_key_id='YOUR_KEY_ID', 
        secret_access_key='YOUR_KEY_SECRET', 
        format='Parquet'
    )
) AS metrics ON metrics.metric_id = data.metric_id;
```

### Using Wildcards

You can use wildcards in the S3 path to query multiple files at once. The following components support wildcard patterns:

- **Interval**: `intraday` or `daily`
- **Metric name**: `price_usd`, `active_addresses`, etc.
- **Year**: `2024`, `2023`, etc.
- **Month**: `01`, `02`, ..., `12`

**Example: Query all months in 2024 for a specific metric**

```sql
SELECT 
    assets.name AS asset,
    metrics.name AS metric,
    dt,
    value
FROM s3(
    url='s3://santiment-metrics/metrics/intraday/price_usd/2024/*/data.parquet',
    access_key_id='YOUR_KEY_ID', 
    secret_access_key='YOUR_KEY_SECRET', 
    format='Parquet'
) AS data
LEFT JOIN (
    SELECT asset_id, name
    FROM s3(
        url='s3://santiment-metrics/assets.parquet',
        access_key_id='YOUR_KEY_ID', 
        secret_access_key='YOUR_KEY_SECRET', 
        format='Parquet'
    )
) AS assets USING asset_id
LEFT JOIN (
    SELECT metric_id, name
    FROM s3(
        url='s3://santiment-metrics/metrics.parquet',
        access_key_id='YOUR_KEY_ID', 
        secret_access_key='YOUR_KEY_SECRET', 
        format='Parquet'
    )
) AS metrics ON metrics.metric_id = data.metric_id
WHERE asset.name = 'bitcoin';
```

## Intraday vs Daily Metrics

### Intraday Metrics

- **Path**: `s3://santiment-metrics/metrics/intraday/{metric_name}/{year}/{month}/data.parquet`
- **Granularity**: 5-minute intervals
- **Use cases**: Intraday trading, detailed analysis, real-time monitoring

### Daily Metrics

- **Path**: `s3://santiment-metrics/metrics/daily/{metric_name}/{year}/{month}/data.parquet`
- **Granularity**: Daily aggregated values
- **Use cases**: Long-term trend analysis, reduced data volume, historical comparisons


<Notebox type="none">
**Read next: [How to Access the API](/sanapi/accessing-the-api/)**
</Notebox>
