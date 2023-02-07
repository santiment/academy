---
title: NFT Tables overview
author: Santiment Team
date: 2023-01-30
description: Information about Non-Fungible Token (NFT) tables stored in Santiment Queries.
---

## Overview
NFT stands for Non-Fungible Token, which is a digital asset that represents ownership of a unique item or piece of content, like art, music, video, or tweets. NFTs are different from cryptocurrencies because each NFT is unique and can't be exchanged one-to-one, while cryptocurrencies are interchangeable. 

NFTs are made using blockchain technology, which provides a secure and transparent record of ownership and transfer, allowing creators and owners to prove ownership, authenticity, and rarity, potentially increasing the value of their digital assets over time. 

In Santiment Queries, we collect data for all NFTs from the following exchanges: cryptopunks, foundation, looksrare, opensea, opensea_polygon, rarible, superrare. This information gives you the ability to easily track an NFT of interest or an entire collection, as well as investigate past prices and owners.

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

The `nft_trades` is a table designed to store information about the NFT trades that we have collected. It has the following columns:

- **dt** (*DateTime*): When the transaction happened.

- **blockchain** (*String*): On which blockchain.

- **tx_hash** (*String*): Unique identifier that is generated when the transaction was executed.

- **log_index** (*UInt32*): Log index of trade event. 

- **platform** (*String*): Name of platform where trades occured such as opensea, cryptopunks and etc. 

- **seller_address** (*String*): Address who sold the nft.

- **buyer_address** (*String*): Address who bought the nft.

- **nft_contract_address** (*String*): Address of the nft's collection.

- **currency_contract_address** (*Nullable(String)*): Address of ERC20 token or empty if native ether is used.

- **asset_ref_id** (*UInt64*): Reference ID of the currency contract that can be used to retrieve additional information about the asset from the `asset_metadata` table.

- **token_ids** (*Array(String)*): Array ids of NFT token in hex.

- **amount_tokens** (*Array(String)*): Array of amounts, which describes how many tokens were transfered.

- **nft_contract_type** (*UInt8*): Type of nft contract, 0 - erc721, 1 - erc1155. Based on signature of transfer.

- **amount** (*String*): The amount of the transaction in the asset used in it.

- **complete** (*UInt8*): State of the transaction. (1 means it is completed).

- **computed_at** (*DateTime*): The timestamp when the trade was inserted to the table.

### nft_tokens_metadata

The `nft_tokens_metadata` is a table designed to store information about NFT tokens. It has the following columns:

- **blockchain** (*String*): Refers to the decentralized platform on which the NFT exists, e.g. Ethereum, Binance Smart Chain, etc.

- **address** (*String*): Represents the unique public address of the NFT owner.

- **token_id** (*String*): Unique identifier assigned to each NFT, used to distinguish it from others.

- **uri** (*Nullable(String)*): Uniform Resource Identifier, a link that directs to additional information or media related to the NFT.

- **data** (*Nullable(String)*): Contains the NFT's metadata, such as its name, image, and any other relevant information.

- **created_at_** (*DateTime*): The date and time when the NFT was created.

- **error** (*Nullable(String)*): Any error message associated with the NFT, such as a transaction failure, if applicable. This column is used to track and monitor any issues that arise in the NFT creation process.

### intraday_nft_metrics

The "intraday_nft_metrics" is a table designed to store intraday metrics for NFT assets. The table has the following columns:

- **asset_id** (*UInt64*): Unique identifier assigned to the NFT asset.

- **metric_id** (*UInt64*): Unique identifier assigned to the specific metric being recorded.

- **address** (*String*): Represents the unique public address of the NFT owner.

- **collection_name** (*String*): The name of the NFT collection that the asset belongs to.

- **token_id** (*Nullable(UInt64)*): Unique identifier assigned to each NFT, used to distinguish it from others.

- **dt** (*DateTime*): The date and time when the metric was recorded.

- **value** (*Float64*): The value of the metric recorded at the specified `dt`.

- **computed_at** (*DateTime*): The timestamp when the trade was inserted to the table. This is used to track the accuracy of the metric calculation and to ensure that the most up-to-date information is available.

There are currently 16 metrics we track:

| ID | Name | Description |
|----------|------|
| 1279 | nft_collection_min_price       ||
| 1280 | nft_collection_max_price       ||
| 1281 | nft_collection_avg_price       ||
| 1282 | nft_collection_trades_count    ||
| 1283 | nft_collection_min_price_usd   ||
| 1284 | nft_collection_max_price_usd   ||
| 1285 | nft_collection_avg_price_usd   ||
| 1286 | nft_token_id_price             ||
| 1287 | nft_token_id_price_usd         ||
| 1288 | nft_market_volume              ||
| 1289 | nft_market_count               ||
| 1290 | nft_collection_holders_balance ||
| 1291 | nft_network_profit_loss        ||
| 1292 | nft_network_profit_loss_usd    ||
| 1293 | nft_collection_profit_loss     ||
| 1294 | nft_collection_profit_loss_usd ||

