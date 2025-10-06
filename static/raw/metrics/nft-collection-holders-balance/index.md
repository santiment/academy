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

```graphql-explorer
{
  getMetric(metric: "nft_collection_holders_balance") {
    timeseriesDataJson(
      selector: { address: "0xed5af388653567af2f388e6224dc7c4b3241c544" }
      from: "2022-05-01T00:00:00Z"
      to: "2022-05-07T00:00:00Z"
      interval: "1d"
    )
  }
}
```
