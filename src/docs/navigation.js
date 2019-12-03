export const GRAPHS = {
  about: {
    title: "About",
    articles: ["Navigation", "The erc 20 overview page", "The on-chain metrics overview page"],
  },
}

export const NEURO = {
  about: {
    title: "API reference",
    articles: ["Exploring", "Available queries", "Available metrics"],
  },
}

export const CATEGORIES = [
  {
    title: "Metrics",
    articles: ["Social data", "Sentiment metrics", "Social volume metrics", "Emerging trends", "Daily Active Addresses", "MVRV", "EOS", "Mean coin age", "Developer Activity", "Top holders", "Token Age Consumed", "Deposit Addresses", "Metrics for Deposit Addresses", "Exchange Flow metrics", "Network Growth", "Token Circulation", "Transaction Volume", "Velocity of Tokens", "NVT Ratio", "Top 100 transactions", "History Price", "OHLC", "Percentage of token supply on exchanges", "Realized value", "Top Social Gainers Losers"],
  },
  {
    title: "Sanbase",
    description: "Platform for in-depth coin analysis, signals and watchlists",
    articles: ["Assets page", "Insights", "Sonar page", "Emerging trends page", "Social trends search", "Account settings", "Logging into Sanbase","Requesting display new project"],

  },
  {
    title: "SanAPI",
    description: "The most comprehensive crypto API on the market",
    blocks: [NEURO.about],
  },
  {
    title: "Sansheets",
    description: "Google Spreadsheet plugin for Santiment data",
    articles: ["Setting up", "Adding an API key", "Functions"]
  },
  {
    title: "Sandata",
    description: "Advanced metrics and charts for 700+ coins",
    blocks: [GRAPHS.about],
  },
  {
    title: "Products and plans",
    articles: ["Access plans", "Santiment products", "Create an API key"],
  },
  {
    title: "SAN tokens",
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
