---
title: NFT Tables overview
author: Santiment Team
date: 2023-01-30
description: Information about Non-Fungible Token (NFT) tables stored in Santiment Queries.
---

## Overview
NFT stands for Non-Fungible Token, which is a digital asset that represents ownership of a unique item or piece of content, like art, music, video, or tweets. NFTs are different from cryptocurrencies because each NFT is unique and can't be exchanged one-to-one, while cryptocurrencies are interchangeable. 

NFTs are made using blockchain technology, which provides a secure and transparent record of ownership and transfer, allowing creators and owners to prove ownership, authenticity, and rarity, potentially increasing the value of their digital assets over time. 

In **Santiment Queries**, we collect data for all NFTs from exchanges on: 

### Ethereum:

- Cryptopunks
- Foundation
- Looksrare
- Opensea
- Rarible
- Superrare

### Polygon:
- Opensea_polygon


This information gives you the ability to easily track an NFT of interest or an entire collection, as well as investigate past prices and owners.

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

### nft\_trades

The `nft_trades` is a table designed to store information about the NFT trades that we have collected. It has the following columns:

- **dt** (*DateTime*): When the transaction happened.

- **blockchain** (*String*): On which blockchain.

- **tx_hash** (*String*): Unique identifier that is generated when the transaction was executed.

- **log_index** (*UInt32*): Log index of trade event. 

- **platform** (*String*): Name of platform where trades occured such as opensea, cryptopunks and etc. 

- **seller_address** (*String*): Address who sold the nft.

- **buyer_address** (*String*): Address who bought the nft.

- **nft_contract_address** (*String*): Address of the nft's collection.

- **currency_contract_address** (*Nullable(String)*): Identifier of the currency used in the trade. It is empty if native coin was used (ether or matic), otherwise it is the address of the smart contract of the ERC20 token.

- **asset_ref_id** (*UInt64*): Reference ID of the currency contract that can be used to retrieve additional information about the asset from the `asset_metadata` table.

- **token_ids** (*Array(String)*): Array of those NFT token ids in hex which were exchanged in the trade. Usually only one is exchanged.

- **amount_tokens** (*Array(String)*): Array of amounts, which describes how many tokens were transfered.

- **nft_contract_type** (*UInt8*): Type of nft contract, 0 - erc721, 1 - erc1155. Based on signature of transfer.

- **amount** (*String*): The amount of the transaction in the asset used in it.

- **complete** (*UInt8*): State of the transaction. (1 means it is completed).

- **computed_at** (*DateTime*): The timestamp when the trade was inserted to the table.

### nft\_tokens\_ metadata

The `nft_tokens_metadata` is a table designed to store information about NFT tokens. It has the following columns:

- **blockchain** (*String*): Refers to the decentralized platform on which the NFT exists, e.g. Ethereum, Binance Smart Chain, etc.

- **address** (*String*): Represents the unique public address of the NFT owner.

- **token_id** (*String*): Unique identifier assigned to each NFT in decimal, used to distinguish it from others.

- **uri** (*Nullable(String)*): Uniform Resource Identifier, a link that directs to additional information or media related to the NFT.

- **data** (*Nullable(String)*): Contains the NFT's metadata, such as its name, image, and any other relevant information in JSON format.

- **created_at** (*DateTime*): The date and time when the NFT was created.

- **error** (*Nullable(String)*): Any error message associated with the NFT, such as a transaction failure, if applicable. This column is used to track and monitor any issues that arise in the NFT creation process.

### intraday\_nft\_metrics

The `intraday_nft_metrics` is a table designed to store intraday metrics for NFT assets. The table has the following columns:

- **asset_id** (*UInt64*): ID of the currency used in value calculation(ETH or WETH).

- **metric_id** (*UInt64*): Unique identifier assigned to the specific metric being recorded.

- **address** (*String*): Represents the address of the NFT collection.

- **collection_name** (*String*): The name of the NFT collection that the asset belongs to.

- **token_id** (*Nullable(UInt64)*): Unique identifier assigned to each NFT, used to distinguish it from others.

- **dt** (*DateTime*): The date and time when the metric was recorded.

- **value** (*Float64*): The value of the metric recorded at the specified `dt`.

