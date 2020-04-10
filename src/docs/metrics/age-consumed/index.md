---
title: Token Age Consumed metric
author: Santiment Team
date: 2020-04-06
---

_For a more in-depth technical explanation of `Age Consumed`, please click_
[_here_](/metrics/age-consumed/age-consumed-technical)

---

## Definition

Age Consumed shows the amount of tokens changing addresses on a certain date,
multiplied by the time since they last moved.

Spikes on the graph signal a large amount of tokens moving after being idle for
an extended period of time.

One potential use case for this metric is identifying when big market players
exit the project post ICO.

Here's the Token Age Consumed graph for [Golem](https://golem.network/), an
ERC-20 project that lets you rent other people's computing power.
![golem-age-consumed](golem-age-consumed.png)

We can easily spot several significant spikes over time: each could be a large
early investor selling their tokens, which commonly results in a parallel price
decline.

---

## Access

The following [special restrictions](/products-and-plans/access-plans/special-restrictions#age-consumed-metrics) apply

---

## Measuring Unit

Time passed × Token/Coin amount

---

## Frequency

Age Consumed is available at [5-minute
intervals](/metrics/details/frequency#five-minute-frequency)

---

## Latency

Age Consumed has [on-chain latency](/metrics/details/latency#on-chain-latency)

---

## Available assets

This metric is computed for [these
assets](<https://api.santiment.net/graphiql?variables=&query=%7B%0A%20%20getMetric(metric%3A%20%22age_destroyed%22)%20%7B%0A%20%20%20%20metadata%20%7B%0A%20%20%20%20%20%20availableSlugs%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A>)

---

## API

The query to fetch the age consumed is called `age_destroyed` in the API:

```graphql
{
  getMetric(metric: "age_destroyed") {
    timeseriesData(
      slug: "santiment"
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

[**Run in
explorer**](<https://api.santiment.net/graphiql?query=%7B%0A%20%20getMetric(metric%3A%20%22age_destroyed%22)%20%7B%0A%20%20%20%20timeseriesData(%0A%20%20%20%20%20%20slug%3A%20%22santiment%22%0A%20%20%20%20%20%20from%3A%20%222020-01-01T00%3A00%3A00Z%22%0A%20%20%20%20%20%20to%3A%20%222020-01-07T00%3A00%3A00Z%22%0A%20%20%20%20%20%20interval%3A%20%221d%22)%20%7B%0A%20%20%20%20%20%20%20%20datetime%0A%20%20%20%20%20%20%20%20value%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A>)
