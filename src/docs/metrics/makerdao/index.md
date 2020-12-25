---
title: MakerDAO
author: Maksim Razhev, Serge Nedashkovsky
date: 2020-12-24
description: MakerDAO Metrics
---

## Description
Metrics related to MakerDAO protocols.

Single-Collateral DAI:
* `scd_locked_token` - The volume of WETH locked in Single-Collateral DAI contract.
* `scd_collat_ratio` - Single-Collateral DAI Collateralization Ratio

Multi-Collateral DAI:

* `mcd_locked_token` - The volume of collateral locked in Multi-Collateral DAI contracts, measured by a token.
* `mcd_erc20_supply` - DAI ERC20 token total supply
* `mcd_supply` - The total amount of Multi-Collareral DAI tokens: DAI ERC20 Supply plus  DAI in DSR
* `mcd_collat_ratio`, `mcd_collat_ratio_weth`, `daily_dai_collat_ratio_stablecoin`, `daily_dai_collat_ratio_wbtc` - These metrics show the collateralization ratio of MCD collateral tokens.  
  Calculated by the formula:
                     `The volume of collateral locked in MCD * Collateral USD price / The volume of DAI created by vaults with this collateral`
* `mcd_dsr` - This metric shows historical and current values for Dai Savings Rate. Dai Savings Rate is a parameter that specifies the interest rate paid to DAI deposited in the DSR contract
* `mcd_stability_fee` - This metric shows values for Stability Fee for MCD Collateral Tokens. 
* `dai_created` - Amount of DAI created in a given time interval, segmented by the underlying collateral
* `dai_repaid` - Amount of DAI destroyed in a given time interval, segmented by the underlying collateral

---

## Access

