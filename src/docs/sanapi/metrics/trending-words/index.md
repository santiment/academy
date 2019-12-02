---
title: Neuro API - Trending Words
author: Santiment Team
---

This query returns a list of Trending Words and their corresponding
trend score. The trend score is calculated based on the current
frequency of use of each word compared to the usual frequency of use
(simplified).

Arguments description:

-   *`source`* - one of the following:

    - `PROFESSIONAL_TRADERS_CHAT_OVERVIEW` - shows how many times the
    given project has been mentioned in private trader chats
    - `TELEGRAM_CHATS_OVERVIEW` - shows how many times the given project
    has been mentioned across all telegram chats, except the project`s
    own community chat (if there is one)
    - `TELEGRAM_DISCUSSION_OVERVIEW` - the general volume of messages in
    the project`s community chat (if there is one)
    - `DISCORD_DISCUSSION_OVERVIEW` - shows how many times the given
    project has been mentioned in the discord channels
-   *`hour`* - based on this hour of the day the latest snapshot is chosen
-   *`size`* - the length of the Trending Words list
-   *`from`* - a string representation of datetime value according to the
    iso8601 standard, e.g. `"2018-04-16T10:02:19Z"`
-   *`to`* - a string representation of datetime value according to the
    iso8601 standard, e.g. `"2018-04-16T10:02:19Z"`

[**Run in
explorer**](https://api.santiment.net/graphiql?query=%7B%0A%20%20trendingWords(from%3A%20%222019-05-10T00%3A00%3A00.000Z%22%2C%20hour%3A%2013%2C%20size%3A%2015%2C%20source%3A%20ALL%2C%20to%3A%20%222019-06-23T00%3A00%3A00.000Z%22)%20%7B%0A%20%20%20%20datetime%0A%20%20%20%20topWords%20%7B%0A%20%20%20%20%20%20score%0A%20%20%20%20%20%20word%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A&variables=)

```js
{
  trendingWords(from: "2019-05-10T00:00:00.000Z", hour: 13, size: 15, source: ALL, to: "2019-06-23T00:00:00.000Z") {
    datetime
    topWords {
      score
      word
    }
  }
}
```

**Run in terminal**

```sh
curl \
  -X POST \
  -H "Content-Type: application/json" \
  --data '{ "query": "query{trendingWords(from:\"2019-05-10T00:00:00.000Z\",hour:13,size:15,slug:\"ethereum\",to:\"2019-06-23T00:00:00.000Z\"){datetime, topWords {score,word}}}" }' \
  https://api.santiment.net/graphql
```
