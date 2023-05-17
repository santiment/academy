---
title: Sanbase Plans
author: Ivan
date: 2021-03-22
---

The plans apply to all metrics, except for those with [special restrictions](/products-and-plans/access-plans/special-restrictions).

## Overview

Sanbase Plans provide access to various metrics through the [Sanbase website](https://app.santiment.net). However, when a direct API call is made, the request is considered to be under the [Sanapi Free plan](/products-and-plans/access-plans/sanapi#free-plan).

## Free Plan

- Full access to free metrics
- Partial access to restricted metrics:
  - 2 years of historical data
  - Last 30 days of data is cut-off
- Up to 10 signals definitions allowed
- No access to [Sanbase Graphs](https://graphs.santiment.net)
- Detailed metrics access restrictions can be found [here](https://api.santiment.net/graphiql?query=%7B%0A%20%20getAccessRestrictions(plan%3A%20FREE%2C%20product%3A%20SANBASE)%20%7B%0A%20%20%20%20name%0A%20%20%20%20type%0A%20%20%20%20isAccessible%0A%20%20%20%20isRestricted%0A%20%20%20%20restrictedFrom%0A%20%20%20%20restrictedTo%0A%20%20%7D%0A%7D%0A)

## Pro Plan

In addition to the Free Plan features, the Pro Plan offers:

- Increased access to restricted metrics:
  - 5 years of historical data
  - Real-time data is not cut-off
- Unlimited Signals
- Access to [Sanbase Graphs](https://graphs.santiment.net)
- Full access to [Sansheets](https://sheets.santiment.net)
- Detailed metrics access restrictions can be found [here](https://api.santiment.net/graphiql?query=%7B%0A%20%20getAccessRestrictions(plan%3A%20PRO%2C%20product%3A%20SANBASE)%20%7B%0A%20%20%20%20name%0A%20%20%20%20type%0A%20%20%20%20isAccessible%0A%20%20%20%20isRestricted%0A%20%20%20%20restrictedFrom%0A%20%20%20%20restrictedTo%0A%20%20%7D%0A%7D%0A)

Read our [more detailed article](/products-and-plans/sanbase-pro-features/) on Pro Plan benefits.

## Pro+ Plan

The Pro+ Plan includes everything in the Pro Plan, plus:

- Dedicated account manager
- [SanAPI Basic plan](/products-and-plans/access-plans/sanapi/#basic-plan)
- Exclusive webinars with Santiment Analytics
- Private chat with Santiment market analysts
- Custom education and onboarding

