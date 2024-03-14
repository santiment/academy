---
title: XRPL Tables Overview
author: Boris
date: 2023-03-30
description: An overview of the XRPL-related tables and their functions
---

## List of Tables

All our tables that contain XRPL-related data have the string 'xrp' in their name. To find them yourself, run the following query:

```sql
SHOW TABLES LIKE '%xrp%'
```

The result will display the list of tables:

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

## Exploration of the Tables

We can inspect the tables with the commands we learned in [Exploration](/santiment-queries/exploration/).

Below, we have listed all the XRPL tables with their columns and a brief description of each.

## xrp\_balances
Represents balance changes per address per currency.

- **dt** (*DateTime*): The date and time of the balance change
- **blockNumber** (*UInt64*): Unique identifier for the block in which the transaction was processed
- **balance** (*Float64*): The balance of the asset in the account after the transaction was completed
- **oldDt** (*Nullable(DateTime)*): The date and time of the previous balance change
- **oldBlockNumber** (*Nullable(UInt64)*): The block number of the previous balance change
- **oldBalance** (*Float64*): The previous balance in this currency for this address
- **address** (*String*): The owner of the funds
- **currency** (*String*): Type of currency used in the transaction
- **issuer** (*Nullable(String)*): The issuer of the currency
- **issuerCurrency** (*String*): The type of the issued currency
- **addressType** (*String*): Enum(NORMAL | SPECIAL) - Indicates if the address is a valid XRPL address or a meta address used for metric purposes
- **transactionIndex** (*UInt64*): Position of the transaction that caused the balance change inside the XRPL block
- **transactionHash** (*String*): Hash value identifying the transaction that caused the balance change

## xrp\_dex\_volume
Represents trades on the XRPL DEX.

- **dt** (*DateTime*): The time when the transaction occurred.
- **blockNumber** (*UInt64*): Unique identifier for the block in which the transaction was processed.
- **offerAddress** (*String*): The owner of the funds.
- **makerAddress** (*String*): The address of the account that owns the Offer, resulting in a DEX trade.
- **offerSequence** (*UInt32*): The sequence number of the Offer transaction that resulted in a DEX trade.
- **takerPaysIssuerCurrency** (*String*): The currency type offered by the taker.
- **takerPaysAmount** (*Float64*): The amount of currency offered by the taker.
- **takerGetsIssuerCurrency** (*String*): The currency type received by the taker.
- **takerGetsAmount** (*Float64*): The amount of currency received by the taker.
- **transactionIndex** (*UInt64*): Position of the transaction that caused the balance change inside the XRPL block.
- **transactionHash** (*String*): Hash value identifying the transaction that caused the balance change.
- **xrpAmount** (*Nullable(Float64)*): The amount of the trade measured in XRP.

## xrp\_ripple\_state
Represents creation and destruction or XRPL trustlines.

- **sign** (*Int8*): Indicates the creation or deletion of a trustline. '1' denotes creation, and '-1' denotes deletion.
- **dt** (*DateTime*): The date and time when the transaction occurred.
- **blockNumber** (*UInt64*): A unique identifier for the block in which the transaction was processed.
- **transactionIndex** (*UInt32*): The position of the transaction that caused the balance change inside the XRPL block.
- **transactionHash** (*String*): The hash value identifying the transaction that caused the balance change.
- **currency** (*String*): The type of currency used in the trustline.
- **balance** (*Float64*): The accumulated balance.
- **highLimitIssuer** (*String*): The issuer of the high account.
- **highLimitBalance** (*Float64*): The balance of the high account.
- **lowLimitIssuer** (*String*): The issuer of the low account.
- **lowLimitBalance** (*Float64*): The balance of the low account.

## Sample Queries

### DEX Volume per Asset Pair, Measured in XRP

DEX volume for a specific asset pair, per day, measured in XRP.

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

Test in [Queries](https://queries.santiment.net/query/dex-volume-per-asset-pair-measured-in-xrp-422)

---

### DEX Volume per Asset Pair, Measured in USD

DEX volume for a specific asset pair, per day, measured in USD. To achieve the result, we need to join the on-chain XRPL data with prices.

```sql
WITH ('r3kmLJN5D28dHuH8vZNUZpMC43pEHpaocV/USD', 'rvYAfWj5gh67oV6fW32ZzP3Aw4Eubs59B/BTC') AS issuer_pair
SELECT
    toDate(dt) AS dt,
    SUM(xrpAmount * value) AS volume_usd
FROM xrp_dex_volume
INNER JOIN daily_metrics_v2 USING (dt)
WHERE (metric_id = dictGet('metrics_by_name', 'metric_id', 'daily_avg_price_usd'))
AND (asset_id = dictGet('assets_by_name', 'asset_id', 'xrp'))
AND ((takerPaysIssuerCurrency IN (issuer_pair)) OR (takerGetsIssuerCurrency IN (issuer_pair)))
GROUP BY dt
ORDER BY dt DESC
LIMIT 100
```

Test in [Queries](https://queries.santiment.net/query/dex-volume-per-asset-pair-measured-in-usd-423)