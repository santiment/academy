---
title: DEX trades
author: Alex
date: 2021-12-08
description: Signal indicating a large trade occured on a DEX
---

## Definition

**DEX trade signal** indicates that an outstanding trade had happened on a DEX.

In order to identify "outstanding" trades the **top-7 trades over 7 days are considered**. If the new given trade amount is greater than the top-7 value, it's marked as "outstanding".

Provided metadata:
* dex_address  - DEX address
* dex_name  - DEX name
* tx_hash  - Transaction Hash
* taker_asset_id - Taker_token
* taker_amount  - Amount of taker_token  (measured in token units)
* taker_amount_usd - Amount of taker_token's in USD
* taker_address  - Taker's address
* maker_asset_id - Maker_token's
* maker_amount  - Amount of maker_token (measured in token units)
* maker_amount_usd - Amount of maker_token's in USD
* maker_address - Maker's address. Null if the trade happens via liquidity pool
* taker_token  - Taker_token  contract address
* maker_token  - Maker_token contract address

## Currently supported  DEXes:
* 0x
* Airswap
* Balancer
* Bancor
* Curve
* DDEX
* DEX.Top
* Etherdelta
* Gnosis
* IDEX
* KyberNetwork
* OasisDEX
* Synthetix
* TokenStore
* Uniswap
* dYdX
* Sushiswap
