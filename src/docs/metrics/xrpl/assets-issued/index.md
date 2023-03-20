---
title: 
author: Boris
date: 2023-03-13
description:
---

## Description

We can track the issued assets under 2 metrics:
- `total_assets_issued` - which tracks the total number for a given time
- `daily_assets_issued` - which tracks only the new assets for a given time

---

## Access

[Free Access](/metrics/details/access#free-access)

---

## Measuring Unit

Number of assets

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
- `total_assets_issued` - [these assets](https://api.santiment.net/graphiql?variables=&query=%7B%0A%20%20getMetric(metric%3A%20%22total_assets_issued%22)%20%7B%0A%20%20%20%20metadata%20%7B%0A%20%20%20%20%20%20availableSlugs%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A)
- `daily_assets_issued` - [these assets](https://api.santiment.net/graphiql?variables=&query=%7B%0A%20%20getMetric(metric%3A%20%22daily_assets_issued%22)%20%7B%0A%20%20%20%20metadata%20%7B%0A%20%20%20%20%20%20availableSlugs%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A)

---

### SanAPI

Available under the `total_assets_issued` and `daily_assets_issued` name.

```graphql
{
  getMetric(metric: "total_assets_issued") {
  }
}
```

[**Run in Explorer**]()

```graphql
{
  getMetric(metric: "daily_assets_issued") {
  }
}
```

[**Run in Explorer**]()
