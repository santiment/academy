---
title: Positive/Negative Sentiment Metrics 
author: Santiment Team
date: 2024-04-05
description: The postive and negative sentiment metrics show the part of the total social volume that has positive or negative sentiment 
---

## Definition

The Sentiment Positive  and Sentiment Negative metrics represnt the sum of [Sentiment Score](/metrics/sentiment-metrics/#sentiment-score) values.

The `sentiment_positive_<source>` metrics are computed by taking the sum of the positive sentiment scores that are over 0.7.
The `sentiment_negative_<source>` metrics are computed by taking the sum of the negative sentiment scores that are over 0.7.

### Positive and Negative Sentiment Bitcoin Chart

<iframe title="Santiment Chart: Price (BTC), Positive sentiment (Total) (BTC), Negative sentiment (Total) (BTC)" width="100%" height="300" src="https://embed.santiment.net/chart?ps=bitcoin&pt=BTC&df=2023-12-29T16%3A00%3A00.000Z&dt=2024-02-25T12%3A00%3A00.000Z&emcg=1&wm=price_usd%3Bsentiment_positive_total%3Bsentiment_negative_total&wax=0%3B1&wc=%2326C953%3B%23665bff%3B%23FF5B5B&ws=%3B%7B%22interval%22%3A%226h%22%2C%22node%22%3A%22filledLine%22%7D%3B%7B%22interval%22%3A%226h%22%2C%22node%22%3A%22filledLine%22%7D" scrolling="no"></iframe>

---

## Access

[Restricted Access](/metrics/details/access#restricted-access)

---


## Measuring Unit

Number of mentions

---

## Data Type

[Timeseries Data](/metrics/details/data-type#timeseries-data)

---

## Frequency

[Five-Minute Intervals](/metrics/details/frequency#five-minute-frequency)

---

## Latency

[On-Chain Latency](/metrics/details/latency#on-chain-latency)

---

## Available Assets

All metrics have the same set of [available assets](https://api.santiment.net/graphiql?variables=&query=%7B%0A%20%20getMetric(metric%3A%20%22sentiment_positive_total%22)%20%7B%0A%20%20%20%20metadata%20%7B%0A%20%20%20%20%20%20availableSlugs%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A)

---

## SanAPI

```graphql
{
  getMetric(metric: "mvrv_usd") {
    timeseriesData(
      slug: "santiment"
      from: "2019-01-01T00:00:00Z"
      to: "2019-09-01T00:00:00Z"
      interval: "7d"
    ) {
      datetime
      value
    }
  }
}
```

[Run in
explorer](<https://api.santiment.net/graphiql?query=%7B%0A%09getMetric(metric%3A%22mvrv_usd%22)%20%7B%0A%20%20%20%20timeseriesData(slug%3A%22santiment%22%2C%20from%3A%222019-01-01T00%3A00%3A00Z%22%2C%20to%3A%222019-09-01T00%3A00%3A00Z%22%2C%20interval%3A%227d%22)%20%7B%0A%20%20%20%20%20%20datetime%0A%20%20%20%20%20%20value%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A>)


Example of query for **mvrv_usd_intraday**:

```graphql
{
  getMetric(metric: "mvrv_usd_intraday") {
    timeseriesData(
      slug: "bitcoin"
      from: "utc_now-90d"
      to: "utc_now-30d"
      interval: "3d"
    ) {
      datetime
      value
    }
  }
}
```

[Run in
explorer](<https://api.santiment.net/graphiql?query=%7B%0A%20%20getMetric(metric%3A%20%22mvrv_usd_intraday%22)%20%7B%0A%20%20%20%20timeseriesData(%0A%20%20%20%20%20%20slug%3A%20%22bitcoin%22%0A%20%20%20%20%20%20from%3A%20%22utc_now-90d%22%0A%20%20%20%20%20%20to%3A%20%22utc_now-30d%22%0A%20%20%20%20%20%20interval%3A%20%223d%22%0A%20%20%20%20)%20%7B%0A%20%20%20%20%20%20datetime%0A%20%20%20%20%20%20value%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D>)


Example of query for **timebound MVRV**:

```graphql
{
  getMetric(metric: "mvrv_usd_7d") {
    timeseriesData(
      slug: "santiment"
      from: "2019-01-01T00:00:00Z"
      to: "2019-09-01T00:00:00Z"
      interval: "7d"
    ) {
      datetime
      value
    }
  }
}
```

[Run in
explorer](<https://api.santiment.net/graphiql?query=%7B%0A%09getMetric(metric%3A%22mvrv_usd_7d%22)%20%7B%0A%20%20%20%20timeseriesData(slug%3A%22santiment%22%2C%20from%3A%222019-01-01T00%3A00%3A00Z%22%2C%20to%3A%222019-09-01T00%3A00%3A00Z%22%2C%20interval%3A%227d%22)%20%7B%0A%20%20%20%20%20%20datetime%0A%20%20%20%20%20%20value%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A>)

Example of query for **MVRV long-short difference**:

```graphql
{
  getMetric(metric: "mvrv_long_short_diff_usd") {
    timeseriesData(
      slug: "santiment"
      from: "2019-01-01T00:00:00Z"
      to: "2019-09-01T00:00:00Z"
      interval: "7d"
    ) {
      datetime
      value
    }
  }
}
```

**[Run in
explorer](<https://api.santiment.net/graphiql?query=%7B%0A%09getMetric(metric%3A%22mvrv_long_short_diff_usd%22)%20%7B%0A%20%20%20%20timeseriesData(slug%3A%22santiment%22%2C%20from%3A%222019-01-01T00%3A00%3A00Z%22%2C%20to%3A%222019-09-01T00%3A00%3A00Z%22%2C%20interval%3A%227d%22)%20%7B%0A%20%20%20%20%20%20datetime%0A%20%20%20%20%20%20value%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A>)**

## Full list of metrics

The full list of Postive/Negative sentiment metrics is:

<Details>
<Summary>Open Positive Sentiment Metrics List</Summary>
- sentiment_positive_bitcointalk
- sentiment_positive_reddit
- sentiment_positive_telegram
- sentiment_positive_total
- sentiment_positive_twitter
- sentiment_positive_twitter_crypto
- sentiment_positive_twitter_news
- sentiment_positive_twitter_nft
- sentiment_positive_youtube_videos
</Details>


<Details>
<Summary>Open Negative Sentiment Metrics List</Summary>
- sentiment_negative_bitcointalk
- sentiment_negative_reddit
- sentiment_negative_telegram
- sentiment_negative_total
- sentiment_negative_twitter
- sentiment_negative_twitter_crypto
- sentiment_negative_twitter_news
- sentiment_negative_twitter_nft
- sentiment_negative_youtube_videos
</Details>

<Details>
<Summary>Open Balance Sentiment Metrics List</Summary>
- sentiment_balance_bitcointalk
- sentiment_balance_reddit
- sentiment_balance_telegram
- sentiment_balance_total
- sentiment_balance_twitter
- sentiment_balance_twitter_crypto
- sentiment_balance_twitter_news
- sentiment_balance_twitter_nft
- sentiment_balance_youtube_videos
</Details>
