---
title: Immutable (Finalized) Metrics
headline: "Immutable metrics via onlyFinalizedData"
description: "Request guaranteed, finalized values for select metrics via the onlyFinalizedData flag in our GraphQL API."
author: Santiment Team
date: 2025-10-06
---

We now provide a way to access finalized, immutable metric values through our API. Finalized points are flagged as final for a given interval, meaning no further backfills or adjustments will occur for that timestamp. This is especially useful when you need guaranteed consistency for analysis, dashboards, or reporting.

<Notebox type="openBook">
Immutable here means the value is considered final for the requested interval. It does not change afterwards due to late-arriving data or corrections.
</Notebox>

<Resource title="How to request immutable data">

Set `onlyFinalizedData: true` in your GraphQL query. For example, requesting daily finalized Transaction Volume for Bitcoin Cash:

```graphql
{
  getMetric(metric: "transaction_volume") {
    timeseriesDataJson(
      selector: { slug: "bitcoin-cash" }
      from: "utc_now-100d"
      to: "utc_now"
      interval: "1d"
      onlyFinalizedData: true
    )
  }
}
```

Try it in your browser: https://api.santiment.net/graphiql?variables=&query=%7B%0A%20%20getMetric(metric%3A%20%22transaction_volume%22)%7B%0A%20%20%20%20timeseriesDataJson(%0A%20%20%20%20%20%20selector%3A%7Bslug%3A%20%22bitcoin-cash%22%7D%0A%20%20%20%20%20%20from%3A%20%22utc_now-100d%22%0A%20%20%20%20%20%20to%3A%20%22utc_now%22%0A%20%20%20%20%20%20interval%3A%20%221d%22%0A%20%20%20%20%20%20onlyFinalizedData%3A%20true%0A%20%20%20%20)%0A%20%20%7D%0A%7D

</Resource>

<Resource title="Supported scope (WIP)">

This feature is currently in testing and enabled for the blockchain: Bitcoin Cash, and for a limited subset of metrics:

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

We will expand chain and metric coverage over time.

</Resource>

<Notebox type="exclamation">
Requesting immutable data introduces a short additional latency of around 5–10 minutes, as we wait to confirm finalization of each interval.
</Notebox>

<Resource title="Related reading">

- [Frequency](/metrics/details/frequency)
- [Latency](/metrics/details/latency)
- [Data Type](/metrics/details/data-type)

</Resource>

