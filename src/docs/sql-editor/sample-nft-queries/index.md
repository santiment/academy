---
title: Sample NFT Queries
author: Santiment Team
date: 2022-01-31
description: Sample NFT Queries
---

<details>
<summary>Check the number of unique wallets that have owned an NFT ever / last 7 days. </summary>

- ```sql
	SELECT countDistinct(buyer_address) AS uniqueBuyers
	FROM nft_trades
	```
- ```sql
	SELECT countDistinct(buyer_address) AS uniqueBuyers
	FROM nft_trades
	```
</details>

<details>
<summary>Check the platforms ordered by sales for all time / last 7 days.</summary>

```sql
SELECT
    platform,
    count(platform) AS sales
FROM nft_trades
WHERE (complete = 1)
GROUP BY platform
ORDER BY sales DESC
```
```sql
SELECT
    platform,
    count(platform) AS sales
FROM nft_trades
WHERE (complete = 1) AND (dt >= (now() - toIntervalDay(6)))
GROUP BY platform
ORDER BY sales DESC
```
</details>

<details>
<summary>Sales for platform (in this case ‘opensea’) for last 5 months split by month.</summary>

```sql
SELECT
    toStartOfMonth(dt) AS month,
    count(platform) AS sales
FROM nft_trades
WHERE (complete = 1) AND (dt >= (now() - toIntervalMonth(4))) AND (platform = 'opensea')
GROUP BY month
```
</details>

<details>
<summary>Top 10 buyers/sellers ordered by completed purchases count for last 5 days.</summary>

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
```sql
SELECT
    seller_address,
    platform,
    count(platform) AS sales
FROM nft_trades
WHERE (complete = 1) AND (dt >= (now() - toIntervalDay(4)))
GROUP BY
    seller_address,
    platform
ORDER BY sales DESC
LIMIT 10
```
</details>

<details>
<summary>Unique assets for the last 7 days.</summary>

```sql
SELECT
    DISTINCT tb1.asset_ref_id,
    tb1.platform,
    tb2.name,
    tb1.sum_amount
FROM
(
    SELECT
    	platform,
        asset_ref_id,
        sum(CAST(amount, 'UInt64')) AS sum_amount
    FROM nft_trades
    WHERE
    	dt >= (now() - INTERVAL 6 DAY)
    GROUP BY platform, asset_ref_id
	order by sum_amount
) AS tb1
INNER JOIN asset_metadata AS tb2 ON tb1.asset_ref_id = tb2.asset_ref_id
ORDER BY sum_amount DESC
```
</details>

<details>
<summary>Unique assets for the last 7 days for a single platform (or seller/buyer) with summed amounts.</summary>

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
</details>

<details>
<summary>Top 10 collections ranked based on number of traded Tokens in collection  for the last 5 days.</summary>

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
</details>

<details>
<summary>Top 10 collections ranked based on number of recorded Tokens in collection.</summary>

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
</details>

<details>
<summary>Get all the tokens and information about them for a given address.</summary>

```sql
/* To check what is the number of NFTs if we need to limit the token listing below */
SELECT
	count(token_id) as number_of_nfts
FROM nft_tokens_metadata
WHERE address = '0x76be3b62873462d2142405439777e971754e8e77'
```
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
</details>