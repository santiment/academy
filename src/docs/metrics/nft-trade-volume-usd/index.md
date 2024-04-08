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

- For `nft_trade_volume_usd`:
`ethereum`
`weth`
`echelon-prime`
`multi-collateral-dai`
`p-matic-network`
`p-multi-collateral-dai`
`p-tether`
`p-usd-coin`
`p-weth`
`the-sandbox`
`usd-coin`

- For `nft_retail_trade_volume_usd` and `nft_whale_trade_volume_usd`:
`ethereum`

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
`opensea_polygon`

## SanAPI

The following metrics are available:

- nft_trade_volume_usd
- nft_retail_trade_volume_usd
- nft_whale_trade_volume_usd

Example query: NFT trades volume on Opensea

```graphql
{
  getMetric(metric: "nft_trade_volume_usd") {
    timeseriesData(
      selector: {slug: "weth", owner: "opensea"}
      from: "2024-03-01T00:00:00Z"
      to: "2024-03-07T00:00:00Z"
      interval: "1d"
    ) {
      datetime
      value
    }
  }
}
```

**[Run in
Explorer](<https://api.santiment.net/graphiql?query=%7B%0A%20%20getMetric(metric%3A%20%22nft_trade_volume_usd%22)%20%7B%0A%20%20%20%20timeseriesData(%0A%20%20%20%20%20%20selector%3A%20%7Bslug%3A%20%22weth%22%2C%20owner%3A%20%22opensea%22%7D%0A%20%20%20%20%20%20from%3A%20%222024-03-01T00%3A00%3A00Z%22%0A%20%20%20%20%20%20to%3A%20%222024-03-07T00%3A00%3A00Z%22%0A%20%20%20%20%20%20interval%3A%20%221d%22%0A%20%20%20%20)%20%7B%0A%20%20%20%20%20%20datetime%0A%20%20%20%20%20%20value%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D>)**
