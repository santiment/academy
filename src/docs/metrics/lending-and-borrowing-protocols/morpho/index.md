---
title: Morpho Protocol
author: Filip
date: 2024-08-01
description: Morpho Protocol Metrics
---

## Description
[Morpho](https://morpho.org/) is a decentralized finance (DeFi) protocol designed to optimize yields in 
lending and borrowing markets. It operates as a layer on top of existing protocols like 
Compound and Aave, improving the efficiency of capital allocation by matching lenders and 
borrowers directly. This direct matching reduces intermediaries, enhancing both the interest 
rates for lenders and borrowers. The protocol aims to offer seamless and more profitable 
interactions within the DeFi ecosystem.

### Metrics related to Morpho protocol:

Action metrics:
* `morpho_action_deposits` - Amount of deposited tokens
* `morpho_action_deposits_usd` - Amount of deposited tokens in USD
* `morpho_action_liquidations` - Amount of liquidated tokens
* `morpho_action_liquidations_usd` - Amount of liquidated tokens in USD
* `morpho_action_new_debt` - Amount of borrowed tokens
* `morpho_action_new_debt_usd` - Amount of borrowed tokens in USD
* `morpho_action_repayments` - Amount of repaid tokens
* `morpho_action_repayments_usd` - Amount of repaid tokens in USD

Protocol total action metrics:
* `morpho_total_deposits_usd` - Total amount of deposits on Morpho protocol (combining all assets in USD)
* `morpho_total_liquidations_usd` - Total amount of liquidations on Morpho protocol (combining all assets in USD)
* `morpho_total_new_debt_usd` - Total amount of borrowings on Morpho protocol (combining all assets in USD)
* `morpho_total_repayments_usd` - Total amount of repayments on Morpho protocol (combining all assets in USD)

Daily active addresses:
* `morpho_active_addresses` - Daily active addresses on Morpho protocol

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

Metrics related to the entire protocol available for `morpho-token`.

Other metrics: 
available for [these assets](<https://api.santiment.net/graphiql?query=%7B%0A%20%20getMetric(metric%3A%20%22morpho_action_deposits%22)%7B%0A%20%20%20%20metadata%7B%0A%20%20%20%20%20%20availableSlugs%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D>)

---

### SanAPI

Action metrics: `morpho_action_deposits<_usd>`, `morpho_action_liquidations<_usd>`, 
`morpho_action_new_debt<_usd>` and `morpho_action_repayments<_usd>`

```graphql
{
  getMetric(metric: "morpho_action_deposits_usd"){
    timeseriesData(
      slug: "weth"
      from: "2024-01-01T00:00:00Z"
      to: "2024-02-01T00:00:00Z"
      includeIncompleteData: true
      interval: "1d"){
        datetime
        value
      }
  }
}
```
[Run in Explorer](<https://api.santiment.net/graphiql?query=%7B%0A%20%20getMetric(metric%3A%20%22morpho_action_deposits_usd%22)%7B%0A%20%20%20%20timeseriesData(%0A%20%20%20%20%20%20slug%3A%20%22weth%22%0A%20%20%20%20%20%20from%3A%20%222024-01-01T00%3A00%3A00Z%22%0A%20%20%20%20%20%20to%3A%20%222024-02-01T00%3A00%3A00Z%22%0A%20%20%20%20%20%20includeIncompleteData%3A%20true%0A%20%20%20%20%20%20interval%3A%20%221d%22)%7B%0A%20%20%20%20%20%20%20%20datetime%0A%20%20%20%20%20%20%20%20value%0A%20%20%20%20%20%20%7D%0A%20%20%7D%0A%7D>)

Total action metrics: `morpho_total_deposits_usd`, `morpho_total_liquidations_usd`, 
`morpho_total_new_debt_usd` and `morpho_total_repayments_usd`

```graphql
{
  getMetric(metric: "morpho_total_new_debt_usd"){
    timeseriesData(
      slug: "morpho-token"
      from: "2024-01-10T00:00:00Z"
      to: "2024-01-12T00:00:00Z"
      includeIncompleteData: true
      interval: "1h"){
        datetime
        value
      }
  }
}
```
[Run in Explorer](<https://api.santiment.net/graphiql?query=%7B%0A%20%20getMetric(metric%3A%20%22morpho_total_new_debt_usd%22)%7B%0A%20%20%20%20timeseriesData(%0A%20%20%20%20%20%20slug%3A%20%22morpho-token%22%0A%20%20%20%20%20%20from%3A%20%222024-01-10T00%3A00%3A00Z%22%0A%20%20%20%20%20%20to%3A%20%222024-01-12T00%3A00%3A00Z%22%0A%20%20%20%20%20%20includeIncompleteData%3A%20true%0A%20%20%20%20%20%20interval%3A%20%221h%22)%7B%0A%20%20%20%20%20%20%20%20datetime%0A%20%20%20%20%20%20%20%20value%0A%20%20%20%20%20%20%7D%0A%20%20%7D%0A%7D>)

Daily active addresses: `morpho_active_addresses`

```graphql
{
  getMetric(metric: "morpho_active_addresses"){
    timeseriesData(
      slug: "morpho-token"
      from: "2024-01-01T00:00:00Z"
      to: "2024-01-10T00:00:00Z"
      includeIncompleteData: true
      interval: "1d"){
        datetime
        value
      }
  }
}
```
[Run in Explorer](<https://api.santiment.net/graphiql?query=%7B%0A%20%20getMetric(metric%3A%20%22morpho_active_addresses%22)%7B%0A%20%20%20%20timeseriesData(%0A%20%20%20%20%20%20slug%3A%20%22morpho-token%22%0A%20%20%20%20%20%20from%3A%20%222024-08-01T00%3A00%3A00Z%22%0A%20%20%20%20%20%20to%3A%20%222024-08-10T00%3A00%3A00Z%22%0A%20%20%20%20%20%20includeIncompleteData%3A%20true%0A%20%20%20%20%20%20interval%3A%20%221d%22)%7B%0A%20%20%20%20%20%20%20%20datetime%0A%20%20%20%20%20%20%20%20value%0A%20%20%20%20%20%20%7D%0A%20%20%7D%0A%7D>)