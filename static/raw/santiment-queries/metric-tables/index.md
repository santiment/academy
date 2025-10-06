---
title: Metrics Datasets
author: Santiment Team
date: 2024-04-01
description: Learn about Santiment metrics datasets.
---

## Overview

This document introduces Santiment's precomputed metrics datasets.

You can filter all metric tables as:

```sql
SHOW TABLES LIKE '%metrics%'
```

Test in [Queries](https://queries.santiment.net/query/metrics-tables-example-494)

Usually, tables storing pre-computed data have a common set of columns:

- `dt` - A `DateTime` field storing the corresponding date and time.
- `asset_id` - An `UInt64` unique identifier for an asset. The data for that ID is stored in the `asset_metadata` table.
- `metric_id` - An `UInt64` unique identifier for a metric. The data for that ID is stored in the `metric_metadata` table.
- `value` - A `Float` column holding the metric's value for the given asset/metric pair.
- `computed_at` - A `DateTime` column storing the date and time when the given row was computed.

Metrics are located in different tables, depending on some different parameters. All tables are similar to each other and described below.

## Tables

---

### daily_metrics_v2

The `daily_metrics_v2` table stores a single metric value for each asset for each day. I.e. in that tables stored metrics that have exactly 1 value per day.

Here's an example how to fetch `daily_active_addresses` for `bitcoin` using `daily_metrics_v2`

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

---

### intraday_metrics

Table `intraday_metrics` is very similar to `daily_metrics_v2` but stores metrics with more than one value per day. In most cases, these metrics have a new value every 5 minutes.

Here's an example how to get 5-minute prices for ethereum:

```SQL
SELECT
    dt,
    get_asset_name(asset_id) AS asset,
    get_metric_name(metric_id) AS metric,
    value
FROM intraday_metrics FINAL
WHERE
    asset_id = get_asset_id('ethereum') AND
    metric_id = get_metric_id('price_usd') AND
    dt >= toDateTime('2024-01-01 00:00:00')
ORDER BY dt DESC
LIMIT 5
```

Test in [Queries](https://queries.santiment.net/query/price-example-478)

---

### labeled_intraday_metrics_v2

Table `labeled_intraday_metrics_v2` stores metrics for a given `blockchain` and `label_id`. Each `label_id` corresponds to a certain [label FQN.](/labels/label-fqn) The data for that ID is stored in the `label_metadata` table. Blockchain column contains the string for blockchain name, e.g. `bictoin`, `ethereum`, etc.

For instance, you can retrieve ethereum balance of all centralized exchange addresses with the query:

```SQL
SELECT
    dt,
    value AS balance
FROM labeled_intraday_metrics FINAL
WHERE
    dt >= toDateTime('2024-01-01 00:00:00')
    AND label_id = dictGet('labels_by_fqn', 'label_id', 'santiment/centralized_exchange:v1')
    AND metric_id = dictGet('metrics_by_name', 'metric_id', 'combined_labeled_balance')
    AND asset_id = dictGet('assets_by_name', 'asset_id', 'ethereum')
    AND blockchain = 'ethereum'
ORDER BY dt DESC
LIMIT 5
```

Test in [Queries](https://queries.santiment.net/query/cex-balance-example-479)

---

### daily_label_based_metrics

Table `intraday_metrics` also has `label` and `owner` columns so that metrics stored in that table correspond to a particular label and owner.

> Note that this table uses old way to filter labels (plain label/owner instead of label_fqn).

This table could be used to retrieve [labelled exchange](/metrics/labeled-exchange) metrics under names: 

* `labelled_active_deposits`
* `labelled_deposit_transactions`
* `labelled_active_withdrawals`
* `labelled_withdrawal_transactions` 

or NFT [trading volume](metrics/nft-trade-volume-usd) and [trades count](metrics/nft-trades-count) metrics.

Here's an example to get Binance active deposits:

```SQL
SELECT
    dt,
    get_asset_name(asset_id) AS asset,
    get_metric_name(metric_id) AS metric,
    value
FROM daily_label_based_metrics FINAL
WHERE
    dt >= toDateTime('2024-01-01 00:00:00')
    AND asset_id = get_asset_id('ethereum')
    AND metric_id = get_metric_id('labelled_active_deposits')
    AND label = 'centralized_exchange' AND owner = 'binance'
ORDER BY dt DESC
LIMIT 5
```

Test in [Queries](https://queries.santiment.net/query/labelled-active-deposits-example-481)

---

### ecosystem_aggregated_metrics

`ecosystem_aggregated_metrics` is a table similar to the `daily_metrics_v2` table. The only distinction is that it doesn't contain asset_id column; instead, it includes the ecosystem column. This adjustment was made to accommodate the requirements for development and github activity metrics, allowing us to monitor the activity of the entire ecosystem.

`ecosystem` is a string, you can get available ecosystems as:

```SQL
SELECT DISTINCT ecosystem
FROM ecosystem_aggregated_metrics
WHERE dt >= today() - 7
```

Test in [Queries](https://queries.santiment.net/query/ecosystem-example-482)

> In that table you can find dev activity metrics like 
* `ecosystem_github_activity`
* `ecosystem_dev_activity`
* `ecosystem_github_activity_contributors_count`
* `ecosystem_dev_activity_contributors_count`, etc.

Here's an example how to get ecosystem_github_activity_contributors_count for ethereum:

```SQL
SELECT
    dt,
    get_metric_name(metric_id) AS metric,
    value
FROM ecosystem_aggregated_metrics FINAL
WHERE
    dt >= toDateTime('2024-01-01 00:00:00')
    AND ecosystem = 'ethereum'
    AND metric_id = get_metric_id('ecosystem_github_activity_contributors_count')
ORDER BY dt DESC
LIMIT 5
```

Test in [Queries](https://queries.santiment.net/query/ecosystem-aggregated-metrics-example-483)

---

### intraday_nft_metrics

A table `intraday_nft_metrics` was created to store intraday nft metrics which are related to whole nft collection or to specific tokens within nft collection. Here's an example how to get floor price for boredapeyachtclub collection:

```SQL
SELECT
    dt, value
FROM intraday_nft_metrics
WHERE
    dt >= toDateTime('2024-01-01 00:00:00')
    AND asset_id = get_asset_id('ethereum') 
    AND metric_id = get_metric_id('nft_collection_min_price')
    AND collection_name = 'boredapeyachtclub'
LIMIT 5
```

Test in [Queries](https://queries.santiment.net/query/intraday-nft-metrics-example-485)

---

## Use Cases and Other tables

### Metadata tables

There are few metadata tables storing data about metrics, assets and label_fqns:

* `metric_metadata` stores metric name, ID, metric version, etc.
* `asset_metadata` stores asset name, ID, decimals, contract_addresses, ticker and slug, etc.
* `label_metadata` stores label fqn, ID and other label related info.

Using these table you can navigate through a wide range of Santiment datasets. For instance, you're able to 
find all price-related metrics with a simple query:

```SQL
SELECT DISTINCT name, metric_id
FROM metric_metadata
WHERE name LIKE '%price%'
```

Test in [Queries](https://queries.santiment.net/query/price-related-metrics-example-488)

Also you're able to find deciamals and contract addresses for a particular asset, e.g. uniswap:

```SQL
SELECT DISTINCT name, asset_id, decimals, contract_addresses
FROM asset_metadata
WHERE name = 'uniswap'
```
```
┌───────name─┬──asset_id─┬──deciamls─┬──────────contract_addresses───────────────────────────┐
│ 'uniswap'       2825         18   ['0x1f9840a85d5af5bf1d1762f925bdaddc4201f984']  │ 
└─────────────┴────────────┴─────────────┴───────────────────────────────────────────────────────────┘
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
Test in [Queries](https://queries.santiment.net/query/usage-of-precomputed-metrics-example-415)

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
Test in [Queries](https://queries.santiment.net/query/with-example-416)

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
Test in [Queries](https://queries.santiment.net/query/with-example-with-aggregated-dt-417)

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







