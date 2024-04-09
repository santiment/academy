---
title: Labels
author: Santiment Team
description: Santiment labels vision for crypto wallets
date: 2023-03-21
---

## Labels overview

Generally speaking, an **address label** is a piece of information attached to a wallet address.

The most common use case of one is to denote the owner of the given address. E.g. address “A” belongs to Alice, and address “B” belongs to Binance exchange. Another use-case would be marking (aka labeling) an address as a smart contract. E.g. address “C” is an ERC-721 standard contract. Or we might need to label an address according to how the address is used. For instance, address “D” is a cold storage address.

There are a lot of label types and use-cases which are described below.


## How we gather labels

Collecting labels is not a trivial task. To keep our explanation concise, there are three main ways to gather a label:

1. **Open sources**

    Some people or projects are willing to share their addresses. E.g. most DeFi projects post their smart contract addresses, and some centralized exchanges reveal their addresses to prove that they hold a certain amount of funds. We collect these addresses and store them in our database.

2. **Manual label collection**

    In order to collect some labels, manual research is required. For instance, we can manually deposit some ETH to a centralized exchange and track its flow. The ETH will flow first to a deposit address, and then to the centralized exchange.

3. **Algorithms**

    This is the most powerful method if you need to label many addresses. At Santiment, we have a lot of manually developed algorithms for labeling different types of addresses. Some of our algorithms are native (e.g. in order to find NFT traders, we can just track trades on an NFT trading platform). Others are quite sophisticated (e.g. we developed an algorithm that tracks coinbase cold wallets and relies on some counterintuitive assumptions and filters the whole history of ETH transactions to find these cold wallets).

Very often, we combine different methods. For instance, we could manually collect some addresses, manually analyze its on-chain behavior, and design an algorithm gathering all addresses of the initial type.


## Labels limitations

Although we are constantly working on adding and improving labels, there are two types of errors that may occur:

1. **False positive error** (wrong label was added to the address)

    At Santiment, we care a great deal about false positive errors. We do not add labels without making sure the label is correct, or mark the label as suspicious and exclude the address from further computations. Our goal is to build trustworthy labels so that low false positive error rates are ensured.

2. **False negative error** (address was not labelled properly)

    It is not a trivial task to find all addresses that belong to a person. Let's say you decided to label all addresses belonging to your friend, Alice. Once you find some Alice addresses it's very hard to prove there are no other addresses that are controlled by Alice. Moreover, Alice might want to hide her funds or transactions, so she might use different addresses, use mixers, or design some sophisticated way to distribute her funds so no one can find them. So we always have to assume that there might be addresses that we missed and didn't label.

In case you found any mistakes in our labeling, please let us know (via discord or email). We appreciate your help a great deal :)


## Labels systematisation

At Santiment, we label millions of addresses with dozens of different labels. In order to keep it easy to work with labels, we created a way to split all labels into logical groups. Here's a simplified description of how we handle labels.

We split all labels into major groups. Each major group might consist of smaller groups. Here's a list of major groups:

* **Domains**

    The group includes legal entities (exchanges, platforms, mining pools, etc.), DAOs, and smart contracts.

* **Owner**

    A standalone label which denotes the person or company which controls a given address. Note that the owner label is not a nickname. Owner is a broader term rather than nickname which is an owner's attribute (e.g. Vitalik Buterin might have several nicknames: 'Vitaliy', 'ETH_daddy', 'John Galt', etc)

* **Infrastructure**

    A group including addresses that are bound to any other group and serve any internal tasks.

* **Activity**

    A group including addresses which are actively or passively engaged in a certain type of activity (for example: trading, receiving airdrop, blogging, etc.)

* **Social networks**

     A group including users’ nicknames on social networks, forums, platforms, etc.

* **Status**

   A group that includes the status of the project: blocked, hacked or associated with fraudulent activity (scam).

---

Below you can find labels which are attached to every group from above. Please note that an address might have many labels. For example, every _DEX_ address is labeled as _DeFi_ as well (_DeFi_ is a parent group for _DEX_ group) or _centralized_exchange_ addresses most often owe a dedicated _owner_ label.


### Domains

- [DeFi](/labels/defi)
    - [Bridge](/labels/bridge)
    - [Decentralized exchange](/labels/decentralized-exchange)
    - [Derivatives](/labels/derivatives)
    - [Lending](/labels/lending)
    - [Liquidity](/labels/liquidity)
    - TBA: liquid_staking
    - TBA: staking
    - [Yield Farming](/labels/yield)
- [CeFi](/labels/cefi)
    - [Centralized exchange](/labels/centralized-exchange)
    - [Fund](/labels/fund)
    - TBA: Market maker
- [NFT](/labels/nft)
    - [NFT collection](/labels/nft-collection)
    - [NFT collection name](/labels/nft-collection-name)
    - [NFT collection symbol](/labels/nft-collection-symbol)
    - [NFT marketplace](/labels/nft-marketplace)
- [ETH2_Staking](/labels/eth2-staking)
- [GameFi](/labels/gamefi)
    - [Gambling](/labels/gambling)
- TBA: mining_pool


### Owner

- [Owner](/labels/owner)


### Infrastructure

- [Airdrop Sender](/labels/airdrop-sender)
- [Deposit](/labels/deposit)
- [Contract](/labels/contract)
    - [ERC721](/labels/erc721)
    - [ERC1155](/labels/erc1155)
    - [Factory](/labels/factory)
    - [Proxy](/labels/proxy)
    - TBA: Multisig
- [Cold wallet](/labels/cold-wallet)
- [Dead address](/labels/dead-address)
- [Migration Address](/labels/migration-address)
- TBA: team_wallet


### Activity

 - [Airdrop Receiver](/labels/airdrop-receiver)
 - [Charity](/labels/charity)
 - [DEX user](/labels/dex-user)
 - [ETH2 Staking Address](/labels/eth2-staking-address)
 - [Genesis](/labels/genesis)
 - [Miner](/labels/miner)
 - [NFT trader](/labels/nft-trader)
 - [NFT trader threshold](/labels/nft-trader-threshold)
 - [NFT user](/labels/nft-user)
 - [NFT Influencer](/labels/nft-influencer)
 - [Used NFT marketplace](/labels/used-nft-marketplace)
 - [Whale](/labels/whale)
 - [Whale USD Balance](/labels/whale-usd-balance)
 - [Lending User](/labels/lending-user)
 - [Withdrawal](/labels/withdrawal)
 - [Withdrawn From](/labels/withdrawn-from)


### Social networks

- TBA: twitter
- TBA: opensea_username


### Status

- [Blocked](/labels/blocked)
- [Closed](/labels/closed)
- TBA: Hacked
- [Sanctioned](/labels/sanctioned)


### Chain

- TBA: L2