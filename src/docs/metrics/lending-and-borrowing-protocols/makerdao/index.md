---
title: MakerDAO Protocol
author: Filip
date: 2023-01-01
description: MakerDAO Protocol Metrics
---

## Description
MakerDAO is a decentralized finance (DeFi) platform built on the Ethereum 
blockchain that allows individuals to create and manage the DAI stablecoin, 
which is pegged to the value of the US dollar. MakerDAO uses a system of 
smart contracts to manage the creation and redemption of DAI tokens, which 
can be used for a variety of purposes, such as payments, trading, and investment.

One of the key features of MakerDAO is its collateralized debt position (CDP) 
system, which allows users to lock up their digital assets as collateral in order 
to generate DAI stablecoins. This creates a decentralized lending system that is 
independent of traditional financial intermediaries and allows users to access 
liquidity without having to sell their assets.

### Metrics related to MakerDAO protocol:

Action metrics:
* `makerdao_action_deposits` - Amount of deposited tokens
* `makerdao_action_deposits_usd` - Amount of deposited tokens in USD
* `makerdao_action_liquidations` - Amount of liquidated tokens
* `makerdao_action_liquidations_usd` - Amount of liquidated tokens in USD
* `makerdao_action_new_debt` - Amount of borrowed tokens
* `makerdao_action_new_debt_usd` - Amount of borrowed tokens in USD
* `makerdao_action_repayments` - Amount of repaid tokens
* `makerdao_action_repayments_usd` - Amount of repaid tokens in USD

New debt/repayments against collateral metrics:
* `dai_created` - Amount of DAI created, backed by underlying collateral
* `dai_repaid` - Amount of DAI repaid, backed by underlying collateral
* `total_dai_created` - Amount of DAI in circulation, backed by underlying collateral

Total supplied/borrowed metrics:
* `makerdao_total_supplied` - Total supplied tokens
* `makerdao_total_supplied_usd` - Total supplied tokens in USD
* `makerdao_total_borrowed` - Total borrowed tokens
* `makerdao_total_borrowed_usd` - Total borrowed tokens in USD

Collateralization ratio and stability fee metrics:
* `mcd_collat_ratio` - Ratio of collateral value to the value of the debt generated against that collateral
* `mcd_stability_fee` - Variable interest rate charged on outstanding debt

Protocol total action metrics:
* `makerdao_total_deposits_usd` - Total amount of deposits on MakerDAO (combining all assets in USD)
* `makerdao_total_liquidations_usd` - Total amount of liquidations on MakerDAO (combining all assets in USD)
* `makerdao_total_new_debt_usd` - Total amount of borrowings on MakerDAO (combining all assets in USD)
* `makerdao_total_repayments_usd` - Total amount of repayments on MakerDAO (combining all assets in USD)

Protocol total supplied/borrowed metrics:
* `makerdao_protocol_total_supplied_usd` - Total amount supplied on MakerDAO (combining all assets in USD)
* `makerdao_protocol_total_borrowed_usd` - Total amount borrowed on MakerDAO (combining all assets in USD)

Daily active addresses:
* `makerdao_active_addresses` - Daily active addresses on MakerDAO


> MakerDAO metrics have been migrated to a new framework; old metrics can be accessed via their 
> previous names, listed here: [Deprecated MakerDAO metrics](/metrics/lending-and-borrowing-protocols/makerdao/deprecated_metrics). 
> **Although older data remains accessible through the API, we do not recommend its use.**

---

## Access

