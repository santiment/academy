---
title: ETH 2.0 Metrics
author: Maksim Razhev
date: 2021-01-26
description: ETH 2.0 Metrics
---

## Description
Metrics that show stats related to the ETH 2.0 Staking Contract

* `eth2_staker_count` - amount of addresses that sent ETH to the ETH 2.0 Staking Contract
* `eth2_roi` - the annual return on staking in the ETH 2.0 contract

---

## Access

[Restricted Access](/metrics/details/access#restricted-access).

---

## Measuring Unit
* `eth2_staker_count` - Amount of addresses
* `eth2_roi` - Percents

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
`ethereum`

---

### SanAPI
ETH 2.0 Staker Count:
```graphql
{
  getMetric(metric: "eth2_staker_count") {
    timeseriesData(
      selector: {
        slug: "ethereum"
      }
      from: "2020-12-05T00:00:00Z"
      to: "2020-12-06T00:00:00Z"
      interval: "5m"
    ) {
      datetime
      value
    }
  }
}
```
[**Run in Explorer**](<https://api.santiment.net/graphiql?query=%7B%0A%20%20getMetric(metric%3A%20%22eth2_staker_count%22)%20%7B%0A%20%20%20%20timeseriesData(%0A%20%20%20%20%20%20selector%3A%20%7B%0A%20%20%20%20%20%20%20%20slug%3A%20%22ethereum%22%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20from%3A%20%222020-12-05T00%3A00%3A00Z%22%0A%20%20%20%20%20%20to%3A%20%222020-12-06T00%3A00%3A00Z%22%0A%20%20%20%20%20%20interval%3A%20%225m%22%0A%20%20%20%20)%20%7B%0A%20%20%20%20%20%20datetime%0A%20%20%20%20%20%20value%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D>)

ETH 2.0 Staking ROI:
```graphql
{
  getMetric(metric: "eth2_roi") {
    timeseriesData(
      selector: {
        slug: "ethereum"
      }
      from: "2020-12-05T00:00:00Z"
      to: "2020-12-06T00:00:00Z"
      interval: "5m"
    ) {
      datetime
      value
    }
  }
}
```
[**Run in Explorer**](<https://api.santiment.net/graphiql?query=%7B%0A%20%20getMetric(metric%3A%20%22eth2_roi%22)%20%7B%0A%20%20%20%20timeseriesData(%0A%20%20%20%20%20%20selector%3A%20%7B%0A%20%20%20%20%20%20%20%20slug%3A%20%22ethereum%22%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20from%3A%20%222020-12-05T00%3A00%3A00Z%22%0A%20%20%20%20%20%20to%3A%20%222020-12-06T00%3A00%3A00Z%22%0A%20%20%20%20%20%20interval%3A%20%225m%22%0A%20%20%20%20)%20%7B%0A%20%20%20%20%20%20datetime%0A%20%20%20%20%20%20value%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D>)
