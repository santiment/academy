---
title: NFT trader threshold
author: Alex
date: 2023-03-22
description: label
---

## Description

The label is attached to the addresses that actively traded NFTs recently. During ordinary market this label duplicates [nft_trader](/labels/nft-trader) label. It differs during most active NFT market period and denotes to the most active part of the traders. 

While the NFT trader label is based on percentiles, the NFT trader threshold uses top-Nth value of trades count and volume among all  NFT active addresses, with the N number recorded in the value field of the label.
The labels are calculated for two N-threshold values: 1000 and 5000.


## API Name

`nft_trader_threshold`


## Label Examples

The address was labeled as NFT trader with threshold 1000 on May, 3rd, 2023:
[0xb7b668c3dd82bbc8708d41146af74d415087969d](https://etherscan.io/address/0xb7b668c3dd82bbc8708d41146af74d415087969d)

## Available Blockchains:

* Ethereum
