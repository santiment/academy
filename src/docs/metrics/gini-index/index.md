---
title: Gini Index
author: Filip
date: 2024-03-01
description: Gini index
---

## Description
The Gini index is a statistical measure of income or wealth distribution within a population, 
ranging from 0 (perfect equality) to 1 (perfect inequality). It quantifies the extent of economic 
inequality, with lower values indicating more equitable distributions and higher values indicating 
greater disparities.

Mathematically, the Gini index is calculated using the Lorenz curve, which plots the cumulative share 
of income or wealth held by the bottom x% of the population against the cumulative share of the 
population. The Gini index is then calculated as the area between the Lorenz curve and the line of 
perfect equality, divided by the total area under the line of perfect equality.

The Gini index can also be applied to cryptocurrencies to measure the distribution of wealth or 
coins within a particular cryptocurrency ecosystem. By analyzing the distribution of cryptocurrency 
holdings among addresses or users, the Gini index can provide insights into the concentration of 
wealth or coins within the cryptocurrency network.


Gini index metric:
* `gini_index` - Gini index

---

## Access

[Free Access](/metrics/details/access#free-access)

---

## Measuring Unit

Value between 0 and 1 

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
assets](<https://api.santiment.net/graphiql?variables=&query=%7B%0A%20%20getMetric(metric%3A%20%22gini_index%22)%20%7B%0A%20%20%20%20metadata%20%7B%0A%20%20%20%20%20%20availableSlugs%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A>)

---

### SanAPI

Available under the name: `gini_index`


```graphql-explorer
{
  getMetric(metric: "gini_index"){
    timeseriesDataJson(
      slug: "bitcoin"
      from: "2024-01-01T00:00:00Z"
      to: "2024-02-01T00:00:00Z"
      interval: "1d")
  }
}
```
