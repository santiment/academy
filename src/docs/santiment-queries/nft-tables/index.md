---
title: NFT Tables Overview
author: Santiment Team
date: 2023-01-30
description: Learn about the Non-Fungible Token (NFT) tables stored in Santiment Queries for easy access and analysis.
---

## Overview

NFT stands for Non-Fungible Token, which is a digital asset that represents ownership of a unique item or piece of content, such as art, music, video, or tweets. NFTs differ from cryptocurrencies because each NFT is unique and cannot be exchanged one-to-one, while cryptocurrencies are interchangeable.

NFTs are created using blockchain technology, which provides a secure and transparent record of ownership and transfer. This allows creators and owners to prove ownership, authenticity, and rarity, potentially increasing the value of their digital assets over time.

In **Santiment Queries**, we collect data for all NFTs from exchanges on:

### Ethereum: 
- CryptoPunks
- Foundation
- LooksRare
- OpenSea
- Rarible
- SuperRare

### Polygon:
- Opensea_polygon

This information allows you to effortlessly track a specific NFT or an entire collection, as well as investigate past prices and owners.

## List of NFT Tables

All our tables that contain NFT-related data have the string 'nft' in their name. To find them yourself, run the following query:

```sql
SHOW TABLES LIKE '%nft%'
```

The result will display the NFT-related tables:

```
┌─name───────────────────┐
│ nft_trades             │
│ nft_tokens_metadata    │
│ intraday_nft_metrics   │
└────────────────────────┘
```

## Exploring the Tables

We can inspect the tables using the commands we learned in [Exploration](/santiment-queries/exploration/).

Below, we have listed all the NFT tables with their columns, brief descriptions, and some example queries that you can use to explore the tables.

### nft\_trades

The `nft_trades` table is designed to store information about the NFT trades that we have collected. It has the following columns:

- **dt** (*DateTime*): When the transaction happened.
- **blockchain** (*String*): The blockchain on which the transaction occurred.
- **tx_hash** (*String*): Unique identifier generated when the transaction was executed.
- **log_index** (*UInt32*): Log index of the trade event.
- **platform** (*String*): Name of the platform where trades occurred, such as OpenSea, CryptoPunks, etc.
- **seller_address** (*String*): Address of the seller.
- **buyer_address** (*String*): Address of the buyer.
- **nft_contract_address** (*String*): Address of the NFT's collection.
- **currency_contract_address** (*Nullable(String)*): Identifier of the currency used in the trade. It is empty if the native coin was used (Ether or Matic), otherwise, it is the address of the ERC20 token's smart contract.
- **asset_ref_id** (*UInt64*): Reference ID of the currency contract that can be used to retrieve additional information about the asset from the `asset_metadata` table.
- **token_ids** (*Array(String)*): Array of NFT token IDs in hex that were exchanged in the trade. Usually, only one is exchanged.
- **amount_tokens** (*Array(String)*): Array of amounts, which describes how many tokens were transferred.
- **nft_contract_type** (*UInt8*): Type of NFT contract, 0 - ERC721, 1 - ERC1155. Based on the signature of the transfer.
- **amount** (*String*): The amount of the transaction in the asset used in it.
- **complete** (*UInt8*): State of the transaction (1 means it is completed).
- **computed_at** (*DateTime*): The timestamp when the trade was inserted into the table.

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

- **asset_id** (*UInt64*): ID of the currency used in value calculation (ETH or WETH).
- **metric_id** (*UInt64*): Unique identifier assigned to the specific metric being recorded.
- **address** (*String*): Represents the address of the NFT collection.
- **collection_name** (*String*): The name of the NFT collection that the asset belongs to.
- **token_id** (*Nullable(UInt64)*): Unique identifier assigned to each NFT, used to distinguish it from others.
- **dt** (*DateTime*): The date and time when the metric was recorded.
- **value** (*Float64*): The value of the metric recorded at the specified `dt`.
- **computed_at** (*DateTime*): The timestamp when the trade was inserted into the table. This is used to track the accuracy of the metric calculation and to ensure that the most up-to-date information is available.

There are currently 16 metrics we track:

