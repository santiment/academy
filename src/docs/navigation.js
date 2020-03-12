import Metrics from "../images/docs/metrics.svg"
import Changelog from "../images/docs/changelog.svg"
import Education from "../images/docs/education-and-use-cases.svg"
import ProductsAndPlans from "../images/docs/products-and-plans.svg"
import SANtokens from "../images/docs/san-tokens.svg"
import SanAPI from "../images/docs/sanapi.svg"
import Sandata from "../images/docs/sandata.svg"
import Sansheets from "../images/docs/sansheets.svg"
import Sanbase from "../images/docs/sanbase.svg"
import Glossary from "../images/docs/glossary.svg"

export const GUIDES = [
  {
    title: "Education and Use cases",
    description: "Examples and use cases for Santiment metrics",
    icon: Education,
    articles: ["Timing market volatility with Token Age Consumed","Investigate Speculative Activity with Santiment’s Exchange Metrics", "How To Spot tops with Price - Network Activity divergences","Price to Daily Addresses Divergence - Primer on On-chain Trading Strategies"]
  },
  {
    title: "Sanbase",
    icon: Sanbase,
    description: "Our crypto analytics & behavior platform",
    articles: ["Assets page", "Insights", "Sonar page", "Emerging trends page", "Social trends search", "Account settings", "Logging into Sanbase","Requesting display new project"],

  },
  {
    title: "SanAPI",
    icon: SanAPI,
    description: "Our API, available metrics & queries",
    articles: ["Exploring", "Available queries", "Available metrics"],
  },
  {
    title: "Sansheets",
    icon: Sansheets,
    description: "Our Spreadsheets plugin for Santiment data",
    articles: ["Setting up", "Adding an API key", "Functions", "Pro Templates"]
  },
  {
    title: "Sandata",
    icon: Sandata,
    description: "Our advanced crypto dashboards",
    articles: ["Logging into Sandata", "Navigation", "The erc 20 overview page"],
  },
  {
    title: "Products and plans",
    icon: ProductsAndPlans,
    description: "On the Santiment suite and available plans",
    articles: ["Access plans", "Santiment products", "How to pay with crypto", "Create an API key", "Sanbase PRO features"],
  },
  {
    title: "SAN tokens",
    icon: SANtokens,
    description: "Use cases, roadmap and where to buy",
    articles: ["How to buy SAN", "How to stake SAN", "Buy SAN tokens using Bancor", "About SAN tokens"],
  },
  {
    title: "Glossary",
    icon: Glossary,
    description: "Introduction to all relevant terms and concepts",
    articles: ["Asset", "Slug"]
  }
]

export const REFERENCES = [
  {
    title: "Metrics",
    description: "Documentation and API references for Santiment indicators",
    icon: Metrics,
    articles: ["Social data", "Sentiment metrics", "Social volume metrics", "Emerging trends", "Daily Active Addresses", "MVRV", "EOS", "Mean coin age", "Developer Activity", "Top holders", "Token Age Consumed", "Deposit Addresses", "Metrics for Deposit Addresses", "Exchange Flow metrics", "Network Growth", "Token Circulation", "Transaction Volume", "Velocity of Tokens", "NVT Ratio", "Top 100 transactions", "History Price", "OHLC", "Percentage of token supply on exchanges", "Realized value", "Top Social Gainers Losers"],
  },
  {
    title: "Changelog",
    description: "Keep track of development updates and new product features",
    icon: Changelog,
    articles: []
  }
]

export const GETTING_STARTED = {
  title: "Getting started",
  articles: ["For traders","For developers"]
}
