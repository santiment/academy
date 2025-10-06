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
{
  getMetric(metric: "contract_interacting_addresses_count") {
    timeseriesDataJson(
      selector: {
        contractAddress: "0x857086e5e3dc7bbc98edb1639b4ffd96a667d75a"
      }
      from: "utc_now-90d"
      to: "utc_now-60d"
      interval: "1d"
    )
  }
}
```
