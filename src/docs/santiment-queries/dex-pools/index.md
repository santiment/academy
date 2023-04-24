---
title: DEX Pools Tables Overview
author: Santiment Team
date: 2023-02-16
description: Learn about the information on trades in decentralized exchanges (DEX) that can be gathered using Santiment Queries.
---

## Overview

A DEX, short for decentralized exchange, is a type of peer-to-peer marketplace where cryptocurrency traders can conduct transactions directly with one another. By eliminating the need for intermediaries such as banks and brokers, DEXs facilitate the core promise of cryptocurrency, which is to enable financial transactions without centralized control.

In **Santiment Queries**, we collect data from protocols that provide liquidity pools (aggregators are not included):

- Balancer
- Bamboodefi
- Bancor-v3
- ChickenSwap
- Clipper
- Curve
- DefiPlaza
- DefiSwap
- DoDo
- Elk
- EmpireDex
- KwikSwap
- KyberSwap
- MooniSwap
- RadioShack
- Saddle
- ShibaSwap
- StandardTech
- Sum Swap
- SushiSwap
- Swapr
- Synapse
- Uniswap v2/v3
- YouSwap

This information gives you the ability to check:

- the DEX market activity
- the smart money movement on certain tokens
- information about liquidity pools
- the most active tokens, addresses, and DEX protocols
- different DEX protocols and to compare them

## List of DEX Tables

All our tables that contain DEX-related data have the string 'dex' in their name. You can easily find them by running the following query:

```sql
SHOW TABLES LIKE '%dex%'
```

```
┌─name───────────────────┐
│ dex_pools              │
│ dex_pools_trades       │
└────────────────────────┘
```

## Exploring the Tables

We can inspect the tables using the commands we learned in [Exploration](/santiment-queries/exploration/).

Below, we have listed all the DEX pools tables with their columns, brief descriptions, and some example queries that you can use to explore the tables.

### dex\_pools

The `dex_pools` table is designed to store information about liquidity pool creation events on DEX protocols. It has the following columns:

- **dt** (*DateTime*): Date and time of the pool deployment.
- **chain** (*String*): The chain that the pool is deployed on.
- **tx_hash** (*String*): Hash of the transaction.
- **log_index** (*UInt32*): Log index of the pool event.
- **project_name** (*String*): Name of the DEX or projects, such as uniswap_v3, curve, dydx, etc.
- **factory_address** (*Nullable(String)*): Address of the factory that created the pool; NULL if there is no factory (e.g., clipper.exchange).
- **pool_address** (*String*): Address of the pool.
- **token_address** (*Array(Nullable(String))*): Array of token addresses used in the pool.
- **fee** (*Nullable(Float64)*): Fee of the pool in percentage; NULL if not available or variable.
- **computed_at** (*DateTime*): The timestamp when the pool was inserted into the table.

### dex\_pools\_trades

The `dex_pools_trades` is a table designed to store trading events on DEX protocols. It has the following columns:

- **dt** (*DateTime*): Date and time of trade
- **chain** (*String*): The chain that the pool is deployed on
- **tx_hash** (*String*): Hash of the transaction in which the trade has been included
- **log_index** (*UInt32*): Log index of trade event
- **trade_index** (*UInt32*): The sequence order of the trade in the transaction. For example, if there are 5 trades in a transaction, the trade index should be 0 to 4 accordingly.
- **pool_address** (*String*): Address of the pool
- **router_address** (*String*): Address of the router used in this transaction. A router routes trade orders to the most appropriate pool of liquidity for efficient execution and optimal pricing based on available liquidity.*
- **from** (*String*): Sender address of the transaction.**
- **to** (*String*): Receiver address of the transaction
- **token_in** (*Nullable(String)*): Address of token sent, NoneType if it's ETH
- **token_out** (*Nullable(String)*): Address of token received
- **amount_in** (*UInt256*): The amount of the token sent
- **amount_out** (*UInt256*): The amount of the token received
- **asset_in_ref_id** (*UInt64*): Reference ID of the currency contract that was sent which can be used to retrieve additional information about the asset from the `asset_metadata` table.
- **asset_out_ref_id** (*UInt64*): Reference ID of the currency contract that was received.
- **computed_at** (*DateTime*): The timestamp when the trade was inserted into the table.

\* In decentralized exchanges (DEXs), a router is used to direct transactions between different blockchain networks or between different liquidity pools within the same network. When a user wants to make a trade on a DEX, the router identifies the best path for the trade to take in order to get the best possible price. The router can also split the trade into smaller orders and route them through multiple liquidity pools in order to find the best overall price. Additionally, the router can be used to manage liquidity and minimize the impact of large trades on the market by routing the trade through multiple liquidity pools. By doing so, the router ensures that the trade does not cause significant price movements in any single pool, which could adversely affect the price of the traded asset.

