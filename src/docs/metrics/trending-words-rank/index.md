---
title: Trending Words Rank
author: Filip
date: 2022-06-01
description: Rank of asset in top trending words
---
## Definition

Trending Words Rank is build on top of the [Social Data](/metrics/details/social-data).

Trending Words Rank for an asset represents position of that asset based on top
trending words score.
Data for asset and some time interval only appears if asset for that time
interval is in top trending words.


## Access

[Restricted Access](/metrics/details/access#restricted-access).

---

## Measuring Unit

Ordinal number

---

## Data Type

[Timeseries Data](/metrics/details/data-type#timeseries-data)

---

## Frequency

[Daily Intervals](/metrics/details/frequency#daily-frequency)


---

## Latency

[Social Data Latency](/metrics/details/latency#social-data-latency)

---

## Available Assets

Available for [these
assets](<https://api.santiment.net/graphiql?variables=&query=%7B%0A%20%20getMetric(metric%3A%20%22trending_words_rank%22)%20%7B%0A%20%20%20%20metadata%20%7B%0A%20%20%20%20%20%20availableSlugs%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A>)


---

## SanAPI

Available under the `trending_words_rank` name.

```graphql
{
  getMetric(metric: "trending_words_rank") {
    timeseriesData(
      slug: "santiment"
      from: "2022-05-01T00:00:00Z"
      to: "2022-05-07T00:00:00Z"
      interval: "1d"
    ) {
      datetime
      value
    }
  }
}
```

**[Run in
Explorer](<https://api.santiment.net/graphiql?variables=&query=%7B%0A%20%20getMetric(metric%3A%20%22trending_words_rank%22)%20%7B%0A%20%20%20%20timeseriesData(%0A%20%20%20%20%20%20slug%3A%20%22santiment%22%0A%20%20%20%20%20%20from%3A%20%222022-05-01T00%3A00%3A00Z%22%0A%20%20%20%20%20%20to%3A%20%222022-05-07T00%3A00%3A00Z%22%0A%20%20%20%20%20%20interval%3A%20%221d%22%0A%20%20%20%20)%20%7B%0A%20%20%20%20%20%20datetime%0A%20%20%20%20%20%20value%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D>)**