## Sample Queries

---
- Check the number of unique wallets that have owned an NFT in the last 7 days.

```sql
SELECT countDistinct(buyer_address) AS uniqueBuyers
FROM nft_trades
WHERE dt >= (now() - INTERVAL 6 DAY)
```
Test in [Queries](https://app.santiment.net/queries/?panels=%5B%7B%22name%22%3A%22Default%20panel%20title%22%2C%22sql%22%3A%7B%22query%22%3A%22SELECT%20countDistinct(buyer_address)%20AS%20uniqueBuyers%5CnFROM%20nft_trades%5CnWHERE%20dt%20%3E%3D%20(now()%20-%20INTERVAL%206%20DAY)%22%2C%22parameters%22%3A%7B%7D%7D%2C%22settings%22%3A%7B%22type%22%3A%22TABLE%22%2C%22layout%22%3A%5B0%2C0%2C6%2C3%5D%2C%22columns%22%3A%5B%7B%22title%22%3A%22uniqueBuyers%22%7D%5D%2C%22parameters%22%3A%5B%5D%7D%7D%5D&selected=0?panels=%5B%7B%22name%22%3A%22Default%20panel%20title%22%2C%22sql%22%3A%7B%22query%22%3A%22SELECT%20countDistinct(buyer_address)%20AS%20uniqueBuyers%5CnFROM%20nft_trades%5CnWHERE%20dt%20%3E%3D%20(now()%20-%20INTERVAL%206%20DAY)%22%2C%22parameters%22%3A%7B%7D%7D%2C%22settings%22%3A%7B%22type%22%3A%22TABLE%22%2C%22layout%22%3A%5B0%2C0%2C6%2C3%5D%2C%22columns%22%3A%5B%7B%22title%22%3A%22uniqueBuyers%22%7D%5D%2C%22parameters%22%3A%5B%5D%7D%7D%5D&selected=0)

---
- Check the platforms ordered by sales for last 7 days

```sql
SELECT
    platform,
    count(platform) AS sales
FROM nft_trades
WHERE (complete = 1) AND (dt >= (now() - toIntervalDay(6)))
GROUP BY platform
ORDER BY sales DESC
```
Test in [Queries]()

---
- Sales for platform (in this case ‘opensea’) for last 5 months split by month

```sql
SELECT
    toStartOfMonth(dt) AS month,
    count(platform) AS sales
FROM nft_trades
WHERE (complete = 1) AND (dt >= (now() - toIntervalMonth(4))) AND (platform = 'opensea')
GROUP BY month
```
Test in [Queries]()

---
- Top 10 buyers ordered by completed purchases count for last 5 days.
If we want to get the top 10 sellers we can swap buyer_address with seller_address.

```sql
SELECT
    buyer_address,
    platform,
    count(platform) AS purchases
FROM nft_trades
WHERE (complete = 1) AND (dt >= (now() - toIntervalDay(4)))
GROUP BY
    buyer_address,
    platform
ORDER BY purchases DESC
LIMIT 10
```
Test in [Queries]()

---
- Unique assets for the last 7 days for a single platform with summed amounts.
We can get simmilar information for buyers and sellers if swap the platform in where with buyer/seller

```sql
SELECT
    DISTINCT tb1.asset_ref_id,
    tb2.name,
    tb1.sum_amount
FROM
(
    SELECT
        asset_ref_id,
        sum(CAST(amount, 'UInt64')) AS sum_amount
    FROM nft_trades
    WHERE
    	dt >= (now() - INTERVAL 6 DAY) and platform = 'opensea'
    GROUP BY asset_ref_id
	order by sum_amount
) AS tb1
INNER JOIN asset_metadata AS tb2 ON tb1.asset_ref_id = tb2.asset_ref_id
ORDER BY sum_amount DESC
```
Test in [Queries]()

---
- Collections ranked based on number of traded Tokens in collection for the last 5 days

```sql
SELECT 
	nft_contract_address,
	platform,
	count(token_ids) as number_of_traded_nfts
FROM nft_trades 
WHERE (complete = 1) and (dt >= NOW() - toIntervalDay(4))
GROUP BY 
	nft_contract_address,
	platform
ORDER BY number_of_traded_nfts desc
LIMIT 10
```
Test in [Queries]()

---
- Collections ranked based on number of recorded Tokens in collection

```sql
SELECT
	blockchain,
	address,
	COUNT(token_id) as number_of_nfts
FROM
	nft_tokens_metadata
GROUP BY
	blockchain,
	address 
ORDER BY number_of_nfts DESC
LIMIT 10
```
Test in [Queries]()

---
- Get all the tokens and information about them for a given address

```sql
SELECT
	token_id,
	simpleJSONExtractString(data, 'name') as token_name,
	simpleJSONExtractString(data, 'description') as token_description,
	simpleJSONExtractString(data, 'external_url') as external_url
FROM nft_tokens_metadata
WHERE address = '0x76be3b62873462d2142405439777e971754e8e77'
ORDER BY token_id
```
Test in [Queries]()