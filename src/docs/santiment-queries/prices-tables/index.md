---
title: "Fetching Prices, Volume, and Market Cap using Santiment Queries"
author: Santiment Team
date: 2023-05-30
description: Learn how to extract cryptocurrency asset prices, trading volume, and market cap data using the asset_prices_v3 table in Santiment Queries.
---

## Overview

Santiment Queries' `asset_prices_v3` table serves as a critical tool for procuring accurate and detailed information about cryptocurrency asset prices, volume, and market capitalization at any given timestamp. This guide aims to introduce you to the table's structure and its versatile applications.

Data for the `asset_prices_v3` table is sourced from two primary platforms - Coinmarketcap and Cryptocompare.

## Table Structure

The `asset_prices_v3` table offers extensive information about cryptocurrency asset prices at various timestamps. Here are the key columns you should be familiar with:

- **dt** (*DateTime*): This column signifies the timestamp of the data.
- **source** (*LowCardinality(String)*): Specifies the data's origin, either `coinmarketcap` or `cryptocompare`.
- **slug** (*LowCardinality(String)*): The name of the cryptocurrency project (e.g., 'bitcoin', 'ethereum').
- **price_usd** (*Float64*): The price of the asset in USD.
- **price_btc** (*Float64*): The price of the asset in Bitcoin.
- **marketcap_usd** (*Float64*): The market capitalization of the asset in USD.
- **volume_usd** (*Float64*): The rolling total trading volume of the asset in USD for last 24 hours 

## Sample Queries

### Query 1: Fetch the Daily Closing Price of Bitcoin for the Past Week

The following SQL query allows you to extract the daily closing price of Bitcoin for the last seven days.

```sql
SELECT 
    toDate(dt) as date, 
    argMax(price_usd, dt) as closing_price
FROM 
    asset_prices_v3
WHERE 
    slug = 'bitcoin' 
    AND dt >= (now() - interval 7 day)
GROUP BY 
    date
ORDER BY 
    date DESC
```

Test in [Queries](https://queries.santiment.net/query/fetch-the-daily-closing-price-of-bitcoin-for-the-past-week-406)

### Query 2: Identify the Top Projects by USD Trading Volume in the Past 24 Hours

To retrieve the top 20 cryptocurrency projects ranked by their average trading volume in USD over the last 24 hours, use the following SQL query.

```sql
SELECT
    slug,
    AVG(volume_usd) as avg_volume
FROM
    asset_prices_v3
WHERE
    dt >= (now() - interval 24 hour)
GROUP BY
    slug
ORDER BY
    avg_volume DESC
LIMIT 20;
```

Test in [Queries](https://queries.santiment.net/query/identify-the-top-projects-by-usd-trading-volume-in-the-past-24-hours-407)