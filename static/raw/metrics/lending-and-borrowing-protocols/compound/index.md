---
title: Compound Protocol
author: Filip
date: 2022-12-05
description: Compound Protocol Metrics
---

## Description
Compound is a decentralized finance (DeFi) protocol built on the Ethereum 
blockchain that allows individuals to lend and borrow digital assets without 
intermediaries. Compound is designed to create a market for lending and borrowing 
digital assets, where users can earn interest by lending their assets and 
borrowers can obtain loans by using their assets as collateral.

### Metrics related to Compound protocol:

Action metrics:
* `compound_action_deposits` - Amount of deposited tokens
* `compound_action_deposits_usd` - Amount of deposited tokens in USD
* `compound_action_liquidations` - Amount of liquidated tokens
* `compound_action_liquidations_usd` - Amount of liquidated tokens in USD
* `compound_action_new_debt` - Amount of borrowed tokens
* `compound_action_new_debt_usd` - Amount of borrowed tokens in USD
* `compound_action_repayments` - Amount of repaid tokens
* `compound_action_repayments_usd` - Amount of repaid tokens in USD

Total supplied/borrowed metrics:
* `compound_total_supplied` - Total supplied tokens
* `compound_total_supplied_usd` - Total supplied tokens in USD
* `compound_total_borrowed` - Total borrowed tokens
* `compound_total_borrowed_usd` - Total borrowed tokens in USD

APY (annual percentage yield) metrics:
* `compound_supply_apy` - Supply APY
* `compound_borrow_apy` - Borrow APY 

Protocol total action metrics:
* `compound_total_deposits_usd` - Total amount of deposits on Compound (combining all assets in USD)
* `compound_total_liquidations_usd` - Total amount of liquidations on Compound (combining all assets in USD)
* `compound_total_new_debt_usd` - Total amount of borrowings on Compound (combining all assets in USD)
* `compound_total_repayments_usd` - Total amount of repayments on Compound (combining all assets in USD)

Protocol total supplied/borrowed metrics:
* `compound_protocol_total_supplied_usd` - Total amount supplied on Compound (combining all assets in USD)
* `compound_protocol_total_borrowed_usd` - Total amount borrowed on Compound (combining all assets in USD)

Daily active addresses:
* `compound_active_addresses` - Daily active addresses on Compound

Revenue metrics:
* `compound_revenue` - Compound Revenue per asset
* `compound_revenue_usd` - Compound Revenue in USD per asset
* `compound_total_protocol_revenue_usd` - Compound Total Protocol Revenue
* `compound_total_protocol_cumulative_revenue_usd` - Daily Compound Total Protocol Cumulative Revenue

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

Metrics related to the entire protocol available for `compound`

Other metrics: 
available for [these assets](<https://api.santiment.net/graphiql?query=%7B%0A%20%20getMetric(metric%3A%20%22compound_action_deposits%22)%7B%0A%20%20%20%20metadata%7B%0A%20%20%20%20%20%20availableSlugs%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D>)

---

### SanAPI

Action metrics: `compound_action_deposits<_usd>`, `compound_action_liquidations<_usd>`, 
`compound_action_new_debt<_usd>` and `compound_action_repayments<_usd>`

```graphql-explorer
{
  getMetric(metric: "compound_action_deposits_usd"){
    timeseriesDataJson(
      slug: "ethereum"
      from: "2022-11-01T00:00:00Z"
      to: "2022-11-03T00:00:00Z"
      includeIncompleteData: true
      interval: "5m")
  }
}
```

Total action metrics: `compound_total_deposits_usd`, `compound_total_liquidations_usd`, 
`compound_total_new_debt_usd` and `compound_total_repayments_usd`

```graphql-explorer
{
  getMetric(metric: "compound_total_new_debt_usd"){
    timeseriesDataJson(
      slug: "compound"
      from: "2022-11-01T00:00:00Z"
      to: "2022-11-03T00:00:00Z"
      includeIncompleteData: true
      interval: "5m")
  }
}
```

Total supplied/borrowed metrics: `compound_total_supplied<_usd>` and 
`compound_total_borrowed<_usd>`

```graphql-explorer
{
  getMetric(metric: "compound_total_supplied"){
    timeseriesDataJson(
      slug: "wrapped-bitcoin"
      from: "2022-11-01T00:00:00Z"
      to: "2022-11-03T00:00:00Z"
      includeIncompleteData: true
      interval: "5m")
  }
}
```

Protocol total supplied/borrowed metrics: `compound_protocol_total_supplied_usd` and 
`compound_protocol_total_borrowed_usd`

```graphql-explorer
{
  getMetric(metric: "compound_protocol_total_supplied_usd"){
    timeseriesDataJson(
      slug: "compound"
      from: "2022-11-01T00:00:00Z"
      to: "2022-11-03T00:00:00Z"
      includeIncompleteData: true
      interval: "5m")
  }
}
```

APY metrics: `compound_supply_apy` and `compound_borrow_apy`

```graphql-explorer
{
  getMetric(metric: "compound_supply_apy"){
    timeseriesDataJson(
      slug: "wrapped-bitcoin"
      from: "2023-01-01T00:00:00Z"
      to: "2023-03-01T00:00:00Z"
      includeIncompleteData: true
      interval: "5m")
  }
}
```

Daily active addresses: `compound_active_addresses`

```graphql-explorer
{
  getMetric(metric: "compound_active_addresses"){
    timeseriesDataJson(
      slug: "compound"
      from: "2023-01-01T00:00:00Z"
      to: "2023-01-10T00:00:00Z"
      includeIncompleteData: true
      interval: "1d")
  }
}
```

Revenue metrics: `compound_revenue`, `compound_revenue_usd`, `compound_total_protocol_revenue_usd`
and `compound_total_protocol_cumulative_revenue_usd`

```graphql-explorer
{
  getMetric(metric: "compound_revenue"){
    timeseriesDataJson(
      slug: "usd-coin"
      from: "2023-01-01T00:00:00Z"
      to: "2023-01-10T00:00:00Z"
      includeIncompleteData: true
      interval: "1d")
  }
}
```
