---
title: NFT Collection Price
author: Filip
date: 2022-07-12
description: Daily minimum, maximum, average price in eth and usd, and daily trade count for NFT collections and tokens
---
## Definition

NFT Collection price is a set of metrics that represent prices and number of trades
for NFT collections and tokens. Based on the collection address and interval, users can
fetch data for minimum, maximum and average prices in ETH and USD for NFT collection
with that address. Also, they can fetch number of trades for some NFT collection.
Based on the collection address and token ID, users can fetch all the prices for that
NFT token.

## Access

[Restricted Access](/metrics/details/access#restricted-access).

---

## Measuring Unit

* Price metrics - amount USD and ETH
* Trade count metrics - amount of trades

---

## Data Type

[Timeseries Data](/metrics/details/data-type#timeseries-data)

---

## Frequency

* NFT collection: [Daily Intervals](/metrics/details/frequency#daily-frequency)
* NFT tokens: [Five-minute Intervals](/metrics/details/frequency#five-minute-frequency)


---

## Latency

[On-Chain Latency](/metrics/details/latency#on-chain-latency)

---

## Available Assets

`ethereum` and `weth`

---

## SanAPI

The following metrics are available:
- nft_collection_min_price
- nft_collection_max_price
- nft_collection_avg_price
- nft_collection_min_price_usd
- nft_collection_max_price_usd
- nft_collection_avg_price_usd
- nft_collection_trades_count

```graphql-explorer
{
  getMetric(metric: "nft_collection_min_price") {
    timeseriesDataJson(
      selector: { address: "0xed5af388653567af2f388e6224dc7c4b3241c544" }
      from: "2022-05-01T00:00:00Z"
      to: "2022-05-07T00:00:00Z"
      interval: "1d"
    )
  }
}
```

NFT collection trade count - `nft_collection_trades_count`:

```graphql-explorer
{
  getMetric(metric: "nft_collection_trades_count") {
    timeseriesDataJson(
      selector: { address: "0xed5af388653567af2f388e6224dc7c4b3241c544" }
      from: "2022-05-01T00:00:00Z"
      to: "2022-05-07T00:00:00Z"
      interval: "1d"
    )
  }
}
```
