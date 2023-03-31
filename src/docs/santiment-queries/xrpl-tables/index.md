---
title: XRPL tables overview
author: Boris
date: 2023-03-30
description: Information about the XRPL related tables
---


## List of Tables

All our tables that contain XRPL-related data have the string 'xrp' in their name.
So one easy way to find them yourself is by running the following query:
```sql
SHOW TABLES LIKE '%xrp%'
```
```
┌─name───────────────────┐
│ xrp_balances           │
│ xrp_balances_shard_v5  │
│ xrp_dex_volume         │
│ xrp_dex_volume_shard   │
│ xrp_ripple_state       │
│ xrp_ripple_state_shard │
└────────────────────────┘
```

## Exploration of the tables

> We can inspect the tables with the commands we learnt in [Exploration](/santiment-queries/exploration/)

Below we have listed all the XRPL tables with thier columns and a brief descriptions of them.


## xrp\_balances
Represents balance changes per address per currency.

- **dt** (*DateTime*): The date time of the balance change
- **blockNumber** (*UInt64*): Unique identifier for the block in which the transaction was processed
- **balance** (*Float64*): The balance of the asset in the account after the transaction was completed
- **oldDt** (*Nullable(DateTime)*): The date time of the previous balance change
- **oldBlockNumber** (*Nullable(UInt64)*): The block number of the previous balance change
- **oldBalance** (*Float64*): The previous balance in this currency for this address
- **address** (*String*): The owner of the funds
- **currency** (*String*): Type of currency used in the transaction
- **issuer** (*Nullable(String)*): The issuer of the currency
- **issuerCurrency** (*String*): The type of the issued currency
- **addressType** (*String*): Enum(NORMAL | SPECIAL) is the address a valid XRPL address or a meta address used for metric purposes
- **transactionIndex** (*UInt64*): Position of the transaction that caused the balance change inside the XRPL block
- **transactionHash** (*String*): Hash value identifying the transaction that caused the balance change


## xrp\_dex\_volume
Represents trades on the XRPL DEX.

- **dt** (*DateTime*): When the transaction happened.
- **blockNumber** (*UInt64*): Unique identifier for the block in which the transaction was processed
- **offerAddress** (*String*): The owner of the funds
- **makerAddress** (*String*): The address of the account that owns the Offer that resulted  in a DEX trade
- **offerSequence** (*UInt32*) - The sequence number of the Offer transaction that resulted in a DEX trade
- **takerPaysIssuerCurrency** (*String*): The currency type offered by the taker
- **takerPaysAmount** (*Float64*): The amount of currency offered by the taker
- **takerGetsIssuerCurrency** (*String*): The currency type recieved by the taker
- **takerGetsAmount** (*Float64*): The amount of currency recieved by the taker
- **transactionIndex** (*UInt64*): Position of the transaction that caused the balance change inside the XRPL block
- **transactionHash** (*String*): Hash value identifying the transaction that caused the balance change
- **xrpAmount** (*Nullable(Float64)*): The amount of the trade measured in XRP


## xrp\_ripple\_state
Represents creation and destruction or XRPL trustlines.

- **sign** (*Int8*): If sign is '1' it denotes creation and if it is '-1' deletion of trustline
- **dt** (*DateTime*): When the transaction happened.
- **blockNumber** (*UInt64*): Unique identifier for the block in which the transaction was processed
- **transactionIndex** (*UInt32*): Position of the transaction that caused the balance change inside the XRPL block
- **transactionHash** (*String*): Hash value identifying the transaction that caused the balance change
- **currency** (*String*): Type of currency used in the trustline
- **balance** (*Float64*): Accumulated balance
- **highLimitIssuer** (*String*): Issuer of the high account
- **highLimitBalance** (*Float64*): Balance of the high account
- **lowLimitIssuer** (*String*): Issuer of the low account
- **lowLimitBalance** (*Float64*): Balance of the low account

## Sample Queries

---
### DEX volume per asset pair, measured in XRP
- DEX volume for a specific asset pair, per day, measured in XRP

```sql
WITH ('r3kmLJN5D28dHuH8vZNUZpMC43pEHpaocV/USD', 'rvYAfWj5gh67oV6fW32ZzP3Aw4Eubs59B/BTC') AS issuer_pair
SELECT
    toDate(dt) AS day,
    SUM(xrpAmount) AS count_final
FROM xrp_dex_volume
WHERE (takerPaysIssuerCurrency IN (issuer_pair)) OR (takerGetsIssuerCurrency IN (issuer_pair))
GROUP BY day
ORDER BY day DESC
LIMIT 100
```
Test in [Queries](https://app.santiment.net/queries/dex-volume-per-asset-pari-in-xrp-509/071f9798-79f0-4369-9cb1-a8f4b7048a50)

---

---
### DEX volume per asset pair, measured in USD
- DEX volume for a specific asset pair, per day, measured in USD. To achive the result we need to join the onchain
XRPL data with prices.

```sql
WITH ('r3kmLJN5D28dHuH8vZNUZpMC43pEHpaocV/USD', 'rvYAfWj5gh67oV6fW32ZzP3Aw4Eubs59B/BTC') AS issuer_pair
SELECT
    toDate(dt) AS dt,
    SUM(xrpAmount * value) AS volume_usd
FROM xrp_dex_volume
INNER JOIN daily_metrics_v2 USING (dt)
WHERE (metric_id = dictGet('metrics_by_name', 'metric_id', 'daily_avg_price_usd')) AND (asset_id = dictGet('assets_by_name', 'asset_id', 'xrp')) AND ((takerPaysIssuerCurrency IN (issuer_pair)) OR (takerGetsIssuerCurrency IN (issuer_pair)))
GROUP BY dt
ORDER BY dt DESC
LIMIT 100
```
Test in [Queries](https://app.santiment.net/queries/xrp-dex-volume-per-asset-pari-in-usd-510/a3fe5a05-d188-444f-86a3-df419a6cf910)


