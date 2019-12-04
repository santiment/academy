import Metrics from "../images/docs/glossary.svg"
import ProductsAndPlans from "../images/docs/products-and-plans.svg"
import SANtokens from "../images/docs/san-tokens.svg"
import SanAPI from "../images/docs/sanapi.svg"
import Sandata from "../images/docs/sandata.svg"
import Sansheets from "../images/docs/sansheets.svg"
import Sanbase from "../images/docs/sanbase.svg"
// import Glossary from "./images/docs/glossary.svg"

export const GRAPHS = {
  about: {
    title: "About",
    articles: ["Navigation", "The erc 20 overview page", "The on-chain metrics overview page"],
  },
  howWorks: {
    title: "How it works",
    articles: [],
  },
  metrics: {
    title: "Metrics",
    articles: ["Average token age consumed in days",
    "Daily Active Addresses",
    "Daily Active Deposits",
    "Deposit Addresses",
    "Deposit Related Transactions",
    "Developer Activity",
    "Exchange Flow",
    "Exchange Flow Balance",
    "MVRV Ratio",
    "Network Growth",
    "NVT ratio",
    "Share of daily active deposits in total daily active addresses",
    "Share of deposit transactions in total transactions",
    "Social data feed",
    "Social dominance",
    "Social Volume",
    "Token Age Consumed",
    "Token Circulation",
    "Top 100 transactions",
    "Top holders",
    "Top holders balance",
    "Top holders changes",
    "Top holders details",
    "Top holders percent of total supply",
    "Topic search",
    "Transaction Volume",
    "Velocity Of Tokens",
]
  }
}

export const NEURO = {
  about: {
    title: "API reference",
    articles: ["Exploring", "Available queries", "Available metrics"],
  },
  metrics: {
    title: "Metrics",
    articles: ["Daily Active Addresses", "Daily Active Deposits", "Developer Activity", "Exchange Funds Flow", "History Price", "MVRV Ratio", "Network Growth", "NVT ratio", "OHLC", "Percentage of token supply on exchanges", "Realized value", "Social Dominance", "Social Volume", "Token Age Consumed", "Token Age Consumed In Days", "Token Circulation", "Top Social Gainers Losers", "Topic search", "Transaction Volume", "Trending Words", "Velocity Of Tokens"],
  },
}

export const CATEGORIES = [
  {
    title: "Metrics",
    icon: Metrics,
    articles: ["Daily Active Addresses", "MVRV", "EOS", "Social data", "Sentiment metrics", "Social volume metrics", "Emerging trends", "Mean coin age"],
  },
  {
    title: "Sanbase",
    icon: Sanbase,
    description: "Platform for in-depth coin analysis, signals and watchlists",
    articles: ["Assets page", "Insights", "Sonar page", "Emerging trends page", "Social trends search", "Account settings", "Logging into Sanbase","Requesting display new project"],

  },
  {
    title: "SanAPI",
    icon: SanAPI,
    description: "The most comprehensive crypto API on the market",
    blocks: [NEURO.about, NEURO.metrics],
  },
  {
    title: "Sansheets",
    icon: Sansheets,
    description: "Google Spreadsheet plugin for Santiment data",
    articles: ["Setting up", "Adding an API key", "Functions"]
  },
  {
    title: "Sandata",
    icon: Sandata,
    description: "Advanced metrics and charts for 700+ coins",
    blocks: [GRAPHS.metrics, GRAPHS.about],
  },
  {
    title: "Products and plans",
    icon: ProductsAndPlans,
    articles: ["Access plans", "Santiment products", "Create an API key"],
  },
  {
    title: "SAN tokens",
    icon: SANtokens,
    articles: ["How to buy SAN", "How to stake SAN", "Buy SAN tokens using Bancor", "About SAN tokens"],
  }
]

export const GETTING_STARTED = {
  title: "Getting started",
  blocks: [
	  {title: "For traders"},
	  {title: "For developers"}
  ],
}
