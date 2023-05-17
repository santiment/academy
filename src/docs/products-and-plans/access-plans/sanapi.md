---
title: SanAPI Plans
author: Ivan
date: 2021-03-22
---

The plans apply to all metrics except the ones with [special restrictions](/products-and-plans/access-plans/special-restrictions).

## Overview

Sanapi Plans provide access to various metrics through the API endpoint: https://api.santiment.net. When a user attempts to access the [Sanbase website](https://app.santiment.net), the restrictions applied correspond to the [Sanbase Free](/products-and-plans/access-plans/sanbase#free-plan) plan.

## Free Plan - Rate Limits

- Rate limits:
  - 1000 API calls per month
  - 500 API calls per hour
  - 100 API calls per minute
- Full access to free metrics
- Partial access to restricted metrics:
  - 2 years of historical data
  - Last 30 days of data are cut off

- Detailed metrics access restrictions can be found [here](https://api.santiment.net/graphiql?query=%7B%0A%20%20getAccessRestrictions(plan%3A%20FREE%2C%20product%3A%20SANAPI)%20%7B%0A%20%20%20%20name%0A%20%20%20%20type%0A%20%20%20%20isAccessible%0A%20%20%20%20isRestricted%0A%20%20%20%20restrictedFrom%0A%20%20%20%20restrictedTo%0A%20%20%7D%0A%7D%0A)

## Basic Plan

- Rate limits:
  - 300,000 API calls per month
  - 20,000 API calls per hour
  - 400 API calls per minute
- Full access to free metrics
- Partial access to restricted metrics:
  - 2 years of historical data
  - Real-time data is not cut-off
- Detailed metrics access restrictions can be found [here](https://api.santiment.net/graphiql?query=%7B%0A%20%20getAccessRestrictions(plan%3A%20BASIC%2C%20product%3A%20SANAPI)%20%7B%0A%20%20%20%20name%0A%20%20%20%20type%0A%20%20%20%20isAccessible%0A%20%20%20%20isRestricted%0A%20%20%20%20restrictedFrom%0A%20%20%20%20restrictedTo%0A%20%20%7D%0A%7D%0A)

## Pro Plan - Rate Limits

- Rate limits:
  - 600,000 API calls per month
  - 30,000 API calls per month
  - 600 API calls per minute
- Full access to free metrics
- Full access to restricted metrics
- Detailed metrics access restrictions can be found [here](https://api.santiment.net/graphiql?query=%7B%0A%20%20getAccessRestrictions(plan%3A%20PRO%2C%20product%3A%20SANAPI)%20%7B%0A%20%20%20%20name%0A%20%20%20%20type%0A%20%20%20%20isAccessible%0A%20%20%20%20isRestricted%0A%20%20%20%20restrictedFrom%0A%20%20%20%20restrictedTo%0A%20%20%7D%0A%7D%0A)
