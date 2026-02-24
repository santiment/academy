---
title: Historical Balance
author: Yury
date: 2022-04-21
description: Metric returns historical balance for a chain address / contract
---

## Definition

This metric returns the historical balance for a chain address or contract.
[Example of usage of Historical Balance on Sanbase](https://app.santiment.net/labs/balance?address=0x876eabf441b2ee5b5b0554fd502a8e0600950cfa&assets[]=shiba-inu&from=2021-10-20T19%3A00%3A00.000Z&isLog=false&priceMetrics[]=shiba-inu&to=2022-04-21T18%3A59%3A59.999Z)

---

## Access

[Free Access](/metrics/details/access#free-access)

---

## Measuring Unit

Number of tokens

---

## Data Type

[Timeseries Data](/metrics/details/data-type#timeseries-data)

---

## Frequency

[Five-Minute Intervals](/metrics/details/frequency#five-minute-frequency)

---

## API

Available under the `historicalBalance` name:

```graphql
query historicalBalance($from: DateTime!, $to: DateTime!, $address: String!, $interval: interval!, $slug: String!, $infrastructure: String) {
  historicalBalance(
    address: $address
    interval: $interval
    from: $from
    to: $to
    selector: {slug: $slug, infrastructure: $infrastructure}
  ) {
    datetime
    balance
  }
}
```

Query variables:
```json
{
  "address": "0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d",
  "from": "2021-10-17T21:00:00.000Z",
  "interval": "4h",
  "metric": "historicalBalance",
  "slug": "weth",
  "to": "2022-04-18T20:59:59.999Z"
}
```

[**Run in explorer**](https://api.santiment.net/graphiql?query=query%20historicalBalance(%24from%3A%20DateTime!%2C%20%24to%3A%20DateTime!%2C%20%24address%3A%20String!%2C%20%24interval%3A%20interval!%2C%20%24slug%3A%20String!%2C%20%24infrastructure%3A%20String)%20%7B%0A%20%20historicalBalance(%0A%20%20%20%20address%3A%20%24address%0A%20%20%20%20interval%3A%20%24interval%0A%20%20%20%20from%3A%20%24from%0A%20%20%20%20to%3A%20%24to%0A%20%20%20%20selector%3A%20%7Bslug%3A%20%24slug%2C%20infrastructure%3A%20%24infrastructure%7D%0A%20%20)%20%7B%0A%20%20%20%20datetime%0A%20%20%20%20balance%0A%20%20%7D%0A%7D%0A&variables=%20%7B%0A%09%09%22address%22%3A%20%220xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d%22%2C%0A%09%09%22from%22%3A%20%222021-10-17T21%3A00%3A00.000Z%22%2C%0A%09%09%22interval%22%3A%20%224h%22%2C%0A%09%09%22metric%22%3A%20%22historicalBalance%22%2C%0A%09%09%22slug%22%3A%20%22weth%22%2C%0A%09%09%22to%22%3A%20%222022-04-18T20%3A59%3A59.999Z%22%0A%09%7D)
