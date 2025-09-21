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

Morpho vaults metrics:
* `morpho_vaults_total_supplied_usd` - [Morpho vault](https://api.santiment.net/graphiql?variables=%7B%7D&query=%7B%0A%20%20getMetric(metric%3A%20%22morpho_vaults_total_supplied_usd%22)%20%7B%0A%20%20%20%20metadata%20%7B%0A%20%20%20%20%20%20availableLabelFqns%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D) total supplied in USD
* `morpho_vaults_apy` - [Morpho vault](https://api.santiment.net/graphiql?variables=%7B%7D&query=%7B%0A%20%20getMetric(metric%3A%20%22morpho_vaults_total_supplied_usd%22)%20%7B%0A%20%20%20%20metadata%20%7B%0A%20%20%20%20%20%20availableLabelFqns%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D) APY

Protocol total supplied/borrowed metrics:
* `morpho_protocol_total_supplied_usd` - Total amount supplied on Morpho (combining all assets in USD)
* `morpho_protocol_total_borrowed_usd` - Total amount borrowed on Morpho (combining all assets in USD)

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

Metrics related to the entire protocol available for `morpho`.

Other metrics: 
available for [these assets](<https://api.santiment.net/graphiql?query=%7B%0A%20%20getMetric(metric%3A%20%22morpho_action_deposits%22)%7B%0A%20%20%20%20metadata%7B%0A%20%20%20%20%20%20availableSlugs%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D>)

---

### SanAPI

Action metrics: `morpho_action_deposits<_usd>`, `morpho_action_liquidations<_usd>`, 
`morpho_action_new_debt<_usd>` and `morpho_action_repayments<_usd>`

```graphql-explorer
{
  getMetric(metric: "morpho_action_deposits_usd"){
    timeseriesDataJson(
      slug: "weth"
      from: "2024-01-01T00:00:00Z"
      to: "2024-02-01T00:00:00Z"
      includeIncompleteData: true
      interval: "1d")
  }
}
```

Total action metrics: `morpho_total_deposits_usd`, `morpho_total_liquidations_usd`, 
`morpho_total_new_debt_usd` and `morpho_total_repayments_usd`

```graphql-explorer
{
  getMetric(metric: "morpho_total_new_debt_usd"){
    timeseriesDataJson(
      slug: "morpho"
      from: "2024-01-10T00:00:00Z"
      to: "2024-01-12T00:00:00Z"
      includeIncompleteData: true
      interval: "1h")
  }
}
```

Morpho vaults total supplied metric: `morpho_vaults_total_supplied_usd`

```graphql-explorer
{
  getMetric(metric: "morpho_vaults_total_supplied_usd"){
    timeseriesDataJson(
      selector:{
        slug:"morpho" 
        labelFqn: "santiment/morpho_vault->steakhouse usdc:v1"
      }
      from: "2024-10-01T00:00:00Z"
      to: "2024-10-10T00:00:00Z"
      includeIncompleteData: true
      interval: "1h")
  }
}
```

Morpho vaults APY metric: `morpho_vaults_apy`

```graphql-explorer
{
  getMetric(metric: "morpho_vaults_apy"){
    timeseriesDataJson(
      selector:{
        slug:"morpho" 
        labelFqn: "santiment/morpho_vault->steakhouse usdc:v1"
      }
      from: "2025-09-01T00:00:00Z"
      to: "2025-10-10T00:00:00Z"
      includeIncompleteData: true
      interval: "1d")
  }
}
```

Protocol total supplied/borrowed metrics: `morpho_protocol_total_supplied_usd` and 
`morpho_protocol_total_borrowed_usd`

```graphql-explorer
{
  getMetric(metric: "morpho_protocol_total_supplied_usd"){
    timeseriesDataJson(
      slug: "morpho"
      from: "2025-09-01T00:00:00Z"
      to: "2025-09-07T00:00:00Z"
      includeIncompleteData: true
      interval: "5m")
  }
}
```

Daily active addresses: `morpho_active_addresses`

```graphql-explorer
{
  getMetric(metric: "morpho_active_addresses"){
    timeseriesDataJson(
      slug: "morpho"
      from: "2024-01-01T00:00:00Z"
      to: "2024-01-10T00:00:00Z"
      includeIncompleteData: true
      interval: "1d")
  }
}
```
