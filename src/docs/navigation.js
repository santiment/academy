import Metrics from "../images/docs/metrics.svg"
import Changelog from "../images/docs/changelog.svg"
import Education from "../images/docs/education-and-use-cases.svg"
import ProductsAndPlans from "../images/docs/products-and-plans.svg"
import SANtokens from "../images/docs/san-tokens.svg"
import SanAPI from "../images/docs/sanapi.svg"
import Sansheets from "../images/docs/sansheets.svg"
import Sanbase from "../images/docs/sanbase.svg"
import Glossary from "../images/docs/glossary.svg"

export const GUIDES = [
  {
    title: "Education and Use cases",
    description: "Examples and use cases for Santiment metrics",
    icon: Education,
    articles: [
      "Timing market volatility with Token Age Consumed",
      "Investigate Speculative Activity with Santiment’s Exchange Metrics",
      "How To Spot tops with Price - Network Activity divergences",
      "Price to Daily Addresses Divergence - Primer on On-chain Trading Strategies",
    ],
  },
  {
    title: "Sanbase",
    icon: Sanbase,
    description: "Our crypto analytics & behavior platform",
    articles: [
      "Assets page",
      "Insights",
      "Sonar page",
      "Emerging trends page",
      "Social trends search",
      "Account settings",
      "Logging into Sanbase",
      "Requesting display new project",
    ],
  },
  {
    title: "SanAPI",
    icon: SanAPI,
    description: "Santiment API, Available Metrics & Queries",
    articles: ["Metrics", "Queries"],
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
]

export const REFERENCES = [
  {
    title: "Metrics",
    description: "Documentation and API references for Santiment indicators",
    icon: Metrics,
    articles: [
      "Age Consumed",
      "BitMEX",
      "Circulation",
      "Community Messages Count",
      "Daily Active Addresses",
      "Daily Active Deposits",
      "Development Activity",
      "Dormant Circulation",
      "Emerging Trends",
      "Ethereum Spent",
      "Exchange Funds Flow",
      "MVRV",
      "Mean Coin Age",
      "NVT",
      "Network Growth",
      "Stock To Flow",
      "Supply On Or Outside Exchanges",
      "Price",
      "Realized Value",
      "Sentiment Metrics",
      "Spent Coin Cost",
      "Social Dominance",
      "Social Volume",
      "Top Social Gainers Losers",
      "Top Holders",
      "Transaction Volume",
      "Velocity",
    ],
  },
  {
    title: "Changelog",
    description: "Keep track of development updates and new product features",
    icon: Changelog,
    articles: [],
  },
]

export const GETTING_STARTED = {
  title: "Getting started",
  articles: ["For Traders", "For Developers"],
}
