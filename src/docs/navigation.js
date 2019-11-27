export const SANBASE = {
  about: {
    title: "About",
    articles: ["Navigation", "The assets page", "Social trends search", "Insights", "Emerging trends page", "Categories and watchlists"],
  },
  myAccount: {
    title: "My account",
    articles: ["Account settings", "Logging into Sanbase"],
  },
  faq: {
    title: "FAQ",
    articles: ["Requesting display new project"],
  },
}

export const GENERAL = {
  products: {
    title: "Products and plans",
    articles: ["Access plans", "Santiment products", "Create an API key"],
  },
  tokens: {
    title: "SAN tokens",
    articles: ["How to buy SAN", "How to stake SAN", "Buy SAN tokens using Bancor", "About SAN tokens"],
  },
  metrics: {
    title: "Metrics",
    articles: ["Daily Active Addresses", "MVRV", "EOS", "Social data", "Sentiment metrics", "Social volume metrics", "Emerging trends", "Mean coin age"],
  }
}

export const SHEETS = {
  about: {
    title: "Getting started",
    articles: ["Setting up", "Adding an API key"],
  },
  functions: {
    title: "API",
    articles: ["Functions"],
  }
}

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
    title: "General",
    description: "Info about our products, plans, metrics and SAN tokens",
    blocks: [
      GENERAL.products,
      GENERAL.metrics,
      GENERAL.tokens,
    ]
  },
  {
    title: "Sanbase",
    description:
      "Platform for in-depth coin analysis, low-latency signals, asset watchlists",
    blocks: [SANBASE.about, SANBASE.myAccount, SANBASE.faq],
  },
  {
    title: "Neuro API",
    description: "The most comprehensive crypto API on the market",
    blocks: [NEURO.about, NEURO.metrics],
  },
  {
    title: "Sansheets",
    description: "Google Spreadsheet plugin for Santiment data",
    blocks: [
      SHEETS.about,
      SHEETS.functions,
    ],
  },
  {
    title: "Sangraphs",
    description:
      "Advanced on-chain, social and development metrics and charts for 700+ coins",
    blocks: [GRAPHS.metrics, GRAPHS.about],
  },
]

export const GETTING_STARTED = {
  title: "Getting started",
  blocks: [
	  {
	  	title: "For traders"
	  },
	  {
	  	title: "For developers"
	  }
  ],
}
