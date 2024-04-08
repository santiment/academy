---
title: Community Messages Count
author: Ivan
date: 2020-04-13
description: Number of messages in a project's community chat server
# REF metrics-hub/metricshub/community_messages.py
---

## Definition

Community Messages Count is build on top of the [Social Data](/metrics/details/social-data).

Community Messages Count returns the number of messages written in the
asset's own community chat (telegram server).

Currently only `telegram` is supported.

Please note that metrics may undergo changes in historical values due to automated recalculations triggered monthly. We constantly update our labels which helps us to keep labels as fresh as possible but result historical data changes. Any modifications to labels, social sources, or relevant jobs will prompt recalculation for the previous month's data. Within a 12 hour period, metric can be supplemented with new data.


## Access

[Restricted Access](/metrics/details/access#restricted-access).

---

## Measuring Unit

% between 0 and 100.

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
assets](<https://api.santiment.net/graphiql?variables=&query=%7B%0A%20%20getMetric(metric%3A%20%22community_messages_count_total%22)%20%7B%0A%20%20%20%20metadata%20%7B%0A%20%20%20%20%20%20availableSlugs%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A>)

> Note: `community_messages_count_total` metric and all metrics for a specific source are
> available for the same set of assets.

---

## SanAPI

Available under the `community_messages_count_total` and `community_messages_count_<source>`
names, where the available sources are:

- telegram

```graphql
{
  getMetric(metric: "community_messages_count_total") {
    timeseriesData(
      selector: { slug: "santiment" }
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

**[Run in
Explorer](<https://api.santiment.net/graphiql?query=%7B%0A%20%20getMetric(metric%3A%20%22community_messages_count_total%22)%20%7B%0A%20%20%20%20timeseriesData(%0A%20%20%20%20%20%20selector%3A%20%7B%20slug%3A%20%22santiment%22%20%7D%0A%20%20%20%20%20%20from%3A%20%222020-01-01T00%3A00%3A00Z%22%0A%20%20%20%20%20%20to%3A%20%222020-01-07T00%3A00%3A00Z%22%0A%20%20%20%20%20%20interval%3A%20%221d%22%0A%20%20%20%20)%20%7B%0A%20%20%20%20%20%20datetime%0A%20%20%20%20%20%20value%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D>)**
