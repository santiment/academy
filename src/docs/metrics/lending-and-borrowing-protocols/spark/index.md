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

APY (annual percentage yield) metric:
* `spark_supply_apy` - Supply APY
* `spark_borrow_apy` - Variable borrow APY (variable interest rate will fluctuate based on the market conditions)

Protocol total action metrics:
* `spark_total_deposits_usd` - Total amount of deposits on Spark protocol (combining all assets in USD)
* `spark_total_liquidations_usd` - Total amount of liquidations on Spark protocol (combining all assets in USD)
* `spark_total_new_debt_usd` - Total amount of borrowings on Spark protocol (combining all assets in USD)
* `spark_total_repayments_usd` - Total amount of repayments on Spark protocol (combining all assets in USD)

Daily active addresses:
* `spark_active_addresses` - Daily active addresses on Spark protocol

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

```graphql
{
  getMetric(metric: "spark_action_deposits_usd"){
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
[Run in Explorer](<https://api.santiment.net/graphiql?query=%7B%0A%20%20getMetric(metric%3A%20%22spark_action_deposits_usd%22)%7B%0A%20%20%20%20timeseriesData(%0A%20%20%20%20%20%20slug%3A%20%22weth%22%0A%20%20%20%20%20%20from%3A%20%222024-01-01T00%3A00%3A00Z%22%0A%20%20%20%20%20%20to%3A%20%222024-02-01T00%3A00%3A00Z%22%0A%20%20%20%20%20%20includeIncompleteData%3A%20true%0A%20%20%20%20%20%20interval%3A%20%221d%22)%7B%0A%20%20%20%20%20%20%20%20datetime%0A%20%20%20%20%20%20%20%20value%0A%20%20%20%20%20%20%7D%0A%20%20%7D%0A%7D>)

Total action metrics: `spark_total_deposits_usd`, `spark_total_liquidations_usd`, 
`spark_total_new_debt_usd` and `spark_total_repayments_usd`

```graphql
{
  getMetric(metric: "spark_total_new_debt_usd"){
    timeseriesData(
      slug: "multi-collateral-dai"
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
[Run in Explorer](<https://api.santiment.net/graphiql?query=%7B%0A%20%20getMetric(metric%3A%20%22spark_total_new_debt_usd%22)%7B%0A%20%20%20%20timeseriesData(%0A%20%20%20%20%20%20slug%3A%20%22multi-collateral-dai%22%0A%20%20%20%20%20%20from%3A%20%222024-01-10T00%3A00%3A00Z%22%0A%20%20%20%20%20%20to%3A%20%222024-01-12T00%3A00%3A00Z%22%0A%20%20%20%20%20%20includeIncompleteData%3A%20true%0A%20%20%20%20%20%20interval%3A%20%221h%22)%7B%0A%20%20%20%20%20%20%20%20datetime%0A%20%20%20%20%20%20%20%20value%0A%20%20%20%20%20%20%7D%0A%20%20%7D%0A%7D>)

APY metric: `spark_supply_apy` and `spark_borrow_apy`

```graphql
{
  getMetric(metric: "spark_supply_apy"){
    timeseriesData(
      slug: "wrapped-bitcoin"
      from: "2024-08-01T00:00:00Z"
      to: "2024-08-07T00:00:00Z"
      includeIncompleteData: true
      interval: "5m"){
        datetime
        value
      }
  }
}
```
[Run in Explorer](<https://api.santiment.net/graphiql?query=%7B%0A%20%20getMetric(metric%3A%20%22spark_supply_apy%22)%7B%0A%20%20%20%20timeseriesData(%0A%20%20%20%20%20%20slug%3A%20%22wrapped-bitcoin%22%0A%20%20%20%20%20%20from%3A%20%222024-08-01T00%3A00%3A00Z%22%0A%20%20%20%20%20%20to%3A%20%222024-08-07T00%3A00%3A00Z%22%0A%20%20%20%20%20%20includeIncompleteData%3A%20true%0A%20%20%20%20%20%20interval%3A%20%225m%22)%7B%0A%20%20%20%20%20%20%20%20datetime%0A%20%20%20%20%20%20%20%20value%0A%20%20%20%20%20%20%7D%0A%20%20%7D%0A%7D>)

Daily active addresses: `spark_active_addresses`

```graphql
{
  getMetric(metric: "spark_active_addresses"){
    timeseriesData(
      slug: "multi-collateral-dai"
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
[Run in Explorer](<https://api.santiment.net/graphiql?query=%7B%0A%20%20getMetric(metric%3A%20%22spark_active_addresses%22)%7B%0A%20%20%20%20timeseriesData(%0A%20%20%20%20%20%20slug%3A%20%22multi-collateral-dai%22%0A%20%20%20%20%20%20from%3A%20%222024-01-01T00%3A00%3A00Z%22%0A%20%20%20%20%20%20to%3A%20%222024-01-10T00%3A00%3A00Z%22%0A%20%20%20%20%20%20includeIncompleteData%3A%20true%0A%20%20%20%20%20%20interval%3A%20%221d%22)%7B%0A%20%20%20%20%20%20%20%20datetime%0A%20%20%20%20%20%20%20%20value%0A%20%20%20%20%20%20%7D%0A%20%20%7D%0A%7D>)