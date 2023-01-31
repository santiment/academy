---
title: NFT Tables overview
author: Santiment Team
date: 2023-01-30
description: Information about Non-Fungible Token (NFT) tables in SanQuery.
---

## Overview

Introduction to the nft related tables in SanQuery.

## List of nft tables

In order to get a list of all tables that contain the keyword ==nft== execute
```sql
SHOW TABLES LIKE '%nft%'
```
```
┌─name───────────────────┐
| nft_trades             |
| nft_tokens_metadata    |
| intraday_nft_metrics   |
└────────────────────────┘
```

## Exploration of the tables

> We can inspect the tables with the commands we learnt in [Exploration](/sql-editor/exploration/)

Most of the column's names are self explanatory but here we have listed all the columns with its types and descriptions.

- ### nft_trades

|Column name|Type|Description|
|----------|----------|----------|
| tx_hash | String | Hash of the transaction in which the trade has been included.|
| platform | LowCardinality(String) | Name of platform where trades occured such as opensea, cryptopunks and etc.|
| seller_address | String | Address who sold the nft.|
| buyer_address | String | Address who bought the nft.|
| nft_contract_address | String | Address of the nft's collection.|
| currency_contract_address | Nullable(String) | Address of ERC20 token or empty if native ether is used.|
| asset_ref_id | UInt64 | Reference id of currency contract in format cityHash64('ETH_{address}'). We can use it to get more information about the asset from asset_metadata.|
| token_ids | Array(String) | Array ids of NFT token in hex.|
| amount_tokens | Array(String) | Array of amounts, which describes how many tokens were transfered.|
| nft_contract_type | UInt8 | Type of nft contract, 0 - erc721, 1 - erc1155. Based on signature of transfer.|
| amount | String | The amount of the transaction in the asset used in it.|
| log_index | UInt32 | Log index of trade event.|
| complete | UInt8 | If the transaction is completed = 1 |
| dt | DateTime | When the transaction happened.|
| computed_at | DateTime | When it was computed.|
| blockchain | LowCardinality(String) | On which blockchain.|

- ### nft_tokens_metadata

|Column name|Type|Description|
|----------|----------|----------|
| blockchain | LowCardinality(String) | Refers to the decentralized platform on which the NFT exists.|
| address    | LowCardinality(String) | The unique public address of the NFT owner.|
| token_id   | LowCardinality(String) | Unique identifier assigned to each NFT, used to distinguish it from others.|
| uri        | Nullable(String)       | A link that directs to additional information or media related to the NFT.|
| data       | Nullable(String)       | Contains the NFT's metadata, such as its name, description, image.|
| created_at | DateTime               | The date and time when the NFT was created.|
| error      | Nullable(String)       | Any error message associated with the NFT.|

- ### intraday_nft_metrics

|Column name|Type|Description|
|----------|----------|----------|
| asset_id        | UInt64 | Unique identifier assigned to the NFT asset.|
| metric_id       | UInt64 | Unique identifier assigned to the specific metric being recorded.|
| address         | LowCardinality(String) | Represents the unique public address of the NFT owner.|
| collection_name | LowCardinality(String) | The name of the NFT collection that the asset belongs to.|
| token_id        | Nullable(UInt64) | Unique identifier assigned to each NFT, used to distinguish it from others.|
| dt              | DateTime | The date and time when the metric was recorded.|
| value           | Float64 | The value of the metric recorded at the specified dt.|
| computed_at     | DateTime | The date and time when the metric was computed. |