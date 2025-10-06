---
title: Transaction Volume
author: Santiment Team
date: 2020-04-14
description: Amount of coin/tokens moved on-chain.
---

## Description

The `transaction_volume` metric shows total on-chain amount of coins/tokens transacted for a given asset in a given time interval.

The `transaction_volume_usd` metric shows the total on-chain amount of coins/tokens in USD transacted for a given asset in a given time interval.
To compute it, the amount of coins/tokens in each transaction is multiplied by the price in USD of the asset at that moment.

---

## Access

[Restricted Access](/metrics/details/access#restricted-access).

---

## Measuring Unit

Amount of coins/tokens

---

## Data Type

[Timeseries Data](/metrics/details/data-type#timeseries-data)

---

## Change Metrics

[Change Metrics](/metrics/details/change_metrics)

---

## Frequency

- transaction_volume - [Five-Minute Intervals](/metrics/details/frequency#five-minute-frequency)
- transaction_volume_usd - [Daily Intervals](/metrics/details/frequency#daily-frequency)

---

## Latency

[On-Chain Latency](/metrics/details/latency#on-chain-latency)

---

## Available Assets

Available for [these
assets](<https://api.santiment.net/graphiql?variables=&query=%7B%0A%20%20getMetric(metric%3A%20%22transaction_volume%22)%20%7B%0A%20%20%20%20metadata%20%7B%0A%20%20%20%20%20%20availableSlugs%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A>)

---

## SanAPI

Available under the `transaction_volume` name.

```graphql-explorer
{
  getMetric(metric: "transaction_volume") {
    timeseriesDataJson(
      slug: "bitcoin"
      from: "2025-04-01T00:00:00Z"
      to: "2025-04-07T00:00:00Z"
      interval: "1h"
    )
  }
}
```

## Full list of metrics

The full list of Transaction Volume metrics is:

<Details>

<Summary>Open Metrics List</Summary>

- transaction_volume
- transaction_volume_usd
- transaction_volume_change_1d
- transaction_volume_change_30d
- transaction_volume_change_7d
- transaction_volume_usd_change_1d
- transaction_volume_usd_change_30d
- transaction_volume_usd_change_7d

</Details>
