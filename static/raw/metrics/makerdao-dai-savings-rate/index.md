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

```graphql-explorer
{
  getMetric(metric: "makerdao_dsr_deposits"){
    timeseriesDataJson(
      slug: "multi-collateral-dai"
      from: "2024-03-01T00:00:00Z"
      to: "2024-03-03T00:00:00Z"
      interval: "5m")
  }
}
```

Total supplied metric: `makerdao_dsr_total_supplied`

```graphql-explorer
{
  getMetric(metric: "makerdao_dsr_total_supplied"){
    timeseriesDataJson(
      slug: "multi-collateral-dai"
      from: "2024-03-01T00:00:00Z"
      to: "2024-03-03T00:00:00Z"
      interval: "5m")
  }
}
```

MakerDAO DAI savings rate metric: `mcd_dsr`

```graphql-explorer
{
  getMetric(metric: "mcd_dsr"){
    timeseriesDataJson(
      slug: "multi-collateral-dai"
      from: "2024-03-01T00:00:00Z"
      to: "2024-03-03T00:00:00Z"
      interval: "1d")
  }
}
```
