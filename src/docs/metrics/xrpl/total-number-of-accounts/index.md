---
title: Total number of accounts
author: Boris
date: 2023-03-13
description: Amount of accounts on-chain.
---

## Description

The total number of accounts counts all addresses which hold any token across time. It is computed by summing all holder distribution metrics. Holder distribution metrics are computed on top of balances table.

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

Available for [these assets](https://api.santiment.net/graphiql?variables=&query=%7B%0A%20%20getMetric(metric%3A%20%22holders_distribution_total%22)%20%7B%0A%20%20%20%20metadata%20%7B%0A%20%20%20%20%20%20availableSlugs%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A)

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
