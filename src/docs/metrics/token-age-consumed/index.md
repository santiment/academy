---
title: Token Age Consumed metric
author: Santiment Team
---

*For a more in-depth explanation of `Token Age Consumed`, please
click* [*here*](https://community.santiment.net/t/token-age-consumed/27).



### SanAPI

[**Run in
explorer**](https://api.santiment.net/graphiql?variables=%7B%7D&query=%7B%0A%20%20tokenAgeConsumed(from%3A%20%222019-04-12T09%3A45%3A27.283Z%22%2C%20interval%3A%20%221d%22%2C%20slug%3A%20%22dragonchain%22%2C%20to%3A%20%222019-05-26T09%3A45%3A27.283Z%22)%20%7B%0A%20%20%20%20tokenAgeConsumed%0A%20%20%20%20datetime%0A%20%20%7D%0A%7D)

```js
{
  tokenAgeConsumed(from: "2019-04-12T09:45:27.283Z", interval: "1d", slug: "dragonchain", to: "2019-05-26T09:45:27.283Z") {
    tokenAgeConsumed
    datetime
  }
}
```

**Run in terminal**

```sh
curl \
  -X POST \
  -H "Content-Type: application/json" \
  --data '{ "query": "query{tokenAgeConsumed(from:\"2019-04-12T09:45:27.283Z\",interval:\"1d\",slug:\"dragonchain\",to:\"2019-05-26T09:45:27.283Z\"){tokenAgeConsumed,datetime}}" }' \
  https://api.santiment.net/graphql
```

### Sandata


This graph shows the amount of tokens changing addresses on a certain
date, multiplied by the number of blocks created on the blockchain since
they last moved.

Spikes on the graph signal a large amount of tokens moving after being
idle for an extended period of time.

One potential use case for this metric is identifying when big market
players exit the project post ICO. Let's look at an example:

![](8.png)

Here's the Token Age Consumed graph for [Golem](https://golem.network/),
an ERC-20 project that lets you rent other people's computing power.

We can easily spot several significant spikes over time: each could be a
large early investor selling their tokens, which commonly results in a
parallel price decline.

## Average Token Age Consumed in Days

Fetch the average number of days that tokens were idle before being
moved on the given date. Tokens are referred to by the unique identifier
(slug) of their project.

While Token Age Consumed measures the 'idleness' in blocks created, this
graph does it in days passed since the last time said token moved.

This metric is calculated daily, so the interval should be selected
accordingly.

Choosing higher intervals returns the mean over the interval.


*For a more in-depth explanation of `Average Token Age Consumed in Days`, please click* [*here*](https://community.santiment.net/t/average-token-age-consumed-in-days/411/2).


### SanAPI

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

