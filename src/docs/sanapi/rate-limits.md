---
title: API Rate Limits
author: Santiment Team
date: 2023-05-09
---

## Overview

Santiment API Rate Limiting is a restriction imposed on the number of requests made by a user within a specified time frame.
Rate limits are essential to ensure the stability and optimal performance for a big number of clients.

1. Maintain service stability and performance: API Rate Limits help prevent excessive usage of the API service by a single entity, which could potentially degrade the performance for other users.

2. Fair resource allocation: API Rate Limits help allocate API resources more fairly among users. They prevent individual users or applications from monopolizing the available resources, ensuring that all users have equal access and opportunity to use the API services.

3. Protect against malicious activities: API Rate Limits can act as a basic security measure to protect against malicious activities such as DoS (Denial of Service) attacks. By limiting the number of requests from a single source, Santiment can mitigate the potential harm.

## How are rate limits applied and refreshed?

The API Rate Limits are applied **per account** meaning all API keys for that account share their limits.
Be aware that API keys used for testing/development can affect the rate limits of the API key used for production.

The rate limits differ for different subscription plans. The details for each plan can be found in [this article](/products-and-plans/access-plans/sanapi/).

The rate limits are applied **per minute**, **per hour** and **per month**. The UTC timezone is used for all dates and times.

The limits are refreshed **once the next minute starts, the next hour starts or the next month starts**.
This means that no matter when the subscription is created, the API calls counting will be refreshed once the next month starts, at 1st of the month, 00:00:00 UTC time.

## How to tell if I am being rate limited?

When the rate limit is reached, an error response with HTTP code 429 is returned. The
content of the response body contains human-readable format of the error and how
much time is left until a request can be made again. The remaining time, in
seconds, is also returned as the value of the `x-ratelimit-reset` HTTP header.

There are other HTTP headers included that show information regarding the rate limits.

The following three HTTP headers show what limits the used subscription plan has. These values do not
change from request to request but change only when the subscription plan changes.

- x-ratelimit-limit-month
- x-ratelimit-limit-hour
- x-ratelimit-limit-minute

The following three HTTP headers do change from request to request and show the amount of API calls left
before the exhausting the amount of API calls allowed.

- x-ratelimit-remaining-month
- x-ratelimit-remaining-hour
- x-ratelimit-remaining-minute