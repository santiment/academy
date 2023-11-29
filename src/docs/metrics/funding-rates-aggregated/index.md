---
title: Funding Rates Aggregated
author: Ante
date: 2023-11-28
description: Total number of outstanding or open contracts in the market.
---

## Definition
The funding rate is a recurring fee that long positions pay to short positions, or vice versa, at predetermined intervals (usually every 8 hours). The goal is to ensure that the price of the perpetual contract stays close to the spot price of the underlying asset.
Perpetual futures contracts are a type of derivative that tracks the price of an underlying asset and is designed to closely mimic the spot market.

Funding rates aggregated metrics use [Open Interest](/metrics/open-interest) for aggregation. Meaning the contract with the biggest open interest will have the biggest impact on the final funding rate aggregated value.
There are three types of funding rates aggregated metrics:
- Funding rates aggregated by exchange - represents the aggregation of all funding rates by open interest on given exchange for a given asset
- Funding rates aggregated by settlement currency - represents the aggregation of all funding rates by open interest per settlement currency for a given asset
- Total funding rates aggregated by asset - represents the aggregation of all funding rates by open interest for a given asset
---

## Access

[Restricted Access](/metrics/details/access#restricted-access)

---

## Measuring Unit

Decimal percentage

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

- Funding rates aggregated by exchange is available for [these
  assets](<https://api.santiment.net/graphiql?variables=&query=%7B%0A%20%20getMetric(metric%3A%20%22funding_rates_aggregated_by_exchange%22)%20%7B%0A%20%20%20%20metadata%20%7B%0A%20%20%20%20%20%20availableSlugs%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A>)

- Funding rates aggregated by settlement currency is available for [these
  assets](<https://api.santiment.net/graphiql?variables=&query=%7B%0A%20%20getMetric(metric%3A%20%22funding_rates_aggregated_by_settlement_currency%22)%20%7B%0A%20%20%20%20metadata%20%7B%0A%20%20%20%20%20%20availableSlugs%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A>)

- Total funding rates aggregated by asset is available for [these
  assets](<https://api.santiment.net/graphiql?variables=&query=%7B%0A%20%20getMetric(metric%3A%20%22total_funding_rates_aggregated_per_asset%22)%20%7B%0A%20%20%20%20metadata%20%7B%0A%20%20%20%20%20%20availableSlugs%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A>)
---

## SanAPI

- Funding rates aggregated by exchange available under the `funding_rates_aggregated_by_exchange` name.
- Funding rates aggregated by settlement currency is available for  `funding_rates_aggregated_by_settlement_currency` name.
- Total funding rates aggregated by asset is available for `total_funding_rates_aggregated_per_asset` name.

```graphql
{
  getMetric(metric: "funding_rates_aggregated_by_exchange") {
    timeseriesData(
      selector: {
        slug: "ethereum"
        owner: "binance"
      }
      from: "2023-11-27T00:00:00Z"
      to: "2023-11-28T00:00:00Z"
      interval: "5m"
    ) {
      datetime
      value
    }
  }
}
```

[Run in
explorer](<https://api.santiment.net/graphiql?query=%7B%0A%20%20getMetric(metric%3A%20%22funding_rates_aggregated_by_exchange%22)%20%7B%0A%20%20%20%20timeseriesData(%0A%20%20%20%20%20%20selector%3A%20%7B%0A%20%20%20%20%20%20%20%20slug%3A%20%22ethereum%22%0A%20%20%20%20%20%20%20%20owner%3A%20%22binance%22%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20from%3A%20%222023-11-27T00%3A00%3A00Z%22%0A%20%20%20%20%20%20to%3A%20%222023-11-28T00%3A00%3A00Z%22%0A%20%20%20%20%20%20interval%3A%20%225m%22%0A%20%20%20%20)%20%7B%0A%20%20%20%20%20%20datetime%0A%20%20%20%20%20%20value%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D>)

---

```graphql
{
  getMetric(metric: "funding_rates_aggregated_by_settlement_currency") {
    timeseriesData(
      selector: {
        slug: "ethereum"
        owner: "USDT"
      }
      from: "2023-11-27T00:00:00Z"
      to: "2023-11-28T00:00:00Z"
      interval: "5m"
    ) {
      datetime
      value
    }
  }
}
```

[Run in
explorer](<https://api.santiment.net/graphiql?query=%7B%0A%20%20getMetric(metric%3A%20%22funding_rates_aggregated_by_settlement_currency%22)%20%7B%0A%20%20%20%20timeseriesData(%0A%20%20%20%20%20%20selector%3A%20%7B%0A%20%20%20%20%20%20%20%20slug%3A%20%22ethereum%22%0A%20%20%20%20%20%20%20%20owner%3A%20%22USDT%22%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20from%3A%20%222023-11-27T00%3A00%3A00Z%22%0A%20%20%20%20%20%20to%3A%20%222023-11-28T00%3A00%3A00Z%22%0A%20%20%20%20%20%20interval%3A%20%225m%22%0A%20%20%20%20)%20%7B%0A%20%20%20%20%20%20datetime%0A%20%20%20%20%20%20value%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D>)


---

```graphql
{
  getMetric(metric: "total_funding_rates_aggregated_per_asset") {
    timeseriesData(
      selector: {
        slug: "ethereum"
      }
      from: "2023-11-27T00:00:00Z"
      to: "2023-11-28T00:00:00Z"
      interval: "5m"
    ) {
      datetime
      value
    }
  }
}
```

[Run in
explorer](<https://api.santiment.net/graphiql?query=%7B%0A%20%20getMetric(metric%3A%20%22total_funding_rates_aggregated_per_asset%22)%20%7B%0A%20%20%20%20timeseriesData(%0A%20%20%20%20%20%20selector%3A%20%7B%0A%20%20%20%20%20%20%20%20slug%3A%20%22ethereum%22%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20from%3A%20%222023-11-27T00%3A00%3A00Z%22%0A%20%20%20%20%20%20to%3A%20%222023-11-28T00%3A00%3A00Z%22%0A%20%20%20%20%20%20interval%3A%20%225m%22%0A%20%20%20%20)%20%7B%0A%20%20%20%20%20%20datetime%0A%20%20%20%20%20%20value%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D>)
