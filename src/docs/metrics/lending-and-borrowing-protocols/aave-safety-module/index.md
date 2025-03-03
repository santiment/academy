---
title: Aave Safety Module
author: Filip
date: 2025-03-01
description: Aave Safety Module Metrics
---

## Description
The Aave Safety Module is a risk mitigation system designed to protect the protocol 
from shortfalls. Users can stake AAVE tokens (or other assets) into the module, 
providing a safety net in case of unexpected liquidity issues or smart contract 
vulnerabilities. In return, stakers earn rewards but also accept the risk that a 
portion of their funds could be slashed if the module is activated to cover losses. 
It’s essentially a decentralized insurance mechanism that helps keep Aave secure while 
incentivizing community participation.


### Metrics related to Aave safety module:

Aave Safety Module staking metrics:  
* `aave_safety_module_amount` – Total staked amount  
* `aave_safety_module_amount_usd` – Total staked amount in USD  
* `aave_safety_module_emission_usd` – Daily reward emissions in USD  
* `aave_safety_module_apr` – Staking APR  

Total metrics:  
* `aave_safety_module_total_amount_usd` – Total amount staked in the Aave Safety Module (combining all assets in USD)  
* `aave_safety_module_total_emission_usd` – Total reward emissions in the Aave Safety Module (combining all assets in USD)

---

## Access

[Restricted Access](/metrics/details/access#restricted-access).

---

## Measuring Unit

* Amount in tokens/USD
* APR metric in percentages

---

## Data Type

[Timeseries Data](/metrics/details/data-type#timeseries-data)

---

## Frequency

* [Daily Intervals](/metrics/details/frequency#daily-frequency) 

---

## Latency

[On-Chain Latency](/metrics/details/latency#on-chain-latency)

---

## Available Assets

Metrics related to the entire protocol available for `aave`

Other metrics: 
available for [these assets](<https://api.santiment.net/graphiql?query=%7B%0A%20%20getMetric(metric%3A%20%22aave_safety_module_amount%22)%7B%0A%20%20%20%20metadata%7B%0A%20%20%20%20%20%20availableSlugs%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D>)

---

### SanAPI

Total staked amount metrics: `aave_safety_module_amount<_usd>`

```graphql
{
  getMetric(metric: "aave_safety_module_amount"){
    timeseriesData(
      slug: "gho"
      from: "2025-01-01T00:00:00Z"
      to: "2025-01-07T00:00:00Z"
      includeIncompleteData: true
      interval: "1d"){
        datetime
        value
      }
  }
}
```
[Run in Explorer](<https://api.santiment.net/graphiql?query=%7B%0A%20%20getMetric(metric%3A%20%22aave_safety_module_amount%22)%7B%0A%20%20%20%20timeseriesData(%0A%20%20%20%20%20%20slug%3A%20%22gho%22%0A%20%20%20%20%20%20from%3A%20%222025-01-01T00%3A00%3A00Z%22%0A%20%20%20%20%20%20to%3A%20%222025-01-07T00%3A00%3A00Z%22%0A%20%20%20%20%20%20includeIncompleteData%3A%20true%0A%20%20%20%20%20%20interval%3A%20%221d%22)%7B%0A%20%20%20%20%20%20%20%20datetime%0A%20%20%20%20%20%20%20%20value%0A%20%20%20%20%20%20%7D%0A%20%20%7D%0A%7D>)

Emissions and APR metrics: `aave_safety_module_emission_usd`
and `aave_safety_module_apr`

```graphql
{
  getMetric(metric: "aave_safety_module_apr"){
    timeseriesData(
      slug: "aave"
      from: "2025-01-01T00:00:00Z"
      to: "2025-01-07T00:00:00Z"
      includeIncompleteData: true
      interval: "1d"){
        datetime
        value
      }
  }
}
```
[Run in Explorer](<https://api.santiment.net/graphiql?query=%7B%0A%20%20getMetric(metric%3A%20%22aave_safety_module_apr%22)%7B%0A%20%20%20%20timeseriesData(%0A%20%20%20%20%20%20slug%3A%20%22aave%22%0A%20%20%20%20%20%20from%3A%20%222025-01-01T00%3A00%3A00Z%22%0A%20%20%20%20%20%20to%3A%20%222025-01-07T00%3A00%3A00Z%22%0A%20%20%20%20%20%20includeIncompleteData%3A%20true%0A%20%20%20%20%20%20interval%3A%20%221d%22)%7B%0A%20%20%20%20%20%20%20%20datetime%0A%20%20%20%20%20%20%20%20value%0A%20%20%20%20%20%20%7D%0A%20%20%7D%0A%7D>)

Total metrics: `aave_safety_module_total_amount_usd` and 
`aave_safety_module_total_emission_usd`

```graphql
{
  getMetric(metric: "aave_safety_module_total_amount_usd"){
    timeseriesData(
      slug: "aave"
      from: "2025-01-01T00:00:00Z"
      to: "2025-01-07T00:00:00Z"
      includeIncompleteData: true
      interval: "1d"){
        datetime
        value
      }
  }
}
```
[Run in Explorer](<https://api.santiment.net/graphiql?query=%7B%0A%20%20getMetric(metric%3A%20%22aave_safety_module_total_amount_usd%22)%7B%0A%20%20%20%20timeseriesData(%0A%20%20%20%20%20%20slug%3A%20%22aave%22%0A%20%20%20%20%20%20from%3A%20%222025-01-01T00%3A00%3A00Z%22%0A%20%20%20%20%20%20to%3A%20%222025-01-07T00%3A00%3A00Z%22%0A%20%20%20%20%20%20includeIncompleteData%3A%20true%0A%20%20%20%20%20%20interval%3A%20%221d%22)%7B%0A%20%20%20%20%20%20%20%20datetime%0A%20%20%20%20%20%20%20%20value%0A%20%20%20%20%20%20%7D%0A%20%20%7D%0A%7D>)
