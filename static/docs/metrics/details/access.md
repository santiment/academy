---
title: Access
author: Ivan
date: 2021-03-22
---

- [Free Access](#free-access)
- [Restricted Access](#restricted-access)

## Free Access

Metrics with free access have full historical and realtime data available
in the `Free` plan and all paid plans.

## Restricted Access

Metrics with restricted access have partial access to the metric data.
The restrictions depend both on the product used (Sanbase, SanAPI) and the
subscription plan used (Free, Basic, Pro, etc.).

Some of the metrics that are available on Sanbase might not be available in the
Free and Basic SanAPI plans, but only in Pro and higher.

## Detailed Access Restrictions per product/plan

Detailed access restrictions per product and plan can be found here:

- [SanAPI Free](https://api.santiment.net/graphiql?query=%7B%0A%20%20getAccessRestrictions(plan%3A%20FREE%2C%20product%3A%20SANAPI)%20%7B%0A%20%20%20%20name%0A%20%20%20%20type%0A%20%20%20%20isAccessible%0A%20%20%20%20isRestricted%0A%20%20%20%20restrictedFrom%0A%20%20%20%20restrictedTo%0A%20%20%7D%0A%7D%0A)
- [SanAPI Basic](https://api.santiment.net/graphiql?query=%7B%0A%20%20getAccessRestrictions(plan%3A%20BASIC%2C%20product%3A%20SANAPI)%20%7B%0A%20%20%20%20name%0A%20%20%20%20type%0A%20%20%20%20isAccessible%0A%20%20%20%20isRestricted%0A%20%20%20%20restrictedFrom%0A%20%20%20%20restrictedTo%0A%20%20%7D%0A%7D%0A)
- [SanAPI Pro](https://api.santiment.net/graphiql?query=%7B%0A%20%20getAccessRestrictions(plan%3A%20PRO%2C%20product%3A%20SANAPI)%20%7B%0A%20%20%20%20name%0A%20%20%20%20type%0A%20%20%20%20isAccessible%0A%20%20%20%20isRestricted%0A%20%20%20%20restrictedFrom%0A%20%20%20%20restrictedTo%0A%20%20%7D%0A%7D%0A)
- [Sanbase Free](https://api.santiment.net/graphiql?query=%7B%0A%20%20getAccessRestrictions(plan%3A%20FREE%2C%20product%3A%20SANBASE)%20%7B%0A%20%20%20%20name%0A%20%20%20%20type%0A%20%20%20%20isAccessible%0A%20%20%20%20isRestricted%0A%20%20%20%20restrictedFrom%0A%20%20%20%20restrictedTo%0A%20%20%7D%0A%7D%0A)
- [Sanbase Pro](https://api.santiment.net/graphiql?query=%7B%0A%20%20getAccessRestrictions(plan%3A%20PRO%2C%20product%3A%20SANBASE)%20%7B%0A%20%20%20%20name%0A%20%20%20%20type%0A%20%20%20%20isAccessible%0A%20%20%20%20isRestricted%0A%20%20%20%20restrictedFrom%0A%20%20%20%20restrictedTo%0A%20%20%7D%0A%7D%0A)
- [Sanbase Pro+](https://api.santiment.net/graphiql?query=%7B%0A%20%20getAccessRestrictions(plan%3A%20PRO%2C%20product%3A%20SANBASE)%20%7B%0A%20%20%20%20name%0A%20%20%20%20type%0A%20%20%20%20isAccessible%0A%20%20%20%20isRestricted%0A%20%20%20%20restrictedFrom%0A%20%20%20%20restrictedTo%0A%20%20%7D%0A%7D%0A)

Description of the fields:

- `type` - Either [query](/glossary/#query) or [metric](/glossary/#metric)
- `name` - The name of the query or metric. Check the [query](/glossary/#query) and [metric](/glossary/#metric) definition and examples in order to understand what the name represents exactly.
- `isAccessible` - Shows if the given metric/query is accessible for the provided product/plan.
- `isRestricted` - Shows if any time (historical or realtime) restrictions are applied.
- `restrictedFrom` - Shows the first date the given product/plan has access to for the specific metric/query. If it is `null` then no restrictions are applied.
- `restrictedTo` - Shows the last date the given product/plan has access to for the specific metric/query. If it is `null` then no restrictions are applied.

> Note: The `isRestricted`, `restrictedFrom` and `restrictedTo` fields are meaningful only if `isAccessible` is `true`.
