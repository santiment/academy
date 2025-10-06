---
title: NFT Trades Count
author: Katsiaryna
date: 2024-04-09
description: Total amount of NFT trades per day made on a particular marketplace, amount of NFT trades made by NFT whales and amount of NFT trades made by retail users made on a particular marketplace
---
## Definition

NFT trades count is represented through the following metrics:

- **NFT trades count** refers to the total number of trades involving non-fungible tokens (NFTs) within a specific marketplace (owner) during a given period.

- **NFT whale trades count** represents the count of trades conducted by significant investors, often referred to as "whales," within the NFT market. These traders typically possess substantial holdings and can significantly influence market trends due to the scale of their transactions.

- **NFT retail trades count** represents the total number of trades executed by individual retail investors, as opposed to institutional or large-scale investors, within the NFT market. It provides insights into the level of participation and trading activity among non-professional traders in the NFT ecosystem.

## Access

[Restricted Access](/metrics/details/access#restricted-access).

---

## Measuring Unit

Amount of trades

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

- `nft_trades_count` : [available assets](https://api.santiment.net/graphiql?query=%7B%0A%20%20getMetric(metric%3A%20%22nft_trades_count%22)%20%7B%0A%20%20%20%20metadata%20%7B%0A%20%20%20%20%20%20availableSlugs%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A)

- `nft_whale_trades_count` : [available assets](https://api.santiment.net/graphiql?query=%7B%0A%20%20getMetric(metric%3A%20%22nft_whale_trades_count%22)%20%7B%0A%20%20%20%20metadata%20%7B%0A%20%20%20%20%20%20availableSlugs%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A)

- `nft_retail_trades_count` : [available assets](https://api.santiment.net/graphiql?query=%7B%0A%20%20getMetric(metric%3A%20%22nft_retail_trades_count%22)%20%7B%0A%20%20%20%20metadata%20%7B%0A%20%20%20%20%20%20availableSlugs%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A)

---

## Available Owners

`blur`
`cryptopunks`
`foundation`
`looksrare`
`opensea`
`rarible`
`superrare`
`x2y2`

<Notebox type="note">
The Polygon chain has been deprecated as of October 28th 2024 and is no longer supported.
</Notebox>


## SanAPI

The following metrics are available:

- nft_trades_count
- nft_whale_trades_count
- nft_retail_trades_count

Example query: Amount of NFT trades on Opensea

```graphql-explorer
{
  getMetric(metric: "nft_trades_count") {
    timeseriesDataJson(
      selector: {slug: "ethereum", owner: "opensea"}
      from: "2024-03-01T00:00:00Z"
      to: "2024-03-07T00:00:00Z"
      interval: "1d"
    )
  }
}
```
