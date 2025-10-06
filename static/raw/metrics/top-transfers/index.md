---
title: Top Transfers
author: Yury
date: 2022-04-21
description: Get top transfers for a chain address
---

## Definition

Get top transfers for a chain address
[Example of usage **Top transfers** on Sanbase](https://app.santiment.net/labs/balance?address=0x876eabf441b2ee5b5b0554fd502a8e0600950cfa&assets[]=shiba-inu&from=2021-10-20T19%3A00%3A00.000Z&isLog=false&priceMetrics[]=shiba-inu&to=2022-04-21T18%3A59%3A59.999Z)

---

## Access

[Free Access](/metrics/details/access#free-access)

---

## API

Available under the `topTransfers` name:

```graphql
query topTransfers($addressSelector: AddressSelector, $from: DateTime!, $to: DateTime!, $slug: String!, $page: Int, $pageSize: Int = 20) {
  transactions: topTransfers(
    addressSelector: $addressSelector
    page: $page
    pageSize: $pageSize
    from: $from
    to: $to
    slug: $slug
  ) {
    datetime
    fromAddress {
      address
      labels {
        name
        origin
      }
    }
    toAddress {
      address
      labels {
        name
        origin
      }
    }
    trxValue
    trxHash
  }
}
```

Query variables:
```json
{
  "addressSelector": {
    "address": "0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d",
    "transactionType": "ALL"
  },
  "from": "2022-01-17T21:00:00.000Z",
  "infrastructure": "ETH",
  "page": 1,
  "pageSize": 20,
  "slug": "ethereum",
  "to": "2022-04-18T20:59:59.999Z"
}
```

[**Run in explorer**](https://api.santiment.net/graphiql?query=query%20topTransfers(%24addressSelector%3A%20AddressSelector%2C%20%24from%3A%20DateTime!%2C%20%24to%3A%20DateTime!%2C%20%24slug%3A%20String!%2C%20%24page%3A%20Int%2C%20%24pageSize%3A%20Int%20%3D%2020)%20%7B%0A%20%20transactions%3A%20topTransfers(%0A%20%20%20%20addressSelector%3A%20%24addressSelector%0A%20%20%20%20page%3A%20%24page%0A%20%20%20%20pageSize%3A%20%24pageSize%0A%20%20%20%20from%3A%20%24from%0A%20%20%20%20to%3A%20%24to%0A%20%20%20%20slug%3A%20%24slug%0A%20%20)%20%7B%0A%20%20%20%20datetime%0A%20%20%20%20fromAddress%20%7B%0A%20%20%20%20%20%20address%0A%20%20%20%20%20%20labels%20%7B%0A%20%20%20%20%20%20%20%20name%0A%20%20%20%20%20%20%20%20origin%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%20%20toAddress%20%7B%0A%20%20%20%20%20%20address%0A%20%20%20%20%20%20labels%20%7B%0A%20%20%20%20%20%20%20%20name%0A%20%20%20%20%20%20%20%20origin%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%20%20trxValue%0A%20%20%20%20trxHash%0A%20%20%7D%0A%7D%0A&variables=%20%7B%0A%09%09%22addressSelector%22%3A%20%7B%0A%09%09%09%22address%22%3A%20%220xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d%22%2C%0A%09%09%09%22transactionType%22%3A%20%22ALL%22%0A%09%09%7D%2C%0A%09%09%22from%22%3A%20%222022-01-17T21%3A00%3A00.000Z%22%2C%0A%09%09%22infrastructure%22%3A%20%22ETH%22%2C%0A%09%09%22page%22%3A%201%2C%0A%09%09%22pageSize%22%3A%2020%2C%0A%09%09%22slug%22%3A%20%22ethereum%22%2C%0A%09%09%22to%22%3A%20%222022-04-18T20%3A59%3A59.999Z%22%0A%09%7D)
