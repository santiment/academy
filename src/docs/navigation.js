import Metrics from "../images/docs/Metrics"
import Changelog from "../images/docs/Changelog"
import Education from "../images/docs/Education"
import ProductsAndPlans from "../images/docs/Products"
import SANtokens from "../images/docs/San"
import SanAPI from "../images/docs/Sanapi"
import Sansheets from "../images/docs/Sansheets"
import Sanbase from "../images/docs/Sanbase"
import Glossary from "../images/docs/Glossary"
import Signals from "../images/docs/Signals"
import Labels from "../images/docs/Labels"
import Youtube from "../images/docs/Youtube"

export const GUIDES = [
  {
    title: "Education and Use cases",
    description: "Examples and use cases for Santiment metrics",
    icon: Education,
    articles: [
      "Timing market volatility with Token Age Consumed",
      {
        slug:
          "Investigate Speculative Activity with Santiment’s Exchange Metrics",
        title: "Analyze Speculative Activity with Santiment’s Exchange Metrics",
      },
      {
        slug: "How To Spot tops with Price - Network Activity divergences",
        title: "Spot tops with Price - Network Activity divergences",
      },
      {
        slug:
          "Price to Daily Addresses Divergence - Primer on On-chain Trading Strategies",
        title:
          "Price - Daily Addresses Divergence, A Primer on On-chain Trading Strategies",
      },
    ],
  },
  {
    title: "Sanbase",
    icon: Sanbase,
    description: "Our crypto analytics & behavior platform",
    articles: [
      { slug: "Assets page", title: "Assets Overview page" },
      "Insights",
      "Alerts page",
      { slug: "Emerging trends page", title: "Social Trends page" },
      { slug: "Social trends search", title: "Social Tool" },
      "Account settings",
      "Logging into Sanbase",
      {
        slug: "Requesting display new project",
        title:
          "Requesting new projects and their tokens to be displayed on Sanbase",
      },
    ],
  },
  {
    title: "SanAPI",
    icon: SanAPI,
    description: "Santiment API, Available Metrics & Queries",
    articles: ["Metrics", "Queries", "Common Queries"],
  },
  {
    title: "Sansheets",
    icon: Sansheets,
    description: "Our Spreadsheets plugin for Santiment data",
    articles: ["Setting Up", "Adding an API key", "Functions", "PRO Templates"],
  },
  {
    title: "Products and plans",
    icon: ProductsAndPlans,
    description: "On the Santiment suite and available plans",
    articles: [
      "Access Plans",
      "Santiment Products",
      "How to pay with crypto",
      "Create an API key",
      "Sanbase PRO features",
    ],
  },
  {
    title: "SAN tokens",
    icon: SANtokens,
    description: "Use cases, roadmap and where to buy",
    articles: [
      "How to buy SAN",
      "How to stake SAN",
      "Buy SAN tokens using Bancor",
      "About SAN tokens",
    ],
  },
  {
    title: "Glossary",
    icon: Glossary,
    description: "Introduction to all relevant terms and concepts",
    articles: [],
  },
  {
    title: "Youtube videos",
    description: "Explore our tutorials and webinars",
    icon: Youtube,
    articles: ["Webinars", "Walkthroughs", "Tutorials"],
  },
]

export const REFERENCES = [
  {
    title: "Metrics",
    description: "Documentation for on-chain, social & development indicators",
    icon: Metrics,
    articles: [
      "Age Consumed",
      "Amount in Top Holders",
      "BitMEX",
      "Circulation",
      "Community Messages Count",
      "Daily Active Addresses",
      "Daily Active Deposits",
      "DeFi",
      "DEX",
      "Development Activity",
      "Dormant Circulation",
      "Emerging Trends",
      "ETH 2",
      "Ethereum Spent",
      "Exchange Funds Flow",
      "Supply Distribution",
      "Labeled Balance",
      "Labeled Exchange",
      "Labeled Flow",
      "MakerDAO",
      "Mean Coin Age",
      "MVRV ratio",
      "Network Growth",
      "Network Profit Loss",
      "NVT",
      "Price",
      "Realized Value",
      "Sentiment Metrics",
      "Social Dominance",
      "Social Volume",
      "Unique Social Volume",
      "Transacted Coin Acquisition Cost",
      "Stock To Flow",
      "Supply On Or Outside Exchanges",
      "Top Holders",
      "Top Social Gainers Losers",
      "Transaction Volume",
      "Velocity",
    ],
  },
  {
    title: "Changelog",
    description: "Development updates, new features & platform improvements",
    icon: Changelog,
    articles: [],
  },
  {
    title: "Labels",
    description: "List and descriptions of all address labels on Santiment",
    icon: Labels,
    articles: [],
  },
  {
    title: "Signals",
    description: "Directory of key stakeholder signals available on Santiment",
    icon: Signals,
    articles: [
      "Anomalies",
      "ATH price USD",
      "DAI Mint",
      "DEX Trades",
      "Large Exchange Transactions",
      "Large Transactions",
      "MCD ART Liquidation",
      "Old Coins Moved",
      "Project in Trending Words",
      "UniswapV3 PoolCreated",
    ],
  },
]

export const RESOURCES = [
  {
    title: "How we compare",
    description: "Which crypto analytics solution is right for you?",
    articles: ["Messari vs Santiment"],
  },
]

export const GETTING_STARTED = {
  title: "Getting started",
  articles: ["For Traders", "For Developers"],
}
