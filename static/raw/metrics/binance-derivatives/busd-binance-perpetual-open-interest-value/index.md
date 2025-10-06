---
title: Binance Perpetual Contracts Open Interest/Value (BUSD)
author: Lyudmil
date: 2022-02-08
description: The total number of Binance perpetual contracts in existence.
---

## Description

Traders are always searching for information to get an edge in the market. The most valuable information is one that provides insights into what other traders are doing - Open Interest offers this information if you know how to interpret it. By understanding open interest and its impact on crypto prices, it can help you make better-informed trading decisions.

More details on Binance [web-site](https://www.binance.com/en/blog/futures/what-information-does-open-interest-convey-421499824684900398).

---

## Access

[Restricted Access](/metrics/details/access#restricted-access).

---

## Measuring Unit

Dollars

---

## Data Type

[Timeseries Data](/metrics/details/data-type#timeseries-data)

---

## Frequency

[Five-Minute Intervals](/metrics/details/frequency#five-minute-frequency)

---

## Latency

[Funding Rates Latency](/metrics/details/latency#funding-rates-latency)

---

## Available Assets

Available for [these
assets](<https://api.santiment.net/graphiql?variables=&query=%7B%0A%20%20getMetric(metric%3A%20%22busd_binance_open_interest%22)%20%7B%0A%20%20%20%20metadata%20%7B%0A%20%20%20%20%20%20availableSlugs%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A>)

---

### SanAPI - Open Interest

Available under the `busd_binance_open_interest` name.

> Note: The metric is also accessible under the old name `busd_bnb_open_interest`. 
> Please start using the new name.

```graphql-explorer
{
  getMetric(metric: "busd_binance_open_interest") {
    timeseriesDataJson(
      slug: "bitcoin"
      from: "2020-04-01T00:00:00Z"
      to: "2020-04-07T00:00:00Z"
      interval: "1d"
    )
  }
}
```



---

### SanAPI - Open Value

Available under the `busd_binance_open_value` name.

> Note: The metric is also accessible under the old name `busd_bnb_open_value`. 
> Please start using the new name.

```graphql-explorer
{
  getMetric(metric: "busd_binance_open_value") {
    timeseriesDataJson(
      slug: "bitcoin"
      from: "2020-04-01T00:00:00Z"
      to: "2020-04-07T00:00:00Z"
      interval: "1d"
    )
  }
}
```
