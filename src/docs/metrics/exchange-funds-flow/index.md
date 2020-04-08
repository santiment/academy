---
title: Exchange Funds Flow
author: Santiment Team
date: 2020-04-06
---

## Definition

There are three separate metrics regarding exchange funds flow:

- exchange inflow - How many coins/tokens are moved from non-exchange to
  exchange wallets.
- exchange outflow - How many coins/tokens are moved from exchange to
  non-exchange wallets.
- exchange balance - The difference inflow-outflow (inflow minus outflow). The
  usefulness of this metric comes from the fact that transactions from
  missing/unknown exchange wallets to missing/unknown exchange wallets cancel
  each other - for example the way Coinbase works makes it impossible to detect
  exchange wallets.

![bitcoin funds in/outflow](bitcoin-funds-inflow-outflow.png)
![bitcoin funds balance](bitcoin-funds-flow-balance.png)

---

## Use Case

It's not uncommon for large inflows of tokens to the exchange to precede
rapid price growth.

Here's that exact scenario in case of
[aeternity](https://aeternity.com/), a blockchain platform that enables
scalable smart contracts:

![aeternity funds flow balance](aeternity-funds-flow-balance.png)

> Note: Aeternity moved from ERC20 to their own blockchain and Santiment does not have data for this new blockchain.

When a large amount of tokens flow out of the exchange, on the other
hand, the price is likely to fall soon thereafter.

---

## Measuring Unit

Amount of coins/tokens

## Frequency

Exchange Funds Flow metrics are available at [5-minute
intervals](/metrics/details/frequency#five-minute-frequency)

---

## Latency

Exchange Funds Flow metrics have [on-chain latency](/metrics/details/latency#on-chain-latency)

---

## Available assets

This metric is computed for [these
assets](<https://api.santiment.net/graphiql?variables=&query=%7B%0A%20%20getMetric(metric%3A%20%22exchange_balanced%22)%20%7B%0A%20%20%20%20metadata%20%7B%0A%20%20%20%20%20%20availableSlugs%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A>)

---

## SanAPI

```graphql
{
  getMetric(metric: "exchange_balance") {
    timeseriesData(
      slug: "santiment"
      from: "2020-01-01T12:00:00Z"
      to: "2020-01-03T12:00:00Z"
      interval: "1d"
    ) {
      datetime
      value
    }
  }
}
```

**[Run in
explorer](<https://api.santiment.net/graphiql?variables=&query=%7B%0A%20%20getMetric(metric%3A%20%22exchange_balance%22)%20%7B%0A%20%20%20%20timeseriesData(%0A%20%20%20%20%20%20slug%3A%20%22santiment%22%0A%20%20%20%20%20%20from%3A%20%222020-01-01T12%3A00%3A00Z%22%0A%20%20%20%20%20%20to%3A%20%222020-01-03T12%3A00%3A00Z%22%0A%20%20%20%20%20%20interval%3A%20%221d%22)%20%7B%0A%20%20%20%20%20%20%20%20datetime%0A%20%20%20%20%20%20%20%20value%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A>)**
