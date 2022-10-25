---
title: Sanbase Plans
author: Ivan
date: 2021-03-22
---
# Sanbase Plans

The plans apply to all metrics except the ones with [special restrictions](/products-and-plans/access-plans/special-restrictions)

## Overview

Sanbase Plans give access to the metrics via the [Sanbase
website](https://app.santiment.net). When a direct API call is made, the request
is treated as made with [Sanapi Free plan](/products-and-plans/access-plans/sanapi#free-plan).

## Free plan

- Full access to the free metrics
- Partial access to the restricted metrics:
  - 2 years of historical data
  - Last 30 days of the data is cut-off
- Up to 10 signals definitions allowed
- No access to [Sanbase Graphs](https://graphs.santiment.net)
- Detailed metrics access restrictions can be found [here](https://api.santiment.net/graphiql?query=%7B%0A%20%20getAccessRestrictions(plan%3A%20FREE%2C%20product%3A%20SANBASE)%20%7B%0A%20%20%20%20name%0A%20%20%20%20type%0A%20%20%20%20isAccessible%0A%20%20%20%20isRestricted%0A%20%20%20%20restrictedFrom%0A%20%20%20%20restrictedTo%0A%20%20%7D%0A%7D%0A)

## Pro plan

- All in Free and:
- Increased access to the restricted metrics:
  - 5 years of historical data
  - Realtime data is not cut-off
- No limit to Signals
- Access to [Sanbase Graphs](https://graphs.santiment.net)
- Full access to [Sansheets](https://sheets.santiment.net)
- Detailed metrics access restrictions can be found [here](https://api.santiment.net/graphiql?query=%7B%0A%20%20getAccessRestrictions(plan%3A%20PRO%2C%20product%3A%20SANBASE)%20%7B%0A%20%20%20%20name%0A%20%20%20%20type%0A%20%20%20%20isAccessible%0A%20%20%20%20isRestricted%0A%20%20%20%20restrictedFrom%0A%20%20%20%20restrictedTo%0A%20%20%7D%0A%7D%0A)

[More detailed article](/products-and-plans/sanbase-pro-features/) with PRO benefits

## Pro+ plan

- All in Pro and:
- Dedicated account manager
- [SanAPI Basic plan](/products-and-plans/access-plans/sanapi/#basic-plan)
- Closed Webinars with Santiment Analytics
- Closed chat with Santiment market analysts
- Custom education & onboarding
