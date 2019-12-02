---
title: SanAPI - Daily Active Addresses
author: Santiment Team
---

Fetch daily active addresses for a project within a given time period.
Projects are referred to by a unique identifier (slug).

This metric includes the number of unique addresses that participated in
the transfers of given token during the day.

Grouping by interval works by taking the mean of all daily active
address records in the interval. The default value of the interval is 1
day, which yields the exact number of unique addresses for each day.

[**Run in
explorer**](https://api.santiment.net/graphiql?variables=%7B%7D&query=query%7BdailyActiveAddresses(from%3A%222019-05-09T11%3A25%3A04.894Z%22%2Cinterval%3A%221d%22%2Cslug%3A%22dragonchain%22%2Cto%3A%222019-06-23T11%3A25%3A04.894Z%22)%7BactiveAddresses%2Cdatetime%7D%7D)

```js
{
  dailyActiveAddresses(from: "2019-05-09T11:25:04.894Z", interval: "1d", slug: "dragonchain", to: "2019-06-23T11:25:04.894Z") {
    activeAddresses
    datetime
  }
}
```

**Run in terminal**

```sh
curl \
  -X POST \
  -H "Content-Type: application/json" \
  --data '{ "query": "query{dailyActiveAddresses(from:\"2019-05-09T11:25:04.894Z\",interval:\"1d\",slug:\"dragonchain\",to:\"2019-06-23T11:25:04.894Z\"){activeAddresses,datetime}}" }' \
  https://api.santiment.net/graphql
```
