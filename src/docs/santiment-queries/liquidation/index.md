---
title: Liquidation overview
author: Santiment Team
date: 2023-04-03
description: Information about Liquidation project's tables stored in Santiment Queries.
---

## Overview
Liquidation is a project aiming to track the deposits, borrows, repayments, withdraws and liquidate actions happened on lending protocols. 

In **Santiment Queries**, we collect data for liquidation from the following platforms: 

- AAVE-v2/v3
- Compound
- Liquity
- Makerdao

## Usage
What can we use the Liquidation project for:

- Check the in-flow and out-flow for lending protocols
- Check the liquidation actions happened on each protocol
- Check the TVL(Total value locked)
- Total borrowed for a specific asset

## Exploration of the tables

> We can inspect the tables with the commands we learnt in [Exploration](/santiment-queries/exploration/)

Below we have listed all the liquidation tables with thier columns, a brief descriptions and some example queries which you can use to explore the tables.

### lending\_pools\_events

- **tx_hash** (*String*) - Hash of the transaction in which the event has been included
- **log_index** (*UInt32*) - Log index of the event
- **dt** (*DateTime*) - Date and time of the event
- **chain** (*String*) - The chain that the pool is deployed on
- **pool_address** (*String*) - Address of the pool
- **on_behalf_of** (*String*) - Address holding the debt or collateral
- **action** (*Enum8*) - What kind of action is recorded. *borrow* = 0, *deposit* = 1, *withdraw* = 2, *liquidate* = 3, *repay* = 4
- **token_in** (*Nullable(String)*) - Address of token received by the pool (in case of deposit/repay/liquidate actions)
- **token_out** (*Nullable(String)*) - Address of token leaving the pool (in case of borrow/withdraw/liquidate actions)
- **amount_in** (*UInt256*) - The amount of the token received by the pool. 0 in case of borrow/withdraw
- **amount_out** (*UInt256*) - The amount of the token leaving the pool. 0 in case of deposit/repay
- **project_name** (*String*) - Name of the project like aave_v2, compound, maker, etc.
- **user** (*String*) - Address performing the action
- **computed_at** (*DateTime*) - The timestamp when the event was inserted to the table.


## Sample Queries

---
### Total deposits for a certain platform
- Total deposits for AAVE-v2 in 30 days for a certain token

```sql
SELECT SUM(amount_in)
FROM lending_pools_events
WHERE project_name = 'aave_v2' 
AND action = 'deposit'
and token_in = '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2'
and dt >= now() - interval 30 DAY
```
Test in [Queries](https://app.santiment.net/queries/?panels=%5B%7B%22name%22%3A%22Default%20panel%20title%22%2C%22sql%22%3A%7B%22query%22%3A%22SELECT%20SUM(amount_in)%5CnFROM%20lending_pools_events%5CnWHERE%20project_name%20%3D%20%27aave_v2%27%20%5CnAND%20action%20%3D%20%27deposit%27%5Cnand%20token_in%20%3D%20%270xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2%27%5Cnand%20dt%20%3E%3D%20now()%20-%20interval%2030%20DAY%22%2C%22parameters%22%3A%7B%7D%7D%2C%22settings%22%3A%7B%22type%22%3A%22TABLE%22%2C%22layout%22%3A%5B0%2C0%2C6%2C3%5D%2C%22columns%22%3A%5B%7B%22title%22%3A%22sum(amount_in)%22%7D%5D%2C%22parameters%22%3A%5B%5D%7D%7D%5D&selected=0)

---
### Number of liquidations for a certain platform
- Number of liquidations happened in the past 30 days on makerdao

```sql
SELECT COUNT(*)
FROM lending_pools_events
WHERE project_name = 'makerdao' 
AND action = 'liquidate'
and dt >= now() - interval 30 DAY
```
Test in [Queries](https://app.santiment.net/queries/?panels=%5B%7B%22name%22%3A%22Default%20panel%20title%22%2C%22sql%22%3A%7B%22query%22%3A%22SELECT%20COUNT(*)%5CnFROM%20lending_pools_events%5CnWHERE%20project_name%20%3D%20%27makerdao%27%20%5CnAND%20action%20%3D%20%27liquidate%27%5Cnand%20dt%20%3E%3D%20now()%20-%20interval%2030%20DAY%22%2C%22parameters%22%3A%7B%7D%7D%2C%22settings%22%3A%7B%22type%22%3A%22TABLE%22%2C%22layout%22%3A%5B0%2C0%2C6%2C3%5D%2C%22columns%22%3A%5B%7B%22title%22%3A%22count()%22%7D%5D%2C%22parameters%22%3A%5B%5D%7D%7D%5D&selected=0)

---
### Unique borrowers for a certain platform
- Unique borrowers on Compound in the past 30 days

```sql
SELECT DISTINCT user
FROM lending_pools_events
WHERE project_name = 'compound' 
AND action = 'borrow'
and dt >= now() - interval 30 DAY
```
Test in [Queries](https://app.santiment.net/queries/?panels=%5B%7B%22name%22%3A%22Default%20panel%20title%22%2C%22sql%22%3A%7B%22query%22%3A%22SELECT%20DISTINCT%20user%5CnFROM%20lending_pools_events%5CnWHERE%20project_name%20%3D%20%27compound%27%20%5CnAND%20action%20%3D%20%27borrow%27%5Cnand%20dt%20%3E%3D%20now()%20-%20interval%2030%20DAY%22%2C%22parameters%22%3A%7B%7D%7D%2C%22settings%22%3A%7B%22type%22%3A%22TABLE%22%2C%22layout%22%3A%5B0%2C0%2C6%2C3%5D%2C%22columns%22%3A%5B%7B%22title%22%3A%22user%22%7D%5D%2C%22parameters%22%3A%5B%5D%7D%7D%5D&selected=0)