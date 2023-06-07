---
title: Onchain Data Functions
author: Santiment Team
date: 2023-03-31
---

## SAN_ACTIVE_ADDRESSES

##### SAN_ACTIVE_ADDRESSES(projectSlug, from, to, interval) ⇒ <code>Array</code>

Returns the active addresses for the specified asset during a given time interval. "Active Addresses" refers to the number of unique addresses that participated in transactions on a blockchain.

- **Kind**: global function
- **Returns**: <code>Array</code> - of active addresses.
- **Parameters**:

| Param       | Type                | Description                                                                                                                               |
| ----------- | ------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| projectSlug | <code>string</code> | Name of the asset, more info at https://academy.santiment.net/glossary/#slug. Example: "santiment".                                      |
| from        | <code>date</code>   | The starting date to fetch the data. Example: DATE(2018, 9, 20)                                                                          |
| to          | <code>date</code>   | The ending date to fetch the data. Example: DATE(2018, 9, 21)                                                                            |
| interval    | <code>string</code> | The resolution with which the data is fetched. Example: "5m"                                                                              |

## SAN_ACTIVE_ADDRESSES_24H

##### SAN_ACTIVE_ADDRESSES_24H(projectSlug, from, to, interval) ⇒ <code>Array</code>

Returns the active addresses for the specified asset during a given time interval. "Active Addresses" refers to the number of unique addresses that participated in transactions on a blockchain.

- **Kind**: global function
- **Returns**: <code>Array</code> - of active addresses for the last 24 hours.
- **Parameters**:

| Param       | Type                | Description                                                                                   |
| ----------- | ------------------- | --------------------------------------------------------------------------------------------- |
| projectSlug | <code>string</code> | Name of the asset. More info at https://academy.santiment.net/glossary/#slug. Example: "santiment". |
| from        | <code>date</code>   | The starting date to fetch the data. Example: DATE(2018, 9, 20)                              |
| to          | <code>date</code>   | The ending date to fetch the data. Example: DATE(2018, 9, 21)                                |
| interval    | <code>string</code> | The resolution with which the data is fetched. Example: "5m"                                 |

## SAN_ACTIVE_ADDRESSES_24H_AGGREGATED

##### SAN_ACTIVE_ADDRESSES_24H_AGGREGATED(projectSlug, from, to, aggregation) ⇒ <code>number</code>

Returns the active addresses for the specified asset during a given time interval. "Active Addresses" refers to the number of unique addresses that participated in transactions on a blockchain.

- **Kind**: global function
- **Returns**: <code>number</code> - of aggregated active addresses for the last 24 hours.
- **Parameters**:

| Param       | Type                | Description                                                                                   |
| ----------- | ------------------- | --------------------------------------------------------------------------------------------- |
| projectSlug | <code>string</code> | Name of the asset. More info at https://academy.santiment.net/glossary/#slug. Example: "santiment". |
| from        | <code>date</code>   | The starting date to fetch the data. Example: DATE(2018, 9, 20)                              |
| to          | <code>date</code>   | The ending date to fetch the data. Example: DATE(2018, 9, 21)                                |
| aggregation | <code>string</code> | Aggregation for the timeseries metrics. Example: "LAST"                                      |

## SAN_ACTIVE_ADDRESSES_24H_MULTIPLE_SLUGS

##### SAN_ACTIVE_ADDRESSES_24H_MULTIPLE_SLUGS(projectSlugsList, from, to, interval) ⇒ <code>Array</code>
Returns the active addresses for the specified asset, during a given time interval. "Active Addresses" refers to the number of unique addresses that participated in transactions on a blockchain.

- **Kind**: global function
- **Returns**: <code>Array</code> - of results for multiple slugs active addresses for the last 24 hours.
- **Parameters**:

| Param            | Type                | Description                                                                                               |
| ---------------- | ------------------- | --------------------------------------------------------------------------------------------------------- |
| projectSlugsList | <code>string</code> | Comma-separated names of the assets, more info at https://academy.santiment.net/glossary/#slug. Example: "santiment,bitcoin". |
| from             | <code>date</code>   | The starting date to fetch the data. Example: DATE(2018, 9, 20)                                          |
| to               | <code>date</code>   | The ending date to fetch the data. Example: DATE(2018, 9, 21)                                            |
| interval         | <code>string</code> | The resolution with which the data is fetched. Example: "5m"                                             |

## SAN_ACTIVE_ADDRESSES_AGGREGATED

##### SAN_ACTIVE_ADDRESSES_AGGREGATED(projectSlug, from, to, aggregation) ⇒ <code>number</code>

Returns the active addresses for the specified asset during a given time interval. "Active Addresses" refers to the number of unique addresses that participated in transactions on a blockchain.

- **Kind**: global function
- **Returns**: <code>number</code> - of aggregated active addresses.
- **Parameters**:

| Param       | Type                | Description                                                                                       |
| ----------- | ------------------- | ------------------------------------------------------------------------------------------------- |
| projectSlug | <code>string</code> | Name of the asset. More info at https://academy.santiment.net/glossary/#slug. Example: "santiment". |
| from        | <code>date</code>   | The starting date to fetch the data. Example: DATE(2018, 9, 20)                                   |
| to          | <code>date</code>   | The ending date to fetch the data. Example: DATE(2018, 9, 21)                                     |
| aggregation | <code>string</code> | Aggregation for the timeseries metrics. Example: "LAST"                                           |

## SAN_ACTIVE_ADDRESSES_MULTIPLE_SLUGS

##### SAN_ACTIVE_ADDRESSES_MULTIPLE_SLUGS(projectSlugsList, from, to, interval) ⇒ <code>Array</code>

Returns the active addresses for the specified assets during a given time interval. "Active Addresses" refers to the number of unique addresses that participated in transactions on a blockchain.

- **Kind**: global function
- **Returns**: <code>Array</code> - of results for multiple slugs active addresses.
- **Parameters**:

| Param            | Type                | Description                                                                                       |
| ---------------- | ------------------- | ------------------------------------------------------------------------------------------------- |
| projectSlugsList | <code>string</code> | Comma-separated names of the assets. More info at https://academy.santiment.net/glossary/#slug. Example: "santiment,bitcoin". |
| from             | <code>date</code>   | The starting date to fetch the data. Example: DATE(2018, 9, 20)                                  |
| to               | <code>date</code>   | The ending date to fetch the data. Example: DATE(2018, 9, 21)                                    |
| interval         | <code>string</code> | The resolution with which the data is fetched. Example: "5m"                                     |

## SAN_ACTIVE_DEPOSITS

##### SAN_ACTIVE_DEPOSITS(projectSlug, from, to, interval) ⇒ <code>Array</code>

Returns the number of unique deposit addresses that have been active for a project.

- **Kind**: global function
- **Returns**: <code>Array</code> - of deposit address numbers.
- **Parameters**:

