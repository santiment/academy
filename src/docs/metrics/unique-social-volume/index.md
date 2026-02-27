---
title: Unique Social Volume
author: Ivan
date: 2025-07-10
description: The amount of messages/documents containing a given search term without spam
# REF metrics-hub/metricshub/unique_social_volume.py
---

## Definition

Unique Social Volume is built on top of the [Social Data](/metrics/details/social-data).

The **Unique Social Volume** is the same type of aggregation on top of the
social data as the **Social Volume**, but it takes into account only the unique
text documents for each interval, i.e. completely duplicated messages will be
excluded from the calculations, which results in a slightly lower and to some
degree cleaner way to measure the volume of mentions for a given asset or word.

There are three separate metrics for the unique social volume:

- unique_social_volume_total_5m
- unique_social_volume_total_1h
- unique_social_volume_total_1d

The `5m`, `1h` and `1d` control what range of data is used. If some spam messages are
posted in the span of 30 minutes, then every one of the six  5-minute buckets would have
one copy of that message. In the case of `1h` all these messages would be reduced
to a single one, thus providing more aggressive spam filtering.

When comparing `unique_social_volume_total_1h` and
`unique_social_volume_total_5m` aggregated at `1h` intervals, the
`unique_social_volume_total_1h` will always have less or equal values.

We constantly update our labels, which helps us keep them as fresh as possible but results in historical data changes. Any modifications to labels, social sources, or relevant jobs will prompt recalculation for the previous month's data. Within a 12-hour period, the metric can be supplemented with new data.

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

Available under the:
- unique_social_volume_total_5m
- unique_social_volume_total_1h
- unique_social_volume_total_1d
- unique_social_volume_telegram_5m
- unique_social_volume_telegram_1h
- unique_social_volume_telegram_1d
- unique_social_volume_reddit_5m
- unique_social_volume_reddit_1h
- unique_social_volume_reddit_1d
- unique_social_volume_twitter_5m
- unique_social_volume_twitter_1h
- unique_social_volume_twitter_1d
- unique_social_volume_bitcointalk_5m
- unique_social_volume_bitcointalk_1h
- unique_social_volume_bitcointalk_1d
- unique_social_volume_4chan_5m
- unique_social_volume_4chan_1h
- unique_social_volume_4chan_1d
- unique_social_volume_farcaster_5m
- unique_social_volume_farcaster_1h
- unique_social_volume_farcaster_1d


### Unique Social Volume computed on 5 minute intervals

```graphql-explorer
{
  getMetric(metric: "unique_social_volume_total_5m") {
    timeseriesDataJson(
      selector: { slug: "santiment" }
      from: "2017-11-01T00:00:00Z"
      to: "2020-12-31T00:00:00Z"
      interval: "1w"
    )
  }
}
```

---

### Unique Social Volume computed on 1 hour intervals

```graphql-explorer
{
  getMetric(metric: "unique_social_volume_total_1h") {
    timeseriesDataJson(
      selector: { slug: "santiment" }
      from: "2017-11-01T00:00:00Z"
      to: "2020-12-31T00:00:00Z"
      interval: "1w"
    )
  }
}
```
