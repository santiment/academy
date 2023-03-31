---
title: XRPL tables overview
author: Boris
date: 2023-03-30
description: Information about the XRP related tables
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


## xrp_balances
Balances is essential source data in later aggregate computations.

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


## xrp_dex_volume
Dex Volume is a source data which we use for computing the DEX volume metric.

- **dt** (*DateTime*): When the transaction happened.
- **blockNumber** (*UInt64*): Unique identifier for the block in which the transaction was processed
- **offerAddress** (*String*): The owner of the funds
- **makerAddress** (*String*)
- **offerSequence** (*UInt32*) - The sequence number of the Offer transaction that resulted in a DEX trade
- **takerPaysIssuerCurrency** (*String*): The currency type offered by the taker
- **takerPaysAmount** (*Float64*): The amount of currency offered by the taker
- **takerGetsIssuerCurrency** (*String*): The currency type recieved by the taker
- **takerGetsAmount** (*Float64*): The amount of currency recieved by the taker
- **transactionIndex** (*UInt64*): Position of the transaction that caused the balance change inside the XRPL block
- **transactionHash** (*String*): Hash value identifying the transaction that caused the balance change
- **xrpAmount** (*Nullable(Float64)*): The amount of XRP in the transaction


## xrp_ripple_state
We use the ripple state source data to compute total number of trustlines.

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

\* The "issuer" for the balance in a trust line depends on whether the balance is positive or negative. If a RippleState object shows a positive balance, the high account is the issuer. If the balance is negative, the low account is the issuer. Often, the issuer has its limit set to 0 and the other account has a positive limit, but this is not reliable because limits can change without affecting an existing balance.