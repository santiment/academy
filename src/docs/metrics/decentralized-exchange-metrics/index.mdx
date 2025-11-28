---
title: Decentralized Exchange Metrics
author: Maksim Razhev, Serge Nedashkovsky, Filip
date: 2021-01-25
description: DEX Metrics
---

> DEX metrics have been migrated to a new framework, with new data starting from May 5, 2022. 
> Data between February 9, 2017 and May 5, 2022, is sourced from the old 
> framework ([Available DEXs for old framework](/metrics/decentralized-exchange-metrics/old_dex_list)). 
> **Although older data remains accessible through the API, we do not recommend its use.**

## Description
Decentralized exchanges, or DEXs, revolutionize cryptocurrency trading by eliminating the need for 
a central authority. Operating on blockchain technology, these exchanges empower users with direct 
peer-to-peer transactions, enhancing security and control over funds. DEXs embody the principles of 
transparency and trustlessness, offering users a more resilient and inclusive financial ecosystem.

List of decentralized exchanges: [Available Decentralized Exchanges](/metrics/decentralized-exchange-metrics/dex_list). 
Additionally, there is a label `unknown` for DEXs that haven't been labeled.

Metrics are divided into four groups:

#### Trade volume in USD segmented by DEX:
* `total_trade_volume_by_dex` - Total trading volume in USD
* `eth_based_trade_volume_by_dex` - Trading volume in USD involving ETH-based tokens<sup>[1](#eth-based-tokens)</sup>
* `stablecoin_trade_volume_by_dex` - Trading volume in USD involving Stablecoins<sup>[2](#usd-based-stablecoins)</sup>
* `other_trade_volume_by_dex` - The trading volume in USD involving tokens not falling into 
any of the above categories

#### Number of trades segmented by DEX:
* `total_trade_amount_by_dex` - Number of all trades
* `eth_based_trade_amount_by_dex` - Number of trades involving ETH-Based tokens<sup>[1](#eth-based-tokens)</sup>
* `stablecoin_trade_amount_by_dex` - Number of trades involving Stablecoins<sup>[2](#usd-based-stablecoins)</sup>
* `other_trade_amount_by_dex` - Number of trades involving tokens not falling into 
any of the above categories

#### Trade volume segmented by DEX and asset:
* `eth_trade_volume_by_token` - Trading volume in ETH between ERC20 token and ETH-Based tokens<sup>[1](#eth-based-tokens)</sup>
* `stablecoin_trade_volume_by_token` - Trading volume in USD between ERC20 token and Stablecoins<sup>[2](#usd-based-stablecoins)</sup>

#### Token price in ETH segmented by DEX and asset:
* `token_eth_price_by_dex_5m` - Token price in ETH segmented by DEX for trades between given ERC20 token 
and ETH-based tokens <sup>[1](#eth-based-tokens)</sup>

---
### ETH Based Tokens
ETH, WETH, ETH Kyber, ETHWrapped and Bancor ETH.
### USD-based Stablecoins
Tether, USD coin, DAI, Binance USD, TrueUSD and other stablecoins.

## Access

[Restricted Access](/metrics/details/access#restricted-access).

---

## Measuring Unit

* `total_trade_volume_by_dex`, `eth_based_trade_volume_by_dex`, `stablecoin_trade_volume_by_dex`, 
`other_trade_volume_by_dex` - Amount in USD
* `total_trade_amount_by_dex`, `eth_based_trade_amount_by_dex`, `stablecoin_trade_amount_by_dex`, 
`other_trade_amount_by_dex` - Number of trades
* `eth_trade_volume_by_token` - Amount in ETH
* `stablecoin_trade_volume_by_token` - Amount in stablecoins
* `token_eth_price_by_dex_5m` - Amount in ETH

---

## Data Type

[Timeseries Data](/metrics/details/data-type#timeseries-data)

---

## Frequency

[Five-minute Intervals](/metrics/details/frequency#five-minute-frequency)

---

## Latency

[Price Latency](/metrics/details/latency#price-latency)

---

## Available Assets

* `total_trade_volume_by_dex`, `eth_based_trade_volume_by_dex`, `stablecoin_trade_volume_by_dex`, 
  `other_trade_volume_by_dex`: multi-collateral-dai
* `total_trade_amount_by_dex`, `eth_based_trade_amount_by_dex`, `stablecoin_trade_amount_by_dex`, 
  `other_trade_amount_by_dex`: multi-collateral-dai
* `eth_trade_volume_by_token`, `stablecoin_trade_volume_by_token`, `token_eth_price_by_dex_5m`: [ERC20 assets](<https://api.santiment.net/graphiql?variables=%7B%7D&query=%7B%0A%20%20getMetric(metric%3A%20%22token_eth_price_by_dex_5m%22)%7B%0A%20%20%20%20metadata%7B%0A%20%20%20%20%20%20availableSlugs%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D>)

> **Note:** `<>_trade_volume_by_dex` and `<>_trade_amount_by_dex` metrics are not asset-based.
> They are related to DEX data and `multi-collateral-dai` is placeholder for the data.

---

### SanAPI

Trade volume metrics: `total_trade_volume_by_dex`, `eth_based_trade_volume_by_dex`, 
`stablecoin_trade_volume_by_dex` and `other_trade_volume_by_dex`

```graphql-explorer
{
  getMetric(metric: "total_trade_volume_by_dex") {
    timeseriesDataJson(
      selector: {
        slug: "multi-collateral-dai"
      	owner: "bancor_v3"
      	label: "decentralized_exchange"
      }
      from: "2023-01-01T00:00:00Z"
      to: "2023-01-07T00:00:00Z"
      interval: "5m"
    )
  }
}
```

Number of trades metrics: `total_trade_amount_by_dex`, `eth_based_trade_amount_by_dex`, 
`stablecoin_trade_amount_by_dex` and `other_trade_amount_by_dex`

```graphql-explorer
{
  getMetric(metric: "total_trade_amount_by_dex") {
    timeseriesDataJson(
      selector: {
        slug: "multi-collateral-dai"
      	owner: "sushi_v2"
      	label: "decentralized_exchange"
      }
      from: "2023-01-01T00:00:00Z"
      to: "2023-01-07T00:00:00Z"
      interval: "5m"
    )
  }
}
```

Trade volume between ERC20 token and ETH-based tokens: `eth_trade_volume_by_token`

```graphql-explorer
{
  getMetric(metric: "eth_trade_volume_by_token") {
    timeseriesDataJson(
      selector: {
        slug: "chainlink"
      	owner: "uniswap_v2"
      	label: "decentralized_exchange"
      }
      from: "2023-01-01T00:00:00Z"
      to: "2023-01-07T00:00:00Z"
      interval: "5m"
    )
  }
}
```

Trade volume between ERC20 token and stablecoins: `stablecoin_trade_volume_by_token`

```graphql-explorer
{
  getMetric(metric: "stablecoin_trade_volume_by_token") {
    timeseriesDataJson(
      selector: {
        slug: "wrapped-bitcoin"
      	owner: "uniswap_v3"
      	label: "decentralized_exchange"
      }
      from: "2023-01-01T00:00:00Z"
      to: "2023-01-07T00:00:00Z"
      interval: "5m"
    )
  }
}
```

Token ETH Price by DEX: `token_eth_price_by_dex_5m`

```graphql-explorer
{
  getMetric(metric: "token_eth_price_by_dex_5m") {
    timeseriesDataJson(
      selector: {
        slug: "usd-coin"
      	owner: "uniswap_v3"
      	label: "decentralized_exchange"
      }
      from: "2023-01-01T00:00:00Z"
      to: "2023-01-07T00:00:00Z"
      interval: "5m"
    )
  }
}
```