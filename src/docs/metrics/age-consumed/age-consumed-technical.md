---
title: Token Age Consumed - Technical Details
author: Ivan Ivanov, Tzanko Matev
date: 2021-11-22
---
# Token Age Consumed - Technical Details

We will describe here one statistic that we call the _token age consumed_. This
is a measurement that detects changes in the volume of the token circulation and
can show us when tokens that have been frozen for a long time come into
circulation. We have computed this measurement for all ERC20 tokens. In theory
it can be calculated for any cryptocurrency which has publicly readable
transactions (so not like #ZEC or #XMR)

To understand the token age consumed, we need to rethink our idea of a token
account. At any given moment, an account has a value which is a single number.
But this number is a result of transactions coming in and going out of the
account. Some of those transactions happened a very long time ago, while others
happened only recently.

Let's look at the following example. Assume that Alice and Bob have each one
account of SAN tokens. Both of them have 10000 tokens. Alice bought her tokens 4
months ago and didn't move them. Bob, on the other hand, was buying and selling
large amounts of tokens the whole time. So we can imagine that Alice's tokens
were out of circulation for the entire four months, while Bob's tokens were in
circulation. In this scenario, it is not a significant event if Bob transfers
5000 of his tokens today. But it is much more critical if Alice transfers 5000
tokens. The token age consumed is a measurement that will tell us if many people
suddenly start transferring tokens that have not moved for a long time.

To understand how the token age consumed is calculated, imagine that the coins
in each account are ordered as a stack: Incoming transactions put money on top
of the stack, and outgoing transactions take money from the top. For every
portion of this stack, we can note the block number of the corresponding
incoming transaction. So for any given block number $t$ and any account $a$, we
can construct a stack $stack(a,t)$ that describes the account's history at that
block number. We have

$$
stack(a,t):= [(s_1, t_1), (s_2, t_2), \dots, (s_k, t_k)]
$$

Here $s_1,\dots, s_k$ are token amounts, and $t_1,\dots, t_k$ are block numbers.
Also, the sum $s_1+\cdots+s_k$ equals the current balance of the account.

Assume that the current block number is $t$. There are several cases regarding
the account $a$:

## No transactions

In that case the contribution $tac(a,t)$ (token age consumed) of the account $a$
towards the token age consumed at block $t$ is 0.

## Incoming transaction

In that case, we need to put the amount of the incoming transaction at the top of
our stack. If that amount was $s$, the new stack becomes

$$
stack(a, t+1) := [(s_1, t_1), \dots, (s_k, t_k), (s, t)]
$$

In that case the contribution $tac(a,t)$ of the account $a$ towards the token
age consumed at block $t$ is 0.

## Outgoing transaction

The outgoing transaction will _consume_ the elements at the top of the stack. If
the amount of the transaction was $s$, then all elements $(s_i, t_i)$ such that
$s_i + s_{i+1} + \cdots + s_k < s$ will be completely consumed. Let $m$ be the
smallest such index $i$. The element $(s_{m-1}, t_{m-1})$ might be partially
consumed if there was any amount left from the outgoing transaction. So the new
stack will become

$$
stack(a, t+1) := [(s_1, t_1), \dots, (s_{m-1} - (s- \sum_{i=m}^ks_i), t_{m-1})]
$$

In the case of an outgoing transaction, the account $a$ contributed to the token age
consumed at block $t$. Its contribution is:

$$
tac(a,t):= \sum_{i=m}^k s_i * (t-t_i) + (s-\sum_{i=m}^ks_i)*(t-t_{m-1})
$$

which means all elements will be fully consumed, and their age is added
to the whole contribution, while the last consumed stack can be only partially
consumed.

## Multiple transactions

If there were multiple incoming and/or outgoing transactions happening at the
same block number $t$, we replace them in our calculations with a single
transaction. This transaction will be incoming if the total incoming amount is
greater than the total outgoing amount, and it will be outgoing. So we
can reduce this case to one of the cases we described above.

After we have computed the token age consumed contribution at block $t$ for
every account, we can calculate the total token age consumed:

$$
tac(t) := \sum_{a} tac(a,t)
$$

## Example

Imagine again that Alice and Bob are exchanging tokens. Initially, Alice had 5000
tokens, which she obtained at block 0, and Bob doesn't have any tokens.

First, Alice transfers 1000 tokens to Bob at block 5. Her transaction stack has a
single element $[(5000, 0)]$ and 1000 tokens are consumed from it, contributing
$1000*(5-0)=5000$ token age consumed for block 5. Now Alice transaction stack is
$[(4000, 0)]$ and Bob transaction stack is $[(1000,5)]$.

Later Bob decides to move these tokens to an exchange and sell them, so at block
15 Bob transfers his tokens to an exchange wallet, which contributes
$1000*(15-5)=10000$ token age consumed to block 15. On the other hand Alice
transfers 2000 tokens to Bob at the same block 15, which makes the total token
age consumed for block 15 $10000 + 2000 * (15-0) = 10000 + 30000 = 40000$. The
transaction stacks of Alice is $[(2000, 0)]$, while the stack of Bob is $[(2000,
15)]$.

At block 25, both Alice and Bob decide to transfer their tokens to an exchange,
contributing $2000 * (25 - 0) + 2000 * (25 - 15) = 2000 * 25 + 2000 * 10 =
70000$ to the total token age consumed for block 25.
