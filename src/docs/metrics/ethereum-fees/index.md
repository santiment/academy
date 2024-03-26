---
title: Ethereum fees
author: Filip
date: 2024-03-01
description: Ethereum fees
---

## Description
Gas fees are the fees paid for the computational efforts required to execute a transaction or 
operation within a smart contract on the Ethereum network. Each operation in a transaction consumes 
a specific amount of gas.
The total gas fee you pay consists of several components:
- Base fee: This is a mandatory fee established by the network for processing a transaction.
- Priority fee: An additional, voluntary payment intended to motivate node operators to prioritize 
your transaction.
- Units of gas used: Gas signifies computational effort. More complex tasks, such as interacting 
with a smart contract, require more gas compared to simpler actions like sending a transaction.

The base fee is computed independently of the current block and instead relies on the preceding blocks, 
enhancing predictability for users regarding transaction fees. Upon block creation, this base fee 
is burned, effectively removing it from circulation.


Ethereum fees metrics:
- `fees`: Total fees paid in ETH over a daily interval
- `fees_intraday`: Total fees paid in ETH over 5-minute time intervals
- `fees_usd`:  Total fees paid in USD over a daily interval
- `fees_usd_intraday`: Total fees paid in USD over 5-minute time intervals


- `average_fees_usd`: Average fees paid in USD over a daily interval
- `average_fees_usd_5m`: Average fees paid in USD over 5-minute time intervals
- `median_fees_usd`: Median fees paid in USD over a daily interval
- `median_fees_usd_5m`: Median fees paid in USD over 5-minute time intervals


- `fees_burnt_5m`: Fees burnt (removed from circulation) in ETH within a 5-minute interval
- `fees_burnt_usd_5m`: Fees burnt (removed from circulation) in USD within a 5-minute interval


- `fees_to_network_circulation_usd_1d`: Calculated using the formula:
`fees * daily_avg_price_usd / network_circulation_usd_1d` where network_circulation_usd_1d represents 
the total value in USD of all coins moved on Ethereum

---

## Access

[Free Access](/metrics/details/access#free-access)

---

## Measuring Unit

Amount in ETH or USD

---

## Data Type

[Timeseries Data](/metrics/details/data-type#timeseries-data)

---

## Frequency

[Five-minute Intervals](/metrics/details/frequency#five-minute-frequency)

---

## Latency

[On-Chain Latency](/metrics/details/latency#on-chain-latency)

---

## Available Assets

Available for `ethereum`

---

### SanAPI

Fees metrics in ETH: `fees` and `fees_intraday`

```graphql
{
  getMetric(metric: "fees") {
    timeseriesData(
      slug: "ethereum"
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
[Run in Explorer](<https://api.santiment.net/graphiql?query=%7B%0A%20%20getMetric(metric%3A%20%22fees%22)%20%7B%0A%20%20%20%20timeseriesData(%0A%20%20%20%20%20%20slug%3A%20%22ethereum%22%0A%20%20%20%20%20%20from%3A%20%222024-03-01T00%3A00%3A00Z%22%0A%20%20%20%20%20%20to%3A%20%222024-03-07T00%3A00%3A00Z%22%0A%20%20%20%20%20%20interval%3A%20%221d%22%0A%20%20%20%20)%20%7B%0A%20%20%20%20%20%20datetime%0A%20%20%20%20%20%20value%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D>)

Fees metrics in USD: `fees_usd` and `fees_usd_intraday`

```graphql
{
  getMetric(metric: "fees_usd_intraday") {
    timeseriesData(
      slug: "ethereum"
      from: "2024-03-01T00:00:00Z"
      to: "2024-03-07T00:00:00Z"
      interval: "5m"
    ) {
      datetime
      value
    }
  }
}
```
[Run in Explorer](<https://api.santiment.net/graphiql?query=%7B%0A%20%20getMetric(metric%3A%20%22fees_usd_intraday%22)%20%7B%0A%20%20%20%20timeseriesData(%0A%20%20%20%20%20%20slug%3A%20%22ethereum%22%0A%20%20%20%20%20%20from%3A%20%222024-03-01T00%3A00%3A00Z%22%0A%20%20%20%20%20%20to%3A%20%222024-03-07T00%3A00%3A00Z%22%0A%20%20%20%20%20%20interval%3A%20%225m%22%0A%20%20%20%20)%20%7B%0A%20%20%20%20%20%20datetime%0A%20%20%20%20%20%20value%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D>)

Aggregated fees metrics: `average_fees_usd`, `average_fees_usd_5m`, 
`median_fees_usd` and `median_fees_usd_5m`

```graphql
{
  getMetric(metric: "average_fees_usd_5m") {
    timeseriesData(
      slug: "ethereum"
      from: "2024-03-01T00:00:00Z"
      to: "2024-03-07T00:00:00Z"
      interval: "5m"
    ) {
      datetime
      value
    }
  }
}
```
[Run in Explorer](<https://api.santiment.net/graphiql?query=%7B%0A%20%20getMetric(metric%3A%20%22average_fees_usd_5m%22)%20%7B%0A%20%20%20%20timeseriesData(%0A%20%20%20%20%20%20slug%3A%20%22ethereum%22%0A%20%20%20%20%20%20from%3A%20%222024-03-01T00%3A00%3A00Z%22%0A%20%20%20%20%20%20to%3A%20%222024-03-07T00%3A00%3A00Z%22%0A%20%20%20%20%20%20interval%3A%20%225m%22%0A%20%20%20%20)%20%7B%0A%20%20%20%20%20%20datetime%0A%20%20%20%20%20%20value%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D>)

Fees burnt metrics: `fees_burnt_5m` and `fees_burnt_usd_5m`

```graphql
{
  getMetric(metric: "fees_burnt_5m") {
    timeseriesData(
      slug: "ethereum"
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
[Run in Explorer](<https://api.santiment.net/graphiql?query=%7B%0A%20%20getMetric(metric%3A%20%22fees_burnt_5m%22)%20%7B%0A%20%20%20%20timeseriesData(%0A%20%20%20%20%20%20slug%3A%20%22ethereum%22%0A%20%20%20%20%20%20from%3A%20%222024-03-01T00%3A00%3A00Z%22%0A%20%20%20%20%20%20to%3A%20%222024-03-07T00%3A00%3A00Z%22%0A%20%20%20%20%20%20interval%3A%20%221d%22%0A%20%20%20%20)%20%7B%0A%20%20%20%20%20%20datetime%0A%20%20%20%20%20%20value%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D>)

Fees to network circulation metric: `fees_to_network_circulation_usd_1d`

```graphql
{
  getMetric(metric: "fees_to_network_circulation_usd_1d") {
    timeseriesData(
      slug: "ethereum"
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
[Run in Explorer](<https://api.santiment.net/graphiql?query=%7B%0A%20%20getMetric(metric%3A%20%22fees_to_network_circulation_usd_1d%22)%20%7B%0A%20%20%20%20timeseriesData(%0A%20%20%20%20%20%20slug%3A%20%22ethereum%22%0A%20%20%20%20%20%20from%3A%20%222024-03-01T00%3A00%3A00Z%22%0A%20%20%20%20%20%20to%3A%20%222024-03-07T00%3A00%3A00Z%22%0A%20%20%20%20%20%20interval%3A%20%221d%22%0A%20%20%20%20)%20%7B%0A%20%20%20%20%20%20datetime%0A%20%20%20%20%20%20value%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D>)
