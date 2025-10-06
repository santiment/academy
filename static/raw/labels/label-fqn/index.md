---
title: Label-fqn
author: Santiment team
date: 2024-04-09
description: Label fqn description
---

## Description

This page describes the structure and applications of **label FQN** (label Fully Qualified Names), which are integral to various platforms such as [Santiment Queries](/santiment-queries), [API](/sanapi) and [Sanbase](/sanbase).


## FQN Structure

A label FQN typically comprises the following components:

A typical label FQN consists of:
- `owner`: Identifies the creator of the label. Typically, users will primarily interact with labels created by the Santiment team.
- `key`: Represents the label's key. Mostly serves as a common name. For instance, centralized exchange, fund, personal wallet, A comprehensive list of available labels can be found in our academy 
[here](/labels).
- `value` \[optional\]: Specifies the label's value, applicable to labels that require a value. Mostly serves as an own name (e.g. Binance, DWF, Vitalik, etc) or some specification of the key. Details can be found within each label's description in the academy.
- `asset_name` \[optional\]: Indicates the asset to which the label is associated.
- `version`: Ensures consistency through versioning. When an algorithm updates, a new version may be released, while access to previous versions remains available.

To construct a label FQN, concatenate the fields as described:

`owner/key->value(asset_name):version`

For a simpler format without the `value` and `asset` fields:

`owner/key:version`


## Note about asset name

For some labels (e.g. [whale](/labels/whale) or [whale by usd balance](/labels/whale-usd-balance)), the `asset_name` is included in the FQN. For instance, an address labeled as a whale within the EtherFi asset would be denoted as santiment/whale(ether-fi-ethfi):v1.


## Note about Key and Value

The key field serves as a general identifier (e.g., centralized exchange, fund, personal wallet), while the value field provides a specific designation (e.g., Binance, DWF, Vitalik). Not all labels possess a specific name, but when applicable, they are often linked to an [owner label](/labels/owner). Also value field might be used as a some specification of the key [example](/labels/nft-trader-threshold). This structure allows for versatile interactions with the labels, enabling users to either aggregate data across all entities of a type or focus on a specific entity.


## Examples

- `santiment/centralized_exchange:v1`: A centralized exchange label

- `santiment/owner->binance:v1`: Binance label

- `santiment/whale_usd_balance(ethereum):v1`: Ethereum whale by USD balance
