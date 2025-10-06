---
title: RSI
author: Filip
date: 2023-12-01
description: Relative Strength Index
---

## Description
The Relative Strength Index (RSI) is a popular momentum oscillator used in technical 
analysis to assess the magnitude and speed of price movements. RSI is typically applied to 
identify overbought or oversold conditions in a financial instrument, helping traders gauge 
potential trend reversals. The metric is calculated using the average gains and losses over a 
specified period, often 14 days, and is expressed as a numerical value between 0 and 100.

A reading above 70 on the RSI suggests that an asset may be overbought, indicating a potential 
reversal or correction, while a reading below 30 suggests oversold conditions, signaling a possible 
upward price movement. Traders commonly use RSI in conjunction with other technical indicators to
make informed decisions about entering or exiting positions in financial markets.


RSI metric is available for 3 different time periods
* `rsi_4h` - RSI for a 4-hour time frame
* `rsi_1d` - RSI for a 1-day time frame
* `rsi_7d` - RSI for a 7-day time frame

> Note: Even though metrics are available for 5-minute intervals, the recommendation is to use them 
> within their designated time frame. For instance, consider using a 1-day interval for `rsi_1d`.

---

## Access

[Restricted Access](/metrics/details/access#restricted-access)

---

## Measuring Unit

Numerical value between 0 and 100 

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
assets](<https://api.santiment.net/graphiql?query=%7B%0A%20%20getMetric(metric%3A%20%22rsi_4h%22)%7B%0A%20%20%20%20metadata%7B%0A%20%20%20%20%20%20availableSlugs%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D>)

> Note: All metrics are available for the same set of assets

---

### SanAPI

Available under names: `rsi_4h`, `rsi_1d` and `rsi_7d`


```graphql-explorer
{
  getMetric(metric: "rsi_1d"){
    timeseriesDataJson(
      slug: "bitcoin"
      from: "2023-11-01T00:00:00Z"
      to: "2023-12-01T00:00:00Z"
      interval: "1d")
  }
}
```
