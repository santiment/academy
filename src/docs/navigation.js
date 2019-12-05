import Metrics from "../images/docs/metrics.svg"
import ProductsAndPlans from "../images/docs/products-and-plans.svg"
import SANtokens from "../images/docs/san-tokens.svg"
import SanAPI from "../images/docs/sanapi.svg"
import Sandata from "../images/docs/sandata.svg"
import Sansheets from "../images/docs/sansheets.svg"
import Sanbase from "../images/docs/sanbase.svg"
import Glossary from "../images/docs/glossary.svg"

export const CATEGORIES = [
  {
    title: "Metrics",
    icon: Metrics,
    articles: ["Social data", "Sentiment metrics", "Social volume metrics", "Emerging trends", "Daily Active Addresses", "MVRV", "EOS", "Mean coin age", "Developer Activity", "Top holders", "Token Age Consumed", "Deposit Addresses", "Metrics for Deposit Addresses", "Exchange Flow metrics", "Network Growth", "Token Circulation", "Transaction Volume", "Velocity of Tokens", "NVT Ratio", "Top 100 transactions", "History Price", "OHLC", "Percentage of token supply on exchanges", "Realized value", "Top Social Gainers Losers"],
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
    articles: ["Exploring", "Available queries", "Available metrics"],
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
    articles: ["Navigation", "The erc 20 overview page", "The on-chain metrics overview page"],
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
  },
  {
    title: "Glossary",
    icon: Glossary,
    articles: ["Asset"]
  }
]

export const GETTING_STARTED = {
  title: "Getting started",
  blocks: [
	  {title: "For traders"},
	  {title: "For developers"}
  ],
}
