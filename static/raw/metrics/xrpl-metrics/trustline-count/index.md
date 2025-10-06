---
title: Trustline Count Metrics
author: Boris
date: 2023-03-13
description: Descriptions about the trustline count metrics
---

## Description

We track two metrics related to trustline count:

- **Total number of trustlines** - the total amount of active trustline through time.
- **Net trustlines created** - change in number of active trustlines on a daily basis.

---

## Access

[Free Access](/metrics/details/access#free-access)

---

## Measuring Unit

Amount of trustlines

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
- `total_trustlines_count` - [these assets](https://api.santiment.net/graphiql?variables=&query=%7B%0A%20%20getMetric(metric%3A%20%22total_trustlines_count%22)%20%7B%0A%20%20%20%20metadata%20%7B%0A%20%20%20%20%20%20availableSlugs%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A)
- `daily_trustlines_count_change` - [these assets](https://api.santiment.net/graphiql?variables=&query=%7B%0A%20%20getMetric(metric%3A%20%22daily_trustlines_count_change%22)%20%7B%0A%20%20%20%20metadata%20%7B%0A%20%20%20%20%20%20availableSlugs%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A)

---

### SanAPI

Available under the `total_trustlines_count` name.

```graphql-explorer
{
  getMetric(metric: "total_trustlines_count") {
    timeseriesDataJson(
      slug: "xrp"
      from: "2020-01-01T00:00:00Z"
      to: "2020-01-07T00:00:00Z"
    )
  }
}
```

Available under the `daily_trustlines_count_change` name.

```graphql-explorer
{
  getMetric(metric: "daily_trustlines_count_change") {
    timeseriesDataJson(
      slug: "xrp"
      from: "2020-01-01T00:00:00Z"
      to: "2020-01-07T00:00:00Z"
    )
  }
}
```
