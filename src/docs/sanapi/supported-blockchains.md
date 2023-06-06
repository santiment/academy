---
title: Supported Blockchains
author: Santiment Team
date: 2023-05-31
---

When Santiment marks a blockchain as supported, it means that the on-chain transactions (and events, receipts or other relevant data) are exported
and metrics are built on top of them.

Not all supported blockchains have exchange-, label- or miner-related metrics.

Check [here](https://api.santiment.net/graphiql?variables=&query=%7B%0A++getAvailableBlockchains+%7B%0A++++blockchain%0A++++slug%0A++++infrastructure%0A++++createdOn%0A++++hasLabelMetrics%0A++++hasMinersMetrics%0A++++hasExchangeMetrics%0A++++hasTopHoldersMetrics%0A++++hasPureOnchainMetrics%0A++++hasOnchainFinancialMetrics%0A++%7D%0A%7D%0A)  for more details on the type of metrics available for each of the blockchains.

Price data might be available for blockchains not listed here.

| Bitcoin            | Ethereum           | XRPL               |
| ------------------ | ------------------ | ------------------ |
| :white_check_mark: | :white_check_mark: | :white_check_mark: |

| BNB Chain          | Bitcoin Cash       | Litecoin           |
| ------------------ | ------------------ | ------------------ |
| :white_check_mark: | :white_check_mark: | :white_check_mark: |

| Cardano            | Dogecoin           | Polygon            |
| ------------------ | ------------------ | ------------------ |
| :white_check_mark: | :white_check_mark: | :white_check_mark: |

| Avalanche (ERC20)  | Optimism           | Arbitrum           |
| ------------------ | ------------------ | ------------------ |
| :white_check_mark: | :white_check_mark: | :white_check_mark: |
