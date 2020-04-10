---
title: Velocity - Technical
author: Valentin
date: 2020-04-08
---

`Velocity` is a metric which estimates the average frequency at which the
tokens change hands during some period of time. It mimics to a large extent the
[Money Velocity](https://en.wikipedia.org/wiki/Velocity_of_money) metric.
å In order to understand how we
compute this metric, let's see an example in which Alice, Bob and Charlie
exchange tokens. Let's assume that Alice gives Bob 10 tokens at block 1 and Bob
gives Charlie 10 tokens at block 2. The total transaction volume which is
generated for block 1 and 2 is $10 + 10 = 20$, but we can easily see that the
same 10 tokens have been transacted, so the amount of tokens being in
circulation is actually $10$. We can say that the `Token Velocity` for blocks 1
and 2 is $20 / 10 = 2$, which means that the transacted tokens have changes
hands twice during these blocks.

_In order to understand how all this can be tracked, you should read [the
article about the token age
consumed](/metrics/age-consumed/age-consumed-technical)._

## Formal definition

In order to define this metric formally we need to establish some definitions:

- $vol(a, t)$ - amount of tokens going **out** of address $a$ at block $t$
- $vol(t) = \sum_{a} vol(a,t)$ - amount of tokens going out of all addresses in
  block $t$
- $blocks(d) = {t_1, t_2, ..., t_n}$ - the set of all blocks produced during day
  $d$. For ETH these are usually 5760 blocks

We also need a metric to measure the amount of tokens that are in circulation
for a given day. To compute this we will use the metric describe here:
https://community.santiment.net/t/the-transaction-stack/36/2?u=valentin. In this
article we have a definition for $token\_circulation(t,1\ hour, token)$, let's
not specify the $token$ as this is something which we assume is fixed. Let's
define the token circulation for a given day, as the circulation in the last
block of the day:

$$
last\_block(d) = max_{t_i \in blocks(d)}(t_i)
$$

$$
token\_circulation(d, timespan) = token\_circulation(last\_block(d), timespan)
$$

Now we can define the `Token Velocity` at day $d$ as:

$$
vel(d) = \frac{\sum_{t \in blocks(d)} vol(t)}{token\_circulation(d, 1\ day)}
$$

Which is the total token volume divided by the amount of tokens in circulation
during that day. A similar approach can be taken if we want to compute the
metric on a weekly or monthly basis.
