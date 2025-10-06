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

```graphql-explorer
{
  getMetric(metric: "nft_network_profit_loss") {
    timeseriesDataJson(
      slug: "ethereum"
      from: "2022-01-01T00:00:00Z"
      to: "2022-01-10T00:00:00Z"
      interval: "1d"
    )
  }
}
```

NFT Collection Profit Loss - `nft_collection_profit_loss_usd`:

```graphql-explorer
{
  getMetric(metric: "nft_collection_profit_loss_usd") {
    timeseriesDataJson(
      selector: { address: "0xed5af388653567af2f388e6224dc7c4b3241c544" }
      from: "2022-01-01T00:00:00Z"
      to: "2022-01-10T00:00:00Z"
      interval: "1d"
    )
  }
}
```
