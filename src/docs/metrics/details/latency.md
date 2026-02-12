---
title: Latency
author: Vlad
date: 2025-11-20
---

- [On-Chain Latency](#on-chain-latency)
- [Funding Rates Latency](#funding-rates-latency)
- [Price Latency](#price-latency)
- [Development Activity Latency](#development-activity-latency)

## On-Chain Latency

In order to compute on-chain data, a number block confirmations are required
before fetching the data for a given block. Measured in time:

- Bitcoin - Around 30 minutes
- Ethereum - Around 5 minutes
- Bitcoin Cash - Around 5 minutes
- Litecoin - Around 5 minutes
- Binance Chain - Around 5 minutes
- XRPL Chain - Around 5 minutes

After the block is considered confirmed and its data is fetched, the data
processing can take anywhere from a few minutes to few hours. The upper limits
are:

- For 5-minute interval metrics processing the data can take up to 20 minutes
  most
- For daily metrics processing the data can take up to 2 hours

## Social Data Latency

Each one of the social data source:

- Telegram
- Reddit
- Bitcointalk
- Twitter
- 4chan
- Youtube Videos

is being processed separately and usually doesn't take longer than 1 minute.

The emerging trends are computed once per hour so they become available a few
minutes after every round hour.

The data for assets is usually computed and it takes 5-10 minutes to compute.

Data for text terms is computed on-the-fly on the raw data and can be accessed as soon as the
text messages are stored in our database.

## Funding Rates Latency

The funding rates are updated every 15 minutes

## Price Latency

The prices are updated every 5 minutes

## Development Activity Latency

The development activity metrics are updated every 1 hour with max delays of 6
hours

## Daily Metrics Latency

The daily metrics have one value per day. The value is finalized between 1 and 2 hours
after the day is over, in the UTC timezone. This delay happens due to some required validation and processing of the previous day's data for the purpose of data integrity.
