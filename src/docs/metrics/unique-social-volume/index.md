---
title: Unique Social Volume
author: Ivan
date: 2021-07-14
description: The amount of messages/documents containing a given search term without spam
# REF metrics-hub/metricshub/unique_social_volume.py
---

## Definition

Unique Social Volume is build on top of the [Social Data](/metrics/details/social-data).

The **Unique Social Volume** is the same type of aggregation on top of the
social data as the **Social Volume**, but it takes into account only the unique
text documents for each interval, i.e. completely duplicated messages will be
excluded from the calculations, which results in a slightly lower and to some
degree cleaner way to measure the volume of mentions for a given asset or word.

There are two separate metrics for the unique social volume:

- unique_social_volume_total_5m
- unique_social_volume_total_1h

The `5m` and `1h` control what range of data is used. If some spam messages are
posted in the span of 30 minutes, then every one of the six  5-minute buckets would have
one copy of that message. In the case of `1h` all these messages would be reduced
to a single one, thus providing more aggresive spam filtering.

When comparing `unique_social_volume_total_1h` and
`unique_social_volume_total_5m` aggregated at `1h` intervals, the
`unique_social_volume_total_1h` will always have less or equal values.

---

## Access

[Restricted Access](/metrics/details/access#restricted-access).

---

## Measuring Unit

Amount of distinct documents that mention the given text pattern.

---

## Data Type

[Timeseries Data](/metrics/details/data-type#timeseries-data)

---

## Frequency

[Five-Minute Intervals](/metrics/details/frequency#five-minute-frequency)
[One-Hour Intervals](/metrics/details/frequency#hourly-frequency)

---

## Latency

[Social Data Latency](/metrics/details/latency#social-data-latency)

---

## Available Assets

Available for [these assets](<https://api.santiment.net/graphiql?variables=&query=%7B%0A%20%20getMetric(metric%3A%20%22unique_social_volume_5m%22)%20%7B%0A%20%20%20%20metadata%20%7B%0A%20%20%20%20%20%20availableSlugs%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A>)

> Note: All the unique social volume metrics are available for the same set of assets.

---

## SanAPI

Available under the `unique_social_volume_total_5m` and `unique_social_volume_total_1h`
names.

### Unique Social Volume computed on 5 minute intervals

```graphql
{
  getMetric(metric: "unique_social_volume_total_5m") {
    timeseriesData(
      selector: { slug: "santiment" }
      from: "2017-11-01T00:00:00Z"
      to: "2020-12-31T00:00:00Z"
      interval: "1w"
    ) {
      datetime
      value
    }
  }
}
```

**[Run in Explorer](<https://api.santiment.net/graphiql?query=%7B%0A%20%20getMetric(metric%3A%20%22unique_social_volume_total_5m%22)%20%7B%0A%20%20%20%20timeseriesData(%0A%20%20%20%20%20%20selector%3A%20%7B%20slug%3A%20%22santiment%22%20%7D%0A%20%20%20%20%20%20from%3A%20%222017-11-01T00%3A00%3A00Z%22%0A%20%20%20%20%20%20to%3A%20%222020-12-31T00%3A00%3A00Z%22%0A%20%20%20%20%20%20interval%3A%20%221w%22%0A%20%20%20%20)%20%7B%0A%20%20%20%20%20%20datetime%0A%20%20%20%20%20%20value%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D>)**

---

### Unique Social Volume computed on 1 hour intervals

```graphql
{
  getMetric(metric: "unique_social_volume_total_1h") {
    timeseriesData(
      selector: { slug: "santiment" }
      from: "2017-11-01T00:00:00Z"
      to: "2020-12-31T00:00:00Z"
      interval: "1w"
    ) {
      datetime
      value
    }
  }
}
```

**[Run in Explorer](https://api.santiment.net/graphiql?query=%7B%0A%20%20getMetric(metric%3A%20%22unique_social_volume_total_1h%22)%20%7B%0A%20%20%20%20timeseriesData(%0A%20%20%20%20%20%20selector%3A%20%7B%20slug%3A%20%22santiment%22%20%7D%0A%20%20%20%20%20%20from%3A%20%222017-11-01T00%3A00%3A00Z%22%0A%20%20%20%20%20%20to%3A%20%222020-12-31T00%3A00%3A00Z%22%0A%20%20%20%20%20%20interval%3A%20%221w%22%0A%20%20%20%20)%20%7B%0A%20%20%20%20%20%20datetime%0A%20%20%20%20%20%20value%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D)**
