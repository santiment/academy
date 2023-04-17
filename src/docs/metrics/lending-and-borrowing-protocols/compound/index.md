---
title: Compound
author: Filip
date: 2022-12-05
description: Compound Metrics
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
* `compound_action_liquidations` - Amount of liquidated tokens
* `compound_action_new_debt` - Amount of borrowed tokens
* `compound_action_repayments` - Amount of repaid tokens

> Note: All of the above metrics are also available in USD using the `_usd` 
suffix (for example: `compound_action_deposits_usd`). 

Total action metrics:
* `compound_total_deposits_usd` - Amount of all deposits in usd
* `compound_total_liquidations_usd` - Amount of all liquidations in usd
* `compound_total_new_debt_usd` - Amount of all borrowings in usd
* `compound_total_repayments_usd` - Amount of all repayments in usd

Total supplied/borrowed metrics:
* `compound_total_supplied` - Total supplied tokens
* `compound_total_supplied_usd` - Total supplied tokens in usd
* `compound_total_borrowed` - Total borrowed tokens
* `compound_total_borrowed_usd` - Total borrowed tokens in usd

Protocol total supplied/borrowed metrics:
* `compound_protocol_total_supplied_usd` - Total supplied on Compound (for all assets in usd)
* `compound_protocol_total_borrowed_usd` - Total borrowed on Compound (for all assets in usd)

APY (annual percentage yield) metrics:
* `compound_supply_apy` - Supply APY
* `compound_borrow_apy` - Borrow APY 

---

## Access

