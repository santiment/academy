---
title: Trustline Count Metrics
author: Boris
date: 2023-03-13
description: Descriptions about the trustline count metrics
---

## Description

We track two metrics related to trustline count:

- Total number of trustlines - the total amount of active trustline through time.
- Net trustlines created - change in number of active trustlines on a daily basis.

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

Available under the `total_trustlines_count` and `daily_trustlines_count_change` name.

```graphql
{
  getMetric(metric: "total_trustlines_count") {
  }
}
```

[**Run in Explorer**]()

```graphql
{
  getMetric(metric: "daily_trustlines_count_change") {
  }
}
```

[**Run in Explorer**]()