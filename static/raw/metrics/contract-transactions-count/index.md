---
title: Transactions Count
author: Yury
date: 2022-04-21
description: Get transactions count for a chain address / contract
---

## Definition

Get transactions count for a chain address / contract

![Example of usage **transactions count** on Sanbase](conract_interacting_address.png)

---

## Access

[Free Access](/metrics/details/access#free-access)

---

## API

Available under the `contract_transactions_count` name:

```graphql-explorer
{
  getMetric(metric: "contract_transactions_count") {
    timeseriesDataJson(
      selector: {contractAddress: "0x857086e5e3dc7bbc98edb1639b4ffd96a667d75a"}
      from: "utc_now-90d"
      to: "utc_now-60d",
      interval: "1d")
  }
}
```
