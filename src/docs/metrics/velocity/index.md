---
title: Velocity Metric
author: Santiment Team
---

_For a more in-depth explanation of `Velocity`, please click_
[_here_](/metrics/velocity/velocity-technical).

---

## Definition

The metric shows the average number of times that a coin/token changes wallets
each day.

Simply put, a higher velocity means that a coin/token is used in transactions
more often within a set time frame.

Velocity can be used to explain various noteworthy events in the life of a
project. For example, here's Ethereum:

![ethereum-velocity](ethereum-velocity.png)

Notice the steep drop off?

The increased activity (and subsequent dip) correlates squarely to a huge ETH
mixer that operated between March 2017 and March 2018. During that time, coins
were moved a lot between addresses which lead to big velocity spikes.

Once the mixer was liquidated, token velocity toppled back to 'normal' levels,
where it's remained ever since.

---

## Access

Velocity has [restricted access](/metrics/details/access#restricted-access).

---

## Measuring Unit

A non-negative number of times coin/token changes wallet

## Frequency

Velocity is available at [daily intervals](/metrics/details/frequency#daily-frequency)

---

## Latency

Velocity has [on-chain latency](/metrics/details/latency#on-chain-latency)

---

## Available assets

Velocity is available for [these
assets](<https://api.santiment.net/graphiql?variables=&query=%7B%0A%20%20getMetric(metric%3A%20%22velocity%22)%20%7B%0A%20%20%20%20metadata%20%7B%0A%20%20%20%20%20%20availableSlugs%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A>)

---

### SanAPI

Velocity is available under the `velocity` name.

```graphql
{
  getMetric(metric: "velocity") {
    timeseriesData(
      slug: "santiment"
      from: "2020-04-01T00:00:00Z"
      to: "2020-04-07T00:00:00Z"
      interval: "1d"
    ) {
      datetime
      value
    }
  }
}
```

[**Run in
Explorer**](<https://api.santiment.net/graphiql?variables=&query=%7B%0A%20%20getMetric(metric%3A%20%22velocity%22)%20%7B%0A%20%20%20%20timeseriesData(%0A%20%20%20%20%20%20slug%3A%20%22santiment%22%0A%20%20%20%20%20%20from%3A%20%222020-04-01T00%3A00%3A00Z%22%0A%20%20%20%20%20%20to%3A%20%222020-04-07T00%3A00%3A00Z%22%0A%20%20%20%20%20%20interval%3A%20%221d%22)%20%7B%0A%20%20%20%20%20%20%20%20datetime%0A%20%20%20%20%20%20%20%20value%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A>)
