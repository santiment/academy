---
title: NFT Tables overview
author: Santiment Team
date: 2023-01-30
description: Information about Non-Fungible Token (NFT) tables stored in SanQuery.
---

## Overview

> NFT stands for Non-Fungible Token, which is a type of digital asset that represents ownership of a unique item or piece of content, such as a piece of artwork, music, video, or even tweets.

Unlike cryptocurrencies, which are fungible and interchangeable, NFTs cannot be exchanged on a one-to-one basis because each NFT is unique and has its own set of attributes and characteristics.
NFTs are created using blockchain technology, which provides a secure and transparent ledger of ownership and transfer of the asset.
This allows creators and owners to establish proof of ownership, authenticity, and scarcity for their digital assets, which can increase their value over time.

> Here in SanQuery we collect all the data for all nfts. Which gives you the oppurtinity to easily track a nft of your interest or the whole collection.
You can also investigate all the prices it was sold for before or his previous owners for example.

## List of nft tables

All our tables that contain NFT-related data have the string 'nft' in their name.
So one easy way to find them yourself is by running the following query:
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

Below we have listed all the nft tables with thier columns, a brief descriptions and some example queries which you can use to explore the tables.

### nft_trades

>The "nft_trades" is a table designed to store information about the NFT trades that we have collected. It has the following columns:

- **tx_hash**: Hash of the transaction in which the trade has been included. With type: String

- **platform**: Name of platform where trades occured such as opensea, cryptopunks and etc. With type: String

- **seller_address**: Address who sold the nft. With type: String

- **buyer_address**: Address who bought the nft. With type: String

- **nft_contract_address**: Address of the nft's collection. With type: String

- **currency_contract_address**: Address of ERC20 token or empty if native ether is used. With type: Nullable(String)

- **asset_ref_id**: Reference id of currency contract in format cityHash64('ETH_{address}'). We can use it to get more information about the asset from asset_metadata. With type: UInt64

- **token_ids**: Array ids of NFT token in hex. With type: Array(String)

- **amount_tokens**: Array of amounts, which describes how many tokens were transfered. With type: Array(String)

- **nft_contract_type**: Type of nft contract, 0 - erc721, 1 - erc1155. Based on signature of transfer. With type: UInt8

- **amount**: The amount of the transaction in the asset used in it. With type: String

- **log_index**: Log index of trade event. With type: UInt32

- **complete**: State of the transaction. (1 means it is completed). With type: UInt8

- **dt**: When the transaction happened. With type: DateTime

- **computed_at**: When it was computed. With type: DateTime

- **blockchain**: On which blockchain. With type: String

### nft_tokens_metadata

>The "nft_tokens_metadata" is a table designed to store information about NFT tokens. It has the following columns:

- **Blockchain**: Refers to the decentralized platform on which the NFT exists, e.g. Ethereum, Binance Smart Chain, etc. With type: String

- **Address**: Represents the unique public address of the NFT owner. With type: String

- **Token ID**: Unique identifier assigned to each NFT, used to distinguish it from others. With type: String

- **URI**: Uniform Resource Identifier, a link that directs to additional information or media related to the NFT. With type: Nullable(String)

- **Data**: Contains the NFT's metadata, such as its name, image, and any other relevant information. With type: Nullable(String)

- **Created At**: The date and time when the NFT was created. With type: DateTime

- **Error**: Any error message associated with the NFT, such as a transaction failure, if applicable. This column is used to track and monitor any issues that arise in the NFT creation process. With type: Nullable(String)

### intraday_nft_metrics

>The "intraday_nft_metrics" is a table designed to store intraday metrics for NFT assets. It has the following columns:

- **Asset ID**: Unique identifier assigned to the NFT asset. With type: UInt64

- **Metric ID**: Unique identifier assigned to the specific metric being recorded. With type: UInt64

- **Address**: Represents the unique public address of the NFT owner. With type: String

- **Collection Name**: The name of the NFT collection that the asset belongs to. With type: String

- **Token ID**: Unique identifier assigned to each NFT, used to distinguish it from others. With type: Nullable(UInt64)

- **DT**: The date and time when the metric was recorded. With type: DateTime

- **Value**: The value of the metric recorded at the specified DT. With type: Float64

- **Computed At**: The date and time when the metric was computed. This is used to track the accuracy of the metric calculation and to ensure that the most up-to-date information is available. With type: DateTime

## Sample Queries

<details>
<summary>Well</summary>

   - <details>
   <summary>1</summary>
   You got me �
   </details>
   - <details>
   <summary>Ok, try this</summary>
   You got me �
   </details>
</details>