- **computed_at** (*DateTime*): The timestamp when the trade was inserted to the table. This is used to track the accuracy of the metric calculation and to ensure that the most up-to-date information is available.

There are currently 16 metrics we track:

| ID | Name | Additional Information |
|----------|------|
| 1279 | nft_collection_min_price       | [more Information](/metrics/nft-collection-price/#nft-collection-price) |
| 1280 | nft_collection_max_price       | [more Information](/metrics/nft-collection-price/#nft-collection-price) |
| 1281 | nft_collection_avg_price       | [more Information](/metrics/nft-collection-price/#nft-collection-price) |
| 1282 | nft_collection_trades_count    | [more Information](/metrics/nft-collection-price/#nft-collection-price) |
| 1283 | nft_collection_min_price_usd   | [more Information](/metrics/nft-collection-price/#nft-collection-price) |
| 1284 | nft_collection_max_price_usd   | [more Information](/metrics/nft-collection-price/#nft-collection-price) |
| 1285 | nft_collection_avg_price_usd   | [more Information](/metrics/nft-collection-price/#nft-collection-price) |
| 1288 | nft_market_volume              | [more Information](/metrics/nft-market-volume) |
| 1289 | nft_market_count               | [more Information](/metrics/nft-market-volume) |
| 1290 | nft_collection_holders_balance | [more Information](/metrics/nft-collection-holders-balance) |
| 1291 | nft_network_profit_loss        | [more Information](/metrics/nft-network-profit-loss) |
| 1292 | nft_network_profit_loss_usd    | [more Information](/metrics/nft-network-profit-loss) |
| 1293 | nft_collection_profit_loss     | [more Information](/metrics/nft-network-profit-loss) |
| 1294 | nft_collection_profit_loss_usd | [more Information](/metrics/nft-network-profit-loss) |

## Sample Queries

---
### Number of unique NFT owners
- Check the number of unique wallets that have owned an NFT in the last 7 days.

```sql
SELECT countDistinct(buyer_address) AS uniqueBuyers
FROM nft_trades
WHERE dt >= (now() - INTERVAL 6 DAY)
```
Test in [Queries](https://app.santiment.net/queries/?panels=%5B%7B%22name%22%3A%22Default%20panel%20title%22%2C%22sql%22%3A%7B%22query%22%3A%22SELECT%20countDistinct(buyer_address)%20AS%20uniqueBuyers%5CnFROM%20nft_trades%5CnWHERE%20dt%20%3E%3D%20(now()%20-%20INTERVAL%206%20DAY)%22%2C%22parameters%22%3A%7B%7D%7D%2C%22settings%22%3A%7B%22type%22%3A%22TABLE%22%2C%22layout%22%3A%5B0%2C0%2C6%2C3%5D%2C%22columns%22%3A%5B%7B%22title%22%3A%22uniqueBuyers%22%7D%5D%2C%22parameters%22%3A%5B%5D%7D%7D%5D&selected=0?panels=%5B%7B%22name%22%3A%22Default%20panel%20title%22%2C%22sql%22%3A%7B%22query%22%3A%22SELECT%20countDistinct(buyer_address)%20AS%20uniqueBuyers%5CnFROM%20nft_trades%5CnWHERE%20dt%20%3E%3D%20(now()%20-%20INTERVAL%206%20DAY)%22%2C%22parameters%22%3A%7B%7D%7D%2C%22settings%22%3A%7B%22type%22%3A%22TABLE%22%2C%22layout%22%3A%5B0%2C0%2C6%2C3%5D%2C%22columns%22%3A%5B%7B%22title%22%3A%22uniqueBuyers%22%7D%5D%2C%22parameters%22%3A%5B%5D%7D%7D%5D&selected=0)

---
### Unique NFT platforms ordered by sales
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
Test in [Queries](https://app.santiment.net/queries/?panels=%5B%7B%22name%22%3A%22Default%20panel%20title%22%2C%22sql%22%3A%7B%22query%22%3A%22SELECT%5Cn%20%20%20%20platform%2C%5Cn%20%20%20%20count(platform)%20AS%20sales%5CnFROM%20nft_trades%5CnWHERE%20(complete%20%3D%201)%20AND%20(dt%20%3E%3D%20(now()%20-%20toIntervalDay(6)))%5CnGROUP%20BY%20platform%5CnORDER%20BY%20sales%20DESC%22%2C%22parameters%22%3A%7B%7D%7D%2C%22settings%22%3A%7B%22type%22%3A%22TABLE%22%2C%22layout%22%3A%5B0%2C0%2C6%2C3%5D%2C%22columns%22%3A%5B%7B%22title%22%3A%22platform%22%7D%2C%7B%22title%22%3A%22sales%22%7D%5D%2C%22parameters%22%3A%5B%5D%7D%7D%5D&selected=0?panels=%5B%7B%22name%22%3A%22Default%20panel%20title%22%2C%22sql%22%3A%7B%22query%22%3A%22SELECT%5Cn%20%20%20%20platform%2C%5Cn%20%20%20%20count(platform)%20AS%20sales%5CnFROM%20nft_trades%5CnWHERE%20(complete%20%3D%201)%20AND%20(dt%20%3E%3D%20(now()%20-%20toIntervalDay(6)))%5CnGROUP%20BY%20platform%5CnORDER%20BY%20sales%20DESC%22%2C%22parameters%22%3A%7B%7D%7D%2C%22settings%22%3A%7B%22type%22%3A%22TABLE%22%2C%22layout%22%3A%5B0%2C0%2C6%2C3%5D%2C%22columns%22%3A%5B%7B%22title%22%3A%22platform%22%7D%2C%7B%22title%22%3A%22sales%22%7D%5D%2C%22parameters%22%3A%5B%5D%7D%7D%5D&selected=0)

---
### Number of unique sales for a platform
- Sales for a platform (in this case ‘opensea’) for last 5 months split by month

```sql
SELECT
    toStartOfMonth(dt) AS month,
    count(platform) AS sales
FROM nft_trades
WHERE (complete = 1) AND (dt >= (now() - toIntervalMonth(4))) AND (platform = 'opensea')
GROUP BY month
```
Test in [Queries](https://app.santiment.net/queries/?panels=%5B%7B%22name%22%3A%22Default%20panel%20title%22%2C%22sql%22%3A%7B%22query%22%3A%22SELECT%5Cn%20%20%20%20toStartOfMonth(dt)%20AS%20month%2C%5Cn%20%20%20%20count(platform)%20AS%20sales%5CnFROM%20nft_trades%5CnWHERE%20(complete%20%3D%201)%20AND%20(dt%20%3E%3D%20(now()%20-%20toIntervalMonth(4)))%20AND%20(platform%20%3D%20%27opensea%27)%5CnGROUP%20BY%20month%22%2C%22parameters%22%3A%7B%7D%7D%2C%22settings%22%3A%7B%22type%22%3A%22TABLE%22%2C%22layout%22%3A%5B0%2C0%2C6%2C3%5D%2C%22columns%22%3A%5B%7B%22title%22%3A%22month%22%2C%22formatterId%22%3A1%7D%2C%7B%22title%22%3A%22sales%22%7D%5D%2C%22parameters%22%3A%5B%5D%7D%7D%5D&selected=0?panels=%5B%7B%22name%22%3A%22Default%20panel%20title%22%2C%22sql%22%3A%7B%22query%22%3A%22SELECT%5Cn%20%20%20%20toStartOfMonth(dt)%20AS%20month%2C%5Cn%20%20%20%20count(platform)%20AS%20sales%5CnFROM%20nft_trades%5CnWHERE%20(complete%20%3D%201)%20AND%20(dt%20%3E%3D%20(now()%20-%20toIntervalMonth(4)))%20AND%20(platform%20%3D%20'opensea')%5CnGROUP%20BY%20month%22%2C%22parameters%22%3A%7B%7D%7D%2C%22settings%22%3A%7B%22type%22%3A%22TABLE%22%2C%22layout%22%3A%5B0%2C0%2C6%2C3%5D%2C%22columns%22%3A%5B%7B%22title%22%3A%22month%22%2C%22formatterId%22%3A1%7D%2C%7B%22title%22%3A%22sales%22%7D%5D%2C%22parameters%22%3A%5B%5D%7D%7D%5D&selected=0)

---
### Ranking by completed purchases
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
Test in [Queries](https://app.santiment.net/queries/?panels=%5B%7B%22name%22%3A%22Default%20panel%20title%22%2C%22sql%22%3A%7B%22query%22%3A%22SELECT%5Cn%20%20%20%20buyer_address%2C%5Cn%20%20%20%20platform%2C%5Cn%20%20%20%20count(platform)%20AS%20purchases%5CnFROM%20nft_trades%5CnWHERE%20(complete%20%3D%201)%20AND%20(dt%20%3E%3D%20(now()%20-%20toIntervalDay(4)))%5CnGROUP%20BY%5Cn%20%20%20%20buyer_address%2C%5Cn%20%20%20%20platform%5CnORDER%20BY%20purchases%20DESC%5CnLIMIT%2010%22%2C%22parameters%22%3A%7B%7D%7D%2C%22settings%22%3A%7B%22type%22%3A%22TABLE%22%2C%22layout%22%3A%5B0%2C0%2C6%2C3%5D%2C%22columns%22%3A%5B%7B%22title%22%3A%22buyer_address%22%7D%2C%7B%22title%22%3A%22platform%22%7D%2C%7B%22title%22%3A%22purchases%22%7D%5D%2C%22parameters%22%3A%5B%5D%7D%7D%5D&selected=0?panels=%5B%7B%22name%22%3A%22Default%20panel%20title%22%2C%22sql%22%3A%7B%22query%22%3A%22SELECT%5Cn%20%20%20%20buyer_address%2C%5Cn%20%20%20%20platform%2C%5Cn%20%20%20%20count(platform)%20AS%20purchases%5CnFROM%20nft_trades%5CnWHERE%20(complete%20%3D%201)%20AND%20(dt%20%3E%3D%20(now()%20-%20toIntervalDay(4)))%5CnGROUP%20BY%5Cn%20%20%20%20buyer_address%2C%5Cn%20%20%20%20platform%5CnORDER%20BY%20purchases%20DESC%5CnLIMIT%2010%22%2C%22parameters%22%3A%7B%7D%7D%2C%22settings%22%3A%7B%22type%22%3A%22TABLE%22%2C%22layout%22%3A%5B0%2C0%2C6%2C3%5D%2C%22columns%22%3A%5B%7B%22title%22%3A%22buyer_address%22%7D%2C%7B%22title%22%3A%22platform%22%7D%2C%7B%22title%22%3A%22purchases%22%7D%5D%2C%22parameters%22%3A%5B%5D%7D%7D%5D&selected=0)

---
### Summed amounts of assets for a platform
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
Test in [Queries](https://app.santiment.net/queries/?panels=%5B%7B%22name%22%3A%22Default%20panel%20title%22%2C%22sql%22%3A%7B%22query%22%3A%22SELECT%5Cn%20%20%20%20DISTINCT%20tb1.asset_ref_id%2C%5Cn%20%20%20%20tb2.name%2C%5Cn%20%20%20%20tb1.sum_amount%5CnFROM%5Cn(%5Cn%20%20%20%20SELECT%5Cn%20%20%20%20%20%20%20%20asset_ref_id%2C%5Cn%20%20%20%20%20%20%20%20sum(CAST(amount%2C%20%27UInt64%27))%20AS%20sum_amount%5Cn%20%20%20%20FROM%20nft_trades%5Cn%20%20%20%20WHERE%5Cn%20%20%20%20%5Ctdt%20%3E%3D%20(now()%20-%20INTERVAL%206%20DAY)%20and%20platform%20%3D%20%27opensea%27%5Cn%20%20%20%20GROUP%20BY%20asset_ref_id%5Cn%5Ctorder%20by%20sum_amount%5Cn)%20AS%20tb1%5CnINNER%20JOIN%20asset_metadata%20AS%20tb2%20ON%20tb1.asset_ref_id%20%3D%20tb2.asset_ref_id%5CnORDER%20BY%20sum_amount%20DESC%22%2C%22parameters%22%3A%7B%7D%7D%2C%22settings%22%3A%7B%22type%22%3A%22TABLE%22%2C%22layout%22%3A%5B0%2C0%2C6%2C3%5D%2C%22columns%22%3A%5B%7B%22title%22%3A%22asset_ref_id%22%7D%2C%7B%22title%22%3A%22name%22%7D%2C%7B%22title%22%3A%22sum_amount%22%7D%5D%2C%22parameters%22%3A%5B%5D%7D%7D%5D&selected=0?panels=%5B%7B%22name%22%3A%22Default%20panel%20title%22%2C%22sql%22%3A%7B%22query%22%3A%22SELECT%5Cn%20%20%20%20DISTINCT%20tb1.asset_ref_id%2C%5Cn%20%20%20%20tb2.name%2C%5Cn%20%20%20%20tb1.sum_amount%5CnFROM%5Cn(%5Cn%20%20%20%20SELECT%5Cn%20%20%20%20%20%20%20%20asset_ref_id%2C%5Cn%20%20%20%20%20%20%20%20sum(CAST(amount%2C%20'UInt64'))%20AS%20sum_amount%5Cn%20%20%20%20FROM%20nft_trades%5Cn%20%20%20%20WHERE%5Cn%20%20%20%20%5Ctdt%20%3E%3D%20(now()%20-%20INTERVAL%206%20DAY)%20and%20platform%20%3D%20'opensea'%5Cn%20%20%20%20GROUP%20BY%20asset_ref_id%5Cn%5Ctorder%20by%20sum_amount%5Cn)%20AS%20tb1%5CnINNER%20JOIN%20asset_metadata%20AS%20tb2%20ON%20tb1.asset_ref_id%20%3D%20tb2.asset_ref_id%5CnORDER%20BY%20sum_amount%20DESC%22%2C%22parameters%22%3A%7B%7D%7D%2C%22settings%22%3A%7B%22type%22%3A%22TABLE%22%2C%22layout%22%3A%5B0%2C0%2C6%2C3%5D%2C%22columns%22%3A%5B%7B%22title%22%3A%22asset_ref_id%22%7D%2C%7B%22title%22%3A%22name%22%7D%2C%7B%22title%22%3A%22sum_amount%22%7D%5D%2C%22parameters%22%3A%5B%5D%7D%7D%5D&selected=0)

---
### Collections ranked by traded Tokens
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
Test in [Queries](https://app.santiment.net/queries/?panels=%5B%7B%22name%22%3A%22Default%20panel%20title%22%2C%22sql%22%3A%7B%22query%22%3A%22SELECT%20%5Cn%5Ctnft_contract_address%2C%5Cn%5Ctplatform%2C%5Cn%5Ctcount(token_ids)%20as%20number_of_traded_nfts%5CnFROM%20nft_trades%20%5CnWHERE%20(complete%20%3D%201)%20and%20(dt%20%3E%3D%20NOW()%20-%20toIntervalDay(4))%5CnGROUP%20BY%20%5Cn%5Ctnft_contract_address%2C%5Cn%5Ctplatform%5CnORDER%20BY%20number_of_traded_nfts%20desc%5CnLIMIT%2010%22%2C%22parameters%22%3A%7B%7D%7D%2C%22settings%22%3A%7B%22type%22%3A%22TABLE%22%2C%22layout%22%3A%5B0%2C0%2C6%2C3%5D%2C%22columns%22%3A%5B%7B%22title%22%3A%22nft_contract_address%22%7D%2C%7B%22title%22%3A%22platform%22%7D%2C%7B%22title%22%3A%22number_of_traded_nfts%22%7D%5D%2C%22parameters%22%3A%5B%5D%7D%7D%5D&selected=0?panels=%5B%7B%22name%22%3A%22Default%20panel%20title%22%2C%22sql%22%3A%7B%22query%22%3A%22SELECT%20%5Cn%5Ctnft_contract_address%2C%5Cn%5Ctplatform%2C%5Cn%5Ctcount(token_ids)%20as%20number_of_traded_nfts%5CnFROM%20nft_trades%20%5CnWHERE%20(complete%20%3D%201)%20and%20(dt%20%3E%3D%20NOW()%20-%20toIntervalDay(4))%5CnGROUP%20BY%20%5Cn%5Ctnft_contract_address%2C%5Cn%5Ctplatform%5CnORDER%20BY%20number_of_traded_nfts%20desc%5CnLIMIT%2010%22%2C%22parameters%22%3A%7B%7D%7D%2C%22settings%22%3A%7B%22type%22%3A%22TABLE%22%2C%22layout%22%3A%5B0%2C0%2C6%2C3%5D%2C%22columns%22%3A%5B%7B%22title%22%3A%22nft_contract_address%22%7D%2C%7B%22title%22%3A%22platform%22%7D%2C%7B%22title%22%3A%22number_of_traded_nfts%22%7D%5D%2C%22parameters%22%3A%5B%5D%7D%7D%5D&selected=0)

---
### Collections ranked by recorded Tokens
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
Test in [Queries](https://app.santiment.net/queries/?panels=%5B%7B%22name%22%3A%22Default%20panel%20title%22%2C%22sql%22%3A%7B%22query%22%3A%22SELECT%5Cn%5Ctblockchain%2C%5Cn%5Ctaddress%2C%5Cn%5CtCOUNT(token_id)%20as%20number_of_nfts%5CnFROM%5Cn%5Ctnft_tokens_metadata%5CnGROUP%20BY%5Cn%5Ctblockchain%2C%5Cn%5Ctaddress%20%5CnORDER%20BY%20number_of_nfts%20DESC%5CnLIMIT%2010%22%2C%22parameters%22%3A%7B%7D%7D%2C%22settings%22%3A%7B%22type%22%3A%22TABLE%22%2C%22layout%22%3A%5B0%2C0%2C6%2C3%5D%2C%22columns%22%3A%5B%7B%22title%22%3A%22blockchain%22%7D%2C%7B%22title%22%3A%22address%22%7D%2C%7B%22title%22%3A%22number_of_nfts%22%7D%5D%2C%22parameters%22%3A%5B%5D%7D%7D%5D&selected=0?panels=%5B%7B%22name%22%3A%22Default%20panel%20title%22%2C%22sql%22%3A%7B%22query%22%3A%22SELECT%5Cn%5Ctblockchain%2C%5Cn%5Ctaddress%2C%5Cn%5CtCOUNT(token_id)%20as%20number_of_nfts%5CnFROM%5Cn%5Ctnft_tokens_metadata%5CnGROUP%20BY%5Cn%5Ctblockchain%2C%5Cn%5Ctaddress%20%5CnORDER%20BY%20number_of_nfts%20DESC%5CnLIMIT%2010%22%2C%22parameters%22%3A%7B%7D%7D%2C%22settings%22%3A%7B%22type%22%3A%22TABLE%22%2C%22layout%22%3A%5B0%2C0%2C6%2C3%5D%2C%22columns%22%3A%5B%7B%22title%22%3A%22blockchain%22%7D%2C%7B%22title%22%3A%22address%22%7D%2C%7B%22title%22%3A%22number_of_nfts%22%7D%5D%2C%22parameters%22%3A%5B%5D%7D%7D%5D&selected=0)

---
### All tokens with extra info for an address
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
Test in [Queries](https://app.santiment.net/queries/?panels=%5B%7B%22name%22%3A%22Default%20panel%20title%22%2C%22sql%22%3A%7B%22query%22%3A%22SELECT%5Cn%5Cttoken_id%2C%5Cn%5CtsimpleJSONExtractString(data%2C%20%27name%27)%20as%20token_name%2C%5Cn%5CtsimpleJSONExtractString(data%2C%20%27description%27)%20as%20token_description%2C%5Cn%5CtsimpleJSONExtractString(data%2C%20%27external_url%27)%20as%20external_url%5CnFROM%20nft_tokens_metadata%5CnWHERE%20address%20%3D%20%270x76be3b62873462d2142405439777e971754e8e77%27%5CnORDER%20BY%20token_id%22%2C%22parameters%22%3A%7B%7D%7D%2C%22settings%22%3A%7B%22type%22%3A%22TABLE%22%2C%22layout%22%3A%5B0%2C0%2C6%2C3%5D%2C%22columns%22%3A%5B%7B%22title%22%3A%22token_id%22%7D%2C%7B%22title%22%3A%22token_name%22%7D%2C%7B%22title%22%3A%22token_description%22%7D%2C%7B%22title%22%3A%22external_url%22%7D%5D%2C%22parameters%22%3A%5B%5D%7D%7D%5D&selected=0?panels=%5B%7B%22name%22%3A%22Default%20panel%20title%22%2C%22sql%22%3A%7B%22query%22%3A%22SELECT%5Cn%5Cttoken_id%2C%5Cn%5CtsimpleJSONExtractString(data%2C%20'name')%20as%20token_name%2C%5Cn%5CtsimpleJSONExtractString(data%2C%20'description')%20as%20token_description%2C%5Cn%5CtsimpleJSONExtractString(data%2C%20'external_url')%20as%20external_url%5CnFROM%20nft_tokens_metadata%5CnWHERE%20address%20%3D%20'0x76be3b62873462d2142405439777e971754e8e77'%5CnORDER%20BY%20token_id%22%2C%22parameters%22%3A%7B%7D%7D%2C%22settings%22%3A%7B%22type%22%3A%22TABLE%22%2C%22layout%22%3A%5B0%2C0%2C6%2C3%5D%2C%22columns%22%3A%5B%7B%22title%22%3A%22token_id%22%7D%2C%7B%22title%22%3A%22token_name%22%7D%2C%7B%22title%22%3A%22token_description%22%7D%2C%7B%22title%22%3A%22external_url%22%7D%5D%2C%22parameters%22%3A%5B%5D%7D%7D%5D&selected=0)

---
### NFT trades in USD for an address
- Recent NFT trades volume of an address with amount calculated in usd

```sql
SELECT day_dt, SUM((amount/POW(10, decimals))*price) as volume_usd FROM (
    SELECT 
        toDate(dt) as day_dt,
        dictGet('default.assets_by_ref_id', 'decimals', asset_ref_id) as decimals,
        dictGet('default.assets_by_ref_id', 'asset_id', asset_ref_id) as asset_id,
        SUM(toInt256(amount)) as amount
    FROM nft_trades
    WHERE (
        buyer_address == '0x94fc70cffb47fc77d16f7997acd527e45a87b050'
        OR
        seller_address == '0x94fc70cffb47fc77d16f7997acd527e45a87b050'
    ) AND blockchain = 'ethereum' AND dt >= toDate(NOW()) - INTERVAL 7 DAY
    GROUP BY day_dt, asset_id, decimals
) INNER JOIN (
    SELECT dt as day_dt, asset_id, value as price
    FROM daily_metrics_v2
    WHERE metric_id = (SELECT metric_id FROM metric_metadata FINAL WHERE name = 'daily_avg_price_usd')
) USING day_dt, asset_id
GROUP BY day_dt
```
Test in [Queries](https://app.santiment.net/queries/?panels=%5B%7B%22name%22%3A%22Default%20panel%20title%22%2C%22sql%22%3A%7B%22query%22%3A%22SELECT%20day_dt%2C%20SUM((amount%2FPOW(10%2C%20decimals))*price)%20as%20volume_usd%20FROM%20(%5Cn%20%20%20%20SELECT%20%5Cn%20%20%20%20%20%20%20%20toDate(dt)%20as%20day_dt%2C%5Cn%20%20%20%20%20%20%20%20dictGet(%27default.assets_by_ref_id%27%2C%20%27decimals%27%2C%20asset_ref_id)%20as%20decimals%2C%5Cn%20%20%20%20%20%20%20%20dictGet(%27default.assets_by_ref_id%27%2C%20%27asset_id%27%2C%20asset_ref_id)%20as%20asset_id%2C%5Cn%20%20%20%20%20%20%20%20SUM(toInt256(amount))%20as%20amount%5Cn%20%20%20%20FROM%20nft_trades%5Cn%20%20%20%20WHERE%20(%5Cn%20%20%20%20%20%20%20%20buyer_address%20%3D%3D%20%270x94fc70cffb47fc77d16f7997acd527e45a87b050%27%5Cn%20%20%20%20%20%20%20%20OR%5Cn%20%20%20%20%20%20%20%20seller_address%20%3D%3D%20%270x94fc70cffb47fc77d16f7997acd527e45a87b050%27%5Cn%20%20%20%20)%20AND%20blockchain%20%3D%20%27ethereum%27%20AND%20dt%20%3E%3D%20toDate(NOW())%20-%20INTERVAL%207%20DAY%5Cn%20%20%20%20GROUP%20BY%20day_dt%2C%20asset_id%2C%20decimals%5Cn)%20INNER%20JOIN%20(%5Cn%20%20%20%20SELECT%20dt%20as%20day_dt%2C%20asset_id%2C%20value%20as%20price%5Cn%20%20%20%20FROM%20daily_metrics_v2%5Cn%20%20%20%20WHERE%20metric_id%20%3D%20(SELECT%20metric_id%20FROM%20metric_metadata%20FINAL%20WHERE%20name%20%3D%20%27daily_avg_price_usd%27)%5Cn)%20USING%20day_dt%2C%20asset_id%5CnGROUP%20BY%20day_dt%22%2C%22parameters%22%3A%7B%7D%7D%2C%22settings%22%3A%7B%22type%22%3A%22TABLE%22%2C%22layout%22%3A%5B0%2C0%2C6%2C3%5D%2C%22columns%22%3A%5B%7B%22title%22%3A%22day_dt%22%2C%22formatterId%22%3A1%7D%2C%7B%22title%22%3A%22volume_usd%22%7D%5D%2C%22parameters%22%3A%5B%5D%7D%7D%5D&selected=0?panels=%5B%7B%22name%22%3A%22Default%20panel%20title%22%2C%22sql%22%3A%7B%22query%22%3A%22SELECT%20day_dt%2C%20SUM((amount%2FPOW(10%2C%20decimals))*price)%20as%20volume_usd%20FROM%20(%5Cn%20%20%20%20SELECT%20%5Cn%20%20%20%20%20%20%20%20toDate(dt)%20as%20day_dt%2C%5Cn%20%20%20%20%20%20%20%20dictGet('default.assets_by_ref_id'%2C%20'decimals'%2C%20asset_ref_id)%20as%20decimals%2C%5Cn%20%20%20%20%20%20%20%20dictGet('default.assets_by_ref_id'%2C%20'asset_id'%2C%20asset_ref_id)%20as%20asset_id%2C%5Cn%20%20%20%20%20%20%20%20SUM(toInt256(amount))%20as%20amount%5Cn%20%20%20%20FROM%20nft_trades%5Cn%20%20%20%20WHERE%20(%5Cn%20%20%20%20%20%20%20%20buyer_address%20%3D%3D%20'0x94fc70cffb47fc77d16f7997acd527e45a87b050'%5Cn%20%20%20%20%20%20%20%20OR%5Cn%20%20%20%20%20%20%20%20seller_address%20%3D%3D%20'0x94fc70cffb47fc77d16f7997acd527e45a87b050'%5Cn%20%20%20%20)%20AND%20blockchain%20%3D%20'ethereum'%20AND%20dt%20%3E%3D%20toDate(NOW())%20-%20INTERVAL%207%20DAY%5Cn%20%20%20%20GROUP%20BY%20day_dt%2C%20asset_id%2C%20decimals%5Cn)%20INNER%20JOIN%20(%5Cn%20%20%20%20SELECT%20dt%20as%20day_dt%2C%20asset_id%2C%20value%20as%20price%5Cn%20%20%20%20FROM%20daily_metrics_v2%5Cn%20%20%20%20WHERE%20metric_id%20%3D%20(SELECT%20metric_id%20FROM%20metric_metadata%20FINAL%20WHERE%20name%20%3D%20'daily_avg_price_usd')%5Cn)%20USING%20day_dt%2C%20asset_id%5CnGROUP%20BY%20day_dt%22%2C%22parameters%22%3A%7B%7D%7D%2C%22settings%22%3A%7B%22type%22%3A%22TABLE%22%2C%22layout%22%3A%5B0%2C0%2C6%2C3%5D%2C%22columns%22%3A%5B%7B%22title%22%3A%22day_dt%22%2C%22formatterId%22%3A1%7D%2C%7B%22title%22%3A%22volume_usd%22%7D%5D%2C%22parameters%22%3A%5B%5D%7D%7D%5D&selected=0)