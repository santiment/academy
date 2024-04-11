---
title: Transaction Size
author: Filip
date: 2024-04-01
description: Transaction Size Metrics
---

## Description

The Transaction Size Metric calculates the average or median size of transactions over a specific 
time period. If the average transfer size is increasing, it could suggest that whales are beginning 
to move their tokens, either buying or selling.

Transaction Size Metrics:
- `average_transfer_5m`: Average transaction size over five-minute intervals
- `median_transfer_5m`: Median transaction size over five-minute intervals

---

## Access

[Free Access](/metrics/details/access#free-access)

---

## Measuring Unit

Token/Coin amount

---

## Data Type

[Timeseries Data](/metrics/details/data-type#timeseries-data)

---

## Frequency

[Five-minute Intervals](/metrics/details/frequency#five-minute-frequency)

---

## Latency

[On-Chain Latency](/metrics/details/latency#on-chain-latency)

---

## Available Assets

Available for [these assets](<https://api.santiment.net/graphiql?variables=&query=%7B%0A%20%20getMetric(metric%3A%20%22average_transfer_5m%22)%20%7B%0A%20%20%20%20metadata%20%7B%0A%20%20%20%20%20%20availableSlugs%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A>)

> Note: All metrics are available for the same set of assets

---

### SanAPI

Available under names: `average_transfer_5m` and `median_transfer_5m`


```graphql
{
  getMetric(metric:"average_transfer_5m") {
    timeseriesData(
      slug:"ethereum", 
      from:"2024-01-01T00:00:00Z", 
      to:"2024-01-10T00:00:00Z", 
      interval:"1d") {
        datetime
        value
      }
  }
}
```
[Run in Explorer](<https://api.santiment.net/graphiql?variables=%7B%7D&query=%7B%0A%20%20getMetric(metric%3A%22average_transfer_5m%22)%20%7B%0A%20%20%20%20timeseriesData(%0A%20%20%20%20%20%20slug%3A%22ethereum%22%2C%20%0A%20%20%20%20%20%20from%3A%222024-01-01T00%3A00%3A00Z%22%2C%20%0A%20%20%20%20%20%20to%3A%222024-01-10T00%3A00%3A00Z%22%2C%20%0A%20%20%20%20%20%20interval%3A%221d%22)%20%7B%0A%20%20%20%20%20%20%20%20datetime%0A%20%20%20%20%20%20%20%20value%0A%20%20%20%20%20%20%7D%0A%20%20%7D%0A%7D>)
