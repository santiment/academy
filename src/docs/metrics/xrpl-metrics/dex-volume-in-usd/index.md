---
title: DEX volume in USD
author: Boris
date: 2023-03-13
description:
---

## Description

DEX volume in USD tracks the exchange volume at the XRPL Decentralized Exchange. The volume includes all trades where at least one of the assets in the pair have recently traded against XRP.

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

[Five-Minute Intervals](/metrics/details/frequency#five-minute-frequency)

---

## Latency

[On-Chain Latency](/metrics/details/latency#on-chain-latency)

---

## Available Assets

Available for [these assets](https://api.santiment.net/graphiql?variables=&query=%7B%0A%20%20getMetric(metric%3A%20%22dex_volume_in_usd_5m%22)%20%7B%0A%20%20%20%20metadata%20%7B%0A%20%20%20%20%20%20availableSlugs%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A)

---

### SanAPI

Available under the `dex_volume_in_usd_5m` name.

```graphql
{
  getMetric(metric: "dex_volume_in_usd_5m") {
    timeseriesData(
      slug: "xrp"
      from: "2023-01-01T00:00:00Z"
      to: "2023-01-07T00:00:00Z"
    ) {
      datetime
      value
    }
  }
}
```

[**Run in Explorer**](https://api.santiment.net/graphiql?variables=&query=%7B%0A%20%20getMetric(metric%3A%20%22dex_volume_in_usd_5m%22)%20%7B%0A%20%20%20%20timeseriesData(%0A%20%20%20%20%20%20slug%3A%20%22xrp%22%0A%20%20%20%20%20%20from%3A%20%222023-01-01T00%3A00%3A00Z%22%0A%20%20%20%20%20%20to%3A%20%222023-01-07T00%3A00%3A00Z%22%0A%20%20%20%20)%20%7B%0A%20%20%20%20%20%20datetime%0A%20%20%20%20%20%20value%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D)