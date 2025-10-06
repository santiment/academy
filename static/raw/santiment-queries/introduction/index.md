---
title: Introducing Santiment Queries
author: Santiment Team
date: 2022-08-17
description: An overview of the Santiment Queries tool and its purpose
---

## Overview

At Santiment, we make extensive use of [Clickhouse](https://clickhouse.com/), a high-performance column-oriented database, to store on-chain, financial, social, and development activity data. In addition to storing data, Clickhouse is capable of performing complex calculations and aggregations on millions of rows of data, making it an ideal tool to power your research.

Santiment Queries is an online web tool that provides access to a Clickhouse cluster containing our datasets. Basic SQL knowledge is required to use the tool. If you have no experience, you can follow brief Clickhouse Tutorial [here](https://clickhouse.com/docs/en/guides/writing-queries) or [here](https://clickhouse.com/docs/en/tutorial#3-analyze-the-data) to get started.

## Accessing Santiment Queries

Santiment Queries can be found at [https://app.santiment.net/queries](https://app.santiment.net/queries). Anonymous users can browse the public dashboards, while logged-in users can create both public and private dashboards. 

## Exploration

The [Exploration](/santiment-queries/exploration) page guides users on how to explore the contents of the database, understand the available tables, and learn about their structure.

## Writing Your First SQL Query

The [Writing SQL Queries](/santiment-queries/writing-sql-queries) page guides you through the process of writing your first SQL query.