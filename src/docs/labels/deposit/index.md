---
title: Deposit
author: Alex
date: 2023-03-22
description: Deposit address label
---

## Description

A deposit address is an address that belongs to some entity (e.g. centralized exchange) and used by that entity in order to distinguish between deposit transactions of different users.

The address is considered as a deposit address if it satisfies 2 conditions:

1. The address sends funds to a single entity only (single entity doesn’t mean single address; some entities owe few addresses)
2. The address is not the entity itself it sends funds to.

Most common case is a centralized exhcnage deposit. See the details on the picture below.

![deposit_address](deposit-withdrawal.png)

## API Name

`deposit`

## Label Examples

Kucoin deposit address: [0xb50a586be6a5542c0da84ff42de0ebdf8761203c](https://etherscan.io/address/0xb50a586be6a5542c0da84ff42de0ebdf8761203c)

Gate.io deposit address: [0x11e67b9ca21ae5ab385a31d03929bd0cc1c96bec](https://etherscan.io/address/0x11e67b9ca21ae5ab385a31d03929bd0cc1c96bec)


## Available Blockchains

* ethereum
