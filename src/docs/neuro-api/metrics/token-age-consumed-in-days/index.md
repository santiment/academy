---
title: Average Token Age Consumed in Days
author: Santiment Team
# References
#

---

Fetch the average number of days that tokens were idle before being
moved on the given date. Tokens are referred to by the unique identifier
(slug) of their project.

While Token Age Consumed measures the 'idleness' in blocks created, this
graph does it in days passed since the last time said token moved.

This metric is calculated daily, so the interval should be selected
accordingly.

Choosing higher intervals returns the mean over the interval.

[**Run in
explorer**](https://api.santiment.net/graphiql?query=%7B%0A%20%20averageTokenAgeConsumedInDays(from%3A%20%222019-05-09T11%3A25%3A04.894Z%22%2C%20interval%3A%20%221d%22%2C%20slug%3A%20%22ethereum%22%2C%20to%3A%20%222019-06-23T11%3A25%3A04.894Z%22)%20%7B%0A%20%20%20%20tokenAge%0A%20%20%20%20datetime%0A%20%20%7D%0A%7D%0A&variables=)

```js
{
  averageTokenAgeConsumedInDays(from: "2019-05-09T11:25:04.894Z", interval: "1d", slug: "ethereum", to: "2019-06-23T11:25:04.894Z") {
    tokenAge
    datetime
  }
}
```
**Run in terminal**

```sh
curl \
  -X POST \
  -H "Content-Type: application/json" \
  --data '{ "query": "query{averageTokenAgeConsumedInDays(from:\"2019-05-09T11:25:04.894Z\",interval:\"1d\",slug:\"ethereum\",to:\"2019-06-23T11:25:04.894Z\"){tokenAge,datetime}}" }' \
  https://api.santiment.net/graphql
```
