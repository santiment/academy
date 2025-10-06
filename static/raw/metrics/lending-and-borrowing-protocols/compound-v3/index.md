---
title: Compound V3 Protocol
author: Filip
date: 2023-09-01
description: Compound V3 Protocol Metrics
---

## Description
Compound V3 is the third version of the [Compound](https://compound.finance/) protocol.
New version represents a significant shift in the DeFi landscape by introducing 
a unified borrowing market model. In this model, the base asset can be borrowed 
against other assets.

Currently, there are three markets: the ETH market, the USDC market, and the USDT market. 
In each market, users can provide different assets as collateral and borrow the market's 
asset (WETH, USDC, or USDT).

This transformation carries several advantages. First, it enhances security 
for users across all assets within the Compound ecosystem. Second, it allows 
for increased collateral ratios, providing more flexibility for borrowers. 
This also decreases the liability for each market since all debt is settled in 
the form of assets.

### Metrics related to Compound protocol:

Action metrics:
* `compound_v3_action_deposits` - Amount of deposited tokens
* `compound_v3_action_deposits_usd` - Amount of deposited tokens in USD
* `compound_v3_action_liquidations` - Amount of liquidated tokens
* `compound_v3_action_liquidations_usd` - Amount of liquidated tokens in USD
* `compound_v3_action_new_debt` - Amount of borrowed tokens
* `compound_v3_action_new_debt_usd` - Amount of borrowed tokens in USD
* `compound_v3_action_repayments` - Amount of repaid tokens
* `compound_v3_action_repayments_usd` - Amount of repaid tokens in USD

Total supplied/borrowed metrics:
* `compound_v3_collateral_total_supplied` - Total supplied tokens for the collateral asset
* `compound_v3_collateral_total_supplied_usd` - Total supplied tokens in USD for the collateral asset
* `compound_v3_total_supplied` - Total supplied tokens for the market asset
* `compound_v3_total_supplied_usd` - Total supplied tokens in USD for the market asset
* `compound_v3_total_borrowed` - Total borrowed tokens
* `compound_v3_total_borrowed_usd` - Total borrowed tokens in USD

APY (annual percentage yield) metrics:
* `compound_v3_supply_apy` - Supply APY
* `compound_v3_borrow_apy` - Borrow APY

Protocol total action metrics:
* `compound_v3_total_deposits_usd` - Total amount of deposits on Compound V3 (combining all assets in USD)
* `compound_v3_total_liquidations_usd` - Total amount of liquidations on Compound V3 (combining all assets in USD)
* `compound_v3_total_new_debt_usd` - Total amount of borrowings on Compound V3 (combining all assets in USD)
* `compound_v3_total_repayments_usd` - Total amount of repayments on Compound V3 (combining all assets in USD)

Protocol total supplied/borrowed metrics:
* `compound_v3_protocol_total_supplied_usd` - Total amount supplied on Compound V3 (combining all assets in USD)
* `compound_v3_protocol_total_borrowed_usd` - Total amount borrowed on Compound V3 (combining all assets in USD)

Daily active addresses:
* `compound_v3_active_addresses` - Daily active addresses on Compound V3

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

[Five-minute Intervals](/metrics/details/frequency#five-minute-frequency)

---

## Latency

[On-Chain Latency](/metrics/details/latency#on-chain-latency)

---

## Available Assets

Metrics related to the entire protocol available for `compound`

Other metrics: 
available for [these assets](<https://api.santiment.net/graphiql?query=%7B%0A%20%20getMetric(metric%3A%20%22compound_v3_action_deposits%22)%7B%0A%20%20%20%20metadata%7B%0A%20%20%20%20%20%20availableSlugs%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D>)

---

### SanAPI

Action metrics: `compound_v3_action_deposits<_usd>`, `compound_v3_action_liquidations<_usd>`, 
`compound_v3_action_new_debt<_usd>` and `compound_v3_action_repayments<_usd>`

```graphql-explorer
{
  getMetric(metric: "compound_v3_action_deposits_usd"){
    timeseriesDataJson(
      slug: "wrapped-bitcoin"
      from: "2023-08-01T00:00:00Z"
      to: "2023-08-03T00:00:00Z"
      includeIncompleteData: true
      interval: "5m")
  }
}
```

Total action metrics: `compound_v3_total_deposits_usd`, `compound_v3_total_liquidations_usd`, 
`compound_v3_total_new_debt_usd` and `compound_v3_total_repayments_usd`

```graphql-explorer
{
  getMetric(metric: "compound_v3_total_new_debt_usd"){
    timeseriesDataJson(
      slug: "compound"
      from: "2023-08-01T00:00:00Z"
      to: "2023-08-03T00:00:00Z"
      includeIncompleteData: true
      interval: "5m")
  }
}
```

Total supplied/borrowed metrics: `compound_v3_collateral_total_supplied<_usd>`, 
`compound_v3_total_supplied<_usd>` and `compound_v3_total_borrowed<_usd>`

```graphql-explorer
{
  getMetric(metric: "compound_v3_collateral_total_supplied"){
    timeseriesDataJson(
      slug: "wrapped-bitcoin"
      from: "2023-08-01T00:00:00Z"
      to: "2023-08-03T00:00:00Z"
      includeIncompleteData: true
      interval: "5m")
  }
}
```

Protocol total supplied/borrowed metrics: `compound_v3_protocol_total_supplied_usd` and 
`compound_v3_protocol_total_borrowed_usd`

```graphql-explorer
{
  getMetric(metric: "compound_v3_protocol_total_supplied_usd"){
    timeseriesDataJson(
      slug: "compound"
      from: "2023-08-01T00:00:00Z"
      to: "2023-08-03T00:00:00Z"
      includeIncompleteData: true
      interval: "5m")
  }
}
```

APY metrics: `compound_v3_supply_apy` and `compound_v3_borrow_apy`

```graphql-explorer
{
  getMetric(metric: "compound_v3_supply_apy"){
    timeseriesDataJson(
      slug: "usd-coin"
      from: "2023-08-01T00:00:00Z"
      to: "2023-08-07T00:00:00Z"
      includeIncompleteData: true
      interval: "5m")
  }
}
```

Daily active addresses: `compound_v3_active_addresses`

```graphql-explorer
{
  getMetric(metric: "compound_v3_active_addresses"){
    timeseriesDataJson(
      slug: "compound"
      from: "2023-08-01T00:00:00Z"
      to: "2023-08-10T00:00:00Z"
      includeIncompleteData: true
      interval: "1d")
  }
}
```
