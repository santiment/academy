---
title: DEX
author: Maksim Razhev
date: 2020-12-24
description: Labeled Metrics
---

## Description
Metrics that shows various stats of labeled addresses

* `active_deposits_per_exchange,active_withdrawals_per_exchange`
* `deposit_transactions_per_exchange,withdrawal_transactions_per_exchange`
* `inflow_per_label_and_owner,outflow_per_label_and_owner,balance_per_label_and_owner_delta,balance_per_owner`
* `labelled_exchange_balance`

Labeled balance metrics:
* `all_known_balance`
* `unlabeled_balance`
* `[label]_balance`

Labeled exchange flow:
* `[label]_to_exchanges_flow`
* `exchanges_to_[label]_flow`
* `[label]_exchange_balance`

Flow between labels:
* `[label]_to_[label]_flow`
* `[label]_[label]_balance`

Available labels:
* `miners`
* `genesis`
* `dex_trader`
* `trader`
* `defi`
* `dex`
* `cex`
* `withdrawal`
* `deposit`
* `proxy`
* `whale`
* `makerdao_bite_keeper`
* `makerdao_cdp_owner`
* `unlabeled`
* `all_known_balance`