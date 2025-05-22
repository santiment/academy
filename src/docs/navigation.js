import React from 'react'
import Metrics from '../images/docs/Metrics'
import Changelog from '../images/docs/Changelog'
import Education from '../images/docs/Education'
import ProductsAndPlans from '../images/docs/Products'
import SANtokens from '../images/docs/San'
import SanAPI from '../images/docs/Sanapi'
import Sansheets from '../images/docs/Sansheets'
import Sanqueries from '../images/docs/Sanqueries'
import Sanbase from '../images/docs/Sanbase'
import Glossary from '../images/docs/Glossary'
import Signals from '../images/docs/Signals'
import Labels from '../images/docs/Labels'
import Youtube from '../images/docs/Youtube'

export const GUIDES = [
  {
    title: 'Education and Use cases',
    description: (
      <>
        Examples and use cases
        <br />
        for Santiment metrics
      </>
    ),
    icon: Education,
    articles: [
      {
        slug: 'alerts on Sanbase',
        title: 'Sanbase Alerts - Age Consumed example',
      },
      {
        slug: 'social trends alerts',
        title: 'Sanbase Alerts - Social trends / Trending words example',
      },
      {
        slug: 'whale alert',
        title: 'Sanbase Alerts - Whale Alert example',
      },
      'Timing market volatility with Token Age Consumed',
      {
        slug:
          'Investigate Speculative Activity with Santiment’s Exchange Metrics',
        title: 'Analyze Speculative Activity with Santiment’s Exchange Metrics',
      },
      {
        slug: 'How To Spot tops with Price - Network Activity divergences',
        title: 'Spot tops with Price - Network Activity divergences',
      },
      {
        slug:
          'Price to Daily Addresses Divergence - Primer on On-chain Trading Strategies',
        title:
          'Price - Daily Addresses Divergence, A Primer on On-chain Trading Strategies',
      },
      {
        slug: 'santiment pro reports samples',
        title: 'Santiment PRO Reports Samples',
      },
      {
        slug: 'trading and transaction volume',
        title: 'Trading and Transaction Volume'
      },
      {
        slug: 'daily active addresses',
        title: 'Daily Active Addresses'
      },
      {
        slug: 'circulation',
        title: 'Circulation'
      },
      {
        slug: 'sanr practice makes perfect',
        title: 'SanR - Practice Makes Perfect'
      },
      {
        slug: 'understanding long-term market trends and cycles',
        title: 'Understanding Long-term Market Trends and Cycles'
      },
      {
        slug: 'understanding short-term market trends',
        title: 'Understanding Short-term Market Trends'
      },
      {
        slug: 'understanding crypto market cycles through lending metrics',
        title: 'Understanding Crypto Market Cycles Through Lending Metrics'
      },
      {
        slug: 'understanding market expectations through historical crypto trends',
        title: 'Understanding Market Expectations Through Historical Crypto Trends'
      }
    ]
  },
  {
    title: 'Sanbase',
    icon: Sanbase,
    description: (
      <>
        Our crypto analytics
        <br />& behavior platform
      </>
    ),
    articles: [
      'Account settings',
      'Alerts page',
      { slug: 'Assets page', title: 'Assets Overview page' },
      'Insights',
      'Keyboard Shortcuts',
      'Logging into Sanbase',
      {
        slug: 'Requesting display new project',
        title: 'Request to Display New Project',
      },
      'Social Trends',
    ],
  },
  {
    title: 'Santiment Queries',
    icon: Sanqueries,
    description: (
      <>
        Our database explorer
        <br />& research tool
      </>
    ),
    articles: [
      'Introduction',
      'Exploration',
      'Writing SQL Queries',
      'API Access',
      'Rate Limits and Credits Cost',
      'Prices Tables',
      'Metric Tables',
      { slug: 'bridges', title: 'Bridge Transactions' },
      'Lending Pools',
      'DEX Pools',
      'NFT Tables',
      'XRPL Tables',
    ],
  },
  {
    title: 'SanAPI',
    icon: SanAPI,
    description: (
      <>
        Our API, available metrics
        <br />& documentation
      </>
    ),
    articles: [
      'Accessing the API',
      'Fetching Metrics',
      'Common Queries',
      'Rate Limits',
      'Historical and Realtime data restrictions',
      'Complexity',
      'Supported Blockchains',
    ],
  },
  {
    title: 'Sansheets',
    icon: Sansheets,
    description: (
      <>
        Our Spreadsheets plugin
        <br />
        for Santiment data
      </>
    ),
    articles: ['Setting Up', 'Adding an API key', 'Functions', 'PRO Templates'],
  },
  {
    title: 'Products and plans',
    icon: ProductsAndPlans,
    description: (
      <>
        On the Santiment suite
        <br />
        and available plans
      </>
    ),
    articles: [
      'Access Plans',
      {
        slug: 'sanbase-plans',
        title: 'Access Plans - Sanbase',
      },
      {
        slug: 'sanapi-plans',
        title: 'Access Plans - SanAPI',
      },
      'Sanbase subscription via SanR NFT',
      'Santiment Products',
      'How to pay with crypto',
      'Create an API key',
      'Sanbase PRO features',
    ],
  },
  {
    title: 'SAN tokens',
    icon: SANtokens,
    description: (
      <>
        Use cases, roadmap
        <br />
        and where to buy
      </>
    ),
    articles: [
      'How to buy SAN tokens',
      'Connect a wallet to the Sanbase account',
      'SAN tokens holding benefits',
    ],
  },
  {
    title: 'Glossary',
    icon: Glossary,
    description: (
      <>
        Introduction to all relevant
        <br />
        terms and concepts
      </>
    ),
    articles: ['Asset', 'Deposit Addresses'],
  },
  {
    title: 'Youtube videos',
    description: (
      <>
        Santiment webinars, video
        <br />
        tutorials and more
      </>
    ),
    icon: Youtube,
    articles: ['Webinars', 'Walkthroughs', 'Tutorials'],
  },
]

