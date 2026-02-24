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

The gas units consumed per transaction represent the amount of gas used during the transaction, 
essentially reflecting the complexity of the transaction.


Ethereum fees metrics:
- `fees`: Total fees paid in ETH over a daily interval
- `fees_intraday`: Total fees paid in ETH over 5-minute time intervals
- `fees_usd`: Total fees paid in USD over a daily interval
- `fees_usd_intraday`: Total fees paid in USD over 5-minute time intervals

Aggregated fees metrics:
- `average_fees_usd`: Average fees paid in USD over a daily interval
- `average_fees_usd_5m`: Average fees paid in USD over 5-minute time intervals
- `median_fees_usd`: Median fees paid in USD over a daily interval
- `median_fees_usd_5m`: Median fees paid in USD over 5-minute time intervals

Fees burnt metrics:
- `fees_burnt_5m`: Fees burnt (removed from circulation) in ETH within a 5-minute interval
- `fees_burnt_usd_5m`: Fees burnt (removed from circulation) in USD within a 5-minute interval

Fees to network circulation metric:
- `fees_to_network_circulation_usd_1d`: Calculated using the formula: 
$$
\frac{\text{fees} * \text{daily\_avg\_price\_usd}}{\text{network\_circulation\_usd\_1d}}
$$
where $\text{network\_circulation\_usd\_1d}$ represents the total value in USD of all coins moved on Ethereum

Gas used metrics:
- `avg_gas_used` - Average amount of gas consumed per transaction over 5-minute time intervals in Gwei
- `total_gas_used` - Total amount of gas used over 5-minute time intervals

---

## Access

[Free Access](/metrics/details/access#free-access)

---

## Measuring Unit

- Fees metrics - amount in ETH or USD
- `avg_gas_used` - amount in Gwei
- `total_gas_used` - gas units

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

```graphql-explorer
{
  getMetric(metric: "fees") {
    timeseriesDataJson(
      slug: "ethereum"
      from: "2024-03-01T00:00:00Z"
      to: "2024-03-07T00:00:00Z"
      interval: "1d"
    )
  }
}
```

Fees metrics in USD: `fees_usd` and `fees_usd_intraday`

```graphql-explorer
{
  getMetric(metric: "fees_usd_intraday") {
    timeseriesDataJson(
      slug: "ethereum"
      from: "2024-03-01T00:00:00Z"
      to: "2024-03-07T00:00:00Z"
      interval: "5m"
    )
  }
}
```

Aggregated fees metrics: `average_fees_usd`, `average_fees_usd_5m`, 
`median_fees_usd` and `median_fees_usd_5m`

```graphql-explorer
{
  getMetric(metric: "average_fees_usd_5m") {
    timeseriesDataJson(
      slug: "ethereum"
      from: "2024-03-01T00:00:00Z"
      to: "2024-03-07T00:00:00Z"
      interval: "5m"
    )
  }
}
```

Fees burnt metrics: `fees_burnt_5m` and `fees_burnt_usd_5m`

```graphql-explorer
{
  getMetric(metric: "fees_burnt_5m") {
    timeseriesDataJson(
      slug: "ethereum"
      from: "2024-03-01T00:00:00Z"
      to: "2024-03-07T00:00:00Z"
      interval: "1d"
    )
  }
}
```

Fees to network circulation metric: `fees_to_network_circulation_usd_1d`

```graphql-explorer
{
  getMetric(metric: "fees_to_network_circulation_usd_1d") {
    timeseriesDataJson(
      slug: "ethereum"
      from: "2024-03-01T00:00:00Z"
      to: "2024-03-07T00:00:00Z"
      interval: "1d"
    )
  }
}
```

Gas used metrics: `avg_gas_used` and `total_gas_used`

```graphql-explorer
{
  getMetric(metric: "avg_gas_used") {
    timeseriesDataJson(
      slug: "ethereum"
      from: "2024-03-01T00:00:00Z"
      to: "2024-03-07T00:00:00Z"
      interval: "1d"
    )
  }
}
```
