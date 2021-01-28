---
title: Labeled Exchange
author: Maksim Razhev
date: 2021-01-28
description: Labeled Exchange Metrics
---

## Description
Metrics that show various stats of labeled addresses

* `active_deposits_per_exchange` - number of deposit addresses received funds from users' addresses over all exchange names
* `active_withdrawals_per_exchange` - number df addresses received withdrawals from centralized exchanges over all exchange names
* `deposit_transactions_per_exchange` - number of transactions sent to deposit addresses over all exchange names
* `withdrawal_transactions_per_exchange` - number of withdrawal transactions from centralized exchanges over all exchange names

Available [labels](/labels):
* `centralized_exchange`

---

## Access

[Restricted Access](/metrics/details/access#restricted-access).

---

## Measuring Unit

* `active_deposits_per_exchange`, `active_withdrawals_per_exchange` - Amount of addresses
* `deposit_transactions_per_exchange`, `withdrawal_transactions_per_exchange` - Amount of transactions

---

## Data Type

[Timeseries Data](/metrics/details/data-type#timeseries-data)

---

## Frequency

[Daily Intervals](/metrics/details/frequency#daily-freqency)

---

## Latency

[Price Latency](/metrics/details/latency#price-latency)

---

## Available Assets
* `ethereum`
* All ERC20 assets 

---

### SanAPI

Active Deposits per Exchange:
```graphql
{
  getMetric(metric: "active_deposits_per_exchange") {
    timeseriesData(
      selector: {
        slug: "ethereum"
        owner: "coinbase"
        label: "centralized_exchange"
      }
      from: "2020-04-01T00:00:00Z"
      to: "2020-04-07T00:00:00Z"
      interval: "1d"
    ) {
      datetime
      value
    }
  }
}
```
[**Run in Explorer**](<https://api.santiment.net/graphiql?query=%7B%0A%20%20getMetric(metric%3A%20%22active_deposits_per_exchange%22)%20%7B%0A%20%20%20%20timeseriesData(%0A%20%20%20%20%20%20selector%3A%20%7B%0A%20%20%20%20%20%20%20%20slug%3A%20%22ethereum%22%0A%20%20%20%20%20%20%20%20owner%3A%20%22coinbase%22%0A%20%20%20%20%20%20%20%20label%3A%20%22centralized_exchange%22%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20from%3A%20%222020-04-01T00%3A00%3A00Z%22%0A%20%20%20%20%20%20to%3A%20%222020-04-07T00%3A00%3A00Z%22%0A%20%20%20%20%20%20interval%3A%20%221d%22%0A%20%20%20%20)%20%7B%0A%20%20%20%20%20%20datetime%0A%20%20%20%20%20%20value%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D>)

Active Withdrawals per Exchange
```graphql
{
  getMetric(metric: "active_withdrawals_per_exchange") {
    timeseriesData(
      selector: {
        slug: "ethereum"
        owner: "coinbase"
        label: "centralized_exchange"
      }
      from: "2020-04-01T00:00:00Z"
      to: "2020-04-07T00:00:00Z"
      interval: "1d"
    ) {
      datetime
      value
    }
  }
}
```
[**Run in Explorer**](<https://api.santiment.net/graphiql?query=%7B%0A%20%20getMetric(metric%3A%20%22active_withdrawals_per_exchange%22)%20%7B%0A%20%20%20%20timeseriesData(%0A%20%20%20%20%20%20selector%3A%20%7B%0A%20%20%20%20%20%20%20%20slug%3A%20%22ethereum%22%0A%20%20%20%20%20%20%20%20owner%3A%20%22coinbase%22%0A%20%20%20%20%20%20%20%20label%3A%20%22centralized_exchange%22%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20from%3A%20%222020-04-01T00%3A00%3A00Z%22%0A%20%20%20%20%20%20to%3A%20%222020-04-07T00%3A00%3A00Z%22%0A%20%20%20%20%20%20interval%3A%20%221d%22%0A%20%20%20%20)%20%7B%0A%20%20%20%20%20%20datetime%0A%20%20%20%20%20%20value%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D>)

Deposit Transactions per Exchange
```graphql
{
  getMetric(metric: "deposit_transactions_per_exchange") {
    timeseriesData(
      selector: {
        slug: "ethereum"
        owner: "coinbase"
        label: "centralized_exchange"
      }
      from: "2020-04-01T00:00:00Z"
      to: "2020-04-07T00:00:00Z"
      interval: "1d"
    ) {
      datetime
      value
    }
  }
}
```
[**Run in Explorer**](<https://api.santiment.net/graphiql?query=%7B%0A%20%20getMetric(metric%3A%20%22deposit_transactions_per_exchange%22)%20%7B%0A%20%20%20%20timeseriesData(%0A%20%20%20%20%20%20selector%3A%20%7B%0A%20%20%20%20%20%20%20%20slug%3A%20%22ethereum%22%0A%20%20%20%20%20%20%20%20owner%3A%20%22coinbase%22%0A%20%20%20%20%20%20%20%20label%3A%20%22centralized_exchange%22%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20from%3A%20%222020-04-01T00%3A00%3A00Z%22%0A%20%20%20%20%20%20to%3A%20%222020-04-07T00%3A00%3A00Z%22%0A%20%20%20%20%20%20interval%3A%20%221d%22%0A%20%20%20%20)%20%7B%0A%20%20%20%20%20%20datetime%0A%20%20%20%20%20%20value%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D>)

Withdrawals Transactions per Exchange
```graphql
{
  getMetric(metric: "withdrawal_transactions_per_exchange") {
    timeseriesData(
      selector: {
        slug: "ethereum"
        owner: "coinbase"
        label: "centralized_exchange"
      }
      from: "2020-04-01T00:00:00Z"
      to: "2020-04-07T00:00:00Z"
      interval: "1d"
    ) {
      datetime
      value
    }
  }
}
```
[**Run in Explorer**](<https://api.santiment.net/graphiql?query=%7B%0A%20%20getMetric(metric%3A%20%22withdrawal_transactions_per_exchange%22)%20%7B%0A%20%20%20%20timeseriesData(%0A%20%20%20%20%20%20selector%3A%20%7B%0A%20%20%20%20%20%20%20%20slug%3A%20%22ethereum%22%0A%20%20%20%20%20%20%20%20owner%3A%20%22coinbase%22%0A%20%20%20%20%20%20%20%20label%3A%20%22centralized_exchange%22%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20from%3A%20%222020-04-01T00%3A00%3A00Z%22%0A%20%20%20%20%20%20to%3A%20%222020-04-07T00%3A00%3A00Z%22%0A%20%20%20%20%20%20interval%3A%20%221d%22%0A%20%20%20%20)%20%7B%0A%20%20%20%20%20%20datetime%0A%20%20%20%20%20%20value%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D>)
