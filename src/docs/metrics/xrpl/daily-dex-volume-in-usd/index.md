---
title: Daily DEX volume in USD
author: Boris
date: 2023-03-13
description:
---

## Description

Daily DEX volume in USD tracks the exchange volume at the XRPL Decentralized Exchange. The volume includes all trades where at least one of the assets in the pair have recently traded against XRP.

---

## Access

[Free Access](/metrics/details/access#free-access)

---

## Measuring Unit

USD

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

Available for [these assets](https://api.santiment.net/graphiql?variables=&query=%7B%0A%20%20getMetric(metric%3A%20%22daily_dex_volume_in_xrp%22)%20%7B%0A%20%20%20%20metadata%20%7B%0A%20%20%20%20%20%20availableSlugs%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A)
---

### SanAPI

Available under the `daily_dex_volume_in_xrp` name.

```graphql
{
  getMetric(metric: "daily_dex_volume_in_xrp") {
  }
}
```

[**Run in Explorer**]()
