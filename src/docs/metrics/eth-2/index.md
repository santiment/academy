---
title: ETH 2.0 Metrics
author: Maksim Razhev
date: 2021-01-28
description: ETH 2.0 Metrics
---

## Description
Metrics that show stats related to the ETH 2.0 Staking Contract

* `eth2_stakers_count` - amount of addresses that sent ETH to the ETH 2.0 Staking Contract
* `eth2_top_stakers` - top addresses by staked amount
* `eth2_stakers_realized_value_usd_<timebound>` - [Realized value](/metrics/realized-value) of stakers addresses.
Metric is available for different [time bounds](/metrics/details/timebound).
* `eth2_stakers_mvrv_usd_<timebound>` - [MVRV](/metrics/mvrv) of stakers addresses.
Metric is available for different [time bounds](/metrics/details/timebound).
* `eth2_roi` - the annual return on staking in the ETH 2.0 contract
* `eth2_staked_amount_per_label` - total staked amount by label
* `eth2_staked_address_count_per_label` - amount of addresses that staked ETH by label
* `eth2_unlabeled_staker_inflow_sources` - shows sources from which unlabeled stakers received ETH

---

## Access

[Restricted Access](/metrics/details/access#restricted-access).

---

## Measuring Unit
* `eth2_stakers_count` - Amount of addresses
* `eth2_roi` - Percents
* `eth2_stakers_realized_value_usd_<timebound>` and `eth2_stakers_mvrv_usd_<timebound>` - USD

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
  getMetric(metric: "eth2_stakers_count") {
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
[**Run in Explorer**](<https://api.santiment.net/graphiql?query=%7B%0A%20%20getMetric(metric%3A%20%22eth2_stakers_count%22)%20%7B%0A%20%20%20%20timeseriesData(%0A%20%20%20%20%20%20selector%3A%20%7B%0A%20%20%20%20%20%20%20%20slug%3A%20%22ethereum%22%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20from%3A%20%222020-12-05T00%3A00%3A00Z%22%0A%20%20%20%20%20%20to%3A%20%222020-12-06T00%3A00%3A00Z%22%0A%20%20%20%20%20%20interval%3A%20%225m%22%0A%20%20%20%20)%20%7B%0A%20%20%20%20%20%20datetime%0A%20%20%20%20%20%20value%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D>)

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

ETH 2.0 Total Staked Amount:
```graphql
{
  getMetric(metric: "balance_per_owner") {
    timeseriesData(
      selector: {
        slug: "ethereum"
        label: "eth2stakingcontract"
        owner: "eth2stakingcontract"
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
[**Run in Explorer**](<https://api.santiment.net/graphiql?query=%7B%0A%20%20getMetric(metric%3A%20%22balance_per_owner%22)%20%7B%0A%20%20%20%20timeseriesData(%0A%20%20%20%20%20%20selector%3A%20%7B%0A%20%20%20%20%20%20%20%20slug%3A%20%22ethereum%22%0A%20%20%20%20%20%20%20%20label%3A%20%22eth2stakingcontract%22%0A%20%20%20%20%20%20%20%20owner%3A%20%22eth2stakingcontract%22%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20from%3A%20%222020-12-05T00%3A00%3A00Z%22%0A%20%20%20%20%20%20to%3A%20%222020-12-06T00%3A00%3A00Z%22%0A%20%20%20%20%20%20interval%3A%20%225m%22%0A%20%20%20%20)%20%7B%0A%20%20%20%20%20%20datetime%0A%20%20%20%20%20%20value%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D>)

Staked amount per label:
```graphql
{
  getMetric(metric: "eth2_staked_amount_per_label") {
    histogramData(
      selector: {slug: "ethereum"}
      from: "utc_now-70d"
      to:"utc_now"
    ){
      values{
        __typename
        ... on StringLabelFloatValueList{
        data{
            label
            value
          }
      	}
      }
    }
  }
}
```
[**Run in Explorer**](<https://api.santiment.net/graphiql?query=%7B%0A%20%20getMetric(metric%3A%20%22eth2_staked_amount_per_label%22)%20%7B%0A%20%20%20%20histogramData(%0A%20%20%20%20%20%20selector%3A%20%7Bslug%3A%20%22ethereum%22%7D%0A%20%20%20%20%20%20from%3A%20%22utc_now-70d%22%0A%20%20%20%20%20%20to%3A%22utc_now%22%0A%20%20%20%20)%7B%0A%20%20%20%20%20%20values%7B%0A%20%20%20%20%20%20%20%20__typename%0A%20%20%20%20%20%20%20%20...%20on%20StringLabelFloatValueList%7B%0A%20%20%20%20%20%20%20%20data%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20label%0A%20%20%20%20%20%20%20%20%20%20%20%20value%0A%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%09%7D%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D>)

Count of addresses that staked:
```graphql
{
	getMetric(metric: "eth2_staked_address_count_per_label"){
          histogramData(
            selector: {slug: "ethereum"}
            from: "utc_now-10d"
            to: "utc_now"
          ){
			values{
         
        ... on StringLabelFloatValueList{
          data{
            label
            value
          }
        }
      }
    }
  }
}
```
[**Run in Explorer**](<https://api.santiment.net/graphiql?query=%7B%0A%09getMetric(metric%3A%20%22eth2_staked_address_count_per_label%22)%7B%0A%20%20%20%20%20%20%20%20%20%20histogramData(%0A%20%20%20%20%20%20%20%20%20%20%20%20selector%3A%20%7Bslug%3A%20%22ethereum%22%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20from%3A%20%22utc_now-10d%22%0A%20%20%20%20%20%20%20%20%20%20%20%20to%3A%20%22utc_now%22%0A%20%20%20%20%20%20%20%20%20%20)%7B%0A%09%09%09values%7B%0A%20%20%20%20%20%20%20%20%20%0A%20%20%20%20%20%20%20%20...%20on%20StringLabelFloatValueList%7B%0A%20%20%20%20%20%20%20%20%20%20data%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20label%0A%20%20%20%20%20%20%20%20%20%20%20%20value%0A%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D>)

Sources for the unlabelled stakes source:
```graphql
{
	getMetric(metric: "eth2_unlabeled_staker_inflow_sources"){
    histogramData(
      selector: {slug: "ethereum"}
      from: "utc_now-10d"
      to: "utc_now"
    ){
			values{
         
        ... on StringLabelFloatValueList{
          data{
            label
            value
          }
        }
      }
    }
  }
}
```
[**Run in Explorer**](<https://api.santiment.net/graphiql?query=%7B%0A%09getMetric(metric%3A%20%22eth2_unlabeled_staker_inflow_sources%22)%7B%0A%20%20%20%20histogramData(%0A%20%20%20%20%20%20selector%3A%20%7Bslug%3A%20%22ethereum%22%7D%0A%20%20%20%20%20%20from%3A%20%22utc_now-10d%22%0A%20%20%20%20%20%20to%3A%20%22utc_now%22%0A%20%20%20%20)%7B%0A%09%09%09values%7B%0A%20%20%20%20%20%20%20%20%20%0A%20%20%20%20%20%20%20%20...%20on%20StringLabelFloatValueList%7B%0A%20%20%20%20%20%20%20%20%20%20data%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20label%0A%20%20%20%20%20%20%20%20%20%20%20%20value%0A%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D>)

Top stakers:
```graphql
{
	getMetric(metric: "eth2_top_stakers"){
    histogramData(
      selector: {slug: "ethereum"}
      from: "utc_now-10d"
      to: "utc_now"
      limit: 2
    ){
			values{
         
        ... on StringAddressStringLabelFloatValueList{
          data{
            address
            label
            value
          }
        }
      }
    }
  }
}
```
[**Run in Explorer**](<https://api.santiment.net/graphiql?query=%7B%0A%09getMetric(metric%3A%20%22eth2_top_stakers%22)%7B%0A%20%20%20%20histogramData(%0A%20%20%20%20%20%20selector%3A%20%7Bslug%3A%20%22ethereum%22%7D%0A%20%20%20%20%20%20from%3A%20%22utc_now-10d%22%0A%20%20%20%20%20%20to%3A%20%22utc_now%22%0A%20%20%20%20%20%20limit%3A%202%0A%20%20%20%20)%7B%0A%09%09%09values%7B%0A%20%20%20%20%20%20%20%20%20%0A%20%20%20%20%20%20%20%20...%20on%20StringAddressStringLabelFloatValueList%7B%0A%20%20%20%20%20%20%20%20%20%20data%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20address%0A%20%20%20%20%20%20%20%20%20%20%20%20label%0A%20%20%20%20%20%20%20%20%20%20%20%20value%0A%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D>)

Available under the `eth2_stakers_realized_value_usd_<timebound>` 
and `eth2_stakers_mvrv_usd_<timebound>` names.

```graphql
{
  getMetric(metric: "eth2_stakers_realized_value_usd_365d") {
    timeseriesData(
      slug: "ethereum"
      from: "2023-01-01T00:00:00Z"
      to: "2023-01-07T00:00:00Z"
      interval: "1d"
    ) {
      datetime
      value
    }
  }
}
```

**[Run in Explorer](<https://api.santiment.net/graphiql?query=%7B%0A%20%20getMetric(metric%3A%20%22eth2_stakers_realized_value_usd_365d%22)%20%7B%0A%20%20%20%20timeseriesData(%0A%20%20%20%20%20%20slug%3A%20%22ethereum%22%0A%20%20%20%20%20%20from%3A%20%222023-01-01T00%3A00%3A00Z%22%0A%20%20%20%20%20%20to%3A%20%222023-01-07T00%3A00%3A00Z%22%0A%20%20%20%20%20%20interval%3A%20%221d%22%0A%20%20%20%20)%20%7B%0A%20%20%20%20%20%20datetime%0A%20%20%20%20%20%20value%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D>)**

## Full list of metrics

<Details>
<Summary>ETH 2.0 metrics</Summary>
- eth2_stakers_count
- eth2_top_stakers
- eth2_roi
- eth2_staked_amount_per_label
- eth2_staked_address_count_per_label
- eth2_unlabeled_staker_inflow_sources
- eth2_stakers_realized_value_usd_365d
- eth2_stakers_realized_value_usd_2y
- eth2_stakers_realized_value_usd_3y
- eth2_stakers_realized_value_usd_5y
- eth2_stakers_realized_value_usd_10y
- eth2_stakers_mvrv_usd_365d
- eth2_stakers_mvrv_usd_2y
- eth2_stakers_mvrv_usd_3y
- eth2_stakers_mvrv_usd_5y
- eth2_stakers_mvrv_usd_10y
</Details>
