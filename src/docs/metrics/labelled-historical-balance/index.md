---
title: Labelled Historical Balance 
author: Santiment team
date: 2024-04-17
description: Get historical balance for a given label
---

## Definition

`labelled_historical_balance` shows a historical balance for a provided [label FQN](/labels/label-fqn). I.e. it shows a total combined balance for all addresses labelled with a given label FQN. For instance, all centralized exchange addresses or all miner addresses.

`labelled_historical_balance_changes` shows a change in the historical balance.

You can find available labels along with [label FQNs](/labels/label-fqn) at [labels academy section](labels/#domains).
Here are some label FQN examples:
* `santiment/centralized_exchange:v1`
* `santiment/fund:v1`
* `santiment/miner:v1`
* `santiment/owner->binance:v1`
* `santiment/whale_usd_balance(ethereum):v1`

---

## Access

[Restricted Access](/metrics/details/access#restricted-access)

---

## Measuring Unit

Number of tokens

---

## Data Type

[Timeseries Data](/metrics/details/data-type#timeseries-data)

---

## Frequency

[Five-Minute Intervals](/metrics/details/frequency#five-minute-frequency)

---

## Available Assets

Available for [these assets](https://api.santiment.net/graphiql?variables=&query=%7B%0A%20%20getMetric(metric%3A%20%22labelled_historical_balance%22)%20%7B%0A%20%20%20%20metadata%20%7B%0A%20%20%20%20%20%20availableSlugs%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A)

---

## API

`labelled_historical_balance`

```graphql
{
  getMetric(metric: "labelled_historical_balance") {
    timeseriesData(
      from: "2024-03-01T00:00:00Z"
      to: "2024-03-07T00:00:00Z"
      interval: "1d"
      selector: {labelFqn: "santiment/centralized_exchange:v1", slug: "ethereum"}
    ) {
      datetime
      value
    }
  }
}
```

[**Run in explorer**](https://api.santiment.net/graphiql?query=%7B%0A%20%20getMetric(metric%3A%20%22labelled_historical_balance%22)%20%7B%0A%20%20%20%20timeseriesData(%0A%20%20%20%20%20%20from%3A%20%222024-03-01T00%3A00%3A00Z%22%0A%20%20%20%20%20%20to%3A%20%222024-03-07T00%3A00%3A00Z%22%0A%20%20%20%20%20%20interval%3A%20%221d%22%0A%20%20%20%20%20%20selector%3A%20%7BlabelFqn%3A%20%22santiment%2Fcentralized_exchange%3Av1%22%2C%20slug%3A%20%22ethereum%22%7D%0A%20%20%20%20)%20%7B%0A%20%20%20%20%20%20datetime%0A%20%20%20%20%20%20value%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D&variables=%7B%7D)

`labelled_historical_balance_changes`

```graphql
{
  getMetric(metric: "labelled_historical_balance_changes") {
    timeseriesData(
      from: "2024-03-01T00:00:00Z"
      to: "2024-03-07T00:00:00Z"
      interval: "1d"
      selector: {labelFqn: "santiment/centralized_exchange:v1", slug: "ethereum"}
    ) {
      datetime
      value
    }
  }
}
```
[**Run in explorer**](https://api.santiment.net/graphiql?query=%7B%0A%20%20getMetric(metric%3A%20%22labelled_historical_balance_changes%22)%20%7B%0A%20%20%20%20timeseriesData(%0A%20%20%20%20%20%20from%3A%20%222024-03-01T00%3A00%3A00Z%22%0A%20%20%20%20%20%20to%3A%20%222024-03-07T00%3A00%3A00Z%22%0A%20%20%20%20%20%20interval%3A%20%221d%22%0A%20%20%20%20%20%20selector%3A%20%7BlabelFqn%3A%20%22santiment%2Fcentralized_exchange%3Av1%22%2C%20slug%3A%20%22ethereum%22%7D%0A%20%20%20%20)%20%7B%0A%20%20%20%20%20%20datetime%0A%20%20%20%20%20%20value%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D&variables=%7B%7D)
