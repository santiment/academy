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
    description: "Explanations, tutorials and use cases for Santiment metrics and indicators",
    icon: Metrics,
    articles: ["Social data", "Sentiment metrics", "Social volume metrics", "Emerging trends", "Daily Active Addresses", "MVRV", "EOS", "Mean coin age", "Developer Activity", "Top holders", "Token Age Consumed", "Deposit Addresses", "Metrics for Deposit Addresses", "Exchange Flow metrics", "Network Growth", "Token Circulation", "Transaction Volume", "Velocity of Tokens", "NVT Ratio", "Top 100 transactions", "History Price", "OHLC", "Percentage of token supply on exchanges", "Realized value", "Top Social Gainers Losers"],
  },
  {
    title: "Sanbase",
    icon: Sanbase,
    description: "Getting started with our crypto analytics and market behavior platform",
    articles: ["Assets page", "Insights", "Sonar page", "Emerging trends page", "Social trends search", "Account settings", "Logging into Sanbase","Requesting display new project"],

  },
  {
    title: "SanAPI",
    icon: SanAPI,
    description: "Getting started with our API, including available metrics, documentation and more",
    articles: ["Exploring", "Available queries", "Available metrics"],
  },
  {
    title: "Sansheets",
    icon: Sansheets,
    description: "Getting started with our plugin for importing Santiment data into Google Spreadhseets",
    articles: ["Setting up", "Adding an API key", "Functions"]
  },
  {
    title: "Sandata",
    icon: Sandata,
    description: "Getting started with our dashboards for crypto analysis",
    articles: ["Navigation", "The erc 20 overview page", "The on-chain metrics overview page"],
  },
  {
    title: "Products and plans",
    icon: ProductsAndPlans,
    description: "An overview of our product suite and the available plans",
    articles: ["Access plans", "Santiment products", "Create an API key"],
  },
  {
    title: "SAN tokens",
    icon: SANtokens,
    description: "All about our SAN token with use cases and where to buy",
    articles: ["How to buy SAN", "How to stake SAN", "Buy SAN tokens using Bancor", "About SAN tokens"],
  },
  {
    title: "Glossary",
    icon: Glossary,
    description: "Introduction to all relevant terms and concepts",
    articles: ["Asset", "Slug"]
  }
]

export const GETTING_STARTED = {
  title: "Getting started",
  blocks: [
	  {title: "For traders"},
	  {title: "For developers"}
  ],
}
