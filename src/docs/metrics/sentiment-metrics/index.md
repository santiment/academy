---
title: Sentiment metrics 
author: Santiment Team 
date: 2024-04-05
---


## Our Sentiment Metrics

<Resource>
- [Positive/Negative Sentiment](/metrics/sentiment-metrics/positive-negative-sentiment-metrics) - Shows how many mentions of a term/asset are expressed in a
positive/negative manner.
- [Sentiment Balance](/metrics/sentiment-metrics/positive-negative-sentiment-metrics) - The difference between Positive Sentiment and Negative Sentiment 
- [Sentiment Weighted](/metrics/sentiment-metrics/weighted-sentiment-metrics) - An improved version of the Sentiment Balance that adjusts the values by considering the number of mentions, standardizing data to make diverse asset sentiments comparable. 
</Resource>

## What is Sentiment?

**Sentiment** is the attitude, thought or judgement that people have which is
based on their feelings.

**Positive sentiment** is an attitude that is hopeful, confident, and considering
of the good aspects of a situation or a subject. In the context of cryptocurrencies
this can manifest as optimism about the future of a coin, hope that the price will
increase, belief in the success of a token, and many more.

**Negative sentiment** is an attitude that is critical, disapproving, and
considering of the bad aspects of a situation or a subject. In the context of
cryptocurrencies this can manifest as expressing the opinion that a token is a scam,
belief that a coin will fail, and many more.

**Sentiment Analysis** is the problem of computationally identifying and
categorizing emotions, opinions and subjective information in a given piece of
text.


<Notebox type="note">
Please note that metrics may undergo changes in historical values due to
automated recalculations triggered monthly. We constantly update our labels
which helps us to keep labels as fresh as possible but result historical data
changes. Any modifications to labels, social sources, or relevant jobs will
prompt recalculation for the previous month's data. Within a 12 hour period,
metric can be supplemented with new data.
</Notebox>

## Sentiment Score

We trained a machine learning model on a large Twitter dataset that contains
over 1.6 million tweets, each labelled as either **positive** or **negative**. 
The model is then used to evaluate the sentiment of each single document in the
[Social Data](/metrics/details/social-data) set $-$ it assigns a positive and negative
**sentiment score** to each message/post/comment/etc. 

The score is the probability that the content of the text is positive or
negative respectively. Therefore both the **positive** and **negative** sentiment
scores fall in a range between 0 (not positive/negative at all) and 1 (extremely
positive/negative). Moreover, the sum of these two scores always equals 1.

Example:

> I'm really excited about the new Libra currency!

This message has a **positive** score of **0.75** and a **negative** score of
**0.25**.

We use this approach for messages and comments from social networks
conversations because the structure of the text there is usually more or less
the same: short messages with a single and/or simple idea behind them.

But this is not the case for all the messages: some of them might be long and
complicated, some might be just neutral or contain spam or other irrelevant
information. These kind of messages usually have a pretty vanished pair of
sentiment scores: both **positive** and **negative** scores are close to 0.5.
We don't include these kind of messages while calculating the **Sentiment
Metrics**: they are filtered out by a certain threshold.

## Metrics Calculation

To ensure relevance and accuracy, only text with a sentiment score above a
certain threshold is considered in our sentiment metrics. This approach filters
out neutral, spam, or irrelevant messages, focusing on the most impactful data.
Our sentiment metrics are recalculated monthly to account for any changes in
our models or data sources, providing you with the most up-to-date insights.

## Full list of metrics

The full list of Sentiment metrics is:

<Details>

<Summary>Open Metrics List</Summary>

- sentiment_balance_4chan
- sentiment_balance_bitcointalk
- sentiment_balance_total_change_1d
- sentiment_balance_total_change_30d
- sentiment_balance_total_change_7d
- sentiment_balance_twitter
- sentiment_balance_twitter_crypto
- sentiment_balance_twitter_news
- sentiment_balance_twitter_nft
- sentiment_balance_telegram
- sentiment_balance_reddit
- sentiment_balance_youtube_videos
- sentiment_negative_4chan
- sentiment_negative_bitcointalk
- sentiment_negative_reddit
- sentiment_negative_telegram
- sentiment_negative_twitter
- sentiment_negative_twitter_crypto
- sentiment_negative_twitter_news
- sentiment_negative_twitter_nft
- sentiment_negative_youtube_videos
- sentiment_positive_4chan
- sentiment_positive_bitcointalk
- sentiment_positive_reddit
- sentiment_positive_telegram
- sentiment_positive_twitter
- sentiment_positive_twitter_crypto
- sentiment_positive_twitter_news
- sentiment_positive_twitter_nft
- sentiment_positive_youtube_videos
- sentiment_volume_consumed_4chan
- sentiment_volume_consumed_bitcointalk
- sentiment_volume_consumed_reddit
- sentiment_volume_consumed_telegram
- sentiment_volume_consumed_twitter
- sentiment_volume_consumed_twitter_crypto
- sentiment_volume_consumed_twitter_news
- sentiment_volume_consumed_twitter_nft
- sentiment_volume_consumed_youtube_videos
- sentiment_volume_consumed_total_change_1d
- sentiment_volume_consumed_total_change_30d
- sentiment_volume_consumed_total_change_7d

</Details>