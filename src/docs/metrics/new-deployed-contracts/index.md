---
title: New Deployed Contracts
author: Filip
date: 2025-09-01
description: New Deployed Contracts Metric
---

## Description
New Deployed Contracts tracks the number of new smart contracts deployed on the Solana 
network. This metric helps monitor developer activity and network growth over time. 
A higher value may indicate increased adoption and ecosystem expansion.

New Deployed Contracts Metric:
* `new_deployed_contracts` - The number of new smart contracts deployed

---

## Access

[Free Access](/metrics/details/access#free-access)

---

## Measuring Unit

Number of new contracts

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

Available for `solana`

---

### SanAPI

Available under name: `new_deployed_contracts`


```graphql-explorer
{
  getMetric(metric: "new_deployed_contracts"){
    timeseriesDataJson(
      slug: "solana"
      from: "2025-09-01T00:00:00Z"
      to: "2025-09-07T00:00:00Z"
      interval: "1d")
  }
}
```
