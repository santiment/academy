---
title: Liquity
author: Filip
date: 2024-03-01
description: Liquity Metrics
---

## Description
[Liquity](https://www.liquity.org/) is a decentralized borrowing protocol operating on the Ethereum 
blockchain. It allows users to borrow a stablecoin, LUSD, against their Ethereum (ETH) collateral.

It stands out from other borrowing protocols because of its unique approach to interest calculation 
for loans. Liquity applies a small, fixed fee for borrowing LUSD, rather than subjecting users to 
highly fluctuating interest rates.

Aside from the collateral, the loans are backed by a Stability Pool containing LUSD and 
by other borrowers collectively serving as a safety net.

### Metrics related to Compound protocol:

Action metrics:
* `liquity_action_deposits` - Amount of deposited tokens
* `liquity_action_deposits_usd` - Amount of deposited tokens in USD
* `liquity_action_liquidations` - Amount of liquidated tokens
* `liquity_action_liquidations_usd` - Amount of liquidated tokens in USD
* `liquity_action_new_debt` - Amount of borrowed tokens
* `liquity_action_new_debt_usd` - Amount of borrowed tokens in USD
* `liquity_action_repayments` - Amount of repaid tokens
* `liquity_action_repayments_usd` - Amount of repaid tokens in USD

Total supplied/borrowed metrics:
* `liquity_total_supplied` - Total supplied tokens
* `liquity_total_supplied_usd` - Total supplied tokens in USD
* `liquity_total_borrowed` - Total borrowed tokens
* `liquity_total_borrowed_usd` - Total borrowed tokens in USD

APY (annual percentage yield) metrics:
* `liquity_borrow_fee` - Liquity borrow fee

Daily active addresses:
* `liquity_active_addresses` - Daily active addresses on Liquity

---

## Access

[Restricted Access](/metrics/details/access#restricted-access).

---

## Measuring Unit

* Amount in tokens/USD
* `liquity_borrow_fee` in percentages

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

Deposit/supply metrics available for `ethereum`

Repayment/borrow metrics available for `liquity-usd`

---

### SanAPI

Action metrics: `liquity_action_deposits<_usd>`, `liquity_action_liquidations<_usd>`, 
`liquity_action_new_debt<_usd>` and `liquity_action_repayments<_usd>`

```graphql
{
  getMetric(metric: "liquity_action_new_debt"){
    timeseriesData(
      slug: "liquity-usd"
      from: "2024-01-01T00:00:00Z"
      to: "2024-01-03T00:00:00Z"
      includeIncompleteData: true
      interval: "5m"){
        datetime
        value
      }
  }
}
```
[Run in Explorer](<https://api.santiment.net/graphiql?query=%7B%0A%20%20getMetric(metric%3A%20%22liquity_action_new_debt%22)%7B%0A%20%20%20%20timeseriesData(%0A%20%20%20%20%20%20slug%3A%20%22liquity-usd%22%0A%20%20%20%20%20%20from%3A%20%222024-01-01T00%3A00%3A00Z%22%0A%20%20%20%20%20%20to%3A%20%222024-01-03T00%3A00%3A00Z%22%0A%20%20%20%20%20%20includeIncompleteData%3A%20true%0A%20%20%20%20%20%20interval%3A%20%225m%22)%7B%0A%20%20%20%20%20%20%20%20datetime%0A%20%20%20%20%20%20%20%20value%0A%20%20%20%20%20%20%7D%0A%20%20%7D%0A%7D>)

Total supplied/borrowed metrics: `liquity_total_supplied<_usd>` and 
`liquity_total_borrowed<_usd>`

```graphql
{
  getMetric(metric: "liquity_total_supplied"){
    timeseriesData(
      slug: "ethereum"
      from: "2024-01-01T00:00:00Z"
      to: "2024-01-03T00:00:00Z"
      includeIncompleteData: true
      interval: "5m"){
        datetime
        value
      }
  }
}
```
[Run in Explorer](<https://api.santiment.net/graphiql?query=%7B%0A%20%20getMetric(metric%3A%20%22liquity_total_supplied%22)%7B%0A%20%20%20%20timeseriesData(%0A%20%20%20%20%20%20slug%3A%20%22ethereum%22%0A%20%20%20%20%20%20from%3A%20%222024-01-01T00%3A00%3A00Z%22%0A%20%20%20%20%20%20to%3A%20%222024-01-03T00%3A00%3A00Z%22%0A%20%20%20%20%20%20includeIncompleteData%3A%20true%0A%20%20%20%20%20%20interval%3A%20%225m%22)%7B%0A%20%20%20%20%20%20%20%20datetime%0A%20%20%20%20%20%20%20%20value%0A%20%20%20%20%20%20%7D%0A%20%20%7D%0A%7D>)

Borrow fee metric: `liquity_borrow_fee`

```graphql
{
  getMetric(metric: "liquity_borrow_fee"){
    timeseriesData(
      slug: "liquity-usd"
      from: "2024-03-01T00:00:00Z"
      to: "2024-03-03T00:00:00Z"
      includeIncompleteData: true
      interval: "5m"){
        datetime
        value
      }
  }
}
```
[Run in Explorer](<https://api.santiment.net/graphiql?query=%7B%0A%20%20getMetric(metric%3A%20%22liquity_borrow_fee%22)%7B%0A%20%20%20%20timeseriesData(%0A%20%20%20%20%20%20slug%3A%20%22liquity-usd%22%0A%20%20%20%20%20%20from%3A%20%222024-03-01T00%3A00%3A00Z%22%0A%20%20%20%20%20%20to%3A%20%222024-03-03T00%3A00%3A00Z%22%0A%20%20%20%20%20%20includeIncompleteData%3A%20true%0A%20%20%20%20%20%20interval%3A%20%225m%22)%7B%0A%20%20%20%20%20%20%20%20datetime%0A%20%20%20%20%20%20%20%20value%0A%20%20%20%20%20%20%7D%0A%20%20%7D%0A%7D>)

Daily active addresses: `liquity_active_addresses`

```graphql
{
  getMetric(metric: "liquity_active_addresses"){
    timeseriesData(
      slug: "liquity-usd"
      from: "2024-01-01T00:00:00Z"
      to: "2024-01-07T00:00:00Z"
      includeIncompleteData: true
      interval: "1d"){
        datetime
        value
      }
  }
}
```
[Run in Explorer](<https://api.santiment.net/graphiql?query=%7B%0A%20%20getMetric(metric%3A%20%22liquity_active_addresses%22)%7B%0A%20%20%20%20timeseriesData(%0A%20%20%20%20%20%20slug%3A%20%22liquity-usd%22%0A%20%20%20%20%20%20from%3A%20%222024-01-01T00%3A00%3A00Z%22%0A%20%20%20%20%20%20to%3A%20%222024-01-07T00%3A00%3A00Z%22%0A%20%20%20%20%20%20includeIncompleteData%3A%20true%0A%20%20%20%20%20%20interval%3A%20%221d%22)%7B%0A%20%20%20%20%20%20%20%20datetime%0A%20%20%20%20%20%20%20%20value%0A%20%20%20%20%20%20%7D%0A%20%20%7D%0A%7D>)
