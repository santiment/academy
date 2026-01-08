---
title: Aave V3 Protocol
author: Filip
date: 2023-04-27
description: Aave V3 Protocol Metrics
---

## Description
AAVE v3 refers to the third version of the [Aave](https://aave.com/) protocol, 
which is a decentralized lending and borrowing platform built on the Ethereum 
blockchain. AAVE v3 was released in December 2020, and it introduced several new 
features and improvements over the previous versions of the protocol.

Some of the notable changes introduced in AAVE v3 include:
* Introduction of "Elastic Interest Rates": This feature enables the interest 
rates to adjust automatically based on the supply and demand for each asset on 
the platform, ensuring that the rates are always market-driven and competitive.
* Improved User Interface: The user interface of AAVE v3 was redesigned to make 
it more intuitive and user-friendly, making it easier for users to navigate and 
use the platform.
* Gas optimizations: AAVE v3 was designed with gas optimizations in mind, making 
it more cost-efficient for users to interact with the platform.


### Metrics related to Aave v3 protocol:

Action metrics:
* `aave_v3_action_deposits` - Amount of deposited tokens
* `aave_v3_action_deposits_usd` - Amount of deposited tokens in USD
* `aave_v3_action_liquidations` - Amount of liquidated tokens
* `aave_v3_action_liquidations_usd` - Amount of liquidated tokens in USD
* `aave_v3_action_new_debt` - Amount of borrowed tokens
* `aave_v3_action_new_debt_usd` - Amount of borrowed tokens in USD
* `aave_v3_action_repayments` - Amount of repaid tokens
* `aave_v3_action_repayments_usd` - Amount of repaid tokens in USD

Total supplied/borrowed metrics:
* `aave_v3_total_supplied` - Total supplied tokens
* `aave_v3_total_supplied_usd` - Total supplied tokens in USD
* `aave_v3_total_borrowed` - Total borrowed tokens
* `aave_v3_total_borrowed_usd` - Total borrowed tokens in USD

APY (annual percentage yield) metrics:
* `aave_v3_supply_apy` - Supply APY
* `aave_v3_variable_borrow_apy` - Variable borrow APY (variable interest rate will fluctuate based on the market conditions)

Protocol total action metrics:
* `aave_v3_total_deposits_usd` - Total amount of deposits on Aave V3 (combining all assets in USD)
* `aave_v3_total_liquidations_usd` - Total amount of liquidations on Aave V3 (combining all assets in USD)
* `aave_v3_total_new_debt_usd` - Total amount of borrowings on Aave V3 (combining all assets in USD)
* `aave_v3_total_repayments_usd` - Total amount of repayments on Aave V3 (combining all assets in USD)

Protocol total supplied/borrowed metrics:
* `aave_v3_protocol_total_supplied_usd` - Total amount supplied on Aave V3 (combining all assets in USD)
* `aave_v3_protocol_total_borrowed_usd` - Total amount borrowed on Aave V3 (combining all assets in USD)

Daily active addresses:
* `aave_v3_active_addresses` - Daily active addresses on Aave V3

Revenue metrics:
* `aave_v3_revenue` - Aave V3 Revenue per asset
* `aave_v3_revenue_usd` - Aave V3 Revenue in USD per asset
* `aave_v3_total_protocol_revenue_usd` - Aave V3 Total Protocol Revenue
* `aave_v3_total_protocol_cumulative_revenue_usd` - Daily Aave V3 Total Protocol Cumulative Revenue

Flashloan metrics:
* `aave_v3_flashloan` - Flashloan volume by asset
* `aave_v3_flashloan_usd` - Flashloan volume by asset in USD
* `aave_v3_total_flashloan_usd` - Total flashloan volume across Aave V3 in USD

---

## Access

[Restricted Access](/metrics/details/access#restricted-access).

---

## Measuring Unit

* Amount in tokens/USD
* APY metrics in percentages

---

## Data Type

[Timeseries Data](/metrics/details/data-type#timeseries-data)

---

## Frequency

* [Five-minute Intervals](/metrics/details/frequency#five-minute-frequency) - Actions, supply, borrow, and APY metrics
* [Daily Intervals](/metrics/details/frequency#daily-frequency) - Revenue and active addresses metrics

---

## Latency

[On-Chain Latency](/metrics/details/latency#on-chain-latency)

---

## Available Assets

Metrics related to the entire protocol available for `aave`

Other metrics: 
available for [these assets](<https://api.santiment.net/graphiql?query=%7B%0A%20%20getMetric(metric%3A%20%22aave_v3_action_deposits%22)%7B%0A%20%20%20%20metadata%7B%0A%20%20%20%20%20%20availableSlugs%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D>)

---

### SanAPI

Action metrics: `aave_v3_action_deposits<_usd>`, `aave_v3_action_liquidations<_usd>`, 
`aave_v3_action_new_debt<_usd>` and `aave_v3_action_repayments<_usd>`

```graphql-explorer
{
  getMetric(metric: "aave_v3_action_deposits_usd"){
    timeseriesDataJson(
      slug: "weth"
      from: "2023-04-01T00:00:00Z"
      to: "2023-04-07T00:00:00Z"
      includeIncompleteData: true
      interval: "5m")
  }
}
```

Total action metrics: `aave_v3_total_deposits_usd`, `aave_v3_total_liquidations_usd`, 
`aave_v3_total_new_debt_usd` and `aave_v3_total_repayments_usd`

```graphql-explorer
{
  getMetric(metric: "aave_v3_total_new_debt_usd"){
    timeseriesDataJson(
      slug: "aave"
      from: "2023-04-01T00:00:00Z"
      to: "2023-04-07T00:00:00Z"
      includeIncompleteData: true
      interval: "5m")
  }
}
```

Total supplied/borrowed metrics: `aave_v3_total_supplied<_usd>` and 
`aave_v3_total_borrowed<_usd>`

```graphql-explorer
{
  getMetric(metric: "aave_v3_total_supplied"){
    timeseriesDataJson(
      slug: "wrapped-bitcoin"
      from: "2023-04-01T00:00:00Z"
      to: "2023-04-07T00:00:00Z"
      includeIncompleteData: true
      interval: "5m")
  }
}
```

Protocol total supplied/borrowed metrics: `aave_v3_protocol_total_supplied_usd` and 
`aave_v3_protocol_total_borrowed_usd`

```graphql-explorer
{
  getMetric(metric: "aave_v3_protocol_total_supplied_usd"){
    timeseriesDataJson(
      slug: "aave"
      from: "2023-04-01T00:00:00Z"
      to: "2023-04-07T00:00:00Z"
      includeIncompleteData: true
      interval: "5m")
  }
}
```

APY metrics: `aave_v3_supply_apy` and `aave_v3_variable_borrow_apy`

```graphql-explorer
{
  getMetric(metric: "aave_v3_supply_apy"){
    timeseriesDataJson(
      slug: "wrapped-bitcoin"
      from: "2023-04-01T00:00:00Z"
      to: "2023-04-07T00:00:00Z"
      includeIncompleteData: true
      interval: "5m")
  }
}
```

Daily active addresses: `aave_v3_active_addresses`

```graphql-explorer
{
  getMetric(metric: "aave_v3_active_addresses"){
    timeseriesDataJson(
      slug: "aave"
      from: "2023-03-01T00:00:00Z"
      to: "2023-03-10T00:00:00Z"
      includeIncompleteData: true
      interval: "1d")
  }
}
```

Revenue metrics: `aave_v3_revenue`, `aave_v3_revenue_usd`, `aave_v3_total_protocol_revenue_usd`
and `aave_v3_total_protocol_cumulative_revenue_usd`

```graphql-explorer
{
  getMetric(metric: "aave_v3_revenue"){
    timeseriesDataJson(
      slug: "usd-coin"
      from: "2023-01-01T00:00:00Z"
      to: "2023-01-10T00:00:00Z"
      includeIncompleteData: true
      interval: "1d")
  }
}
```

Flashloan metrics: `aave_v3_flashloan`, `aave_v3_flashloan_usd` and `aave_v3_total_flashloan_usd`

```graphql-explorer
{
  getMetric(metric: "aave_v3_flashloan"){
    timeseriesDataJson(
      slug: "usd-coin"
      from: "2026-01-01T00:00:00Z"
      to: "2026-01-10T00:00:00Z"
      includeIncompleteData: true
      interval: "5m")
  }
}
```
