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

1. tx_hash: Hash of the transaction in which the trade has been included. With type: String
2. platform: Name of platform where trades occured such as opensea, cryptopunks and etc. With type: String
3. seller_address: Address who sold the nft. With type: String
4. buyer_address: Address who bought the nft. With type: String
5. nft_contract_address: Address of the nft's collection. With type: String
6. currency_contract_address: Address of ERC20 token or empty if native ether is used. With type: Nullable(String)
7. asset_ref_id: Reference id of currency contract in format cityHash64('ETH_{address}'). We can use it to get more information about the asset from asset_metadata. With type: UInt64
8. token_ids: Array ids of NFT token in hex. With type: Array(String)
9. amount_tokens: Array of amounts, which describes how many tokens were transfered. With type: Array(String)
10. nft_contract_type: Type of nft contract, 0 - erc721, 1 - erc1155. Based on signature of transfer. With type: UInt8
11. amount: The amount of the transaction in the asset used in it. With type: String
12. log_index: Log index of trade event. With type: UInt32
13. complete: State of the transaction. (1 means it is completed). With type: UInt8
14. dt: When the transaction happened. With type: DateTime
15. computed_at: When it was computed. With type: DateTime
16. blockchain: On which blockchain. With type: String

<details>
<summary>Well</summary>

<details>
<summary>Try this</summary>

 <details>
 <summary>The other one</summary>

   <details>
   <summary>Ok, try this</summary>
   You got me �
   </details>
 </details>
</details>
</details>

### nft_tokens_metadata

|Column name|Type|Description|
|----------|----------|----------|
| blockchain | String | Refers to the decentralized platform on which the NFT exists.|
| address    | String | The unique public address of the NFT owner.|
| token_id   | String | Unique identifier assigned to each NFT, used to distinguish it from others.|
| uri        | Nullable(String)       | A link that directs to additional information or media related to the NFT.|
| data       | Nullable(String)       | Contains the NFT's metadata, such as its name, description, image.|
| created_at | DateTime               | The date and time when the NFT was created.|
| error      | Nullable(String)       | Any error message associated with the NFT.|

### intraday_nft_metrics

|Column name|Type|Description|
|----------|----------|----------|
| asset_id        | UInt64 | Unique identifier assigned to the NFT asset.|
| metric_id       | UInt64 | Unique identifier assigned to the specific metric being recorded.|
| address         | String | Represents the unique public address of the NFT owner.|
| collection_name | String | The name of the NFT collection that the asset belongs to.|
| token_id        | Nullable(UInt64) | Unique identifier assigned to each NFT, used to distinguish it from others.|
| dt              | DateTime | The date and time when the metric was recorded.|
| value           | Float64 | The value of the metric recorded at the specified dt.|
| computed_at     | DateTime | The date and time when the metric was computed. |