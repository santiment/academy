export const BLOCKS = {
	Financial: {
		title: 'Financial',
		articles: ['Mean coin age']
	},
	Development: {
		title: 'Development',
		articles: []
	},
	'On-chain': {
		title: 'On-chain',
		articles: ['Daily Active Addresses']
	},
	'Social': {
		title: 'Social/Sentiment',
		articles: ['sentiment-metrics', 'Social volume metrics', 'Social data']
	}
}

export const CATEGORIES = [
	{
		title: 'Metrics',
		description: 'Santiment brings a comprehensive set of metrics together in one place',
		blocks: [BLOCKS.Financial, BLOCKS['Social'], BLOCKS.Development, BLOCKS['On-chain']]
	}
	// {
	// 	title: 'Sanbase',
	// 	description: 'Platform for in-depth coin analysis, low-latency signals, asset watchlists',
	// 	blocks: [BLOCKS.aboutSanbase, BLOCKS.metrics]
	// },
	// {
	// 	title: 'Sansheets',
	// 	description: 'Google Spreadsheet plugin for Santiment data',
	// 	blocks: []
	// },
	// {
	// 	title: 'Sangraphs',
	// 	description: 'Advanced on-chain, social and development metrics and charts for 700+ coins',
	// 	blocks: []
	// },
	// {
	// 	title: 'Neuro API',
	// 	description: 'The most comprehensive crypto API on the market',
	// 	blocks: []
	// }
]

export const titleToSlug = title => title.toLowerCase().split(' ').join('-').split('/').join('-')

export const customCrumbLabel = location => location.pathname.toLowerCase().replace('-', ' ')
