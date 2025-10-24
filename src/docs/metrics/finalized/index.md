---
title: Finalized Metrics
headline: "Finalized metrics via onlyFinalizedData"
description: "Request guaranteed, finalized values for select metrics via the onlyFinalizedData flag in our GraphQL API."
author: Santiment Team
date: 2025-10-06
---

Santiment provides a way to access finalized metric data points through our API.
Data points are flagged as final for a given interval, meaning no further backfills or adjustments will occur for that timestamp. This is especially useful when you need guaranteed consistency for analysis, dashboards, or reporting.

<Notebox type="openBook">
Finalized here means the value is considered final for the requested interval. It does not change afterwards due to late-arriving data or corrections.
</Notebox>

<Resource title="How to request finalized data">

Set `onlyFinalizedData: true` in your GraphQL query. For example, requesting daily finalized Transaction Volume for Bitcoin Cash:

```graphql-explorer
{
  getMetric(metric: "transaction_volume"){
    timeseriesDataJson(
      selector:{slug: "bitcoin-cash"}
      from: "utc_now-6h"
      to: "utc_now"
      interval: "5m"
      onlyFinalizedData: true
    )
  }
}
```


</Resource>

<Resource title="Supported scope (WIP)">

This feature is currently in testing and implemented for Bitcoin Cash and for a limited subset of metrics:

- `active_addresses_1h`
- `active_addresses_24h`
- `active_addresses_30d`
- `active_addresses_7d`
- `active_addresses_delta_1h`
- `active_addresses_delta_24h`
- `active_addresses_delta_30d`
- `active_addresses_delta_7d`
- `nvt_transaction_volume`
- `stack_age_consumed_5min`
- `transaction_volume`
- `transaction_volume_5min`

The assets and metrics coverage will expand in the future.

</Resource>

<Notebox type="exclamation">
Requesting finalized data introduces additional latency.
</Notebox>

<Resource title="Related reading">

- [Frequency](/metrics/details/frequency)
- [Latency](/metrics/details/latency)
- [Data Type](/metrics/details/data-type)

</Resource>

