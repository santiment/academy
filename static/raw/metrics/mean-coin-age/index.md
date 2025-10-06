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
- Mean Dollar Invested Age - The average age of every dollar invested into the market cap of a coin.

Mean Coin Age metrics are also available for different [time bounds](/metrics/details/timebound), which 
compute the mean coin age for tokens moved at least once no longer than a specific number of days or years ago.

### Example (Mean Coin age)

Given there are 100 tokens in existence:

- 50 of them have age 10 days
- 50 of them have age 20 days

then the average coin age is:
$$
\frac{10 × 50 + 20 × 50}{100} = 15\;\text{(coin-days)}
$$

### Example (Mean Dollar Invested Age)

Given there 100 tokens in existence:

- 50 of them have age 10 days and the token's price was \$1 at that time
- 50 of them have age 20 days and the token's price was \$2 at that time

then the mean dollar invested age is: 
$$
\frac{10 × 50 + 20 × 50}{50 × \$1 + 50 × \$2} = \frac{1500}{150} = 10\;\text{(coin-dollar days)}
$$

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

```graphql-explorer
{
  getMetric(metric: "mean_age") {
    timeseriesDataJson(
      slug: "santiment"
      from: "2020-01-13T00:00:00Z"
      to: "2020-01-18T00:00:00Z"
      interval: "1d"
    )
  }
}
```

---

Available under the `mean_dollar_invested_age` and 
`mean_dollar_invested_age_<timebound>` names.

```graphql-explorer
{
  getMetric(metric: "mean_dollar_invested_age") {
    timeseriesDataJson(
      slug: "santiment"
      from: "2020-01-13T00:00:00Z"
      to: "2020-01-18T00:00:00Z"
      interval: "1d"
    )
  }
}
```

## Full list of metrics

<Details>
<Summary>Mean coin age metrics</Summary>
- mean_age
- mean_age_90d
- mean_age_180d
- mean_age_365d
- mean_age_2y
- mean_age_3y
- mean_age_5y
</Details>

<Details>
<Summary>Mean dollar invested age metrics</Summary>
- mean_dollar_invested_age
- mean_dollar_invested_age_90d
- mean_dollar_invested_age_180d
- mean_dollar_invested_age_365d
- mean_dollar_invested_age_2y
- mean_dollar_invested_age_3y
- mean_dollar_invested_age_5y
- mean_dollar_invested_age_change_1d
- mean_dollar_invested_age_change_7d
- mean_dollar_invested_age_change_30d
</Details>
