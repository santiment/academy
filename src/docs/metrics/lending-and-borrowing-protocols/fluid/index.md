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

Daily active addresses:
* `fluid_active_addresses` - Daily active addresses on Fluid protocol

---

## Access

[Restricted Access](/metrics/details/access#restricted-access)

---

## Measuring Unit

* Amount in tokens/USD

---

## Data Type

[Timeseries Data](/metrics/details/data-type#timeseries-data)

---

## Frequency

* [Five-minute Intervals](/metrics/details/frequency#five-minute-frequency) - Actions metrics
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

```graphql
{
  getMetric(metric: "fluid_action_deposits_usd"){
    timeseriesData(
      slug: "weth"
      from: "2025-01-01T00:00:00Z"
      to: "2025-02-01T00:00:00Z"
      includeIncompleteData: true
      interval: "1d"){
        datetime
        value
      }
  }
}
```
[Run in Explorer](<https://api.santiment.net/graphiql?query=%7B%0A%20%20getMetric(metric%3A%20%22fluid_action_deposits_usd%22)%7B%0A%20%20%20%20timeseriesData(%0A%20%20%20%20%20%20slug%3A%20%22weth%22%0A%20%20%20%20%20%20from%3A%20%222025-01-01T00%3A00%3A00Z%22%0A%20%20%20%20%20%20to%3A%20%222025-02-01T00%3A00%3A00Z%22%0A%20%20%20%20%20%20includeIncompleteData%3A%20true%0A%20%20%20%20%20%20interval%3A%20%221d%22)%7B%0A%20%20%20%20%20%20%20%20datetime%0A%20%20%20%20%20%20%20%20value%0A%20%20%20%20%20%20%7D%0A%20%20%7D%0A%7D>)

Total action metrics: `fluid_total_deposits_usd`, `fluid_total_liquidations_usd`, 
`fluid_total_new_debt_usd` and `fluid_total_repayments_usd`

```graphql
{
  getMetric(metric: "fluid_total_new_debt_usd"){
    timeseriesData(
      slug: "fluid-token"
      from: "2025-01-10T00:00:00Z"
      to: "2025-01-12T00:00:00Z"
      includeIncompleteData: true
      interval: "1h"){
        datetime
        value
      }
  }
}
```
[Run in Explorer](<https://api.santiment.net/graphiql?query=%7B%0A%20%20getMetric(metric%3A%20%22fluid_total_new_debt_usd%22)%7B%0A%20%20%20%20timeseriesData(%0A%20%20%20%20%20%20slug%3A%20%22fluid-token%22%0A%20%20%20%20%20%20from%3A%20%222025-01-10T00%3A00%3A00Z%22%0A%20%20%20%20%20%20to%3A%20%222025-01-12T00%3A00%3A00Z%22%0A%20%20%20%20%20%20includeIncompleteData%3A%20true%0A%20%20%20%20%20%20interval%3A%20%221h%22)%7B%0A%20%20%20%20%20%20%20%20datetime%0A%20%20%20%20%20%20%20%20value%0A%20%20%20%20%20%20%7D%0A%20%20%7D%0A%7D>)

Daily active addresses: `fluid_active_addresses`

```graphql
{
  getMetric(metric: "fluid_active_addresses"){
    timeseriesData(
      slug: "instadapp"
      from: "2025-01-01T00:00:00Z"
      to: "2025-01-10T00:00:00Z"
      includeIncompleteData: true
      interval: "1d"){
        datetime
        value
      }
  }
}
```
[Run in Explorer](<https://api.santiment.net/graphiql?query=%7B%0A%20%20getMetric(metric%3A%20%22fluid_active_addresses%22)%7B%0A%20%20%20%20timeseriesData(%0A%20%20%20%20%20%20slug%3A%20%22instadapp%22%0A%20%20%20%20%20%20from%3A%20%222025-01-01T00%3A00%3A00Z%22%0A%20%20%20%20%20%20to%3A%20%222025-01-10T00%3A00%3A00Z%22%0A%20%20%20%20%20%20includeIncompleteData%3A%20true%0A%20%20%20%20%20%20interval%3A%20%221d%22)%7B%0A%20%20%20%20%20%20%20%20datetime%0A%20%20%20%20%20%20%20%20value%0A%20%20%20%20%20%20%7D%0A%20%20%7D%0A%7D>)
