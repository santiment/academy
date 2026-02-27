---
title: Deprecated MakerDAO Metrics
author: Maksim Razhev, Serge Nedashkovsky, Filip
date: 2021-01-28
description: Deprecated MakerDAO Metrics
---

<Notebox type="note">
Note: MakerDAO metrics have been migrated to a new framework. 
**Although older data remains accessible through the API, we do not recommend its use.**
The old metrics will stop being computed and they will be removed.
</Notebox>

## Description

Metrics related to MakerDAO protocols.

**Single-Collateral DAI**:

* `scd_locked_token` - The volume of WETH locked in Single-Collateral DAI contract.
* `scd_collat_ratio` - Single-Collateral DAI Collateralization Ratio

**Multi-Collateral DAI**:

* `mcd_locked_token` - The volume of collateral locked in Multi-Collateral DAI contracts, 
measured by a token<sup>[1]
* `mcd_liquidation` - Amount of liquidated tokens<sup>[2]
* `mcd_erc20_supply` - DAI ERC20 token total supply
* `mcd_supply` - The total amount of Multi-Collateral DAI tokens: DAI ERC20 Supply plus DAI in DSR
* `mcd_collat_ratio_weth` - These metrics show the collateralization ratio of MCD collateral tokens.

> [1]: Please switch to the new metric `makerdao_total_supplied_usd`,
> [2]: Please switch to the new metric `makerdao_action_liquidations_usd`

---

## Access

[Restricted Access](/metrics/details/access#restricted-access).

---

## Measuring Unit

The following metrics' unit is amount of coins:
- `mcd_locked_token`
- `scd_locked_token`
- `mcd_erc20_supply`
- `mcd_supply`

The rest:
- MakerDAO contract parameter values
---

## Data Type

[Timeseries Data](/metrics/details/data-type#timeseries-data)

---

## Frequency

The following metrics have [Five-minute Intervals](/metrics/details/frequency#five-minute-frequency)
- `mcd_supply` - [Five-minute Intervals](/metrics/details/frequency#five-minute-frequency)
 
The rest of the metrics have [Daily Intervals](/metrics/details/frequency#daily-frequency)

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
* `scd_locked_token`, `mcd_collat_ratio_weth`, `scd_collat_ratio` - `weth`
* `daily_dai_collat_ratio_stablecoin` - USD-based stablecoin collaterals
* `daily_dai_collat_ratio_wbtc` - `wrapped-bitcoin`
* `mcd_erc20_supply`, `mcd_supply`, `msd_dsr` - `multi-collateral-dai`
---

### SanAPI

Token Locked in Multi-Collateral CDPs 

```graphql-explorer
{
  getMetric(metric: "mcd_locked_token") {
    timeseriesDataJson(
      slug: "weth"
      from: "2020-04-01T00:00:00Z"
      to: "2020-04-07T00:00:00Z"
      interval: "1d")
  }
}
```

DAI ERC20 token total supply:
```graphql-explorer
{
  getMetric(metric: "mcd_erc20_supply") {
    timeseriesDataJson(
      slug: "multi-collateral-dai"
      from: "2020-04-01T00:00:00Z"
      to: "2020-04-07T00:00:00Z"
      interval: "1d")
  }
}
```

DAI Total supply:
```graphql-explorer
{
  getMetric(metric: "mcd_supply") {
    timeseriesDataJson(
      slug: "multi-collateral-dai"
      from: "2020-04-02T00:00:00Z"
      to: "2020-04-03T00:00:00Z"
      interval: "5m")
  }
}
```

SCD Collateral Ratio:
```graphql-explorer
{
  getMetric(metric: "scd_collat_ratio") {
    timeseriesDataJson(
      slug: "weth"
      from: "2020-04-01T00:00:00Z"
      to: "2020-04-07T00:00:00Z"
      interval: "1d")
  }
}
```

