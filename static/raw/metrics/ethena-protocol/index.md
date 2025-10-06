---
title: Ethena Protocol
author: Filip
date: 2024-07-01
description: Ethena Protocol Metrics
---

## Description
Ethena is a synthetic dollar protocol on Ethereum that offers a crypto-native financial solution 
independent of traditional banking, along with a globally accessible dollar-denominated savings 
instrument called the "Internet Bond". Ethena's synthetic dollar, USDe, achieves scalability and 
stability by delta-hedging Ethereum and Bitcoin collateral. The stability of USDe's peg is 
maintained through derivatives positions against protocol-held collateral. The "Internet Bond"
generates yield from staked assets and the funding and basis spread from perpetual and futures 
markets, providing an on-chain crypto-native monetary solution. Ethena staking involves locking 
USDe to earn rewards in the form of sUSDe, which represents staked USDe within the network. 
This staking process supports the network's stability and governance, providing users with returns 
while contributing to the overall robustness of the Ethena ecosystem.

Ethena staking metrics:
* `ethena_staking_deposits` - Amount of USDe deposited into the staking contract
* `ethena_staking_withdrawals` - Amount of USDe withdrawn from the staking contract
* `ethena_staking_apy` - Interest rate paid for staking USDe

---

## Access

[Restricted Access](/metrics/details/access#restricted-access)

---

## Measuring Unit

* `ethena_staking_deposits` and `ethena_staking_withdrawals` - Amount of USDe
* `ethena_staking_apy` - Percentage

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

Available for `ethena-staked-usde`

---

### SanAPI

Deposit and withdraw metrics: `ethena_staking_deposits` and `ethena_staking_withdrawals`

```graphql-explorer
{
  getMetric(metric: "ethena_staking_deposits"){
    timeseriesDataJson(
      slug: "ethena-staked-usde"
      from: "2024-06-01T00:00:00Z"
      to: "2024-06-10T00:00:00Z"
      interval: "1d")
  }
}
```

Staking APY metric: `ethena_staking_apy`

```graphql-explorer
{
  getMetric(metric: "ethena_staking_apy"){
    timeseriesDataJson(
      slug: "ethena-staked-usde"
      from: "2024-06-01T00:00:00Z"
      to: "2024-06-10T00:00:00Z"
      interval: "1d")
  }
}
```
