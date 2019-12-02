---
title: Emerging trends
author: Ivan Klimuk
date: 2019-11-04
---

![Emerging trends on Sanbase](trends.png)

## Definition

The **Emerging trends** (or **Trending words**) is a list of words that describe the topics which *emerged* faster than any others over the last 24 hours. By "emerging" we mean getting more social attraction from the crowd, being discussed much more than any other topic.

We detect these words by computing the so called *hype score* for each single word that is present in the [social data](/general/metrics/social-data/) after filtering and cleaning the data. Once this number is calculated, the words are ranked according to the corresponding scores in a descending order. The top 10 words in the resulting list are the top emerging trends.

### Filtering and Cleaning

In order to reduce the level of noise, spam and duplicates while calculating the hype scores, we apply some preprocessing to the text data, namely:

1. Clean all the texts from [stopwords](https://en.wikipedia.org/wiki/Stop_words) and non-alphabetic characters.

2. Transform each pair ``(user_id, text_documents)`` to a [bag of words](https://en.wikipedia.org/wiki/Bag-of-words_model) representation and remove all the bag of words duplicates.

3. For all the text documents that have more than a certain amount of words in general (usually 5) - remove the exact duplicates (i.e. messages that look exactly the same are considered only once).

These steps help to make the approach robust to spam and multiple replications of the same word or short word combinations.

### Hype Score

After the processing is done, for each of the words we calculate the **hype score** (or **trend score**). For any timestamp $t$ we define the hype score as follows:

$$
HypeScore(t) := \frac{(v_t^n - \frac{1}{14} \sum_{i=t-15}^{t-1} v_i^n) * v_t^n * \log_{10} u_t}{1 + \frac{1}{14} \sum_{i=t-15}^{t-1} v_i^n}
$$

where:

- $v_i^n$ is the *normalized* social volume of the word at the moment $i$ (i.e. the usual [social volume](/general/metrics/social-volume-metrics/#social-volume) divided by the total amount of messages in that particular [data source](/general/metrics/social-data/)),

- $u_t$ is the total amount of unique users that have used the word under consideration at least once.

On an intuitive level the hype score tends to be a measuring of how rapidly the social volume of a certain word increased over the last 24 hours in comparison to the past 2 weeks. This is done by comparing the current social volume change to the average social volume of the past 14 days.

Additionally we multiply this factor by `log(unique_users)` - this way words with a high social volume and a relatively low amount of unique users, that mentioned it at least once, will have a smaller hype score. For example, if a given word was used many times by exactly one user (i.e. most probably it's heavy spam) this word will have a hype score of **0** thanks to the `log(unique_users)` component. On the other hand, words with 100 and 200 users will have more or less the same chance to get a higher hype score.

It's also worth noticing that we use the **normalized** social volume instead of the regular one. This makes it easier to compare the resulting hype score across different data sources with different average daily volumes of talks.

### Ranking the Words

Once the texts are cleaned and each word has it's hype score, we first rank the words in descending order (the highest hype score goes to the top) and then combine the results across different data sources if necessary: this is done by averaging the hype score for each word across all desired data sources and ranking the words afterwards again. In case a given word is present in source 1 and is not present in source 2 we assume that it's hype score in the second data source is 0.

## Measuring Unit

The [hype score](#hype-score) doesn't really have a qualitative meaning, it can be treated as a relative number: the higher it gets - the faster a given word is "emerging".

## Frequency

We compile the emerging trends lists every hour for the past 24 hours starting from the same moment of time.

**Notice:** since the time window is 24h and we recompute the list every hour, two different lists from the current hour and the previous hour might be pretty similar and have many words in common.

## Latency

Each data source is being processed separately and usually doesn't take longer than 1 minute. So on average the emerging trends are available after the first minute of every new hour.

## Available Assets

The algorithm takes into account all the [social data](/general/metrics/social-data/), so the list may or may not contain asset names and tickers. We do track the emerging projects separately for the assets only, but currently it is not available through any of the products.

## How to Access

### [Sanbase](https://app.santiment.net/labs/trends)

The emerging trends are available in the *`Labs`* section.

If any of the assets occurs in the emerging trends, this can be also spotted on the detailed charts of the assets:
<iframe frameborder="0" height="340" src="https://app.santiment.net/projects/ripple?enabledViewOnlySharing=true&events=trendPositionHistory&from=2019-05-05T21%3A00%3A00.000Z&interval=12h&isShowAnomalies=true&metrics=historyPrice,socialVolume&projectId=1540&scale=auto&slug=ripple&timeRange=6m&title=Ripple%20%28XRP%29&to=2019-11-06T21%3A00%3A00.000Z"></iframe>

### [SanAPI](https://neuro.santiment.net)

The emerging trends are available as part of the API, the metric is called `trendingWords`.

## Availability

||Free|Basic|Pro|Premium|Enterprise|
|---|---|---|---|---|---|
|Sanbase|:white_check_mark:|:white_check_mark:|:white_check_mark:|:white_check_mark:|:white_check_mark:|
|Sangraphs|:x:|:x:|:x:|:x:|:x:|
|SanAPI|:white_check_mark:|:white_check_mark:|:white_check_mark:|:white_check_mark:|:white_check_mark:|
|Sansheets|:x:|:x:|:x:|:x:|:x:|
