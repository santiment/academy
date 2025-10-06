---
title: Aave V2 Protocol
author: Filip
date: 2022-12-05
description: Aave V2 Protocol Metrics
---

## Description
Aave V2 is the second version of the [Aave](https://aave.com/) protocol.

One of the key new features of Aave V2 is "stable-rate borrowing," which allows 
users to lock in a fixed interest rate for their loans rather than being subject 
to the variable interest rates that are common in DeFi lending. 
This makes borrowing more predictable and stable, reducing the risk of 
sudden interest rate spikes that can make loans more expensive to repay.

### Metrics related to Aave v2 protocol:

Action metrics:
* `aave_v2_action_deposits` - Amount of deposited tokens
* `aave_v2_action_deposits_usd` - Amount of deposited tokens in USD
* `aave_v2_action_liquidations` - Amount of liquidated tokens
* `aave_v2_action_liquidations_usd` - Amount of liquidated tokens in USD
* `aave_v2_action_new_debt` - Amount of borrowed tokens
* `aave_v2_action_new_debt_usd` - Amount of borrowed tokens in USD
* `aave_v2_action_repayments` - Amount of repaid tokens
* `aave_v2_action_repayments_usd` - Amount of repaid tokens in USD

Total supplied/borrowed metrics:
* `aave_v2_total_supplied` - Total supplied tokens
* `aave_v2_total_supplied_usd` - Total supplied tokens in USD
* `aave_v2_total_borrowed` - Total borrowed tokens
* `aave_v2_total_borrowed_usd` - Total borrowed tokens in USD

APY (annual percentage yield) metrics:
* `aave_v2_supply_apy` - Supply APY
* `aave_v2_stable_borrow_apy` - Stable borrow APY (stable interest rate will stay the same for the duration of the loan)
* `aave_v2_variable_borrow_apy` - Variable borrow APY (variable interest rate will fluctuate based on the market conditions)

Protocol total action metrics:
* `aave_v2_total_deposits_usd` - Total amount of deposits on Aave V2 (combining all assets in USD)
* `aave_v2_total_liquidations_usd` - Total amount of liquidations on Aave V2 (combining all assets in USD)
* `aave_v2_total_new_debt_usd` - Total amount of borrowings on Aave V2 in USD (combining all assets in USD)
* `aave_v2_total_repayments_usd` - Total amount of repayments on Aave V2 in USD (combining all assets in USD)

Protocol total supplied/borrowed metrics:
* `aave_v2_protocol_total_supplied_usd` - Total amount supplied on Aave V2 (combining all assets in USD)
* `aave_v2_protocol_total_borrowed_usd` - Total amount borrowed on Aave V2 (combining all assets in USD)

Daily active addresses:
* `aave_v2_active_addresses` - Daily active addresses on Aave V2

Revenue metrics:
* `aave_v2_revenue` - Aave V2 Revenue per asset
* `aave_v2_revenue_usd` - Aave V2 Revenue in USD per asset
* `aave_v2_total_protocol_revenue_usd` - Aave V2 Total Protocol Revenue
* `aave_v2_total_protocol_cumulative_revenue_usd` - Daily Aave V2 Total Protocol Cumulative Revenue

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
available for [these assets](<https://api.santiment.net/graphiql?query=%7B%0A%20%20getMetric(metric%3A%20%22aave_v2_action_deposits%22)%7B%0A%20%20%20%20metadata%7B%0A%20%20%20%20%20%20availableSlugs%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D>)

---

### SanAPI

Action metrics: `aave_v2_action_deposits<_usd>`, `aave_v2_action_liquidations<_usd>`, 
`aave_v2_action_new_debt<_usd>` and `aave_v2_action_repayments<_usd>`

```graphql-explorer
{
  getMetric(metric: "aave_v2_action_deposits_usd"){
    timeseriesDataJson(
      slug: "weth"
      from: "2022-11-01T00:00:00Z"
      to: "2022-11-03T00:00:00Z"
      includeIncompleteData: true
      interval: "5m")
  }
}
```

Total action metrics: `aave_v2_total_deposits_usd`, `aave_v2_total_liquidations_usd`, 
`aave_v2_total_new_debt_usd` and `aave_v2_total_repayments_usd`

```graphql-explorer
{
  getMetric(metric: "aave_v2_total_new_debt_usd"){
    timeseriesDataJson(
      slug: "aave"
      from: "2022-11-01T00:00:00Z"
      to: "2022-11-03T00:00:00Z"
      includeIncompleteData: true
      interval: "5m")
  }
}
```

Total supplied/borrowed metrics: `aave_v2_total_supplied<_usd>` and 
`aave_v2_total_borrowed<_usd>`

```graphql-explorer
{
  getMetric(metric: "aave_v2_total_supplied"){
    timeseriesDataJson(
      slug: "wrapped-bitcoin"
      from: "2022-11-01T00:00:00Z"
      to: "2022-11-03T00:00:00Z"
      includeIncompleteData: true
      interval: "5m")
  }
}
```

Protocol total supplied/borrowed metrics: `aave_v2_protocol_total_supplied_usd` and 
`aave_v2_protocol_total_borrowed_usd`

```graphql-explorer
{
  getMetric(metric: "aave_v2_protocol_total_supplied_usd"){
    timeseriesDataJson(
      slug: "aave"
      from: "2022-11-01T00:00:00Z"
      to: "2022-11-03T00:00:00Z"
      includeIncompleteData: true
      interval: "5m")
  }
}
```

APY metrics: `aave_v2_supply_apy`, `aave_v2_stable_borrow_apy` and `aave_v2_variable_borrow_apy`

```graphql-explorer
{
  getMetric(metric: "aave_v2_supply_apy"){
    timeseriesDataJson(
      slug: "wrapped-bitcoin"
      from: "2022-11-01T00:00:00Z"
      to: "2022-11-03T00:00:00Z"
      includeIncompleteData: true
      interval: "5m")
  }
}
```

Daily active addresses: `aave_v2_active_addresses`

```graphql-explorer
{
  getMetric(metric: "aave_v2_active_addresses"){
    timeseriesDataJson(
      slug: "aave"
      from: "2023-01-01T00:00:00Z"
      to: "2023-01-10T00:00:00Z"
      includeIncompleteData: true
      interval: "1d")
  }
}
```

Revenue metrics: `aave_v2_revenue`, `aave_v2_revenue_usd`, `aave_v2_total_protocol_revenue_usd`
and `aave_v2_total_protocol_cumulative_revenue_usd`

```graphql-explorer
{
  getMetric(metric: "aave_v2_revenue"){
    timeseriesDataJson(
      slug: "usd-coin"
      from: "2023-01-01T00:00:00Z"
      to: "2023-01-10T00:00:00Z"
      includeIncompleteData: true
      interval: "1d")
  }
}
```
