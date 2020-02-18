---
title: "Access plans"
author: "Santiment team"
date: "2019-09-17"
# REF sanbase2/lib/sanbase/billing/plan
# REF sanbase2/lib/sanbase/clickhouse/metric/helper.ex
---

Here are the access plans for the different Santiment products.

## SanAPI

### Free plan

- 1000 API calls per month
- Historical data access for last 90 days
- Last 2 days of metric data is cut-off
  (exception - Realized Value, Age Destroyed and MVRV metrics)

### Basic plan

- 100,000 API calls per month
- Historical data access for last 2 years
  (exception - Realized Value and MVRV metrics)

### Pro plan

- 300,000 API calls per month
- No restriction on historical data

## Sanbase

### Free plan

- 2 years of historical data for available metrics
- Last 30 days of metric data is cut-off
- Up to 10 signals definitions allowed
- No data from external providers
- No access to Sanbase Graphs

### Pro plan

- 5 years of historical data available
- Real-time data available
- No limit to Signals
- Access to external data providers
- Access to Sanbase Graphs
- Bonus: Full access to Sansheets

[More detailed article](/products-and-plans/sanbase-pro-features/) with PRO benefits

## Special restrictions

Some metrics have **special** restrictions.

### Realized value / MVRV metrics

Those restrictions hold for any metric that contains the string "**mvrv**" or "**realized**"
in its canonical name.

#### Free plan (for all products)

- Last **30 days** of data not available
- **One year** of historical data available

#### Basic plan (for all products)

- Last **14 days** of data not available
- **Two years** of historical data available

### Token age consumed metrics

The following special restrictions hold for any metric that
contains "**age_consumed**" in its canonical name.

#### Free plan (for all products)

- Last **30 days** of data not available
