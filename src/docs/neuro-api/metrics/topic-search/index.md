---
title: Neuro API - Topic Search
author: Santiment Team
---

Returns lists with the mentions of the search phrase from the selected
source. The results are in two formats - the messages themselves and the
data for building graph representation of the result.

Arguments description:

-   *`source`* - one of the following:

    - `"PROFESSIONAL_TRADERS_CHAT_OVERVIEW"` - shows how many times the
    given project has been mentioned in private trader chats

    - `"TELEGRAM_CHATS_OVERVIEW"` - shows how many times the given project
    has been mentioned across all telegram chats, except the project`s
    own community chat (if there is one)

    - `"TELEGRAM_DISCUSSION_OVERVIEW"` - the general volume of messages in
    the project`s community chat (if there is one)

    - `"DISCORD_DISCUSSION_OVERVIEW"`- shows how many times the given
    project has been mentioned in the discord channels

-   *`searchText`* - a string containing the key words for which the
    sources should be searched.
-   *`interval`* - an integer followed by one of: `m`, `h`, `d`, `w`
-   *`from`* - a string representation of datetime value according to the
    iso8601 standard, e.g. `"2018-04-16T10:02:19Z"`
-   *`to`* - a string representation of datetime value according to the
    iso8601 standard, e.g. `"2018-04-16T10:02:19Z"`

[**Run in
explorer**](https://api.santiment.net/graphiql?variables=%7B%7D&query=query%7BtopicSearch(from%3A%222019-05-12T09%3A45%3A27.283Z%22%2Cinterval%3A%221d%22%2CsearchText%3A%22btc%20moon%22%2Csource%3ATELEGRAM%2Cto%3A%222019-06-26T09%3A45%3A27.283Z%22)%7BchartData%7Bdatetime%2CmentionsCount%7D%2Cmessages%7Bdatetime%2Ctext%7D%7D%7D)

```js
{
  topicSearch(from: "2019-05-12T09:45:27.283Z", interval: "1d", searchText: "btc moon", source: TELEGRAM, to: "2019-06-26T09:45:27.283Z") {
    chartData {
      datetime
      mentionsCount
    }
    messages {
      datetime
      text
    }
  }
}
```

**Run in terminal**

```sh
curl \
  -X POST \
  -H "Content-Type: application/json" \
  --data '{ "query": "query{topicSearch(from:\"2019-05-12T09:45:27.283Z\",interval:\"1d\",searchText:\"btc moon\",source:TELEGRAM,to:\"2019-06-26T09:45:27.283Z\"){chartData{datetime,mentionsCount},messages{datetime,text}}}" }' \
  https://api.santiment.net/graphql
```
