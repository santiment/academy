---
title: Open Interest
author: Ante
date: 2023-11-28
description: Total number of outstanding or open contracts in the market.
---

## Definition
Open interest represents the total number of outstanding contracts that have not been settled by an offsetting trade. For example, if trader A buys a futures contract from trader B, and neither has closed out their position, the open interest is one.
Traders can close out their positions by taking an opposing position (sell if they were long or buy if they were short). Changes in open interest can reflect whether traders are initiating new positions or closing existing ones.
There are three types of open interest metrics:
- Open interest per exchange - represents the sum of open interests of all contracts on given exchange for a given asset
- Open interest per settlement currency - represents the sum of open interests of all contracts for given settlement currency and asset
- Total open interest - represents the sum of open interests of all contracts for a given asset
---

## Access

[Restricted Access](/metrics/details/access#restricted-access)

---

## Measuring Unit

Dollars

---

## Data Type

[Timeseries Data](/metrics/details/data-type#timeseries-data)

---

## Frequency

[Five-minute Intervals](/metrics/details/frequency#five-minute-freqency)

---

## Latency

[On-Chain Latency](/metrics/details/latency#funding-rates-latency)

---

## Available Assets

- Open interest per exchange is available for [these
  assets](<https://api.santiment.net/graphiql?variables=&query=%7B%0A%20%20getMetric(metric%3A%20%22exchange_open_interest%22)%20%7B%0A%20%20%20%20metadata%20%7B%0A%20%20%20%20%20%20availableSlugs%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A>)

- Open interest per settlement currency is available for [these
  assets](<https://api.santiment.net/graphiql?variables=&query=%7B%0A%20%20getMetric(metric%3A%20%22open_interest_per_settlement_currency%22)%20%7B%0A%20%20%20%20metadata%20%7B%0A%20%20%20%20%20%20availableSlugs%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A>)

- Total open interest is available for [these
  assets](<https://api.santiment.net/graphiql?variables=&query=%7B%0A%20%20getMetric(metric%3A%20%22total_open_interest%22)%20%7B%0A%20%20%20%20metadata%20%7B%0A%20%20%20%20%20%20availableSlugs%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A>)
---

## SanAPI

- Open interest per exchange is available under the `exchange_open_interest` name.
- Open interest per settlement currency is available under the  `open_interest_per_settlement_currency` name.
- Total open interest is available under the  `total_open_interest` name.

```graphql-explorer
{
  getMetric(metric: "exchange_open_interest") {
    timeseriesDataJson(
      selector: {
        slug: "ethereum"
        owner: "binance"
      }
      from: "2023-11-27T00:00:00Z"
      to: "2023-11-28T00:00:00Z"
      interval: "5m"
    )
  }
}
```

---

```graphql-explorer
{
  getMetric(metric: "open_interest_per_settlement_currency") {
    timeseriesDataJson(
      selector: {
        slug: "ethereum"
        owner: "USDT"
      }
      from: "2023-11-27T00:00:00Z"
      to: "2023-11-28T00:00:00Z"
      interval: "5m"
    )
  }
}
```

---

```graphql-explorer
{
  getMetric(metric: "total_open_interest") {
    timeseriesDataJson(
      selector: {
        slug: "ethereum"
      }
      from: "2023-11-27T00:00:00Z"
      to: "2023-11-28T00:00:00Z"
      interval: "5m"
    )
  }
}
```
