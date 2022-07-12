---
title: NFT Market Volume/Count 
author: Filip
date: 2022-07-12
description: Daily market volume in ETH, and daily market count for NFT collections
---
## Definition

NFT Market Volume/Count is metric which calculates market count and the market volume 
in ETH for NFT collections. Assumption is that when the majority of the volume is buying NFTs, the market
is in a euphoric state. On the other hand, when NFT owners accept many orders,
the market is depressed.

## Access

[Restricted Access](/metrics/details/access#restricted-access).

---

## Measuring Unit

* Volume metric - amount in ETH
* Count metric - amount of trades

---

## Data Type

[Timeseries Data](/metrics/details/data-type#timeseries-data)

---

## Frequency

* NFT collection: [Daily Intervals](/metrics/details/frequency#daily-frequency)


---

## Latency

[On-Chain Latency](/metrics/details/latency#on-chain-latency)

---

## Available Assets

`ethereum` and `weth`

---

## SanAPI

NFT collection buy/sell market volume (count) - `nft_market_volume` (`nft_market_count`):

```graphql
{
  getMetric(metric: "nft_market_volume") {
    timeseriesData(
      selector: { address: "0xed5af388653567af2f388e6224dc7c4b3241c544" }
      from: "2022-05-01T00:00:00Z"
      to: "2022-05-07T00:00:00Z"
      interval: "1d"
    ) {
      datetime
      value
    }
  }
}
```

**[Run in
Explorer](<https://api.santiment.net/graphiql?query=%7B%0A%20%20getMetric(metric%3A%20%22nft_market_volume%22)%20%7B%0A%20%20%20%20timeseriesData(%0A%20%20%20%20%20%20selector%3A%20%7B%20address%3A%20%220xed5af388653567af2f388e6224dc7c4b3241c544%22%20%7D%0A%20%20%20%20%20%20from%3A%20%222022-05-01T00%3A00%3A00Z%22%0A%20%20%20%20%20%20to%3A%20%222022-05-07T00%3A00%3A00Z%22%0A%20%20%20%20%20%20interval%3A%20%221d%22%0A%20%20%20%20)%20%7B%0A%20%20%20%20%20%20datetime%0A%20%20%20%20%20%20value%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D>)**
