---
title: Labelled Historical Balance 
author: Santiment team
date: 2024-04-17
description: Get historical balance for a given label
---

## Definition

`labelled_historical_balance` shows the historical balance for a provided [label FQN](/labels/label-fqn). It shows a total combined balance for all addresses labelled with a given label FQN -- for instance, all centralized exchange addresses or all miner addresses.

`labelled_historical_balance_changes` shows the change in the historical balance.

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

Available under `labelled_historical_balance`. The query below fetches a total `ethereum` balance of all `centralized_exchange` addresses.

```graphql-explorer
{
  getMetric(metric: "labelled_historical_balance") {
    timeseriesDataJson(
      from: "2024-03-01T00:00:00Z"
      to: "2024-03-07T00:00:00Z"
      interval: "1d"
      selector: {labelFqn: "santiment/centralized_exchange:v1", slug: "ethereum"}
    )
  }
}
```

`labelled_historical_balance_changes`

```graphql-explorer
{
  getMetric(metric: "labelled_historical_balance_changes") {
    timeseriesDataJson(
      from: "2024-03-01T00:00:00Z"
      to: "2024-03-07T00:00:00Z"
      interval: "1d"
      selector: {labelFqn: "santiment/centralized_exchange:v1", slug: "ethereum"}
    )
  }
}
```
