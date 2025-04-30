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

```graphql-explorer
query getMetric($metric: String!, $from: DateTime!, $to: DateTime!, $interval: interval, $transform: TimeseriesMetricTransformInputObject, $aggregation: Aggregation, $address: String, $includeIncompleteData: Boolean = true) {
  getMetric(metric: $metric) {
    timeseriesDataJson(selector: {contractAddress: $address}, from: $from, to: $to, interval: $interval, transform: $transform, aggregation: $aggregation, includeIncompleteData: $includeIncompleteData)
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