| ID   | Name                          | Additional Information                                                                 |
|------|-------------------------------|-----------------------------------------------------------------------------------------|
| 1279 | nft_collection_min_price      | [more information](/metrics/nft-collection-price/#nft-collection-price)                |
| 1280 | nft_collection_max_price      | [more information](/metrics/nft-collection-price/#nft-collection-price)                |
| 1281 | nft_collection_avg_price      | [more information](/metrics/nft-collection-price/#nft-collection-price)                |
| 1282 | nft_collection_trades_count   | [more information](/metrics/nft-collection-price/#nft-collection-price)                |
| 1283 | nft_collection_min_price_usd  | [more information](/metrics/nft-collection-price/#nft-collection-price)                |
| 1284 | nft_collection_max_price_usd  | [more information](/metrics/nft-collection-price/#nft-collection-price)                |
| 1285 | nft_collection_avg_price_usd  | [more information](/metrics/nft-collection-price/#nft-collection-price)                |
| 1288 | nft_market_volume             | [more information](/metrics/nft-market-volume)                                         |
| 1289 | nft_market_count              | [more information](/metrics/nft-market-volume)                                         |
| 1290 | nft_collection_holders_balance| [more information](/metrics/nft-collection-holders-balance)                            |
| 1291 | nft_network_profit_loss       | [more information](/metrics/nft-network-profit-loss)                                   |
| 1292 | nft_network_profit_loss_usd   | [more information](/metrics/nft-network-profit-loss)                                   |
| 1293 | nft_collection_profit_loss    | [more information](/metrics/nft-network-profit-loss)                                   |
| 1294 | nft_collection_profit_loss_usd| [more information](/metrics/nft-network-profit-loss)                                   |

## Sample Queries

### Number of Unique NFT Owners

Check the number of unique wallets that have owned an NFT in the last 7 days.

```sql
SELECT countDistinct(buyer_address) AS uniqueBuyers
FROM nft_trades
WHERE dt >= (now() - INTERVAL 6 DAY)
```

Test in [Queries](https://queries.santiment.net/query/number-of-unique-nft-owners-397)

### Unique NFT Platforms Ordered by Sales

Check the platforms ordered by sales for the last 7 days:

```sql
SELECT
    platform,
    count(platform) AS sales
FROM nft_trades
WHERE (complete = 1) AND (dt >= (now() - toIntervalDay(6)))
GROUP BY platform
ORDER BY sales DESC
```

Test in [Queries](https://queries.santiment.net/query/unique-nft-platforms-ordered-by-sales-398).

---

### Number of Unique Sales for a Platform

To find the number of unique sales for a platform (in this case, 'opensea') for the last 5 months, split by month, use the following SQL query:

```sql
SELECT
    toStartOfMonth(dt) AS month,
    count(platform) AS sales
FROM nft_trades
WHERE (complete = 1) AND (dt >= (now() - toIntervalMonth(4))) AND (platform = 'opensea')
GROUP BY month
```

Test in [Queries](https://queries.santiment.net/query/number-of-unique-sales-for-a-platform-399)

---

### Top 10 Buyers by Completed Purchases

To find the top 10 buyers ordered by the count of completed purchases in the last 5 days, use the following query. To find the top 10 sellers, simply swap `buyer_address` with `seller_address`.

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

Test in [Queries](https://queries.santiment.net/query/top-10-buyers-by-completed-purchases-400)

---

### Summed Amounts of Assets for a Platform

Get the unique assets for the last 7 days for a single platform with summed amounts. You can get similar information for buyers and sellers by swapping the platform in the `WHERE` clause with buyer/seller.

```sql
SELECT
    DISTINCT tb1.asset_ref_id,
    tb2.name,
    tb1.sum_amount
FROM (
    SELECT
        asset_ref_id,
        sum(CAST(amount, 'UInt64')) AS sum_amount
    FROM nft_trades
    WHERE
        dt >= (now() - INTERVAL 6 DAY) and platform = 'opensea'
    GROUP BY asset_ref_id
    ORDER BY sum_amount
) AS tb1
INNER JOIN asset_metadata AS tb2 ON tb1.asset_ref_id = tb2.asset_ref_id
ORDER BY sum_amount DESC
```

Test in [Queries](https://queries.santiment.net/query/summed-amounts-of-assets-for-a-platform-401)

---

### Collections Ranked by Traded Tokens

This query ranks collections based on the number of traded tokens in the collection for the last 5 days.

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

Test in [Queries](https://queries.santiment.net/query/collections-ranked-by-traded-tokens-402)

---

### Collections Ranked by Recorded Tokens

This query ranks collections based on the number of recorded tokens in each collection.

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
ORDER BY
    number_of_nfts DESC
LIMIT 10
```

Test in [Queries](https://queries.santiment.net/query/collections-ranked-by-recorded-tokens-403).

---

### Retrieve All Tokens with Additional Information for an Address

To get all the tokens and their related information for a given address, use the following SQL query:

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

Test in [Queries](https://queries.santiment.net/query/retrieve-all-tokens-with-additional-information-for-an-address-404).

---

### NFT trades in USD for an address
Recent NFT trades volume of an address with amount calculated in USD

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

Test in [Queries](https://queries.santiment.net/query/nft-trades-in-usd-for-an-address-405)
