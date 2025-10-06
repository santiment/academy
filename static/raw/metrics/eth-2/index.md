---
title: ETH 2.0 Metrics
author: Maksim Razhev, Filip
date: 2021-01-28
description: ETH 2.0 Metrics
---

## Description

Metrics that show stats related to the ETH 2.0 Staking Contract

- `eth2_stakers_count` - Amount of addresses that sent ETH to the ETH 2.0 Staking Contract
- `eth2_stakers_realized_value_usd_<timebound>` - [Realized value](/metrics/realized-value) of stakers addresses.
  Metric is available for different [time bounds](/metrics/details/timebound).
- `eth2_stakers_mvrv_usd_<timebound>` - [MVRV](/metrics/mvrv) of stakers addresses.
  Metric is available for different [time bounds](/metrics/details/timebound).
- `eth2_roi` - The annual return on staking in the ETH 2.0 contract

ETH 2.0 histogram metrics - see [examples](#sanapi) for details how to query it:

- `eth2_top_stakers` - Top addresses by staked amount
- `eth2_staked_amount_per_label` - Total staked amount by label
- `eth2_staked_address_count_per_label` - Amount of addresses that staked ETH by label

Beacon chain metrics:

- `eth_beacon_deposits` - Amount of ETH deposited into the Beacon Chain contract
- `eth_beacon_validator_withdrawals` - Withdrawals made by validators from the Ethereum Beacon Chain contract
- `eth_beacon_reward_withdrawals` - Withdrawals of rewards by validators from the Ethereum Beacon Chain contract

---

## Access

[Restricted Access](/metrics/details/access#restricted-access).

---

## Measuring Unit

- `eth2_stakers_count` - Amount of addresses
- `eth2_roi` - Percents
- `eth2_stakers_realized_value_usd_<timebound>` and `eth2_stakers_mvrv_usd_<timebound>` - USD
- `eth_beacon_deposits`, `eth_beacon_validator_withdrawals` and
  `eth_beacon_reward_withdrawals` - Amount in ETH

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

```graphql-explorer
{
  getMetric(metric: "eth2_stakers_count") {
    timeseriesDataJson(
      selector: { slug: "ethereum" }
      from: "2020-12-05T00:00:00Z"
      to: "2020-12-06T00:00:00Z"
      interval: "5m"
    )
  }
}
```

ETH 2.0 Staking ROI:

```graphql-explorer
{
  getMetric(metric: "eth2_roi") {
    timeseriesDataJson(
      selector: { slug: "ethereum" }
      from: "2020-12-05T00:00:00Z"
      to: "2020-12-06T00:00:00Z"
      interval: "5m"
    )
  }
}
```

ETH 2.0 Total Staked Amount:

```graphql-explorer
{
  getMetric(metric: "balance_per_owner") {
    timeseriesDataJson(
      selector: {
        slug: "ethereum"
        label: "eth2stakingcontract"
        owner: "eth2stakingcontract"
      }
      from: "2020-12-05T00:00:00Z"
      to: "2020-12-06T00:00:00Z"
      interval: "5m"
    )
  }
}
```

Staked amount per label:

```graphql
{
  getMetric(metric: "eth2_staked_amount_per_label") {
    histogramData(
      selector: { slug: "ethereum" }
      from: "utc_now-70d"
      to: "utc_now"
    ) {
      values {
        __typename
        ... on StringLabelFloatValueList {
          data {
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
  getMetric(metric: "eth2_staked_address_count_per_label") {
    histogramData(
      selector: { slug: "ethereum" }
      from: "utc_now-10d"
      to: "utc_now"
    ) {
      values {
        ... on StringLabelFloatValueList {
          data {
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

Top stakers:

```graphql
{
  getMetric(metric: "eth2_top_stakers") {
    histogramData(
      selector: { slug: "ethereum" }
      from: "utc_now-10d"
      to: "utc_now"
      limit: 2
    ) {
      values {
        ... on StringAddressStringLabelFloatValueList {
          data {
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

```graphql-explorer
{
  getMetric(metric: "eth2_stakers_realized_value_usd_365d") {
    timeseriesDataJson(
      slug: "ethereum"
      from: "2023-01-01T00:00:00Z"
      to: "2023-01-07T00:00:00Z"
      interval: "1d"
    )
  }
}
```

Available under the `eth_beacon_deposits`, `eth_beacon_validator_withdrawals` and
`eth_beacon_reward_withdrawals` names.

```graphql-explorer
{
  getMetric(metric: "eth_beacon_deposits") {
    timeseriesDataJson(
      slug: "ethereum"
      from: "2023-01-01T00:00:00Z"
      to: "2023-01-07T00:00:00Z"
      interval: "1d"
    )
  }
}
```

## Full list of metrics

<Details>
<Summary>ETH 2.0 histogram metrics</Summary>
- eth2_top_stakers
- eth2_staked_amount_per_label
- eth2_staked_address_count_per_label
</Details>

<Details>
<Summary>ETH 2.0 metrics</Summary>
- eth_beacon_deposits
- eth_beacon_validator_withdrawals
- eth_beacon_reward_withdrawals
- eth2_stakers_count
- eth2_roi
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
