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
        slug: 'santiment testimonials',
        title: 'Santiment Testimonials',
      },
    ],
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
      { slug: 'Assets page', title: 'Assets Overview page' },
      'Insights',
      'Alerts page',
      { slug: 'Emerging trends page', title: 'Social Trends page' },
      { slug: 'Social trends search', title: 'Social Tool' },
      'Account settings',
      'Logging into Sanbase',
      {
        slug: 'Requesting display new project',
        title:
          'Requesting new projects and their tokens to be displayed on Sanbase',
      },
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
    articles: ['Introduction', 'Exploration', 'Writing SQL Queries', 'API Access', 'Liquidation', 'NFT Tables', 'XRPL Tables'],
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
    articles: ['Metrics', 'Queries', 'Common Queries'],
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
    articles: [],
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
      'Aave v2',
      'Age Consumed',
      'Amount in Top Holders',
      'Binance',
      'Bitfinex',
      'BitMEX',
      'Circulation',
      'Community Messages Count',
      'Compound',
      'Daily Active Addresses',
      'Active Addresses 24h',
      'Daily Active Deposits',
      'DeFi',
      'Deribit',
      'DEX',
      'Development Activity',
      'Development Activity Contributors Count',
      'Dormant Circulation',
      'dYdX',
      'Emerging Trends',
      'ETH 2',
      'Ethereum Spent',
      'Exchange Funds Flow',
      'FTX',
      'Huobi',
      'Labeled Balance',
      'Labeled Exchange',
      'Labeled Flow',
      'MakerDAO',
      'Mean Coin Age',
      'MVRV ratio',
      'Network Growth',
      'Network Profit Loss',
      'NFT Collection Holders Balance',
      'NFT Collection Price',
      'NFT Market Volume',
      'NFT Network Profit Loss',
      'NFT Social Volume',
      'NVT',
      'Price',
      'Price Volatility',
      'Realized Market Capitalization Hodl Waves',
      'Realized Value',
      'Sentiment Metrics',
      'Social Dominance',
      'Social Volume',
      'Unique Social Volume',
      'Spent Coins Age Band',
      'Supply Distribution',
      'Stock To Flow',
      'Supply On Or Outside Exchanges',
      'Top Holders',
      'Top Social Gainers Losers',
      'Transacted Coin Acquisition Cost',
      `Transaction Count`,
      'Transaction Volume',
      'Transaction Volume In Profit Or Loss',
      'Trending Words Rank',
      'Velocity',
      'Whale Transaction Count',
      'XRPL',
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
      'CeFi',
      'Centralized exchange',
      'Cold wallet',
      'Contract',
      'Dead address',
      'Decentralized exchange',
      'DeFi',
      'Deposit',
      'ERC721',
      'ERC1155',
      'Fund',
      'Genesis',
      'Miner',
      'NFT',
      'NFT collection name',
      'Owner',
      'Whale'
    ],
  },
  {
    title: 'Signals',
    description: 'Directory of key stakeholder signals available on Santiment',
    icon: Signals,
    articles: [
      'Anomalies',
      'ATH price USD',
      'DAI Mint',
      'DEX Trades',
      'Large Exchange Transactions',
      'Large Transactions',
      'MCD ART Liquidation',
      'Old Coins Moved',
      'Project in Trending Words',
      'UniswapV3 PoolCreated',
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
  articles: ['For Traders', 'For Developers'],
}
