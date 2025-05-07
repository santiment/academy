---
title: Assets Issued Metrics
author: Boris
date: 2023-03-13
description: Descriptions about the assets issued metrics
---

## Description

We track the issued assets under two metrics:

- **Total assets issued** - total number of issued assets through time
- **Number of new assets issued** - tracks only the new assets issued per day

We would count an asset as part of this metric only if the issuer has more than 100 active trustlines at the time the asset is issued.

---

## Access

[Free Access](/metrics/details/access#free-access)

---

## Measuring Unit

Amount of assets

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

Available under the `total_assets_issued` name.

```graphql-explorer
{
  getMetric(metric: "total_assets_issued") {
    timeseriesDataJson(
      slug: "xrp"
      from: "2020-01-01T00:00:00Z"
      to: "2020-01-07T00:00:00Z"
    )
  }
}
```

Available under the `daily_assets_issued` name.

```graphql-explorer
{
  getMetric(metric: "daily_assets_issued") {
    timeseriesDataJson(
      slug: "xrp"
      from: "2020-01-01T00:00:00Z"
      to: "2020-01-07T00:00:00Z"
    )
  }
}
```
