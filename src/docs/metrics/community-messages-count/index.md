---
title: Community Messages Count
author: Vlad
date: 2025-07-10
description: Number of messages in a project's community chat server
# REF metrics-hub/metricshub/social_volume_unit.py
---

## Definition

Community Messages Count is build on top of the [Social Data](/metrics/details/social-data).

Community Messages Count returns the number of messages written in the
asset's own community chat (telegram server) or subreddit (reddit).

Currently `telegram` and `reddit` are supported.

We constantly update our labels which helps us to keep labels as fresh as possible but result historical data changes. Any modifications to labels, social sources, or relevant jobs will prompt recalculation for the previous month's data. Within a 12 hour period, metric can be supplemented with new data.

Experimental metrics, might undergo changes if a future.


## Access

[Restricted Access](/metrics/details/access#restricted-access).

---

## Measuring Unit

Amount of documents that mention the given text pattern.

---

## Data Type

[Timeseries Data](/metrics/details/data-type#timeseries-data)

---

## Frequency

[Five-Minute Intervals](/metrics/details/frequency#five-minute-frequency)

---

## Latency

[Social Data Latency](/metrics/details/latency#social-data-latency)

---

## Available Assets

Available for [these
assets](<https://api.santiment.net/graphiql?variables=&query=%7B%0A%20%20getMetric(metric%3A%20%22community_messages_count_telegram%22)%20%7B%0A%20%20%20%20metadata%20%7B%0A%20%20%20%20%20%20availableSlugs%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A>)

> Note: `community_messages_count_telegram`, `community_messages_count_reddit` metric are available for the same set of assets.

---

## SanAPI

Available under the `community_messages_count_reddit` and `community_messages_count_telegram` names.

```graphql-explorer
{
  getMetric(metric: "community_messages_count_reddit") {
    timeseriesDataJson(
      selector: { slug: "solana" }
      from: "2025-01-01T00:00:00Z"
      to: "2025-01-07T00:00:00Z"
      interval: "1d"
    )
  }
}
```

## Full list of metrics

The full list of Community Message Count metrics is:

<Details>

<Summary>Open Metrics List</Summary>

- community_messages_count_telegram
- community_messages_count_reddit

</Details>
