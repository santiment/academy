---
title: NVT
author: Santiment Team
date: 2020-04-07
description: The ratio between marketcap and transaction volume or circulation
---

## Definition

The typical formula for NVT is the following:

`NVT = Daily Market Cap / Daily Transaction Volume`

Santiment provides an alternative formula for NVT:

`NVT = Daily Market Cap / Daily Circulation`

Since daily circulation is zero at the beginning of each day, NVT based on it
would have a spike at the day's beginning. We solve this with a rolling NVT metric
that uses rolling circulation for the last 24 hours and is computed using the
following formula:

`NVT = Intraday Market Cap / Rolling Circulation`

For some assets there is a more precise metric called Circulation NVT,
which takes 24-hour rolling daily circulation instead of daily.
The `Network Value-to-Transaction` (NVT) ratio is an asset valuation metric
similar to the [P/E
ratio](https://www.investopedia.com/terms/p/price-earningsratio.asp)
traditionally used in equity markets to gauge a stock's growth potential.

The P/E or `Price-to-Earnings` ratio is calculated by dividing the
company's current price per share with its earnings per share. A high
P/E could mean a stock's price is high relative to its earnings and
therefore possibly overvalued. Conversely, a low P/E might indicate that
the current stock price is low relative to earnings and possibly
undervalued.

As crypto assets are not companies, their earnings are not known, so
Transaction Volume is often used as a proxy for the blockchain's
underlying value.

Since Transaction Volume gets rather noisy and often includes duplicate
transactions (sending 10 ETH to a deposit address which then sends them to the
exchange hot wallet counts as 20 ETH Transaction Volume even though it's the
same 10 ETH being transacted), it's not an ideal measure of a network's economic
activity. That's why at Santiment we calculate NVT using Daily Trx Volume, but
also by using [Circulation](/metrics/circulation) instead, which filters out
excess transactions and provides a cleaner overview of a blockchain's daily
transaction throughput. You'll find both approaches plotted on the graph and can
choose which one you prefer.

As with P/E, a high NVT indicates that an asset's network valuation is
higher than the value being transmitted on the network. In other words,
the network is expensive relative to how much value it moves, signaling
a potentially overvalued asset.

Conversely, a low NVT denotes an asset that is cheaper per unit of
on-chain transaction volume, signaling a potentially undervalued asset.

NVT is often used as a long-term indicator of an asset's price trends,
rather than a day-to-day valuation metric.

---

## Access

[Restricted Access](/metrics/details/access#restricted-access).

---

## Measuring Unit

Ratio

---

## Data Type

[Timeseries Data](/metrics/details/data-type#timeseries-data)

---

## Frequency

[Five Minute Intervals](/metrics/details/frequency#five-minute-frequency) and [Daily Intervals](/metrics/details/frequency#daily-frequency)

---

## Latency

[On-Chain Latency](/metrics/details/latency#on-chain-latency)

---

## Available Assets

- NVT using 1-day circulation is available for [these
  assets](<https://api.santiment.net/graphiql?variables=&query=%7B%0A%20%20getMetric(metric%3A%20%22nvt%22)%20%7B%0A%20%20%20%20metadata%20%7B%0A%20%20%20%20%20%20availableSlugs%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A>)

- NVT Transaction Volume is available for [these
  assets](<https://api.santiment.net/graphiql?variables=&query=%7B%0A%20%20getMetric(metric%3A%20%22nvt_transaction_volume%22)%20%7B%0A%20%20%20%20metadata%20%7B%0A%20%20%20%20%20%20availableSlugs%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A>)

---

## SanAPI

- `nvt` - NVT using 1 day Circulation. Computed with daily frequency.
- `nvt_5min` - Same as `nvt`, but computed with 5-minute frequency.
- `nvt_transaction_volume` - NVT using Transaction Volume. Computed with daily frequency.

```graphql-explorer
{
  getMetric(metric: "nvt") {
    timeseriesDataJson(
      slug: "santiment"
      from: "utc_now-90d"
      to: "utc_now-60d"
      interval: "1d"
    )
  }
}
```

---

```graphql-explorer
{
  getMetric(metric: "nvt_transaction_volume") {
    timeseriesDataJson(
      slug: "santiment"
      from: "utc_now-90d"
      to: "utc_now-60d"
      interval: "1d"
    )
  }
}
```
