---
title: Stack Coin Age model
author: Santiment Team
date: 2020-04-02
description: Introducing the Stack Coin Age model. Extending metrics to Account-based blockchains.
---


- [Overview](#overview)
- [Introduction](#introduction)
- [Bitcoin UTXOs and coin age](#bitcoin-utxos-and-coin-age)
- [Account-based blockchains](#account-based-blockchains)
- [The stack coin age model](#the-stack-coin-age-model)
- [Acknowledgments](#acknowledgments)
- [References](#references)

## Overview

## Introduction

Blockchain data gives us a unique opportunity to perform novel economic
research. There have been several metrics developed for Bitcoin that exploit the
availability of onchain data and show us a picture of the Bitcoin economy which
is impossible to get in the fiat world.

These include:
- Bitcoin-days destroyed;
- Аge distribution (also known as HODL waves);
- Realized capitalization.

Those metrics are Bitcoin-specific, because they rely on the UTXO model and its
natural way of defining the _age_ of a given coin.

At Santiment we have managed to **extend these metrics to account-based
blockchains** like Ethereum. To achieve that, we have developed an alternative
notion of _age_ which can be applied to virtually any blockchain. As an example,
here's the **coin age distribution** for our own SAN token:

![SAN Age Distribution](santiment-age-distribution.png)

and here is the **realized cap for Ethereum**:

![ETH realized cap (aka realized value)](ethereum-realized-cap.png)

In this article we want to describe how exactly we generalize the
above-mentioned metrics. They are all based on the notion of **coin age**, which
measures how long a given coin has stayed in a given wallet.

Bitcoin and other UTXO-based blockchains give us a natural way of defining coin
age. While this definition is natural, it is based on technical details and is
not really related to any **economic properties** of the blockchain.

We are going to propose a different coin age model, which we call _stack-based
coin age_. Our custom model actually has financial justifications, and can
easily be applied to any blockchain.

This article covers a technical subject. We've written several articles (and
will publish many more in the future) explaining what Santiment metrics actually
tell us about different types of behavior of market participants.

## Bitcoin UTXOs and coin age

The Bitcoin blockchain uses the so-called **UTXO model** for keeping track of
coins. UTXO stands for "Unspent Transaction Output".

Each Bitcoin address holds a bunch of _outputs_; each output contains a
certain amount of coins. A Bitcoin transaction consists of a list of old outputs
that are going to be destroyed or _spent_, and a list of new outputs that are
going to be created. The total amount of coins in the spent outputs must be
greater or equal to the total amount of coins in the new outputs. The difference
between the amounts is sent to the miner that creates the block.

In a way, the UTXO model resembles paper money. You can think of your Bitcoin
address as a wallet and of the unspent outputs as the coins and notes in the
wallet. There is one small difference $-$ normal coins do not get destroyed in
transactions.

But imagine the following fantastical scenario. You have a \$5 note in your
wallet and you want to buy bread for \$1. When you give your note to the cashier,
it gets incinerated and two brand new notes appear out of thin air. One \$1 note
goes to the cashier and another \$3.90 note is put back to your wallet. 10 cents
go to a magical fairy that just performed this operation. This is, in essence,
how the Bitcoin UTXO model works.

![bitcoin-utxo-model](bitcoin-utxo-model.png) You can assign an _age_ to each
note or coin in your wallet which would simply tell you how long it stayed
there. Let's say that the \$5 note in our example was taken from an ATM machine
on January 1st and you used it to buy bread on February 1st. At the time of
purchase, then, the age of this particular \$5 note would be 31 days. When you
spend the note you "destroy" \$31\*5=155\$ dollar-days.

In the UTXO model, similarly, we can associate an _age_ to each output using the
time when the output was created. More importantly, we get a canonical way to
associate an age to _each satoshi_, because each satoshi currently in existence
belongs to a given unspent output.

This notion of coin age is what allows us to define the metrics that we
described above. To compute _Bitcoin-days destroyed_, we take all Bitcoins spent
at any given time and multiply each by its age to arrive at the total. The _age
distribution_ metrics show us how many Bitcoins have a given age at a given
point in time. The _realized capitalization_ gives us the total cost of
acquisition; in other words, for each existing satoshi we take its dollar price
at the time when it was created and sum those together.

Bitcoin transactions explained You can assign an age to each note or coin in
your wallet which would simply tell you how long it stayed there. Let’s say that
the \$5 note in our example was taken from an ATM machine on January 1st and you
used it to buy bread on February 1st. At the time of purchase, then, the age of
this particular \$5 note would be 31 days. When you spend the note you “destroy”
31 ∗ 5 = 155 dollar-days.

In the UTXO model, similarly, we can associate an age to each output using the
time when the output was created. More importantly, we get a canonical way to
associate an age to each satoshi, because each satoshi currently in existence
belongs to a given unspent output.

This notion of coin age is what allows us to define the metrics that we
described above. To compute Bitcoin-days destroyed, we take all Bitcoins spent
at any given time and multiply each by its age to arrive at the total. The age
distribution metrics show us how many Bitcoins have a given age at a given point
in time. The realized capitalization gives us the total cost of acquisition; in
other words, for each existing satoshi we take its dollar price at the time when
it was created and sum those together.

## Account-based blockchains

If we want to develop similar metrics for Ethereum and other blockchains, we
first have to figure out how to define _coin age_ for them. Unlike Bitcoin,
however, Ethereum uses an _account model_. What this means is that, instead of
many outputs, to each address we associate just a single number, which
represents its balance. When we move coins between addresses, those balances get
updated.

The account model is very similar to the way a traditional bank account works.
Imagine again that you go to buy bread for \$1, except this time you are using
your debit card.

Let's say that your bank account has \$100, and the baker's bank account has
$200. You give your debit card to the cashier, they swipe it and give it back.
As the card gets swiped, your account balance changes to \$98.90 and the baker's 
account balance changes to \$201. Again, 10 cents are paid as a transaction fee.

Here's the question $-$ what is the age of the money currently sitting in your
bank account? Let's say that you received one transfer of \$50 on December 1st
and another transfer of \$50 on January 1st. When you spent one dollar for bread
(again on February 1st) which dollar did you spend? Did you take one of the
dollars that you received in December, or one of the dollars you got in January?
Or maybe you took 50 cents from December and 50 cents from January? In each of
these scenarios, the age of the spent dollar, as well as the age of the
remaining money in your account, would be different.

We can see that for account-based assets, there is no canonical way to associate
coin age.

Let's think again about the Bitcoin coin age. We showed how we associate age to
coins using unspent outputs and how we use that data to define various metrics.
It turns out that those metrics can give us valuable information about the
overall Bitcoin economy. But the coin age model that we used to derive those
metrics has no intrinsic economic meaning! When studying the fiat economy, it doesn't
really matter which note we choose to pay for bread, if we have several notes in our wallet.

Similarly, when you make a Bitcoin transaction you $-$ or rather your Bitcoin
wallet software $-$ choose which unspent outputs to use to make that transaction.
Your choice affects the coin ages, yes, but from an economic point of view --
your choice is entirely irrelevant.

_We have managed to derive valuable metrics of Bitcoin's economy from a notion
of coin age, which, economically speaking, is essentially arbitrary. Any other
reasonable way to assign coin age which works for all assets would be at least
as valid. Hence we can expect that metrics derived from alternative coin age
models will expose the same information about the assets' economy._

## The stack coin age model

So let's invent a better model. Let's go back to the buying bread example and
decide to abide by the following rule $-$ when I pay in cash I always **choose
the most recent coins** and notes that I have in my wallet to pay the cashier.

I can easily follow this rule with notes and coins, but I can also pretend to
follow it when I pay with a debit card. If I have received \$50 on December 1st
and another \$50 on January 1st, I will pretend that when I buy bread on February
1st, I use the \$1 coming from the most recent transfer.

This allows me to assign ages again. Before I bought the bread, I had \$50 whose
age was 2 months and \$50 whose age was 1 month. In my transaction I spent \$1.1
(one dollar to the cashier and a 10p fee) whose age was one month (which
destroyed \$31*1.1=34.1 dollar-days). After that I am left with \$50 with an age
of 2 months and \$48.9 with an age of 1 month.

By making this choice, we imagine that our account is like a _stack_ $-$ when money
comes in, it is put on the top, and when it goes out, it is taken from the top.

![Stack coin age model](stack-coin-age-model.png) The stack model can be applied
to all blockchains $-$ both UTXO and account-based. And unlike the canonical coin
age model for UTXO-based blockchains, it actually has some economic meaning.

In economics, money supply is split into different types: M0, M1, M2, M3 and M4,
according to their liquidity. M0 are all coins and notes in circulation, M1
includes assets that are easily convertible to coins and notes, M2 includes
short-term deposits and M3 includes longer-term deposits.

We don't yet have Bitcoin or Ethereum deposits but we still have coins that are
more liquid and others that are less liquid. We can have a single address that
holds large quantities of ETH, but the transactions that it is a part of are all
for relatively small amounts. This scenario is very common for exchange wallets.
It would be good to be able to split the money in such addresses in more liquid
and less liquid segments. The stack coin age model allows us to do just that.

Let's see how our model compares to Bitcoin's canonical model. One simple way to
compare the two is to compute a metric using both models and contrast the
resulting values. Here is the comparison between our own stack-based realized
cap and the original metric:

![utxo vs. stack-based realized cap](utxo-vs-stacks.svg)

You can see that the values of the two metrics are almost the same.

The reason for this uncanny similarity is actually quite simple $-$ most Bitcoin
addresses are used only for a single output. More precisely at the time of
writing there are around 473 million different addresses in the Bitcoin
blockchain, and of those about 411 million (or about _87%_) are used for only
two transactions $-$ one incoming and one outgoing. For these addresses any two
reasonable coin age models would produce the same ages.

There are however some areas of the chart where the stack-based realized cap is
slightly lower than the utxo-based metric. We do not yet understand the
significance of the difference between the two different realized cap measures
and why the stack-based metric is always lower than the UTXO-based one.

## Acknowledgments

The stack coin age model was first developed at the end of 2017 by Michail
Lopatchouk from [IBA](https://ibagroupit.com/en/). Maksim, Santiment's founder
and CEO, had asked him if it is possible to develop an Ethereum and ERC20
equivalent to the _Bitcoin-days destroyed_ metric. Milan, Tzanko and Valentin
from [Santiment](https://santiment.net) optimized the calculations and used the
model to create Ethereum equivalents for _age distribution_ and _realized
cap_.

## References

Akiron. “Bitcoin Days Destroyed.”
[bitcoin days destroyed](https://en.bitcoin.it/wiki/Bitcoin_Days_Destroyed).

Bansal, Dhruv. “Bitcoin Data Science (Pt. 1): HODL Waves.”
[hodl waves](https://unchained.com/blog/tag/hodl-waves/).

Carter, Nic. “Bitcoin Honeybadger 2018 Bitcoin Conference, Riga, Day 2.”
[bitcoin honeybadged 2018](https://www.youtube.com/watch?v=D2WXxgZ8h-0&t=78m8s).

Carter, Nic, Antoine Le Calvez, and Coinmetrics team. 2018. “Introducing
Realized Capitalization.” 2018.
[introducing realized capitalization](https://coinmetrics.io/realized-capitalization/).

Coinmetrics. “Data Downloads - Coin Metrics.”
[coinmetrics](https://coinmetrics.io/community-network-data/).

/u/jratcliff63367. “An Area Chart Showing the Distribution of Bitcoins Based on
Age of Last Use Throughout History.”
[bitcoin age distribution](https://www.reddit.com/r/Bitcoin/comments/2n205b/an_area_chart_showing_the_distribution_of/).
