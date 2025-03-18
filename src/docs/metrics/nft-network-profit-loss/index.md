---
title: NFT Network Profit Loss
author: Filip
date: 2022-06-29
description: NFT network realized profit/loss for all NFTs and for each NFT collection separately
---

## Definition

NFT Network Profit/Loss computes the average profit or loss of all NFTs
that change addresses.
This metric represents the average profit or loss of each
NFT collection that is being transacted on a given day.

## Access

[Restricted Access](/metrics/details/access#restricted-access).

---

## Measuring Unit

Amount in USD or ETH

---

## Data Type

[Timeseries Data](/metrics/details/data-type#timeseries-data)

---

## Frequency

- NFT network: [Five-minute Intervals](/metrics/details/frequency#five-minute-frequency)
- NFT collection: [Daily Intervals](/metrics/details/frequency#daily-frequency)

---

## Latency

[On-Chain Latency](/metrics/details/latency#on-chain-latency)

---

## Available Assets

`ethereum`

---

## SanAPI

NFT Network Profit Loss - `nft_network_profit_loss<_usd>`:

```graphql
{
  getMetric(metric: "nft_network_profit_loss") {
    timeseriesData(
      slug: "ethereum"
      from: "2022-01-01T00:00:00Z"
      to: "2022-01-10T00:00:00Z"
      interval: "1d"
    ) {
      datetime
      value
    }
  }
}
```

**[Run in
Explorer](<https://api.santiment.net/graphiql?query=%7B%0A%09getMetric(metric%3A%22nft_network_profit_loss%22)%20%7B%0A%20%20%20%20timeseriesData(%0A%20%20%20%20%20%20slug%3A%22ethereum%22%0A%20%20%20%20%20%20from%3A%222022-01-01T00%3A00%3A00Z%22%0A%20%20%20%20%20%20to%3A%222022-01-10T00%3A00%3A00Z%22%0A%20%20%20%20%20%20interval%3A%221d%22%0A%20%20%20%20)%20%7B%0A%20%20%20%20%20%20datetime%0A%20%20%20%20%20%20value%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A>)**

NFT Collection Profit Loss - `nft_collection_profit_loss_usd`:

```graphql
{
  getMetric(metric: "nft_collection_profit_loss_usd") {
    timeseriesData(
      selector: { address: "0xed5af388653567af2f388e6224dc7c4b3241c544" }
      from: "2022-01-01T00:00:00Z"
      to: "2022-01-10T00:00:00Z"
      interval: "1d"
    ) {
      datetime
      value
    }
  }
}
```

**[Run in
Explorer](<https://api.santiment.net/graphiql?query=%7B%0A%20%20getMetric(metric%3A%20%22nft_collection_profit_loss_usd%22)%20%7B%0A%20%20%20%20timeseriesData(%0A%20%20%20%20%20%20selector%3A%20%7B%20address%3A%20%220xed5af388653567af2f388e6224dc7c4b3241c544%22%20%7D%0A%20%20%20%20%20%20from%3A%20%222022-01-01T00%3A00%3A00Z%22%0A%20%20%20%20%20%20to%3A%20%222022-01-10T00%3A00%3A00Z%22%0A%20%20%20%20%20%20interval%3A%20%221d%22%0A%20%20%20%20)%20%7B%0A%20%20%20%20%20%20datetime%0A%20%20%20%20%20%20value%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D>)**
