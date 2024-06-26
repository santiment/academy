---
title: Positive/Negative Sentiment Metrics 
author: Santiment Team
date: 2024-06-26
description: The postive and negative sentiment metrics show the part of the total social volume that has positive or negative sentiment 
---

## Definition

The Sentiment Positive  and Sentiment Negative metrics represnt the sum of [Sentiment Score](/metrics/sentiment-metrics/#sentiment-score) values.

- `sentiment_positive_<source>` metrics are computed by taking the sum of the positive sentiment scores that are over 0.7.
- `sentiment_negative_<source>` metrics are computed by taking the sum of the negative sentiment scores that are over 0.7.
- `sentiment_balance_<source>` metrics show the difference between `sentiment_positive_<source>` and `sentiment_negative_<source>`.

### Available Sources

[List of available sources](/metrics/details/social-data/#available-data-sources)

### Example

Thare are 10 messages in telegram that mention `bitcoin`. Below is a table that shows
the sentiment scores of those 10 messages. The messages with the same sentiment score
are grouped together (messages count bigger than 1).

| Messages count | Positive Sentiment Score | Negative Sentiment Score |
| -------------- | ------------------------ | ------------------------ |
| 3              | 0.7                      |                    0.3   |
| 2              | 1.0                      |                    0.0   |
| 3              | 0.2                      |                    0.8   |
| 2              | 0.55                     |                    0.45  |

Using this data we can compute:
- `sentiment_positive_telegram`: $3 * 0.7 + 2 * 1.0 = 4.1$
- `sentiment_negative_telegram`: $3 * 0.8 = 2.4$
- `sentiment_balance_telegram`: $4.1 - 2.4 = 1.7$

### Positive and Negative Sentiment Bitcoin Chart

<iframe title="Santiment Chart: Price (BTC), Positive sentiment (Total) (BTC), Negative sentiment (Total) (BTC)" width="100%" height="300" src="https://embed.santiment.net/chart?ps=bitcoin&pt=BTC&df=utc_now-90d&dt=utc_now-30d&emcg=1&wm=price_usd%3Bsentiment_positive_total%3Bsentiment_negative_total&wax=0%3B1&wc=%2326C953%3B%23665bff%3B%23FF5B5B&ws=%3B%7B%22interval%22%3A%226h%22%2C%22node%22%3A%22filledLine%22%7D%3B%7B%22interval%22%3A%226h%22%2C%22node%22%3A%22filledLine%22%7D" scrolling="no"></iframe>

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

All metrics have the same set of [available assets](https://api.santiment.net/graphiql?variables=&query=%7B%0A%20%20getMetric(metric%3A%20%22sentiment_positive_total%22)%20%7B%0A%20%20%20%20metadata%20%7B%0A%20%20%20%20%20%20availableSlugs%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A)

---

## SanAPI

Fetch timeseries data for `sentiment_positive_total` for a single asset:

```graphql
{
  getMetric(metric: "sentiment_positive_total") {
    timeseriesData(
      slug: "ethereum"
      from: "utc_now-90d"
      to: "utc_now-30d"
      interval: "7d"
    ) {
      datetime
      value
    }
  }
}
```

**[Run in explorer](https://api.santiment.net/graphiql?query=%7B%0A%20%20getMetric(metric%3A%20%22sentiment_positive_total%22)%20%7B%0A%20%20%20%20timeseriesData(%0A%20%20%20%20%20%20slug%3A%20%22ethereum%22%0A%20%20%20%20%20%20from%3A%20%22utc_now-90d%22%0A%20%20%20%20%20%20to%3A%20%22utc_now-30d%22%0A%20%20%20%20%20%20interval%3A%20%227d%22%0A%20%20%20%20)%20%7B%0A%20%20%20%20%20%20datetime%0A%20%20%20%20%20%20value%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A)**

---

Fetch timeseries data for `sentiment_negative_telegram` for multiple assets at the same time:

```graphql
{
  getMetric(metric: "sentiment_negative_telegram") {
    timeseriesDataPerSlug(
      from: "utc_now-60d"
      to: "utc_now-55d"
      interval: "1d"
      selector: {slugs: ["ethereum","bitcoin"]})
      {
        data {
          slug
          value
        }
        datetime
      }
  }
}
```

**[Run in explorer](https://api.santiment.net/graphiql?query=%7B%0A%20%20getMetric(metric%3A%20%22sentiment_positive_telegram%22)%20%7B%0A%20%20%20%20timeseriesDataPerSlug(%0A%20%20%20%20%20%20from%3A%20%22utc_now-60d%22%0A%20%20%20%20%20%20to%3A%20%22utc_now-55d%22%0A%20%20%20%20%20%20interval%3A%20%221d%22%0A%20%20%20%20%20%20selector%3A%20%7Bslugs%3A%20%5B%22ethereum%22%2C%22bitcoin%22%5D%7D)%0A%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20data%20%7B%0A%20%20%20%20%20%20%20%20%20%20slug%0A%20%20%20%20%20%20%20%20%20%20value%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20datetime%0A%20%20%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A)**

---

Fetch aggregated daily values for many assets:

```graphql
{
  allProjects(page: 1 pageSize: 50){
    slug
    sentimentPositive: aggregatedTimeseriesData(
      metric: "sentiment_positive_total"
      from: "utc_now-7d"
      to: "utc_now")
    sentimentNegative: aggregatedTimeseriesData(
      metric: "sentiment_negative_total"
      from: "utc_now-7d"
      to: "utc_now")
    sentimentBalance: aggregatedTimeseriesData(
      metric: "sentiment_balance_total"
      from: "utc_now-7d"
      to: "utc_now")
  }
}
```

**[Run in Explorer](https://api.santiment.net/graphiql?variables=&query=%7B%0A%20%20allProjects(page%3A%201%20pageSize%3A%2050)%7B%0A%20%20%20%20slug%0A%20%20%20%20sentimentPositive%3A%20aggregatedTimeseriesData(%0A%20%20%20%20%20%20metric%3A%20%22sentiment_positive_total%22%0A%20%20%20%20%20%20from%3A%20%22utc_now-7d%22%0A%20%20%20%20%20%20to%3A%20%22utc_now%22)%0A%20%20%20%20sentimentNegative%3A%20aggregatedTimeseriesData(%0A%20%20%20%20%20%20metric%3A%20%22sentiment_negative_total%22%0A%20%20%20%20%20%20from%3A%20%22utc_now-7d%22%0A%20%20%20%20%20%20to%3A%20%22utc_now%22)%0A%20%20%20%20sentimentBalance%3A%20aggregatedTimeseriesData(%0A%20%20%20%20%20%20metric%3A%20%22sentiment_balance_total%22%0A%20%20%20%20%20%20from%3A%20%22utc_now-7d%22%0A%20%20%20%20%20%20to%3A%20%22utc_now%22)%0A%20%20%7D%0A%7D)**

---

## Full list of metrics

The full list of Postive/Negative/Balance sentiment metrics is:

<Details>
<Summary>Open Positive Sentiment Metrics List</Summary>
- sentiment_positive_4chan
- sentiment_positive_bitcointalk
- sentiment_positive_reddit
- sentiment_positive_telegram
- sentiment_positive_twitter
- sentiment_positive_youtube_videos
- sentiment_positive_farcaster
- sentiment_positive_total
</Details>


<Details>
<Summary>Open Negative Sentiment Metrics List</Summary>
- sentiment_negative_4chan
- sentiment_negative_bitcointalk
- sentiment_negative_reddit
- sentiment_negative_telegram
- sentiment_negative_twitter
- sentiment_negative_youtube_videos
- sentiment_negative_farcaster
- sentiment_negative_total
</Details>

<Details>
<Summary>Open Balance Sentiment Metrics List</Summary>
- sentiment_balance_4chan
- sentiment_balance_bitcointalk
- sentiment_balance_reddit
- sentiment_balance_telegram
- sentiment_balance_twitter
- sentiment_balance_youtube_videos
- sentiment_balance_farcaster
- sentiment_balance_total
</Details>