| Param       | Type                | Description                                                                                   |
| ----------- | ------------------- | --------------------------------------------------------------------------------------------- |
| projectSlug | <code>string</code> | Name of the asset. More info at [Santiment Glossary](https://academy.santiment.net/glossary/#slug). Example: "santiment". |
| from        | <code>date</code>   | The starting date to fetch the data. Example: DATE(2018, 9, 20)                              |
| to          | <code>date</code>   | The ending date to fetch the data. Example: DATE(2018, 9, 21)                                |
| interval    | <code>string</code> | The resolution with which the data is fetched. Example: "5m"                                 |

## SAN_ACTIVE_DEPOSITS_AGGREGATED

##### SAN_ACTIVE_DEPOSITS_AGGREGATED(projectSlug, from, to, aggregation) ⇒ <code>number</code>

Returns the number of unique deposit addresses that have been active for a project.

- **Kind**: global function
- **Returns**: <code>number</code> - of aggregated deposit address numbers.
- **Parameters**:

| Param       | Type                | Description                                                                                               |
| ----------- | ------------------- | --------------------------------------------------------------------------------------------------------- |
| projectSlug | <code>string</code> | Name of the asset. More info at [Santiment Glossary](https://academy.santiment.net/glossary/#slug). Example: "santiment". |
| from        | <code>date</code>   | The starting date to fetch the data. Example: DATE(2018, 9, 20)                                          |
| to          | <code>date</code>   | The ending date to fetch the data. Example: DATE(2018, 9, 21)                                            |
| aggregation | <code>string</code> | Aggregation for the timeseries metrics. Example: "LAST"                                                  |

## SAN_ACTIVE_DEPOSITS_MULTIPLE_SLUGS

##### SAN_ACTIVE_DEPOSITS_MULTIPLE_SLUGS(projectSlugsList, from, to, interval) ⇒ <code>Array</code>

Returns the number of unique deposit addresses that have been active for a project.

- **Kind**: global function
- **Returns**: <code>Array</code> - of results for multiple slugs deposit address numbers.
- **Parameters**:

| Param            | Type                | Description                                                                                       |
| ---------------- | ------------------- | ------------------------------------------------------------------------------------------------- |
| projectSlugsList | <code>string</code> | Comma-separated names of the assets. More info at https://academy.santiment.net/glossary/#slug. Example: "santiment,bitcoin". |
| from             | <code>date</code>   | The starting date to fetch the data. Example: DATE(2018, 9, 20)                                  |
| to               | <code>date</code>   | The ending date to fetch the data. Example: DATE(2018, 9, 21)                                    |
| interval         | <code>string</code> | The resolution with which the data is fetched. Example: "5m"                                     |

## SAN_AGE_DESTROYED

##### SAN_AGE_DESTROYED(projectSlug, from, to, interval) ⇒ <code>Array</code>

Returns the token's age destroyed.

- **Kind**: global function
- **Returns**: <code>Array</code> - of age destroyed values.
- **Parameters**:

| Param       | Type                | Description                                                                                           |
| ----------- | ------------------- | ----------------------------------------------------------------------------------------------------- |
| projectSlug | <code>string</code> | Name of the asset, more info at https://academy.santiment.net/glossary/#slug. Example: "santiment".  |
| from        | <code>date</code>   | The starting date to fetch the data. Example: DATE(2018, 9, 20)                                      |
| to          | <code>date</code>   | The ending date to fetch the data. Example: DATE(2018, 9, 21)                                        |
| interval    | <code>string</code> | The resolution with which the data is fetched. Example: "5m"                                         |

## SAN_AGE_DESTROYED_AGGREGATED

##### SAN_AGE_DESTROYED_AGGREGATED(projectSlug, from, to, aggregation) ⇒ <code>number</code>

Returns the token's age destroyed.

- **Kind**: global function
- **Returns**: <code>number</code> - of aggregated age destroyed values.
- **Parameters**:

| Param       | Type                | Description                                                                                                  |
| ----------- | ------------------- | ------------------------------------------------------------------------------------------------------------ |
| projectSlug | <code>string</code> | Name of the asset, more info at https://academy.santiment.net/glossary/#slug. Example: "santiment".         |
| from        | <code>date</code>   | The starting date to fetch the data. Example: DATE(2018, 9, 20)                                             |
| to          | <code>date</code>   | The ending date to fetch the data. Example: DATE(2018, 9, 21)                                               |
| aggregation | <code>string</code> | Aggregation for the timeseries metrics. Example: "LAST"                                                     |

## SAN_AGE_DESTROYED_MULTIPLE_SLUGS

##### SAN_AGE_DESTROYED_MULTIPLE_SLUGS(projectSlugsList, from, to, interval) ⇒ <code>Array</code>

Returns the token's age destroyed.

- **Kind**: global function
- **Returns**: <code>Array</code> - of results for multiple slugs age destroyed values.
- **Parameters**:

| Param            | Type                | Description                                                                                   |
| ---------------- | ------------------- | --------------------------------------------------------------------------------------------- |
| projectSlugsList | <code>string</code> | Comma-separated names of the assets. More info at [Santiment Glossary](https://academy.santiment.net/glossary/#slug). Example: "santiment,bitcoin". |
| from             | <code>date</code>   | The starting date to fetch the data. Example: DATE(2018, 9, 20)                              |
| to               | <code>date</code>   | The ending date to fetch the data. Example: DATE(2018, 9, 21)                                |
| interval         | <code>string</code> | The resolution with which the data is fetched. Example: "5m"                                  |

## SAN_ALL_PROJECTS

##### SAN_ALL_PROJECTS() ⇒ <code>Array</code>

Returns an array of all assets for which Santiment has data. Each asset record includes: ticker, name, slug, price in USD, market cap in USD, volume in USD, USD balance, ETH balance, ETH spent in the last 30 days, ETH spent in the last 7 days, and ETH spent in the last day.

- **Kind**: global function
- **Returns**: <code>Array</code> - of all projects.
- **Parameters**:

## SAN_BITMEX_PERPETUAL_CONTRACT_FUNDING_RATE

##### SAN_BITMEX_PERPETUAL_CONTRACT_FUNDING_RATE(projectSlug, from, to, interval) ⇒ <code>Array</code>

Returns the funding rates that are paid by one of the sides of the perpetual contract to the other.

- **Kind**: global function
- **Returns**: <code>Array</code> - of the funding rates that are paid by one of the sides of the perpetual contract to the other
- **Parameters**:

| Param       | Type                | Description                                                                                   |
| ----------- | ------------------- | --------------------------------------------------------------------------------------------- |
| projectSlug | <code>string</code> | Name of the asset. More info at https://academy.santiment.net/glossary/#slug. Example: "santiment". |
| from        | <code>date</code>   | The starting date to fetch the data. Example: DATE(2018, 9, 20)                              |
| to          | <code>date</code>   | The ending date to fetch the data. Example: DATE(2018, 9, 21)                                |
| interval    | <code>string</code> | The resolution with which the data is fetched. Example: "5m"                                 |

## SAN_BITMEX_PERPETUAL_CONTRACT_FUNDING_RATE_AGGREGATED

##### SAN_BITMEX_PERPETUAL_CONTRACT_FUNDING_RATE_AGGREGATED(projectSlug, from, to, aggregation) ⇒ <code>number</code>

Returns the aggregated funding rates paid by one side of the perpetual contract to the other.

- **Kind**: global function
- **Returns**: <code>number</code> - Aggregated funding rates paid by one side of the perpetual contract to the other
- **Parameters**:

| Param       | Type                | Description                                                                                   |
| ----------- | ------------------- | --------------------------------------------------------------------------------------------- |
| projectSlug | <code>string</code> | Asset name, more info at https://academy.santiment.net/glossary/#slug. Example: "santiment". |
| from        | <code>date</code>   | Starting date to fetch the data. Example: DATE(2018, 9, 20)                                  |
| to          | <code>date</code>   | Ending date to fetch the data. Example: DATE(2018, 9, 21)                                    |
| aggregation | <code>string</code> | Aggregation for the timeseries metrics. Example: "LAST"                                      |

## SAN_BITMEX_PERPETUAL_CONTRACT_FUNDING_RATE_MULTIPLE_SLUGS

##### SAN_BITMEX_PERPETUAL_CONTRACT_FUNDING_RATE_MULTIPLE_SLUGS(projectSlugsList, from, to, interval) ⇒ <code>Array</code>

Returns the funding rates that are paid by one side of the perpetual contract to the other.

- **Kind**: global function
- **Returns**: <code>Array</code> - of results for multiple slugs, the funding rates that are paid by one side of the perpetual contract to the other
- **Parameters**:

| Param            | Type                | Description                                                                                           |
| ---------------- | ------------------- | ----------------------------------------------------------------------------------------------------- |
| projectSlugsList | <code>string</code> | Comma-separated names of the assets. More info at https://academy.santiment.net/glossary/#slug. Example: "santiment,bitcoin". |
| from             | <code>date</code>   | The starting date to fetch the data. Example: DATE(2018, 9, 20)                                      |
| to               | <code>date</code>   | The ending date to fetch the data. Example: DATE(2018, 9, 21)                                        |
| interval         | <code>string</code> | The resolution with which the data is fetched. Example: "5m"                                         |

## SAN_BITMEX_PERPETUAL_OPEN_INTEREST

##### SAN_BITMEX_PERPETUAL_OPEN_INTEREST(projectSlug, from, to, interval) ⇒ <code>Array</code>

Returns the amount of open perpetual contracts currently on Bitmex's Project Ticker / USD trading pairs. When open interest reaches unusually high numbers, it can precede increased volatility in the coin’s price.

- **Kind**: global function
- **Returns**: <code>Array</code> - of the amount of open perpetual contracts.
- **Parameters**:

| Param       | Type                | Description                                                                                               |
| ----------- | ------------------- | --------------------------------------------------------------------------------------------------------- |
| projectSlug | <code>string</code> | Name of the asset, more info at https://academy.santiment.net/glossary/#slug. Example: "santiment".      |
| from        | <code>date</code>   | The starting date to fetch the data. Example: DATE(2018, 9, 20)                                          |
| to          | <code>date</code>   | The ending date to fetch the data. Example: DATE(2018, 9, 21)                                            |
| interval    | <code>string</code> | The resolution with which the data is fetched. Example: "5m"                                             |

## SAN_BITMEX_PERPETUAL_OPEN_INTEREST_AGGREGATED

##### SAN_BITMEX_PERPETUAL_OPEN_INTEREST_AGGREGATED(projectSlug, from, to, aggregation) ⇒ <code>number</code>

Returns the amount of open perpetual contracts currently on Bitmex's Project Ticker / USD trading pairs. When open interest reaches unusually high numbers, it can precede increased volatility in the coin’s price.

- **Kind**: global function
- **Returns**: <code>number</code> - the aggregated amount of open perpetual contracts.
- **Parameters**:

| Param       | Type                | Description                                                                                                      |
| ----------- | ------------------- | ---------------------------------------------------------------------------------------------------------------- |
| projectSlug | <code>string</code> | Name of the asset, more info at https://academy.santiment.net/glossary/#slug. Example: "santiment".             |
| from        | <code>date</code>   | The starting date to fetch the data. Example: DATE(2018, 9, 20)                                                 |
| to          | <code>date</code>   | The ending date to fetch the data. Example: DATE(2018, 9, 21)                                                   |
| aggregation | <code>string</code> | Aggregation for the timeseries metrics. Example: "LAST"                                                         |

## SAN_BITMEX_PERPETUAL_OPEN_INTEREST_MULTIPLE_SLUGS

##### SAN_BITMEX_PERPETUAL_OPEN_INTEREST_MULTIPLE_SLUGS(projectSlugsList, from, to, interval) ⇒ <code>Array</code>

Returns the amount of open perpetual contracts currently on Bitmex's Project Ticker / USD trading pairs. When open interest reaches unusually high numbers, it can precede increased volatility in the coin’s price.

- **Kind**: global function
- **Returns**: <code>Array</code> - of results for multiple slugs, the amount of open perpetual contracts.
- **Parameters**:

| Param            | Type                | Description                                                                                   |
| ---------------- | ------------------- | --------------------------------------------------------------------------------------------- |
| projectSlugsList | <code>string</code> | Comma-separated names of the assets, more info at https://academy.santiment.net/glossary/#slug. Example: "santiment,bitcoin". |
| from             | <code>date</code>   | The starting date to fetch the data. Example: DATE(2018, 9, 20)                              |
| to               | <code>date</code>   | The ending date to fetch the data. Example: DATE(2018, 9, 21)                                |
| interval         | <code>string</code> | The resolution with which the data is fetched. Example: "5m"                                  |

## SAN_DAILY_AVG_MARKETCAP

##### SAN_DAILY_AVG_MARKETCAP(projectSlug, from, to, currency, interval) ⇒ <code>Array</code>

Returns the daily average marketcap.

- **Kind**: global function
- **Returns**: <code>Array</code> - of daily average marketcaps.
- **Parameters**:

| Param       | Type                | Description                                                                                                                                           |
| ----------- | ------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| projectSlug | <code>string</code> | Name of the asset, more info at https://academy.santiment.net/glossary/#slug. Example: "santiment".                                                   |
| from        | <code>date</code>   | The starting date to fetch the data. Example: DATE(2018, 9, 20)                                                                                      |
| to          | <code>date</code>   | The ending date to fetch the data. Example: DATE(2018, 9, 21)                                                                                        |
| currency    | <code>string</code> | The metric is calculated using a currency of choice. Available currencies: USD                                                                        |
| interval    | <code>string</code> | The resolution with which the data is fetched. Example: "5m"                                                                                         |

## SAN_DAILY_AVG_MARKETCAP_AGGREGATED

##### SAN_DAILY_AVG_MARKETCAP_AGGREGATED(projectSlug, from, to, currency, aggregation) ⇒ <code>number</code>

Returns the daily average marketcap.

- **Kind**: global function
- **Returns**: <code>number</code> - of aggregated daily average marketcaps.
- **Parameters**:

| Param       | Type                | Description                                                                                   |
| ----------- | ------------------- | --------------------------------------------------------------------------------------------- |
| projectSlug | <code>string</code> | Name of the asset. More info at [Santiment Glossary](https://academy.santiment.net/glossary/#slug). Example: "santiment". |
| from        | <code>date</code>   | The starting date to fetch the data. Example: DATE(2018, 9, 20)                              |
| to          | <code>date</code>   | The ending date to fetch the data. Example: DATE(2018, 9, 21)                                |
| currency    | <code>string</code> | The metric is calculated using a currency of choice. Available currencies: USD                |
| aggregation | <code>string</code> | Aggregation for the timeseries metrics. Example: "LAST"                                      |

## SAN_DAILY_AVG_MARKETCAP_MULTIPLE_SLUGS

##### SAN_DAILY_AVG_MARKETCAP_MULTIPLE_SLUGS(projectSlugsList, from, to, currency, interval) ⇒ <code>Array</code>

Returns the daily average marketcap.

- **Kind**: global function
- **Returns**: <code>Array</code> - of results for multiple slugs daily average marketcaps.
- **Parameters**:

| Param            | Type                | Description                                                                                               |
| ---------------- | ------------------- | --------------------------------------------------------------------------------------------------------- |
| projectSlugsList | <code>string</code> | Comma-separated names of the assets, more info at https://academy.santiment.net/glossary/#slug. Example: "santiment,bitcoin". |
| from             | <code>date</code>   | The starting date to fetch the data. Example: DATE(2018, 9, 20)                                          |
| to               | <code>date</code>   | The ending date to fetch the data. Example: DATE(2018, 9, 21)                                            |
| currency         | <code>string</code> | The metric is calculated using a currency of choice. Available currencies: USD                            |
| interval         | <code>string</code> | The resolution with which the data is fetched. Example: "5m"                                             |

## SAN_DAILY_CLOSING_MARKETCAP

##### SAN_DAILY_CLOSING_MARKETCAP(projectSlug, from, to, currency, interval) ⇒ <code>Array</code>

Returns the daily closing marketcap.

- **Kind**: global function
- **Returns**: <code>Array</code> - of daily closing marketcaps.
- **Parameters**:

| Param       | Type                | Description                                                                                                                                           |
| ----------- | ------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| projectSlug | <code>string</code> | Name of the asset, more info at [Santiment Glossary](https://academy.santiment.net/glossary/#slug). Example: "santiment".                           |
| from        | <code>date</code>   | The starting date to fetch the data. Example: DATE(2018, 9, 20)                                                                                      |
| to          | <code>date</code>   | The ending date to fetch the data. Example: DATE(2018, 9, 21)                                                                                        |
| currency    | <code>string</code> | The metric is calculated using a currency of choice. Available currencies: USD                                                                        |
| interval    | <code>string</code> | The resolution with which the data is fetched. Example: "5m"                                                                                         |

## SAN_DAILY_CLOSING_MARKETCAP_AGGREGATED

##### SAN_DAILY_CLOSING_MARKETCAP_AGGREGATED(projectSlug, from, to, currency, aggregation) ⇒ <code>number</code>

Returns the daily closing marketcap.

- **Kind**: global function
- **Returns**: <code>number</code> - of aggregated daily closing marketcaps.
- **Parameters**:

| Param       | Type                | Description                                                                                          |
| ----------- | ------------------- | ---------------------------------------------------------------------------------------------------- |
| projectSlug | <code>string</code> | Name of the asset, more info at https://academy.santiment.net/glossary/#slug. Example: "santiment". |
| from        | <code>date</code>   | The starting date to fetch the data. Example: DATE(2018, 9, 20)                                     |
| to          | <code>date</code>   | The ending date to fetch the data. Example: DATE(2018, 9, 21)                                       |
| currency    | <code>string</code> | The metric is calculated using a currency of choice. Available currencies: USD                       |
| aggregation | <code>string</code> | Aggregation for the timeseries metrics. Example: "LAST"                                             |

## SAN_DAILY_CLOSING_MARKETCAP_MULTIPLE_SLUGS

##### SAN_DAILY_CLOSING_MARKETCAP_MULTIPLE_SLUGS(projectSlugsList, from, to, currency, interval) ⇒ <code>Array</code>

Returns the daily closing marketcap.

- **Kind**: global function
- **Returns**: <code>Array</code> - of results for multiple slugs daily closing marketcaps.
- **Parameters:**

| Param            | Type                | Description                                                                                               |
| ---------------- | ------------------- | --------------------------------------------------------------------------------------------------------- |
| projectSlugsList | <code>string</code> | Comma-separated names of the assets, more info at https://academy.santiment.net/glossary/#slug. Example: "santiment,bitcoin". |
| from             | <code>date</code>   | The starting date to fetch the data. Example: DATE(2018, 9, 20)                                         |
| to               | <code>date</code>   | The ending date to fetch the data. Example: DATE(2018, 9, 21)                                           |
| currency         | <code>string</code> | The metric is calculated using a currency of choice. Available currencies: USD                           |
| interval         | <code>string</code> | The resolution with which the data is fetched. Example: "5m"                                            |

## SAN_DAILY_CLOSING_PRICE

##### SAN_DAILY_CLOSING_PRICE(projectSlug, day) ⇒ <code>number</code>

Returns the closing price for a given day.

- **Kind**: global function
- **Returns**: <code>number</code> - closing price.
- **Parameters:**

| Param       | Type                | Description                                                                                   |
| ----------- | ------------------- | --------------------------------------------------------------------------------------------- |
| projectSlug | <code>string</code> | The asset's name on Sanbase, found at the end of the URL (e.g., for Santiment, the URL is https://app.santiment.net/projects/santiment, so the projectSlug would be 'santiment'). |
| day         | <code>date</code>   | The date to fetch the data (e.g., DATE(2018, 9, 20)).                                        |

## SAN_DAILY_DEPOSIT_TRANSACTIONS

##### SAN_DAILY_DEPOSIT_TRANSACTIONS(projectSlug, from, to, interval) ⇒ <code>Array</code>

Returns the number of withdrawal transactions.

- **Kind**: global function
- **Returns**: <code>Array</code> - of the number of deposit transactions.
- **Parameters:**

| Param       | Type                | Description                                                                                   |
| ----------- | ------------------- | --------------------------------------------------------------------------------------------- |
| projectSlug | <code>string</code> | The asset's name. More info at https://academy.santiment.net/glossary/#slug. Example: "santiment". |
| from        | <code>date</code>   | The start date for fetching data. Example: DATE(2018, 9, 20)                                 |
| to          | <code>date</code>   | The end date for fetching data. Example: DATE(2018, 9, 21)                                   |
| interval    | <code>string</code> | The resolution for fetching data. Example: "5m"                                              |

## SAN_DAILY_DEPOSIT_TRANSACTIONS_AGGREGATED

##### SAN_DAILY_DEPOSIT_TRANSACTIONS_AGGREGATED(projectSlug, from, to, aggregation) ⇒ <code>number</code>

Returns the number of withdrawal transactions.

- **Kind**: global function
- **Returns**: <code>number</code> - Aggregated number of deposit transactions.
- **Parameters:**

| Param       | Type                | Description                                                                                   |
| ----------- | ------------------- | --------------------------------------------------------------------------------------------- |
| projectSlug | <code>string</code> | Name of the asset. More info at [Santiment Glossary](https://academy.santiment.net/glossary/#slug). Example: "santiment". |
| from        | <code>date</code>   | The starting date to fetch the data. Example: DATE(2018, 9, 20)                              |
| to          | <code>date</code>   | The ending date to fetch the data. Example: DATE(2018, 9, 21)                                |
| aggregation | <code>string</code> | Aggregation for the timeseries metrics. Example: "LAST"                                      |

## SAN_DAILY_DEPOSIT_TRANSACTIONS_MULTIPLE_SLUGS

##### SAN_DAILY_DEPOSIT_TRANSACTIONS_MULTIPLE_SLUGS(projectSlugsList, from, to, interval) ⇒ <code>Array</code>

Returns the number of withdrawal transactions.

- **Kind**: global function
- **Returns**: <code>Array</code> - An array of results for multiple slugs, containing the number of withdrawal transactions.
- **Parameters:**

| Param            | Type                | Description                                                                                               |
| ---------------- | ------------------- | --------------------------------------------------------------------------------------------------------- |
| projectSlugsList | <code>string</code> | Comma-separated names of the assets. More info at [Santiment Glossary](https://academy.santiment.net/glossary/#slug). Example: "santiment,bitcoin". |
| from             | <code>date</code>   | The starting date to fetch the data. Example: DATE(2018, 9, 20)                                          |
| to               | <code>date</code>   | The ending date to fetch the data. Example: DATE(2018, 9, 21)                                            |
| interval         | <code>string</code> | The resolution with which the data is fetched. Example: "5m"                                             |

## SAN_DAILY_WITHDRAWAL_TRANSACTIONS

##### SAN_DAILY_WITHDRAWAL_TRANSACTIONS(projectSlug, from, to, interval) ⇒ <code>Array</code>

Returns the number of withdrawal transactions.

- **Kind**: global function
- **Returns**: <code>Array</code> - Array of the number of withdrawal transactions.
- **Parameters:**

| Param       | Type                | Description                                                                                               |
| ----------- | ------------------- | --------------------------------------------------------------------------------------------------------- |
| projectSlug | <code>string</code> | Name of the asset. More info at https://academy.santiment.net/glossary/#slug. Example: "santiment".      |
| from        | <code>date</code>   | The starting date to fetch the data. Example: DATE(2018, 9, 20)                                          |
| to          | <code>date</code>   | The ending date to fetch the data. Example: DATE(2018, 9, 21)                                            |
| interval    | <code>string</code> | The resolution with which the data is fetched. Example: "5m"                                             |

## SAN_DAILY_WITHDRAWAL_TRANSACTIONS_AGGREGATED

##### SAN_DAILY_WITHDRAWAL_TRANSACTIONS_AGGREGATED(projectSlug, from, to, aggregation) ⇒ <code>number</code>

Returns the number of withdrawal transactions.

- **Kind**: global function
- **Returns**: <code>number</code> - aggregated number of withdrawal transactions.
- **Parameters:**

| Param       | Type                | Description                                                                                               |
| ----------- | ------------------- | --------------------------------------------------------------------------------------------------------- |
| projectSlug | <code>string</code> | Name of the asset. More info at [Santiment Glossary](https://academy.santiment.net/glossary/#slug). Example: "santiment". |
| from        | <code>date</code>   | The starting date to fetch the data. Example: DATE(2018, 9, 20)                                          |
| to          | <code>date</code>   | The ending date to fetch the data. Example: DATE(2018, 9, 21)                                            |
| aggregation | <code>string</code> | Aggregation for the timeseries metrics. Example: "LAST"                                                  |

## SAN_DAILY_WITHDRAWAL_TRANSACTIONS_MULTIPLE_SLUGS

##### SAN_DAILY_WITHDRAWAL_TRANSACTIONS_MULTIPLE_SLUGS(projectSlugsList, from, to, interval) ⇒ <code>Array</code>

Returns the number of withdrawal transactions.

- **Kind**: global function
- **Returns**: <code>Array</code> - Array of results for multiple slugs' number of withdrawal transactions.
- **Parameters:**

| Param            | Type                | Description                                                                                              |
| ---------------- | ------------------- | -------------------------------------------------------------------------------------------------------- |
| projectSlugsList | <code>string</code> | Comma-separated names of the assets. More info at https://academy.santiment.net/glossary/#slug. Example: "santiment,bitcoin". |
| from             | <code>date</code>   | The starting date to fetch the data. Example: DATE(2018, 9, 20)                                         |
| to               | <code>date</code>   | The ending date to fetch the data. Example: DATE(2018, 9, 21)                                           |
| interval         | <code>string</code> | The resolution with which the data is fetched. Example: "5m"                                            |

## SAN_DEPOSIT_TRANSACTIONS_BY_EXCHANGE

##### SAN_DEPOSIT_TRANSACTIONS_BY_EXCHANGE(projectSlug, from, to, owner, interval) ⇒ <code>Array</code>

Returns the deposit transactions for a slug in a specific exchange.

- **Kind**: global function
- **Returns**: <code>Array</code> - exchange inflow values.
- **Parameters**:

| Param       | Type                | Description                                                                                                   |
| ----------- | ------------------- | ------------------------------------------------------------------------------------------------------------- |
| projectSlug | <code>string</code> | Name of the asset. More info at https://academy.santiment.net/glossary/#slug. Example: "santiment".          |
| from        | <code>date</code>   | The starting date to fetch the data. Example: DATE(2018, 9, 20)                                              |
| to          | <code>date</code>   | The ending date to fetch the data. Example: DATE(2018, 9, 21)                                                |
| owner       | <code>string</code> | Name of the exchange                                                                                          |
| interval    | <code>string</code> | The resolution with which the data is fetched. Example: "5m"                                                  |

## SAN_DEPOSIT_TRANSACTIONS_INTRADAY

##### SAN_DEPOSIT_TRANSACTIONS_INTRADAY(projectSlug, from, to, interval) ⇒ <code>Array</code>

Returns the number of withdrawal transactions with the option of smaller intervals.

- **Kind**: global function
- **Returns**: <code>Array</code> - An array of the number of withdrawal transactions with the option of smaller intervals.
- **Parameters**:

| Param       | Type                | Description                                                                                       |
| ----------- | ------------------- | ------------------------------------------------------------------------------------------------- |
| projectSlug | <code>string</code> | The asset's name. More info at https://academy.santiment.net/glossary/#slug. Example: "santiment".|
| from        | <code>date</code>   | The starting date to fetch the data. Example: DATE(2018, 9, 20)                                  |
| to          | <code>date</code>   | The ending date to fetch the data. Example: DATE(2018, 9, 21)                                    |
| interval    | <code>string</code> | The resolution with which the data is fetched. Example: "5m"                                     |

## SAN_DEPOSIT_TRANSACTIONS_INTRADAY_AGGREGATED

##### SAN_DEPOSIT_TRANSACTIONS_INTRADAY_AGGREGATED(projectSlug, from, to, aggregation) ⇒ <code>number</code>

Returns the number of withdrawal transactions with the option of smaller intervals.

- **Kind**: global function
- **Returns**: <code>number</code> - Aggregated number of withdrawal transactions with the option of smaller intervals.
- **Parameters**:

| Param       | Type                | Description                                                                                       |
| ----------- | ------------------- | ------------------------------------------------------------------------------------------------- |
| projectSlug | <code>string</code> | Name of the asset. More info at https://academy.santiment.net/glossary/#slug. Example: "santiment". |
| from        | <code>date</code>   | The starting date to fetch the data. Example: DATE(2018, 9, 20)                                   |
| to          | <code>date</code>   | The ending date to fetch the data. Example: DATE(2018, 9, 21)                                     |
| aggregation | <code>string</code> | Aggregation for the timeseries metrics. Example: "LAST"                                           |

## SAN_DEPOSIT_TRANSACTIONS_INTRADAY_MULTIPLE_SLUGS

##### SAN_DEPOSIT_TRANSACTIONS_INTRADAY_MULTIPLE_SLUGS(projectSlugsList, from, to, interval) ⇒ <code>Array</code>

Returns the number of withdrawal transactions with the option of smaller intervals.

- **Kind**: global function
- **Returns**: <code>Array</code> - Array of results for multiple slugs, containing the number of deposit transactions with the option of smaller intervals.
- **Parameters**:

| Param            | Type                | Description                                                                                           |
| ---------------- | ------------------- | ----------------------------------------------------------------------------------------------------- |
| projectSlugsList | <code>string</code> | Comma-separated names of the assets. More info at https://academy.santiment.net/glossary/#slug. Example: "santiment,bitcoin". |
| from             | <code>date</code>   | The starting date to fetch the data. Example: DATE(2018, 9, 20)                                      |
| to               | <code>date</code>   | The ending date to fetch the data. Example: DATE(2018, 9, 21)                                        |
| interval         | <code>string</code> | The resolution with which the data is fetched. Example: "5m"                                         |

## SAN_DEV_ACTIVITY

##### SAN_DEV_ACTIVITY(projectSlug, from, to) ⇒ <code>Array</code>

Returns a list of dev activity for a given slug and time interval.

- **Kind**: global function
- **Returns**: <code>Array</code> - of dev activity.
- **Parameters**:

| Param       | Type                | Description                                                                                                                                           |
| ----------- | ------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| projectSlug | <code>string</code> | The asset's name at sanbase, which can be found at the end of the URL (e.g., the Santiment URL is https://app.santiment.net/projects/santiment, so the projectSlug would be 'santiment'). |
| from        | <code>date</code>   | The starting date to fetch the data. Example: DATE(2018, 9, 20)                                                                                      |
| to          | <code>date</code>   | The ending date to fetch the data. Example: DATE(2018, 9, 21)                                                                                        |

## SAN_EMERGING_TRENDS

##### SAN_EMERGING_TRENDS(size, from, to) ⇒ <code>Array</code>

Returns a list of emerging trends and their corresponding trend scores.

- **Kind**: global function
- **Returns**: <code>Array</code> - of trending words and their scores.
- **Parameters**:

| Param | Type                | Description                                                                                   |
| ----- | ------------------- | --------------------------------------------------------------------------------------------- |
| size  | <code>number</code> | An integer indicating the number of words to include in the top list (max 100).              |
| from  | <code>date</code>   | The starting date to fetch the data. Example: DATE(2018, 9, 20)                              |
| to    | <code>date</code>   | The ending date to fetch the data. Example: DATE(2018, 9, 21)                                |

## SAN_ERC20_PROJECTS

##### SAN_ERC20_PROJECTS() ⇒ <code>Array</code>

Returns an array of all ERC20 assets for which Santiment has data. Each asset record includes: ticker, name, slug, price in USD, market cap in USD, volume in USD, USD balance, ETH balance, ETH spent in the last 30 days, ETH spent in the last 7 days, ETH spent in the last day, and main contract address.

- **Kind**: global function
- **Returns**: <code>Array</code> - of all ERC20 projects.
- **Parameters**:

## SAN_ETH_SPENT_OVER_TIME

##### SAN_ETH_SPENT_OVER_TIME(projectSlug, from, to) ⇒ <code>Array</code>

Returns ETH spent for each interval from the project's team wallet and time period.

- **Kind**: global function
- **Returns**: <code>Array</code> - of the ETH spent over a given period of time
- **Parameters**:

| Param       | Type                | Description                                                                                                                                           |
| ----------- | ------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| projectSlug | <code>string</code> | Name of the asset at sanbase, which can be found at the end of the URL (e.g., the Santiment URL is https://app.santiment.net/projects/santiment, so the projectSlug would be 'santiment'). |
| from        | <code>date</code>   | The starting date to fetch the data. Example: DATE(2018, 9, 20)                                                                                      |
| to          | <code>date</code>   | The ending date to fetch the data. Example: DATE(2018, 9, 21)                                                                                        |

## SAN_ETH_TOP_TRANSACTIONS

##### SAN_ETH_TOP_TRANSACTIONS(projectSlug, from, to, limit, transactionType) ⇒ <code>Array</code>

Returns top ETH transactions for a project's team wallets.

- **Kind**: global function
- **Returns**: <code>Array</code> - of top transactions
- **Parameters**:

| Param           | Type                | Description                                                                                                                                           |
| --------------- | ------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| projectSlug     | <code>string</code> | Name of the asset at sanbase, found at the end of the URL (e.g., for Santiment URL https://app.santiment.net/projects/santiment, the projectSlug would be 'santiment'). |
| from            | <code>date</code>   | The starting date to fetch the data. Example: DATE(2018, 9, 20)                                                                                      |
| to              | <code>date</code>   | The ending date to fetch the data. Example: DATE(2018, 9, 21)                                                                                        |
| limit           | <code>number</code> | The limit of transactions to be shown.                                                                                                                |
| transactionType | <code>string</code> | Available transaction types: ALL, IN, OUT                                                                                                            |

## SAN_EXCHANGE_BALANCE

##### SAN_EXCHANGE_BALANCE(projectSlug, from, to, interval) ⇒ <code>Array</code>

Returns the exchange balance.

- **Kind**: global function
- **Returns**: <code>Array</code> - of exchange balances.
- **Parameters**:

| Param       | Type                | Description                                                                                                   |
| ----------- | ------------------- | ------------------------------------------------------------------------------------------------------------- |
| projectSlug | <code>string</code> | Name of the asset, more info at https://academy.santiment.net/glossary/#slug. Example: "santiment".          |
| from        | <code>date</code>   | The starting date to fetch the data. Example: DATE(2018, 9, 20)                                              |
| to          | <code>date</code>   | The ending date to fetch the data. Example: DATE(2018, 9, 21)                                                |
| interval    | <code>string</code> | The resolution with which the data is fetched. Example: "5m"                                                 |

## SAN_EXCHANGE_BALANCE_AGGREGATED

##### SAN_EXCHANGE_BALANCE_AGGREGATED(projectSlug, from, to, aggregation) ⇒ <code>number</code>

Returns the exchange balance.

- **Kind**: global function
- **Returns**: <code>number</code> - of aggregated exchange balances.
- **Parameters**:

| Param       | Type                | Description                                                                                               |
| ----------- | ------------------- | --------------------------------------------------------------------------------------------------------- |
| projectSlug | <code>string</code> | Name of the asset, more info at https://academy.santiment.net/glossary/#slug. Example: "santiment".      |
| from        | <code>date</code>   | The starting date to fetch the data. Example: DATE(2018, 9, 20)                                          |
| to          | <code>date</code>   | The ending date to fetch the data. Example: DATE(2018, 9, 21)                                            |
| aggregation | <code>string</code> | Aggregation for the timeseries metrics. Example: "LAST"                                                  |

## SAN_EXCHANGE_BALANCE_BY_EXCHANGE

##### SAN_EXCHANGE_BALANCE_BY_EXCHANGE(projectSlug, from, to, owner, interval) ⇒ <code>Array</code>

Returns the exchange balance for a slug in a specific exchange

- **Kind**: global function
- **Returns**: <code>Array</code> - exchange inflow values.
- **Parameters**:

| Param       | Type                | Description                                                                                   |
| ----------- | ------------------- | --------------------------------------------------------------------------------------------- |
| projectSlug | <code>string</code> | Name of the asset, more info at https://academy.santiment.net/glossary/#slug. Example: "santiment". |
| from        | <code>date</code>   | The starting date to fetch the data. Example: DATE(2018, 9, 20)                              |
| to          | <code>date</code>   | The ending date to fetch the data. Example: DATE(2018, 9, 21)                                |
| owner       | <code>string</code> | Name of the exchange                                                                          |
| interval    | <code>string</code> | The resolution with which the data is fetched. Example: "5m"                                  |

## SAN_EXCHANGE_BALANCE_MULTIPLE_SLUGS

##### SAN_EXCHANGE_BALANCE_MULTIPLE_SLUGS(projectSlugsList, from, to, interval) ⇒ <code>Array</code>

Returns the exchange balance for multiple slugs.

- **Kind**: global function
- **Returns**: <code>Array</code> - of results for multiple slugs exchange balances.
- **Parameters**:

| Param            | Type                | Description                                                                                       |
| ---------------- | ------------------- | ------------------------------------------------------------------------------------------------- |
| projectSlugsList | <code>string</code> | Comma-separated names of the assets. More info at [Santiment Glossary](https://academy.santiment.net/glossary/#slug). Example: "santiment,bitcoin". |
| from             | <code>date</code>   | The starting date to fetch the data. Example: DATE(2018, 9, 20)                                  |
| to               | <code>date</code>   | The ending date to fetch the data. Example: DATE(2018, 9, 21)                                    |
| interval         | <code>string</code> | The resolution with which the data is fetched. Example: "5m"                                     |

## SAN_EXCHANGE_FUNDS_FLOW

##### SAN_EXCHANGE_FUNDS_FLOW(projectSlug, from, to) ⇒ <code>Array</code>

Returns the difference between the tokens that were deposited minus the tokens that were withdrawn from an exchange for a given slug and time interval.

- **Kind**: global function
- **Returns**: <code>Array</code> - of token deposit/withdraw differences.
- **Parameters**:

| Param       | Type                | Description                                                                                                                                           |
| ----------- | ------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| projectSlug | <code>string</code> | Name of the asset at sanbase, which can be found at the end of the URL (e.g., the Santiment URL is https://app.santiment.net/projects/santiment, so the projectSlug would be 'santiment'). |
| from        | <code>date</code>   | The starting date to fetch the data. Example: DATE(2018, 9, 20)                                                                                      |
| to          | <code>date</code>   | The ending date to fetch the data. Example: DATE(2018, 9, 21)                                                                                        |

## SAN_EXCHANGE_INFLOW

##### SAN_EXCHANGE_INFLOW(projectSlug, from, to, interval) ⇒ <code>Array</code>

Returns the exchange inflow.

- **Kind**: global function
- **Returns**: <code>Array</code> - of exchange inflows.
- **Parameters**:

| Param       | Type                | Description                                                                                       |
| ----------- | ------------------- | ------------------------------------------------------------------------------------------------- |
| projectSlug | <code>string</code> | Name of the asset, more info at https://academy.santiment.net/glossary/#slug. Example: "santiment". |
| from        | <code>date</code>   | The starting date to fetch the data. Example: DATE(2018, 9, 20)                                   |
| to          | <code>date</code>   | The ending date to fetch the data. Example: DATE(2018, 9, 21)                                     |
| interval    | <code>string</code> | The resolution with which the data is fetched. Example: "5m"                                      |

## SAN_EXCHANGE_INFLOW_AGGREGATED

##### SAN_EXCHANGE_INFLOW_AGGREGATED(projectSlug, from, to, aggregation) ⇒ <code>number</code>

Returns the exchange inflow.

- **Kind**: global function
- **Returns**: <code>number</code> - of aggregated exchange inflows.
- **Parameters**:

| Param       | Type                | Description                                                                                   |
| ----------- | ------------------- | --------------------------------------------------------------------------------------------- |
| projectSlug | <code>string</code> | Name of the asset. More info at [Santiment Glossary](https://academy.santiment.net/glossary/#slug). Example: "santiment". |
| from        | <code>date</code>   | The starting date to fetch the data. Example: DATE(2018, 9, 20)                              |
| to          | <code>date</code>   | The ending date to fetch the data. Example: DATE(2018, 9, 21)                                |
| aggregation | <code>string</code> | Aggregation for the timeseries metrics. Example: "LAST"                                      |

## SAN_EXCHANGE_INFLOW_BY_EXCHANGE

##### SAN_EXCHANGE_INFLOW_BY_EXCHANGE(projectSlug, from, to, owner, interval) ⇒ <code>Array</code>

Returns the exchange inflow for a slug in a specific exchange

- **Kind**: global function
- **Returns**: <code>Array</code> - exchange inflow values.
- **Parameters**:

| Param       | Type                | Description                                                                                   |
| ----------- | ------------------- | --------------------------------------------------------------------------------------------- |
| projectSlug | <code>string</code> | Name of the asset, more info at https://academy.santiment.net/glossary/#slug. Example: "santiment". |
| from        | <code>date</code>   | The starting date to fetch the data. Example: DATE(2018, 9, 20)                              |
| to          | <code>date</code>   | The ending date to fetch the data. Example: DATE(2018, 9, 21)                                |
| owner       | <code>string</code> | Name of the exchange                                                                          |
| interval    | <code>string</code> | The resolution with which the data is fetched. Example: "5m"                                 |

## SAN_EXCHANGE_INFLOW_MULTIPLE_SLUGS

##### SAN_EXCHANGE_INFLOW_MULTIPLE_SLUGS(projectSlugsList, from, to, interval) ⇒ <code>Array</code>

Returns the exchange inflow.

- **Kind**: global function
- **Returns**: <code>Array</code> - of results for multiple slugs exchange inflows.
- **Parameters**:

| Param            | Type                | Description                                                                                   |
| ---------------- | ------------------- | --------------------------------------------------------------------------------------------- |
| projectSlugsList | <code>string</code> | Comma-separated names of the assets, more info at https://academy.santiment.net/glossary/#slug. Example: "santiment,bitcoin". |
| from             | <code>date</code>   | The starting date to fetch the data. Example: DATE(2018, 9, 20)                              |
| to               | <code>date</code>   | The ending date to fetch the data. Example: DATE(2018, 9, 21)                                |
| interval         | <code>string</code> | The resolution with which the data is fetched. Example: "5m"                                  |

## SAN_EXCHANGE_OUTFLOW

##### SAN_EXCHANGE_OUTFLOW(projectSlug, from, to, interval) ⇒ <code>Array</code>

Returns the exchange outflow.

- **Kind**: global function
- **Returns**: <code>Array</code> - of exchange outflows.
- **Parameters**:

| Param       | Type                | Description                                                                                               |
| ----------- | ------------------- | --------------------------------------------------------------------------------------------------------- |
| projectSlug | <code>string</code> | Name of the asset, more info at https://academy.santiment.net/glossary/#slug. Example: "santiment".      |
| from        | <code>date</code>   | The starting date to fetch the data. Example: DATE(2018, 9, 20)                                          |
| to          | <code>date</code>   | The ending date to fetch the data. Example: DATE(2018, 9, 21)                                            |
| interval    | <code>string</code> | The resolution with which the data is fetched. Example: "5m"                                             |

## SAN_EXCHANGE_OUTFLOW_AGGREGATED

##### SAN_EXCHANGE_OUTFLOW_AGGREGATED(projectSlug, from, to, aggregation) ⇒ <code>number</code>

Returns the exchange outflow.

- **Kind**: global function
- **Returns**: <code>number</code> - of aggregated exchange outflows.
- **Parameters**:

| Param       | Type                | Description                                                                                   |
| ----------- | ------------------- | --------------------------------------------------------------------------------------------- |
| projectSlug | <code>string</code> | Asset name, more info at https://academy.santiment.net/glossary/#slug. Example: "santiment". |
| from        | <code>date</code>   | Starting date to fetch the data. Example: DATE(2018, 9, 20)                                  |
| to          | <code>date</code>   | Ending date to fetch the data. Example: DATE(2018, 9, 21)                                    |
| aggregation | <code>string</code> | Aggregation for the timeseries metrics. Example: "LAST"                                      |

## SAN_EXCHANGE_OUTFLOW_BY_EXCHANGE

##### SAN_EXCHANGE_OUTFLOW_BY_EXCHANGE(projectSlug, from, to, owner, interval) ⇒ <code>Array</code>

Returns the exchange outflow for a slug in a specific exchange

- **Kind**: global function
- **Returns**: <code>Array</code> - exchange inflow values.
- **Parameters**:

| Param       | Type                | Description                                                                                                                                   |
| ----------- | ------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| projectSlug | <code>string</code> | Name of the asset, more info at https://academy.santiment.net/glossary/#slug. Example: "santiment".                                          |
| from        | <code>date</code>   | The starting date to fetch the data. Example: DATE(2018, 9, 20)                                                                              |
| to          | <code>date</code>   | The ending date to fetch the data. Example: DATE(2018, 9, 21)                                                                                |
| owner       | <code>string</code> | Name of the exchange                                                                                                                          |
| interval    | <code>string</code> | The resolution with which the data is fetched. Example: "5m"                                                                                 |

## SAN_EXCHANGE_OUTFLOW_MULTIPLE_SLUGS

##### SAN_EXCHANGE_OUTFLOW_MULTIPLE_SLUGS(projectSlugsList, from, to, interval) ⇒ <code>Array</code>

Returns the exchange outflow.

- **Kind**: global function
- **Returns**: <code>Array</code> - of results for multiple slugs exchange outflows.
- **Parameters**:

| Param            | Type                | Description                                                                                       |
| ---------------- | ------------------- | ------------------------------------------------------------------------------------------------- |
| projectSlugsList | <code>string</code> | Comma-separated names of the assets. More info at [Santiment Glossary](https://academy.santiment.net/glossary/#slug). Example: "santiment,bitcoin". |
| from             | <code>date</code>   | The starting date to fetch the data. Example: DATE(2018, 9, 20)                                  |
| to               | <code>date</code>   | The ending date to fetch the data. Example: DATE(2018, 9, 21)                                    |
| interval         | <code>string</code> | The resolution with which the data is fetched. Example: "5m"                                     |

## SAN_EXCHANGE_PERCENT_OF_SUPPLY

##### SAN_EXCHANGE_PERCENT_OF_SUPPLY(projectSlug, from, to, interval) ⇒ <code>Array</code>

Returns exchange percent of total supply.

- **Kind**: global function
- **Returns**: <code>Array</code> - of exchange percent of total supply.
- **Parameters**:

| Param       | Type                | Description                                                                                           |
| ----------- | ------------------- | ----------------------------------------------------------------------------------------------------- |
| projectSlug | <code>string</code> | Name of the asset, more info at https://academy.santiment.net/glossary/#slug. Example: "santiment". |
| from        | <code>date</code>   | The starting date to fetch the data. Example: DATE(2018, 9, 20)                                      |
| to          | <code>date</code>   | The ending date to fetch the data. Example: DATE(2018, 9, 21)                                        |
| interval    | <code>string</code> | The resolution with which the data is fetched. Example: "5m"                                         |

## SAN_EXCHANGE_PERCENT_OF_SUPPLY_AGGREGATED

##### SAN_EXCHANGE_PERCENT_OF_SUPPLY_AGGREGATED(projectSlug, from, to, aggregation) ⇒ <code>number</code>

Returns the exchange percent of total supply.

- **Kind**: global function
- **Returns**: <code>number</code> - Aggregated exchange percent of total supply.
- **Parameters**:

| Param       | Type                | Description                                                                                       |
| ----------- | ------------------- | ------------------------------------------------------------------------------------------------- |
| projectSlug | <code>string</code> | Name of the asset. More info at https://academy.santiment.net/glossary/#slug. Example: "santiment". |
| from        | <code>date</code>   | The starting date to fetch the data. Example: DATE(2018, 9, 20)                                   |
| to          | <code>date</code>   | The ending date to fetch the data. Example: DATE(2018, 9, 21)                                     |
| aggregation | <code>string</code> | Aggregation for the timeseries metrics. Example: "LAST"                                           |

## SAN_EXCHANGE_PERCENT_OF_SUPPLY_MULTIPLE_SLUGS

##### SAN_EXCHANGE_PERCENT_OF_SUPPLY_MULTIPLE_SLUGS(projectSlugsList, from, to, interval) ⇒ <code>Array</code>

Returns exchange percent of total supply.

- **Kind**: global function
- **Returns**: <code>Array</code> - of results for multiple slugs exchange percent of total supply.
- **Parameters**:

| Param            | Type                | Description                                                                                   |
| ---------------- | ------------------- | --------------------------------------------------------------------------------------------- |
| projectSlugsList | <code>string</code> | Comma-separated names of the assets. More info at https://academy.santiment.net/glossary/#slug. Example: "santiment,bitcoin". |
| from             | <code>date</code>   | The starting date to fetch the data. Example: DATE(2018, 9, 20)                              |
| to               | <code>date</code>   | The ending date to fetch the data. Example: DATE(2018, 9, 21)                                |
| interval         | <code>string</code> | The resolution with which the data is fetched. Example: "5m"                                 |

## SAN_FUNCTIONS

##### SAN_FUNCTIONS() ⇒ <code>Array</code>

Returns all available functions.

- **Kind**: global function
- **Returns**: <code>Array</code> - of function names.
- **Parameters**:

## SAN_FUNDING_RATE_BUSD

##### SAN_FUNDING_RATE_BUSD(projectSlug, from, to, fundingRateExchange, interval) ⇒ <code>Array</code>

Returns the funding rates that are paid by one of the sides of the perpetual contract to the other (BUSD).

- **Kind**: global function
- **Returns**: <code>Array</code> - of the funding rates that are paid by one of the sides of the perpetual contract to the other (BUSD).
- **Parameters**:

| Param               | Type                | Description                                                                                   |
| ------------------- | ------------------- | --------------------------------------------------------------------------------------------- |
| projectSlug         | <code>string</code> | Name of the asset. More info at [Santiment Glossary](https://academy.santiment.net/glossary/#slug). Example: "santiment". |
| from                | <code>date</code>   | The starting date to fetch the data. Example: DATE(2018, 9, 20)                              |
| to                  | <code>date</code>   | The ending date to fetch the data. Example: DATE(2018, 9, 21)                                |
| fundingRateExchange | <code>string</code> | The exchange platform, from which funding rates are fetched. Default: "BITMEX". Options: "BITMEX", "BINANCE", "FTX", "DYDX", "BITFINEX", "DERIBIT". |
| interval            | <code>string</code> | The resolution with which the data is fetched. Example: "5m"                                  |

## SAN_FUNDING_RATE_BUSD_AGGREGATED

##### SAN_FUNDING_RATE_BUSD_AGGREGATED(projectSlug, from, to, fundingRateExchange, aggregation) ⇒ <code>number</code>

Returns the aggregated funding rates (BUSD) paid by one side of the perpetual contract to the other.

- **Kind**: global function
- **Returns**: <code>number</code> - Aggregated funding rates (BUSD) paid by one side of the perpetual contract to the other.
- **Parameters**:

| Param               | Type                | Description                                                                                               |
| ------------------- | ------------------- | --------------------------------------------------------------------------------------------------------- |
| projectSlug         | <code>string</code> | Asset name. More info at https://academy.santiment.net/glossary/#slug. Example: "santiment".             |
| from                | <code>date</code>   | Starting date to fetch the data. Example: DATE(2018, 9, 20)                                              |
| to                  | <code>date</code>   | Ending date to fetch the data. Example: DATE(2018, 9, 21)                                                |
| fundingRateExchange | <code>string</code> | Exchange platform from which funding rates are fetched. Default is "BITMEX". Options: "BITMEX", "BINANCE" |
| aggregation         | <code>string</code> | Aggregation for the timeseries metrics. Example: "LAST"                                                   |

## SAN_FUNDING_RATE_BUSD_MULTIPLE_SLUGS

##### SAN_FUNDING_RATE_BUSD_MULTIPLE_SLUGS(projectSlugsList, from, to, fundingRateExchange, interval) ⇒ <code>Array</code>

Returns the funding rates that are paid by one of the sides of the perpetual contract to the other (BUSD).

- **Kind**: global function
- **Returns**: <code>Array</code> - of results for multiple slugs, the funding rates that are paid by one of the sides of the perpetual contract to the other (BUSD).
- **Parameters**:

| Param               | Type                | Description                                                                                   |
| ------------------- | ------------------- | --------------------------------------------------------------------------------------------- |
| projectSlugsList    | <code>string</code> | Comma-separated names of the assets, more info at https://academy.santiment.net/glossary/#slug. Example: "santiment,bitcoin". |
| from                | <code>date</code>   | The starting date to fetch the data. Example: DATE(2018, 9, 20)                              |
| to                  | <code>date</code>   | The ending date to fetch the data. Example: DATE(2018, 9, 21)                                |
| fundingRateExchange | <code>string</code> | The exchange platform, from which funding rates are fetched, BITMEX by default: "BITMEX", "BINANCE". |
| interval            | <code>string</code> | The resolution with which the data is fetched. Example: "5m"                                  |

## SAN_FUNDING_RATE_USDT

##### SAN_FUNDING_RATE_USDT(projectSlug, from, to, fundingRateExchange, interval) ⇒ <code>Array</code>

Returns the funding rates that are paid by one of the sides of the perpetual contract to the other (USDT).

- **Kind**: global function
- **Returns**: <code>Array</code> - of the funding rates that are paid by one of the sides of the perpetual contract to the other (USDT).
- **Parameters**:

| Param               | Type                | Description                                                                                                                                                                            |
| ------------------- | ------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| projectSlug         | <code>string</code> | Name of the asset, more info at https://academy.santiment.net/glossary/#slug. Example: "santiment".                                                                                   |
| from                | <code>date</code>   | The starting date to fetch the data. Example: DATE(2018, 9, 20)                                                                                                                       |
| to                  | <code>date</code>   | The ending date to fetch the data. Example: DATE(2018, 9, 21)                                                                                                                         |
| fundingRateExchange | <code>string</code> | The exchange platform, from which funding rates are fetched, BITMEX by default: "BITMEX" "BINANCE" "FTX" "DYDX" "BITFINEX" "DERIBIT"                                                   |
| interval            | <code>string</code> | The resolution with which the data is fetched. Example: "5m"                                                                                                                          |

## SAN_FUNDING_RATE_USDT_AGGREGATED

##### SAN_FUNDING_RATE_USDT_AGGREGATED(projectSlug, from, to, fundingRateExchange, aggregation) ⇒ <code>number</code>

Returns the aggregated funding rates paid by one side of the perpetual contract to the other (USDT).

- **Kind**: global function
- **Returns**: <code>number</code> - Aggregated funding rates paid by one side of the perpetual contract to the other (USDT).
- **Parameters**:

| Param               | Type                | Description                                                                                       |
| ------------------- | ------------------- | ------------------------------------------------------------------------------------------------- |
| projectSlug         | <code>string</code> | Asset name. More info at https://academy.santiment.net/glossary/#slug. Example: "santiment".     |
| from                | <code>date</code>   | Starting date to fetch the data. Example: DATE(2018, 9, 20).                                     |
| to                  | <code>date</code>   | Ending date to fetch the data. Example: DATE(2018, 9, 21).                                       |
| fundingRateExchange | <code>string</code> | Exchange platform for fetching funding rates. Default: "BITMEX". Options: "BITMEX", "BINANCE".   |
| aggregation         | <code>string</code> | Aggregation method for the timeseries metrics. Example: "LAST".                                  |

## SAN_FUNDING_RATE_USDT_MULTIPLE_SLUGS

##### SAN_FUNDING_RATE_USDT_MULTIPLE_SLUGS(projectSlugsList, from, to, fundingRateExchange, interval) ⇒ <code>Array</code>

Returns the funding rates that are paid by one of the sides of the perpetual contract to the other (USDT).

- **Kind**: global function
- **Returns**: <code>Array</code> - of results for multiple slugs, the funding rates that are paid by one of the sides of the perpetual contract to the other (USDT).
- **Parameters**:

| Param               | Type                | Description                                                                                                                           |
| ------------------- | ------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| projectSlugsList    | <code>string</code> | Comma-separated names of the assets, more info at https://academy.santiment.net/glossary/#slug. Example: "santiment,bitcoin".       |
| from                | <code>date</code>   | The starting date to fetch the data. Example: DATE(2018, 9, 20)                                                                      |
| to                  | <code>date</code>   | The ending date to fetch the data. Example: DATE(2018, 9, 21)                                                                        |
| fundingRateExchange | <code>string</code> | The exchange platform, from which funding rates are fetched, BITMEX by default: "BITMEX" "BINANCE"                                    |
| interval            | <code>string</code> | The resolution with which the data is fetched. Example: "5m"                                                                          |

## SAN_GAS_USED

##### SAN_GAS_USED(projectSlug, from, to) ⇒ <code>Array</code>

Returns the amount of Gas used by a blockchain. When you send tokens, interact with a contract, or perform any other action on the blockchain, you must pay for that computation. This payment is calculated in Gas.

- **Kind**: global function
- **Returns**: <code>Array</code> - An array of quantities of gas used.
- **Parameters**:

| Param       | Type                | Description                                                                                                                                           |
| ----------- | ------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| projectSlug | <code>string</code> | The name of the asset on Sanbase, which can be found at the end of the URL (e.g., the Santiment URL is https://app.santiment.net/projects/santiment, so the projectSlug would be 'santiment'). |
| from        | <code>date</code>   | The starting date to fetch the data. Example: DATE(2018, 9, 20)                                                                                      |
| to          | <code>date</code>   | The ending date to fetch the data. Example: DATE(2018, 9, 21)                                                                                        |

## SAN_GITHUB_ACTIVITY

##### SAN_GITHUB_ACTIVITY(projectSlug, from, to) ⇒ <code>Array</code>

Returns a list of GitHub activity for a given slug and time interval.

- **Kind**: global function
- **Returns**: <code>Array</code> - of GitHub activity.
- **Parameters**:

| Param       | Type                | Description                                                                                                                                           |
| ----------- | ------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| projectSlug | <code>string</code> | Name of the asset at Sanbase, which can be found at the end of the URL (e.g., the Santiment URL is https://app.santiment.net/projects/santiment, so the projectSlug would be 'santiment'). |
| from        | <code>date</code>   | The starting date to fetch the data. Example: DATE(2018, 9, 20)                                                                                      |
| to          | <code>date</code>   | The ending date to fetch the data. Example: DATE(2018, 9, 21)                                                                                        |

## SAN_HISTORICAL_BALANCE

##### SAN_HISTORICAL_BALANCE(projectSlug, from, to, address) ⇒ <code>Array</code>

Returns the historical balance for a given ERC20 or ETH address.

- **Kind**: global function
- **Returns**: <code>Array</code> - of balances.
- **Parameters**:

| Param       | Type                | Description                                                                                                                                         |
| ----------- | ------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| projectSlug | <code>string</code> | Name of the asset at sanbase, found at the end of the URL (e.g., for Santiment URL https://app.santiment.net/projects/santiment, the projectSlug would be 'santiment'). |
| from        | <code>date</code>   | The starting date to fetch the data. Example: DATE(2018, 9, 20)                                                                                    |
| to          | <code>date</code>   | The ending date to fetch the data. Example: DATE(2018, 9, 21)                                                                                      |
| address     | <code>string</code> | ERC20 or ETH address.                                                                                                                              |

## SAN_HISTORICAL_BALANCE_DEDUP

##### SAN_HISTORICAL_BALANCE_DEDUP(projectSlug, from, to, address) ⇒ <code>Array</code>

Returns the historical balance for a given ERC20 or ETH address.

- **Kind**: global function
- **Returns**: <code>Array</code> - of balances.
- **Parameters**:

| Param       | Type                | Description                                                                                                                                           |
| ----------- | ------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| projectSlug | <code>string</code> | Name of the asset at sanbase, found at the end of the URL (e.g., for Santiment, the URL is https://app.santiment.net/projects/santiment).             |
| from        | <code>date</code>   | The starting date to fetch the data. Example: DATE(2018, 9, 20)                                                                                      |
| to          | <code>date</code>   | The ending date to fetch the data. Example: DATE(2018, 9, 21)                                                                                        |
| address     | <code>string</code> | ERC20 or ETH address.                                                                                                                                |

## SAN_HISTORY_TWITTER_DATA

##### SAN_HISTORY_TWITTER_DATA(projectSlug, from, to) ⇒ <code>Array</code>

Returns the historical count of Twitter followers.

- **Kind**: global function
- **Returns**: <code>Array</code> - followers count over time.
- **Parameters**:

| Param       | Type                | Description                                                                                       |
| ----------- | ------------------- | ------------------------------------------------------------------------------------------------- |
| projectSlug | <code>string</code> | The asset's name on Sanbase, found at the end of the URL (e.g., for https://app.santiment.net/projects/santiment, the projectSlug would be 'santiment'). |
| from        | <code>date</code>   | The starting date to fetch the data. Example: DATE(2018, 9, 20)                                  |
| to          | <code>date</code>   | The ending date to fetch the data. Example: DATE(2018, 9, 21)                                    |

## SAN_HOLDERS_DISTRIBUTION

##### SAN_HOLDERS_DISTRIBUTION(projectSlug, from, to, balance, interval) ⇒ <code>Array</code>

Represents the total number of addresses holding the given amount of tokens.

- **Kind**: global function
- **Returns**: <code>Array</code> - of total number of addresses holding the given amount of tokens.
- **Parameters**:

| Param       | Type                | Description                                                                                                                                                                            |
| ----------- | ------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| projectSlug | <code>string</code> | Name of the asset, more info at https://academy.santiment.net/glossary/#slug. Example: "santiment".                                                                                   |
| from        | <code>date</code>   | The starting date to fetch the data. Example: DATE(2018, 9, 20)                                                                                                                       |
| to          | <code>date</code>   | The ending date to fetch the data. Example: DATE(2018, 9, 21)                                                                                                                         |
| balance     | <code>string</code> | Interval of amount of tokens. Available balance intervals are: "0-0.001", "0.001-0.01", "0.01-0.1", "0.1-1", "1-10", "10-100", "100-1k", "1k-10k", "10k-100k", "100k-1M", "1M-10M", "10M-100M", "100M-1B", "1B-inf", "total" |
| interval    | <code>string</code> | The resolution with which the data is fetched. Example: "5m"                                                                                                                           |

## SAN_HOLDERS_DISTRIBUTION_AGGREGATED

##### SAN_HOLDERS_DISTRIBUTION_AGGREGATED(projectSlug, from, to, balance, aggregation) ⇒ <code>number</code>

Represents the total number of addresses holding the given amount of tokens.

- **Kind**: global function
- **Returns**: <code>number</code> - of aggregated total number of addresses holding the given amount of tokens.
- **Parameters**:

| Param       | Type                | Description                                                                                                                                                                                                                       |
| ----------- | ------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| projectSlug | <code>string</code> | Name of the asset, more info at https://academy.santiment.net/glossary/#slug. Example: "santiment".                                                                                                                              |
| from        | <code>date</code>   | The starting date to fetch the data. Example: DATE(2018, 9, 20)                                                                                                                                                                  |
| to          | <code>date</code>   | The ending date to fetch the data. Example: DATE(2018, 9, 21)                                                                                                                                                                    |
| balance     | <code>string</code> | Interval of amount of tokens. Available balance intervals are: "0-0.001", "0.001-0.01", "0.01-0.1", "0.1-1", "1-10", "10-100", "100-1k", "1k-10k", "10k-100k", "100k-1M", "1M-10M", "10M-100M", "100M-1B", "1B-inf", "total" |
| aggregation | <code>string</code> | Aggregation for the timeseries metrics. Example: "LAST"                                                                                                                                                                           |

## SAN_HOLDERS_DISTRIBUTION_COMBINED_BALANCE

##### SAN_HOLDERS_DISTRIBUTION_COMBINED_BALANCE(projectSlug, from, to, balance, interval) ⇒ <code>Array</code>

Returns the number of tokens in a specific bucket.

- **Kind**: global function
- **Returns**: <code>Array</code> - of the number of tokens in a specific bucket.
- **Parameters**:

| Param       | Type                | Description                                                                                                                                                                            |
| ----------- | ------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| projectSlug | <code>string</code> | Name of the asset, more info at https://academy.santiment.net/glossary/#slug. Example: "santiment".                                                                                   |
| from        | <code>date</code>   | The starting date to fetch the data. Example: DATE(2018, 9, 20)                                                                                                                       |
| to          | <code>date</code>   | The ending date to fetch the data. Example: DATE(2018, 9, 21)                                                                                                                         |
| balance     | <code>string</code> | Interval of amount of tokens. Available balance intervals are: "0-0.001", "0.001-0.01", "0.01-0.1", "0.1-1", "1-10", "10-100", "100-1k", "1k-10k", "10k-100k", "100k-1M", "1M-10M", "10M-100M", "100M-1B", "1B-inf", "total" |
| interval    | <code>string</code> | The resolution with which the data is fetched. Example: "5m"                                                                                                                          |

## SAN_HOLDERS_DISTRIBUTION_COMBINED_BALANCE_AGGREGATED

##### SAN_HOLDERS_DISTRIBUTION_COMBINED_BALANCE_AGGREGATED(projectSlug, from, to, balance, aggregation) ⇒ <code>number</code>

Returns the number of tokens in a specific bucket.

- **Kind**: global function
- **Returns**: <code>number</code> - the aggregated number of tokens in a specific bucket.
- **Parameters**:

| Param       | Type                | Description                                                                                                                                                                            |
| ----------- | ------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| projectSlug | <code>string</code> | Name of the asset, more info at https://academy.santiment.net/glossary/#slug. Example: "santiment".                                                                                   |
| from        | <code>date</code>   | The starting date to fetch the data. Example: DATE(2018, 9, 20)                                                                                                                       |
| to          | <code>date</code>   | The ending date to fetch the data. Example: DATE(2018, 9, 21)                                                                                                                         |
| balance     | <code>string</code> | Interval of amount of tokens. Available balance intervals are: "0-0.001", "0.001-0.01", "0.01-0.1", "0.1-1", "1-10", "10-100", "100-1k", "1k-10k", "10k-100k", "100k-1M", "1M-10M", "10M-100M", "100M-1B", "1B-inf", "total" |
| aggregation | <code>string</code> | Aggregation for the timeseries metrics. Example: "LAST"                                                                                                                               |

## SAN_HOLDERS_DISTRIBUTION_COMBINED_BALANCE_MULTIPLE_SLUGS

##### SAN_HOLDERS_DISTRIBUTION_COMBINED_BALANCE_MULTIPLE_SLUGS(projectSlugsList, from, to, balance, interval) ⇒ <code>Array</code>

Returns the number of tokens in a specific bucket.

- **Kind**: global function
- **Returns**: <code>Array</code> - of results for multiple slugs, the number of tokens in a specific bucket.
- **Parameters**:

| Param            | Type                | Description                                                                                                                                                                            |
| ---------------- | ------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| projectSlugsList | <code>string</code> | Comma-separated names of the assets, more info at https://academy.santiment.net/glossary/#slug. Example: "santiment,bitcoin".                                                          |
| from             | <code>date</code>   | The starting date to fetch the data. Example: DATE(2018, 9, 20)                                                                                                                        |
| to               | <code>date</code>   | The ending date to fetch the data. Example: DATE(2018, 9, 21)                                                                                                                          |
| balance          | <code>string</code> | Interval of amount of tokens. Available balance intervals are: "0-0.001", "0.001-0.01", "0.01-0.1", "0.1-1", "1-10", "10-100", "100-1k", "1k-10k", "10k-100k", "100k-1M", "1M-10M", "10M-100M", "100M-1B", "1B-inf", "total" |
| interval         | <code>string</code> | The resolution with which the data is fetched. Example: "5m"                                                                                                                           |

## SAN_HOLDERS_DISTRIBUTION_MULTIPLE_SLUGS

##### SAN_HOLDERS_DISTRIBUTION_MULTIPLE_SLUGS(projectSlugsList, from, to, balance, interval) ⇒ <code>Array</code>

Represents the total number of addresses holding the given amount of tokens.

- **Kind**: global function
- **Returns**: <code>Array</code> - of results for multiple slugs total number of addresses holding the given amount of tokens.
- **Parameters**:

| Param            | Type                | Description                                                                                                                                                                            |
| ---------------- | ------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| projectSlugsList | <code>string</code> | Comma-separated names of the assets, more info at https://academy.santiment.net/glossary/#slug. Example: "santiment,bitcoin".                                                         |
| from             | <code>date</code>   | The starting date to fetch the data. Example: DATE(2018, 9, 20)                                                                                                                        |
| to               | <code>date</code>   | The ending date to fetch the data. Example: DATE(2018, 9, 21)                                                                                                                          |
| balance          | <code>string</code> | Interval of amount of tokens. Available balance intervals are: "0-0.001", "0.001-0.01", "0.01-0.1", "0.1-1", "1-10", "10-100", "100-1k", "1k-10k", "10k-100k", "100k-1M", "1M-10M", "10M-100M", "100M-1B", "1B-inf", "total" |
| interval         | <code>string</code> | The resolution with which the data is fetched. Example: "5m"                                                                                                                           |

## SAN_LATEST_PRICE

##### SAN_LATEST_PRICE(projectSlug, currency) ⇒ <code>number</code>

Returns the latest price for a given asset in a desired currency.

- **Kind**: global function
- **Returns**: <code>number</code> - latest price.
- **Parameters**:

| Param       | Type                | Description                                                                                           |
| ----------- | ------------------- | ----------------------------------------------------------------------------------------------------- |
| projectSlug | <code>string</code> | The asset's name on Sanbase, found at the end of the URL (e.g., for https://app.santiment.net/projects/santiment, the projectSlug would be 'santiment'). |
| currency    | <code>string</code> | The desired currency for the data presentation, either "USD" or "BTC".                               |

## SAN_MARKETCAP

##### SAN_MARKETCAP(projectSlug, from, to, currency, interval) ⇒ <code>Array</code>

Returns the market cap for a slug.

- **Kind**: global function
- **Returns**: <code>Array</code> - of the slug's market cap.
- **Parameters**:

| Param       | Type                | Description                                                                                                       |
| ----------- | ------------------- | ----------------------------------------------------------------------------------------------------------------- |
| projectSlug | <code>string</code> | Name of the asset, more info at https://academy.santiment.net/glossary/#slug. Example: "santiment".              |
| from        | <code>date</code>   | The starting date to fetch the data. Example: DATE(2018, 9, 20)                                                  |
| to          | <code>date</code>   | The ending date to fetch the data. Example: DATE(2018, 9, 21)                                                    |
| currency    | <code>string</code> | The metric is calculated using a currency of choice. Available currencies: USD                                   |
| interval    | <code>string</code> | The resolution with which the data is fetched. Example: "5m"                                                     |

## SAN_MARKETCAP_AGGREGATED

##### SAN_MARKETCAP_AGGREGATED(projectSlug, from, to, currency, aggregation) ⇒ <code>number</code>

Returns the market cap for a slug.

- **Kind**: global function
- **Returns**: <code>number</code> - the aggregated market cap of the slug.
- **Parameters**:

| Param       | Type                | Description                                                                                       |
| ----------- | ------------------- | ------------------------------------------------------------------------------------------------- |
| projectSlug | <code>string</code> | Name of the asset. More info at https://academy.santiment.net/glossary/#slug. Example: "santiment". |
| from        | <code>date</code>   | The starting date to fetch the data. Example: DATE(2018, 9, 20)                                   |
| to          | <code>date</code>   | The ending date to fetch the data. Example: DATE(2018, 9, 21)                                     |
| currency    | <code>string</code> | The metric is calculated using a currency of choice. Available currencies: USD                     |
| aggregation | <code>string</code> | Aggregation for the timeseries metrics. Example: "LAST"                                           |

## SAN_MARKETCAP_MULTIPLE_SLUGS

##### SAN_MARKETCAP_MULTIPLE_SLUGS(projectSlugsList, from, to, currency, interval) ⇒ <code>Array</code>

Returns the marketcap for multiple slugs.

- **Kind**: global function
- **Returns**: <code>Array</code> - of results for the marketcap of multiple slugs.
- **Parameters**:

| Param            | Type                | Description                                                                                                                                          |
| ---------------- | ------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| projectSlugsList | <code>string</code> | Comma-separated names of the assets, more info at https://academy.santiment.net/glossary/#slug. Example: "santiment,bitcoin".                       |
| from             | <code>date</code>   | The starting date to fetch the data. Example: DATE(2018, 9, 20)                                                                                     |
| to               | <code>date</code>   | The ending date to fetch the data. Example: DATE(2018, 9, 21)                                                                                       |
| currency         | <code>string</code> | The metric is calculated using a currency of choice. Available currencies: USD                                                                      |
| interval         | <code>string</code> | The resolution with which the data is fetched. Example: "5m"                                                                                        |

## SAN_MEAN_AGE

##### SAN_MEAN_AGE(projectSlug, from, to, interval) ⇒ <code>Array</code>

Returns the token's mean age.

- **Kind**: global function
- **Returns**: <code>Array</code> - of mean age values.
- **Parameters**:

| Param       | Type                | Description                                                                                   |
| ----------- | ------------------- | --------------------------------------------------------------------------------------------- |
| projectSlug | <code>string</code> | Name of the asset. More info at [Santiment Glossary](https://academy.santiment.net/glossary/#slug). Example: "santiment". |
| from        | <code>date</code>   | The starting date to fetch the data. Example: DATE(2018, 9, 20)                              |
| to          | <code>date</code>   | The ending date to fetch the data. Example: DATE(2018, 9, 21)                                |
| interval    | <code>string</code> | The resolution with which the data is fetched. Example: "5m"                                 |

## SAN_MEAN_AGE_AGGREGATED

##### SAN_MEAN_AGE_AGGREGATED(projectSlug, from, to, aggregation) ⇒ <code>number</code>

Returns the token's mean age.

- **Kind**: global function
- **Returns**: <code>number</code> - of aggregated mean age values.
- **Parameters**:

| Param       | Type                | Description                                                                                   |
| ----------- | ------------------- | --------------------------------------------------------------------------------------------- |
| projectSlug | <code>string</code> | Name of the asset. More info at [Santiment Glossary](https://academy.santiment.net/glossary/#slug). Example: "santiment". |
| from        | <code>date</code>   | The starting date to fetch the data. Example: DATE(2018, 9, 20)                              |
| to          | <code>date</code>   | The ending date to fetch the data. Example: DATE(2018, 9, 21)                                |
| aggregation | <code>string</code> | Aggregation for the timeseries metrics. Example: "LAST"                                      |

## SAN_MEAN_AGE_MULTIPLE_SLUGS

##### SAN_MEAN_AGE_MULTIPLE_SLUGS(projectSlugsList, from, to, interval) ⇒ <code>Array</code>

Returns the token's mean age.

- **Kind**: global function
- **Returns**: <code>Array</code> - of results for multiple slugs mean age values.
- **Parameters**:

| Param            | Type                | Description                                                                                                       |
| ---------------- | ------------------- | ----------------------------------------------------------------------------------------------------------------- |
| projectSlugsList | <code>string</code> | Comma-separated names of the assets, more info at https://academy.santiment.net/glossary/#slug. Example: "santiment,bitcoin". |
| from             | <code>date</code>   | The starting date to fetch the data. Example: DATE(2018, 9, 20)                                                  |
| to               | <code>date</code>   | The ending date to fetch the data. Example: DATE(2018, 9, 21)                                                    |
| interval         | <code>string</code> | The resolution with which the data is fetched. Example: "5m"                                                     |

## SAN_MEAN_DOLLAR_INVESTED_AGE

##### SAN_MEAN_DOLLAR_INVESTED_AGE(projectSlug, from, to, interval) ⇒ <code>Array</code>

Returns the token's mean dollar invested age.

- **Kind**: global function
- **Returns**: <code>Array</code> - of mean dollar invested age values.
- **Parameters**:

| Param       | Type                | Description                                                                                           |
| ----------- | ------------------- | ----------------------------------------------------------------------------------------------------- |
| projectSlug | <code>string</code> | Name of the asset, more info at https://academy.santiment.net/glossary/#slug. Example: "santiment".  |
| from        | <code>date</code>   | The starting date to fetch the data. Example: DATE(2018, 9, 20)                                      |
| to          | <code>date</code>   | The ending date to fetch the data. Example: DATE(2018, 9, 21)                                        |
| interval    | <code>string</code> | The resolution with which the data is fetched. Example: "5m"                                         |

## SAN_MEAN_DOLLAR_INVESTED_AGE_AGGREGATED

##### SAN_MEAN_DOLLAR_INVESTED_AGE_AGGREGATED(projectSlug, from, to, aggregation) ⇒ <code>number</code>

Returns the token's mean dollar invested age.

- **Kind**: global function
- **Returns**: <code>number</code> - of aggregated mean dollar invested age values.
- **Parameters**:

| Param       | Type                | Description                                                                                                   |
| ----------- | ------------------- | ------------------------------------------------------------------------------------------------------------- |
| projectSlug | <code>string</code> | Name of the asset, more info at https://academy.santiment.net/glossary/#slug. Example: "santiment".          |
| from        | <code>date</code>   | The starting date to fetch the data. Example: DATE(2018, 9, 20)                                              |
| to          | <code>date</code>   | The ending date to fetch the data. Example: DATE(2018, 9, 21)                                                |
| aggregation | <code>string</code> | Aggregation for the timeseries metrics. Example: "LAST"                                                      |

## SAN_MEAN_DOLLAR_INVESTED_AGE_MULTIPLE_SLUGS

##### SAN_MEAN_DOLLAR_INVESTED_AGE_MULTIPLE_SLUGS(projectSlugsList, from, to, interval) ⇒ <code>Array</code>

Returns the token's mean dollar invested age.

- **Kind**: global function
- **Returns**: <code>Array</code> - of results for multiple slugs mean dollar invested age values.
- **Parameters**:

| Param            | Type                | Description                                                                                   |
| ---------------- | ------------------- | --------------------------------------------------------------------------------------------- |
| projectSlugsList | <code>string</code> | Comma-separated names of the assets. Example: "santiment,bitcoin".                            |
| from             | <code>date</code>   | The starting date to fetch the data. Example: DATE(2018, 9, 20)                               |
| to               | <code>date</code>   | The ending date to fetch the data. Example: DATE(2018, 9, 21)                                 |
| interval         | <code>string</code> | The resolution with which the data is fetched. Example: "5m"                                  |

## SAN_MEAN_REALIZED_PRICE

##### SAN_MEAN_REALIZED_PRICE(projectSlug, from, to, currency, timeBound, interval) ⇒ <code>Array</code>

Returns the mean realized price.

- **Kind**: global function
- **Returns**: <code>Array</code> - of mean realized prices.
- **Parameters**:

| Param       | Type                | Description                                                                                                                                           |
| ----------- | ------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| projectSlug | <code>string</code> | Name of the asset, more info at https://academy.santiment.net/glossary/#slug. Example: "santiment".                                                   |
| from        | <code>date</code>   | The starting date to fetch the data. Example: DATE(2018, 9, 20)                                                                                      |
| to          | <code>date</code>   | The ending date to fetch the data. Example: DATE(2018, 9, 21)                                                                                        |
| currency    | <code>string</code> | The metric is calculated using a currency of choice. Available currencies: USD                                                                        |
| timeBound   | <code>string</code> | The metric is calculated only by taking into account the tokens/coins that have moved in the past number of years or days.                            |
| interval    | <code>string</code> | The resolution with which the data is fetched. Example: "5m"                                                                                         |

## SAN_MEAN_REALIZED_PRICE_AGGREGATED

##### SAN_MEAN_REALIZED_PRICE_AGGREGATED(projectSlug, from, to, currency, timeBound, aggregation) ⇒ <code>number</code>

Returns the mean realized price.

- **Kind**: global function
- **Returns**: <code>number</code> - of aggregated mean realized prices.
- **Parameters**:

| Param       | Type                | Description                                                                                                                                                                            |
| ----------- | ------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| projectSlug | <code>string</code> | Name of the asset, more info at https://academy.santiment.net/glossary/#slug. Example: "santiment".                                                                                   |
| from        | <code>date</code>   | The starting date to fetch the data. Example: DATE(2018, 9, 20)                                                                                                                       |
| to          | <code>date</code>   | The ending date to fetch the data. Example: DATE(2018, 9, 21)                                                                                                                         |
| currency    | <code>string</code> | The metric is calculated using a currency of choice. Available currencies: USD                                                                                                        |
| timeBound   | <code>string</code> | The metric is calculated only by taking into account the tokens/coins that have moved in the past number of years/days.                                                               |
| aggregation | <code>string</code> | Aggregation for the timeseries metrics. Example: "LAST"                                                                                                                               |

## SAN_MEAN_REALIZED_PRICE_MULTIPLE_SLUGS

##### SAN_MEAN_REALIZED_PRICE_MULTIPLE_SLUGS(projectSlugsList, from, to, currency, timeBound, interval) ⇒ <code>Array</code>

Returns the mean realized price.

- **Kind**: global function
- **Returns**: <code>Array</code> - of results for multiple slugs mean realized prices.
- **Parameters**:

| Param            | Type                | Description                                                                                           |
| ---------------- | ------------------- | ----------------------------------------------------------------------------------------------------- |
| projectSlugsList | <code>string</code> | Comma-separated names of the assets. More info at https://academy.santiment.net/glossary/#slug. Example: "santiment,bitcoin". |
| from             | <code>date</code>   | The starting date to fetch the data. Example: DATE(2018, 9, 20)                                      |
| to               | <code>date</code>   | The ending date to fetch the data. Example: DATE(2018, 9, 21)                                        |
| currency         | <code>string</code> | The metric is calculated using a currency of choice. Available currencies: USD                        |
| timeBound        | <code>string</code> | The metric is calculated only by taking into account the tokens/coins that have moved in the past number of years/days. |
| interval         | <code>string</code> | The resolution with which the data is fetched. Example: "5m"                                         |

## SAN_MINERS_BALANCE

##### SAN_MINERS_BALANCE(projectSlug, from, to) ⇒ <code>Array</code>

Returns miners balances over time. Currently, only ETH is supported.

- **Kind**: global function
- **Returns**: <code>Array</code> - of balances.
- **Parameters**:

| Param       | Type                | Description                                                                                                                                           |
| ----------- | ------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| projectSlug | <code>string</code> | Name of the asset at sanbase, found at the end of the URL (e.g., for Santiment URL https://app.santiment.net/projects/santiment, the projectSlug would be "santiment"). |
| from        | <code>date</code>   | The starting date to fetch the data. Example: DATE(2018, 9, 20)                                                                                      |
| to          | <code>date</code>   | The ending date to fetch the data. Example: DATE(2018, 9, 21)                                                                                        |

## SAN_MINING_POOLS_DISTRIBUTION

##### SAN_MINING_POOLS_DISTRIBUTION(projectSlug, from, to) ⇒ <code>Array</code>

Returns the distribution of miners between mining pools, showing the percentage of miners using top3, top10, and all other pools. Currently, only ETH is supported.

- **Kind**: global function
- **Returns**: <code>Array</code> - of distribution ratios.
- **Parameters**:

| Param       | Type                | Description                                                                                                                                           |
| ----------- | ------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| projectSlug | <code>string</code> | Name of the asset on Sanbase, found at the end of the URL (e.g., for Santiment, the URL is https://app.santiment.net/projects/santiment, so the projectSlug would be 'santiment'). |
| from        | <code>date</code>   | The starting date to fetch the data. Example: DATE(2018, 9, 20)                                                                                      |
| to          | <code>date</code>   | The ending date to fetch the data. Example: DATE(2018, 9, 21)                                                                                        |

## SAN_MVRV_LONG_SHORT_DIFF

##### SAN_MVRV_LONG_SHORT_DIFF(projectSlug, from, to, currency, interval) ⇒ <code>Array</code>

Returns the difference between MVRV.

- **Kind**: global function
- **Returns**: <code>Array</code> - of MVRV differences.
- **Parameters**:

| Param       | Type                | Description                                                                                           |
| ----------- | ------------------- | ----------------------------------------------------------------------------------------------------- |
| projectSlug | <code>string</code> | Name of the asset. More info at https://academy.santiment.net/glossary/#slug. Example: "santiment". |
| from        | <code>date</code>   | The starting date to fetch the data. Example: DATE(2018, 9, 20)                                      |
| to          | <code>date</code>   | The ending date to fetch the data. Example: DATE(2018, 9, 21)                                        |
| currency    | <code>string</code> | The metric is calculated using a currency of choice. Available currencies: USD                        |
| interval    | <code>string</code> | The resolution with which the data is fetched. Example: "5m"                                         |

## SAN_MVRV_LONG_SHORT_DIFF_AGGREGATED

##### SAN_MVRV_LONG_SHORT_DIFF_AGGREGATED(projectSlug, from, to, currency, aggregation) ⇒ <code>number</code>

Returns the difference between MVRV.

- **Kind**: global function
- **Returns**: <code>number</code> - of aggregated MVRV differences.
- **Parameters**:

| Param       | Type                | Description                                                                                   |
| ----------- | ------------------- | --------------------------------------------------------------------------------------------- |
| projectSlug | <code>string</code> | Name of the asset, more info at https://academy.santiment.net/glossary/#slug. Example: "santiment". |
| from        | <code>date</code>   | The starting date to fetch the data. Example: DATE(2018, 9, 20)                              |
| to          | <code>date</code>   | The ending date to fetch the data. Example: DATE(2018, 9, 21)                                |
| currency    | <code>string</code> | The metric is calculated using a currency of choice. Available currencies: USD                |
| aggregation | <code>string</code> | Aggregation for the timeseries metrics. Example: "LAST"                                      |

## SAN_MVRV_LONG_SHORT_DIFF_MULTIPLE_SLUGS

##### SAN_MVRV_LONG_SHORT_DIFF_MULTIPLE_SLUGS(projectSlugsList, from, to, currency, interval) ⇒ <code>Array</code>

Returns the difference between MVRV.

- **Kind**: global function
- **Returns**: <code>Array</code> - of results for multiple slugs.
- **Parameters**:

| Param            | Type                | Description                                                                                                      |
| ---------------- | ------------------- | ---------------------------------------------------------------------------------------------------------------- |
| projectSlugsList | <code>string</code> | Comma-separated names of the assets, more info at https://academy.santiment.net/glossary/#slug. Example: "santiment,bitcoin". |
| from             | <code>date</code>   | The starting date to fetch the data. Example: DATE(2018, 9, 20)                                                 |
| to               | <code>date</code>   | The ending date to fetch the data. Example: DATE(2018, 9, 21)                                                   |
| currency         | <code>string</code> | The metric is calculated using a currency of choice. Available currencies: USD                                   |
| interval         | <code>string</code> | The resolution with which the data is fetched. Example: "5m"                                                    |

## SAN_MVRV_RATIO

##### SAN_MVRV_RATIO(projectSlug, from, to, currency, timeBound, interval) ⇒ <code>Array</code>

Returns MVRV (Market-Value-to-Realized-Value).

- **Kind**: global function
- **Returns**: <code>Array</code> - of MVRV ratios.
- **Parameters**:

| Param       | Type                | Description                                                                                                                                                                            |
| ----------- | ------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| projectSlug | <code>string</code> | Name of the asset, more info at https://academy.santiment.net/glossary/#slug. Example: "santiment".                                                                                   |
| from        | <code>date</code>   | The starting date to fetch the data. Example: DATE(2018, 9, 20)                                                                                                                       |
| to          | <code>date</code>   | The ending date to fetch the data. Example: DATE(2018, 9, 21)                                                                                                                         |
| currency    | <code>string</code> | The metric is calculated using a currency of choice. Available currencies: USD                                                                                                        |
| timeBound   | <code>string</code> | The metric is calculated only by taking into account the tokens/coins that have moved in the past number of years or days.                                                             |
| interval    | <code>string</code> | The resolution with which the data is fetched. Example: "5m"                                                                                                                          |

## SAN_MVRV_RATIO_AGGREGATED

##### SAN_MVRV_RATIO_AGGREGATED(projectSlug, from, to, currency, timeBound, aggregation) ⇒ <code>number</code>

Returns MVRV (Market-Value-to-Realized-Value).

- **Kind**: global function
- **Returns**: <code>number</code> - of aggregated MVRV ratios.
- **Parameters**:

| Param       | Type                | Description                                                                                   |
| ----------- | ------------------- | --------------------------------------------------------------------------------------------- |
| projectSlug | <code>string</code> | Asset name. More info at https://academy.santiment.net/glossary/#slug. Example: "santiment". |
| from        | <code>date</code>   | Starting date to fetch the data. Example: DATE(2018, 9, 20).                                 |
| to          | <code>date</code>   | Ending date to fetch the data. Example: DATE(2018, 9, 21).                                   |
| currency    | <code>string</code> | Currency used for calculation. Available currencies: USD.                                    |
| timeBound   | <code>string</code> | Metric calculated considering tokens/coins moved in the past number of years/days.           |
| aggregation | <code>string</code> | Aggregation for the timeseries metrics. Example: "LAST".                                     |

## SAN_MVRV_RATIO_INTRADAY

##### SAN_MVRV_RATIO_INTRADAY(projectSlug, from, to, timeBound, interval) ⇒ <code>Array</code>

Returns MVRV (Market-Value-to-Realized-Value) with the option of smaller intervals.

- **Kind**: global function
- **Returns**: <code>Array</code> - of MVRV ratios with the option of smaller intervals.
- **Parameters**:

| Param       | Type                | Description                                                                                                                                         |
| ----------- | ------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| projectSlug | <code>string</code> | Name of the asset, more info at https://academy.santiment.net/glossary/#slug. Example: "santiment".                                                |
| from        | <code>date</code>   | The starting date to fetch the data. Example: DATE(2018, 9, 20)                                                                                    |
| to          | <code>date</code>   | The ending date to fetch the data. Example: DATE(2018, 9, 21)                                                                                      |
| timeBound   | <code>string</code> | The metric is calculated only by taking into account the tokens/coins that have moved in the past number of years or days.                         |
| interval    | <code>string</code> | The resolution with which the data is fetched. Example: "5m"                                                                                       |

## SAN_MVRV_RATIO_INTRADAY_AGGREGATED

##### SAN_MVRV_RATIO_INTRADAY_AGGREGATED(projectSlug, from, to, timeBound, aggregation) ⇒ <code>number</code>

Returns MVRV (Market-Value-to-Realized-Value) with the option of smaller intervals.

- **Kind**: global function
- **Returns**: <code>number</code> - Aggregated MVRV ratios with the option of smaller intervals.
- **Parameters**:

| Param       | Type                | Description                                                                                                                                           |
| ----------- | ------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| projectSlug | <code>string</code> | Name of the asset, more info at https://academy.santiment.net/glossary/#slug. Example: "santiment".                                                  |
| from        | <code>date</code>   | The starting date to fetch the data. Example: DATE(2018, 9, 20)                                                                                      |
| to          | <code>date</code>   | The ending date to fetch the data. Example: DATE(2018, 9, 21)                                                                                        |
| timeBound   | <code>string</code> | The metric is calculated only by taking into account the tokens/coins that have moved in the past number of years/days.                              |
| aggregation | <code>string</code> | Aggregation for the timeseries metrics. Example: "LAST"                                                                                              |

## SAN_MVRV_RATIO_INTRADAY_MULTIPLE_SLUGS

##### SAN_MVRV_RATIO_INTRADAY_MULTIPLE_SLUGS(projectSlugsList, from, to, timeBound, interval) ⇒ <code>Array</code>

Returns MVRV (Market-Value-to-Realized-Value) with the option of smaller intervals.

- **Kind**: global function
- **Returns**: <code>Array</code> - of results for multiple slugs MVRV ratios with the option of smaller intervals.
- **Parameters**:

| Param            | Type                | Description                                                                                                                                      |
| ---------------- | ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| projectSlugsList | <code>string</code> | Comma-separated names of the assets, more info at https://academy.santiment.net/glossary/#slug. Example: "santiment,bitcoin".                  |
| from             | <code>date</code>   | The starting date to fetch the data. Example: DATE(2018, 9, 20)                                                                                 |
| to               | <code>date</code>   | The ending date to fetch the data. Example: DATE(2018, 9, 21)                                                                                   |
| timeBound        | <code>string</code> | The metric is calculated only by taking into account the tokens/coins that have moved in the past number of years/days.                         |
| interval         | <code>string</code> | The resolution with which the data is fetched. Example: "5m"                                                                                    |

## SAN_MVRV_RATIO_MULTIPLE_SLUGS

##### SAN_MVRV_RATIO_MULTIPLE_SLUGS(projectSlugsList, from, to, currency, timeBound, interval) ⇒ <code>Array</code>

Returns MVRV (Market-Value-to-Realized-Value).

- **Kind**: global function
- **Returns**: <code>Array</code> - of results for multiple slugs MVRV ratios.
- **Parameters**:

| Param            | Type                | Description                                                                                                   |
| ---------------- | ------------------- | ------------------------------------------------------------------------------------------------------------- |
| projectSlugsList | <code>string</code> | Comma-separated names of the assets, more info at https://academy.santiment.net/glossary/#slug. Example: "santiment,bitcoin". |
| from             | <code>date</code>   | The starting date to fetch the data. Example: DATE(2018, 9, 20)                                              |
| to               | <code>date</code>   | The ending date to fetch the data. Example: DATE(2018, 9, 21)                                                |
| currency         | <code>string</code> | The metric is calculated using a currency of choice. Available currencies: USD                               |
| timeBound        | <code>string</code> | The metric is calculated only by taking into account the tokens/coins that have moved in the past number of years/days. |
| interval         | <code>string</code> | The resolution with which the data is fetched. Example: "5m"                                                 |

## SAN_MVRV_Z_SCORE

##### SAN_MVRV_Z_SCORE(projectSlug, from, to, interval) ⇒ <code>Array</code>

Returns the MVRV Z score.

- **Kind**: global function
- **Returns**: <code>Array</code> - of the MVRV Z score.
- **Parameters**:

| Param       | Type                | Description                                                                                           |
| ----------- | ------------------- | ----------------------------------------------------------------------------------------------------- |
| projectSlug | <code>string</code> | Name of the asset. More info at https://academy.santiment.net/glossary/#slug. Example: "santiment".  |
| from        | <code>date</code>   | The starting date to fetch the data. Example: DATE(2018, 9, 20)                                      |
| to          | <code>date</code>   | The ending date to fetch the data. Example: DATE(2018, 9, 21)                                        |
| interval    | <code>string</code> | The resolution with which the data is fetched. Example: "5m"                                         |

## SAN_MVRV_Z_SCORE_AGGREGATED

##### SAN_MVRV_Z_SCORE_AGGREGATED(projectSlug, from, to, aggregation) ⇒ <code>number</code>

Returns the MVRV Z score.

- **Kind**: global function
- **Returns**: <code>number</code> - of aggregated the MVRV Z score.
- **Parameters**:

| Param       | Type                | Description                                                                                          |
| ----------- | ------------------- | ---------------------------------------------------------------------------------------------------- |
| projectSlug | <code>string</code> | Name of the asset, more info at https://academy.santiment.net/glossary/#slug. Example: "santiment". |
| from        | <code>date</code>   | The starting date to fetch the data. Example: DATE(2018, 9, 20)                                     |
| to          | <code>date</code>   | The ending date to fetch the data. Example: DATE(2018, 9, 21)                                       |
| aggregation | <code>string</code> | Aggregation for the timeseries metrics. Example: "LAST"                                             |

## SAN_MVRV_Z_SCORE_MULTIPLE_SLUGS

##### SAN_MVRV_Z_SCORE_MULTIPLE_SLUGS(projectSlugsList, from, to, interval) ⇒ <code>Array</code>

Returns the MVRV Z score for multiple slugs.

- **Kind**: global function
- **Returns**: <code>Array</code> - An array of MVRV Z score results for multiple slugs.
- **Parameters**:

| Param            | Type                | Description                                                                                               |
| ---------------- | ------------------- | --------------------------------------------------------------------------------------------------------- |
| projectSlugsList | <code>string</code> | Comma-separated names of the assets. More info at https://academy.santiment.net/glossary/#slug. Example: "santiment,bitcoin". |
| from             | <code>date</code>   | The starting date to fetch the data. Example: DATE(2018, 9, 20)                                          |
| to               | <code>date</code>   | The ending date to fetch the data. Example: DATE(2018, 9, 21)                                            |
| interval         | <code>string</code> | The resolution with which the data is fetched. Example: "5m"                                             |

## SAN_NETWORK_GROWTH

##### SAN_NETWORK_GROWTH(projectSlug, from, to, interval) ⇒ <code>Array</code>

Returns the token's network growth.

- **Kind**: global function
- **Returns**: <code>Array</code> - of network growth.
- **Parameters**:

| Param       | Type                | Description                                                                                   |
| ----------- | ------------------- | --------------------------------------------------------------------------------------------- |
| projectSlug | <code>string</code> | Name of the asset. More info at [Santiment Glossary](https://academy.santiment.net/glossary/#slug). Example: "santiment". |
| from        | <code>date</code>   | The starting date to fetch the data. Example: DATE(2018, 9, 20)                              |
| to          | <code>date</code>   | The ending date to fetch the data. Example: DATE(2018, 9, 21)                                |
| interval    | <code>string</code> | The resolution with which the data is fetched. Example: "5m"                                 |

## SAN_NETWORK_GROWTH_AGGREGATED

##### SAN_NETWORK_GROWTH_AGGREGATED(projectSlug, from, to, aggregation) ⇒ <code>number</code>

Returns the token's network growth.

- **Kind**: global function
- **Returns**: <code>number</code> - of aggregated network growth.
- **Parameters**:

| Param       | Type                | Description                                                                                   |
| ----------- | ------------------- | --------------------------------------------------------------------------------------------- |
| projectSlug | <code>string</code> | Name of the asset. More info at [Santiment Glossary](https://academy.santiment.net/glossary/#slug). Example: "santiment". |
| from        | <code>date</code>   | The starting date to fetch the data. Example: DATE(2018, 9, 20)                              |
| to          | <code>date</code>   | The ending date to fetch the data. Example: DATE(2018, 9, 21)                                |
| aggregation | <code>string</code> | Aggregation for the timeseries metrics. Example: "LAST"                                      |

## SAN_NETWORK_GROWTH_MULTIPLE_SLUGS

##### SAN_NETWORK_GROWTH_MULTIPLE_SLUGS(projectSlugsList, from, to, interval) ⇒ <code>Array</code>

Returns the token's network growth.

- **Kind**: global function
- **Returns**: <code>Array</code> - of results for multiple slugs network growth.
- **Parameters**:

| Param            | Type                | Description                                                                                       |
| ---------------- | ------------------- | ------------------------------------------------------------------------------------------------- |
| projectSlugsList | <code>string</code> | Comma-separated names of the assets, more info at https://academy.santiment.net/glossary/#slug. Example: "santiment,bitcoin". |
| from             | <code>date</code>   | The starting date to fetch the data. Example: DATE(2018, 9, 20)                                   |
| to               | <code>date</code>   | The ending date to fetch the data. Example: DATE(2018, 9, 21)                                     |
| interval         | <code>string</code> | The resolution with which the data is fetched. Example: "5m"                                      |

## SAN_NETWORK_PROFIT_LOSS

##### SAN_NETWORK_PROFIT_LOSS(projectSlug, from, to, interval) ⇒ <code>Array</code>

Returns the network's profit/loss.

- **Kind**: global function
- **Returns**: <code>Array</code> - of the network's profit/loss.
- **Parameters**:

| Param       | Type                | Description                                                                                       |
| ----------- | ------------------- | ------------------------------------------------------------------------------------------------- |
| projectSlug | <code>string</code> | Name of the asset. More info at https://academy.santiment.net/glossary/#slug. Example: "santiment". |
| from        | <code>date</code>   | The starting date to fetch the data. Example: DATE(2018, 9, 20)                                   |
| to          | <code>date</code>   | The ending date to fetch the data. Example: DATE(2018, 9, 21)                                     |
| interval    | <code>string</code> | The resolution with which the data is fetched. Example: "5m"                                      |

## SAN_NETWORK_PROFIT_LOSS_AGGREGATED

##### SAN_NETWORK_PROFIT_LOSS_AGGREGATED(projectSlug, from, to, aggregation) ⇒ <code>number</code>

Returns the network's profit/loss.

- **Kind**: global function
- **Returns**: <code>number</code> - of aggregated the network's profit/loss.
- **Parameters**:

| Param       | Type                | Description                                                                                               |
| ----------- | ------------------- | --------------------------------------------------------------------------------------------------------- |
| projectSlug | <code>string</code> | Name of the asset, more info at https://academy.santiment.net/glossary/#slug. Example: "santiment".      |
| from        | <code>date</code>   | The starting date to fetch the data. Example: DATE(2018, 9, 20)                                          |
| to          | <code>date</code>   | The ending date to fetch the data. Example: DATE(2018, 9, 21)                                            |
| aggregation | <code>string</code> | Aggregation for the timeseries metrics. Example: "LAST"                                                  |

## SAN_NETWORK_PROFIT_LOSS_MULTIPLE_SLUGS

##### SAN_NETWORK_PROFIT_LOSS_MULTIPLE_SLUGS(projectSlugsList, from, to, interval) ⇒ <code>Array</code>

Returns the network's profit/loss.

- **Kind**: global function
- **Returns**: <code>Array</code> - of results for multiple slugs' network profit/loss.
- **Parameters**:

| Param            | Type                | Description                                                                                   |
| ---------------- | ------------------- | --------------------------------------------------------------------------------------------- |
| projectSlugsList | <code>string</code> | Comma-separated names of the assets. More info at [Santiment Glossary](https://academy.santiment.net/glossary/#slug). Example: "santiment,bitcoin". |
| from             | <code>date</code>   | The starting date to fetch the data. Example: DATE(2018, 9, 20)                              |
| to               | <code>date</code>   | The ending date to fetch the data. Example: DATE(2018, 9, 21)                                |
| interval         | <code>string</code> | The resolution with which the data is fetched. Example: "5m"                                  |

## SAN_NVT_RATIO

##### SAN_NVT_RATIO(projectSlug, from, to, interval) ⇒ <code>Array</code>

Returns NVT (Network-Value-to-Transactions-Ratio Daily Market Cap / Daily Token Circulation). Since Daily Transaction Volume can be noisy and easy to manipulate by transferring the same tokens through multiple addresses repeatedly, it's not an ideal measure of a network's economic activity. That's why we also offer another way to calculate NVT by using Daily Token Circulation. This method filters out excess transactions and provides a cleaner overview of a blockchain's daily transaction throughput.

- **Kind**: global function
- **Returns**: <code>Array</code> - of NVT ratios
- **Parameters**:

| Param       | Type                | Description                                                                                                                                           |
| ----------- | ------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| projectSlug | <code>string</code> | Name of the asset, more info at https://academy.santiment.net/glossary/#slug. Example: "santiment".                                                  |
| from        | <code>date</code>   | The starting date to fetch the data. Example: DATE(2018, 9, 20)                                                                                      |
| to          | <code>date</code>   | The ending date to fetch the data. Example: DATE(2018, 9, 21)                                                                                        |
| interval    | <code>string</code> | The resolution with which the data is fetched. Example: "5m"                                                                                         |

## SAN_NVT_RATIO_AGGREGATED

##### SAN_NVT_RATIO_AGGREGATED(projectSlug, from, to, aggregation) ⇒ <code>number</code>

Returns NVT (Network-Value-to-Transactions-Ratio Daily Market Cap / Daily Token Circulation). Since Daily Transaction Volume can be noisy and easy to manipulate by transferring the same tokens through multiple addresses repeatedly, it's not an ideal measure of a network's economic activity. That's why we also offer another way to calculate NVT by using Daily Token Circulation. This method filters out excess transactions and provides a cleaner overview of a blockchain's daily transaction throughput.

- **Kind**: global function
- **Returns**: <code>number</code> - of aggregated NVT ratios
- **Parameters**:

| Param       | Type                | Description                                                                                                                                           |
| ----------- | ------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| projectSlug | <code>string</code> | Name of the asset, more info at https://academy.santiment.net/glossary/#slug. Example: "santiment".                                                  |
| from        | <code>date</code>   | The starting date to fetch the data. Example: DATE(2018, 9, 20)                                                                                      |
| to          | <code>date</code>   | The ending date to fetch the data. Example: DATE(2018, 9, 21)                                                                                        |
| aggregation | <code>string</code> | Aggregation for the timeseries metrics. Example: "LAST"                                                                                              |

## SAN_NVT_RATIO_MULTIPLE_SLUGS

##### SAN_NVT_RATIO_MULTIPLE_SLUGS(projectSlugsList, from, to, interval) ⇒ <code>Array</code>

Returns NVT (Network-Value-to-Transactions-Ratio Daily Market Cap / Daily Token Circulation). Since Daily Transaction Volume can be noisy and easy to manipulate by transferring the same tokens through multiple addresses repeatedly, it's not an ideal measure of a network's economic activity. That's why we also offer another way to calculate NVT by using Daily Token Circulation. This method filters out excess transactions and provides a cleaner overview of a blockchain's daily transaction throughput.

- **Kind**: global function
- **Returns**: <code>Array</code> - of results for multiple slugs NVT ratios
- **Parameters**:

| Param            | Type                | Description                                                                                   |
| ---------------- | ------------------- | --------------------------------------------------------------------------------------------- |
| projectSlugsList | <code>string</code> | Comma-separated names of the assets, more info at https://academy.santiment.net/glossary/#slug. Example: "santiment,bitcoin". |
| from             | <code>date</code>   | The starting date to fetch the data. Example: DATE(2018, 9, 20)                              |
| to               | <code>date</code>   | The ending date to fetch the data. Example: DATE(2018, 9, 21)                                |
| interval         | <code>string</code> | The resolution with which the data is fetched. Example: "5m"                                  |

## SAN_OHLC

##### SAN_OHLC(projectSlug, from, to) ⇒ <code>Array</code>

Returns the open, high, low, and close price values for the specified asset, during a given time interval.

- **Kind**: global function
- **Returns**: <code>Array</code> - of open, high, low, and close price values.
- **Parameters**:

| Param       | Type                | Description                                                                                                                                                                            |
| ----------- | ------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| projectSlug | <code>string</code> | Name of the asset at sanbase, which can be found at the end of the URL (e.g., the Santiment URL is https://app.santiment.net/projects/santiment, so the projectSlug would be 'santiment'). |
| from        | <code>date</code>   | The starting date to fetch the data. Example: DATE(2018, 9, 20)                                                                                                                                                     |
| to          | <code>date</code>   | The ending date to fetch the data. Example: DATE(2018, 9, 21)                                                                                                                                                       |

## SAN_PRICE

##### SAN_PRICE(projectSlug, from, to, currency, interval) ⇒ <code>Array</code>

Returns the prices for the specified slug within the given time period.

- **Kind**: global function
- **Returns**: <code>Array</code> - An array of the prices for the slug within the given time period.
- **Parameters**:

| Param       | Type                | Description                                                                                                                   |
| ----------- | ------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| projectSlug | <code>string</code> | Name of the asset. [More info](https://academy.santiment.net/glossary/#slug). Example: "santiment".   |
| from        | <code>date</code>   | The starting date to fetch the data. Example: DATE(2018, 9, 20)                                                               |
| to          | <code>date</code>   | The ending date to fetch the data. Example: DATE(2018, 9, 21)                                                                 |
| currency    | <code>string</code> | The currency used for calculating the metric. Available currencies: USD                                                       |
| interval    | <code>string</code> | The resolution with which the data is fetched. Example: "5m"                                                                  |

## SAN_PRICE_ABSOLUTE_CHANGE

##### SAN_PRICE_ABSOLUTE_CHANGE(projectSlug, from, to) ⇒ <code>number</code>

Returns the absolute price change for the specified asset during a given time interval.

- **Kind**: global function
- **Returns**: <code>number</code> - absolute price change.
- **Parameters**:

| Param       | Type                | Description                                                                                   |
| ----------- | ------------------- | --------------------------------------------------------------------------------------------- |
| projectSlug | <code>string</code> | The asset's name on Sanbase, found at the end of the URL (e.g., for https://app.santiment.net/projects/santiment, the projectSlug would be 'santiment'). |
| from        | <code>date</code>   | The starting date to fetch the data (e.g., DATE(2018, 9, 20)).                               |
| to          | <code>date</code>   | The ending date to fetch the data (e.g., DATE(2018, 9, 21)).                                 |

## SAN_PRICE_AGGREGATED

##### SAN_PRICE_AGGREGATED(projectSlug, from, to, currency, aggregation) ⇒ <code>number</code>

Returns the aggregated prices for the specified project slug within the given time period.

- **Kind**: global function
- **Returns**: <code>number</code> - Aggregated prices for the project slug within the specified time period.
- **Parameters**:

| Param       | Type                | Description                                                                                               |
| ----------- | ------------------- | --------------------------------------------------------------------------------------------------------- |
| projectSlug | <code>string</code> | Asset name. [More info](https://academy.santiment.net/glossary/#slug). Example: "santiment".             |
| from        | <code>date</code>   | The start date for fetching the data. Example: DATE(2018, 9, 20)                                         |
| to          | <code>date</code>   | The end date for fetching the data. Example: DATE(2018, 9, 21)                                           |
| currency    | <code>string</code> | The chosen currency used for calculating the metric. Available currencies: USD                                   |
| aggregation | <code>string</code> | Aggregation method for the timeseries metrics. Example: "LAST"                                           |

## SAN_PRICE_MULTIPLE_SLUGS

##### SAN_PRICE_MULTIPLE_SLUGS(projectSlugsList, from, to, currency, interval) ⇒ <code>Array</code>

Returns the prices for the specified slugs in the given time period.

- **Kind**: global function
- **Returns**: <code>Array</code> - of results for multiple slugs with prices for the specified time period.
- **Parameters**:

| Param            | Type                | Description                                                                                           |
| ---------------- | ------------------- | ----------------------------------------------------------------------------------------------------- |
| projectSlugsList | <code>string</code> | Comma-separated asset names (slugs). [More info](https://academy.santiment.net/glossary/#slug). Example: "santiment,bitcoin". |
| from             | <code>date</code>   | The start date to fetch the data. Example: DATE(2018, 9, 20)                                         |
| to               | <code>date</code>   | The end date to fetch the data. Example: DATE(2018, 9, 21)                                           |
| currency         | <code>string</code> | The currency used for calculating the metric. Available currency: USD                                 |
| interval         | <code>string</code> | The resolution with which the data is fetched. Example: "5m"                                         |

## SAN_PRICE_PERCENT_CHANGE

##### SAN_PRICE_PERCENT_CHANGE(projectSlug, from, to) ⇒ <code>number</code>

Returns the percent price change for the specified asset during a given time interval.

- **Kind**: global function
- **Returns**: <code>number</code> - price change in percent.
- **Parameters**:

| Param       | Type                | Description                                                                                   |
| ----------- | ------------------- | --------------------------------------------------------------------------------------------- |
| projectSlug | <code>string</code> | The asset's name on Sanbase, found at the end of the URL (e.g., 'santiment' for https://app.santiment.net/projects/santiment). |
| from        | <code>date</code>   | The starting date to fetch the data. Example: DATE(2018, 9, 20)                              |
| to          | <code>date</code>   | The ending date to fetch the data. Example: DATE(2018, 9, 21)                                |

## SAN_PRICE_VOLUME

##### SAN_PRICE_VOLUME(projectSlug, from, to, interval) ⇒ <code>Array</code>

Returns the prices for the specified asset during a given time interval.

- **Kind**: global function
- **Returns**: <code>Array</code> - of prices.
- **Parameters**:

| Param       | Type                | Description                                                                                                                                           |
| ----------- | ------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| projectSlug | <code>string</code> | Name of the asset at sanbase, which can be found at the end of the URL (e.g., the Santiment URL is https://app.santiment.net/projects/santiment, so the projectSlug would be 'santiment'). |
| from        | <code>date</code>   | The starting date to fetch the data. Example: DATE(2018, 9, 20)                                                                                      |
| to          | <code>date</code>   | The ending date to fetch the data. Example: DATE(2018, 9, 21)                                                                                        |
| interval    | <code>string</code> | The resolution with which the data is fetched. Example: "5m"                                                                                         |

## SAN_PRICE_VOLUME_DIFF

##### SAN_PRICE_VOLUME_DIFF(currency, projectSlug, from, to) ⇒ <code>Array</code>

Returns the price-volume difference technical indicator for a given asset, currency, and time interval. This indicator measures the difference in trend between price and volume, specifically when the price goes up as volume goes down. Currency can be displayed in either USD or BTC.

- **Kind**: global function
- **Returns**: <code>Array</code> - of price-volume difference technical indicator.
- **Parameters**:

| Param       | Type                | Description                                                                                                                                           |
| ----------- | ------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| currency    | <code>string</code> | The currency in which the data should be presented. Either "USD" or "BTC".                                                                            |
| projectSlug | <code>string</code> | Name of the asset at sanbase, which can be found at the end of the URL (e.g., the Santiment URL is https://app.santiment.net/projects/santiment, so the projectSlug would be santiment). |
| from        | <code>date</code>   | The starting date to fetch the data. Example: DATE(2018, 9, 20)                                                                                      |
| to          | <code>date</code>   | The ending date to fetch the data. Example: DATE(2018, 9, 21)                                                                                        |

## SAN_PRICES

##### SAN_PRICES(projectSlug, from, to, interval) ⇒ <code>Array</code>

Returns the prices for the specified asset, during a given time interval.

- **Kind**: global function
- **Returns**: <code>Array</code> - of prices.
- **Parameters**:

| Param       | Type                | Description                                                                                                                                           |
| ----------- | ------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| projectSlug | <code>string</code> | Name of the asset at sanbase, which can be found at the end of the URL (e.g., the Santiment URL is https://app.santiment.net/projects/santiment, so the projectSlug would be 'santiment'). |
| from        | <code>date</code>   | The starting date to fetch the data. Example: DATE(2018, 9, 20)                                                                                      |
| to          | <code>date</code>   | The ending date to fetch the data. Example: DATE(2018, 9, 21)                                                                                        |
| interval    | <code>string</code> | The resolution with which the data is fetched. Example: "5m"                                                                                         |

## SAN_PROJECT_FUNDAMENTALS

##### SAN_PROJECT_FUNDAMENTALS(projectSlug) ⇒ <code>Array</code>

Fetch fundamentals for a specified project.

- **Kind**: global function
- **Returns**: <code>Array</code> - of project details.
- **Parameters**:

| Param       | Type                | Description                                                                                   |
| ----------- | ------------------- | --------------------------------------------------------------------------------------------- |
| projectSlug | <code>string</code> | Name of the asset at sanbase, found at the end of the URL (e.g., for the Santiment URL https://app.santiment.net/projects/santiment, the projectSlug would be 'santiment'). |

## SAN_REALIZED_VALUE

##### SAN_REALIZED_VALUE(projectSlug, from, to, currency, timeBound, interval) ⇒ <code>Array</code>

Returns Realized value - sum of the acquisition costs of an asset located in a wallet. The realized value across the whole network is computed by summing the realized values of all wallets holding tokens at the moment.

- **Kind**: global function
- **Returns**: <code>Array</code> - of realized values.
- **Parameters**:

| Param       | Type                | Description                                                                                   |
| ----------- | ------------------- | --------------------------------------------------------------------------------------------- |
| projectSlug | <code>string</code> | Name of the asset. More info at [Santiment Glossary](https://academy.santiment.net/glossary/#slug). Example: "santiment". |
| from        | <code>date</code>   | The starting date to fetch the data. Example: DATE(2018, 9, 20)                              |
| to          | <code>date</code>   | The ending date to fetch the data. Example: DATE(2018, 9, 21)                                |
| currency    | <code>string</code> | The metric is calculated using a currency of choice. Available currencies: USD                |
| timeBound   | <code>string</code> | The metric is calculated only by taking into account the tokens/coins that have moved in the past number of years or days. |
| interval    | <code>string</code> | The resolution with which the data is fetched. Example: "5m"                                 |

## SAN_REALIZED_VALUE_AGGREGATED

##### SAN_REALIZED_VALUE_AGGREGATED(projectSlug, from, to, currency, timeBound, aggregation) ⇒ <code>number</code>

Returns the Realized value, which is the sum of the acquisition costs of an asset located in a wallet. The realized value across the whole network is computed by summing the realized values of all wallets holding tokens at the moment.

- **Kind**: global function
- **Returns**: <code>number</code> - of aggregated realized values.
- **Parameters**:

| Param       | Type                | Description                                                                                                                                                                            |
| ----------- | ------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| projectSlug | <code>string</code> | Name of the asset, more info at https://academy.santiment.net/glossary/#slug. Example: "santiment".                                                                                   |
| from        | <code>date</code>   | The starting date to fetch the data. Example: DATE(2018, 9, 20)                                                                                                                       |
| to          | <code>date</code>   | The ending date to fetch the data. Example: DATE(2018, 9, 21)                                                                                                                         |
| currency    | <code>string</code> | The metric is calculated using a currency of choice. Available currencies: USD                                                                                                         |
| timeBound   | <code>string</code> | The metric is calculated only by taking into account the tokens/coins that have moved in the past number of years/days.                                                               |
| aggregation | <code>string</code> | Aggregation for the timeseries metrics. Example: "LAST"                                                                                                                               |

## SAN_REALIZED_VALUE_MULTIPLE_SLUGS

##### SAN_REALIZED_VALUE_MULTIPLE_SLUGS(projectSlugsList, from, to, currency, timeBound, interval) ⇒ <code>Array</code>

Returns the Realized Value, which is the sum of the acquisition costs of an asset located in a wallet. The realized value across the whole network is computed by summing the realized values of all wallets holding tokens at the moment.

- **Kind**: global function
- **Returns**: <code>Array</code> - of results for multiple slugs realized values.
- **Parameters**:

| Param            | Type                | Description                                                                                                                                                                            |
| ---------------- | ------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| projectSlugsList | <code>string</code> | Comma-separated names of the assets, more info at https://academy.santiment.net/glossary/#slug. Example: "santiment,bitcoin".                                                         |
| from             | <code>date</code>   | The starting date to fetch the data. Example: DATE(2018, 9, 20)                                                                                                                        |
| to               | <code>date</code>   | The ending date to fetch the data. Example: DATE(2018, 9, 21)                                                                                                                          |
| currency         | <code>string</code> | The metric is calculated using a currency of choice. Available currencies: USD                                                                                                         |
| timeBound        | <code>string</code> | The metric is calculated only by taking into account the tokens/coins that have moved in the past number of years/days.                                                                |
| interval         | <code>string</code> | The resolution with which the data is fetched. Example: "5m"                                                                                                                           |

## SAN_REVERSE

##### SAN_REVERSE(array) ⇒ <code>Array</code>

Returns the reversed array of the results.

- **Kind**: global function
- **Returns**: <code>Array</code> - of reversed results
- **Parameters**:

| Param | Type                | Description          |
| ----- | ------------------- | -------------------- |
| array | <code>array</code>  | The array of results |

## SAN_TOKEN_AGE_CONSUMED

##### SAN_TOKEN_AGE_CONSUMED(projectSlug, from, to) ⇒ <code>Array</code>

Returns the amount of tokens changing addresses, multiplied by the number of blocks created on the blockchain since they last moved. Spikes indicate a large number of tokens moving after being idle for an extended period of time.
Grouping by interval works by summing all records in the interval.

- **Kind**: global function
- **Returns**: <code>Array</code> - of token age consumed numbers.
- **Parameters**:

| Param       | Type                | Description                                                                                                                                           |
| ----------- | ------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| projectSlug | <code>string</code> | Name of the asset at sanbase, which can be found at the end of the URL (e.g. the Santiment URL is https://app.santiment.net/projects/santiment, so the projectSlug would be 'santiment'). |
| from        | <code>date</code>   | The starting date to fetch the data. Example: DATE(2018, 9, 20)                                                                                      |
| to          | <code>date</code>   | The ending date to fetch the data. Example: DATE(2018, 9, 21)                                                                                        |

## SAN_TOKEN_CIRCULATION

##### SAN_TOKEN_CIRCULATION(projectSlug, from, to, timeBound, interval) ⇒ <code>Array</code>

Returns token circulation for a given slug and time interval.

- **Kind**: global function
- **Returns**: <code>Array</code> - of token circulation values.
- **Parameters**:

| Param       | Type                | Description                                                                                                                                                                            |
| ----------- | ------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| projectSlug | <code>string</code> | Name of the asset, more info at https://academy.santiment.net/glossary/#slug. Example: "santiment".                                                                                   |
| from        | <code>date</code>   | The starting date to fetch the data. Example: DATE(2018, 9, 20)                                                                                                                       |
| to          | <code>date</code>   | The ending date to fetch the data. Example: DATE(2018, 9, 21)                                                                                                                         |
| timeBound   | <code>string</code> | The metric is calculated only by taking into account the tokens/coins that have moved in the past number of years or days.                                                             |
| interval    | <code>string</code> | The resolution with which the data is fetched. Example: "5m"                                                                                                                          |

## SAN_TOKEN_CIRCULATION_AGGREGATED

##### SAN_TOKEN_CIRCULATION_AGGREGATED(projectSlug, from, to, timeBound, aggregation) ⇒ <code>number</code>

Returns token circulation for a given slug and time interval.

- **Kind**: global function
- **Returns**: <code>number</code> - of aggregated token circulation values.
- **Parameters**:

| Param       | Type                | Description                                                                                           |
| ----------- | ------------------- | ----------------------------------------------------------------------------------------------------- |
| projectSlug | <code>string</code> | Name of the asset. More info at https://academy.santiment.net/glossary/#slug. Example: "santiment".  |
| from        | <code>date</code>   | The starting date to fetch the data. Example: DATE(2018, 9, 20)                                      |
| to          | <code>date</code>   | The ending date to fetch the data. Example: DATE(2018, 9, 21)                                        |
| timeBound   | <code>string</code> | The metric is calculated by considering tokens/coins that have moved in the past number of years/days.|
| aggregation | <code>string</code> | Aggregation for the timeseries metrics. Example: "LAST"                                              |

## SAN_TOKEN_CIRCULATION_MULTIPLE_SLUGS

##### SAN_TOKEN_CIRCULATION_MULTIPLE_SLUGS(projectSlugsList, from, to, timeBound, interval) ⇒ <code>Array</code>

Returns token circulation for a given slug and time interval.

- **Kind**: global function
- **Returns**: <code>Array</code> - of results for multiple slugs token circulation values.
- **Parameters**:

| Param            | Type                | Description                                                                                                                                           |
| ---------------- | ------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| projectSlugsList | <code>string</code> | Comma-separated names of the assets, more info at https://academy.santiment.net/glossary/#slug. Example: "santiment,bitcoin".                        |
| from             | <code>date</code>   | The starting date to fetch the data. Example: DATE(2018, 9, 20)                                                                                      |
| to               | <code>date</code>   | The ending date to fetch the data. Example: DATE(2018, 9, 21)                                                                                        |
| timeBound        | <code>string</code> | The metric is calculated only by taking into account the tokens/coins that have moved in the past number of years/days.                              |
| interval         | <code>string</code> | The resolution with which the data is fetched. Example: "5m"                                                                                         |

## SAN_TOKEN_TOP_TRANSACTIONS

##### SAN_TOKEN_TOP_TRANSACTIONS(projectSlug, from, to, limit) ⇒ <code>Array</code>

Returns top token transactions for a given slug.

- **Kind**: global function
- **Returns**: <code>Array</code> - of top transactions
- **Parameters**:

| Param       | Type                | Description                                                                                                                                                                            |
| ----------- | ------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| projectSlug | <code>string</code> | Name of the asset at sanbase, which can be found at the end of the URL (e.g. the Santiment URL is https://app.santiment.net/projects/santiment, so the projectSlug would be 'santiment'). |
| from        | <code>date</code>   | The starting date to fetch the data. Example: DATE(2018, 9, 20)                                                                                                                                                     |
| to          | <code>date</code>   | The ending date to fetch the data. Example: DATE(2018, 9, 21)                                                                                                                                                       |
| limit       | <code>number</code> | The limit of transactions to be shown.                                                                                                                                                 |

## SAN_TOP_HOLDERS_HELD_OFF_EXCHANGE

##### SAN_TOP_HOLDERS_HELD_OFF_EXCHANGE(projectSlug, from, to, interval) ⇒ <code>Array</code>

Returns the amount of coins/tokens held only by the non-exchange top holders.

- **Kind**: global function
- **Returns**: <code>Array</code> - of amount of coins/tokens held only by the top holders.
- **Parameters**:

| Param       | Type                | Description                                                                                   |
| ----------- | ------------------- | --------------------------------------------------------------------------------------------- |
| projectSlug | <code>string</code> | Name of the asset. More info at https://academy.santiment.net/glossary/#slug. Example: "santiment". |
| from        | <code>date</code>   | The starting date to fetch the data. Example: DATE(2018, 9, 20)                              |
| to          | <code>date</code>   | The ending date to fetch the data. Example: DATE(2018, 9, 21)                                |
| interval    | <code>string</code> | The resolution with which the data is fetched. Example: "5m"                                 |

## SAN_TOP_HOLDERS_HELD_ON_EXCHANGE

##### SAN_TOP_HOLDERS_HELD_ON_EXCHANGE(projectSlug, from, to, interval) ⇒ <code>Array</code>

Returns the amount of coins/tokens held only by the exchange top holders.

- **Kind**: global function
- **Returns**: <code>Array</code> - of amount of coins/tokens held only by the top holders.
- **Parameters**:

| Param       | Type                | Description                                                                                                       |
| ----------- | ------------------- | ----------------------------------------------------------------------------------------------------------------- |
| projectSlug | <code>string</code> | Name of the asset, more info at https://academy.santiment.net/glossary/#slug. Example: "santiment".              |
| from        | <code>date</code>   | The starting date to fetch the data. Example: DATE(2018, 9, 20)                                                  |
| to          | <code>date</code>   | The ending date to fetch the data. Example: DATE(2018, 9, 21)                                                    |
| interval    | <code>string</code> | The resolution with which the data is fetched. Example: "5m"                                                     |

## SAN_TOP_HOLDERS_HELD_OVERALL

##### SAN_TOP_HOLDERS_HELD_OVERALL(projectSlug, from, to, interval) ⇒ <code>Array</code>

Returns the amount of coins/tokens held by the top holders.

- **Kind**: global function
- **Returns**: <code>Array</code> - of amount of coins/tokens held by the top holders.
- **Parameters**:

| Param       | Type                | Description                                                                                   |
| ----------- | ------------------- | --------------------------------------------------------------------------------------------- |
| projectSlug | <code>string</code> | Name of the asset. More info at [Santiment Glossary](https://academy.santiment.net/glossary/#slug). Example: "santiment". |
| from        | <code>date</code>   | The starting date to fetch the data. Example: DATE(2018, 9, 20)                              |
| to          | <code>date</code>   | The ending date to fetch the data. Example: DATE(2018, 9, 21)                                |
| interval    | <code>string</code> | The resolution with which the data is fetched. Example: "5m"                                 |

## SAN_TOP_HOLDERS_PERCENT_OF_TOTAL_SUPPLY

##### SAN_TOP_HOLDERS_PERCENT_OF_TOTAL_SUPPLY(projectSlug, from, to, numberOfHolders) ⇒ <code>Array</code>

Returns the top holders' percent of total supply - in exchanges, outside exchanges, and combined.

- **Kind**: global function
- **Returns**: <code>Array</code> - followers count over time.
- **Parameters**:

| Param           | Type                | Description                                                                                                                                                                                                 |
| --------------- | ------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| projectSlug     | <code>string</code> | Name of the asset at sanbase, which can be found at the end of the URL (e.g., the Santiment URL is https://app.santiment.net/projects/santiment, so the projectSlug would be santiment).                  |
| from            | <code>date</code>   | The starting date to fetch the data. Example: DATE(2018, 9, 20)                                                                                                                                            |
| to              | <code>date</code>   | The ending date to fetch the data. Example: DATE(2018, 9, 21)                                                                                                                                              |
| numberOfHolders | <code>number</code> | Take the top number of holders into account when calculating.                                                                                                                                               |

## SAN_TRADING_VOLUME

##### SAN_TRADING_VOLUME(projectSlug, from, to, currency, interval) ⇒ <code>Array</code>

Returns the trading volume for the specified slug.

- **Kind**: global function
- **Returns**: <code>Array</code> - An array of the slug's trading volume.
- **Parameters**:

| Param       | Type                | Description                                                                                               |
| ----------- | ------------------- | --------------------------------------------------------------------------------------------------------- |
| projectSlug | <code>string</code> | Name of the asset. More info at https://academy.santiment.net/glossary/#slug. Example: "santiment".      |
| from        | <code>date</code>   | The starting date to fetch the data. Example: DATE(2018, 9, 20)                                          |
| to          | <code>date</code>   | The ending date to fetch the data. Example: DATE(2018, 9, 21)                                            |
| currency    | <code>string</code> | The currency used for calculating the metric. Available currencies: USD                                  |
| interval    | <code>string</code> | The resolution with which the data is fetched. Example: "5m"                                             |

## SAN_TRADING_VOLUME_AGGREGATED

##### SAN_TRADING_VOLUME_AGGREGATED(projectSlug, from, to, currency, aggregation) ⇒ <code>number</code>

Returns the trading volume of the specified slug.

- **Kind**: global function
- **Returns**: <code>number</code> - Aggregated trading volume of the slug.
- **Parameters**:

| Param       | Type                | Description                                                                                   |
| ----------- | ------------------- | --------------------------------------------------------------------------------------------- |
| projectSlug | <code>string</code> | Name of the asset. More info at [Santiment Glossary](https://academy.santiment.net/glossary/#slug). Example: "santiment". |
| from        | <code>date</code>   | The starting date to fetch the data. Example: DATE(2018, 9, 20)                              |
| to          | <code>date</code>   | The ending date to fetch the data. Example: DATE(2018, 9, 21)                                |
| currency    | <code>string</code> | The currency used for calculating the metric. Available currencies: USD                       |
| aggregation | <code>string</code> | Aggregation for the timeseries metrics. Example: "LAST"                                      |

## SAN_TRADING_VOLUME_MULTIPLE_SLUGS

##### SAN_TRADING_VOLUME_MULTIPLE_SLUGS(projectSlugsList, from, to, currency, interval) ⇒ <code>Array</code>

Returns the trading volume for multiple slugs.

- **Kind**: global function
- **Returns**: <code>Array</code> - Array of results for the trading volume of multiple slugs.
- **Parameters**:

| Param            | Type                | Description                                                                                               |
| ---------------- | ------------------- | --------------------------------------------------------------------------------------------------------- |
| projectSlugsList | <code>string</code> | Comma-separated names of the assets. More info at https://academy.santiment.net/glossary/#slug. Example: "santiment,bitcoin". |
| from             | <code>date</code>   | The starting date to fetch the data. Example: DATE(2018, 9, 20)                                          |
| to               | <code>date</code>   | The ending date to fetch the data. Example: DATE(2018, 9, 21)                                            |
| currency         | <code>string</code> | The metric is calculated using a currency of choice. Available currencies: USD                            |
| interval         | <code>string</code> | The resolution with which the data is fetched. Example: "5m"                                             |

## SAN_TRANSACTION_VOLUME

##### SAN_TRANSACTION_VOLUME(projectSlug, from, to, interval) ⇒ <code>Array</code>

Gets the transaction volume for the specified asset during a given time interval. "Transaction Volume" refers to the total number of tokens within all transfers that have occurred on a blockchain.

- **Kind**: global function
- **Returns**: <code>Array</code> - of transaction volumes.
- **Parameters**:

| Param       | Type                | Description                                                                                   |
| ----------- | ------------------- | --------------------------------------------------------------------------------------------- |
| projectSlug | <code>string</code> | Name of the asset. More info at [Santiment Glossary](https://academy.santiment.net/glossary/#slug). Example: "santiment". |
| from        | <code>date</code>   | The starting date to fetch the data. Example: DATE(2018, 9, 20)                              |
| to          | <code>date</code>   | The ending date to fetch the data. Example: DATE(2018, 9, 21)                                |
| interval    | <code>string</code> | The resolution with which the data is fetched. Example: "5m"                                  |

## SAN_TRANSACTION_VOLUME_AGGREGATED

##### SAN_TRANSACTION_VOLUME_AGGREGATED(projectSlug, from, to, aggregation) ⇒ <code>number</code>

Gets the transaction volume for the specified asset during a given time interval. "Transaction Volume" refers to the total number of tokens within all transfers that have occurred on a blockchain.

- **Kind**: global function
- **Returns**: <code>number</code> - of aggregated transaction volumes.
- **Parameters**:

| Param       | Type                | Description                                                                                       |
| ----------- | ------------------- | ------------------------------------------------------------------------------------------------- |
| projectSlug | <code>string</code> | Name of the asset, more info at https://academy.santiment.net/glossary/#slug. Example: "santiment". |
| from        | <code>date</code>   | The starting date to fetch the data. Example: DATE(2018, 9, 20)                                   |
| to          | <code>date</code>   | The ending date to fetch the data. Example: DATE(2018, 9, 21)                                     |
| aggregation | <code>string</code> | Aggregation for the timeseries metrics. Example: "LAST"                                           |

## SAN_TRANSACTION_VOLUME_LOSS

##### SAN_TRANSACTION_VOLUME_LOSS(projectSlug, from, to, interval) ⇒ <code>Array</code>

Returns the transaction volume in loss.

- **Kind**: global function
- **Returns**: <code>Array</code> - of the transaction volume in loss.
- **Parameters**:

| Param       | Type                | Description                                                                                               |
| ----------- | ------------------- | --------------------------------------------------------------------------------------------------------- |
| projectSlug | <code>string</code> | Name of the asset, more info at https://academy.santiment.net/glossary/#slug. Example: "santiment".      |
| from        | <code>date</code>   | The starting date to fetch the data. Example: DATE(2018, 9, 20)                                          |
| to          | <code>date</code>   | The ending date to fetch the data. Example: DATE(2018, 9, 21)                                            |
| interval    | <code>string</code> | The resolution with which the data is fetched. Example: "5m"                                             |

## SAN_TRANSACTION_VOLUME_LOSS_AGGREGATED

##### SAN_TRANSACTION_VOLUME_LOSS_AGGREGATED(projectSlug, from, to, aggregation) ⇒ <code>number</code>

Returns the transaction volume in loss.

- **Kind**: global function
- **Returns**: <code>number</code> - of aggregated transaction volume in loss.
- **Parameters**:

| Param       | Type                | Description                                                                                   |
| ----------- | ------------------- | --------------------------------------------------------------------------------------------- |
| projectSlug | <code>string</code> | Name of the asset. More info at https://academy.santiment.net/glossary/#slug. Example: "santiment". |
| from        | <code>date</code>   | The starting date to fetch the data. Example: DATE(2018, 9, 20)                              |
| to          | <code>date</code>   | The ending date to fetch the data. Example: DATE(2018, 9, 21)                                |
| aggregation | <code>string</code> | Aggregation for the timeseries metrics. Example: "LAST"                                      |

## SAN_TRANSACTION_VOLUME_LOSS_MULTIPLE_SLUGS

##### SAN_TRANSACTION_VOLUME_LOSS_MULTIPLE_SLUGS(projectSlugsList, from, to, interval) ⇒ <code>Array</code>

Returns the transaction volume in loss for multiple slugs.

- **Kind**: global function
- **Returns**: <code>Array</code> - of results for multiple slugs, the transaction volume in loss.
- **Parameters**:

| Param            | Type                | Description                                                                                           |
| ---------------- | ------------------- | ----------------------------------------------------------------------------------------------------- |
| projectSlugsList | <code>string</code> | Comma-separated names of the assets. More info at https://academy.santiment.net/glossary/#slug. Example: "santiment,bitcoin". |
| from             | <code>date</code>   | The starting date to fetch the data. Example: DATE(2018, 9, 20)                                      |
| to               | <code>date</code>   | The ending date to fetch the data. Example: DATE(2018, 9, 21)                                        |
| interval         | <code>string</code> | The resolution with which the data is fetched. Example: "5m"                                         |

## SAN_TRANSACTION_VOLUME_MULTIPLE_SLUGS

##### SAN_TRANSACTION_VOLUME_MULTIPLE_SLUGS(projectSlugsList, from, to, interval) ⇒ <code>Array</code>

Gets the transaction volume for the specified assets during a given time interval. "Transaction Volume" refers to the total number of tokens within all transfers that have occurred on a blockchain.

- **Kind**: global function
- **Returns**: <code>Array</code> - of results for multiple slugs transaction volumes.
- **Parameters**:

| Param            | Type                | Description                                                                                       |
| ---------------- | ------------------- | ------------------------------------------------------------------------------------------------- |
| projectSlugsList | <code>string</code> | Comma-separated names of the assets. More info at https://academy.santiment.net/glossary/#slug. Example: "santiment,bitcoin". |
| from             | <code>date</code>   | The starting date to fetch the data. Example: DATE(2018, 9, 20)                                  |
| to               | <code>date</code>   | The ending date to fetch the data. Example: DATE(2018, 9, 21)                                    |
| interval         | <code>string</code> | The resolution with which the data is fetched. Example: "5m"                                     |

## SAN_TRANSACTION_VOLUME_PROFIT

##### SAN_TRANSACTION_VOLUME_PROFIT(projectSlug, from, to, interval) ⇒ <code>Array</code>

Returns the transaction volume in profit.

- **Kind**: global function
- **Returns**: <code>Array</code> - of the transaction volume in profit.
- **Parameters**:

| Param       | Type                | Description                                                                                                                                         |
| ----------- | ------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| projectSlug | <code>string</code> | Name of the asset, more info at https://academy.santiment.net/glossary/#slug. Example: "santiment".                                                |
| from        | <code>date</code>   | The starting date to fetch the data. Example: DATE(2018, 9, 20)                                                                                    |
| to          | <code>date</code>   | The ending date to fetch the data. Example: DATE(2018, 9, 21)                                                                                      |
| interval    | <code>string</code> | The resolution with which the data is fetched. Example: "5m"                                                                                            |

## SAN_TRANSACTION_VOLUME_PROFIT_AGGREGATED

##### SAN_TRANSACTION_VOLUME_PROFIT_AGGREGATED(projectSlug, from, to, aggregation) ⇒ <code>number</code>

Returns the transaction volume in profit.

- **Kind**: global function
- **Returns**: <code>number</code> - of aggregated the transaction volume in profit.
- **Parameters**:

| Param       | Type                | Description                                                                                                                                                                            |
| ----------- | ------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| projectSlug | <code>string</code> | Name of the asset, more info at https://academy.santiment.net/glossary/#slug. Example: "santiment".                                                                                                                                                                                 |
| from        | <code>date</code>   | The starting date to fetch the data. Example: DATE(2018, 9, 20)                                                                                                                                                                                                                     |
| to          | <code>date</code>   | The ending date to fetch the data. Example: DATE(2018, 9, 21)                                                                                                                                                                                                                       |
| aggregation | <code>string</code> | Aggregation for the timeseries metrics. Example: "LAST"                                                                                                                                                                                                                             |

## SAN_TRANSACTION_VOLUME_PROFIT_LOSS_RATIO

##### SAN_TRANSACTION_VOLUME_PROFIT_LOSS_RATIO(projectSlug, from, to, interval) ⇒ <code>Array</code>

Returns the ratio between transaction volume in profit and transaction volume in loss.

- **Kind**: global function
- **Returns**: <code>Array</code> - of the ratio between transaction volume in profit and transaction volume in loss.
- **Parameters**:

| Param       | Type                | Description                                                                                   |
| ----------- | ------------------- | --------------------------------------------------------------------------------------------- |
| projectSlug | <code>string</code> | Name of the asset, more info at https://academy.santiment.net/glossary/#slug. Example: "santiment". |
| from        | <code>date</code>   | The starting date to fetch the data. Example: DATE(2018, 9, 20)                              |
| to          | <code>date</code>   | The ending date to fetch the data. Example: DATE(2018, 9, 21)                                |
| interval    | <code>string</code> | The resolution with which the data is fetched. Example: "5m"                                 |

## SAN_TRANSACTION_VOLUME_PROFIT_LOSS_RATIO_AGGREGATED

##### SAN_TRANSACTION_VOLUME_PROFIT_LOSS_RATIO_AGGREGATED(projectSlug, from, to, aggregation) ⇒ <code>number</code>

Returns the ratio between transaction volume in profit and transaction volume in loss.

- **Kind**: global function
- **Returns**: <code>number</code> - the aggregated ratio between transaction volume in profit and transaction volume in loss.
- **Parameters**:

| Param       | Type                | Description                                                                                           |
| ----------- | ------------------- | ----------------------------------------------------------------------------------------------------- |
| projectSlug | <code>string</code> | Name of the asset, more info at https://academy.santiment.net/glossary/#slug. Example: "santiment". |
| from        | <code>date</code>   | The starting date to fetch the data. Example: DATE(2018, 9, 20)                                      |
| to          | <code>date</code>   | The ending date to fetch the data. Example: DATE(2018, 9, 21)                                        |
| aggregation | <code>string</code> | Aggregation for the timeseries metrics. Example: "LAST"                                              |

## SAN_TRANSACTION_VOLUME_PROFIT_LOSS_RATIO_MULTIPLE_SLUGS

##### SAN_TRANSACTION_VOLUME_PROFIT_LOSS_RATIO_MULTIPLE_SLUGS(projectSlugsList, from, to, interval) ⇒ <code>Array</code>

Returns the ratio between transaction volume in profit and transaction volume in loss.

- **Kind**: global function
- **Returns**: <code>Array</code> - of results for multiple slugs, the ratio between transaction volume in profit and transaction volume in loss.
- **Parameters**:

| Param            | Type                | Description                                                                                       |
| ---------------- | ------------------- | ------------------------------------------------------------------------------------------------- |
| projectSlugsList | <code>string</code> | Comma-separated names of the assets. More info at https://academy.santiment.net/glossary/#slug. Example: "santiment,bitcoin". |
| from             | <code>date</code>   | The starting date to fetch the data. Example: DATE(2018, 9, 20)                                  |
| to               | <code>date</code>   | The ending date to fetch the data. Example: DATE(2018, 9, 21)                                    |
| interval         | <code>string</code> | The resolution with which the data is fetched. Example: "5m"                                     |

## SAN_TRANSACTION_VOLUME_PROFIT_MULTIPLE_SLUGS

##### SAN_TRANSACTION_VOLUME_PROFIT_MULTIPLE_SLUGS(projectSlugsList, from, to, interval) ⇒ <code>Array</code>

Returns the transaction volume in profit.

- **Kind**: global function
- **Returns**: <code>Array</code> - of results for multiple slugs the transaction volume in profit.
- **Parameters**:

| Param            | Type                | Description                                                                                       |
| ---------------- | ------------------- | ------------------------------------------------------------------------------------------------- |
| projectSlugsList | <code>string</code> | Comma-separated names of the assets, more info at https://academy.santiment.net/glossary/#slug. Example: "santiment,bitcoin". |
| from             | <code>date</code>   | The starting date to fetch the data. Example: DATE(2018, 9, 20)                                  |
| to               | <code>date</code>   | The ending date to fetch the data. Example: DATE(2018, 9, 21)                                    |
| interval         | <code>string</code> | The resolution with which the data is fetched. Example: "5m"                                     |

## SAN_VELOCITY

##### SAN_VELOCITY(projectSlug, from, to, interval) ⇒ <code>Array</code>

Returns the token's velocity.

- **Kind**: global function
- **Returns**: <code>Array</code> - of token velocity values.
- **Parameters**:

| Param       | Type                | Description                                                                                       |
| ----------- | ------------------- | ------------------------------------------------------------------------------------------------- |
| projectSlug | <code>string</code> | Name of the asset. More info at https://academy.santiment.net/glossary/#slug. Example: "santiment". |
| from        | <code>date</code>   | The starting date to fetch the data. Example: DATE(2018, 9, 20)                                   |
| to          | <code>date</code>   | The ending date to fetch the data. Example: DATE(2018, 9, 21)                                     |
| interval    | <code>string</code> | The resolution with which the data is fetched. Example: "5m"                                      |

## SAN_VELOCITY_AGGREGATED

##### SAN_VELOCITY_AGGREGATED(projectSlug, from, to, aggregation) ⇒ <code>number</code>

Returns the token's velocity.

- **Kind**: global function
- **Returns**: <code>number</code> - of aggregated token velocity values.
- **Parameters**:

| Param       | Type                | Description                                                                                   |
| ----------- | ------------------- | --------------------------------------------------------------------------------------------- |
| projectSlug | <code>string</code> | Name of the asset. More info at [Santiment Glossary](https://academy.santiment.net/glossary/#slug). Example: "santiment". |
| from        | <code>date</code>   | The starting date to fetch the data. Example: DATE(2018, 9, 20)                              |
| to          | <code>date</code>   | The ending date to fetch the data. Example: DATE(2018, 9, 21)                                |
| aggregation | <code>string</code> | Aggregation for the timeseries metrics. Example: "LAST"                                      |

## SAN_VELOCITY_MULTIPLE_SLUGS

##### SAN_VELOCITY_MULTIPLE_SLUGS(projectSlugsList, from, to, interval) ⇒ <code>Array</code>

Returns the token's velocity.

- **Kind**: global function
- **Returns**: <code>Array</code> - of results for multiple slugs token velocity values.
- **Parameters**:

| Param            | Type                | Description                                                                                           |
| ---------------- | ------------------- | ----------------------------------------------------------------------------------------------------- |
| projectSlugsList | <code>string</code> | Comma-separated names of the assets, more info at https://academy.santiment.net/glossary/#slug. Example: "santiment,bitcoin". |
| from             | <code>date</code>   | The starting date to fetch the data. Example: DATE(2018, 9, 20)                                      |
| to               | <code>date</code>   | The ending date to fetch the data. Example: DATE(2018, 9, 21)                                        |
| interval         | <code>string</code> | The resolution with which the data is fetched. Example: "5m"                                         |

## SAN_VOLUME

##### SAN_VOLUME(projectSlug, from, to, interval) ⇒ <code>Array</code>

Returns the transaction volume of the specified slug.

- **Kind**: global function
- **Returns**: <code>Array</code> - Array of the slug's transaction volume.
- **Parameters**:

| Param       | Type                | Description                                                                                               |
| ----------- | ------------------- | --------------------------------------------------------------------------------------------------------- |
| projectSlug | <code>string</code> | Name of the asset. More info at https://academy.santiment.net/glossary/#slug. Example: "santiment".      |
| from        | <code>date</code>   | The starting date to fetch the data. Example: DATE(2018, 9, 20)                                          |
| to          | <code>date</code>   | The ending date to fetch the data. Example: DATE(2018, 9, 21)                                            |
| interval    | <code>string</code> | The resolution with which the data is fetched. Example: "5m"                                             |

## SAN_VOLUME_AGGREGATED

##### SAN_VOLUME_AGGREGATED(projectSlug, from, to, aggregation) ⇒ <code>number</code>

Returns the transaction volume for the specified slug.

- **Kind**: global function
- **Returns**: <code>number</code> - Aggregated transaction volume for the specified slug.
- **Parameters**:

| Param       | Type                | Description                                                                                           |
| ----------- | ------------------- | ----------------------------------------------------------------------------------------------------- |
| projectSlug | <code>string</code> | Name of the asset. More info at https://academy.santiment.net/glossary/#slug. Example: "santiment". |
| from        | <code>date</code>   | The starting date to fetch the data. Example: DATE(2018, 9, 20)                                      |
| to          | <code>date</code>   | The ending date to fetch the data. Example: DATE(2018, 9, 21)                                        |
| aggregation | <code>string</code> | Aggregation for the timeseries metrics. Example: "LAST"                                              |

## SAN_VOLUME_MULTIPLE_SLUGS

##### SAN_VOLUME_MULTIPLE_SLUGS(projectSlugsList, from, to, interval) ⇒ <code>Array</code>

Returns the transaction volume for multiple slugs.

- **Kind**: global function
- **Returns**: <code>Array</code> - Array of results for the transaction volume of multiple slugs.
- **Parameters**:

| Param            | Type                | Description                                                                                                                           |
| ---------------- | ------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| projectSlugsList | <code>string</code> | Comma-separated names of the assets. More info at https://academy.santiment.net/glossary/#slug. Example: "santiment,bitcoin".        |
| from             | <code>date</code>   | The starting date to fetch the data. Example: DATE(2018, 9, 20)                                                                      |
| to               | <code>date</code>   | The ending date to fetch the data. Example: DATE(2018, 9, 21)                                                                        |
| interval         | <code>string</code> | The resolution with which the data is fetched. Example: "5m"                                                                         |

## SAN_WHALE_TRANSACTION_COUNT

##### SAN_WHALE_TRANSACTION_COUNT(projectSlug, from, to, interval) ⇒ <code>Array</code>

Returns the number of transactions transferring more than 100k USD.

- **Kind**: global function
- **Returns**: <code>Array</code> - of the number of transactions transferring more than 100k USD.
- **Parameters**:

| Param       | Type                | Description                                                                                       |
| ----------- | ------------------- | ------------------------------------------------------------------------------------------------- |
| projectSlug | <code>string</code> | Name of the asset, more info at https://academy.santiment.net/glossary/#slug. Example: "santiment". |
| from        | <code>date</code>   | The starting date to fetch the data. Example: DATE(2018, 9, 20)                                   |
| to          | <code>date</code>   | The ending date to fetch the data. Example: DATE(2018, 9, 21)                                     |
| interval    | <code>string</code> | The resolution with which the data is fetched. Example: "5m"                                      |

## SAN_WHALE_TRANSACTION_COUNT_AGGREGATED

##### SAN_WHALE_TRANSACTION_COUNT_AGGREGATED(projectSlug, from, to, aggregation) ⇒ <code>number</code>

Returns the number of transactions transferring more than 100k USD.

- **Kind**: global function
- **Returns**: <code>number</code> - the aggregated number of transactions transferring more than 100k USD.
- **Parameters**:

| Param       | Type                | Description                                                                                   |
| ----------- | ------------------- | --------------------------------------------------------------------------------------------- |
| projectSlug | <code>string</code> | Name of the asset. More info at [Santiment Glossary](https://academy.santiment.net/glossary/#slug). Example: "santiment". |
| from        | <code>date</code>   | The starting date to fetch the data. Example: DATE(2018, 9, 20)                              |
| to          | <code>date</code>   | The ending date to fetch the data. Example: DATE(2018, 9, 21)                                |
| aggregation | <code>string</code> | Aggregation for the timeseries metrics. Example: "LAST"                                      |

## SAN_WHALE_TRANSACTION_COUNT_MULTIPLE_SLUGS

##### SAN_WHALE_TRANSACTION_COUNT_MULTIPLE_SLUGS(projectSlugsList, from, to, interval) ⇒ <code>Array</code>

Returns the number of transactions transferring more than 100k USD.

- **Kind**: global function
- **Returns**: <code>Array</code> - of results for multiple slugs, the number of transactions transferring more than 100k USD.
- **Parameters**:

| Param            | Type                | Description                                                                                                      |
| ---------------- | ------------------- | ---------------------------------------------------------------------------------------------------------------- |
| projectSlugsList | <code>string</code> | Comma-separated names of the assets, more info at https://academy.santiment.net/glossary/#slug. Example: "santiment,bitcoin". |
| from             | <code>date</code>   | The starting date to fetch the data. Example: DATE(2018, 9, 20)                                                 |
| to               | <code>date</code>   | The ending date to fetch the data. Example: DATE(2018, 9, 21)                                                   |
| interval         | <code>string</code> | The resolution with which the data is fetched. Example: "5m"                                                    |

## SAN_WITHDRAWAL_TRANSACTIONS_BY_EXCHANGE

##### SAN_WITHDRAWAL_TRANSACTIONS_BY_EXCHANGE(projectSlug, from, to, owner, interval) ⇒ <code>Array</code>

Returns the withdrawal transactions for a slug in a specific exchange.

- **Kind**: global function
- **Returns**: <code>Array</code> - exchange inflow values.
- **Parameters**:

| Param       | Type                | Description                                                                                           |
| ----------- | ------------------- | ----------------------------------------------------------------------------------------------------- |
| projectSlug | <code>string</code> | Name of the asset, more info at https://academy.santiment.net/glossary/#slug. Example: "santiment". |
| from        | <code>date</code>   | The starting date to fetch the data. Example: DATE(2018, 9, 20)                                      |
| to          | <code>date</code>   | The ending date to fetch the data. Example: DATE(2018, 9, 21)                                        |
| owner       | <code>string</code> | Name of the exchange                                                                                  |
| interval    | <code>string</code> | The resolution with which the data is fetched. Example: "5m"                                         |

## SAN_WITHDRAWAL_TRANSACTIONS_INTRADAY

##### SAN_WITHDRAWAL_TRANSACTIONS_INTRADAY(projectSlug, from, to, interval) ⇒ <code>Array</code>

Returns the number of withdrawal transactions with the option of smaller intervals.

- **Kind**: global function
- **Returns**: <code>Array</code> - Array of the number of withdrawal transactions with the option of smaller intervals.
- **Parameters**:

| Param       | Type                | Description                                                                                       |
| ----------- | ------------------- | ------------------------------------------------------------------------------------------------- |
| projectSlug | <code>string</code> | Name of the asset. More info at https://academy.santiment.net/glossary/#slug. Example: "santiment". |
| from        | <code>date</code>   | The starting date to fetch the data. Example: DATE(2018, 9, 20)                                   |
| to          | <code>date</code>   | The ending date to fetch the data. Example: DATE(2018, 9, 21)                                     |
| interval    | <code>string</code> | The resolution with which the data is fetched. Example: "5m"                                      |

## SAN_WITHDRAWAL_TRANSACTIONS_INTRADAY_AGGREGATED

##### SAN_WITHDRAWAL_TRANSACTIONS_INTRADAY_AGGREGATED(projectSlug, from, to, aggregation) ⇒ <code>number</code>

Returns the number of withdrawal transactions with the option of smaller intervals.

- **Kind**: global function
- **Returns**: <code>number</code> - Aggregated number of withdrawal transactions with the option of smaller intervals.
- **Parameters**:

| Param       | Type                | Description                                                                                   |
| ----------- | ------------------- | --------------------------------------------------------------------------------------------- |
| projectSlug | <code>string</code> | Name of the asset. More info at [Santiment Glossary](https://academy.santiment.net/glossary/#slug). Example: "santiment". |
| from        | <code>date</code>   | The starting date to fetch the data. Example: DATE(2018, 9, 20)                              |
| to          | <code>date</code>   | The ending date to fetch the data. Example: DATE(2018, 9, 21)                                |
| aggregation | <code>string</code> | Aggregation for the timeseries metrics. Example: "LAST"                                      |

## SAN_WITHDRAWAL_TRANSACTIONS_INTRADAY_MULTIPLE_SLUGS

##### SAN_WITHDRAWAL_TRANSACTIONS_INTRADAY_MULTIPLE_SLUGS(projectSlugsList, from, to, interval) ⇒ <code>Array</code>

Returns the number of withdrawal transactions with the option of smaller intervals.

- **Kind**: global function
- **Returns**: <code>Array</code> - Array of results for multiple slugs, containing the number of withdrawal transactions with the option of smaller intervals.
- **Parameters**:

| Param            | Type                | Description                                                                                   |
| ---------------- | ------------------- | --------------------------------------------------------------------------------------------- |
| projectSlugsList | <code>string</code> | Comma-separated names of the assets. More info at https://academy.santiment.net/glossary/#slug. Example: "santiment,bitcoin". |
| from             | <code>date</code>   | The starting date to fetch the data. Example: DATE(2018, 9, 20)                              |
| to               | <code>date</code>   | The ending date to fetch the data. Example: DATE(2018, 9, 21)                                |
| interval         | <code>string</code> | The resolution with which the data is fetched. Example: "5m"                                 |