** Note about **from** and **to**: They can be equal when there is an internal router transaction, then the address in **from** will be the same as **to** and also the **router_address**. However, it is also possible to have routed transactions in which they are not equal, such as when the transaction is to or from the router or when a router is used for a normal trade between addresses.

## Sample Queries

### Volume of a specific token on a specific exchange for the last 30 days

```sql
SELECT
    SUM(dpt.amount_in)/1e6 as total_amount
FROM
    dex_pools_trades dpt
    INNER JOIN dex_pools dp
    ON dp.pool_address = dpt.pool_address
WHERE
    dp.project_name = 'uniswap_v3'
    AND dpt.token_in = LOWER('0xdAC17F958D2ee523a2206206994597C13D831ec7') --USDT
    AND dt >= now() - interval 30 DAY
```
Test in [Queries](https://app.santiment.net/queries/?panels=%5B%7B%22name%22%3A%22Default%20panel%20title%22%2C%22sql%22%3A%7B%22query%22%3A%22SELECT%5Cn%5CtSUM(dpt.amount_in)%2F1e6%20as%20total_amount%5CnFROM%20%5Cn%5Ctdex_pools_trades%20dpt%20%5Cn%5CtINNER%20JOIN%20dex_pools%20dp%5Cn%5CtON%20dp.pool_address%20%3D%20dpt.pool_address%5Cn%5CnWHERE%5Cn%5Ctdp.project_name%20%3D%20%27uniswap_v3%27%5Cn%5CtAND%20dpt.token_in%20%3D%20LOWER(%270xdAC17F958D2ee523a2206206994597C13D831ec7%27)%20--USDT%5Cn%5CtAND%20dt%20%3E%3D%20now()%20-%20interval%2030%20DAY%22%2C%22parameters%22%3A%7B%7D%7D%2C%22settings%22%3A%7B%22type%22%3A%22TABLE%22%2C%22layout%22%3A%5B0%2C0%2C6%2C3%5D%2C%22columns%22%3A%5B%7B%22title%22%3A%22total_amount%22%7D%5D%2C%22parameters%22%3A%5B%5D%7D%7D%5D&selected=0?panels=%5B%7B%22name%22%3A%22Default%20panel%20title%22%2C%22sql%22%3A%7B%22query%22%3A%22SELECT%5Cn%5CtSUM(dpt.amount_in)%2F1e6%20as%20total_amount%5CnFROM%20%5Cn%5Ctdex_pools_trades%20dpt%20%5Cn%5CtINNER%20JOIN%20dex_pools%20dp%5Cn%5CtON%20dp.pool_address%20%3D%20dpt.pool_address%5Cn%5CnWHERE%5Cn%5Ctdp.project_name%20%3D%20'uniswap_v3'%5Cn%5CtAND%20dpt.token_in%20%3D%20LOWER('0xdAC17F958D2ee523a2206206994597C13D831ec7')%20--USDT%5Cn%5CtAND%20dt%20%3E%3D%20now()%20-%20interval%2030%20DAY%22%2C%22parameters%22%3A%7B%7D%7D%2C%22settings%22%3A%7B%22type%22%3A%22TABLE%22%2C%22layout%22%3A%5B0%2C0%2C6%2C3%5D%2C%22columns%22%3A%5B%7B%22title%22%3A%22total_amount%22%7D%5D%2C%22parameters%22%3A%5B%5D%7D%7D%5D&selected=0)

### Number of trades that occurred in the past 30 days on a specific exchange

```sql
SELECT
    COUNT(*) AS trade_count
FROM
    dex_pools_trades dpt
    INNER JOIN dex_pools dp
    ON dp.pool_address = dpt.pool_address
WHERE
    dp.project_name = 'curve'
    AND dt >= now() - interval 30 DAY
```

Test in [Queries](https://app.santiment.net/queries/?panels=%5B%7B%22name%22%3A%22Default%20panel%20title%22%2C%22sql%22%3A%7B%22query%22%3A%22SELECT%5Cn%5CtCOUNT(*)%20AS%20trade_count%5CnFROM%5Cn%5Ctdex_pools_trades%20dpt%20%5Cn%5CtINNER%20JOIN%20dex_pools%20dp%5Cn%5CtON%20dp.pool_address%20%3D%20dpt.pool_address%5CnWHERE%5Cn%5Ctdp.project_name%20%3D%20%27curve%27%5Cn%20%20AND%20dt%20%3E%3D%20now()%20-%20interval%2030%20DAY%22%2C%22parameters%22%3A%7B%7D%7D%2C%22settings%22%3A%7B%22type%22%3A%22TABLE%22%2C%22layout%22%3A%5B0%2C0%2C6%2C3%5D%2C%22columns%22%3A%5B%7B%22title%22%3A%22trade_count%22%7D%5D%2C%22parameters%22%3A%5B%5D%7D%7D%5D&selected=0)

### Unique Traders in the Past 30 Days on DODO Exchange

```sql
SELECT
    COUNT(DISTINCT "from") AS unique_trader
FROM
    dex_pools_trades dpt
    INNER JOIN dex_pools dp
    ON dp.pool_address = dpt.pool_address
WHERE
    dp.project_name = 'dodo'
    AND dt >= now() - interval 30 DAY
```

Test in [Queries](https://app.santiment.net/queries/?panels=%5B%7B%22name%22%3A%22Default%20panel%20title%22%2C%22sql%22%3A%7B%22query%22%3A%22SELECT%5Cn%5CtCOUNT(DISTINCT%20from)%20AS%20unique_trader%5CnFROM%5Cn%5Ctdex_pools_trades%20dpt%20%5Cn%5CtINNER%20JOIN%20dex_pools%20dp%5Cn%5CtON%20dp.pool_address%20%3D%20dpt.pool_address%5CnWHERE%5Cn%5Ctdp.project_name%20%3D%20%27dodo%27%5Cn%20%20AND%20dt%20%3E%3D%20now()%20-%20interval%2030%20DAY%22%2C%22parameters%22%3A%7B%7D%7D%2C%22settings%22%3A%7B%22type%22%3A%22TABLE%22%2C%22layout%22%3A%5B0%2C0%2C6%2C3%5D%2C%22columns%22%3A%5B%7B%22title%22%3A%22unique_trader%22%7D%5D%2C%22parameters%22%3A%5B%5D%7D%7D%5D&selected=0?panels=%5B%7B%22name%22%3A%22Default%20panel%20title%22%2C%22sql%22%3A%7B%22query%22%3A%22SELECT%5Cn%5CtCOUNT(DISTINCT%20from)%20AS%20unique_trader%5CnFROM%5Cn%5Ctdex_pools_trades%20dpt%20%5Cn%5CtINNER%20JOIN%20dex_pools%20dp%5Cn%5CtON%20dp.pool_address%20%3D%20dpt.pool_address%5CnWHERE%5Cn%5Ctdp.project_name%20%3D%20%27dodo%27%5Cn%20%20AND%20dt%20%3E%3D%20now()%20-%20interval%2030%20DAY%22%2C%22parameters%22%3A%7B%7D%7D%2C%22settings%22%3A%7B%22type%22%3A%22TABLE%22%2C%22layout%22%3A%5B0%2C0%2C6%2C3%5D%2C%22columns%22%3A%5B%7B%22title%22%3A%22unique_trader%22%7D%5D%2C%22parameters%22%3A%5B%5D%7D%7D%5D&selected=0)

### Number of Pools on a Specific Exchange

```sql
SELECT
    COUNT(DISTINCT pool_address) AS pool_count
FROM
    dex_pools
WHERE
    project_name = 'sushi_v2'
```

Test in [Queries](https://app.santiment.net/queries/?panels=%5B%7B%22name%22%3A%22Default%20panel%20title%22%2C%22sql%22%3A%7B%22query%22%3A%22SELECT%5Cn%5CtCOUNT(DISTINCT%20pool_address)%20AS%20pool_count%5CnFROM%5Cn%5Ctdex_pools%5CnWHERE%5Cn%5Ctproject_name%20%3D%20%27sushi_v2%27%22%2C%22parameters%22%3A%7B%7D%7D%2C%22settings%22%3A%7B%22type%22%3A%22TABLE%22%2C%22layout%22%3A%5B0%2C0%2C6%2C3%5D%2C%22columns%22%3A%5B%7B%22title%22%3A%22pool_count%22%7D%5D%2C%22parameters%22%3A%5B%5D%7D%7D%5D&selected=0?panels=%5B%7B%22name%22%3A%22Default%20panel%20title%22%2C%22sql%22%3A%7B%22query%22%3A%22SELECT%5Cn%5CtCOUNT(DISTINCT%20pool_address)%20AS%20pool_count%5CnFROM%5Cn%5Ctdex_pools%5CnWHERE%5Cn%5Ctproject_name%20%3D%20'sushi_v2'%22%2C%22parameters%22%3A%7B%7D%7D%2C%22settings%22%3A%7B%22type%22%3A%22TABLE%22%2C%22layout%22%3A%5B0%2C0%2C6%2C3%5D%2C%22columns%22%3A%5B%7B%22title%22%3A%22pool_count%22%7D%5D%2C%22parameters%22%3A%5B%5D%7D%7D%5D&selected=0)

---

### Pool Fees Ranked Descending

```sql
SELECT
    pool_address, project_name, fee
FROM
    dex_pools
ORDER BY fee DESC, project_name DESC
LIMIT 50
```

Test in [Queries](https://app.santiment.net/queries/?panels=%5B%7B%22name%22%3A%22Default%20panel%20title%22%2C%22sql%22%3A%7B%22query%22%3A%22SELECT%5Cn%5Ctpool_address%2C%20project_name%2C%20fee%5CnFROM%20%5Cn%5Ctdex_pools%5CnORDER%20BY%20fee%20DESC%2C%20project_name%20DESC%5CnLIMIT%2050%22%2C%22parameters%22%3A%7B%7D%7D%2C%22settings%22%3A%7B%22type%22%3A%22TABLE%22%2C%22layout%22%3A%5B0%2C0%2C6%2C3%5D%2C%22columns%22%3A%5B%7B%22title%22%3A%22pool_address%22%7D%2C%7B%22title%22%3A%22project_name%22%7D%2C%7B%22title%22%3A%22fee%22%7D%5D%2C%22parameters%22%3A%5B%5D%7D%7D%5D&selected=0?panels=%5B%7B%22name%22%3A%22Default%20panel%20title%22%2C%22sql%22%3A%7B%22query%22%3A%22SELECT%5Cn%5Ctpool_address%2C%20project_name%2C%20fee%5CnFROM%20%5Cn%5Ctdex_pools%5CnORDER%20BY%20fee%20DESC%2C%20project_name%20DESC%5CnLIMIT%2050%22%2C%22parameters%22%3A%7B%7D%7D%2C%22settings%22%3A%7B%22type%22%3A%22TABLE%22%2C%22layout%22%3A%5B0%2C0%2C6%2C3%5D%2C%22columns%22%3A%5B%7B%22title%22%3A%22pool_address%22%7D%2C%7B%22title%22%3A%22project_name%22%7D%2C%7B%22title%22%3A%22fee%22%7D%5D%2C%22parameters%22%3A%5B%5D%7D%7D%5D&selected=0)

### Projects Ranked by Number of Pools

```sql
SELECT
    project_name,
    MIN(dt) as start_date,
    COUNT(DISTINCT pool_address) AS pool_count
FROM
    dex_pools
GROUP BY project_name
ORDER BY pool_count DESC
```

Test in [Queries](https://app.santiment.net/queries/?panels=%5B%7B%22name%22%3A%22Default%20panel%20title%22%2C%22sql%22%3A%7B%22query%22%3A%22SELECT%5Cn%5Ctproject_name%2C%5Cn%5CtMIN(dt)%20as%20start_date%2C%5Cn%5CtCOUNT(DISTINCT%20pool_address)%20AS%20pool_count%5CnFROM%20%5Cn%5Ctdex_pools%5CnGROUP%20BY%20project_name%5CnORDER%20BY%20pool_count%20DESC%22%2C%22parameters%22%3A%7B%7D%7D%2C%22settings%22%3A%7B%22type%22%3A%22TABLE%22%2C%22layout%22%3A%5B0%2C0%2C6%2C3%5D%2C%22columns%22%3A%5B%7B%22title%22%3A%22project_name%22%7D%2C%7B%22title%22%3A%22start_date%22%2C%22formatterId%22%3A1%7D%2C%7B%22title%22%3A%22pool_count%22%7D%5D%2C%22parameters%22%3A%5B%5D%7D%7D%5D&selected=0?panels=%5B%7B%22name%22%3A%22Default%20panel%20title%22%2C%22sql%22%3A%7B%22query%22%3A%22SELECT%5Cn%5Ctproject_name%2C%5Cn%5CtMIN(dt)%20as%20start_date%2C%5Cn%5CtCOUNT(DISTINCT%20pool_address)%20AS%20pool_count%5CnFROM%20%5Cn%5Ctdex_pools%5CnGROUP%20BY%20project_name%5CnORDER%20BY%20pool_count%20DESC%22%2C%22parameters%22%3A%7B%7D%7D%2C%22settings%22%3A%7B%22type%22%3A%22TABLE%22%2C%22layout%22%3A%5B0%2C0%2C6%2C3%5D%2C%22columns%22%3A%5B%7B%22title%22%3A%22project_name%22%7D%2C%7B%22title%22%3A%22start_date%22%2C%22formatterId%22%3A1%7D%2C%7B%22title%22%3A%22pool_count%22%7D%5D%2C%22parameters%22%3A%5B%5D%7D%7D%5D&selected=0)

