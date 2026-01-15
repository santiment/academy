---
title: Lending Pools Overview
author: Santiment Team
date: 2026-01-15
description: Information about the Lending Pools's table stored in Santiment Queries.
---

## Overview

A lending pool is a collective source of funds or assets that individuals deposit into for lending purposes, typically facilitated by decentralized finance (DeFi) platforms. It allows lenders to earn interest on their deposited funds while borrowers can access these funds by providing collateral or meeting specific requirements set by the lending protocol.

Lending Pools is a project that aims to track deposits, borrows, repayments, withdrawals, and liquidation actions occurring on lending protocols.

In **Santiment Queries**, we record the platform from which the liquidation data was recorded under the `project_name` column. The platforms we collect data from are:

- AAVE-v2/v3
- Compound/v3
- Liquity
- MakerDAO

## Usage

The Lending Pools project can be used for the following purposes:

- Monitor the inflow and outflow of lending protocols
- Observe liquidation actions occurring on each protocol
- Track the Total Value Locked (TVL) in various protocols
- Determine the total amount borrowed for a specific asset

## Exploration of the Tables

We can inspect the table with the commands we learned in [Exploration](/santiment-queries/exploration/).

Below, we have listed the table containing the lending pools data with its columns, brief descriptions, and some example queries that you can use to explore the table.

### lending\_events\_with\_args

- **tx_hash** (*String*): Hash of the transaction in which the event has been included
- **log_index** (*UInt32*): Log index of the event
- **dt** (*DateTime*): Date and time of the event
- **chain** (*String*): The chain that the pool is deployed on
- **pool_address** (*String*): Address of the pool
- **on_behalf_of** (*String*): Address holding the debt or collateral
- **action** (*Enum8*): Type of action recorded. *borrow* = 0, *deposit* = 1, *withdraw* = 2, *liquidate* = 3, *repay* = 4
- **token_in** (*Nullable(String)*): Address of token received by the pool (in case of deposit/repay/liquidate actions)
- **token_out** (*Nullable(String)*): Address of token leaving the pool (in case of borrow/withdraw/liquidate actions)
- **amount_in** (*UInt256*): The amount of the token received by the pool. 0 in case of borrow/withdraw
- **amount_out** (*UInt256*): The amount of the token leaving the pool. 0 in case of deposit/repay
- **project_name** (*String*): Name of the project, such as aave_v2, aave_v3, compound, compound_v3, liquity and makerdao.
- **user** (*String*): Address performing the action
- **computed_at** (*DateTime*): The timestamp when the event was inserted into the table.
- **args** (*JSON*): Additional arguments related to the event

## Sample Queries

### Total Deposits for a Certain Platform

To find the total deposits for AAVE-v2 in the last 30 days for a specific token, use the following SQL query:

```sql
SELECT SUM(amount_in)
FROM lending_events_with_args
WHERE project_name = 'aave_v2'
AND action = 'deposit'
AND token_in = '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2'
AND dt >= now() - interval 30 DAY
```
Test in [Queries](https://queries.santiment.net/query/total-deposits-for-a-certain-platform-394)

---

### Number of Liquidations for a Certain Platform

To find the number of liquidations that occurred in the past 30 days on MakerDAO, use the following SQL query:

```sql
SELECT COUNT(*)
FROM lending_events_with_args
WHERE project_name = 'makerdao'
AND action = 'liquidate'
AND dt >= now() - interval 30 DAY
```
Test in [Queries](https://queries.santiment.net/query/number-of-liquidations-for-a-certain-platform-395)

---

### Unique Borrowers for a Certain Platform - Unique Borrowers on Compound in the Past 30 Days

```sql
SELECT DISTINCT user
FROM lending_events_with_args
WHERE project_name = 'compound'
AND action = 'borrow'
AND dt >= now() - interval 30 DAY
```

Test in [Queries](https://queries.santiment.net/query/unique-borrowers-for-a-certain-platform-unique-borrowers-on-compound-in-the-past-30-days-396)

