---
title: Supply On/Outside Exchanges
author: Ivan
date: 2020-04-07
---

## Definition

The following metrics are provided:

- `Percent of total supply on exchange` - What percent of the coin/token total
  supply is stored in known exchange wallets.
- `Supply on exchanges` - What amount of coins/tokens are stored in known exchange
  wallets.
- `Supply outside exchange` - What amount of coins/tokens are stored outside known
  exchange wallets.

> Note: The metrics are computed on the set of publicly known exchange wallets
> and the exchange wallets that Santiment has found by doing analysis.

---

## Measuring Unit

- Percent of total supply on exchanges is measured in `percentage between 0 and 100`
- Supply on/outside exchanges is measured in `amount of coins/tokens`

---

## Frequency

Supply on/outside exchange metrics are available at [daily
intervals](/metrics/details/frequency#daily-frequency)

---

## Latency

Supply on/outside exchange metrics have [on-chain latency](/metrics/details/latency#on-chain-latency)

---

## Available assets

- Percent of total supply on exchange is available for [these
  assets](<https://api.santiment.net/graphiql?variables=&query=%7B%0A%20%20getMetric(metric%3A%20%22percent_of_total_supply_on_exchanges%22)%20%7B%0A%20%20%20%20metadata%20%7B%0A%20%20%20%20%20%20availableSlugs%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A>)
- Supply on exchanges is available for [these
  assets](<https://api.santiment.net/graphiql?variables=&query=%7B%0A%20%20getMetric(metric%3A%20%22supply_on_exchanges%22)%20%7B%0A%20%20%20%20metadata%20%7B%0A%20%20%20%20%20%20availableSlugs%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A>)

- Supply outside exchanges is available for [these
  assets](<https://api.santiment.net/graphiql?variables=&query=%7B%0A%20%20getMetric(metric%3A%20%22supply_outside_exchanges%22)%20%7B%0A%20%20%20%20metadata%20%7B%0A%20%20%20%20%20%20availableSlugs%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A>)

---

## SanAPI

The metrics are available under the names:

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