[Restricted Access](/metrics/details/access#restricted-access).

---

## Measuring Unit

* `mcd_locked_token`, `scd_locked_token`, `mcd_erc20_supply`, `mcd_supply`, `dai_created`, `dai_repaid` - Amount of coins
* Other - MakerDAO contract parameter values
---

## Data Type

[Timeseries Data](/metrics/details/data-type#timeseries-data)

---

## Frequency

* `mcd_supply`, `dai_created`, `dai_repaid` - [Five-minute Intervals](/metrics/details/frequency#five-minute-frequency)
* Other - [Daily Intervals](/metrics/details/frequency#daily-frequency)

---

## Latency

[Price Latency](/metrics/details/latency#price-latency)

---

## Available Assets
Collateral assets of Single-Collateral DAI:  
* `weth`  

Collateral assets of Multi-Collateral DAI: 
* `weth`
* `basic-attention-token`
* `kyber-network`
* `0x`
* `yearn-finance`
* `wrapped-bitcoin`
* `chainlink`
* `loopring`
* `weth-b`
* `decentraland`
* `balancer`
* `compound`

USD-based Stablecoin collaterals:
* `tether`
* `paxos-standard-token`
* `usdc-b`
* `dai`
* `trueusd`
* `gemini-dollar`

Assets available for metrics:
* `mcd_locked_token`, `mcd_stability_fee` - all of the MakerDAO collateral assets
* `scd_locked_token`, `mcd_collat_ratio_weth`, `scd_collat_ratio` - `weth`
* `mcd_collat_ratio` - all the MakerDAO collateral assets except `weth`, `wbtc` and USD-based stablecoin collaterals
* `daily_dai_collat_ratio_stablecoin` - USD-based stablecoin collaterals
* `daily_dai_collat_ratio_wbtc` - `wrapped-bitcoin`
* `mcd_erc20_supply`, `mcd_supply`, `msd_dsr`, `dai_created`, `dai_repaid` - `multi-collateral-dai`
---

### SanAPI

Token Locked in Multi-Collateral CDPs 

```graphql
{
  getMetric(metric: "mcd_locked_token") {
    timeseriesData(
      slug: "weth"
      from: "2020-04-01T00:00:00Z"
      to: "2020-04-07T00:00:00Z"
      interval: "1d") {
        datetime
        value
    }
  }
}
```

[**Run in Explorer**](<https://api.santiment.net/graphiql?variables=&query=%7B%0A%20%20getMetric(metric%3A%20%22mcd_locked_token%22)%20%7B%0A%20%20%20%20timeseriesData(%0A%20%20%20%20%20%20slug%3A%20%22weth%22%0A%20%20%20%20%20%20from%3A%20%222020-04-01T00%3A00%3A00Z%22%0A%20%20%20%20%20%20to%3A%20%222020-04-07T00%3A00%3A00Z%22%0A%20%20%20%20%20%20interval%3A%20%225m%22)%20%7B%0A%20%20%20%20%20%20%20%20datetime%0A%20%20%20%20%20%20%20%20value%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A>)

DAI ERC20 token total supply:
```graphql
{
  getMetric(metric: "mcd_erc20_supply") {
    timeseriesData(
      slug: "multi-collateral-dai"
      from: "2020-04-01T00:00:00Z"
      to: "2020-04-07T00:00:00Z"
      interval: "1d") {
        datetime
        value
    }
  }
}
```
[**Run in Explorer**](<https://api.santiment.net/graphiql?query=%7B%0A%20%20getMetric(metric%3A%20%22mcd_erc20_supply%22)%20%7B%0A%20%20%20%20timeseriesData(%0A%20%20%20%20%20%20slug%3A%20%22multi-collateral-dai%22%0A%20%20%20%20%20%20from%3A%20%222020-04-01T00%3A00%3A00Z%22%0A%20%20%20%20%20%20to%3A%20%222020-04-07T00%3A00%3A00Z%22%0A%20%20%20%20%20%20interval%3A%20%221d%22)%20%7B%0A%20%20%20%20%20%20%20%20datetime%0A%20%20%20%20%20%20%20%20value%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D>)

DAI Total supply:
```graphql
{
  getMetric(metric: "mcd_supply") {
    timeseriesData(
      slug: "multi-collateral-dai"
      from: "2020-04-02T00:00:00Z"
      to: "2020-04-03T00:00:00Z"
      interval: "5m") {
        datetime
        value
    }
  }
}
```
[**Run in Explorer**](<https://api.santiment.net/graphiql?query=%7B%0A%20%20getMetric(metric%3A%20%22mcd_supply%22)%20%7B%0A%20%20%20%20timeseriesData(%0A%20%20%20%20%20%20slug%3A%20%22multi-collateral-dai%22%0A%20%20%20%20%20%20from%3A%20%222020-04-02T00%3A00%3A00Z%22%0A%20%20%20%20%20%20to%3A%20%222020-04-03T00%3A00%3A00Z%22%0A%20%20%20%20%20%20interval%3A%20%225m%22)%20%7B%0A%20%20%20%20%20%20%20%20datetime%0A%20%20%20%20%20%20%20%20value%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D>)

MCD Collateral Ratio:
```graphql
{
  getMetric(metric: "mcd_collat_ratio") {
    timeseriesData(
      slug: "basic-attention-token"
      from: "2020-04-01T00:00:00Z"
      to: "2020-04-07T00:00:00Z"
      interval: "1d") {
        datetime
        value
    }
  }
}
```
[**Run in Explorer**](<https://api.santiment.net/graphiql?query=%7B%0A%20%20getMetric(metric%3A%20%22mcd_collat_ratio%22)%20%7B%0A%20%20%20%20timeseriesData(%0A%20%20%20%20%20%20slug%3A%20%22basic-attention-token%22%0A%20%20%20%20%20%20from%3A%20%222020-04-01T00%3A00%3A00Z%22%0A%20%20%20%20%20%20to%3A%20%222020-04-07T00%3A00%3A00Z%22%0A%20%20%20%20%20%20interval%3A%20%221d%22)%20%7B%0A%20%20%20%20%20%20%20%20datetime%0A%20%20%20%20%20%20%20%20value%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D>)

SCD Collateral Ratio:
```graphql
{
  getMetric(metric: "scd_collat_ratio") {
    timeseriesData(
      slug: "weth"
      from: "2020-04-01T00:00:00Z"
      to: "2020-04-07T00:00:00Z"
      interval: "1d") {
        datetime
        value
    }
  }
}
```
[**Run in Explorer**](<https://api.santiment.net/graphiql?query=%7B%0A%20%20getMetric(metric%3A%20%22scd_collat_ratio%22)%20%7B%0A%20%20%20%20timeseriesData(%0A%20%20%20%20%20%20slug%3A%20%22weth%22%0A%20%20%20%20%20%20from%3A%20%222020-04-01T00%3A00%3A00Z%22%0A%20%20%20%20%20%20to%3A%20%222020-04-07T00%3A00%3A00Z%22%0A%20%20%20%20%20%20interval%3A%20%221d%22)%20%7B%0A%20%20%20%20%20%20%20%20datetime%0A%20%20%20%20%20%20%20%20value%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D>)

MCD Dai Savings Rate:
```graphql
{
  getMetric(metric: "mcd_dsr") {
    timeseriesData(
      slug: "multi-collateral-dai"
      from: "2020-01-01T00:00:00Z"
      to: "2020-01-07T00:00:00Z"
      interval: "1d") {
        datetime
        value
    }
  }
}
```
[**Run in Explorer**](<https://api.santiment.net/graphiql?query=%7B%0A%20%20getMetric(metric%3A%20%22mcd_dsr%22)%20%7B%0A%20%20%20%20timeseriesData(%0A%20%20%20%20%20%20slug%3A%20%22multi-collateral-dai%22%0A%20%20%20%20%20%20from%3A%20%222020-01-01T00%3A00%3A00Z%22%0A%20%20%20%20%20%20to%3A%20%222020-01-07T00%3A00%3A00Z%22%0A%20%20%20%20%20%20interval%3A%20%221d%22)%20%7B%0A%20%20%20%20%20%20%20%20datetime%0A%20%20%20%20%20%20%20%20value%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D>)

MCD Stability Fee:
```graphql
{
  getMetric(metric: "mcd_stability_fee") {
    timeseriesData(
      slug: "weth"
      from: "2020-01-01T00:00:00Z"
      to: "2020-01-07T00:00:00Z"
      interval: "1d") {
        datetime
        value
    }
  }
}
```
[**Run in Explorer**](<https://api.santiment.net/graphiql?query=%7B%0A%20%20getMetric(metric%3A%20%22mcd_stability_fee%22)%20%7B%0A%20%20%20%20timeseriesData(%0A%20%20%20%20%20%20slug%3A%20%22weth%22%0A%20%20%20%20%20%20from%3A%20%222020-01-01T00%3A00%3A00Z%22%0A%20%20%20%20%20%20to%3A%20%222020-01-07T00%3A00%3A00Z%22%0A%20%20%20%20%20%20interval%3A%20%221d%22)%20%7B%0A%20%20%20%20%20%20%20%20datetime%0A%20%20%20%20%20%20%20%20value%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D>)

DAI Created:
```graphql
{
  getMetric(metric: "dai_created") {
    timeseriesData(
      slug: "weth"
      from: "2020-01-01T00:00:00Z"
      to: "2020-01-02T00:00:00Z"
      interval: "5m") {
        datetime
        value
    }
  }
}
```
[**Run in Explorer**](<https://api.santiment.net/graphiql?query=%7B%0A%20%20getMetric(metric%3A%20%22dai_created%22)%20%7B%0A%20%20%20%20timeseriesData(%0A%20%20%20%20%20%20slug%3A%20%22weth%22%0A%20%20%20%20%20%20from%3A%20%222020-01-01T00%3A00%3A00Z%22%0A%20%20%20%20%20%20to%3A%20%222020-01-02T00%3A00%3A00Z%22%0A%20%20%20%20%20%20interval%3A%20%225m%22)%20%7B%0A%20%20%20%20%20%20%20%20datetime%0A%20%20%20%20%20%20%20%20value%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D>)

DAI Repaid:
```graphql
{
  getMetric(metric: "dai_repaid") {
    timeseriesData(
      slug: "weth"
      from: "2020-01-01T00:00:00Z"
      to: "2020-01-02T00:00:00Z"
      interval: "5m") {
        datetime
        value
    }
  }
}
```
[**Run in Explorer**](<https://api.santiment.net/graphiql?query=%7B%0A%20%20getMetric(metric%3A%20%22dai_repaid%22)%20%7B%0A%20%20%20%20timeseriesData(%0A%20%20%20%20%20%20slug%3A%20%22weth%22%0A%20%20%20%20%20%20from%3A%20%222020-01-01T00%3A00%3A00Z%22%0A%20%20%20%20%20%20to%3A%20%222020-01-02T00%3A00%3A00Z%22%0A%20%20%20%20%20%20interval%3A%20%225m%22)%20%7B%0A%20%20%20%20%20%20%20%20datetime%0A%20%20%20%20%20%20%20%20value%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D>)
