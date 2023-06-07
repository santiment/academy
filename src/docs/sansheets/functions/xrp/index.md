---
title: XRPL-related Data Functions
author: Santiment Team
date: 2023-03-31
---

## SAN_ACTIVE_ADDRESSES_60D

##### SAN_ACTIVE_ADDRESSES_60D(projectSlug, from, to, interval) ⇒ <code>Array</code>

Returns the active addresses in the last 60 days.

- **Kind**: global function
- **Returns**: <code>Array</code> - of the active addresses in the last 60 days.
- **Parameters**:

| Param       | Type                | Description                                                                                          |
| ----------- | ------------------- | ---------------------------------------------------------------------------------------------------- |
| projectSlug | <code>string</code> | Name of the asset, more info at https://academy.santiment.net/glossary/#slug. Example: "santiment". |
| from        | <code>date</code>   | The starting date to fetch the data. Example: DATE(2018, 9, 20)                                     |
| to          | <code>date</code>   | The ending date to fetch the data. Example: DATE(2018, 9, 21)                                       |
| interval    | <code>string</code> | The resolution with which the data is fetched. Example: "5m"                                        |

## SAN_ACTIVE_ADDRESSES_60D_AGGREGATED

##### SAN_ACTIVE_ADDRESSES_60D_AGGREGATED(projectSlug, from, to, aggregation) ⇒ <code>number</code>

Returns the active addresses in the last 60 days.

- **Kind**: global function
- **Returns**: <code>number</code> - of aggregated active addresses in the last 60 days.
- **Parameters**:

| Param       | Type                | Description                                                                                   |
| ----------- | ------------------- | --------------------------------------------------------------------------------------------- |
| projectSlug | <code>string</code> | Name of the asset. More info at https://academy.santiment.net/glossary/#slug. Example: "santiment". |
| from        | <code>date</code>   | The starting date to fetch the data. Example: DATE(2018, 9, 20)                              |
| to          | <code>date</code>   | The ending date to fetch the data. Example: DATE(2018, 9, 21)                                |
| aggregation | <code>string</code> | Aggregation for the timeseries metrics. Example: "LAST"                                      |

## SAN_ACTIVE_ADDRESSES_90D

##### SAN_ACTIVE_ADDRESSES_90D(projectSlug, from, to, interval) ⇒ <code>Array</code>

Returns the active addresses in the last 90 days.

- **Kind**: global function
- **Returns**: <code>Array</code> - of the active addresses in the last 90 days.
- **Parameters**:

| Param       | Type                | Description                                                                                   |
| ----------- | ------------------- | --------------------------------------------------------------------------------------------- |
| projectSlug | <code>string</code> | Name of the asset. More info at https://academy.santiment.net/glossary/#slug. Example: "santiment". |
| from        | <code>date</code>   | The starting date to fetch the data. Example: DATE(2018, 9, 20)                              |
| to          | <code>date</code>   | The ending date to fetch the data. Example: DATE(2018, 9, 21)                                |
| interval    | <code>string</code> | The resolution with which the data is fetched. Example: "5m"                                 |

## SAN_ACTIVE_ADDRESSES_90D_AGGREGATED

##### SAN_ACTIVE_ADDRESSES_90D_AGGREGATED(projectSlug, from, to, aggregation) ⇒ <code>number</code>

Returns the active addresses in the last 90 days.

- **Kind**: global function
- **Returns**: <code>number</code> - of aggregated active addresses in the last 90 days.
- **Parameters**:

| Param       | Type                | Description                                                                                           |
| ----------- | ------------------- | ----------------------------------------------------------------------------------------------------- |
| projectSlug | <code>string</code> | Name of the asset, more info at https://academy.santiment.net/glossary/#slug. Example: "santiment".  |
| from        | <code>date</code>   | The starting date to fetch the data. Example: DATE(2018, 9, 20)                                      |
| to          | <code>date</code>   | The ending date to fetch the data. Example: DATE(2018, 9, 21)                                        |
| aggregation | <code>string</code> | Aggregation for the timeseries metrics. Example: "LAST"                                              |

## SAN_DAILY_ASSETS_ISSUED

##### SAN_DAILY_ASSETS_ISSUED(projectSlug, from, to, interval) ⇒ <code>Array</code>

Returns the daily issued assets.

- **Kind**: global function
- **Returns**: <code>Array</code> - of the daily issued assets.
- **Parameters**:

