---
title: Binance Contract Funding Rate
author: Lyudmil
date: 2021-08-25
description: Amount of coin/tokens moved on-chain.
---

## Description

Funding rates are periodic payments made to either long or short traders, calculated based on the difference between the perpetual contract prices and spot prices. When the market is bullish, the funding rate is positive and tends to rise over time. In these situations, traders who are long on a perpetual contract will pay a funding fee to traders on the opposing side. Conversely, the funding rate will be negative when the market is bearish, where traders who are short on a perpetual contract will pay a funding fee to long traders.

More details on Binance [web-site](https://www.binance.com/en/support/faq/360033525031).

---

## Access

[Restricted Access](/metrics/details/access#restricted-access).

---

## Measuring Unit

Ratio

---

## Data Type

[Timeseries Data](/metrics/details/data-type#timeseries-data)

---

## Frequency

[Eight-Hour Intervals](/metrics/details/frequency#eight-hour-frequency)

---

## Latency

[Funding Rates Latency](/metrics/details/latency#funding-rates-latency)

---

## Available Assets

Available for [these
assets](<https://api.santiment.net/graphiql?variables=&query=%7B%0A%20%20getMetric(metric%3A%20%22busd_bnb_funding_rates%22)%20%7B%0A%20%20%20%20metadata%20%7B%0A%20%20%20%20%20%20availableSlugs%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A>)

---

### SanAPI

Available under the `busd_bnb_funding_rates` name.

```graphql
{
  getMetric(metric: "busd_bnb_funding_rates") {
    timeseriesData(
      slug: "bitcoin"
      from: "2021-04-01T00:00:00Z"
      to: "2021-04-07T00:00:00Z"
      interval: "8h"
    ) {
      datetime
      value
    }
  }
}
```

[**Run in Explorer**](<https://api.santiment.net/graphiql?variables=&query=%7B%0A%20%20getMetric(metric%3A%20%22busd_bnb_funding_rates%22)%20%7B%0A%20%20%20%20timeseriesData(%0A%20%20%20%20%20%20slug%3A%20%22bitcoin%22%0A%20%20%20%20%20%20from%3A%20%222021-04-01T00%3A00%3A00Z%22%0A%20%20%20%20%20%20to%3A%20%222021-04-07T00%3A00%3A00Z%22%0A%20%20%20%20%20%20interval%3A%20%228h%22%0A%20%20%20%20)%20%7B%0A%20%20%20%20%20%20datetime%0A%20%20%20%20%20%20value%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D>)
