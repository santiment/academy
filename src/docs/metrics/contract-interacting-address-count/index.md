---
title: Interacting Address Count
author: Yury
date: 2022-04-21
description: Get interacting address count for a chain address / contract
---

## Definition

Get interacting address count for a chain address / contract

![Example of usage **interacting address count** on Sanbase](conract_interacting_address.png)

---

## Access

[Free Access](/metrics/details/access#free-access)

---

## API

Available under the `contract_interacting_addresses_count` name:

```graphql
query getMetric($metric: String!, $from: DateTime!, $to: DateTime!, $interval: interval, $transform: TimeseriesMetricTransformInputObject, $aggregation: Aggregation, $address: String, $includeIncompleteData: Boolean = true) {
  getMetric(metric: $metric) {
    timeseriesData(selector: {contractAddress: $address}, from: $from, to: $to, interval: $interval, transform: $transform, aggregation: $aggregation, includeIncompleteData: $includeIncompleteData) {
      d: datetime
      v: value
    }
  }
}
```

Query variables:
```json
{
  "address": "0x857086e5e3dc7bbc98edb1639b4ffd96a667d75a",
  "from": "2021-10-21T18:59:59.999Z",
  "interval": "4h",
  "metric": "contract_interacting_addresses_count",
  "to": "2022-04-21T18:59:59.999Z"
}
```

[**Run in explorer**](https://api.santiment.net/graphiql?query=query%20getMetric(%24metric%3A%20String!%2C%20%24from%3A%20DateTime!%2C%20%24to%3A%20DateTime!%2C%20%24interval%3A%20interval%2C%20%24transform%3A%20TimeseriesMetricTransformInputObject%2C%20%24aggregation%3A%20Aggregation%2C%20%24address%3A%20String%2C%20%24includeIncompleteData%3A%20Boolean%20%3D%20true)%20%7B%0A%20%20getMetric(metric%3A%20%24metric)%20%7B%0A%20%20%20%20timeseriesData(selector%3A%20%7BcontractAddress%3A%20%24address%7D%2C%20from%3A%20%24from%2C%20to%3A%20%24to%2C%20interval%3A%20%24interval%2C%20transform%3A%20%24transform%2C%20aggregation%3A%20%24aggregation%2C%20includeIncompleteData%3A%20%24includeIncompleteData)%20%7B%0A%20%20%20%20%20%20d%3A%20datetime%0A%20%20%20%20%20%20v%3A%20value%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A&variables=%7B%0A%20%20%22metric%22%3A%22contract_interacting_addresses_count%22%2C%0A%20%20%22from%22%3A%222021-10-21T18%3A59%3A59.999Z%22%2C%0A%20%20%22to%22%3A%222022-04-21T18%3A59%3A59.999Z%22%2C%0A%20%20%22interval%22%3A%224h%22%2C%0A%20%20%22address%22%3A%220x857086e5e3dc7bbc98edb1639b4ffd96a667d75a%22%0A%7D)
