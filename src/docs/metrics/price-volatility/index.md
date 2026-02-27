---
title: Price Volatility
author: Filip
date: 2022-12-07
description: Price fluctuations of different assets
---

## Description
Price volatility is used to describe price fluctuations of an asset. 

If we use $\mu$ and $\sigma$ to denote mean and standard deviation of asset prices, 
then we define **Price Volatility** as:

$$
volatility(assetPrice) = \frac{\sigma(assetPrice)}{\mu(assetPrice)}
$$

Price volatility metrics are available for 4 different time periods:
* `price_volatility_1d` - Price volatility for the last day
* `price_volatility_1w` - Price volatility for the last 7 days
* `price_volatility_2w` - Price volatility for the last 14 days
* `price_volatility_4w` - Price volatility for the last 28 days

Examples of use cases:
* Traders seek volatile assets because they move more quickly and have larger price changes. Those price changes are both upward and downward. Keeping this in mind, a trader needs effective risk management in order to trade volatile assets profitably.
* On the other hand, some traders seek exposure to the assets that are the least volatile, and they might use this metric to identify those assets.

---

## Access

[Free Access](/metrics/details/access#free-access)

---

## Measuring Unit

Volatility

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

Available for [these
assets](<https://api.santiment.net/graphiql?query=%7B%0A%20%20getMetric(metric%3A%20%22price_volatility_1d%22)%7B%0A%20%20%20%20metadata%7B%0A%20%20%20%20%20%20availableSlugs%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D>)

> Note: All metrics are available for the same set of assets

---

### SanAPI

Available under names: `price_volatility_1d`, `price_volatility_1w`, 
`price_volatility_2w` and `price_volatility_4w`


```graphql-explorer
{
  getMetric(metric: "price_volatility_1d"){
    timeseriesDataJson(
      slug: "santiment"
      from: "2022-11-01T00:00:00Z"
      to: "2022-11-03T00:00:00Z"
      interval: "5m")
  }
}
```
