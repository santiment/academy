---
title: API Historical and Realtime data restrictions
author: Santiment Team
date: 2024-07-03
---

## Overview

The API provides historical and realtime data for the [metrics](/sanapi/fetching-metrics).

This articles outlines the restrictions that apply to historical and realtime data.

Example: If you are on the Free plan, you cannot access `mvrv_usd_1d` values:
- older than 1 year;
- from the last 30 days.

When you query a metric it can happen that some of the data is cut off, or if
the whole date range you request is outside the allowed range, you will get an
error.

For example, if you are on the Free plan, for most metrics you will have access
to the last 2 years of data with the last 30 days excluded.


## Free Metrics

Some of the metrics have their entire historical data and realtime data
available without any restrictions. These metrics are available to all users,
regardless of their subscription level. However, the [Rate
Limits](/sanapi/rate-limits) still apply and lower subscription plan users can
make fewer API calls, so they can get less data in the end.

## Restricted Metrics

The metrics that are not free have their historical and realtime data access
restricted depending on the subscription plan.

Users without any subscription plan are represented as using the FREE subscription plan.
They have access to 1 year old historical data without the last 30 days.

## How to determine the restrictions of each metric 

You can obtain detailed information about the restrictions of each metric for a
specific subscription plan using [this
query](https://api.santiment.net/graphiql?query=%7B%0A%20%20getAccessRestrictions(product%3A%20SANAPI%2C%20plan%3A%20BUSINESS_PRO%2C%20filter%3A%20METRIC)%20%7B%0A%20%20%20%20name%0A%20%20%20%20minInterval%0A%20%20%20%20isAccessible%0A%20%20%20%20isRestricted%0A%20%20%20%20isDeprecated%0A%20%20%20%20restrictedFrom%0A%20%20%20%20restrictedTo%0A%20%20%20%20docs%20%7B%0A%20%20%20%20%20%20link%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A):

```graphql
{
  getAccessRestrictions(product: SANAPI plan: BUSINESS_PRO filter: METRIC) {
    name
    minInterval
    isAccessible
    isRestricted
    isDeprecated
    restrictedFrom
    restrictedTo
    docs {
      link
    }
  }
}
```

The following fields are selected:
- `name` - the name of the metric
- `minInterval` - what is the minimal interval between two data points (5 minutes or 1 day in most cases)
- `isDeprecated` - is the deprecated. If true, you must stop using this metric as it will be removed in the future.
- `isAccessible` - is the metric accessible with the selected subscription plan.
- `restrictedFrom` - what is the earliest date for which this subscription plan can fetch data. If `null`, then no restrictions apply.
- `restrictedTo` - what is the latest date for which this subscription plan can fetch data. If `null`, then no restrictions apply.
- `docs` - link to the documentation of the metric.