export const REFERENCES = [
  {
    title: 'Metrics',
    description: `Introduction to Santiment's on-chain, social and development indicators`,
    icon: Metrics,
    articles: [
      'Active Addresses 24h',
      'Active Deposits',
      'Active Withdrawals',
      'Age Consumed',
      'Amount in Top Holders',
      'Annual Inflation Rate',
      'BTC and S and P 500 Price Divergence',
      'Binance Derivatives',
      'BitMEX Derivatives',
      'Bitcoin ETF Volume',
      'Bitfinex Derivatives',
      'Circulation',
      'Community Messages Count',
      'Daily Active Addresses',
      'Daily Aggregated Financial Metrics',
      'Decentralized Exchange Metrics',
      'Deprecated Metrics',
      'Deribit Derivatives',
      'Development Activity',
      'Dormant Circulation',
      'dYdX Derivatives',
      'ETF Flow',
      'ETH 2',
      'Emerging Trends',
      'Ethena Protocol',
      'Ethereum Fees',
      'Ethereum Spent',
      'Exchange Funds Flow',
      'FTX Derivatives',
      'Fully Diluted Valuation',
      'Funding Rates Aggregated',
      'Gini Index',
      'Huobi Derivatives',
      'Labeled Balance',
      'Labeled Exchange',
      'Labelled Historical Balance',
      'Lending and Borrowing Protocols',
      'M2 Money Supply',
      'MVRV',
      'MakerDAO DAI Savings Rate',
      'Marketcap',
      'Mean Coin Age',
      'Mean Realized Price',
      'NFT Collection Holders Balance',
      'NFT Collection Price',
      'NFT Market Volume',
      'NFT Network Profit Loss',
      'NFT Social Volume',
      'NFT Trade Volume USD',
      'NFT Trades Count',
      'NVT',
      'Network Growth',
      'Network Profit Loss',
      'Open Interest',
      'Pendle Markets',
      'Price DAA Divergence',
      'Price Volatility',
      'Price',
      'RSI',
      'Rank',
      'Realized Market Capitalization Hodl Waves',
      'Realized Value',
      'Sentiment Metrics',
      'Sky Savings',
      'Social Dominance',
      'Social Volume AI',
      'Social Volume',
      'Spent Coins Age Band',
      'Stock To Flow',
      'Supply Distribution',
      'Supply On Or Outside Exchanges',
      'Top Holders',
      'Top Social Gainers Losers',
      'Total Supply',
      'Trading Volume',
      'Transacted Coin Acquisition Cost',
      'Transaction Count',
      'Transaction Size',
      'Transaction Volume In Profit Or Loss',
      'Transaction Volume',
      'Trending Words Rank',
      'Unique Social Volume',
      'Velocity',
      'Whale Transaction Count',
      'Whale Transaction Volume',
      'XRPL Metrics',
      // 'Top Transfers',
    ],
  },
  {
    title: 'Changelog',
    description:
      'Development updates, new features and other platform-wide improvements',
    icon: Changelog,
    articles: [],
  },
  {
    title: 'Labels',
    description: 'List and descriptions of all address labels on Santiment',
    icon: Labels,
    articles: [
      'Airdrop Receiver',
      'Airdrop Sender',
      'Bridge',
      'CeFi',
      'Centralized exchange',
      'Charity',
      'Closed',
      'Cold wallet',
      'Contract',
      'Dead address',
      'Decentralized exchange',
      'Derivatives',
      'Deposit',
      'DEX user',
      'ERC721',
      'ERC1155',
      'ETH2 Staking',
      'ETH2 Staking Address',
      'Factory',
      'Fund',
      'Gambling',
      'GameFi',
      'Genesis',
      'Lending',
      'Lending User',
      'Liquidity',
      'Migration Address',
      'Miner',
      'NFT',
      'NFT collection',
      'NFT collection name',
      'NFT collection symbol',
      'NFT Influencer',
      'NFT marketplace',
      'NFT trader',
      'NFT trader threshold',
      'NFT user',
      'Owner',
      'Proxy',
      'Used NFT marketplace',
      'Whale',
      'Whale USD Balance',
      'Yield Farming',
      'Withdrawal',
    ],
  },
  {
    title: 'Signals',
    description: 'Directory of key stakeholder signals available on Santiment',
    icon: Signals,
    articles: [
      'Anomalies',
      'Large Exchange Transactions 1M',
      {
        slug: 'deprecated',
        title: 'Deprecated Signals',
      },
    ],
  },
]

export const RESOURCES = [
  {
    title: 'How we compare',
    description: 'Which crypto analytics solution is right for you?',
    articles: ['Messari vs Santiment'],
  },
]

export const GETTING_STARTED = {
  title: 'Getting started',
  articles: ['Santiment Introduction', 'For Traders', 'For Developers'],
}
