---
title: Weighted Sentiment Metrics
author: Santiment Team
date: 2025-03-18
description: The postive and negative sentiment metrics show the part of the total social volume that has positive or negative sentiment
---

## Definition

The **Sentiment Weighted** is an improved version of the [Sentiment
Balance](/metrics/sentiment-metrics/positive-negative-sentiment-metrics) that also takes into account the [Unique Social Volume](/metrics/unique-social-volume).

### Why Sentiment Balance needs improvement?

Sentiment Positive/Negative/Balance metrics' values are in the interval `[-social_volume; +social_volume]`
where `social_volume` is the number of messages that mention a given coin.

This makes the values of different assets hard to compare, as the mentions of Bitcoin are magnitutes higher compared to the mentions of a small token.

### Sentiment Weighted Intuitive Definition

**Sentiment Weighted** adjusts the values by considering the number of mentions, standardizing data to make diverse asset sentiments comparable.

This means that spikes/dips in the metric will be seen when there is:

- a lot of mentions for a coin
- most of the mentions are expressing the same sentiment -- most are positive or most are negative

If the sentiment is mixed, or the asset is not mentioned a lot, there will be no spikes/dips.

### Sentiment Weighted Technical Definition

The metric is defined as a rolling Z-score of the term X, where:

$$
X = \mathrm{Unique Social Volume} \times \mathrm{Average Sentiment}
$$

More precisely we choose a duration $d$ which will be the length of our sliding
window. Then for any timestamp $t$ we consider the population $X(t,d)$
consisting of all values of $X(t')$ for all timestamps $t'$ between $t-d$ and
$t$. If we use $\mu$ and $\sigma$ to denote mean and standard deviation, then we
define **Sentiment Weighted** as:

$$
Sentiment Weighted(t,d) = \frac{X(t) - \mu(X(t,d))}{\sigma(X(t,d))}
$$

This score can be explained as a _social-volume-weighted sentiment
balance_ $-$ it spikes when the social volume is really high and
the vast majority of the messages in it are very positive at the same time. Dips
will occur when the social volume again is high, but the overall sentiment is
negative. In case the volume is high but the sentiment is mixed, or the
sentiment has a strong positive (negative) polarity but with a low volume, the
**Sentiment Weighted** metric won't have significant changes and will
stay around 0.

We have `5m`, `1h`, and `1d` weighted sentiment metrics. The difference between them is in the metrics that we use to calculate them.

- for sentiment_weighted (5m) we use sentiment_balance (5m) and unique_social_volume (5m)
- for sentiment_weighted_1h we use sentiment_balance (1h) and unique_social_volume_1h
- for sentiment_weighted_1d we use sentiment_balance (1d) and unique_social_volume_1d

The difference between base metrics lies in the interval on which we aggregate these metrics.
In case of `5m` aggregated metrics when we calculate standard deviation and average for a window $d$ we take $d$ 5m's datapoints.

In case of `1h` aggregated metrics -- we take $d$ 1h's datapoints.

In case of `1d` aggregated metrics -- we take $d$ 1d's datapoints.

### Available Sources

[List of available sources](/metrics/details/social-data/#available-data-sources)

### Weighted Sentiment Bitcoin Chart

## <iframe title="Santiment Chart: Price (BTC), Weighted sentiment (Total) (BTC)" width="100%" height="300" src="https://embed.santiment.net/chart?ps=bitcoin&pt=BTC&df=utc_now-90d&dt=utc_now-30d&emcg=1&wm=price_usd%3Bsentiment_volume_consumed_total&wax=0%3B1&wc=%2326C953%3B%23FF5B5B&ws=%3B%7B%22interval%22%3A%221d%22%7D" scrolling="no"></iframe>

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

## Change Metrics

[Change Metrics:](/metrics/details/change_metrics)

- sentiment_weighted_total_change_1d
- sentiment_weighted_total_change_7d
- sentiment_weighted_total_change_30d

---

## Available Assets

All metrics have the same set of [available assets](<https://api.santiment.net/graphiql?variables=&query=%7B%0A%20%20getMetric(metric%3A%20%22sentiment_weighted_total%22)%20%7B%0A%20%20%20%20metadata%20%7B%0A%20%20%20%20%20%20availableSlugs%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A>)

---

## SanAPI

Fetch timeseries data for `sentiment_weighted_total` for a single asset:

```graphql-explorer
{
  getMetric(metric: "sentiment_weighted_total") {
    timeseriesDataJson(
      slug: "ethereum"
      from: "utc_now-90d"
      to: "utc_now-60d"
      interval: "1d"
    )
  }
}
```

---

Fetch timeseries data for `sentiment_weighted_telegram` for multiple assets at the same time:

```graphql-explorer
{
  getMetric(metric: "sentiment_weighted_telegram") {
    timeseriesDataPerSlugJson(
      from: "utc_now-60d"
      to: "utc_now-55d"
      interval: "1d"
      selector: { slugs: ["ethereum", "bitcoin"] }
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
    sentimentWeighted: aggregatedTimeseriesData(
      metric: "sentiment_weighted_total"
      from: "utc_now-7d"
      to: "utc_now"
    )
  }
}
```

---

## Full list of metrics

The full list of weighted sentiment metrics is:

<Details>
<Summary>Open Weighted Sentiment Metrics List</Summary>
- sentiment_weighted_4chan
- sentiment_weighted_bitcointalk
- sentiment_weighted_reddit
- sentiment_weighted_telegram
- sentiment_weighted_twitter
- sentiment_weighted_youtube_videos
- sentiment_weighted_farcaster
- sentiment_weighted_total
- sentiment_weighted_4chan_1h
- sentiment_weighted_bitcointalk_1h
- sentiment_weighted_reddit_1h
- sentiment_weighted_telegram_1h
- sentiment_weighted_twitter_1h
- sentiment_weighted_youtube_videos_1h
- sentiment_weighted_farcaster_1h
- sentiment_weighted_total_1d
- sentiment_weighted_4chan_1d
- sentiment_weighted_bitcointalk_1d
- sentiment_weighted_reddit_1d
- sentiment_weighted_telegram_1d
- sentiment_weighted_twitter_1d
- sentiment_weighted_youtube_videos_1d
- sentiment_weighted_farcaster_1d
- sentiment_weighted_total_1d
- sentiment_weighted_total_change_1d
- sentiment_weighted_total_change_7d
- sentiment_weighted_total_change_30d
</Details>
