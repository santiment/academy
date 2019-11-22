---
title: "Access plans"
author: "Santiment team"
date: "2019-09-17"
# REF sanbase2/lib/sanbase/billing/plan
# REF sanbase2/lib/sanbase/clickhouse/metric/helper.ex
...
---

Here are the access plans for the different Santiment products.

# Neuro API

## Free plan

* 10 API calls per minute
* 1000 API calls per month
* Historical data access for last 90 days
* Last day of metric data is cut-off
(exception - Realized Value, Age Destroyed and MVRV metrics)

## Basic plan

* 60 API calls per minute
* 10,000 API calls per month
* Historical data access for last 180 days
(exception - Realized Value and MVRV metrics)

## Pro plan

* 120 API calls per minute
* 150,000 API calls per month
* Historical data access for last 18 months

## Premium plan

* 180 API calls per minute
* 500,000 API calls per month
* No restriction on historical data

# SANbase

## Free plan

* Two years of historical data for available metrics
* Last 30 days of data not available
* Up to 10 signals
* No data from external providers
* No access to (new) SANGraphs

## Pro plan

* Three years of historical data available
* Real-time data available
* No limit to Signals
* Access to external data providers
* Access to Sangraphs
* Access to Sansheets spreadsheets add-on

# Special restrictions

Some metrics have **special** restrictions.

## Realized value / MVRV metrics


Those restrictions hold for any metric that contains the string "**mvrv**" or "**realized**"
in its canonical name.


### Free plan (for all products)

* Last **30 days** of data not available
* **One year** of historical data available

### Basic plan (for all products)

* Last **14 days** of data not available
* **Two years** of historical data available

## Token age consumed metrics

The following special restrictions hold for any metric that
contains "**age_consumed**" in its canonical name.


### Free plan (for all products)

* Last **30 days** of data not available
