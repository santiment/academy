---
title: M2 Money Supply
author: Filip
date: 2024-03-01
description: M2 Money Supply
---

## Description
The M2 money supply is a key economic indicator that measures the total amount of money in 
circulation within an economy, including cash, checking deposits, and easily convertible near 
money such as savings deposits, money market securities, and other time deposits. Unlike the 
narrower M1, which focuses on liquid forms of money, M2 provides a broader view of the money 
available in the economy, giving insights into potential inflationary pressures and economic 
growth. Changes in the M2 money supply can influence interest rates, consumer spending, and 
overall economic activity, making it an important tool for policymakers and economists.


M2 Money Supply metric:
* `money_supply` - M2 money supply

---

## Access

[Free Access](/metrics/details/access#free-access)

---

## Measuring Unit

Billions of Dollars

---

## Data Type

[Timeseries Data](/metrics/details/data-type#timeseries-data)

---

## Frequency

7-day interval

---

## Latency

FED announces data on a monthly basis

---

## Available Assets

Available for `m2-money`

---

### SanAPI

Available under name: `money_supply`


```graphql-explorer
{
  getMetric(metric: "money_supply"){
    timeseriesDataJson(
      slug: "m2-money"
      from: "2024-01-01T00:00:00Z"
      to: "2024-03-01T00:00:00Z"
      interval: "7d")
  }
}
```
