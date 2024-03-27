---
title: MakerDAO DAI Savings Rate
author: Filip
date: 2024-03-01
description: MakerDAO DAI Savings Rate
---

## Description
The MakerDAO DAI Savings Rate (DSR) is an interest rate paid to holders of the DAI stablecoin 
for locking their DAI into smart contracts. It was introduced as a way to incentivize users to hold 
DAI, thereby helping to maintain its stability and peg to the US dollar.

The interest rate is determined by the MakerDAO community through governance votes and is paid out from 
the stability fees collected from borrowers who generate DAI by locking up collateral.


MakerDAO DSR metrics:
* `makerdao_dsr_deposits` - Amount of DAI deposited into the smart contract 
* `makerdao_dsr_withdrawals` - Amount of DAI withdrawn from the smart contract 
* `makerdao_dsr_total_supplied` - Total supply of DAI in the smart contract
* `mcd_dsr` - Interest rate paid to DAI deposited in the DSR contract

---

## Access

[Restricted Access](/metrics/details/access#restricted-access)

---

## Measuring Unit

Amount of DAI

`mcd_dsr` - percentage

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

Available for `multi-collateral-dai`

---

### SanAPI

Deposit and withdraw metrics: `makerdao_dsr_deposits` and `makerdao_dsr_withdrawals`

```graphql
{
  getMetric(metric: "makerdao_dsr_deposits"){
    timeseriesData(
      slug: "multi-collateral-dai"
      from: "2024-03-01T00:00:00Z"
      to: "2024-03-03T00:00:00Z"
      interval: "5m"){
        datetime
        value
      }
  }
}
```
[Run in Explorer](<https://api.santiment.net/graphiql?query=%7B%0A%20%20getMetric(metric%3A%20%22makerdao_dsr_deposits%22)%7B%0A%20%20%20%20timeseriesData(%0A%20%20%20%20%20%20slug%3A%20%22multi-collateral-dai%22%0A%20%20%20%20%20%20from%3A%20%222024-03-01T00%3A00%3A00Z%22%0A%20%20%20%20%20%20to%3A%20%222024-03-03T00%3A00%3A00Z%22%0A%20%20%20%20%20%20interval%3A%20%225m%22)%7B%0A%20%20%20%20%20%20%20%20datetime%0A%20%20%20%20%20%20%20%20value%0A%20%20%20%20%20%20%7D%0A%20%20%7D%0A%7D&variables=%7B%7D>)

Total supplied metric: `makerdao_dsr_total_supplied`

```graphql
{
  getMetric(metric: "makerdao_dsr_total_supplied"){
    timeseriesData(
      slug: "multi-collateral-dai"
      from: "2024-03-01T00:00:00Z"
      to: "2024-03-03T00:00:00Z"
      interval: "5m"){
        datetime
        value
      }
  }
}
```
[Run in Explorer](<https://api.santiment.net/graphiql?query=%7B%0A%20%20getMetric(metric%3A%20%22makerdao_dsr_total_supplied%22)%7B%0A%20%20%20%20timeseriesData(%0A%20%20%20%20%20%20slug%3A%20%22multi-collateral-dai%22%0A%20%20%20%20%20%20from%3A%20%222024-03-01T00%3A00%3A00Z%22%0A%20%20%20%20%20%20to%3A%20%222024-03-03T00%3A00%3A00Z%22%0A%20%20%20%20%20%20interval%3A%20%225m%22)%7B%0A%20%20%20%20%20%20%20%20datetime%0A%20%20%20%20%20%20%20%20value%0A%20%20%20%20%20%20%7D%0A%20%20%7D%0A%7D&variables=%7B%7D>)

MakerDAO DAI savings rate metric: `mcd_dsr`

```graphql
{
  getMetric(metric: "mcd_dsr"){
    timeseriesData(
      slug: "multi-collateral-dai"
      from: "2024-03-01T00:00:00Z"
      to: "2024-03-03T00:00:00Z"
      interval: "1d"){
        datetime
        value
      }
  }
}
```
[Run in Explorer](<https://api.santiment.net/graphiql?query=%7B%0A%20%20getMetric(metric%3A%20%22mcd_dsr%22)%7B%0A%20%20%20%20timeseriesData(%0A%20%20%20%20%20%20slug%3A%20%22multi-collateral-dai%22%0A%20%20%20%20%20%20from%3A%20%222024-03-01T00%3A00%3A00Z%22%0A%20%20%20%20%20%20to%3A%20%222024-03-03T00%3A00%3A00Z%22%0A%20%20%20%20%20%20interval%3A%20%221d%22)%7B%0A%20%20%20%20%20%20%20%20datetime%0A%20%20%20%20%20%20%20%20value%0A%20%20%20%20%20%20%7D%0A%20%20%7D%0A%7D&variables=%7B%7D>)
