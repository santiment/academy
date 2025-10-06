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

Please note that metrics may undergo changes in historical values due to automated recalculations triggered monthly. We constantly update our labels which helps us to keep labels as fresh as possible but result historical data changes. Any modifications to labels, social sources, or relevant jobs will prompt recalculation for the previous month's data. Within a 12 hour period, metric can be supplemented with new data.


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

```graphql-explorer
{
  getMetric(metric: "trending_words_rank") {
    timeseriesDataJson(
      slug: "santiment"
      from: "2022-05-01T00:00:00Z"
      to: "2022-05-07T00:00:00Z"
      interval: "1d"
    )
  }
}
```
