---
title: Daily Active Addresses Metric
author: Santiment Team
date: 2019-09-17
# References
#
# Source code for metric computation:
# REF clickhouse-tables/daily_metrics/jobs/daily_active_addresses_job
#
# Sansheets reference
# REF google-spreadsheets-addon/
#
# SanAPI reference
#
# REF sanbase2/lib/sanbase/clickhouse/metric
---

## Definition

The number of distinct addresses that participated in a transfer for the given
asset in any given day. Each address is counted only once for the day. Both the
senders and the receivers of the asset are counted.

![Daily Active Addresses for Bitcoin](bitcoin-daa.png)

---

## Measuring Unit

Non-negative number of addresses

---

## Frequency

Daily Active Addresses is available at [daily
intervals](/metrics/details/frequency#daily-frequency)

---

## Latency

Daily Active Addresses has [on-chain latency](/metrics/details/latency#on-chain-latency)

---

## Available assets

This metric is computed for [these
assets](<https://api.santiment.net/graphiql?variables=&query=%7B%0A%20%20getMetric(metric%3A%20%22daily_active_addresses%22)%20%7B%0A%20%20%20%20metadata%20%7B%0A%20%20%20%20%20%20availableSlugs%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A>)

---

## API

```graphql
{
  getMetric(metric: "daily_active_addresses") {
    timeseriesData(
      slug: "santiment"
      from: "2020-01-01T00:00:00Z"
      to: "2020-01-07T00:00:00Z"
      interval: "1d"
    ) {
      datetime
      value
    }
  }
}
```

[Run in
explorer](<https://api.santiment.net/graphiql?query=%7B%0A%20%20getMetric(metric%3A%20%22daily_active_addresses%22)%20%7B%0A%20%20%20%20timeseriesData(%0A%20%20%20%20%20%20slug%3A%20%22santiment%22%0A%20%20%20%20%20%20from%3A%20%222020-01-01T00%3A00%3A00Z%22%0A%20%20%20%20%20%20to%3A%20%222020-01-07T00%3A00%3A00Z%22%0A%20%20%20%20%20%20interval%3A%20%221d%22%0A%20%20%20%20)%20%7B%0A%20%20%20%20%20%20datetime%0A%20%20%20%20%20%20value%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D>)
