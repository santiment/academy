---
title: GHO Savings
author: Filip
date: 2025-10-01
description: GHO Savings Metrics
---

## Description
GHO Savings is a feature within the Aave Protocol that allows users to deposit the GHO 
stablecoin to earn a passive yield through the GHO Savings Rate (GSR). When users deposit 
GHO into the savings contract, they receive sGHO tokens, which represent their deposit 
and continuously accrue interest at the current GSR. This mechanism encourages long-term 
GHO holding, enhances liquidity stability, and provides users with a low-risk way to earn 
yield directly within the Aave ecosystem.

Sky Savings metrics:
* `gho_savings_deposits` - Amount of GHO deposited into the savings contract
* `gho_savings_withdrawals` - Amount of GHO withdrawn from the savings contract
* `gho_savings_total_supplied` - Total supply of GHO in the savings contract

---

## Access

[Restricted Access](/metrics/details/access#restricted-access)

---

## Measuring Unit

Amount of GHO

---

## Data Type

[Timeseries Data](/metrics/details/data-type#timeseries-data)

---

## Frequency

[Daily Intervals](/metrics/details/frequency#daily-frequency)

---

## Latency

[On-Chain Latency](/metrics/details/latency#on-chain-latency)

---

## Available Assets

Available for `gho`

---

### SanAPI

Deposit and withdraw metrics: `gho_savings_deposits` and `gho_savings_withdrawals`

```graphql-explorer
{
  getMetric(metric: "gho_savings_deposits"){
    timeseriesDataJson(
      slug: "gho"
      from: "2025-10-01T00:00:00Z"
      to: "2025-10-07T00:00:00Z"
      interval: "1d")
  }
}
```

Total supplied metric: `gho_savings_total_supplied`

```graphql-explorer
{
  getMetric(metric: "gho_savings_total_supplied"){
    timeseriesDataJson(
      slug: "gho"
      from: "2025-10-01T00:00:00Z"
      to: "2025-10-07T00:00:00Z"
      interval: "1d")
  }
}
```
