---
title: NFT Trade Volume USD
author: Katsiaryna
date: 2024-04-09
description: Total NFT trades volume made on a particular marketplace in USD per day, NFT volume in USD made by NFT whales and NFT volumen in USD made by retail users on a particular marketplpace
---
## Definition

NFT volume is represented through several metrics:

- **NFT trade volume USD** denotes the total value of transactions in US dollars involving non-fungible tokens (NFTs) within a specific marketplace (owner) during the measurement period. This metric is calculated based on the value of the base assets transferred for acquiring or trading NFTs.

- **NFT whale trade volume USD** quantifies the total value of trades executed by significant investors, commonly referred to as "whales," within the NFT market, measured in US dollars. This metric highlights the impact of large-scale investors on the overall trading volume and market dynamics of NFTs.

- **NFT retail trade volume USD** represents the total value of transactions conducted by individual retail investors, as opposed to institutional or large-scale investors, within the NFT market, measured in US dollars. It offers insight into the participation and spending behavior of individual, non-professional traders in the NFT ecosystem.

## Access

[Restricted Access](/metrics/details/access#restricted-access).

---

## Measuring Unit

Amount of USD

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

- `nft_trade_volume_usd` : [available assets](https://api.santiment.net/graphiql?query=%7B%0A%20%20getMetric(metric%3A%20%22nft_trade_volume_usd%22)%20%7B%0A%20%20%20%20metadata%20%7B%0A%20%20%20%20%20%20availableSlugs%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A)

- `nft_retail_trade_volume_usd`: [available assets](https://api.santiment.net/graphiql?query=%7B%0A%20%20getMetric(metric%3A%20%22nft_retail_trade_volume_usd%22)%20%7B%0A%20%20%20%20metadata%20%7B%0A%20%20%20%20%20%20availableSlugs%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A)

- `nft_whale_trade_volume_usd`: [available assets](https://api.santiment.net/graphiql?query=%7B%0A%20%20getMetric(metric%3A%20%22nft_whale_trade_volume_usd%22)%20%7B%0A%20%20%20%20metadata%20%7B%0A%20%20%20%20%20%20availableSlugs%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A)

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

- nft_trade_volume_usd
- nft_retail_trade_volume_usd
- nft_whale_trade_volume_usd

Example query: NFT trades volume on Opensea

```graphql-explorer
{
  getMetric(metric: "nft_trade_volume_usd") {
    timeseriesDataJson(
      selector: {slug: "weth", owner: "opensea"}
      from: "2024-03-01T00:00:00Z"
      to: "2024-03-07T00:00:00Z"
      interval: "1d"
    )
  }
}
```
