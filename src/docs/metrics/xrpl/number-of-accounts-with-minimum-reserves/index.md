---
title: Number of accounts with minimum reserves
author: Boris
date: 2023-03-13
description: The amount of accounts of which the reserve is at least 10XRP
---

## Description

The number of accounts with minimum reserves is computed by summing all holder distribution metrics except the following groups:
- 0-0.001
- 0.001-0.01
- 0.01-0.1
- 0.1-1
- 1-10

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

Available for [these assets](https://api.santiment.net/graphiql?variables=&query=%7B%0A%20%20getMetric(metric%3A%20%22holders_distribution_inf%22)%20%7B%0A%20%20%20%20metadata%20%7B%0A%20%20%20%20%20%20availableSlugs%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A)

