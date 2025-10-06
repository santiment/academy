---
title: CrvUSD Savings
author: Filip
date: 2025-09-01
description: CrvUSD Savings Metrics
---

## Description
CrvUSD Savings is a feature that allows users to deposit crvUSD and earn yield directly 
on their stablecoin holdings. Savings returns are generated from lending markets and 
protocol revenue, offering a low-effort way to put idle crvUSD to work. This provides 
users with a safer, liquid option to grow their assets while supporting the Curve ecosystem.


CrvUSD Savings Metrics:
* `crvusd_savings_total_supplied` - Total supply of crvUSD in the savings contract
* `crvusd_savings_distributions` - Amount of crvUSD rewards distributed
* `crvusd_savings_apy` - Interest rate paid for depositing crvUSD

---

## Access

[Restricted Access](/metrics/details/access#restricted-access)

---

## Measuring Unit

* `crvusd_savings_total_supplied` and `crvusd_savings_distributions`- Amount of crvUSD
* `crvusd_savings_apy` - Percentage

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

Available for `crvusd`

---

### SanAPI

Total supplied metric: `crvusd_savings_total_supplied`

```graphql-explorer
{
  getMetric(metric: "crvusd_savings_total_supplied"){
    timeseriesDataJson(
      slug: "crvusd"
      from: "2025-09-01T00:00:00Z"
      to: "2025-09-07T00:00:00Z"
      interval: "1d")
  }
}
```

Distributions metric: `crvusd_savings_distributions`

```graphql-explorer
{
  getMetric(metric: "crvusd_savings_distributions"){
    timeseriesDataJson(
      slug: "crvusd"
      from: "2025-09-01T00:00:00Z"
      to: "2025-09-20T00:00:00Z"
      interval: "1d")
  }
}
```

Savings APY metric: `crvusd_savings_apy`

```graphql-explorer
{
  getMetric(metric: "crvusd_savings_apy"){
    timeseriesDataJson(
      slug: "crvusd"
      from: "2025-09-01T00:00:00Z"
      to: "2025-09-20T00:00:00Z"
      interval: "1d")
  }
}
```
