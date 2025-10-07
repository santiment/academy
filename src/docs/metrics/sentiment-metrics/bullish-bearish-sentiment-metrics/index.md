---
title: Bullish/Bearish/Neutral Sentiment Metrics
author: Santiment Team
date: 2025-10-07
description: The bullish, neutral, and bearish sentiment metrics show the part of the total social volume that has bullish, neutral, or bearish sentiment
---


## Definition

The Sentiment Bullish, Sentiment Bearish, and Sentiment Neutral metrics represent the sum of [Sentiment Bullish Bearish Score](/metrics/sentiment-metrics/#bullish-bearish-sentiment-score) values.

- `sentiment_bullish_<source>` metrics are computed by taking the sum of the bullish sentiment scores.
- `sentiment_neutral_<source>` metrics are computed by taking the sum of the neutral sentiment scores.
- `sentiment_bearish_<source>` metrics are computed by taking the sum of the bearish sentiment scores.


### Available Sources

[List of available sources](/metrics/details/social-data/#available-data-sources)

---

## Access

[Restricted Access](/metrics/details/access#restricted-access)

---

## Measuring Unit

Sum of sentiment scores

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

All metrics have the same set of [available assets](<https://api.santiment.net/graphiql?variables=&query=%7B%0A%20%20getMetric(metric%3A%20%22sentiment_bullish_total%22)%20%7B%0A%20%20%20%20metadata%20%7B%0A%20%20%20%20%20%20availableSlugs%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A>)

---

## SanAPI

Fetch timeseries data for `sentiment_bullish_total` for a single asset:

```graphql-explorer
{
  getMetric(metric: "sentiment_bullish_total") {
    timeseriesDataJson(
      slug: "ethereum"
      from: "utc_now-90d"
      to: "utc_now-30d"
      interval: "7d"
    )
  }
}
```

---

Fetch timeseries data for `sentiment_neutral_total` for multiple assets at the same time:

```graphql-explorer
{
  getMetric(metric: "sentiment_neutral_total") {
    timeseriesDataPerSlugJson(
      selector: { slugs: ["ethereum", "bitcoin"] }
      from: "utc_now-60d"
      to: "utc_now-55d"
      interval: "1d"
    )
  }
}
```

---

Fetch timeseries data for `sentiment_bearish_total` for multiple assets at the same time:

```graphql-explorer
{
  getMetric(metric: "sentiment_bearish_total") {
    timeseriesDataPerSlugJson(
      selector: { slugs: ["ethereum", "bitcoin"] }
      from: "utc_now-60d"
      to: "utc_now-55d"
      interval: "1d"
    )
  }
}
```

---

Fetch aggregated daily values for many assets:

```graphql-explorer
{
  allProjects(page: 1, pageSize: 50) {
    slug
    sentimentBullish: aggregatedTimeseriesData(
      metric: "sentiment_bullish_total"
      from: "utc_now-7d"
      to: "utc_now"
    )
    sentimentNeutral: aggregatedTimeseriesData(
      metric: "sentiment_neutral_total"
      from: "utc_now-7d"
      to: "utc_now"
    )
    sentimentBearish: aggregatedTimeseriesData(
      metric: "sentiment_bearish_total"
      from: "utc_now-7d"
      to: "utc_now"
    )
  }
}
```

---

## Full list of metrics

The full list of Bullish/Neutral/Bearish sentiment metrics is:

<Details>
<Summary>Open bullish Sentiment Metrics List</Summary>
- sentiment_bullish_4chan
- sentiment_bullish_bitcointalk
- sentiment_bullish_reddit
- sentiment_bullish_telegram
- sentiment_bullish_twitter
- sentiment_bullish_youtube_videos
- sentiment_bullish_farcaster
- sentiment_bullish_total
</Details>

<Details>
<Summary>Open neutral Sentiment Metrics List</Summary>
- sentiment_neutral_4chan
- sentiment_neutral_bitcointalk
- sentiment_neutral_reddit
- sentiment_neutral_telegram
- sentiment_neutral_twitter
- sentiment_neutral_youtube_videos
- sentiment_neutral_farcaster
- sentiment_neutral_total
</Details>

<Details>
<Summary>Open bearish Sentiment Metrics List</Summary>
- sentiment_bearish_4chan
- sentiment_bearish_bitcointalk
- sentiment_bearish_reddit
- sentiment_bearish_telegram
- sentiment_bearish_twitter
- sentiment_bearish_youtube_videos
- sentiment_bearish_farcaster
- sentiment_bearish_total
</Details>

