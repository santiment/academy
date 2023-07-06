---
title: API Rate Limits
author: Santiment Team
date: 2023-05-09
---

## Overview

Santiment API Rate Limiting is a mechanism that restricts the number of requests a user can make within a specific time frame. This limitation is crucial for maintaining stability and optimal performance for a large number of clients. 

1. **Maintaining Service Stability and Performance:** API Rate Limits prevent a single entity from excessively using the API service, which could potentially degrade the performance for other users.

2. **Fair Resource Allocation:** API Rate Limits ensure a more equitable distribution of API resources among users. They prevent individual users or applications from monopolizing the available resources, ensuring that all users have equal access and opportunity to use the API services.

3. **Protection Against Malicious Activities:** API Rate Limits serve as a basic security measure to protect against malicious activities such as DoS (Denial of Service) attacks. By limiting the number of requests from a single source, Santiment can mitigate potential harm.

## How are rate limits applied and refreshed?

API Rate Limits are applied on a **per account** basis. This means that all API keys associated with a single account share the same limits. It's important to note that API keys used for testing or development purposes can impact the rate limits of the API key used for production. 

The rate limits vary based on the subscription plan. You can find the details for each plan in [this article](/products-and-plans/access-plans/sanapi/). 

Rate limits are applied on a **per minute**, **per hour** and **per month** basis, with all dates and times set to the UTC timezone. 

The refreshment of these limits occurs **at the start of the next minute, hour, or month**. This means that regardless of when the subscription was created, the count of API calls will reset at the start of the next month, specifically at 00:00:00 UTC on the 1st of the month. 

## How to Determine If You Are Being Rate Limited?

When the rate limit is reached, an error response with HTTP code 429 is returned. The content of the response body includes a human-readable format of the error and the remaining time until you can make another request. The remaining time, measured in seconds, is also provided as the value of the `x-ratelimit-reset` HTTP header.

Several other HTTP headers provide information about the rate limits:

The following three HTTP headers indicate the limits of your current subscription plan. These values remain constant from request to request and only change when your subscription plan changes:

- `x-ratelimit-limit-month`
- `x-ratelimit-limit-hour`
- `x-ratelimit-limit-minute`

The next three HTTP headers change from request to request and show the number of API calls remaining before you reach the limit of allowed API calls:

- `x-ratelimit-remaining-month`
- `x-ratelimit-remaining-hour`
- `x-ratelimit-remaining-minute`

