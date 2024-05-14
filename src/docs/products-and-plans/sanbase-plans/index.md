---
title: Sanbase Plans
author: Ivan
date: 2021-03-22
---

## Overview

Sanbase Plans provide access to various metrics through the [Sanbase website](https://app.santiment.net).

## Free Plan

Sanbase access:

- Full access to free metrics
- Partial access to restricted metrics on the Sanbase website:
  - Last 30 days of data is cut-off
- Allowed number of alerts: 3
- Limited access to insights

API access:
- Full access to free metrics
- Partial access to restricted metrics via Graphql API:
  - 1 year of historical data
  - Last 30 days of data is cut-off

- API calls rate limits: 1000/month, 500/hour, 100/minute
- Detailed metrics access restrictions can be found [here](https://api.santiment.net/graphiql?query=%7B%0A%20%20getAccessRestrictions(plan%3A%20FREE%2C%20product%3A%20SANBASE)%20%7B%0A%20%20%20%20name%0A%20%20%20%20type%0A%20%20%20%20isAccessible%0A%20%20%20%20isRestricted%0A%20%20%20%20restrictedFrom%0A%20%20%20%20restrictedTo%0A%20%20%7D%0A%7D%0A)

Santiment Queries access:
- Overall credits: 500
- Rate limits: 500/day, 200/hour, 20/minute

## Pro Plan

The Pro Plan includes everything in the Free Plan, plus:

Sanbase access:
- Full access to all metrics on the Sanbase website
- Allowed number of alerts: 20
- Full access to PRO insights
- Full access to [Google Sheets plugin](https://sheets.santiment.net)

API access:
- Partial access to restricted metrics via Graphql API:
  - 1 year of historical data
  - Last 30 days of data is cut-off

- API calls rate limits: 5000/month, 1000/hour, 100/minute
- Detailed metrics access restrictions can be found [here](https://api.santiment.net/graphiql?query=%7B%0A%20%20getAccessRestrictions(plan%3A%20PRO%2C%20product%3A%20SANBASE)%20%7B%0A%20%20%20%20name%0A%20%20%20%20type%0A%20%20%20%20isAccessible%0A%20%20%20%20isRestricted%0A%20%20%20%20restrictedFrom%0A%20%20%20%20restrictedTo%0A%20%20%7D%0A%7D%0A)

Santiment Queries access:
- Overall credits: 10K
- Rate limits: 5000/day, 1000/hour, 50/minute


Read our [more detailed article](/products-and-plans/sanbase-pro-features/) on Pro Plan benefits.

## Max Plan

The Max Plan includes everything in the Pro Plan, plus:

Sanbase access:
- Allowed number of alerts: 50

API access:
- Partial access to restricted metrics via Graphql API:
  - 2 years of historical data
  - no realtime restriction
- API calls rate limits: 80K/month, 4K/hour, 100/minute

Santiment Queries access:
- Overall credits: 20K
- Rate limits: 10K/day, 2000/hour, 50/minute


