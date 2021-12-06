---
title: Social Data
author: Ivan Ivanov, Ivan Klimuk
date: 2021-11-2
---

## Definition

By **Social data**, we consider a set of crypto-related discussions from the
internet that we collect and store in the form of text documents. It includes
chat conversations, forum posts and comments, tweets, and other pieces of text
(usually pretty short). In addition to the text itself, we also store some
metadata that depends on the data source: user_id, hashtags, chat_title, etc.
The **Social data** serves as a base layer for various statistics and metrics
that we build on top of it.

## How the data is collected
We have a custom data scraper for each of the data sources we track. The
scrapers collect all the new incoming messages/posts/comments in real-time. We
also have a historical scraper to fetch historical text data from the past for
almost all sources. We store the data in a NoSQL database, which enables us to
run full-text search queries on top of it very fast.

## Available Assets

For each data source, we have a curated list of accounts/sub-sources from where
we scrape the data. We collect all the available text documents and don't
separate the incoming data by assets, i.e., the metrics we build on top of the
social data are theoretically available for **any asset** (although in fact, for
projects with a small market capitalization, the level of conversation around
them is usually very low).

## Available data sources

1. **Telegram**

    We track a curated list with over 300 crypto-related Telegram chats. For each
    of them, we have the entire history of the chat.

    **Latency**. We collect the messages in real-time (1-2s delay max.)

    **History**. Each chat has its complete historical data; the oldest discussion starts
    at `2016-03-29`.

    **Availability**: Used in all of our social metrics.

2. **Twitter**

    We track a curated list with over 500 crypto-related Twitter accounts. For
    each of them, we collect their tweets, their retweets, and all the replies to
    their tweets.

    **Latency**: We collect all the tweets in real-time. 

    **History**: The historical data starts at `2018-02-13`.

    **Availability**: Used in all of our social metrics.

3. **Reddit**

    We track a curated list with over 350 crypto-related subreddits. For each of
    them we collect the posts themselves, as well as all the comments to these
    posts.

    **Latency**: All the posts and comments are collected in real-time (1-2s delay
    max.)

    **History**: The historical data starts at `2016-01-01`.

    **Availability**: Data is currently only included in parts of Sanbase
    ([https://app.santiment.net/labs/trends/explore/bullrun](https://app.santiment.net/labs/trends/explore/bullrun)),
    as well as our experimental platform
    [https://graphs.santiment.net/social](https://graphs.santiment.net/social).

4. **Bitcointalk**

    We collect all the new public posts from
    [bitcointalk.org](https://bitcointalk.org). We also have the full historical
    data for the whole forum.

    **Latency**: The scraper goes through all the new messages once per 10 seconds.

    **History**: we have collected the entire forum history, starting from
    `2009-11-22`.

    **Availability**: Used in all of our social metrics.
