---
title: Network Growth metric
author: Santiment Team
---

## Definition

The amount of new addresses that transfered a given coin/token for the first
time.

Essentially, this chart illustrates user adoption over time, and can be used to
identify when the project is gaining - or losing - traction.

![tether network growth](aragon-network-growth.png)

Here's a Network Growth graph for
[Aragon](https://app.santiment.net/projects/aragon), which lets anyone create
and manage a decentralized organization on Ethereum.

UP until December of 2017, the Aragon network grew by 85-750 new addresses each
day, and the price loyally followed.

Then, right around the start of 2018, the network growth slowly began to
throttle. It indicated that the Aragon user base was already quite deep, and
wouldn't be able to sustain future price growth.

What happened since speaks for itself.

## Measuring Unit

Number of addresses

## Frequency

Network Growth is available at [daily
intervals](/metrics/details/frequency#daily-frequency)

---

## Latency

Network Growth ise [on-chain latency](/metrics/details/latency#on-chain-latency)

---

## Available assets

Network Growth is computed for [these
assets](<https://api.santiment.net/graphiql?variables=&query=%7B%0A%20%20getMetric(metric%3A%20%22network_growth%22)%20%7B%0A%20%20%20%20metadata%20%7B%0A%20%20%20%20%20%20availableSlugs%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A>)

---

### SanAPI

Network Growth is available under the `network_growth` name.

```graphql
{
  getMetric(metric: "network_growth") {
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
explorer](<https://api.santiment.net/graphiql?query=%7B%0A%09getMetric(metric%3A%22network_growth%22)%20%7B%0A%20%20%20%20timeseriesData(slug%3A%22santiment%22%2C%20from%3A%222019-01-01T00%3A00%3A00Z%22%2C%20to%3A%222019-09-01T00%3A00%3A00Z%22%2C%20interval%3A%227d%22)%20%7B%0A%20%20%20%20%20%20datetime%0A%20%20%20%20%20%20value%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A>)**
