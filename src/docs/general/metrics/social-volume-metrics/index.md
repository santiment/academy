---
title: Social volume metrics
author: Ivan Klimuk
date: 2019-09-19
# REF metrics-hub/metricshub/social_volume.py
# REF metrics-hub/metricshub/unique_social_volume.py
# REF metrics-hub/metricshub/spam_index.py
# REF metrics-hub/metricshub/social_dominance.py
---

## 1. Social Volume

### Definition

The total number of text documents that contain the given search term at least once. The search term can be one particular word (`bitcoin`), an exact phrase (`"when moon"`) or a combination of words, that are combined using binary set operations:

- `OR` - the union of two search results.

- `AND` - the intersection of two search results.

- `NOT` - the complement of a set with search results for a given word.

E.g. this could be a valid complex search query: `(btc OR bitcoin) AND moon NOT lambo` - it will result in all the documents that contain either the words `btc` and `moon` or `bitcoin` and `moon` in one document, excluding any documents that contain the word `lambo`.

### Measuring Unit

Amount of documents (messages, posts, comments, etc).

### Frequency

We store each of the [social data](/general/metrics/social-data/) documents with its absolute timestamp. I.e. it is possible to aggregate the data with **any desired interval** [on request](/general/products-and-plans/access-plans/). Currently the time intervals we use are the following:

