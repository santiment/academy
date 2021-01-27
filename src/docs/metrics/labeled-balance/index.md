---
title: Labeled Balance
author: Maksim Razhev
date: 2021-01-28
description: Labeled Balance Metrics
---

## Description
Metrics that show labeled addresses inflow, outflow and balances

* `inflow_per_label_and_owner` - inflow of a given owner
* `outflow_per_label_and_owner` - outflow of a given owner
* `balance_per_label_and_owner_delta` - balance change of a given owner
* `balance_per_owner` - balance of a given owner

Available [labels](/labels):
* `centralized_exchange`
* `decentralized_exchange`
* `defi`
* `eth2stakingcontract`
* `deposit`

---

## Access

[Restricted Access](/metrics/details/access#restricted-access)

---

## Measuring Unit
Amount of tokens

---

## Data Type
[Timeseries Data](/metrics/details/data-type#timeseries-data)

---

## Frequency
[Five-minute Intervals](/metrics/details/frequency#five-minute-frequency)

---

## Latency
[Price Latency](/metrics/details/latency#price-latency)

---

## Available Assets
* `ethereum`
* All ERC20 assets

---

### SanAPI
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

Outflow per label and owner (example DAI outflow to Compound):
```graphql
{
  getMetric(metric: "outflow_per_label_and_owner") {
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
[**Run in Explorer**](<https://api.santiment.net/graphiql?query=%7B%0A%20%20getMetric(metric%3A%20%22outflow_per_label_and_owner%22)%20%7B%0A%20%20%20%20timeseriesData(%0A%20%20%20%20%20%20selector%3A%20%7B%0A%20%20%20%20%20%20%20%20slug%3A%20%22multi-collateral-dai%22%0A%20%20%20%20%20%20%09owner%3A%20%22compound%22%0A%20%20%20%20%20%20%09label%3A%20%22defi%22%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20from%3A%20%222020-04-01T00%3A00%3A00Z%22%0A%20%20%20%20%20%20to%3A%20%222020-04-07T00%3A00%3A00Z%22%0A%20%20%20%20%20%20interval%3A%20%221h%22%0A%20%20%20%20)%20%7B%0A%20%20%20%20%20%20datetime%0A%20%20%20%20%20%20value%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D>)

Outflow per label:
```graphql
{
  getMetric(metric: "outflow_per_label_and_owner") {
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
[**Run in Explorer**](<https://api.santiment.net/graphiql?query=%7B%0A%20%20getMetric(metric%3A%20%22outflow_per_label_and_owner%22)%20%7B%0A%20%20%20%20timeseriesData(%0A%20%20%20%20%20%20selector%3A%20%7B%0A%20%20%20%20%20%20%20%20slug%3A%20%22multi-collateral-dai%22%0A%20%20%20%20%20%20%09label%3A%20%22defi%22%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20from%3A%20%222020-04-01T00%3A00%3A00Z%22%0A%20%20%20%20%20%20to%3A%20%222020-04-07T00%3A00%3A00Z%22%0A%20%20%20%20%20%20interval%3A%20%225m%22%0A%20%20%20%20)%20%7B%0A%20%20%20%20%20%20datetime%0A%20%20%20%20%20%20value%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D>)

Balance delta per label and owner (example DAI balance delta of Aave):
```graphql
{
  getMetric(metric: "balance_per_label_and_owner_delta") {
    timeseriesData(
      selector: {
        slug: "multi-collateral-dai"
      	owner: "aave"
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
[**Run in Explorer**](<https://api.santiment.net/graphiql?query=%7B%0A%20%20getMetric(metric%3A%20%22balance_per_label_and_owner_delta%22)%20%7B%0A%20%20%20%20timeseriesData(%0A%20%20%20%20%20%20selector%3A%20%7B%0A%20%20%20%20%20%20%20%20slug%3A%20%22multi-collateral-dai%22%0A%20%20%20%20%20%20%09owner%3A%20%22aave%22%0A%20%20%20%20%20%20%09label%3A%20%22defi%22%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20from%3A%20%222020-04-01T00%3A00%3A00Z%22%0A%20%20%20%20%20%20to%3A%20%222020-04-07T00%3A00%3A00Z%22%0A%20%20%20%20%20%20interval%3A%20%221h%22%0A%20%20%20%20)%20%7B%0A%20%20%20%20%20%20datetime%0A%20%20%20%20%20%20value%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D>)

Balance per label and owner (example DAI balance of Aave):
```graphql
{
  getMetric(metric: "balance_per_owner") {
    timeseriesData(
      selector: {
        slug: "multi-collateral-dai"
      	owner: "aave"
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
[**Run in Explorer**](<https://api.santiment.net/graphiql?query=%7B%0A%20%20getMetric(metric%3A%20%22balance_per_owner%22)%20%7B%0A%20%20%20%20timeseriesData(%0A%20%20%20%20%20%20selector%3A%20%7B%0A%20%20%20%20%20%20%20%20slug%3A%20%22multi-collateral-dai%22%0A%20%20%20%20%20%20%09owner%3A%20%22aave%22%0A%20%20%20%20%20%20%09label%3A%20%22defi%22%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20from%3A%20%222020-04-01T00%3A00%3A00Z%22%0A%20%20%20%20%20%20to%3A%20%222020-04-07T00%3A00%3A00Z%22%0A%20%20%20%20%20%20interval%3A%20%221h%22%0A%20%20%20%20)%20%7B%0A%20%20%20%20%20%20datetime%0A%20%20%20%20%20%20value%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D>)
