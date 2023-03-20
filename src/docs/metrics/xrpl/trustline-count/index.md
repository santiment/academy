---
title: 
author: Boris
date: 2023-03-13
description:
---

## Description

We can compute this metric a cumulative sum over the RippleState source table.
We have 2 metrics about the trustline count:
- `total_trustlines_count` - which tracks the total amount of trustline for a given time
Since we are interested in total number, we can count the sign column (+1 or -1) and aggregate.
- `daily_trustlines_count_change` - which tracks the number of opened or closed trustlines for a given time

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
