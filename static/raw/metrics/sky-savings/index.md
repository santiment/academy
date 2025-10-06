---
title: Sky Savings
author: Filip
date: 2024-10-01
description: Sky Savings Metrics
---

## Description
Sky Savings is a feature of the decentralized Sky Protocol that allows users to access 
the Sky Savings Rate module by supplying USDS, a stablecoin. There is no minimum supply 
amount required, and users can withdraw their funds at any time, ensuring they remain 
in control of their savings. The Sky Savings Rate is a dynamic, variable mechanism that 
accumulates additional USDS in real time, determined by governance decisions within the 
Sky ecosystem rather than market factors. When users supply USDS, they receive sUSDS 
tokens, which serve as a digital record of their interaction and the value accrued. As 
USDS tokens automatically accumulate in the pool every few seconds, users benefit from 
increased savings when they redeem their sUSDS back to USDS.

Sky Savings metrics:
* `sky_savings_deposits` - Amount of USDS deposited into the savings contract
* `sky_savings_withdrawals` - Amount of USDS withdrawn from the savings contract
* `sky_savings_total_supplied` - Total supply of USDS in the savings contract
* `sky_savings_apy` - Interest rate paid for depositing USDS

---

## Access

[Restricted Access](/metrics/details/access#restricted-access)

---

## Measuring Unit

* `sky_savings_deposits`, `sky_savings_withdrawals` and `sky_savings_total_supplied`- Amount of USDS
* `sky_savings_apy` - Percentage

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

Available for `usds`

---

### SanAPI

Deposit and withdraw metrics: `sky_savings_deposits` and `sky_savings_withdrawals`

```graphql-explorer
{
  getMetric(metric: "sky_savings_deposits"){
    timeseriesDataJson(
      slug: "usds"
      from: "2024-10-01T00:00:00Z"
      to: "2024-10-07T00:00:00Z"
      interval: "1d")
  }
}
```

Total supplied metric: `sky_savings_total_supplied`

```graphql-explorer
{
  getMetric(metric: "sky_savings_total_supplied"){
    timeseriesDataJson(
      slug: "usds"
      from: "2024-10-01T00:00:00Z"
      to: "2024-10-07T00:00:00Z"
      interval: "1d")
  }
}
```

Savings APY metric: `sky_savings_apy`

```graphql-explorer
{
  getMetric(metric: "sky_savings_apy"){
    timeseriesDataJson(
      slug: "usds"
      from: "2024-10-01T00:00:00Z"
      to: "2024-10-07T00:00:00Z"
      interval: "1d")
  }
}
```
