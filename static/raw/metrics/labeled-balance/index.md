---
title: Labeled Balance
author: Maksim Razhev
date: 2021-01-28
description: Labeled Balance Metrics
---

## Description
Metrics that show labeled addresses inflow, outflow and balances

* `inflow_per_label_and_owner` - inflow of a given owner
* `outflow_per_label_and_owner` - outflow of a given owner
* `balance_per_label_and_owner_delta` - balance change of a given owner
* `balance_per_owner` - balance of a given owner

Please note that metrics may undergo changes in historical values due to automated recalculations triggered monthly. We constantly update our labels which helps us to keep labels as fresh as possible but result historical data changes. Any modifications to labels, social sources, or relevant jobs will prompt recalculation for the previous month's data. Within a 12 hour period, metric can be supplemented with new data. Additionally, adjustments to labels automatically trigger recalculation of labeled balances.

Available [labels](/labels):
* `centralized_exchange`
* `decentralized_exchange`
* `defi`
* `eth2stakingcontract`
* `deposit`

---

## Access

[Restricted Access](/metrics/details/access#restricted-access)

---

## Measuring Unit
Amount of tokens

---

## Data Type
[Timeseries Data](/metrics/details/data-type#timeseries-data)

---

## Frequency
[Five-minute Intervals](/metrics/details/frequency#five-minute-frequency)

---

## Latency
[Price Latency](/metrics/details/latency#price-latency)

---

## Available Assets
* `ethereum`
* For [these ERC20 assets](<https://api.santiment.net/graphiql?query=%7B%0A%20%20getMetric(metric%3A%20%22inflow_per_label_and_owner%22)%7B%0A%20%20%20%20metadata%7B%0A%20%20%20%20%20%20availableSlugs%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D>)

---

### SanAPI
Inflow per label and owner (example DAI inflow to Compound):
```graphql-explorer
{
  getMetric(metric: "inflow_per_label_and_owner") {
    timeseriesDataJson(
      selector: {
        slug: "uniswap"
      	owner: "1inch"
      	label: "decentralized_exchange"
      }
      from: "2023-12-10T00:00:00Z"
      to: "2023-12-11T00:00:00Z"
      interval: "1h"
    )
  }
}
```

Inflow per label (example DAI inflow to all DeFi protocols):
```graphql-explorer
{
  getMetric(metric: "inflow_per_label_and_owner") {
    timeseriesDataJson(
      selector: {
        slug: "lido-dao"
      	label: "defi"
      }
      from: "2023-12-10T00:00:00Z"
      to: "2023-12-11T00:00:00Z"
      interval: "1h"
    )
  }
}
```

Outflow per label and owner (example DAI outflow to Compound):
```graphql-explorer
{
  getMetric(metric: "outflow_per_label_and_owner") {
    timeseriesDataJson(
      selector: {
        slug: "uniswap"
      	owner: "1inch"
      	label: "decentralized_exchange"
      }
      from: "2023-12-10T00:00:00Z"
      to: "2023-12-11T00:00:00Z"
      interval: "1h"
    )
  }
}
```

Outflow per label:
```graphql-explorer
{
  getMetric(metric: "outflow_per_label_and_owner") {
    timeseriesDataJson(
      selector: {
        slug: "lido-dao"
      	label: "defi"
      }
      from: "2023-12-10T00:00:00Z"
      to: "2023-12-11T00:00:00Z"
      interval: "1h"
    )
  }
}
```

Balance delta per label and owner (example DAI balance delta of Aave):
```graphql-explorer
{
  getMetric(metric: "balance_per_label_and_owner_delta") {
    timeseriesDataJson(
      selector: {
        slug: "uniswap"
      	owner: "1inch"
      	label: "decentralized_exchange"
      }
      from: "2023-12-10T00:00:00Z"
      to: "2023-12-11T00:00:00Z"
      interval: "1h"
    )
  }
}
```

Balance per label and owner (example DAI balance of Aave):
```graphql-explorer
{
  getMetric(metric: "balance_per_owner") {
    timeseriesDataJson(
      selector: {
        slug: "multi-collateral-dai"
      	owner: "aave"
      	label: "defi"
      }
      from: "2020-04-01T00:00:00Z"
      to: "2020-04-07T00:00:00Z"
      interval: "1h"
    )
  }
}
```
