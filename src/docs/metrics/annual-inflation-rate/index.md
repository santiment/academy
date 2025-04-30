---
title: Annual inflation rate
author: Filip
date: 2024-03-01
description: Annual inflation rate
---

## Description
The annual inflation rate of cryptocurrencies varies widely depending on the specific cryptocurrency. 
Unlike traditional fiat currencies, which are often centrally controlled and have 
predictable inflation rates, cryptocurrencies can have different mechanisms governing their supply. 
Some cryptocurrencies, like Bitcoin, have a predetermined issuance schedule with a decreasing rate 
of new coin creation over time, while others may have variable or dynamic supply mechanisms. 
Additionally, factors such as network consensus rules, mining rewards, and tokenomics can influence 
the inflation rate of cryptocurrencies.


Annual inflation rate metric:
* `annual_inflation_rate` - annual inflation rate

---

## Access

[Free Access](/metrics/details/access#free-access)

---

## Measuring Unit

Decimal percentage

---

## Data Type

[Timeseries Data](/metrics/details/data-type#timeseries-data)

---

## Frequency

[Daily Intervals](/metrics/details/frequency#daily-frequency)

---

## Latency

[Price Latency](/metrics/details/latency#price-latency)

---

## Available Assets

Available for [these
assets](<https://api.santiment.net/graphiql?variables=&query=%7B%0A%20%20getMetric(metric%3A%20%22annual_inflation_rate%22)%20%7B%0A%20%20%20%20metadata%20%7B%0A%20%20%20%20%20%20availableSlugs%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A>)

---

### SanAPI

Available under name: `annual_inflation_rate`


```graphql-explorer
{
  getMetric(metric: "annual_inflation_rate"){
    timeseriesDataJson(
      slug: "bitcoin"
      from: "2024-01-01T00:00:00Z"
      to: "2024-02-01T00:00:00Z"
      interval: "1d")
  }
}
```
