---
title: Transaction count
author: Boris
date: 2023-03-13
description: Amount of transactions on-chain.
---

## Description

The Transaction Count metric indicates the number of unique transactions occurring on the network 
within a specific day.

As an alternative to the transaction count metric, there's the Payments Count metric, which reflects 
the number of individual payments made on the network within a specific day.

The difference between Transaction Count and Payments Count lies in the scenario where a single 
transaction includes multiple transfers. In such cases, the Transaction Count registers this as a single 
transaction, while the Payments Count registers each individual transfer within that transaction.

---

## Access

[Free Access](/metrics/details/access#free-access)

---

## Measuring Unit

Amount of transactions

---

## Data Type

[Timeseries Data](/metrics/details/data-type#timeseries-data)

---

## Frequency

[Daily Interval](/metrics/details/frequency#daily-frequency)

---

## Latency

[On-Chain Latency](/metrics/details/latency#on-chain-latency)

---

## Available Assets

Available for [these assets](https://api.santiment.net/graphiql?variables=&query=%7B%0A%20%20getMetric(metric%3A%20%22transactions_count%22)%20%7B%0A%20%20%20%20metadata%20%7B%0A%20%20%20%20%20%20availableSlugs%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A)

> Note: All metrics are available for the same set of assets

---

### SanAPI

Available under the `transactions_count` name.

```graphql-explorer
{
  getMetric(metric: "transactions_count") {
    timeseriesDataJson(
      slug: "santiment"
      from: "2020-04-01T00:00:00Z"
      to: "2020-04-07T00:00:00Z"
      interval: "1d"
    )
  }
}
```

Available under the `payments_count` name.

```graphql-explorer
{
  getMetric(metric: "payments_count") {
    timeseriesDataJson(
      slug: "santiment"
      from: "2020-04-01T00:00:00Z"
      to: "2020-04-07T00:00:00Z"
      interval: "1d"
    )
  }
}
```
