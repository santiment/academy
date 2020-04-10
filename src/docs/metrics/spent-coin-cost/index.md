---
title: Mean Coin Age
author: Ivan
date: 2020-04-06
---

## Definition

For the coins/tokens transacted on a given day see what is the price they were
acquired at.

---

## Access

[Restricted Access](/metrics/details/access#restricted-access)

---

## Measuring Unit

Number coins/tokens per price range

---

## Data Type

[Histogram Data](/metrics/details/data-type#histogram-data)

---

## Frequency

[Five-minute intervals](/metrics/details/frequency#five-minute-frequency)

---

## Latency

[On-Chain latency](/metrics/details/latency#on-chain-latency)

---

## Available Assets

Available for [these assets](<https://api.santiment.net/graphiql?query=%7B%0A%20%20getMetric(metric%3A%20%22price_histogram%22)%20%7B%0A%20%20%20%20metadata%20%7B%0A%20%20%20%20%20%20availableSlugs%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A>)

---

## SanAPI

Available under `price_histogram` names

```graphql
{
  getMetric(metric: "price_histogram") {
    histogramData(
      slug: "santiment"
      from: "2020-04-07T00:00:00Z"
      to: "2020-04-08T00:00:00Z"
      interval: "1d"
      limit: 10
    ) {
      values {
        ... on FloatRangeFloatValueList {
          data {
            range
            value
          }
        }
      }
    }
  }
}
```

**[Run in Explorer](<https://api.santiment.net/graphiql?variables=&query=%7B%0A%20%20getMetric(metric%3A%20%22price_histogram%22)%20%7B%0A%20%20%20%20histogramData(%0A%20%20%20%20%20%20slug%3A%20%22santiment%22%0A%20%20%20%20%20%20from%3A%20%222020-04-07T00%3A00%3A00Z%22%0A%20%20%20%20%20%20to%3A%20%222020-04-08T00%3A00%3A00Z%22%0A%20%20%20%20%20%20interval%3A%20%221d%22%0A%20%20%20%20%20%20limit%3A%2010%0A%20%20%20%20)%20%7B%0A%20%20%20%20%20%20values%20%7B%0A%20%20%20%20%20%20%20%20...%20on%20FloatRangeFloatValueList%20%7B%0A%20%20%20%20%20%20%20%20%20%20data%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20range%0A%20%20%20%20%20%20%20%20%20%20%20%20value%0A%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D>)**
