---
title: Introducing the Santiment Queries
author: Santiment Team
date: 2022-08-17
description: What is this tool and why it exists
---

## Overview 

At Santiment we make heavy use of [Clickhouse](https://clickhouse.com/), a blazing fast
column-oriented database, where we store on-chain, financial, social and development activity data.
Apart from storing data, Clickhouse is capable of doing complex calculations and aggregations on
millions of rows of data. This makes it a perfect tool to power your research.

Santiment Queries is an online web tool giving access to a Clickhouse cluster, containing our datasets.

Basic SQL knowledge is required to use the tool. In case you have no experience, you can follow the
very short [Clickhouse Tutorial]()

## Access

Santiment Queries can be found at https://app.santiment.net/queries.
Anonymous users can browse the public dashboards. Logged in users can create public and private dashboards.

## Exploration

The [Exploration](/santiment-queries/exploration) page shows the reader how to explore the contents of the database,
what are the available tables and what is their structure.

## Writing your first SQL Query

The [Writing SQL queries](/santiment-queries/writing-sql-queries) page guides the reader through writing their first
SQL query.