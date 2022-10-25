---
title: Daily Active Deposits
author: Santiment Team
date: 2020-04-06
description: Number of unique deposit addresses participating in transactions during one day
---
# Daily Active Deposits

## Definition

### Active Deposits

Shows the **number of unique deposit addresses** that have been active on a
particular day for a given asset.

![ethereum daily active deposits](daily-active-deposits-ethereum.png)

### Deposit-related Transactions

Shows the total number of all **incoming and outcoming transactions** involving
deposit addresses on a particular day.

As such, this metric accounts for both user-to-exchange transactions:

1. from a personal wallet to a deposit address, and
2. from a deposit address to the main exchange wallet.

Deposit-related Transactions is often valuable when used in conjunction with
**Exchange Inflow** -- [another one of our
metrics](/metrics/exchange-flow-metrics) -- which shows the total amount of
coins moving to exchange wallets on a particular day.

So, for example, an **increase in exchange inflow** but a **plateauing number of
deposit-related transactions** means that more coins are entering the exchanges,
although the number of transactions to the exchanges stayed the same. In other
words, **the average deposit size has increased.**

As another use-case of this metric, let's take a look what Deposit-related
Transactions can tell us about MKR's popularity over time:

The Transaction graph clearly shows a steady increase in the total number of
deposit-related transactions -- **especially** in the past few weeks. In other
words, the speculative interest in Maker seems to be blooming.

It's also noteworthy that the Transaction Number metric really started breaking
out in Autumn, coinciding with Maker's surge in popularity.

---

## Access

The metric is with [restricted access](/metrics/details/access#restricted-access).

---

## Measuring Unit

Non-negative number of addresses

---

## Data Type

[Timeseries Data](/metrics/details/data-type#timeseries-data)

---

## Frequency

Daily Active Deposits is available at [daily intervals](/metrics/details/frequency#daily-frequency)

---

## Latency

Daily Active Deposits has [on-chain Latency](/metrics/details/latency#on-chain-latency)

---

## Available Assets

This metric is computed for [these
assets](<https://api.santiment.net/graphiql?variables=&query=%7B%0A%20%20getMetric(metric%3A%20%22active_deposits%22)%20%7B%0A%20%20%20%20metadata%20%7B%0A%20%20%20%20%20%20availableSlugs%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A>)

---

## SanAPI

The metric is available under the `active_deposits` name.

```graphql
{
  getMetric(metric: "active_deposits") {
    timeseriesData(
      slug: "maker"
      from: "2019-05-09T11:25:04.894Z"
      to: "2019-06-23T11:25:04.894Z"
      interval: "1d"
    ) {
      datetime
      value
    }
  }
}
```

[**Run in
explorer**](<https://api.santiment.net/graphiql?query=%7B%0A%20%20getMetric(metric%3A%20%22active_deposits%22)%20%7B%0A%20%20%20%20timeseriesData(%0A%20%20%20%20%20%20slug%3A%20%22maker%22%0A%20%20%20%20%20%20from%3A%20%222019-05-09T11%3A25%3A04.894Z%22%0A%20%20%20%20%20%20to%3A%20%222019-06-23T11%3A25%3A04.894Z%22%0A%20%20%20%20%20%20interval%3A%20%221d%22)%20%7B%0A%20%20%20%20%20%20%20%20datetime%0A%20%20%20%20%20%20%20%20value%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A>)