[Restricted Access](/metrics/details/access#restricted-access).

---

## Measuring Unit

Amount in tokens/USD

---

## Data Type

[Timeseries Data](/metrics/details/data-type#timeseries-data)

---

## Frequency

[Five-minute Intervals](/metrics/details/frequency#five-minute-frequency)

---

## Latency

[On-Chain Latency](/metrics/details/latency#on-chain-latency)

---

## Available Assets

Metrics related to the entire protocol available for `maker` and `multi-collateral-dai`

Other metrics: 
available for [these assets](<https://api.santiment.net/graphiql?query=%7B%0A%20%20getMetric(metric%3A%20%22makerdao_action_deposits%22)%7B%0A%20%20%20%20metadata%7B%0A%20%20%20%20%20%20availableSlugs%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D>)

---

### SanAPI

Action metrics: `makerdao_action_deposits<_usd>`, `makerdao_action_liquidations<_usd>`, 
`makerdao_action_new_debt<_usd>` and `makerdao_action_repayments<_usd>`

```graphql
{
  getMetric(metric: "makerdao_action_deposits_usd"){
    timeseriesData(
      slug: "weth"
      from: "2022-11-01T00:00:00Z"
      to: "2022-11-03T00:00:00Z"
      includeIncompleteData: true
      interval: "5m"){
        datetime
        value
      }
  }
}
```
[Run in Explorer](<https://api.santiment.net/graphiql?query=%7B%0A%20%20getMetric(metric%3A%20%22makerdao_action_deposits_usd%22)%7B%0A%20%20%20%20timeseriesData(%0A%20%20%20%20%20%20slug%3A%20%22weth%22%0A%20%20%20%20%20%20from%3A%20%222022-11-01T00%3A00%3A00Z%22%0A%20%20%20%20%20%20to%3A%20%222022-11-03T00%3A00%3A00Z%22%0A%20%20%20%20%20%20includeIncompleteData%3A%20true%0A%20%20%20%20%20%20interval%3A%20%225m%22)%7B%0A%20%20%20%20%20%20%20%20datetime%0A%20%20%20%20%20%20%20%20value%0A%20%20%20%20%20%20%7D%0A%20%20%7D%0A%7D>)

New debt/repayments against collateral metrics:`dai_created`, `dai_repaid` and `total_dai_created`

```graphql
{
  getMetric(metric: "dai_created"){
    timeseriesData(
      slug: "weth"
      from: "2022-11-01T00:00:00Z"
      to: "2022-11-03T00:00:00Z"
      includeIncompleteData: true
      interval: "5m"){
        datetime
        value
      }
  }
}
```
[Run in Explorer](<https://api.santiment.net/graphiql?variables=%7B%7D&query=%7B%0A%20%20getMetric(metric%3A%20%22dai_created%22)%7B%0A%20%20%20%20timeseriesData(%0A%20%20%20%20%20%20slug%3A%20%22weth%22%0A%20%20%20%20%20%20from%3A%20%222022-11-01T00%3A00%3A00Z%22%0A%20%20%20%20%20%20to%3A%20%222022-11-03T00%3A00%3A00Z%22%0A%20%20%20%20%20%20includeIncompleteData%3A%20true%0A%20%20%20%20%20%20interval%3A%20%225m%22)%7B%0A%20%20%20%20%20%20%20%20datetime%0A%20%20%20%20%20%20%20%20value%0A%20%20%20%20%20%20%7D%0A%20%20%7D%0A%7D>)

Total supplied/borrowed metrics: `makerdao_total_supplied<_usd>` and 
`makerdao_total_borrowed<_usd>`

```graphql
{
  getMetric(metric: "makerdao_total_supplied"){
    timeseriesData(
      slug: "wrapped-bitcoin"
      from: "2022-11-01T00:00:00Z"
      to: "2022-11-03T00:00:00Z"
      includeIncompleteData: true
      interval: "5m"){
        datetime
        value
      }
  }
}
```
[Run in Explorer](<https://api.santiment.net/graphiql?query=%7B%0A%20%20getMetric(metric%3A%20%22makerdao_total_supplied%22)%7B%0A%20%20%20%20timeseriesData(%0A%20%20%20%20%20%20slug%3A%20%22wrapped-bitcoin%22%0A%20%20%20%20%20%20from%3A%20%222022-11-01T00%3A00%3A00Z%22%0A%20%20%20%20%20%20to%3A%20%222022-11-03T00%3A00%3A00Z%22%0A%20%20%20%20%20%20includeIncompleteData%3A%20true%0A%20%20%20%20%20%20interval%3A%20%225m%22)%7B%0A%20%20%20%20%20%20%20%20datetime%0A%20%20%20%20%20%20%20%20value%0A%20%20%20%20%20%20%7D%0A%20%20%7D%0A%7D>)

Collateralization ratio and stability fee metrics: `mcd_collat_ratio` and 
`mcd_stability_fee`

```graphql
{
  getMetric(metric: "mcd_collat_ratio"){
    timeseriesData(
      slug: "wrapped-bitcoin"
      from: "2022-11-01T00:00:00Z"
      to: "2022-11-03T00:00:00Z"
      includeIncompleteData: true
      interval: "1d"){
        datetime
        value
      }
  }
}
```
[Run in Explorer](<https://api.santiment.net/graphiql?variables=%7B%7D&query=%7B%0A%20%20getMetric(metric%3A%20%22mcd_collat_ratio%22)%7B%0A%20%20%20%20timeseriesData(%0A%20%20%20%20%20%20slug%3A%20%22wrapped-bitcoin%22%0A%20%20%20%20%20%20from%3A%20%222022-11-01T00%3A00%3A00Z%22%0A%20%20%20%20%20%20to%3A%20%222022-11-03T00%3A00%3A00Z%22%0A%20%20%20%20%20%20includeIncompleteData%3A%20true%0A%20%20%20%20%20%20interval%3A%20%221d%22)%7B%0A%20%20%20%20%20%20%20%20datetime%0A%20%20%20%20%20%20%20%20value%0A%20%20%20%20%20%20%7D%0A%20%20%7D%0A%7D>)


Protocol total action metrics: `makerdao_total_deposits_usd`, `makerdao_total_liquidations_usd`, 
`makerdao_total_new_debt_usd` and `makerdao_total_repayments_usd`

```graphql
{
  getMetric(metric: "makerdao_total_new_debt_usd"){
    timeseriesData(
      slug: "maker"
      from: "2022-11-01T00:00:00Z"
      to: "2022-11-03T00:00:00Z"
      includeIncompleteData: true
      interval: "5m"){
        datetime
        value
      }
  }
}
```
[Run in Explorer](<https://api.santiment.net/graphiql?query=%7B%0A%20%20getMetric(metric%3A%20%22makerdao_total_new_debt_usd%22)%7B%0A%20%20%20%20timeseriesData(%0A%20%20%20%20%20%20slug%3A%20%22maker%22%0A%20%20%20%20%20%20from%3A%20%222022-11-01T00%3A00%3A00Z%22%0A%20%20%20%20%20%20to%3A%20%222022-11-03T00%3A00%3A00Z%22%0A%20%20%20%20%20%20includeIncompleteData%3A%20true%0A%20%20%20%20%20%20interval%3A%20%225m%22)%7B%0A%20%20%20%20%20%20%20%20datetime%0A%20%20%20%20%20%20%20%20value%0A%20%20%20%20%20%20%7D%0A%20%20%7D%0A%7D>)

Protocol total supplied/borrowed metrics: `makerdao_protocol_total_supplied_usd` and 
`makerdao_protocol_total_borrowed_usd`

```graphql
{
  getMetric(metric: "makerdao_protocol_total_supplied_usd"){
    timeseriesData(
      slug: "multi-collateral-dai"
      from: "2022-11-01T00:00:00Z"
      to: "2022-11-03T00:00:00Z"
      includeIncompleteData: true
      interval: "5m"){
        datetime
        value
      }
  }
}
```
[Run in Explorer](<https://api.santiment.net/graphiql?query=%7B%0A%20%20getMetric(metric%3A%20%22makerdao_protocol_total_supplied_usd%22)%7B%0A%20%20%20%20timeseriesData(%0A%20%20%20%20%20%20slug%3A%20%22multi-collateral-dai%22%0A%20%20%20%20%20%20from%3A%20%222022-11-01T00%3A00%3A00Z%22%0A%20%20%20%20%20%20to%3A%20%222022-11-03T00%3A00%3A00Z%22%0A%20%20%20%20%20%20includeIncompleteData%3A%20true%0A%20%20%20%20%20%20interval%3A%20%225m%22)%7B%0A%20%20%20%20%20%20%20%20datetime%0A%20%20%20%20%20%20%20%20value%0A%20%20%20%20%20%20%7D%0A%20%20%7D%0A%7D>)

Daily active addresses: `makerdao_active_addresses`

```graphql
{
  getMetric(metric: "makerdao_active_addresses"){
    timeseriesData(
      slug: "maker"
      from: "2023-01-01T00:00:00Z"
      to: "2023-01-10T00:00:00Z"
      includeIncompleteData: true
      interval: "1d"){
        datetime
        value
      }
  }
}
```
[Run in Explorer](<https://api.santiment.net/graphiql?query=%7B%0A%20%20getMetric(metric%3A%20%22makerdao_active_addresses%22)%7B%0A%20%20%20%20timeseriesData(%0A%20%20%20%20%20%20slug%3A%20%22maker%22%0A%20%20%20%20%20%20from%3A%20%222023-01-01T00%3A00%3A00Z%22%0A%20%20%20%20%20%20to%3A%20%222023-01-10T00%3A00%3A00Z%22%0A%20%20%20%20%20%20includeIncompleteData%3A%20true%0A%20%20%20%20%20%20interval%3A%20%221d%22)%7B%0A%20%20%20%20%20%20%20%20datetime%0A%20%20%20%20%20%20%20%20value%0A%20%20%20%20%20%20%7D%0A%20%20%7D%0A%7D&variables=%7B%7D>)
