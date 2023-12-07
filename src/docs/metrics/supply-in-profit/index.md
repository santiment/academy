---
title: Supply in Profit
author: Ante
date: 2023-12-07
description: Total number of tokens that are in profit.
---

## Definition
Supply in Profit metric is computed by summing all token amounts that were last transferred when the price of token was less then the current price.

Percent of Supply in Profit represents the ratio between Supply in Profit and [Circulation Supply](/metrics/circulation). This metric measures weather the market is in depression or euphoria stage. If token is breaking all time highs every holder is in profit, so the metric value is 100%. On the other side, in the bear markets there are usually more then half of tokens are in loss, so the metric value drops below 50%.

---

## Access

[Restricted Access](/metrics/details/access#restricted-access)

---

## Measuring Unit
Supply in Profit - Token/Coin amount

Percent of Supply in Profit -  Percentage

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

- Supply in Profit is available for [these
  assets](<https://api.santiment.net/graphiql?variables=&query=%7B%0A%20%20getMetric(metric%3A%20%22total_supply_in_profit%22)%20%7B%0A%20%20%20%20metadata%20%7B%0A%20%20%20%20%20%20availableSlugs%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A>)

- Percent of Supply in Profit is available for [these
  assets](<https://api.santiment.net/graphiql?variables=&query=%7B%0A%20%20getMetric(metric%3A%20%22percent_of_total_supply_in_profit%22)%20%7B%0A%20%20%20%20metadata%20%7B%0A%20%20%20%20%20%20availableSlugs%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A>)

---

## SanAPI

- Supply in Profit is available under the `total_supply_in_profit` name.
- Percent of Supply in Profit is available for  `percent_of_total_supply_in_profit` name.

```graphql
{
  getMetric(metric: "total_supply_in_profit") {
    timeseriesData(
      selector: {
        slug: "ethereum"
      }
      from: "2023-11-01T00:00:00Z"
      to: "2023-12-01T00:00:00Z"
      interval: "1d"
    ) {
      datetime
      value
    }
  }
}
```

[Run in
explorer](<https://api.santiment.net/graphiql?variables=&query=%7B%0A%20%20getMetric(metric%3A%20%22total_supply_in_profit%22)%20%7B%0A%20%20%20%20timeseriesData(%0A%20%20%20%20%20%20selector%3A%20%7B%0A%20%20%20%20%20%20%20%20slug%3A%20%22ethereum%22%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20from%3A%20%222023-11-01T00%3A00%3A00Z%22%0A%20%20%20%20%20%20to%3A%20%222023-12-01T00%3A00%3A00Z%22%0A%20%20%20%20%20%20interval%3A%20%221d%22%0A%20%20%20%20)%20%7B%0A%20%20%20%20%20%20datetime%0A%20%20%20%20%20%20value%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D>)

---

```graphql
{
  getMetric(metric: "percent_of_total_supply_in_profit") {
    timeseriesData(
      selector: {
        slug: "ethereum"
      }
      from: "2023-11-01T00:00:00Z"
      to: "2023-12-01T00:00:00Z"
      interval: "1d"
    ) {
      datetime
      value
    }
  }
}
```

[Run in
explorer](<https://api.santiment.net/graphiql?variables=&query=%7B%0A%20%20getMetric(metric%3A%20%22percent_of_total_supply_in_profit%22)%20%7B%0A%20%20%20%20timeseriesData(%0A%20%20%20%20%20%20selector%3A%20%7B%0A%20%20%20%20%20%20%20%20slug%3A%20%22ethereum%22%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20from%3A%20%222023-11-01T00%3A00%3A00Z%22%0A%20%20%20%20%20%20to%3A%20%222023-12-01T00%3A00%3A00Z%22%0A%20%20%20%20%20%20interval%3A%20%221d%22%0A%20%20%20%20)%20%7B%0A%20%20%20%20%20%20datetime%0A%20%20%20%20%20%20value%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D>)
