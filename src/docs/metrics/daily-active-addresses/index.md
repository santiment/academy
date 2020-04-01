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

![Daily Active Addresses for Bitcoin](bitcoin-daa.png)

## Definition

The number of distinct addresses that participated in a transfer for the given asset in any given day. Each address is counted only once for the day. Both the senders and the receivers of the asset are counted.

---

## Measuring Unit

Non-negative number of addresses

---

## Frequency - Daily

One value is computed for each day and each asset. The day is taken
according to the UTC timezone. So for example the value of the metric
for BTC and June 10, 2019 will contain the number of distinct
addresses for transfers that happened between 2019-06-10 00:00:00 UTC
and 2019-06-10 23:59:59 UTC.

---

## Computation time

The computation starts around 00:30 UTC each day. The final value of
this metric is generally available around 00:40 UTC.

We also compute intermediate values. That means the number of
addresses from the start of the day in UTC until the time the
computation is ran. The intermediate computations start at 06:30 UTC,
12:30 UTC, 18:30 UTC. The intermediate values are generally available
around 10 minutes after the computation starts.

_Note:_ Since our Bitcoin latency is generally larger than 30 minutes
and can go up to 2 hours, the value computed at 00:30 UTC might not be
final. In that case the value computed at 6:30 UTC will be final.

## Latency

For most assets latency is around 40 minutes. For Bitcoin the latency
for the final value is usually 6 hours and 40 minutes. At 00:40 UTC
you will get an approximate value which will exclude the addresses in
the last up to 3 blocks.

---

## Available assets

This metric is computed for Bitcoin, Ethereum, EOS, Ripple and all
ERC20 tokens.

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

[Run in explorer](<https://api.santiment.net/graphiql?query=%7B%0A%20%20getMetric(metric%3A%20%22daily_active_addresses%22)%20%7B%0A%20%20%20%20timeseriesData(%0A%20%20%20%20%20%20slug%3A%20%22santiment%22%0A%20%20%20%20%20%20from%3A%20%222020-01-01T00%3A00%3A00Z%22%0A%20%20%20%20%20%20to%3A%20%222020-01-07T00%3A00%3A00Z%22%0A%20%20%20%20%20%20interval%3A%20%221d%22%0A%20%20%20%20)%20%7B%0A%20%20%20%20%20%20datetime%0A%20%20%20%20%20%20value%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D>)
