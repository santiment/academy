import sanr from './icons/sanr.svg'
import sanapi from './icons/sanapi.svg'
import sanbase from './icons/sanbase.svg'
import insights from './icons/insights.svg'
import sansheets from './icons/sansheets.svg'
import research from './icons/research.svg'

export const BUSINESS_PRODUCTS = [
  {
    img: sanbase,
    title: 'Sanbase',
    description:
      'Behavior analysis & monitoring platform for 1500+ crypto assets',
    to: 'https://app.santiment.net',
  },
  {
    img: sansheets,
    title: 'Sansheets',
    description: 'Google Spreadsheets plugin for importing Santiment data',
    to: 'https://sheets.santiment.net',
  },
  {
    img: sanapi,
    title: 'SanAPI',
    description: 'The most comprehensive crypto API on the market',
    to: 'https://api.santiment.net',
  },
]

export const CHAIN_PRODUCTS = [
  {
    img: sanr,
    title: 'SanR',
    description: 'Decentralized marketplace for crypto price signals',
    to: 'https://sanr.app',
  },
  {
    img: insights,
    title: 'Insights',
    description: 'Market analysis from the San team and community members',
    label: 'SAN chain support soon',
    to: 'https://insights.santiment.net',
  },
]

export const INITIATIVES_PRODUCTS = [
  {
    img: research,
    title: 'Research',
    description: 'Empowering Academia with Blockchain & Crypto Insights',
    to: 'https://research.santiment.net/',
  },
]