- In [Sanbase Graphs](https://graphs.santiment.net/social): `6h`, `12h`, `1d`.

### Latency

The latency of **Social Volume** depends on the latency of the documents from each [data source](/general/metrics/social-data/). Real-time social data means that the volume calculated on top of this data is also real-time (max. 1-2 seconds).

### Available Assets

We do not separate or filter the [social data](/general/metrics/social-data/) being collected by assets. I.e. we can have the social volume for any asset.

By default we use an auto-generated search query to track the volume of mentions for each project, e.g.: `btc OR bitcoin NOT cash NOT gold NOT abc ...etc`. These queries can be manually modified by our admins to exclude redundant results or include some additional word to the query if necessary.

### How to Access

#### [Sanbase](https://app.santiment.net)

The metric is available on Sanbase:

- on our charts **for any selected asset**:
<iframe frameborder="0" height="340" src="https://app.santiment.net/chart?metrics=historyPrice,socialVolume&projectId=57&slug=ethereum&timeRange=6m&title=Ethereum%20%28ETH%29&to=2019-09-19T21%3A00%3A00.000Z"></iframe>

- in the [Labs](https://app.santiment.net/labs/trends) section for **any desired search query**.

#### [Sanbase Graphs](https://graphs.santiment.net/social)

The metric is available **for any selected asset**.

#### [SanAPI](https://neuro.santiment.net/)

The metric is available on SanAPI.

#### [Sansheets](https://sheets.santiment.net/)

The metric is available on Sansheets.

### Availability

||Free|Basic|Pro|Premium|Enterprise|
|---|---|---|---|---|---|
|Sanbase|:white_check_mark:|:white_check_mark:|:white_check_mark:|:white_check_mark:|:white_check_mark:|
|Sanbase Graphs|:x:|:x:|:white_check_mark:|:white_check_mark:|:white_check_mark:|
|SanAPI|:white_check_mark:|:white_check_mark:|:white_check_mark:|:white_check_mark:|:white_check_mark:|
|Sansheets|:white_check_mark:|:white_check_mark:|:white_check_mark:|:white_check_mark:|:white_check_mark:|

## 2. Unique Social Volume

### Definition

The **Unique Social Volume** is the same type of aggregation on top of the social data as the **Social Volume**, but it takes into account only the unique text documents for each interval. I.e. completely duplicated messages will be excluded from the calculations, which results in a slightly lower and to some degree cleaner way to measure the volume of mentions for a given asset or word.

### Measuring Unit

Amount of distinct documents (messages, posts, comments, etc).

### Frequency

Same as [**Social Volume**](#social-volume).

### Latency

Same as [**Social Volume**](#social-volume).

### Available Assets

Same as [**Social Volume**](#social-volume).

### How to Access

#### [Sanbase Graphs](https://graphs.santiment.net/social)

The metric is available **for any selected asset**.

### Availability

||Free|Basic|Pro|Premium|Enterprise|
|---|---|---|---|---|---|
|Sanbase|:x:|:x:|:x:|:x:|:x:|
|Sanbase Graphs|:x:|:x:|:white_check_mark:|:white_check_mark:|:white_check_mark:|
|SanAPI|:x:|:x:|:x:|:x:|:x:|
|Sansheets|:x:|:x:|:x:|:x:|:x:|

## 3. Spam Index

### Definition

The **Spam Index** is the ratio between the **Social Volume** and the **Unique Social Volume**. If the social data didn't contain any duplicated texts, the spam index would be always equal to 1. In fact it's not and the number indicates how many of the documents in the social volume are duplicates.

### Measuring Unit

Relative number, greater or equal than 1.

### Frequency

Same as [**Social Volume**](#social-volume).

### Latency

Same as [**Social Volume**](#social-volume).

### Available Assets

Same as [**Social Volume**](#social-volume).

### How to Access

#### [Sanbase Graphs](https://graphs.santiment.net/social)

The metric is available **for any selected asset**.

### Availability

||Free|Basic|Pro|Premium|Enterprise|
|---|---|---|---|---|---|
|Sanbase|:x:|:x:|:x:|:x:|:x:|
|Sanbase Graphs|:x:|:x:|:white_check_mark:|:white_check_mark:|:white_check_mark:|
|SanAPI|:x:|:x:|:x:|:x:|:x:|
|Sansheets|:x:|:x:|:x:|:x:|:x:|

## 4. Relative Social Dominance

### Definition

The **Relative Social Dominance** (or Social Dominance) for a given asset is the ratio of the **Social Volume** of this asset in comparison to the sum of social volumes for a set of selected assets (by default it's top 50 by market capitalization). E.g. when on a given day the **Social Dominance** of `Ethereum` reaches 23%, this can be explained as _"From all the messages that mentioned any of the top 50 assets, 23% mentioned Ethereum"_.

### Measuring Unit

Relative number from 0 to 1 (or %, from 0 to 100).

### Frequency

Same as [**Social Volume**](#social-volume).

### Latency

Same as [**Social Volume**](#social-volume).

### Available Assets

Same as [**Social Volume**](#social-volume).

By default the **Social Dominance** for a given asset is calculated against the top 50 assets by market capitalization.

### How to Access

#### [Sanbase](https://app.santiment.net)

The metric is available on Sanbase on our charts **for any selected asset**:
<iframe frameborder="0" height="340" src="https://app.santiment.net/chart?enabledViewOnlySharing=true&from=2019-03-18T21%3A00%3A00.000Z&interval=1d&isShowAnomalies=true&metrics=historyPrice,socialDominance&projectId=1538&slug=bitcoin&timeRange=6m&title=Bitcoin%20%28BTC%29&to=2019-09-19T21%3A00%3A00.000Z"></iframe>

#### [Sanbase Graphs](https://graphs.santiment.net/social)

The metric is available **for any selected asset**.

### Availability

||Free|Basic|Pro|Premium|Enterprise|
|---|---|---|---|---|---|
|Sanbase|:white_check_mark:|:white_check_mark:|:white_check_mark:|:white_check_mark:|:white_check_mark:|
|Sanbase Graphs|:x:|:x:|:white_check_mark:|:white_check_mark:|:white_check_mark:|
|SanAPI|:white_check_mark:|:white_check_mark:|:white_check_mark:|:white_check_mark:|:white_check_mark:|
|Sansheets|:white_check_mark:|:white_check_mark:|:white_check_mark:|:white_check_mark:|:white_check_mark:|
