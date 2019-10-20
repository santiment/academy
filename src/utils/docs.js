export const METRICS = {
	financial: {
		title: 'Financial',
		articles: ['Mean coin age']
	},
	development: {
		title: 'Development',
		articles: []
	},
	onchain: {
		title: 'On-chain',
		articles: ['Daily Active Addresses']
	},
	social: {
		title: 'Social/Sentiment',
		articles: ['sentiment-metrics', 'Social volume metrics', 'Social data']
	}
}

export const SANBASE = {
	about: {
		title: 'About Sanbase',
		articles: []
	},
	myAccount: {
		title: 'My account',
		articles: []
	},
	pricingBilling: {
		title: 'Pricing & Billing',
		articles: []
	},
}

export const SHEETS = {
	about: {
		title: 'About Sheets',
		articles: []
	},
	interface: {
		title: 'Interface',
		articles: []
	},
	functions: {
		title: 'Functions',
		articles: []
	},
	integrations: {
		title: 'Integrations',
		articles: []
	},
}

export const GRAPHS = {
	about: {
		title: 'About Graphs',
		articles: []
	},
	howWorks: {
		title: 'How it works',
		articles: []
	},
}

export const NEURO = {
	about: {
		title: 'About Neuro API',
		articles: []
	},
	install: {
		title: 'Install guide',
		articles: []
	},
	howWorks: {
		title: 'How API works',
		articles: []
	},
}

export const CATEGORIES = [
	{
		title: 'Metrics',
		description: 'Santiment brings a comprehensive set of metrics together in one place',
		blocks: [METRICS.financial, METRICS.social, METRICS.development, METRICS.onchain]
	},
	{
		title: 'Sanbase',
		description: 'Platform for in-depth coin analysis, low-latency signals, asset watchlists',
		blocks: [SANBASE.about, SANBASE.myAccount, SANBASE.pricingBilling]
	},
	{
		title: 'Sansheets',
		description: 'Google Spreadsheet plugin for Santiment data',
		blocks: [SHEETS.about, SHEETS.interface, SHEETS.functions, SHEETS.integrations]
	},
	{
		title: 'Sangraphs',
		description: 'Advanced on-chain, social and development metrics and charts for 700+ coins',
		blocks: [GRAPHS.about, GRAPHS.howWorks]
	},
	{
		title: 'Neuro API',
		description: 'The most comprehensive crypto API on the market',
		blocks: [NEURO.about, NEURO.install, NEURO.howWorks]
	}
]

export const titleToSlug = title => title.toLowerCase().split(' ').join('-').split('/').join('-')

export const customCrumbLabel = location => location.pathname.toLowerCase().replace('-', ' ')
