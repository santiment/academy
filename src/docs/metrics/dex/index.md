---
title: Decentralized Exchanges
author: Maksim Razhev, Serge Nedashkovsky
date: 2021-01-25
description: DEX Metrics
---

## Description
Metrics related to Decentralized Exchanges (DEX) trades of ERC20 tokens and ETH.

Segmented by DEX:
* `total_trade_volume_by_dex` - Volume of all trades
* `eth_based_trade_volume_by_dex` - Volume of trades that involve ETH-Based tokens<sup>[1](#eth-based-tokens)</sup>
* `stablecoin_trade_volume_by_dex` - Volume of trades that involve Stablecoins<sup>[2](#usd-based-stablecoins)</sup>
* `other_trade_volume_by_dex` - Volume of trades that involve tokens that don't fall in any of the above categories 
  (e.g. BAT)
* `total_trade_amount_by_dex` - Amount of all trades
* `eth_based_trade_amount_by_dex` - Amount of trades that involve ETH-Based tokens<sup>[1](#eth-based-tokens)</sup>
* `stablecoin_trade_amount_by_dex` - Amount of trades that involve Stablecoins<sup>[2](#usd-based-stablecoins)</sup>
* `other_trade_amount_by_dex` - Amount of trades that involve tokens that don't fall in any of the above categories 
  (e.g. BAT)  

Segmented by DEX and asset:
* `eth_trade_volume_by_token` - Volume of trades between ETH-Based tokens and a given ERC20 token
* `stablecoin_trade_volume_by_token` - Volume of trades between Stablecoins<sup>[2](#usd-based-stablecoins)</sup> and a given ERC20 token
* `token_eth_price_by_dex_5m` - Token ETH price segmented by DEX for trades between ETH-Based tokens<sup>[1](#eth-based-tokens)</sup> and a given 
  ERC20 token

---
### ETH Based Tokens
ETH, ETH Kyber, WETH, ETHWrapped and Bancor ETH.
### USD-based Stablecoins
Tether, USD coin, DAI, Binance USD, TrueUSD and etc.

## Access

[Restricted Access](/metrics/details/access#restricted-access).

---

## Measuring Unit

* `total_trade_amount_by_dex`, `eth_based_trade_amount_by_dex`, `stablecoin_trade_amount_by_dex`, 
  `other_trade_amount_by_dex` - Number of trades
* `eth_trade_volume_by_token` - Amount of ETH
* `stablecoin_trade_volume_by_token` - Amount of stablecoins
* `token_eth_price_by_dex_5m` - Amount of ETH per coin 
* Other - Amount of coins
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
  `other_trade_volume_by_dex` -  
  `ethereum`, `multi-collateral-dai`, `bitcoin`
* `total_trade_amount_by_dex`, `eth_based_trade_amount_by_dex`, `stablecoin_trade_amount_by_dex`, 
  `other_trade_amount_by_dex` -  
  `multi-collateral-dai`
* `eth_trade_volume_by_token`, `stablecoin_trade_volume_by_token`, `token_eth_price_by_dex_5m` -  
  All ERC20 assets

---

### SanAPI

Total Trade Volume by DEX:

```graphql
{
  getMetric(metric: "total_trade_volume_by_dex") {
    timeseriesData(
      selector: {
        slug: "multi-collateral-dai"
      	owner: "UniswapV2"
      	label: "decentralized_exchange"
      }
      from: "2021-01-01T00:00:00Z"
      to: "2021-01-07T00:00:00Z"
      interval: "5m"
    ) {
      datetime
      value
    }
  }
}
```
[**Run in Explorer**](<https://api.santiment.net/graphiql?query=%7B%0A%20%20getMetric(metric%3A%20%22total_trade_volume_by_dex%22)%20%7B%0A%20%20%20%20timeseriesData(%0A%20%20%20%20%20%20selector%3A%20%7B%0A%20%20%20%20%20%20%20%20slug%3A%20%22multi-collateral-dai%22%0A%20%20%20%20%20%20%09owner%3A%20%22UniswapV2%22%0A%20%20%20%20%20%20%09label%3A%20%22decentralized_exchange%22%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20from%3A%20%222021-01-01T00%3A00%3A00Z%22%0A%20%20%20%20%20%20to%3A%20%222021-01-07T00%3A00%3A00Z%22%0A%20%20%20%20%20%20interval%3A%20%225m%22%0A%20%20%20%20)%20%7B%0A%20%20%20%20%20%20datetime%0A%20%20%20%20%20%20value%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D>)

ETH-Based Tokens Trade Volume by DEX:

```graphql
{
  getMetric(metric: "eth_based_trade_volume_by_dex") {
    timeseriesData(
      selector: {
        slug: "multi-collateral-dai"
      	owner: "balancer"
      	label: "decentralized_exchange"
      }
      from: "2021-01-01T00:00:00Z"
      to: "2021-01-07T00:00:00Z"
      interval: "5m"
    ) {
      datetime
      value
    }
  }
}
```
[**Run in Explorer**](<https://api.santiment.net/graphiql?query=%7B%0A%20%20getMetric(metric%3A%20%22eth_based_trade_volume_by_dex%22)%20%7B%0A%20%20%20%20timeseriesData(%0A%20%20%20%20%20%20selector%3A%20%7B%0A%20%20%20%20%20%20%20%20slug%3A%20%22multi-collateral-dai%22%0A%20%20%20%20%20%20%09owner%3A%20%22balancer%22%0A%20%20%20%20%20%20%09label%3A%20%22decentralized_exchange%22%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20from%3A%20%222021-01-01T00%3A00%3A00Z%22%0A%20%20%20%20%20%20to%3A%20%222021-01-07T00%3A00%3A00Z%22%0A%20%20%20%20%20%20interval%3A%20%225m%22%0A%20%20%20%20)%20%7B%0A%20%20%20%20%20%20datetime%0A%20%20%20%20%20%20value%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D>)

Stablecoin Trade Volume by DEX:

```graphql
{
  getMetric(metric: "stablecoin_trade_volume_by_dex") {
    timeseriesData(
      selector: {
        slug: "multi-collateral-dai"
      	owner: "balancer"
      	label: "decentralized_exchange"
      }
      from: "2021-01-01T00:00:00Z"
      to: "2021-01-07T00:00:00Z"
      interval: "5m"
    ) {
      datetime
      value
    }
  }
}
```
[**Run in Explorer**](<https://api.santiment.net/graphiql?query=%7B%0A%20%20getMetric(metric%3A%20%22stablecoin_trade_volume_by_dex%22)%20%7B%0A%20%20%20%20timeseriesData(%0A%20%20%20%20%20%20selector%3A%20%7B%0A%20%20%20%20%20%20%20%20slug%3A%20%22multi-collateral-dai%22%0A%20%20%20%20%20%20%09owner%3A%20%22balancer%22%0A%20%20%20%20%20%20%09label%3A%20%22decentralized_exchange%22%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20from%3A%20%222021-01-01T00%3A00%3A00Z%22%0A%20%20%20%20%20%20to%3A%20%222021-01-07T00%3A00%3A00Z%22%0A%20%20%20%20%20%20interval%3A%20%225m%22%0A%20%20%20%20)%20%7B%0A%20%20%20%20%20%20datetime%0A%20%20%20%20%20%20value%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D>)

Other Token Trade Volume by DEX:
```graphql
{
  getMetric(metric: "other_trade_volume_by_dex") {
    timeseriesData(
      selector: {
        slug: "multi-collateral-dai"
      	owner: "balancer"
      	label: "decentralized_exchange"
      }
      from: "2021-01-01T00:00:00Z"
      to: "2021-01-07T00:00:00Z"
      interval: "5m"
    ) {
      datetime
      value
    }
  }
}
```
[**Run in Explorer**](<https://api.santiment.net/graphiql?query=%7B%0A%20%20getMetric(metric%3A%20%22other_trade_volume_by_dex%22)%20%7B%0A%20%20%20%20timeseriesData(%0A%20%20%20%20%20%20selector%3A%20%7B%0A%20%20%20%20%20%20%20%20slug%3A%20%22multi-collateral-dai%22%0A%20%20%20%20%20%20%09owner%3A%20%22balancer%22%0A%20%20%20%20%20%20%09label%3A%20%22decentralized_exchange%22%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20from%3A%20%222021-01-01T00%3A00%3A00Z%22%0A%20%20%20%20%20%20to%3A%20%222021-01-07T00%3A00%3A00Z%22%0A%20%20%20%20%20%20interval%3A%20%225m%22%0A%20%20%20%20)%20%7B%0A%20%20%20%20%20%20datetime%0A%20%20%20%20%20%20value%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D>)

Total Trade Amount by DEX:
```graphql
{
  getMetric(metric: "total_trade_amount_by_dex") {
    timeseriesData(
      selector: {
        slug: "multi-collateral-dai"
      	owner: "balancer"
      	label: "decentralized_exchange"
      }
      from: "2021-01-01T00:00:00Z"
      to: "2021-01-07T00:00:00Z"
      interval: "5m"
    ) {
      datetime
      value
    }
  }
}
```
[**Run in Explorer**](<https://api.santiment.net/graphiql?query=%7B%0A%20%20getMetric(metric%3A%20%22total_trade_amount_by_dex%22)%20%7B%0A%20%20%20%20timeseriesData(%0A%20%20%20%20%20%20selector%3A%20%7B%0A%20%20%20%20%20%20%20%20slug%3A%20%22multi-collateral-dai%22%0A%20%20%20%20%20%20%09owner%3A%20%22balancer%22%0A%20%20%20%20%20%20%09label%3A%20%22decentralized_exchange%22%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20from%3A%20%222021-01-01T00%3A00%3A00Z%22%0A%20%20%20%20%20%20to%3A%20%222021-01-07T00%3A00%3A00Z%22%0A%20%20%20%20%20%20interval%3A%20%225m%22%0A%20%20%20%20)%20%7B%0A%20%20%20%20%20%20datetime%0A%20%20%20%20%20%20value%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D>)

ETH-based Tokens Trade Amount by DEX:
```graphql
{
  getMetric(metric: "eth_based_trade_amount_by_dex") {
    timeseriesData(
      selector: {
        slug: "multi-collateral-dai"
      	owner: "balancer"
      	label: "decentralized_exchange"
      }
      from: "2021-01-01T00:00:00Z"
      to: "2021-01-07T00:00:00Z"
      interval: "5m"
    ) {
      datetime
      value
    }
  }
}
```
[**Run in Explorer**](<https://api.santiment.net/graphiql?query=%7B%0A%20%20getMetric(metric%3A%20%22eth_based_trade_amount_by_dex%22)%20%7B%0A%20%20%20%20timeseriesData(%0A%20%20%20%20%20%20selector%3A%20%7B%0A%20%20%20%20%20%20%20%20slug%3A%20%22multi-collateral-dai%22%0A%20%20%20%20%20%20%09owner%3A%20%22balancer%22%0A%20%20%20%20%20%20%09label%3A%20%22decentralized_exchange%22%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20from%3A%20%222021-01-01T00%3A00%3A00Z%22%0A%20%20%20%20%20%20to%3A%20%222021-01-07T00%3A00%3A00Z%22%0A%20%20%20%20%20%20interval%3A%20%225m%22%0A%20%20%20%20)%20%7B%0A%20%20%20%20%20%20datetime%0A%20%20%20%20%20%20value%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D>)

Stablecoin Trade Amount by DEX:
```graphql
{
  getMetric(metric: "stablecoin_trade_amount_by_dex") {
    timeseriesData(
      selector: {
        slug: "multi-collateral-dai"
      	owner: "balancer"
      	label: "decentralized_exchange"
      }
      from: "2021-01-01T00:00:00Z"
      to: "2021-01-07T00:00:00Z"
      interval: "5m"
    ) {
      datetime
      value
    }
  }
}
```
[**Run in Explorer**](<https://api.santiment.net/graphiql?query=%7B%0A%20%20getMetric(metric%3A%20%22stablecoin_trade_amount_by_dex%22)%20%7B%0A%20%20%20%20timeseriesData(%0A%20%20%20%20%20%20selector%3A%20%7B%0A%20%20%20%20%20%20%20%20slug%3A%20%22multi-collateral-dai%22%0A%20%20%20%20%20%20%09owner%3A%20%22balancer%22%0A%20%20%20%20%20%20%09label%3A%20%22decentralized_exchange%22%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20from%3A%20%222021-01-01T00%3A00%3A00Z%22%0A%20%20%20%20%20%20to%3A%20%222021-01-07T00%3A00%3A00Z%22%0A%20%20%20%20%20%20interval%3A%20%225m%22%0A%20%20%20%20)%20%7B%0A%20%20%20%20%20%20datetime%0A%20%20%20%20%20%20value%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D>)

Other Trade Amount by DEX:
```graphql
{
  getMetric(metric: "other_trade_amount_by_dex") {
    timeseriesData(
      selector: {
        slug: "multi-collateral-dai"
      	owner: "balancer"
      	label: "decentralized_exchange"
      }
      from: "2021-01-01T00:00:00Z"
      to: "2021-01-07T00:00:00Z"
      interval: "5m"
    ) {
      datetime
      value
    }
  }
}
```
[**Run in Explorer**](<https://api.santiment.net/graphiql?query=%7B%0A%20%20getMetric(metric%3A%20%22other_trade_amount_by_dex%22)%20%7B%0A%20%20%20%20timeseriesData(%0A%20%20%20%20%20%20selector%3A%20%7B%0A%20%20%20%20%20%20%20%20slug%3A%20%22multi-collateral-dai%22%0A%20%20%20%20%20%20%09owner%3A%20%22balancer%22%0A%20%20%20%20%20%20%09label%3A%20%22decentralized_exchange%22%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20from%3A%20%222021-01-01T00%3A00%3A00Z%22%0A%20%20%20%20%20%20to%3A%20%222021-01-07T00%3A00%3A00Z%22%0A%20%20%20%20%20%20interval%3A%20%225m%22%0A%20%20%20%20)%20%7B%0A%20%20%20%20%20%20datetime%0A%20%20%20%20%20%20value%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D>)

ETH-Based Token Trade Volume by DEX and Token:
```graphql
{
  getMetric(metric: "eth_trade_volume_by_token") {
    timeseriesData(
      selector: {
        slug: "basic-attention-token"
      	owner: "UniswapV2"
      	label: "decentralized_exchange"
      }
      from: "2021-01-01T00:00:00Z"
      to: "2021-01-07T00:00:00Z"
      interval: "5m"
    ) {
      datetime
      value
    }
  }
}
```
[**Run in Explorer**](<https://api.santiment.net/graphiql?query=%7B%0A%20%20getMetric(metric%3A%20%22eth_trade_volume_by_token%22)%20%7B%0A%20%20%20%20timeseriesData(%0A%20%20%20%20%20%20selector%3A%20%7B%0A%20%20%20%20%20%20%20%20slug%3A%20%22basic-attention-token%22%0A%20%20%20%20%20%20%09owner%3A%20%22UniswapV2%22%0A%20%20%20%20%20%20%09label%3A%20%22decentralized_exchange%22%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20from%3A%20%222021-01-01T00%3A00%3A00Z%22%0A%20%20%20%20%20%20to%3A%20%222021-01-07T00%3A00%3A00Z%22%0A%20%20%20%20%20%20interval%3A%20%225m%22%0A%20%20%20%20)%20%7B%0A%20%20%20%20%20%20datetime%0A%20%20%20%20%20%20value%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D>)

Stablecoin Trade Volume by DEX and Token:
```graphql
{
  getMetric(metric: "stablecoin_trade_volume_by_token") {
    timeseriesData(
      selector: {
        slug: "tether"
      	owner: "curve"
      	label: "decentralized_exchange"
      }
      from: "2021-01-01T00:00:00Z"
      to: "2021-01-07T00:00:00Z"
      interval: "5m"
    ) {
      datetime
      value
    }
  }
}
```
[**Run in Explorer**](<https://api.santiment.net/graphiql?query=%7B%0A%20%20getMetric(metric%3A%20%22stablecoin_trade_volume_by_token%22)%20%7B%0A%20%20%20%20timeseriesData(%0A%20%20%20%20%20%20selector%3A%20%7B%0A%20%20%20%20%20%20%20%20slug%3A%20%22tether%22%0A%20%20%20%20%20%20%09owner%3A%20%22curve%22%0A%20%20%20%20%20%20%09label%3A%20%22decentralized_exchange%22%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20from%3A%20%222021-01-01T00%3A00%3A00Z%22%0A%20%20%20%20%20%20to%3A%20%222021-01-07T00%3A00%3A00Z%22%0A%20%20%20%20%20%20interval%3A%20%225m%22%0A%20%20%20%20)%20%7B%0A%20%20%20%20%20%20datetime%0A%20%20%20%20%20%20value%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D>)

Token ETH Price by DEX
```graphql
{
  getMetric(metric: "token_eth_price_by_dex_5m") {
    timeseriesData(
      selector: {
        slug: "basic-attention-token"
      	owner: "UniswapV2"
      	label: "decentralized_exchange"
      }
      from: "2021-01-01T00:00:00Z"
      to: "2021-01-07T00:00:00Z"
      interval: "5m"
    ) {
      datetime
      value
    }
  }
}
```
[**Run in Explorer**](<https://api.santiment.net/graphiql?query=%7B%0A%20%20getMetric(metric%3A%20%22token_eth_price_by_dex_5m%22)%20%7B%0A%20%20%20%20timeseriesData(%0A%20%20%20%20%20%20selector%3A%20%7B%0A%20%20%20%20%20%20%20%20slug%3A%20%22basic-attention-token%22%0A%20%20%20%20%20%20%09owner%3A%20%22UniswapV2%22%0A%20%20%20%20%20%20%09label%3A%20%22decentralized_exchange%22%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20from%3A%20%222021-01-01T00%3A00%3A00Z%22%0A%20%20%20%20%20%20to%3A%20%222021-01-07T00%3A00%3A00Z%22%0A%20%20%20%20%20%20interval%3A%20%225m%22%0A%20%20%20%20)%20%7B%0A%20%20%20%20%20%20datetime%0A%20%20%20%20%20%20value%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D>)