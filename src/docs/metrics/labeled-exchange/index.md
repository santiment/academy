---
title: Labeled Exchange
author: Alex
date: 2024-04-01
description: Exchange Labeled Metrics
---

## Description

Exchange-labeled metrics showcase exchange metrics from the perspective of a single exchange. For instance, instead of retrieving [active_deposits](/metrics/active-deposits) data for all exchanges, you can specifically query active deposits related to Binance only. [Full list of available exchange names](labels/centralized-exchange/#see-also)

---

Supported_metrics:

* `active_deposits_per_exchange` - The number of unique deposit addresses that have been active on a particular day for a given asset within a specific exchange. Essentially, this metric serves as an indicator of how many users have deposited a given asset into the specified exchange.

* `deposit_transactions_per_exchange` - The total number of all incoming and outgoing transactions involving deposit addresses on a specific day within a particular exchange.
---

* `active_withdrawals_per_exchange` - The number of unique withdrawal addresses that have withdrawn a particular asset from a given exchange.
* `withdrawal_transactions_per_exchange` - The total number of withdrawal transactions for a given asset from a specified centralized exchange.
---

* `exchange_inflow_per_exchange` - The volume of coins/tokens transferred from non-exchange wallets to wallets associated with a specified exchange.
* `exchange_outflow_per_exchange` - The volume of coins/tokens transferred from wallets associated with a given exchange to non-exchange wallets.
* `exchange_balance_per_exchange` - The net balance resulting from the difference between inflow and outflow (inflow minus outflow) for a particular exchange.

Please note that metrics may undergo changes in historical values due to automated recalculations triggered monthly. We constantly update our labels which helps us to keep labels as fresh as possible but result historical data changes. Any modifications to labels, social sources, or relevant jobs will prompt recalculation for the previous month's data. Within a 12 hour period, metric can be supplemented with new data. Additionally, adjustments to labels automatically trigger recalculation of labeled balances.

---

## Access

[Restricted Access](/metrics/details/access#restricted-access).

---

## Measuring Unit

* `active_deposits_per_exchange`, `active_withdrawals_per_exchange` - Amount of addresses
* `deposit_transactions_per_exchange`, `withdrawal_transactions_per_exchange` - Amount of transactions
* `exchange_balance_per_exchange`, `exchange_inflow_per_exchange`, `exchange_outflow_per_exchange` - Amount of coins/tokens

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

Available for [these assets](https://api.santiment.net/graphiql?variables=&query=%7B%0A%20%20getMetric(metric%3A%20%22active_deposits_per_exchange%22)%20%7B%0A%20%20%20%20metadata%20%7B%0A%20%20%20%20%20%20availableSlugs%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A)

---

### SanAPI

Binance Active Deposits:

```graphql
{
  getMetric(metric: "active_deposits_per_exchange") {
    timeseriesData(
      selector: {
        slug: "ethereum"
        owner: "binance"
        label: "centralized_exchange"
      }
      from: "2024-03-01T00:00:00Z"
      to: "2024-03-07T00:00:00Z"
      interval: "1d"
    ) {
      datetime
      value
    }
  }
}
```
[**Run in Explorer**](https://api.santiment.net/graphiql?query=%7B%0A%20%20getMetric(metric%3A%20%22active_deposits_per_exchange%22)%20%7B%0A%20%20%20%20timeseriesData(%0A%20%20%20%20%20%20selector%3A%20%7B%0A%20%20%20%20%20%20%20%20slug%3A%20%22ethereum%22%0A%20%20%20%20%20%20%20%20owner%3A%20%22binance%22%0A%20%20%20%20%20%20%20%20label%3A%20%22centralized_exchange%22%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20from%3A%20%222024-03-01T00%3A00%3A00Z%22%0A%20%20%20%20%20%20to%3A%20%222024-03-07T00%3A00%3A00Z%22%0A%20%20%20%20%20%20interval%3A%20%221d%22%0A%20%20%20%20)%20%7B%0A%20%20%20%20%20%20datetime%0A%20%20%20%20%20%20value%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D)


Binance Withdrawals Transactions
```graphql
{
  getMetric(metric: "withdrawal_transactions_per_exchange") {
    timeseriesData(
      selector: {
        slug: "ethereum"
        owner: "binance"
        label: "centralized_exchange"
      }
      from: "2020-03-01T00:00:00Z"
      to: "2020-03-07T00:00:00Z"
      interval: "1d"
    ) {
      datetime
      value
    }
  }
}
```
[**Run in Explorer**](https://api.santiment.net/graphiql?query=%7B%0A%20%20getMetric(metric%3A%20%22withdrawal_transactions_per_exchange%22)%20%7B%0A%20%20%20%20timeseriesData(%0A%20%20%20%20%20%20selector%3A%20%7B%0A%20%20%20%20%20%20%20%20slug%3A%20%22ethereum%22%0A%20%20%20%20%20%20%20%20owner%3A%20%22binance%22%0A%20%20%20%20%20%20%20%20label%3A%20%22centralized_exchange%22%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20from%3A%20%222020-03-01T00%3A00%3A00Z%22%0A%20%20%20%20%20%20to%3A%20%222020-03-07T00%3A00%3A00Z%22%0A%20%20%20%20%20%20interval%3A%20%221d%22%0A%20%20%20%20)%20%7B%0A%20%20%20%20%20%20datetime%0A%20%20%20%20%20%20value%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D)

Binance Flow Balance
```graphql
{
  getMetric(metric: "exchange_balance_per_exchange") {
    timeseriesData(
      selector: {
        slug: "ethereum"
        owner: "binance"
        label: "centralized_exchange"
      }
      from: "2020-03-01T00:00:00Z"
      to: "2020-03-07T00:00:00Z"
      interval: "1d"
    ) {
      datetime
      value
    }
  }
}
```
[**Run in Explorer**](https://api.santiment.net/graphiql?query=%7B%0A%20%20getMetric(metric%3A%20%22exchange_balance_per_exchange%22)%20%7B%0A%20%20%20%20timeseriesData(%0A%20%20%20%20%20%20selector%3A%20%7B%0A%20%20%20%20%20%20%20%20slug%3A%20%22ethereum%22%0A%20%20%20%20%20%20%20%20owner%3A%20%22binance%22%0A%20%20%20%20%20%20%20%20label%3A%20%22centralized_exchange%22%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20from%3A%20%222020-03-01T00%3A00%3A00Z%22%0A%20%20%20%20%20%20to%3A%20%222020-03-07T00%3A00%3A00Z%22%0A%20%20%20%20%20%20interval%3A%20%221d%22%0A%20%20%20%20)%20%7B%0A%20%20%20%20%20%20datetime%0A%20%20%20%20%20%20value%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D)

