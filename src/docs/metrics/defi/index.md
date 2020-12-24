---
title: DeFi
author: Serge Nedashkovsky, Maksim Razhev, Anatoliy
date: 2020-12-24
description: DeFi Metrics
---
# Special metrics
### [MakerDAO metrics](/metrics/makerdao)
# Common metrics

## Description

Metrics related to DeFi protocols

Flow and balance metrics:
* `inflow_per_label_and_owner`
* `outflow_per_label_and_owner`
* `balance_per_label_and_owner_delta`
* `balance_per_owner`

Total Value Locked metrics:
* `defi_total_value_locked_[usd/eth]` - Shows total value locked in DeFi projects, available in USD and ETH.

---

## Access

[Restricted Access](/metrics/details/access#restricted-access).

---

## Measuring Unit

Dollars/Amount of coins

---

## Data Type

[Timeseries Data](/metrics/details/data-type#timeseries-data)

---

## Frequency

* Flow and balance metrics - [Five-minute Intervals](/metrics/details/frequency#five-minute-frequency)
* Total Value Locked metrics - [Hourly Intervals](/metrics/details/frequency#hourly-frequency)

---

## Latency

[Price Latency](/metrics/details/latency#price-latency)

---

## Available Assets

* Total Value Locked metrics - Available for `ethereum` and `usd`.
* Flow and balance metrics - Available for `ethereum`, `bitcoin` and all ERC20 assets

---

### SanAPI

Amount of total locked ETH coins is available under the `defi_total_value_locked_eth` name.

```graphql
{
  getMetric(metric: "defi_total_value_locked_eth") {
    timeseriesData(
      slug: "ethereum"
      from: "2020-04-01T00:00:00Z"
      to: "2020-04-07T00:00:00Z"
      interval: "1h"
    ) {
      datetime
      value
    }
  }
}
```

[**Run in Explorer**](<https://api.santiment.net/graphiql?variables=&query=%7B%0A%20%20getMetric(metric%3A%20
%22defi_total_value_locked_eth%22)%20%7B%0A%20%20%20%20timeseriesData(%0A%20%20%20%20%20%20slug%3A%20%22ethereum
%22%0A%20%20%20%20%20%20from%3A%20%222020-04-01T00%3A00%3A00Z%22%0A%20%20%20%20%20%20to%3A%20%222020-04-07T00%3A00%3A00Z%22%0A%20%20%20%20%20%20interval%3A%20%221h%22)%20%7B%0A%20%20%20%20%20%20%20%20datetime%0A%20%20%20%20%20%20%20%20value%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A>)

Denominated in USD - `defi_total_value_locked_usd`.

```graphql
{
  getMetric(metric: "defi_total_value_locked_usd") {
    timeseriesData(
      slug: "ethereum"
      from: "2020-04-01T00:00:00Z"
      to: "2020-04-07T00:00:00Z"
      interval: "1h"
    ) {
      datetime
      value
    }
  }
}
```

[**Run in Explorer**](<https://api.santiment.net/graphiql?variables=&query=%7B%0A%20%20getMetric(metric%3A%20
%22defi_total_value_locked_usd%22)%20%7B%0A%20%20%20%20timeseriesData(%0A%20%20%20%20%20%20slug%3A%20%22ethereum
%22%0A%20%20%20%20%20%20from%3A%20%222020-04-01T00%3A00%3A00Z%22%0A%20%20%20%20%20%20to%3A%20%222020-04-07T00%3A00%3A00Z%22%0A%20%20%20%20%20%20interval%3A%20%221h%22)%20%7B%0A%20%20%20%20%20%20%20%20datetime%0A%20%20%20%20%20%20%20%20value%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A>)
  
Inflow per label and owner (example DAI inflow to Compound):
```graphql
{
  getMetric(metric: "inflow_per_label_and_owner") {
    timeseriesData(
      selector: {
        slug: "multi-collateral-dai"
      	owner: "compound"
      	label: "defi"
      }
      from: "2020-04-01T00:00:00Z"
      to: "2020-04-07T00:00:00Z"
      interval: "1h"
    ) {
      datetime
      value
    }
  }
}
```
[**Run in Explorer**](<https://api.santiment.net/graphiql?query=%7B%0A%20%20getMetric(metric%3A%20%22inflow_per_label_and_owner%22)%20%7B%0A%20%20%20%20timeseriesData(%0A%20%20%20%20%20%20selector%3A%20%7B%0A%20%20%20%20%20%20%20%20slug%3A%20%22multi-collateral-dai%22%0A%20%20%20%20%20%20%09owner%3A%20%22compound%22%0A%20%20%20%20%20%20%09label%3A%20%22defi%22%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20from%3A%20%222020-04-01T00%3A00%3A00Z%22%0A%20%20%20%20%20%20to%3A%20%222020-04-07T00%3A00%3A00Z%22%0A%20%20%20%20%20%20interval%3A%20%221h%22%0A%20%20%20%20)%20%7B%0A%20%20%20%20%20%20datetime%0A%20%20%20%20%20%20value%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D>)

Inflow per label (example DAI inflow to all DeFi protocols):
```graphql
{
  getMetric(metric: "inflow_per_label_and_owner") {
    timeseriesData(
      selector: {
        slug: "multi-collateral-dai"
      	label: "defi"
      }
      from: "2020-04-01T00:00:00Z"
      to: "2020-04-07T00:00:00Z"
      interval: "1h"
    ) {
      datetime
      value
    }
  }
}
```
[**Run in Explorer**](<https://api.santiment.net/graphiql?query=%7B%0A%20%20getMetric(metric%3A%20%22inflow_per_label_and_owner%22)%20%7B%0A%20%20%20%20timeseriesData(%0A%20%20%20%20%20%20selector%3A%20%7B%0A%20%20%20%20%20%20%20%20slug%3A%20%22multi-collateral-dai%22%0A%20%20%20%20%20%20%09label%3A%20%22defi%22%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20from%3A%20%222020-04-01T00%3A00%3A00Z%22%0A%20%20%20%20%20%20to%3A%20%222020-04-07T00%3A00%3A00Z%22%0A%20%20%20%20%20%20interval%3A%20%221h%22%0A%20%20%20%20)%20%7B%0A%20%20%20%20%20%20datetime%0A%20%20%20%20%20%20value%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D>)

Balance per label and owner (example 0x token balance of Compound):
```graphql
{
  getMetric(metric: "balance_per_owner") {
    timeseriesData(
      selector: {
        slug: "0x"
        owner: "compound"
      	label: "defi"
      }
      from: "2020-04-01T00:00:00Z"
      to: "2020-04-07T00:00:00Z"
      interval: "1h"
    ) {
      datetime
      value
    }
  }
}
```

[**Run in Explorer**](<https://api.santiment.net/graphiql?query=%7B%0A%20%20getMetric(metric%3A%20%22balance_per_owner%22)%20%7B%0A%20%20%20%20timeseriesData(%0A%20%20%20%20%20%20selector%3A%20%7B%0A%20%20%20%20%20%20%20%20slug%3A%20%220x%22%0A%20%20%20%20%20%20%20%20owner%3A%20%22compound%22%0A%20%20%20%20%20%20%09label%3A%20%22defi%22%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20from%3A%20%222020-04-01T00%3A00%3A00Z%22%0A%20%20%20%20%20%20to%3A%20%222020-04-07T00%3A00%3A00Z%22%0A%20%20%20%20%20%20interval%3A%20%221h%22%0A%20%20%20%20)%20%7B%0A%20%20%20%20%20%20datetime%0A%20%20%20%20%20%20value%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D>)
