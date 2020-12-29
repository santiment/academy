---
title: Labeled Metrics
author: Maksim Razhev
date: 2020-12-24
description: Labeled Metrics
---

## Description
Metrics that shows various stats of labeled addresses

* `active_deposits_per_exchange` - number of deposit addresses received funds from users' addresses over all exchange names
* `active_withdrawals_per_exchange` - number df addresses received withdrawals from centralized exchanges over all exchange names
* `deposit_transactions_per_exchange` - number of transactions sent to deposit addresses over all exchange names
* `withdrawal_transactions_per_exchange` - number of withdrawal transactions from centralized exchanges over all exchange names
* `inflow_per_label_and_owner,outflow_per_label_and_owner,balance_per_label_and_owner_delta,balance_per_owner` - inflow/outflow/balance of a given owner

Available labels:
* `active_deposits_per_exchange,active_withdrawals_per_exchange,deposit_transactions_per_exchange,withdrawal_transactions_per_exchange` - `centralized_exchange`
* `inflow_per_label_and_owner,outflow_per_label_and_owner,balance_per_label_and_owner_delta,balance_per_owner` - `centralized_exchange`, `decentralized_exchange`, `defi, eth2stakingcontract, deposit`

---

## Access

[Restricted Access](/metrics/details/access#restricted-access).

---

## Measuring Unit

* `active_deposits_per_exchange, active_withdrawals_per_exchange` - Amount of addresses
* `deposit_transactions_per_exchange, withdrawal_transactions_per_exchange` - Amount of transactions
* Other - Amount of tokens

---

## Data Type

[Timeseries Data](/metrics/details/data-type#timeseries-data)

---

## Frequency

* `active_deposits_per_exchange, active_withdrawals_per_exchange, deposit_transactions_per_exchange, withdrawal_transactions_per_exchange` - [Daily-minute Intervals](/metrics/details/frequency#daily-freqency)
* Other - [Five-minute Intervals](/metrics/details/frequency#five-minute-frequency)

---

## Latency

[Price Latency](/metrics/details/latency#price-latency)

---

## Available Assets

* `active_deposits_per_exchange,active_withdrawals_per_exchange,deposit_transactions_per_exchange,withdrawal_transactions_per_exchange` - `ethereum`, All ERC20 assets 
* `inflow_per_label_and_owner,outflow_per_label_and_owner,balance_per_label_and_owner_delta,balance_per_owner` - `ethereum`, `bitcoin`, All ERC20 assets 

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

Inflow per label and owner (example DAI inflow to Compound):
```graphql
{
  getMetric(metric: "inflow_per_label_and_owner") {
    timeseriesData(
      selector: {
        slug: "multi-collateral-dai"
      	owner: "compound"
      	label: "defi"
      }
      from: "2020-04-01T00:00:00Z"
      to: "2020-04-07T00:00:00Z"
      interval: "1h"
    ) {
      datetime
      value
    }
  }
}
```
[**Run in Explorer**](<https://api.santiment.net/graphiql?query=%7B%0A%20%20getMetric(metric%3A%20%22inflow_per_label_and_owner%22)%20%7B%0A%20%20%20%20timeseriesData(%0A%20%20%20%20%20%20selector%3A%20%7B%0A%20%20%20%20%20%20%20%20slug%3A%20%22multi-collateral-dai%22%0A%20%20%20%20%20%20%09owner%3A%20%22compound%22%0A%20%20%20%20%20%20%09label%3A%20%22defi%22%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20from%3A%20%222020-04-01T00%3A00%3A00Z%22%0A%20%20%20%20%20%20to%3A%20%222020-04-07T00%3A00%3A00Z%22%0A%20%20%20%20%20%20interval%3A%20%221h%22%0A%20%20%20%20)%20%7B%0A%20%20%20%20%20%20datetime%0A%20%20%20%20%20%20value%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D>)

Outflow per label and owner (example DAI outflow to Compound):
```graphql
{
  getMetric(metric: "outflow_per_label_and_owner") {
    timeseriesData(
      selector: {
        slug: "multi-collateral-dai"
      	owner: "compound"
      	label: "defi"
      }
      from: "2020-04-01T00:00:00Z"
      to: "2020-04-07T00:00:00Z"
      interval: "1h"
    ) {
      datetime
      value
    }
  }
}
```
[**Run in Explorer**](<https://api.santiment.net/graphiql?query=%7B%0A%20%20getMetric(metric%3A%20%22outflow_per_label_and_owner%22)%20%7B%0A%20%20%20%20timeseriesData(%0A%20%20%20%20%20%20selector%3A%20%7B%0A%20%20%20%20%20%20%20%20slug%3A%20%22multi-collateral-dai%22%0A%20%20%20%20%20%20%09owner%3A%20%22compound%22%0A%20%20%20%20%20%20%09label%3A%20%22defi%22%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20from%3A%20%222020-04-01T00%3A00%3A00Z%22%0A%20%20%20%20%20%20to%3A%20%222020-04-07T00%3A00%3A00Z%22%0A%20%20%20%20%20%20interval%3A%20%221h%22%0A%20%20%20%20)%20%7B%0A%20%20%20%20%20%20datetime%0A%20%20%20%20%20%20value%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D>)

Balance delta per label and owner (example DAI balance delta of Aave):
```graphql
{
  getMetric(metric: "balance_per_label_and_owner_delta") {
    timeseriesData(
      selector: {
        slug: "multi-collateral-dai"
      	owner: "aave"
      	label: "defi"
      }
      from: "2020-04-01T00:00:00Z"
      to: "2020-04-07T00:00:00Z"
      interval: "1h"
    ) {
      datetime
      value
    }
  }
}
```
[**Run in Explorer**](<https://api.santiment.net/graphiql?query=%7B%0A%20%20getMetric(metric%3A%20%22balance_per_label_and_owner_delta%22)%20%7B%0A%20%20%20%20timeseriesData(%0A%20%20%20%20%20%20selector%3A%20%7B%0A%20%20%20%20%20%20%20%20slug%3A%20%22multi-collateral-dai%22%0A%20%20%20%20%20%20%09owner%3A%20%22aave%22%0A%20%20%20%20%20%20%09label%3A%20%22defi%22%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20from%3A%20%222020-04-01T00%3A00%3A00Z%22%0A%20%20%20%20%20%20to%3A%20%222020-04-07T00%3A00%3A00Z%22%0A%20%20%20%20%20%20interval%3A%20%221h%22%0A%20%20%20%20)%20%7B%0A%20%20%20%20%20%20datetime%0A%20%20%20%20%20%20value%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D>)

Balance per owner (example DAI balance of Aave):
```graphql
{
  getMetric(metric: "balance_per_owner") {
    timeseriesData(
      selector: {
        slug: "multi-collateral-dai"
      	owner: "aave"
      	label: "defi"
      }
      from: "2020-04-01T00:00:00Z"
      to: "2020-04-07T00:00:00Z"
      interval: "1h"
    ) {
      datetime
      value
    }
  }
}
```
[**Run in Explorer**](<https://api.santiment.net/graphiql?query=%7B%0A%20%20getMetric(metric%3A%20%22balance_per_owner%22)%20%7B%0A%20%20%20%20timeseriesData(%0A%20%20%20%20%20%20selector%3A%20%7B%0A%20%20%20%20%20%20%20%20slug%3A%20%22multi-collateral-dai%22%0A%20%20%20%20%20%20%09owner%3A%20%22aave%22%0A%20%20%20%20%20%20%09label%3A%20%22defi%22%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20from%3A%20%222020-04-01T00%3A00%3A00Z%22%0A%20%20%20%20%20%20to%3A%20%222020-04-07T00%3A00%3A00Z%22%0A%20%20%20%20%20%20interval%3A%20%221h%22%0A%20%20%20%20)%20%7B%0A%20%20%20%20%20%20datetime%0A%20%20%20%20%20%20value%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D>)
