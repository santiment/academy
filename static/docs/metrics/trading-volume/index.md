---
title: Trading Volume in USD
author: Ivan
date: 2020-04-07
description: Trading Volume in USD 
---

## Definition

The Trading Volume is the volume in USD traded on exchanges.
The metric is taking into consideration all the trading pairs. The trading pairs that
are not pegged to USD are multiplied by the USD price of the asset.

Trading Volume in USD metrics:
- `volume_usd` - 24-hour sliding window trading volume across centralized and decentralized exchanges. 
All transactions are converted to USD. The data is sourced from a 3rd party provider.
- `volume_usd_5m` - The same as `volume_usd`, but the data points are aligned at 5 minute intervals and 
any gaps are filled with the last known value 

---

## Access

[Free Access](/metrics/details/access#free-access)

---

## Measuring Unit

Amount in dollars/usdt/bitcoins

---

## Data Type

[Timeseries Data](/metrics/details/data-type#timeseries-data)

---

## Change Metrics

[Change Metrics](/metrics/details/change_metrics)

---

## Frequency

[Five-Minute Intervals](/metrics/details/frequency#five-minute-frequency)

---

## Latency

[Price Latency](/metrics/details/latency#price-latency)

---

## Available Assets

Available assets for [volume_usd](https://api.santiment.net/graphiql?query=%7B%0A++getMetric%28metric%3A+%22volume_usd%22%29%7B%0A++++metadata%7B%0A++++++availableSlugs%0A++++%7D%0A++%7D%0A%7D)

---

## SanAPI

### Volume USD

Available under `volume_usd` and `volume_usd_5m` names

```graphql-explorer
{
  getMetric(metric: "volume_usd") {
    timeseriesDataJson(
      slug: "ethereum"
      from: "2020-04-01T00:00:00Z"
      to: "2020-04-07T00:00:00Z"
      interval: "1d"
    )
  }
}
```

## Full list of metrics

The full list of GitHub Activity metrics is:

<Details>

<Summary>Open Metrics List</Summary>

- volume_usd
- volume_usd_5m
- volume_usd_change_1d
- volume_usd_change_30d
- volume_usd_change_7d

</Details>