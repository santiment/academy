---
title: Bridge Transactions Table Overview
author: Santiment Team
date: 2024-02-21
description: Discover how Santiment Queries gather data on cryptocurrency exchanges across various blockchain networks.
---

## Overview

A crypto bridge is a platform or protocol that facilitates the exchange of cryptocurrencies between different blockchain networks, promoting interoperability and liquidity within the cryptocurrency ecosystem.

In **Santiment Queries**, we collect data from platforms or protocols which are trading cryptocurrencies across diverse blockchain networks:

- Across
- Arbitrum_bridge
- Manta_pacific
- Multichain
- Op_bridge
- Polygon_bridge
- Squid
- Stargate
- Wbtc
- Zksync_era_bridge
- Zksync_lite

## Usage

Data Analysis and Reporting: This repository facilitates the analysis and reporting of transactions across various types of bridges, offering valuable insights into their utilization and acceptance.

Monitoring and Alert Systems: Utilizing transaction data from bridges, teams can establish monitoring and alert systems to detect irregular or questionable activities across diverse bridge networks.

Integration with Santiment Products: The exported data can seamlessly integrate with other Santiment products, like Sanbase, enhancing the overall understanding of the cryptocurrency landscape.

## Exploring the Tables

We can inspect the table using the commands we learned in [Exploration](/santiment-queries/exploration/).

Here, we've provided the Bridge Transactions table along with its columns, concise descriptions, and a few sample queries for you to delve into the data.

### bridge\_transactions

The `bridge_transactions` table is designed to capture and store detailed information about transactions occurring on a bridge between different blockchain networks. Each row in this table represents a single transaction, and the table includes various attributes to provide comprehensive insights into the transaction process. It has the following columns:

- **tx_hash** (*String*): Hash of the transaction.
- **log_index** (*UInt32*): Log index of the   event.
- **dt** (*DateTime*): Date and time of the transaction
- **chain_in** (*String*): The Blockchain from where the transaction was initiated
- **chain_out** (*String*): The target blockchain to recieve the funds.
- **contract_addr** (*String*): Address of the involved smart contract.
- **token_in** (*Nullable(String)*): Type of token sent into the bridge.
- **token_out** (*Nullable(String)*): Type of token received from the bridge.
- **amount_in** (*UInt256*): Quantity of token_in.
- **amount_out** (*UInt256*): Quantity of token_out.
- **project_name** (*String*): Name or identifier of the associated project.
- **user** (*String*): Identifier of the transaction initiator.
- **args** (*String*): Additional transaction parameters or data
- **asset_in_ref_id** (*UInt64*): Reference ID of the currency contract that can be used to retrieve additional information about the asset from the `asset_metadata` table.
- **asset_out_ref_id** (*UInt64*): Reference ID of the currency contract that can be used to retrieve additional information about the asset from the `asset_metadata` table.
- **computed_at** (*DateTime*): Timestamp indicating when the transaction details were recorded in the database.

## Sample Queries

### Get all WBTC mint transactions

```sql
SELECT *
FROM bridge_transactions
WHERE project_name = 'wbtc' AND action = 'mint'
```
Test in [Queries](https://queries.santiment.net/query/get-all-wbtc-mint-transactions-330)

### Get all WBTC burn transactions

```sql
SELECT *
FROM bridge_transactions
WHERE project_name = 'wbtc' AND action = 'burn'
```
Test in [Queries](https://queries.santiment.net/query/get-all-wbtc-burn-transactions-329)

### Get the total amount of WBTC minted and burned in a specific time range

```sql
SELECT action, SUM(amount_in) as total_amount
FROM bridge_transactions
WHERE project_name = 'wbtc' AND dt BETWEEN '2022-01-01' AND '2022-01-31'
GROUP BY action
```
Test in [Queries](https://queries.santiment.net/query/get-the-total-amount-of-wbtc-minted-and-burned-in-a-specific-time-range-329)

### Get the top 10 users with the highest WBTC mint transactions:

```sql
SELECT user, SUM(amount_in) as total_amount
FROM bridge_transactions
WHERE project_name = 'wbtc' AND action = 'mint'
GROUP BY user
ORDER BY total_amount DESC
LIMIT 10
```
Test in [Queries](https://queries.santiment.net/query/get-the-top-10-users-with-the-highest-wbtc-mint-transactions-333)