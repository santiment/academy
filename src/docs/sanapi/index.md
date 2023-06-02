---
title: API Reference
author: Santiment Team
date: 2020-04-06
description: This page contains a reference of all the APIs provided by Santiment.
---


- [Overview](#overview)
- [Metrics](#metrics)
- [Rate Limits](#rate-limits)
- [Complexity](#complexity)
- [Glossary](#glossary)

## Overview

Santiment API uses [GraphQL](https://graphql.org). From the beginning it was
decided to use GraphQL instead of REST for a number of reasons:

- You can request exactly the data you need and easily batch requests together.
  This is effectively handling the issues with underfetching and overfetching
  data. Why fetching all 20+ fields of a project when you only need its name?
- The request describes the format of the response. You no longer need to wonder
  what data the result contains and how to parse it.
- Easy out-of-the-box way to explore our API via our Live Explorer

## Metrics

Information how to explore and fetch the available metrics can be found [here](/sanapi/fetching-metrics).

## Rate Limits

The [following article](./rate-limits) describes how are the API calls counted and the rate limits applied.

## Complexity

Each API query can fetch only a limited amount of data points. The [complexity](/sanapi/complexity) analysis decides
whether a given query will be executed or will be rejected.

## Glossary

The meaning of some of the terms used on this page can be found in the dedicated [glossary page](/glossary)
