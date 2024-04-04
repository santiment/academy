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

```graphql
{
  getMetric(metric: "active_withdrawals") {
    timeseriesData(
      slug: "ethereum"
      from: "2023-05-09T11:25:04.894Z"
      to: "2023-06-23T11:25:04.894Z"
      interval: "1d"
    ) {
      datetime
      value
    }
  }
}
```

[**Run in
explorer**](<https://api.santiment.net/graphiql?query=%7B%0A%20%20getMetric(metric%3A%20%22active_deposits%22)%20%7B%0A%20%20%20%20timeseriesData(%0A%20%20%20%20%20%20slug%3A%20%22ethereum%22%0A%20%20%20%20%20%20from%3A%20%222023-05-09T11%3A25%3A04.894Z%22%0A%20%20%20%20%20%20to%3A%20%222023-06-23T11%3A25%3A04.894Z%22%0A%20%20%20%20%20%20interval%3A%20%221d%22)%20%7B%0A%20%20%20%20%20%20%20%20datetime%0A%20%20%20%20%20%20%20%20value%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A>)


Withdrawal transactions are available under `withdrawal_transactions` and `withdrawal_transactions_5m` names.


```graphql
{
  getMetric(metric: "withdrawal_transactions_5m") {
    timeseriesData(
      slug: "ethereum"
      from: "2024-01-01T00:00:00.000Z"
      to: "2024-01-02T00:00:00.000Z"
      interval: "1h") {
        datetime
        value
    }
  }
}
```

[**Run in
explorer**](<https://api.santiment.net/graphiql?query=%7B%0A%20%20getMetric(metric%3A%20%22withdrawal_transactions_5m%22)%20%7B%0A%20%20%20%20timeseriesData(%0A%20%20%20%20%20%20slug%3A%20%22ethereum%22%0A%20%20%20%20%20%20from%3A%20%222024-01-01T00%3A00%3A00.000Z%22%0A%20%20%20%20%20%20to%3A%20%222024-01-02T00%3A00%3A00.000Z%22%0A%20%20%20%20%20%20interval%3A%20%221h%22)%20%7B%0A%20%20%20%20%20%20%20%20datetime%0A%20%20%20%20%20%20%20%20value%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A>)



