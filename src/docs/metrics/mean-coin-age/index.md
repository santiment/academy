---
title: Mean Coin Age
author: Ivan
date: 2020-04-06
description: The average age of all coins/tokens on a given blockchain
---

## Definition

Recall that the **[coin-age model](/metrics/details/stack-coin-age-model)**
allows us at each given point in time to assign age to each coin/token.

There are two coin age defined metrics:

- Mean Coin Age - The average age of all coins/tokens on the blockchain.
- Mean Dollar Invested Age - The average age of all coins/tokens on the
  blockchain weighted by the purchase price.

### Example (Mean Coin age)

Given there are 100 tokens in existence:

- 50 of them have age 10 days
- 50 of them have age 20 days

then the average coin age is: (10 × 50 + 20 × 50) / 100 = 15 (coin-days)

### Example (Mean Dollar Invested Age)

Given there 100 tokens in existence:

- 50 of them have age 10 days and the token's price was \$1 at that time
- 50 of them have age 20 days and the token's price was \$2 at that time

then the mean dollar invested age is: (10 × 50 + 20 × 50) / (50 × $1 + 50 × $2)
= 1500 / 150 = 10 (coin-dollar days)

> More technical definition and computation description can be found
> [here](/metrics/mean-coin-age/mean-coin-age-technical)

---

## Access

[Restricted Access](/metrics/details/access#restricted-access)

---

## Measuring Unit

- Coin Age in Days
- Coin Dollar Age in Days

---

## Data Type

[Timeseries Data](/metrics/details/data-type#timeseries-data)

---

## Timebound

[Timebound Metrics](/metrics/details/timebound)

---

## Change Metrics

[Change Metrics](/metrics/details/change_metrics)

---

## Frequency

[Daily Intervals](/metrics/details/frequency#daily-frequency)

---

## Latency

[On-Chain Latency](/metrics/details/latency#on-chain-latency)

---

## Available Assets

- Mean Coin Age is available for [these
  assets](<https://api.santiment.net/graphiql?query=%7B%0A%20%20getMetric(metric%3A%20%22mean_age%22)%20%7B%0A%20%20%20%20metadata%20%7B%0A%20%20%20%20%20%20availableSlugs%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A>)
- Mean Dollar Invested Age is available for [these assets](<https://api.santiment.net/graphiql?query=%7B%0A%20%20getMetric(metric%3A%20%22mean_dollar_invested_age%22)%20%7B%0A%20%20%20%20metadata%20%7B%0A%20%20%20%20%20%20availableSlugs%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A>)

> Note: timebound Mean Age metrics are available for [these
  assets](<https://api.santiment.net/graphiql?query=%7B%0A%20%20getMetric(metric%3A%20%22mean_age_90d%22)%20%7B%0A%20%20%20%20metadata%20%7B%0A%20%20%20%20%20%20availableSlugs%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A>)

---

## SanAPI

Available under the `mean_age` and `mean_age_<timebound>` names.

```graphql
{
  getMetric(metric: "mean_age") {
    timeseriesData(
      slug: "santiment"
      from: "2020-01-13T00:00:00Z"
      to: "2020-01-18T00:00:00Z"
      interval: "1d"
    ) {
      datetime
      value
    }
  }
}
```

**[Run in Explorer](<https://api.santiment.net/graphiql?query=%7B%0A%20%20getMetric(metric%3A%20%22mean_age%22)%20%7B%0A%20%20%20%20timeseriesData(%0A%20%20%20%20%20%20slug%3A%20%22santiment%22%0A%20%20%20%20%20%20from%3A%20%222020-01-13T00%3A00%3A00Z%22%0A%20%20%20%20%20%20to%3A%20%222020-01-18T00%3A00%3A00Z%22%0A%20%20%20%20%20%20interval%3A%20%221d%22)%20%7B%0A%20%20%20%20%20%20%20%20datetime%0A%20%20%20%20%20%20%20%20value%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A&variables=>)**

---

Available under the `mean_dollar_invested_age` and 
`mean_dollar_invested_age_<timebound>` names.

```graphql
{
  getMetric(metric: "mean_dollar_invested_age") {
    timeseriesData(
      slug: "santiment"
      from: "2020-01-13T00:00:00Z"
      to: "2020-01-18T00:00:00Z"
      interval: "1d"
    ) {
      datetime
      value
    }
  }
}
```

**[Run in Explorer](<https://api.santiment.net/graphiql?query=%7B%0A%20%20getMetric(metric%3A%20%22mean_dollar_invested_age%22)%20%7B%0A%20%20%20%20timeseriesData(%0A%20%20%20%20%20%20slug%3A%20%22santiment%22%0A%20%20%20%20%20%20from%3A%20%222020-01-13T00%3A00%3A00Z%22%0A%20%20%20%20%20%20to%3A%20%222020-01-18T00%3A00%3A00Z%22%0A%20%20%20%20%20%20interval%3A%20%221d%22)%20%7B%0A%20%20%20%20%20%20%20%20datetime%0A%20%20%20%20%20%20%20%20value%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A&variables=>)**