| Param       | Type                | Description                                                                                   |
| ----------- | ------------------- | --------------------------------------------------------------------------------------------- |
| projectSlug | <code>string</code> | Name of the asset. More info at https://academy.santiment.net/glossary/#slug. Example: "santiment". |
| from        | <code>date</code>   | The starting date to fetch the data. Example: DATE(2018, 9, 20)                              |
| to          | <code>date</code>   | The ending date to fetch the data. Example: DATE(2018, 9, 21)                                |
| interval    | <code>string</code> | The resolution with which the data is fetched. Example: "5m"                                 |

## SAN_DAILY_ASSETS_ISSUED_AGGREGATED

##### SAN_DAILY_ASSETS_ISSUED_AGGREGATED(projectSlug, from, to, aggregation) ⇒ <code>number</code>

Returns the daily issued assets.

- **Kind**: global function
- **Returns**: <code>number</code> - of aggregated daily issued assets.
- **Parameters**:

| Param       | Type                | Description                                                                                   |
| ----------- | ------------------- | --------------------------------------------------------------------------------------------- |
| projectSlug | <code>string</code> | Name of the asset. More info at [Santiment Glossary](https://academy.santiment.net/glossary/#slug). Example: "santiment". |
| from        | <code>date</code>   | The starting date to fetch the data. Example: DATE(2018, 9, 20)                              |
| to          | <code>date</code>   | The ending date to fetch the data. Example: DATE(2018, 9, 21)                                |
| aggregation | <code>string</code> | Aggregation for the timeseries metrics. Example: "LAST"                                      |


## SAN_DAILY_TRUSTLINES_COUNT_CHANGE

##### SAN_DAILY_TRUSTLINES_COUNT_CHANGE(projectSlug, from, to, interval) ⇒ <code>Array</code>

Returns the daily trustlines count change.

- **Kind**: global function
- **Returns**: <code>Array</code> - of the daily trustlines count change.
- **Parameters**:

| Param       | Type                | Description                                                                                                                                           |
| ----------- | ------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| projectSlug | <code>string</code> | Name of the asset, more info at https://academy.santiment.net/glossary/#slug. Example: "santiment".                                                  |
| from        | <code>date</code>   | The starting date to fetch the data. Example: DATE(2018, 9, 20)                                                                                      |
| to          | <code>date</code>   | The ending date to fetch the data. Example: DATE(2018, 9, 21)                                                                                        |
| interval    | <code>string</code> | The resolution with which the data is fetched. Example: "5m"                                                                                         |

## SAN_DAILY_TRUSTLINES_COUNT_CHANGE_AGGREGATED

##### SAN_DAILY_TRUSTLINES_COUNT_CHANGE_AGGREGATED(projectSlug, from, to, aggregation) ⇒ <code>number</code>

Returns the daily trustlines count change.

- **Kind**: global function
- **Returns**: <code>number</code> - of aggregated the daily trustlines count change.
- **Parameters**:

| Param       | Type                | Description                                                                                   |
| ----------- | ------------------- | --------------------------------------------------------------------------------------------- |
| projectSlug | <code>string</code> | Name of the asset. More info at [Santiment Glossary](https://academy.santiment.net/glossary/#slug). Example: "santiment". |
| from        | <code>date</code>   | The starting date to fetch the data. Example: DATE(2018, 9, 20)                              |
| to          | <code>date</code>   | The ending date to fetch the data. Example: DATE(2018, 9, 21)                                |
| aggregation | <code>string</code> | Aggregation for the timeseries metrics. Example: "LAST"                                      |

## SAN_DEX_VOLUME_IN_USD_INTRADAY

##### SAN_DEX_VOLUME_IN_USD_INTRADAY(projectSlug, from, to, interval) ⇒ <code>Array</code>

Returns the DEX volume in USD.

- **Kind**: global function
- **Returns**: <code>Array</code> - of the DEX volume in USD.
- **Parameters**:

| Param       | Type                | Description                                                                                       |
| ----------- | ------------------- | ------------------------------------------------------------------------------------------------- |
| projectSlug | <code>string</code> | Name of the asset. More info at https://academy.santiment.net/glossary/#slug. Example: "santiment". |
| from        | <code>date</code>   | The starting date to fetch the data. Example: DATE(2018, 9, 20)                                  |
| to          | <code>date</code>   | The ending date to fetch the data. Example: DATE(2018, 9, 21)                                    |
| interval    | <code>string</code> | The resolution with which the data is fetched. Example: "5m"                                     |

## SAN_DEX_VOLUME_IN_USD_INTRADAY_AGGREGATED

##### SAN_DEX_VOLUME_IN_USD_INTRADAY_AGGREGATED(projectSlug, from, to, aggregation) ⇒ <code>number</code>

Returns the DEX volume in USD.

- **Kind**: global function
- **Returns**: <code>number</code> - of aggregated DEX volume in USD.
- **Parameters**:

| Param       | Type                | Description                                                                                          |
| ----------- | ------------------- | ---------------------------------------------------------------------------------------------------- |
| projectSlug | <code>string</code> | Name of the asset, more info at https://academy.santiment.net/glossary/#slug. Example: "santiment". |
| from        | <code>date</code>   | The starting date to fetch the data. Example: DATE(2018, 9, 20)                                     |
| to          | <code>date</code>   | The ending date to fetch the data. Example: DATE(2018, 9, 21)                                       |
| aggregation | <code>string</code> | Aggregation for the timeseries metrics. Example: "LAST"                                             |

## SAN_DEX_VOLUME_IN_XRP_INTRADAY

##### SAN_DEX_VOLUME_IN_XRP_INTRADAY(projectSlug, from, to, interval) ⇒ <code>Array</code>

Returns the DEX volume in XRP.

- **Kind**: global function
- **Returns**: <code>Array</code> - of the DEX volume in XRP.
- **Parameters**:

| Param       | Type                | Description                                                                                   |
| ----------- | ------------------- | --------------------------------------------------------------------------------------------- |
| projectSlug | <code>string</code> | Name of the asset. More info at [Santiment Glossary](https://academy.santiment.net/glossary/#slug). Example: "santiment". |
| from        | <code>date</code>   | The starting date to fetch the data. Example: DATE(2018, 9, 20)                              |
| to          | <code>date</code>   | The ending date to fetch the data. Example: DATE(2018, 9, 21)                                |
| interval    | <code>string</code> | The resolution with which the data is fetched. Example: "5m"                                 |

## SAN_DEX_VOLUME_IN_XRP_INTRADAY_AGGREGATED

##### SAN_DEX_VOLUME_IN_XRP_INTRADAY_AGGREGATED(projectSlug, from, to, aggregation) ⇒ <code>number</code>

Returns the DEX volume in XRP.

- **Kind**: global function
- **Returns**: <code>number</code> - of aggregated DEX volume in XRP.
- **Parameters**:

| Param       | Type                | Description                                                                                   |
| ----------- | ------------------- | --------------------------------------------------------------------------------------------- |
| projectSlug | <code>string</code> | Name of the asset. More info at [Santiment Glossary](https://academy.santiment.net/glossary/#slug). Example: "santiment". |
| from        | <code>date</code>   | The starting date to fetch the data. Example: DATE(2018, 9, 20)                              |
| to          | <code>date</code>   | The ending date to fetch the data. Example: DATE(2018, 9, 21)                                |
| aggregation | <code>string</code> | Aggregation for the timeseries metrics. Example: "LAST"                                      |

## SAN_TOTAL_ASSETS_ISSUED

##### SAN_TOTAL_ASSETS_ISSUED(projectSlug, from, to, interval) ⇒ <code>Array</code>

Returns the total issued assets.

- **Kind**: global function
- **Returns**: <code>Array</code> - of the total issued assets.
- **Parameters**:

| Param       | Type                | Description                                                                                                       |
| ----------- | ------------------- | ----------------------------------------------------------------------------------------------------------------- |
| projectSlug | <code>string</code> | Name of the asset, more info at https://academy.santiment.net/glossary/#slug. Example: "santiment".              |
| from        | <code>date</code>   | The starting date to fetch the data. Example: DATE(2018, 9, 20)                                                  |
| to          | <code>date</code>   | The ending date to fetch the data. Example: DATE(2018, 9, 21)                                                    |
| interval    | <code>string</code> | The resolution with which the data is fetched. Example: "5m"                                                     |

## SAN_TOTAL_ASSETS_ISSUED_AGGREGATED

##### SAN_TOTAL_ASSETS_ISSUED_AGGREGATED(projectSlug, from, to, aggregation) ⇒ <code>number</code>

Returns the total issued assets.

- **Kind**: global function
- **Returns**: <code>number</code> - of aggregated the total issued assets.
- **Parameters**:

| Param       | Type                | Description                                                                                                           |
| ----------- | ------------------- | --------------------------------------------------------------------------------------------------------------------- |
| projectSlug | <code>string</code> | Name of the asset, more info at https://academy.santiment.net/glossary/#slug. Example: "santiment".                  |
| from        | <code>date</code>   | The starting date to fetch the data. Example: DATE(2018, 9, 20)                                                      |
| to          | <code>date</code>   | The ending date to fetch the data. Example: DATE(2018, 9, 21)                                                        |
| aggregation | <code>string</code> | Aggregation for the timeseries metrics. Example: "LAST"                                                              |

## SAN_TOTAL_TRUSTLINES_COUNT

##### SAN_TOTAL_TRUSTLINES_COUNT(projectSlug, from, to, interval) ⇒ <code>Array</code>

Returns the total trustlines count.

- **Kind**: global function
- **Returns**: <code>Array</code> - of the total trustlines count.
- **Parameters**:

| Param       | Type                | Description                                                                                               |
| ----------- | ------------------- | --------------------------------------------------------------------------------------------------------- |
| projectSlug | <code>string</code> | Name of the asset, more info at https://academy.santiment.net/glossary/#slug. Example: "santiment".      |
| from        | <code>date</code>   | The starting date to fetch the data. Example: DATE(2018, 9, 20)                                          |
| to          | <code>date</code>   | The ending date to fetch the data. Example: DATE(2018, 9, 21)                                            |
| interval    | <code>string</code> | The resolution with which the data is fetched. Example: "5m"                                             |

## SAN_TOTAL_TRUSTLINES_COUNT_AGGREGATED

##### SAN_TOTAL_TRUSTLINES_COUNT_AGGREGATED(projectSlug, from, to, aggregation) ⇒ <code>number</code>

Returns the total trustlines count.

- **Kind**: global function
- **Returns**: <code>number</code> - of aggregated the total trustlines count.
- **Parameters**:

| Param       | Type                | Description                                                                                                 |
| ----------- | ------------------- | ----------------------------------------------------------------------------------------------------------- |
| projectSlug | <code>string</code> | Name of the asset, more info at https://academy.santiment.net/glossary/#slug. Example: "santiment".        |
| from        | <code>date</code>   | The starting date to fetch the data. Example: DATE(2018, 9, 20)                                            |
| to          | <code>date</code>   | The ending date to fetch the data. Example: DATE(2018, 9, 21)                                              |
| aggregation | <code>string</code> | Aggregation for the timeseries metrics. Example: "LAST"                                                    |

## SAN_TRANSACTIONS_COUNT

##### SAN_TRANSACTIONS_COUNT(projectSlug, from, to, interval) ⇒ <code>Array</code>

Returns the transactions count.

- **Kind**: global function
- **Returns**: <code>Array</code> - of the transactions count.
- **Parameters**:

| Param       | Type                | Description                                                                                   |
| ----------- | ------------------- | --------------------------------------------------------------------------------------------- |
| projectSlug | <code>string</code> | Name of the asset. More info at [Santiment Glossary](https://academy.santiment.net/glossary/#slug). Example: "santiment". |
| from        | <code>date</code>   | The starting date to fetch the data. Example: DATE(2018, 9, 20)                              |
| to          | <code>date</code>   | The ending date to fetch the data. Example: DATE(2018, 9, 21)                                |
| interval    | <code>string</code> | The resolution with which the data is fetched. Example: "5m"                                  |

## SAN_TRANSACTIONS_COUNT_AGGREGATED

##### SAN_TRANSACTIONS_COUNT_AGGREGATED(projectSlug, from, to, aggregation) ⇒ <code>number</code>

Returns the aggregated transactions count.

- **Kind**: global function
- **Returns**: <code>number</code> - of aggregated transactions count.
- **Parameters**:

| Param       | Type                | Description                                                                                       |
| ----------- | ------------------- | ------------------------------------------------------------------------------------------------- |
| projectSlug | <code>string</code> | Name of the asset. More info at https://academy.santiment.net/glossary/#slug. Example: "santiment". |
| from        | <code>date</code>   | The starting date to fetch the data. Example: DATE(2018, 9, 20)                                   |
| to          | <code>date</code>   | The ending date to fetch the data. Example: DATE(2018, 9, 21)                                     |
| aggregation | <code>string</code> | Aggregation for the timeseries metrics. Example: "LAST"                                           |
