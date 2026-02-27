---
title: Latest Transactions
author: Yury
date: 2022-04-21
description: Get latest transactions for a chain address
---

## Definition

Get the latest transactions for a chain address.
[Example of usage of **latest transactions** on Sanbase](https://app.santiment.net/labs/balance?address=0x876eabf441b2ee5b5b0554fd502a8e0600950cfa&assets[]=shiba-inu&from=2021-10-20T19%3A00%3A00.000Z&isLog=false&priceMetrics[]=shiba-inu&to=2022-04-21T18%3A59%3A59.999Z)

---

## Access

[Free Access](/metrics/details/access#free-access)

---

## API

Available under the `recentTransactions` name:

```graphql
query recentTransactions($address: String!, $page: Int, $pageSize: Int = 20) {
  transactions: recentTransactions(
    address: $address
    page: $page
    pageSize: $pageSize
    type: ERC20
    onlySender: false
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
    project {
      id
      ticker
      logoUrl
    }
  }
}
```

Query variables:
```json
{
  "address": "0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d",
  "infrastructure": "ETH",
  "page": 1,
  "pageSize": 20
}
```

[**Run in explorer**](https://api.santiment.net/graphiql?query=query%20recentTransactions(%24address%3A%20String!%2C%20%24page%3A%20Int%2C%20%24pageSize%3A%20Int%20%3D%2020)%20%7B%0A%20%20transactions%3A%20recentTransactions(%0A%20%20%20%20address%3A%20%24address%0A%20%20%20%20page%3A%20%24page%0A%20%20%20%20pageSize%3A%20%24pageSize%0A%20%20%20%20type%3A%20ERC20%0A%20%20%20%20onlySender%3A%20false%0A%20%20)%20%7B%0A%20%20%20%20datetime%0A%20%20%20%20fromAddress%20%7B%0A%20%20%20%20%20%20address%0A%20%20%20%20%20%20labels%20%7B%0A%20%20%20%20%20%20%20%20name%0A%20%20%20%20%20%20%20%20origin%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%20%20toAddress%20%7B%0A%20%20%20%20%20%20address%0A%20%20%20%20%20%20labels%20%7B%0A%20%20%20%20%20%20%20%20name%0A%20%20%20%20%20%20%20%20origin%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%20%20trxValue%0A%20%20%20%20trxHash%0A%20%20%20%20project%20%7B%0A%20%20%20%20%20%20id%0A%20%20%20%20%20%20ticker%0A%20%20%20%20%20%20logoUrl%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A&variables=%7B%0A%09%09%22address%22%3A%20%220xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d%22%2C%0A%09%09%22infrastructure%22%3A%20%22ETH%22%2C%0A%09%09%22page%22%3A%201%2C%0A%09%09%22pageSize%22%3A%2020%0A%09%7D)
