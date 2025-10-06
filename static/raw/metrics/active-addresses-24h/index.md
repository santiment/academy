---
title: Active Addresses 24h
author: Ivan
date: 2022-04-12
description: Number of unique addresses participating in transactions for the last 24 hour window

---

## Definition

The number of distinct addresses that participated in a transfer for the given
asset in the past 24 hours window. Each address is counted only once for the
window. Both the senders and the receivers are counted.

This metric is similar to the Daily Active Addresses. The difference is that the
daily active addresses is computed on whole days only - it counts the active
addresses for every day (between 00:00:00 and 23:59:59). The active addresses
24h is computed every 5 minutes and counts the active addresses for
the past 24 hours. Example: The value of the metric at 17:30pm on March 22
contains the active addresses in the interval [17:30pm March 21, 17:30pm March
22].


## Access

[Free Access](/metrics/details/access#free-access)

---

## Measuring Unit

Non-negative number of addresses

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

[On-Chain Latency](/metrics/details/latency#on-chain-latency)

---

## Available Assets

Available for [these
assets](<https://api.santiment.net/graphiql?variables=&query=%7B%0A%20%20getMetric(metric%3A%20%22active_addresses_24h%22)%20%7B%0A%20%20%20%20metadata%20%7B%0A%20%20%20%20%20%20availableSlugs%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A>)

---

## API

Available under the `active_addresses_24h` name.

```graphql-explorer
{
  getMetric(metric: "active_addresses_24h") {
    timeseriesDataJson(
      slug: "santiment"
      from: "2020-01-01T00:00:00Z"
      to: "2020-01-07T00:00:00Z"
      interval: "1d"
    )
  }
}
```

## Full list of metrics

The full list of Active Addresses metrics is:

<Details>

<Summary>Open Metrics List</Summary>
- active_addresses_1h
- active_addresses_24h
- active_addresses_24h_change_1d
- active_addresses_24h_change_30d
- active_addresses_24h_change_7d
- active_addresses_7d
- active_addresses_30d
- active_addresses_60d
- active_addresses_90d

</Details>
