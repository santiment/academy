---
title: Latency
author: Vlad
date: 2025-11-20
---

This article describes how quickly Santiment metrics become available after the underlying events occur. It covers five main data categories: **on-chain metrics**, **social metrics**, **funding rates**, **price data**, **development activity**, and **daily metrics**. Use this as a reference when building time-sensitive integrations or setting alert thresholds.

---

## On-Chain Data

On-chain metric computation starts only after a block receives enough confirmations to be considered final. The confirmation time varies by blockchain:

- **Bitcoin** — ~30 minutes
- **Ethereum** — ~5 minutes
- **Bitcoin Cash, Litecoin, Binance Chain, XRPL** — ~5 minutes each

Once a block is confirmed and its data is fetched, an additional processing step is required:

- **5-minute interval metrics** — processing takes up to 20 minutes
- **Daily metrics** — processing can take up to 2 hours

### Observed Availability

End-to-end latency measured for specific on-chain metric groups:

| Metric Group | Mean | Median | P80 | **P90** | **P95** |
| --- | --- | --- | --- | --- | --- |
| **Core ETH** | ~12 min | 10 min | 15 min | 20 min | 21 min |
| **ERC-20 Intraday** | ~30 min | 30 min | 35 min  | 40 min | 45 min |

---

## Social Data

Raw social messages from Telegram, Reddit, Bitcointalk, Twitter, 4chan, and YouTube are each processed independently. Individual message ingestion typically takes **under 1 minute** per source.

Aggregated social metrics require an additional computation step on top of the raw data. The time this takes depends on the specific metric:

- **Emerging Trends** — computed once per hour; available a few minutes after each round hour
- **Asset-level data** (e.g., social volume per asset) — takes 5–10 minutes to compute
- **Text term queries** — computed on-the-fly directly from the raw message store; available immediately after ingestion

### Observed Availability

End-to-end latency observed for the key social metrics:

| Metric | Mean | Median | P80 | **P90** | **P95** |
| --- | --- | --- | --- | --- | --- |
| **Social Volume** | ~13 min | 10 min | 15 min | 20 min | 20 min |
| **Social Dominance** | ~22 min | 20 min | 25 min | 30 min | 35 min |

Social Dominance shows higher P80 latency than Social Volume because it requires aggregated data across all tracked assets before the relative share can be calculated, making it more sensitive to processing delays in any single asset's pipeline.

---

## Funding Rates

Funding rate metrics are updated on a fixed schedule:

- **Update frequency:** Every **15 minutes**

This makes funding rate data suitable for near-real-time monitoring of derivatives market conditions, with a maximum expected lag of 15 minutes from the moment a rate is set on the exchange.

---

## Price Data

Price metrics are refreshed frequently to support timely market analysis

- **Update frequency:** Every **5 minutes**

Price data is one of the lowest-latency data categories available in the Santiment API and can be relied upon for near-real-time price tracking.

---

## Development Activity

Development activity metrics are aggregated from GitHub and similar repositories:

- **Update frequency:** Every **1 hour**
- **Maximum delay:** Up to 2 **hours** in edge cases

Due to the nature of repository event aggregation, development activity metrics are not suitable for real-time monitoring and are better used for trend analysis over longer time horizons.

---

## Daily Metrics

Daily metrics produce one value per day. Their finalization follows a strict rule:

- The value for a given day is **finalized at least 1 hour after midnight UTC**
- All daily metrics use the **UTC timezone** as the reference boundary

This means that daily metric values for a given day should not be considered final until at least 01:00 UTC the following day.
