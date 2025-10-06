---
title: Fraxlend Protocol
author: Filip
date: 2024-07-01
description: Fraxlend Protocol Metrics
---

## Description
[Fraxlend](https://app.frax.finance/fraxlend) Protocol is a decentralized lending and borrowing 
platform designed to facilitate efficient and secure financial transactions within the DeFi 
ecosystem. It operates by allowing users to lend their digital assets to earn interest or borrow 
against their holdings, leveraging the stability and flexibility of the FRAX stablecoin. The 
protocol employs smart contracts to ensure transparency, security, and automation of all lending 
activities, minimizing risks associated with traditional financial systems.

### Metrics related to Fraxlend protocol:

Action metrics:
* `fraxlend_action_deposits` - Amount of deposited tokens
* `fraxlend_action_deposits_usd` - Amount of deposited tokens in USD
* `fraxlend_action_liquidations` - Amount of liquidated tokens
* `fraxlend_action_liquidations_usd` - Amount of liquidated tokens in USD
* `fraxlend_action_new_debt` - Amount of borrowed tokens
* `fraxlend_action_new_debt_usd` - Amount of borrowed tokens in USD
* `fraxlend_action_repayments` - Amount of repaid tokens
* `fraxlend_action_repayments_usd` - Amount of repaid tokens in USD

Total supplied/borrowed metrics:
* `fraxlend_total_supplied` - Total supplied tokens
* `fraxlend_total_supplied_usd` - Total supplied tokens in USD
* `fraxlend_total_borrowed_against_collateral` - Total FRAX borrowed against collateral

APY (annual percentage yield) metric:
* `fraxlend_borrow_apy` - Variable borrow APY (variable interest rate will fluctuate based on the market conditions)

Protocol total action metrics:
* `fraxlend_total_deposits_usd` - Total amount of deposits on Fraxlend protocol (combining all assets in USD)
* `fraxlend_total_liquidations_usd` - Total amount of liquidations on Fraxlend protocol (combining all assets in USD)
* `fraxlend_total_new_debt_usd` - Total amount of borrowings on Fraxlend protocol (combining all assets in USD)
* `fraxlend_total_repayments_usd` - Total amount of repayments on Fraxlend protocol (combining all assets in USD)

Protocol total supplied/borrowed metrics:
* `fraxlend_protocol_total_supplied_usd` - Total amount supplied on Fraxlend (combining all assets in USD)
* `fraxlend_protocol_total_borrowed_usd` - Total amount borrowed on Fraxlend (combining all assets in USD)

Daily active addresses:
* `fraxlend_active_addresses` - Daily active addresses on Fraxlend protocol

---

## Access

[Restricted Access](/metrics/details/access#restricted-access)

---

## Measuring Unit

* Amount in tokens/USD
* Borrow APY metric in percentage

---

## Data Type

[Timeseries Data](/metrics/details/data-type#timeseries-data)

---

## Frequency

* [Five-minute Intervals](/metrics/details/frequency#five-minute-frequency) - Actions and APY metrics
* [Daily Intervals](/metrics/details/frequency#daily-frequency) - Active addresses metric

---

## Latency

[On-Chain Latency](/metrics/details/latency#on-chain-latency)

---

## Available Assets

Metrics related to the entire protocol available for `frax`

Other metrics: 
available for [these assets](<https://api.santiment.net/graphiql?query=%7B%0A%20%20getMetric(metric%3A%20%22fraxlend_action_deposits%22)%7B%0A%20%20%20%20metadata%7B%0A%20%20%20%20%20%20availableSlugs%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D>)

---

### SanAPI

Action metrics: `fraxlend_action_deposits<_usd>`, `fraxlend_action_liquidations<_usd>`, 
`fraxlend_action_new_debt<_usd>` and `fraxlend_action_repayments<_usd>`

```graphql-explorer
{
  getMetric(metric: "fraxlend_action_deposits_usd"){
    timeseriesDataJson(
      slug: "weth"
      from: "2024-01-01T00:00:00Z"
      to: "2024-02-01T00:00:00Z"
      includeIncompleteData: true
      interval: "1d")
  }
}
```


Total action metrics: `fraxlend_total_deposits_usd`, `fraxlend_total_liquidations_usd`, 
`fraxlend_total_new_debt_usd` and `fraxlend_total_repayments_usd`

```graphql-explorer
{
  getMetric(metric: "fraxlend_total_new_debt_usd"){
    timeseriesDataJson(
      slug: "frax"
      from: "2024-01-10T00:00:00Z"
      to: "2024-01-12T00:00:00Z"
      includeIncompleteData: true
      interval: "1h")
  }
}
```

Total supplied/borrowed metrics: `fraxlend_total_supplied<_usd>` and 
`fraxlend_total_borrowed_against_collateral`

```graphql-explorer
{
  getMetric(metric: "fraxlend_total_supplied"){
    timeseriesDataJson(
      slug: "wrapped-bitcoin"
      from: "2024-11-01T00:00:00Z"
      to: "2024-11-07T00:00:00Z"
      includeIncompleteData: true
      interval: "5m")
  }
}
```

Protocol total supplied/borrowed metrics: `fraxlend_protocol_total_supplied_usd` and 
`fraxlend_protocol_total_borrowed_usd`

```graphql-explorer
{
  getMetric(metric: "fraxlend_protocol_total_supplied_usd"){
    timeseriesDataJson(
      slug: "frax"
      from: "2024-11-01T00:00:00Z"
      to: "2024-11-07T00:00:00Z"
      includeIncompleteData: true
      interval: "5m")
  }
}
```


APY metric: `fraxlend_borrow_apy`

```graphql-explorer
{
  getMetric(metric: "fraxlend_borrow_apy"){
    timeseriesDataJson(
      slug: "wrapped-bitcoin"
      from: "2024-01-01T00:00:00Z"
      to: "2024-01-03T00:00:00Z"
      includeIncompleteData: true
      interval: "5m")
  }
}
```


Daily active addresses: `fraxlend_active_addresses`

```graphql-explorer
{
  getMetric(metric: "fraxlend_active_addresses"){
    timeseriesDataJson(
      slug: "frax"
      from: "2024-01-01T00:00:00Z"
      to: "2024-01-10T00:00:00Z"
      includeIncompleteData: true
      interval: "1d")
  }
}
```

