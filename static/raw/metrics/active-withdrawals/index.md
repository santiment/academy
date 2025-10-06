---
title: Active Withdrawals
author: Santiment Team
date: 2024-04-03

headline: "Crypto Active Addresses: Metric to Track Blockchain Activity"
description: "The active addresses metric is the number of unique addresses participating in transactions during one day. Learn more about how we calculate it."

---

## Definition

### Active Withdrawals

Shows the **number of unique withdrawal addresses** that have been active on a
particular day for a given asset. Refer to a [withdrawal address explanation here](/labels/withdrawal)

### Withdrawal Transactions

Withdrawal transactions metric shows the total number of all **outgoing transactions** involving
withdrawal addresses on a particular day. Basically, this metric accounts for exchange-to-user transactions.

For an exchange-specific data please refer to [that page](/metrics/labeled-exchange)

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

[Daily intervals:](/metrics/details/frequency#daily-frequency)

* `active_withdrawals`
* `withdrawal_transactions`

[Five-Minute Intervals:](/metrics/details/frequency#five-minute-frequency)

* `active_withdrawals_5m`
* `withdrawal_transactions_5m`

---

## Latency

[On-chain Latency](/metrics/details/latency#on-chain-latency)

---

## Available Assets

[active_withdrawals](<https://api.santiment.net/graphiql?variables=&query=%7B%0A%20%20getMetric(metric%3A%20%22active_withdrawals%22)%20%7B%0A%20%20%20%20metadata%20%7B%0A%20%20%20%20%20%20availableSlugs%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A>)

[withdrawal_transactions](<https://api.santiment.net/graphiql?variables=&query=%7B%0A%20%20getMetric(metric%3A%20%22withdrawal_transactions%22)%20%7B%0A%20%20%20%20metadata%20%7B%0A%20%20%20%20%20%20availableSlugs%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A>)

[active_withdrawals_5m](<https://api.santiment.net/graphiql?variables=&query=%7B%0A%20%20getMetric(metric%3A%20%22active_withdrawals_5m%22)%20%7B%0A%20%20%20%20metadata%20%7B%0A%20%20%20%20%20%20availableSlugs%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A>)

[withdrawal_transactions_5m](<https://api.santiment.net/graphiql?variables=&query=%7B%0A%20%20getMetric(metric%3A%20%22withdrawal_transactions_5m%22)%20%7B%0A%20%20%20%20metadata%20%7B%0A%20%20%20%20%20%20availableSlugs%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A>)

---

## SanAPI

The metric is available under the `active_withdrawals` name for daily resolution and `active_withdrawals_5m` for intraday resolution.

```graphql-explorer
{
  getMetric(metric: "active_withdrawals") {
    timeseriesDataJson(
      slug: "ethereum"
      from: "2023-05-09T11:25:04.894Z"
      to: "2023-06-23T11:25:04.894Z"
      interval: "1d"
    )
  }
}
```


Withdrawal transactions are available under `withdrawal_transactions` and `withdrawal_transactions_5m` names.


```graphql-explorer
{
  getMetric(metric: "withdrawal_transactions_5m") {
    timeseriesDataJson(
      slug: "ethereum"
      from: "2024-01-01T00:00:00.000Z"
      to: "2024-01-02T00:00:00.000Z"
      interval: "1h")
  }
}
```