[Restricted Access](/metrics/details/access#restricted-access).

---

## Measuring Unit

Amount in tokens/USD

APY metric in percentages

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

Total action metrics: available for `compound`

Other metrics: 
available for [these assets](<https://api.santiment.net/graphiql?query=%7B%0A%20%20getMetric(metric%3A%20%22compound_action_deposits%22)%7B%0A%20%20%20%20metadata%7B%0A%20%20%20%20%20%20availableSlugs%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D>)

---

### SanAPI

Action metrics: `compound_action_deposits<_usd>`, `compound_action_liquidations<_usd>`, 
`compound_action_new_debt<_usd>` and `compound_action_repayments<_usd>`

```graphql
{
  getMetric(metric: "compound_action_deposits_usd"){
    timeseriesData(
      slug: "ethereum"
      from: "2022-11-01T00:00:00Z"
      to: "2022-11-03T00:00:00Z"
      includeIncompleteData: true
      interval: "5m"){
        datetime
        value
      }
  }
}
```
[Run in Explorer](<https://api.santiment.net/graphiql?query=%7B%0A%20%20getMetric(metric%3A%20%22compound_action_deposits_usd%22)%7B%0A%20%20%20%20timeseriesData(%0A%20%20%20%20%20%20slug%3A%20%22ethereum%22%0A%20%20%20%20%20%20from%3A%20%222022-11-01T00%3A00%3A00Z%22%0A%20%20%20%20%20%20to%3A%20%222022-11-03T00%3A00%3A00Z%22%0A%20%20%20%20%20%20includeIncompleteData%3A%20true%0A%20%20%20%20%20%20interval%3A%20%225m%22)%7B%0A%20%20%20%20%20%20%20%20datetime%0A%20%20%20%20%20%20%20%20value%0A%20%20%20%20%20%20%7D%0A%20%20%7D%0A%7D&variables=%7B%7D>)

Total action metrics: `compound_total_deposits_usd`, `compound_total_liquidations_usd`, 
`compound_total_new_debt_usd` and `compound_total_repayments_usd`

```graphql
{
  getMetric(metric: "compound_total_new_debt_usd"){
    timeseriesData(
      slug: "compound"
      from: "2022-11-01T00:00:00Z"
      to: "2022-11-03T00:00:00Z"
      includeIncompleteData: true
      interval: "5m"){
        datetime
        value
      }
  }
}
```
[Run in Explorer](<https://api.santiment.net/graphiql?query=%7B%0A%20%20getMetric(metric%3A%20%22compound_total_new_debt_usd%22)%7B%0A%20%20%20%20timeseriesData(%0A%20%20%20%20%20%20slug%3A%20%22compound%22%0A%20%20%20%20%20%20from%3A%20%222022-11-01T00%3A00%3A00Z%22%0A%20%20%20%20%20%20to%3A%20%222022-11-03T00%3A00%3A00Z%22%0A%20%20%20%20%20%20includeIncompleteData%3A%20true%0A%20%20%20%20%20%20interval%3A%20%225m%22)%7B%0A%20%20%20%20%20%20%20%20datetime%0A%20%20%20%20%20%20%20%20value%0A%20%20%20%20%20%20%7D%0A%20%20%7D%0A%7D&variables=%7B%7D>)

Total supplied/borrowed metrics: `compound_total_supplied<_usd>` and 
`compound_total_borrowed<_usd>`

```graphql
{
  getMetric(metric: "compound_total_supplied"){
    timeseriesData(
      slug: "wrapped-bitcoin"
      from: "2022-11-01T00:00:00Z"
      to: "2022-11-03T00:00:00Z"
      includeIncompleteData: true
      interval: "5m"){
        datetime
        value
      }
  }
}
```
[Run in Explorer](<https://api.santiment.net/graphiql?query=%7B%0A%20%20getMetric(metric%3A%20%22compound_total_supplied%22)%7B%0A%20%20%20%20timeseriesData(%0A%20%20%20%20%20%20slug%3A%20%22wrapped-bitcoin%22%0A%20%20%20%20%20%20from%3A%20%222022-11-01T00%3A00%3A00Z%22%0A%20%20%20%20%20%20to%3A%20%222022-11-03T00%3A00%3A00Z%22%0A%20%20%20%20%20%20includeIncompleteData%3A%20true%0A%20%20%20%20%20%20interval%3A%20%225m%22)%7B%0A%20%20%20%20%20%20%20%20datetime%0A%20%20%20%20%20%20%20%20value%0A%20%20%20%20%20%20%7D%0A%20%20%7D%0A%7D&variables=%7B%7D>)

Protocol total supplied/borrowed metrics: `compound_protocol_total_supplied_usd` and 
`compound_protocol_total_borrowed_usd`

```graphql
{
  getMetric(metric: "compound_protocol_total_supplied_usd"){
    timeseriesData(
      slug: "compound"
      from: "2022-11-01T00:00:00Z"
      to: "2022-11-03T00:00:00Z"
      includeIncompleteData: true
      interval: "5m"){
        datetime
        value
      }
  }
}
```
[Run in Explorer](<https://api.santiment.net/graphiql?query=%7B%0A%20%20getMetric(metric%3A%20%22compound_protocol_total_supplied_usd%22)%7B%0A%20%20%20%20timeseriesData(%0A%20%20%20%20%20%20slug%3A%20%22compound%22%0A%20%20%20%20%20%20from%3A%20%222022-11-01T00%3A00%3A00Z%22%0A%20%20%20%20%20%20to%3A%20%222022-11-03T00%3A00%3A00Z%22%0A%20%20%20%20%20%20includeIncompleteData%3A%20true%0A%20%20%20%20%20%20interval%3A%20%225m%22)%7B%0A%20%20%20%20%20%20%20%20datetime%0A%20%20%20%20%20%20%20%20value%0A%20%20%20%20%20%20%7D%0A%20%20%7D%0A%7D>)


APY metrics: `compound_supply_apy` and `compound_borrow_apy`

```graphql
{
  getMetric(metric: "compound_supply_apy"){
    timeseriesData(
      slug: "wrapped-bitcoin"
      from: "2023-01-01T00:00:00Z"
      to: "2023-03-01T00:00:00Z"
      includeIncompleteData: true
      interval: "5m"){
        datetime
        value
      }
  }
}
```
[Run in Explorer](<https://api.santiment.net/graphiql?query=%7B%0A%20%20getMetric(metric%3A%20%22compound_supply_apy%22)%7B%0A%20%20%20%20timeseriesData(%0A%20%20%20%20%20%20slug%3A%20%22wrapped-bitcoin%22%0A%20%20%20%20%20%20from%3A%20%222023-01-01T00%3A00%3A00Z%22%0A%20%20%20%20%20%20to%3A%20%222023-03-01T00%3A00%3A00Z%22%0A%20%20%20%20%20%20includeIncompleteData%3A%20true%0A%20%20%20%20%20%20interval%3A%20%225m%22)%7B%0A%20%20%20%20%20%20%20%20datetime%0A%20%20%20%20%20%20%20%20value%0A%20%20%20%20%20%20%7D%0A%20%20%7D%0A%7D>)
