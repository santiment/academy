---
title: Social Data
author: Ivan Klimuk
date: 2020-04-09
---

## Definition

By **Social data** we consider a set of crypto related discussions from the
internet that we collect and store in the form of text documents. It includes
chat conversations, forum posts and comments, tweets and other pieces of text
(usually pretty short). In addition to the text itself we also store some
metadata that depends on the data source: user_id, hashtags, chat_title, etc.
The **Social data** serves as a base layer for various statistics and metrics
that we build on top of it.

## How the data is being collected

We have a custom data scraper for each of the data sources we track. The
scrapers collect all the new incoming messages/posts/comments/etc in real-time.
For almost all of the sources we also have a historical scraper that allows to
fetch historical text data from the past. We store the data in a NOSQL database
which allows us to run full-text search queries on top of it very fast.

## Available Assets

For each of the data sources we have a curated list of accounts/sub-sources from
where we scrape the data. We collect all the available text documents and don't
separate the incoming data by assets. I.e. the metrics we build on top of the
social data are theoretically available for **any asset** (although in fact for
projects with a small market capitalization the level of conversation around
them is usually very low).

## Available data sources

1. **Professional traders chat**

This chat is hidden from search engines and usually has over 500 professional
traders chatting every day about the state of the crypto market.

**Latency**: All the messages are collected in real-time (1-2s delay max.)

**History**: The historical data starts at `2018-02-09`.

**Availability**: Used in all of our social metrics.

2. **Telegram**

We track a curated list with over 300 crypto related Telegram chats. For each
of them we have the full history of the chat.

**Latency**. All the messages are collected in real-time (1-2s delay max.)

**History**. Each chat has it's full historical data; the oldest chat starts
at `2016-03-29`.

**Availability**: Used in all of our social metrics.

3. **Twitter**

We track a curated list with over 500 crypto related Twitter accounts. For
each of them we collect their tweets, their retweets and all the replies to
their tweets.

**Latency**: All the tweets are collected in real-time (1-2s delay max.)

**History**: The historical data starts at `2018-02-13`.

**Availability**: Currently only available through our experimental platform
[https://graphs.santiment.net/social](https://graphs.santiment.net/social).

4. **Reddit**

We track a curated list with over 350 crypto related subreddits. For each of
them we collect the posts themselves, as well as all the comments to these
posts.

**Latency**: All the posts and comments are collected in real-time (1-2s delay
max.)

**History**: The historical data starts at `2016-01-01`.

**Availability**: Data is currently only included in parts of Sanbase
([https://app.santiment.net/labs/trends/explore/bullrun](https://app.santiment.net/labs/trends/explore/bullrun))
and Sandata, as well as our experimental platform
[https://graphs.santiment.net/social](https://graphs.santiment.net/social).

5. **Discord**

We track a curated list with over 30 crypto related servers. For each of them
we collect the messages from all the public chats on the given server.

**Latency**: All the messages are collected in real-time (1-2s delay max.)

**History**: The historical data starts at `2016-05-21`.

**Availability**: Used in all of our social metrics.

6. **Bitcointalk**

We collect all the new public posts from
[bitcointalk.org](https://bitcointalk.org). We also have the full historical
data for the whole forum.

**Latency**: The scraper goes through all the new messages once per 10
seconds.

**History**: we have collected the full forum history, starting from
`2009-11-22`.

**Availability**: Currently only available through our experimental platform
[https://graphs.santiment.net/](https://graphs.santiment.net/).
