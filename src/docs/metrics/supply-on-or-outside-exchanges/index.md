---
title: Supply On/Outside Exchanges
author: Ivan
date: 2020-04-07
description: Amount and percent of the total supply of coins/tokens held by exchange and non-exchange wallets
---

## Definition

Supply on or outside exchanges is a measure of the amount of a certain token or cryptocurrency being held on centralized exchanges (CEX) or decentralized exchanges (DEX), and outside exchanges. This metric tracks each part of the token's total supply that is either being circulated or hoarded by the market participants. To do this, we need to monitor and record wallet addresses for each CEX and DEX that holds the token, as well as the rest of the addresses not associated with any exchange.

This metric showcases the distribution of a specific token or cryptocurrency, indicating its demand as well as the overall market sentiment. It is useful for identifying significant events, like whale accumulation or an increase in the ratio of tokens held on exchanges – which could signal potential sell-offs.

The following metrics are provided:

- `Percent of total supply on exchange` - What percent of the coin/token total supply is stored in known centralized exchange (CEX) and decentralized exchange (DEX) wallets
- `Supply on exchanges` - What amount of coins/tokens are stored in known CEX and DEX wallets
- `Supply outside exchange` - What amount of coins/tokens are stored outside known CEX and DEX wallets

> **Note:** The metrics are computed on the set of publicly known exchange wallets
> and the exchange wallets that Santiment has found by doing analysis.

---

## Access

[Restricted Access](/metrics/details/access#restricted-access).

---

## Measuring Unit

- Percent of total supply on exchanges is measured in `percentage between 0 and 100`
- Supply On/Outside Exchanges is measured in `amount of coins/tokens`

---

## Data Type

[Timeseries Data](/metrics/details/data-type#timeseries-data)

---

## Frequency

[Daily Intervals](/metrics/details/frequency#daily-frequency)

---

## Latency

[On-Chain Latency](/metrics/details/latency#on-chain-latency)

---

## Available Assets

- Percent of total supply on exchange is available for [these
  assets](<https://api.santiment.net/graphiql?variables=&query=%7B%0A%20%20getMetric(metric%3A%20%22percent_of_total_supply_on_exchanges%22)%20%7B%0A%20%20%20%20metadata%20%7B%0A%20%20%20%20%20%20availableSlugs%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A>)
- Supply on exchanges is available for [these
  assets](<https://api.santiment.net/graphiql?variables=&query=%7B%0A%20%20getMetric(metric%3A%20%22supply_on_exchanges%22)%20%7B%0A%20%20%20%20metadata%20%7B%0A%20%20%20%20%20%20availableSlugs%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A>)

- Supply outside exchanges is available for [these
  assets](<https://api.santiment.net/graphiql?variables=&query=%7B%0A%20%20getMetric(metric%3A%20%22supply_outside_exchanges%22)%20%7B%0A%20%20%20%20metadata%20%7B%0A%20%20%20%20%20%20availableSlugs%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A>)

---

## SanAPI

Available under the names:

- `percent_of_total_supply_on_exchanges`
- `supply_on_exchanges`
- `supply_outside_exchanges`

```graphql
{
  getMetric(metric: "percent_of_total_supply_on_exchanges") {
    timeseriesData(
      slug: "santiment"
      from: "2019-01-01T00:00:00Z"
      to: "2019-09-01T00:00:00Z"
      interval: "7d"
    ) {
      datetime
      value
    }
  }
}
```

[Run in
explorer](<https://api.santiment.net/graphiql?query=%7B%0A%09getMetric(metric%3A%22percent_of_total_supply_on_exchanges%22)%20%7B%0A%20%20%20%20timeseriesData(slug%3A%22santiment%22%2C%20from%3A%222019-01-01T00%3A00%3A00Z%22%2C%20to%3A%222019-09-01T00%3A00%3A00Z%22%2C%20interval%3A%227d%22)%20%7B%0A%20%20%20%20%20%20datetime%0A%20%20%20%20%20%20value%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A>)

---

```graphql
{
  getMetric(metric: "supply_on_exchanges") {
    timeseriesData(
      slug: "santiment"
      from: "2019-01-01T00:00:00Z"
      to: "2019-09-01T00:00:00Z"
      interval: "7d"
    ) {
      datetime
      value
    }
  }
}
```

[Run in
explorer](<https://api.santiment.net/graphiql?query=%7B%0A%09getMetric(metric%3A%22supply_on_exchanges%22)%20%7B%0A%20%20%20%20timeseriesData(slug%3A%22santiment%22%2C%20from%3A%222019-01-01T00%3A00%3A00Z%22%2C%20to%3A%222019-09-01T00%3A00%3A00Z%22%2C%20interval%3A%227d%22)%20%7B%0A%20%20%20%20%20%20datetime%0A%20%20%20%20%20%20value%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A>)

---

```graphql
{
  getMetric(metric: "supply_outside_exchanges") {
    timeseriesData(
      slug: "santiment"
      from: "2019-01-01T00:00:00Z"
      to: "2019-09-01T00:00:00Z"
      interval: "7d"
    ) {
      datetime
      value
    }
  }
}
```

[Run in
explorer](<https://api.santiment.net/graphiql?query=%7B%0A%09getMetric(metric%3A%22supply_outside_exchanges%22)%20%7B%0A%20%20%20%20timeseriesData(slug%3A%22santiment%22%2C%20from%3A%222019-01-01T00%3A00%3A00Z%22%2C%20to%3A%222019-09-01T00%3A00%3A00Z%22%2C%20interval%3A%227d%22)%20%7B%0A%20%20%20%20%20%20datetime%0A%20%20%20%20%20%20value%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A>)
