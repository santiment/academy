---
title: Sentiment Metrics
author: Ivan Klimuk
date: 2019-09-30
# REF metrics-hub/metricshub/sentiment_positive.py
# REF metrics-hub/metricshub/sentiment_negative.py
# REF metrics-hub/metricshub/sentiment_balance.py
# REF metrics-hub/metricshub/sentiment_volume_consumed.py
---

## Sentiment Analysis

### Definition

The sentiment metrics are build on top of the [Social Data](/metrics/details/social-data)

**Sentiment Analysis** is the problem of computationally identifying and
categorizing emotions, opinions and subjective information in a given piece of
text. This problem can be solved using different techniques: rule-based or
machine learning. The first one represents a set of predefined rules that are
used to estimate the sentiment of the input text. This approach is often less
accurate and requires a lot of manual work. The amount of documents in our
[Social Data](/metrics/social-data) storage makes it barely impossible to
analyze them manually. That's why we use machine learning to approach the
sentiment analysis problem.

### Sentiment Score

We trained a machine learning model on a large Twitter dataset, that contains
over 1.6 million tweets, each labelled as either _positive_ or _negative_. This
model is then used to evaluate the sentiment of each single document in the
[Social Data](/metrics/social-data) set, i.e. it assigns a positive and negative
_sentiment score_ to each message/post/comment/etc. These scores are
probabilities that the content of the text being analyzed is positive or
negative respectively. Therefore both the _positive_ and _negative_ sentiment
scores fall in a range between 0 (not positive/negative at all) and 1 (extremely
positive/negative). Moreover, the sum of these two scores always equals 1.

Example:

```
I'm really excited about the new Libra currency!
```

This message has a _positive_ score of **0.75** and a _negative_ score of
**0.25**.

We use this approach for messages and comments from social networks
conversations because the structure of the text there is usually more or less
the same: short messages with a single and/or simple idea behind them. But this
is not the case for all the messages: some of them might be long and
complicated, some might be just neutral or contain spam or other irrelevant
information. These kind of messages usually have a pretty vanished pair of
sentiment scores: both _positive_ and _negative_ scores are close to 0.5. We
don't include these kind of messages while calculating the **Sentiment
Metrics**: they are filtered out by a certain threshold.

## Sentiment Metrics

### 1. Positive (Negative) Sentiment

#### Definition

