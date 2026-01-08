---
title: Spark Protocol
author: Filip
date: 2024-07-01
description: Spark Protocol Metrics
---

## Description
[Spark](https://spark.fi/) is a lending and borrowing crypto protocol developed by MakerDAO. 
Spark aims to offer competitive interest rates and enhanced liquidity within the DeFi ecosystem, 
integrating the best liquidity from Maker and seamlessly incorporating the best DeFi protocols. 
The protocol incorporates with MakerDAO's existing infrastructure, ensuring stability and security. 
By utilizing Spark, users can efficiently manage their crypto assets and optimize their financial 
strategies within the decentralized finance landscape.

### Metrics related to Spark protocol:

Action metrics:
* `spark_action_deposits` - Amount of deposited tokens
* `spark_action_deposits_usd` - Amount of deposited tokens in USD
* `spark_action_liquidations` - Amount of liquidated tokens
* `spark_action_liquidations_usd` - Amount of liquidated tokens in USD
* `spark_action_new_debt` - Amount of borrowed tokens
* `spark_action_new_debt_usd` - Amount of borrowed tokens in USD
* `spark_action_repayments` - Amount of repaid tokens
* `spark_action_repayments_usd` - Amount of repaid tokens in USD

Total supplied/borrowed metrics:
* `spark_total_supplied` - Total supplied tokens
* `spark_total_supplied_usd` - Total supplied tokens in USD
* `spark_total_borrowed` - Total borrowed tokens
* `spark_total_borrowed_usd` - Total borrowed tokens in USD

APY (annual percentage yield) metric:
* `spark_supply_apy` - Supply APY
* `spark_borrow_apy` - Variable borrow APY (variable interest rate will fluctuate based on the market conditions)

Protocol total action metrics:
* `spark_total_deposits_usd` - Total amount of deposits on Spark protocol (combining all assets in USD)
* `spark_total_liquidations_usd` - Total amount of liquidations on Spark protocol (combining all assets in USD)
* `spark_total_new_debt_usd` - Total amount of borrowings on Spark protocol (combining all assets in USD)
* `spark_total_repayments_usd` - Total amount of repayments on Spark protocol (combining all assets in USD)

Protocol total supplied/borrowed metrics:
* `spark_protocol_total_supplied_usd` - Total amount supplied on Spark (combining all assets in USD)
* `spark_protocol_total_borrowed_usd` - Total amount borrowed on Spark (combining all assets in USD)

Daily active addresses:
* `spark_active_addresses` - Daily active addresses on Spark protocol

Flashloan metrics:
* `spark_flashloan` - Flashloan volume by asset
* `spark_flashloan_usd` - Flashloan volume by asset in USD
* `spark_total_flashloan_usd` - Total flashloan volume across Spark in USD

---

## Access

[Restricted Access](/metrics/details/access#restricted-access)

---

## Measuring Unit

* Amount in tokens/USD
* APY metrics in percentage

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

Metrics related to the entire protocol available for `maker` and `multi-collateral-dai`

Other metrics: 
available for [these assets](<https://api.santiment.net/graphiql?query=%7B%0A%20%20getMetric(metric%3A%20%22spark_action_deposits%22)%7B%0A%20%20%20%20metadata%7B%0A%20%20%20%20%20%20availableSlugs%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D>)

---

### SanAPI

Action metrics: `spark_action_deposits<_usd>`, `spark_action_liquidations<_usd>`, 
`spark_action_new_debt<_usd>` and `spark_action_repayments<_usd>`

```graphql-explorer
{
  getMetric(metric: "spark_action_deposits_usd"){
    timeseriesDataJson(
      slug: "weth"
      from: "2024-01-01T00:00:00Z"
      to: "2024-02-01T00:00:00Z"
      includeIncompleteData: true
      interval: "1d")
  }
}
```

Total action metrics: `spark_total_deposits_usd`, `spark_total_liquidations_usd`, 
`spark_total_new_debt_usd` and `spark_total_repayments_usd`

```graphql-explorer
{
  getMetric(metric: "spark_total_new_debt_usd"){
    timeseriesDataJson(
      slug: "multi-collateral-dai"
      from: "2024-01-10T00:00:00Z"
      to: "2024-01-12T00:00:00Z"
      includeIncompleteData: true
      interval: "1h")
  }
}
```

Total supplied/borrowed metrics: `spark_total_supplied<_usd>` and 
`spark_total_borrowed<_usd>`

```graphql-explorer
{
  getMetric(metric: "spark_total_supplied"){
    timeseriesDataJson(
      slug: "wrapped-bitcoin"
      from: "2023-04-01T00:00:00Z"
      to: "2023-04-07T00:00:00Z"
      includeIncompleteData: true
      interval: "5m")
  }
}
```

Protocol total supplied/borrowed metrics: `spark_protocol_total_supplied_usd` and 
`spark_protocol_total_borrowed_usd`

```graphql-explorer
{
  getMetric(metric: "spark_protocol_total_supplied_usd"){
    timeseriesDataJson(
      slug: "maker"
      from: "2023-04-01T00:00:00Z"
      to: "2023-04-07T00:00:00Z"
      includeIncompleteData: true
      interval: "5m")
  }
}
```

APY metric: `spark_supply_apy` and `spark_borrow_apy`

```graphql-explorer
{
  getMetric(metric: "spark_supply_apy"){
    timeseriesDataJson(
      slug: "wrapped-bitcoin"
      from: "2024-08-01T00:00:00Z"
      to: "2024-08-07T00:00:00Z"
      includeIncompleteData: true
      interval: "5m")
  }
}
```

Daily active addresses: `spark_active_addresses`

```graphql-explorer
{
  getMetric(metric: "spark_active_addresses"){
    timeseriesDataJson(
      slug: "multi-collateral-dai"
      from: "2024-01-01T00:00:00Z"
      to: "2024-01-10T00:00:00Z"
      includeIncompleteData: true
      interval: "1d")
  }
}
```

Flashloan metrics: `spark_flashloan`, `spark_flashloan_usd` and `spark_total_flashloan_usd`

```graphql-explorer
{
  getMetric(metric: "spark_flashloan"){
    timeseriesDataJson(
      slug: "usd-coin"
      from: "2026-01-01T00:00:00Z"
      to: "2026-01-10T00:00:00Z"
      includeIncompleteData: true
      interval: "5m")
  }
}
```
