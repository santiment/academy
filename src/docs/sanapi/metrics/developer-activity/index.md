---
title: Neuro API - Developer Activity
author: Santiment Team
---

Returns a list of developer activity for a given slug and time interval.

Arguments description:

-   `interval` - an integer followed by one of: s, m, h, d or w
-   `transform` - one of the following:
      - *`None`* (default)
      - *`movingAverage`*
-   `movingAverageIntervalBase` - used only if transform is movingAverage.
    An integer followed by one of: `s`, `m`, `h`, `d` or `w`, representing time
    units. It is used to calculate the moving average interval.

[An article explaining our approach to tracking developer
activity](https://medium.com/santiment/tracking-github-activity-of-crypto-projects-introducing-a-better-approach-9fb1af3f1c32)

[**Run in
explorer**](https://api.santiment.net/graphiql?variables=%7B%7D&query=query%7BdevActivity(from%3A%222019-05-12T09%3A45%3A27.283Z%22%2Cinterval%3A%221d%22%2Cslug%3A%22santiment%22%2Cto%3A%222019-06-11T09%3A45%3A30.487053Z%22)%7Bactivity%2Cdatetime%7D%7D)

```js
{
  devActivity(from: "2019-05-12T09:45:27.283Z", interval: "1d", slug: "dragonchain", to: "2019-06-11T09:45:30.487053Z") {
    activity
    datetime
  }
}
```

**Run in terminal**

```sh
curl \
  -X POST \
  -H "Content-Type: application/json" \
  --data '{ "query": "query{devActivity(from:\"2019-05-12T09:45:27.283Z\",interval:\"1d\",slug:\"dragonchain\",to:\"2019-06-11T09:45:30.487053Z\"){activity,datetime}}" }' \
  https://api.santiment.net/graphql
```
