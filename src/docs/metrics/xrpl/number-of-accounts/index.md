---
title: Number of accounts
author: Boris
date: 2023-03-13
description: Metrics related to accounts
---

## Description

- **Total number of accounts** - Counts all addresses which hold any token across time. It is computed by summing all holder distribution metrics. Holder distribution metrics are computed on top of balances table.
- **Number of active accounts** - Tracks the number of addresses which have had a balance change in any token in a previous period of time. It is computed on top of balances table.
- **Number of accounts with minimum reserves** - computed by summing all holder distribution metrics except the following groups:
    - 0-0.001
    - 0.001-0.01
    - 0.01-0.1
    - 0.1-1
    - 1-10

---

## Access

[Free Access](/metrics/details/access#free-access)

---

## Measuring Unit

Amount of accounts

---

## Data Type

[Timeseries Data](/metrics/details/data-type#timeseries-data)

---

## Frequency

[Daily frequency](/metrics/details/frequency/#daily-frequency)

---

## Latency

[On-Chain Latency](/metrics/details/latency#on-chain-latency)

---

## Available Assets

Available for:
- `holders_distribution_total` - [these assets](https://api.santiment.net/graphiql?variables=&query=%7B%0A%20%20getMetric(metric:%20%22holders_distribution_total%22)%20%7B%0A%20%20%20%20metadata%20%7B%0A%20%20%20%20%20%20availableSlugs%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A)
- `active_addresses_30d` - [these assets](https://api.santiment.net/graphiql?variables=&query=%7B%0A%20%20getMetric(metric:%20%22active_addresses_30d%22)%20%7B%0A%20%20%20%20metadata%20%7B%0A%20%20%20%20%20%20availableSlugs%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A)
- `active_addresses_60d`, `active_addresses_90d` - [these assets](https://api.santiment.net/graphiql?variables=&query=%7B%0A%20%20getMetric(metric%3A%20%22active_addresses_60d%22)%20%7B%0A%20%20%20%20metadata%20%7B%0A%20%20%20%20%20%20availableSlugs%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A)

---

### SanAPI

Available under the `holders_distribution_total` name.

```graphql
{
  getMetric(metric: "holders_distribution_total") {
  }
}
```

[**Run in Explorer**]()

Available under the `active_addresses_30d`, `active_addresses_60d`, `active_addresses_90d` name.

```graphql
{
  getMetric(metric: "active_addresses_30d") {
    timeseriesData(
      slug: "xrp"
      from: "2020-01-01T00:00:00Z"
      to: "2020-01-07T00:00:00Z"
      interval: "30d"
    ) {
      datetime
      value
    }
  }
}
```

[**Run in Explorer**]()