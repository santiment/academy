export const BLOCKS = {
	metrics: {
		title: 'Metrics',
		articles: ['Social volume metrics','Daily Active Addresses','Social data','Mean coin age', 'sentiment-metrics']
	},
	aboutSanbase: {
		title: 'About Sanbase',
		articles: []
	}
}

export const CATEGORIES = [
	{
		title: 'Sanbase',
		description: 'Platform for in-depth coin analysis, low-latency signals, asset watchlists',
		blocks: [BLOCKS.aboutSanbase, BLOCKS.metrics]
	},
	{
		title: 'Sansheets',
		description: 'Google Spreadsheet plugin for Santiment data',
		blocks: [BLOCKS.aboutSanbase, BLOCKS.metrics]
	},
	{
		title: 'Sangraphs',
		description: 'Advanced on-chain, social and development metrics and charts for 700+ coins',
		blocks: [BLOCKS.aboutSanbase, BLOCKS.metrics]
	},
	{
		title: 'Neuro API',
		description: 'The most comprehensive crypto API on the market',
		blocks: [BLOCKS.aboutSanbase, BLOCKS.metrics]
	}
]

export const titleToSlug = title => title.toLowerCase().split(' ').join('-')
