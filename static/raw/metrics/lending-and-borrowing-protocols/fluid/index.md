---
title: Fluid Protocol
author: Filip
date: 2025-08-01
description: Fluid Protocol Metrics
---

## Description
[Fluid](https://fluid.instadapp.io/) is Instadapp’s innovative lending and borrowing protocol designed to optimize 
capital efficiency in DeFi. Unlike traditional lending platforms, Fluid dynamically adjusts borrowing power and interest 
rates based on real-time market conditions. This allows users to borrow more against their collateral while reducing 
risks of liquidation. The protocol integrates seamlessly with Instadapp, offering deep liquidity and smart automation to 
enhance user experience. By making lending more flexible and efficient, Fluid aims to redefine how DeFi users manage 
their assets.

### Metrics related to Fluid protocol:

Action metrics:
* `fluid_action_deposits` - Amount of deposited tokens
* `fluid_action_deposits_usd` - Amount of deposited tokens in USD
* `fluid_action_liquidations` - Amount of liquidated tokens
* `fluid_action_liquidations_usd` - Amount of liquidated tokens in USD
* `fluid_action_new_debt` - Amount of borrowed tokens
* `fluid_action_new_debt_usd` - Amount of borrowed tokens in USD
* `fluid_action_repayments` - Amount of repaid tokens
* `fluid_action_repayments_usd` - Amount of repaid tokens in USD

Protocol total action metrics:
* `fluid_total_deposits_usd` - Total amount of deposits on Fluid protocol (combining all assets in USD)
* `fluid_total_liquidations_usd` - Total amount of liquidations on Fluid protocol (combining all assets in USD)
* `fluid_total_new_debt_usd` - Total amount of borrowings on Fluid protocol (combining all assets in USD)
* `fluid_total_repayments_usd` - Total amount of repayments on Fluid protocol (combining all assets in USD)

APY (annual percentage yield) metrics:
* `fluid_supply_apy` - Supply APY

Total supplied metrics:
* `fluid_total_supplied` - Total supplied tokens
* `fluid_total_supplied_usd` - Total supplied tokens in USD
* `fluid_protocol_total_supplied_usd` - Total amount supplied on Fluid (combining all assets in USD)

Daily active addresses:
* `fluid_active_addresses` - Daily active addresses on Fluid protocol

---

## Access

[Restricted Access](/metrics/details/access#restricted-access)

---

## Measuring Unit

* Amount in tokens/USD
* APY metric in percentages

---

## Data Type

[Timeseries Data](/metrics/details/data-type#timeseries-data)

---

## Frequency

* [Five-minute Intervals](/metrics/details/frequency#five-minute-frequency) - Actions, supply and APY metrics
* [Daily Intervals](/metrics/details/frequency#daily-frequency) - Active addresses metric

---

## Latency

[On-Chain Latency](/metrics/details/latency#on-chain-latency)

---

## Available Assets

Metrics related to the entire protocol available for `instadapp`.

Other metrics: 
available for [these assets](<https://api.santiment.net/graphiql?query=%7B%0A%20%20getMetric(metric%3A%20%22fluid_action_deposits%22)%7B%0A%20%20%20%20metadata%7B%0A%20%20%20%20%20%20availableSlugs%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D>)

---

### SanAPI

Action metrics: `fluid_action_deposits<_usd>`, `fluid_action_liquidations<_usd>`, 
`fluid_action_new_debt<_usd>` and `fluid_action_repayments<_usd>`

```graphql-explorer
{
  getMetric(metric: "fluid_action_deposits_usd"){
    timeseriesDataJson(
      slug: "ethereum"
      from: "2025-01-01T00:00:00Z"
      to: "2025-02-01T00:00:00Z"
      includeIncompleteData: true
      interval: "1d")
  }
}
```

Total action/supply metrics: `fluid_total_deposits_usd`, `fluid_total_liquidations_usd`, 
`fluid_total_new_debt_usd`, `fluid_total_repayments_usd` and `fluid_protocol_total_supplied_usd`

```graphql-explorer
{
  getMetric(metric: "fluid_total_new_debt_usd"){
    timeseriesDataJson(
      slug: "instadapp"
      from: "2025-01-10T00:00:00Z"
      to: "2025-01-12T00:00:00Z"
      includeIncompleteData: true
      interval: "1h")
  }
}
```

APY metrics: `fluid_supply_apy`

```graphql-explorer
{
  getMetric(metric: "fluid_supply_apy"){
    timeseriesDataJson(
      slug: "ethereum"
      from: "2025-01-10T00:00:00Z"
      to: "2025-01-12T00:00:00Z"
      includeIncompleteData: true
      interval: "1h")
  }
}
```

Total supplied/borrowed metrics: `fluid_total_supplied<_usd>`

```graphql-explorer
{
  getMetric(metric: "fluid_total_supplied"){
    timeseriesDataJson(
      slug: "ethereum"
      from: "2025-01-10T00:00:00Z"
      to: "2025-01-15T00:00:00Z"
      includeIncompleteData: true
      interval: "1d")
  }
}
```


Daily active addresses: `fluid_active_addresses`

```graphql-explorer
{
  getMetric(metric: "fluid_active_addresses"){
    timeseriesDataJson(
      slug: "instadapp"
      from: "2025-01-01T00:00:00Z"
      to: "2025-01-10T00:00:00Z"
      includeIncompleteData: true
      interval: "1d")
  }
}
```
