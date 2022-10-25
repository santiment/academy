---
title: NFT Collection Holders Balance
author: Filip
date: 2022-06-17
description: Average balance of all holders of NFT collection
---
## Definition

This metric represents average balance of collection holders 
(e.g. average balance of `bored apes` holders is $10M). 

Balance of holders is calculated based on their ownership of NFTs
(sum of values (in eth and usd) of all NFTs they have).


## Access

[Restricted Access](/metrics/details/access#restricted-access).

---

## Measuring Unit

Amount in USD

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

`ethereum`

---

## SanAPI

`nft_collection_holders_balance`:

```graphql
{
  getMetric(metric: "nft_collection_holders_balance") {
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
Explorer](<https://api.santiment.net/graphiql?query=%7B%0A%20%20getMetric(metric%3A%20%22nft_collection_holders_balance%22)%20%7B%0A%20%20%20%20timeseriesData(%0A%20%20%20%20%20%20selector%3A%20%7B%20address%3A%20%220xed5af388653567af2f388e6224dc7c4b3241c544%22%20%7D%0A%20%20%20%20%20%20from%3A%20%222022-05-01T00%3A00%3A00Z%22%0A%20%20%20%20%20%20to%3A%20%222022-05-07T00%3A00%3A00Z%22%0A%20%20%20%20%20%20interval%3A%20%221d%22%0A%20%20%20%20)%20%7B%0A%20%20%20%20%20%20datetime%0A%20%20%20%20%20%20value%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D>)**
