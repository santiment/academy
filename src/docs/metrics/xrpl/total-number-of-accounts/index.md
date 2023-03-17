---
title: Total number of accounts
author: Boris
date: 2023-03-13
description: Amount of accounts on-chain.
---

## Description

The total number of accounts is computed by summing all holder distribution metrics. Holder distribution metrics are computed on top of balances table.

First the balance table is transformed in such a way that we create two rows from each balance change. This row represents a transfer of 28 XRP tokens. The initial version of the balance table is following:

```sql
dt:               2013-01-31 17:37:20
balance:          2
oldDt:            ᴺᵁᴸᴸ
oldBalance:       30
issuerCurrency:   rhdAw3LiEfWWmSrbnZG3udsN7PoWKT56Qo/EUR
```

It is being transformed into:

```sql
sign:             -1
dt:               2013-01-31 17:37:20
amount:           30
oldDt:            ᴺᵁᴸᴸ
issuerCurrency:   rhdAw3LiEfWWmSrbnZG3udsN7PoWKT56Qo/EUR

sign:             1
dt:               2013-01-31 17:37:20
amount:           2
oldDt:            2013-01-31 17:37:20
issuerCurrency:   rhdAw3LiEfWWmSrbnZG3udsN7PoWKT56Qo/EUR
```

With those two rows, it is easy to compute delta changes for all holder distributions. Delta change for 10-100 metric will be -1, while delta change for 1-10 will be 1.
Lastly, to compute the final metric of holder distributions we have to perform cumulative sum on top of all these delta changes for each holder distribution metric group.

---

## Access

[Free Access](/metrics/details/access#free-access)

---

## Measuring Unit

Amount of accounts

---

## Data Type

[Timeseries Data](/metrics/details/data-type#timeseries-data)

---

## Frequency

[Daily frequency](/metrics/details/frequency/#daily-frequency)

---

## Latency

[On-Chain Latency](/metrics/details/latency#on-chain-latency)

---

## Available Assets

Available for [these assets](https://api.santiment.net/graphiql?variables=&query=%7B%0A%20%20getMetric(metric%3A%20%22holders_distribution_all%22)%20%7B%0A%20%20%20%20metadata%20%7B%0A%20%20%20%20%20%20availableSlugs%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A)

---

### SanAPI

Available under the `holders_distribution_all` name.

```graphql
{
  getMetric(metric: "holders_distribution_all") {
  }
}
```

[**Run in Explorer**]()
