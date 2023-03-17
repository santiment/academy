---
title: Number of new accounts created
author: Boris
date: 2023-03-13
description:
---

## Description

The number of new accounts created is computed on top of the balances table. It is computed as a unique counter of addresses that don’t have `oldBlockNumber` defined, i.e. equal to  NULL, which is exactly the new address since the Flink job does not have old block number saved in memory for given address.

https://academy.santiment.net/metrics/network-growth/

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

Available for [these assets](https://api.santiment.net/graphiql?variables=&query=%7B%0A%20%20getMetric(metric%3A%20%22network_growth%22)%20%7B%0A%20%20%20%20metadata%20%7B%0A%20%20%20%20%20%20availableSlugs%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A)

---

### SanAPI

Available under the `network_growth` name.

```graphql
{
  getMetric(metric: "network_growth") {
  }
}
```

[**Run in Explorer**]()
