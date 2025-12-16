---
title: Difficulty
author: Filip
date: 2025-11-01
description: Difficulty Metric
---

## Description
The difficulty metric in the PoW network measures how hard it is for miners to find a 
valid hash for a new block. In bitcoin network it automatically adjusts roughly every 
two weeks to maintain an average block time of 10 minutes, ensuring network stability 
despite changes in total mining power. As more miners join the network, the difficulty 
increases, making mining more challenging, while a drop in mining power lowers it. 

Difficulty Metric:
* `avg_difficulty` - The average Bitcoin network difficulty over a 24-hour period

---

## Access

[Free Access](/metrics/details/access#free-access)

---

## Measuring Unit

Scaling factor that indicates how much harder it is to mine a block compared to the 
baseline difficulty of 1

---

## Data Type

[Timeseries Data](/metrics/details/data-type#timeseries-data)

---

## Frequency

[Daily Intervals](/metrics/details/frequency#daily-frequency)

---

## Latency

[On-Chain Latency](/metrics/details/latency#on-chain-latency)

---

## Available Assets

Available for `bitcoin`

---

### SanAPI

Available under name: `avg_difficulty`


```graphql explorer
{
  getMetric(metric: "avg_difficulty"){
    timeseriesDataJson(
      slug: "bitcoin"
      from: "2025-11-01T00:00:00Z"
      to: "2025-11-10T00:00:00Z"
      interval: "1d")
  }
}
```
