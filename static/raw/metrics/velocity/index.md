---
title: Velocity
author: Santiment Team
date: 2020-04-14
description: Average number of times a coin/token changes wallets each day
---

> For a more in-depth explanation of `Velocity`, please click
> [here](/metrics/velocity/velocity-technical).

---

## Definition

The metric shows the average number of times that a coin/token changes wallets
each day.

Simply put, a higher velocity means that a coin/token is used in transactions
more often within a set time frame.

Velocity can be used to explain various noteworthy events in the life of a
project. For example, here's Ethereum:

![ethereum-velocity](./ethereum-velocity.png)

Notice the steep drop off?

The increased activity (and subsequent dip) correlates squarely to a huge ETH
mixer that operated between March 2017 and March 2018. During that time, coins
were moved a lot between addresses which lead to big velocity spikes.

Once the mixer was liquidated, token velocity toppled back to 'normal' levels,
where it's remained ever since.

---

## Access

[Restricted Access](/metrics/details/access#restricted-access).

---

## Measuring Unit

A non-negative number of times coin/token changes wallet

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

Available for [these
assets](<https://api.santiment.net/graphiql?variables=&query=%7B%0A%20%20getMetric(metric%3A%20%22velocity%22)%20%7B%0A%20%20%20%20metadata%20%7B%0A%20%20%20%20%20%20availableSlugs%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A>)

---

## SanAPI

Available under the `velocity` name.

```graphql-explorer
{
  getMetric(metric: "velocity") {
    timeseriesDataJson(
      slug: "santiment"
      from: "2020-04-01T00:00:00Z"
      to: "2020-04-07T00:00:00Z"
      interval: "1d"
    )
  }
}
```
