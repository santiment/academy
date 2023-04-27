---
title: Proxy
author: Vladimir
date: 2023-04-25
description: Proxy label
---

## Description

A proxy contract is a special type of contract that serves as an intermediary between the user and the actual contract. 
Instead of interacting directly with the target contract, all calls are directed through the proxy, which then delegates 
the request to the intended target contract. This allows for a greater degree of control and flexibility over the 
contract's behavior.

The main advantage of using a proxy pattern is the ability to implement upgradability for your contracts. By keeping 
the proxy contract immutable, you can easily upgrade the underlying target contract without having to redeploy the 
entire system. This is a significant benefit as it saves time, resources, and reduces the risk of downtime during the 
upgrade process.
## API Name

`proxy`

## Label Examples


## Available Blockchains

* ethereum