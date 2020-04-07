---
title: Transaction Volume metric
author: Santiment Team
---

## Description

This metric shows the aggregate amount of coins/tokens across all transactions
that happened on the network for a given asset in an interval.

---

## Measuring Unit

Amount of coins/tokens

---

## Frequency

Transaction volume is available at [five-minute
intervals](/metrics/details/frequency#five-minute-frequency)

---

## Latency

Transaction volume has [on-chain latency](/metrics/details/latency#on-chain-latency)

---

## Available assets

Transaction Volume is available for [these
assets](<https://api.santiment.net/graphiql?variables=&query=%7B%0A%20%20getMetric(metric%3A%20%22transaction_volume%22)%20%7B%0A%20%20%20%20metadata%20%7B%0A%20%20%20%20%20%20availableSlugs%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A>)

---

### SanAPI

Transaction volume is available under the `transaction_volume` name.

```graphql
{
  getMetric(metric: "transaction_volume") {
    timeseriesData(
      slug: "santiment"
      from: "2020-04-01T00:00:00Z"
      to: "2020-04-07T00:00:00Z"
      interval: "1d"
    ) {
      datetime
      value
    }
  }
}
```

[**Run in Explorer**](<https://api.santiment.net/graphiql?variables=&query=%7B%0A%20%20getMetric(metric%3A%20%22transaction_volume%22)%20%7B%0A%20%20%20%20timeseriesData(%0A%20%20%20%20%20%20slug%3A%20%22santiment%22%0A%20%20%20%20%20%20from%3A%20%222020-04-01T00%3A00%3A00Z%22%0A%20%20%20%20%20%20to%3A%20%222020-04-07T00%3A00%3A00Z%22%0A%20%20%20%20%20%20interval%3A%20%221d%22)%20%7B%0A%20%20%20%20%20%20%20%20datetime%0A%20%20%20%20%20%20%20%20value%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A>)
