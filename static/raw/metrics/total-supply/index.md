---
title: Total Supply
author: Ante
date: 2023-12-07
description: Total Supply Metrics
---

## Definition
Total Supply is the total amount of coins or tokens belonging to a particular cryptocurrency 
that have been created or mined, and are currently in circulation, including those that may 
be locked or reserved.

Supply in Profit metric is computed by summing all token amounts that were last transferred when 
the price of token was less then the current price.

Percent of Supply in Profit represents the ratio between Supply in Profit and 
[Circulation Supply](/metrics/circulation). This metric measures weather the market is in 
depression or euphoria stage. If token is breaking all time highs every holder is in profit, 
so the metric value is 100%. On the other side, in the bear markets there are usually more then 
half of tokens are in loss, so the metric value drops below 50%.

---

## Access

[Restricted Access](/metrics/details/access#restricted-access)

---

## Measuring Unit

- `total_supply` and `total_supply_in_profit` - Token/Coin amount
- `percent_of_total_supply_in_profit` -  Percentage

---

## Data Type

[Timeseries Data](/metrics/details/data-type#timeseries-data)

---

## Frequency

[Daily Intervals](/metrics/details/frequency#daily-frequency)

---

## Latency

[On-Chain Latency](/metrics/details/latency#on-chain-latency)

---

## Available Assets

Available for for [these assets](<https://api.santiment.net/graphiql?variables=&query=%7B%0A%20%20getMetric(metric%3A%20%22total_supply%22)%20%7B%0A%20%20%20%20metadata%20%7B%0A%20%20%20%20%20%20availableSlugs%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A>)

> Note: All metrics are available for the same set of assets.

---

## SanAPI

Total Supply is available under the `total_supply` name.

```graphql-explorer
{
  getMetric(metric: "total_supply") {
    timeseriesDataJson(
      selector: {
        slug: "ethereum"
      }
      from: "2023-11-01T00:00:00Z"
      to: "2023-12-01T00:00:00Z"
      interval: "1d"
    )
  }
}
```

Supply in Profit is available under the `total_supply_in_profit` name.

```graphql-explorer
{
  getMetric(metric: "total_supply_in_profit") {
    timeseriesDataJson(
      selector: {
        slug: "ethereum"
      }
      from: "2023-11-01T00:00:00Z"
      to: "2023-12-01T00:00:00Z"
      interval: "1d"
    )
  }
}
```

Percent of Supply in Profit is available for  `percent_of_total_supply_in_profit` name.

```graphql-explorer
{
  getMetric(metric: "percent_of_total_supply_in_profit") {
    timeseriesDataJson(
      selector: {
        slug: "ethereum"
      }
      from: "2023-11-01T00:00:00Z"
      to: "2023-12-01T00:00:00Z"
      interval: "1d"
    )
  }
}
```

## Full list of metrics

The full list of Total Supply metrics is:

<Details>

<Summary>Open Metrics List</Summary>

- percent_of_whale_stablecoin_total_supply

</Details>