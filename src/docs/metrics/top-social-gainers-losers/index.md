---
title: Top Social Gainers / Losers metric
author: Santiment Team
---

## Definition

This returns the projects that have gained or lost the most Social
Volume over the given time window.

---

## Measuring Unit

The change is measured in absolute social volume difference

---

## Access

---

## Data Type

[Timeseries Data](/metrics/details/data-type#timeseries-data)

---

## Frequency

[Hourly Intervals](/metrics/details/frequency#hourly-frequency)

---

## Latency

[Social Data latency](/metrics/details/latency#social-data-latency)

---

## SanAPI

The metric is fetched with the `topSocialGainersLosers` query.

Arguments description:

- _`status`_ - one of the following (these are not Strings!):

  - `ALL - shows all of the below
  - `GAINER` - shows only top gainers
  - `LOSER` - shows only top losers
  - `NEWCOMER` - show projects that had no social volume before

- _`timeWindow`_ - number of days that are taken into account, between
  `"2d"` and `"30d"`
- _`size`_ - the length of the Trending Words list
- _`from`_ - a string representation of datetime value according to the
  iso8601 standard, e.g. `"2018-04-16T10:02:19Z"`
- _`to`_ - a string representation of datetime value according to the
  iso8601 standard, e.g. `"2018-04-16T10:02:19Z"`

```graphql
{
  topSocialGainersLosers(
    from: "2019-05-09T11:25:04.894Z"
    to: "2019-06-23T11:25:04.894Z"
    size: 5
    status: ALL
    timeWindow: "2d"
  ) {
    datetime
    projects {
      slug
      status
      change
    }
  }
}
```

[**Run in
explorer**](<https://api.santiment.net/graphiql?variables=%7B%7D&query=%7B%0A%20%20topSocialGainersLosers(from%3A%20%222019-05-09T11%3A25%3A04.894Z%22%2C%20to%3A%20%222019-06-23T11%3A25%3A04.894Z%22%2C%20size%3A%205%2C%20status%3A%20ALL%2C%20timeWindow%3A%20%222d%22)%20%7B%0A%20%20%20%20datetime%0A%20%20%20%20projects%20%7B%0A%20%20%20%20%20%20slug%0A%20%20%20%20%20%20status%0A%20%20%20%20%20%20change%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A>)