The total sum of _positive_ (_negative_) [sentiment scores](#sentiment-score) of
a given set of documents over time. Only scores that are equal or higher than
0.7 are taken into account. Can be calculated for a certain asset or for any
given search term, similar to the [social
volume](/social-volume-metrics/#social-volume).

#### Measuring Unit

Relative number, less or equal than the corresponding social volume.

#### Frequency

We store each of the [social
data](https://acadey.santiment.net/metrics/social-data) documents with its
absolute timestamp. I.e. it is possible to aggregate the data with **any desired
interval** [on request](products-and-plans/access-plans/). Currently the time
intervals we use are the following:

- In [Sanbase Graphs](https://graphs.santiment.net/social): `6h`, `12h`, `1d`.

#### Latency

The [sentiment scores](#sentiment-score) are calculated every 5 minutes. Taking
into account that the [social data](/metrics/social-data) itself is
quasi-realtime, the maximal latency is 5 minutes.

#### Available Assets

We do not separate or filter the [social data](/metrics/social-data/) being
collected by assets. I.e. we can calculate this metric for any asset. More on
this can be found [here](/metrics/social-volume-metrics/#available-assets).

#### How to Access

##### [Sanbase Graphs](https://graphs.santiment.net/social)

The metric is available **for any selected asset**.

#### Availability

|                | Free | Basic | Pro                | Premium            | Enterprise         |
| -------------- | ---- | ----- | ------------------ | ------------------ | ------------------ |
| Sanbase        | :x:  | :x:   | :x:                | :x:                | :x:                |
| Sanbase Graphs | :x:  | :x:   | :white_check_mark: | :white_check_mark: | :white_check_mark: |
| SanAPI         | :x:  | :x:   | :x:                | :x:                | :x:                |
| Sansheets      | :x:  | :x:   | :x:                | :x:                | :x:                |

### 2. Sentiment Balance

#### Definition

The difference between the **Positive** and **Negative Sentiment**
[metrics](#positive-negative-sentiment).

#### Measuring Unit

Relative number. This metric falls in the range `[-social_volume, +social_volume]` where `social_volume` is the corresponding social volume.

#### Frequency

Same as [**Positive (Negative) Sentiment**](#positive-negative-sentiment).

#### Latency

Same as [**Positive (Negative) Sentiment**](#positive-negative-sentiment).

#### Available Assets

Same as [**Positive (Negative) Sentiment**](#positive-negative-sentiment).

#### How to Access

##### [Sanbase Graphs](https://graphs.santiment.net/social)

The metric is available **for any selected asset**.

#### Availability

|                | Free | Basic | Pro                | Premium            | Enterprise         |
| -------------- | ---- | ----- | ------------------ | ------------------ | ------------------ |
| Sanbase        | :x:  | :x:   | :x:                | :x:                | :x:                |
| Sanbase Graphs | :x:  | :x:   | :white_check_mark: | :white_check_mark: | :white_check_mark: |
| SanAPI         | :x:  | :x:   | :x:                | :x:                | :x:                |
| Sansheets      | :x:  | :x:   | :x:                | :x:                | :x:                |

### 3. Sentiment Volume Consumed

#### Definition

The **Sentiment Volume Consumed** is an improved version of the [Sentiment
Balance](#sentiment-balance) that also takes into account the [Unique Social
Volume](/metrics/social-volume-metrics/#unique-social-volume).

**Sentiment Volume Consumed** is defined as a rolling Z-score of $X =
\mathrm{Unique Social Volume} \times \mathrm{Sentiment Balance}$.

More precisely we choose a duration $d$ which will be the length of our sliding
window. Then for any timestamp $t$ we consider the population $X(t,d)$
consisting of all values of $X(t')$ for all timestamps $t'$ between $t-d$ and
$t$. If we use $\mu$ and $\sigma$ to denote mean and standard deviation, then we
define **Sentiment Volume Consumed** as:

$$
SentimentVolumeConsumed(t,d) = \frac{X(t) - \mu(X(t,d))}{\sigma(X(t,d))}
$$

Intuitively this score can be explained as a _social-volume-weighted sentiment
balance_. I.e. this metric will spike when the social volume is really high and
the vast majority of the messages in it are very positive at the same time. Dips
will occur when the social volume again is high, but the overall sentiment is
negative. In case the volume is high but the sentiment is mixed, or the
sentiment has a strong positive (negative) polarity but with a low volume, the
**Sentiment Volume Consumed** metric won't have significant changes and will
stay around 0.

#### Measuring Unit

Relative number. Theoretically this metric has no lower or upper limit, but
normally it lies in the range of `[-3, 3]`. Values from outside this range
indicate that something abnormal is happening.

#### Frequency

Same as [**Positive (Negative) Sentiment**](#positive-negative-sentiment).

#### Latency

Same as [**Positive (Negative) Sentiment**](#positive-negative-sentiment).

#### Available Assets

Same as [**Positive (Negative) Sentiment**](#positive-negative-sentiment).

#### How to Access

##### [Sanbase Graphs](https://graphs.santiment.net/social)

The metric is available **for any selected asset**.

#### Availability

|                | Free | Basic | Pro                | Premium            | Enterprise         |
| -------------- | ---- | ----- | ------------------ | ------------------ | ------------------ |
| Sanbase        | :x:  | :x:   | :x:                | :x:                | :x:                |
| Sanbase Graphs | :x:  | :x:   | :white_check_mark: | :white_check_mark: | :white_check_mark: |
| SanAPI         | :x:  | :x:   | :x:                | :x:                | :x:                |
| Sansheets      | :x:  | :x:   | :x:                | :x:                | :x:                |
