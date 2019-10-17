import Socials from './../components/Markdown/sources/social_volume_metrics'
import DAA from './../components/Markdown/sources/daily_active_addresses'
import SD from './../components/Markdown/sources/social-data'
import MCA from './../components/Markdown/sources/mean-coin-age'

const Metrics = {
	title: 'Metrics',
	articles: [
		{
			title: 'Social volume metrics',
			src: Socials
		},
		{
			title: 'Daily Active Addresses',
			src: DAA
		},
		{
			title: 'Social data',
			src: SD
		},
		{
			title: 'Mean coin age',
			src: MCA
		},
	]
}

const aboutSanbase = {
	title: 'About Sanbase', articles: []
}

export const docs = [
	{
		title: 'Sanbase',
		description: 'Platform for in-depth coin analysis, low-latency signals, asset watchlists',
		blocks: [aboutSanbase, Metrics]
	},
	{
		title: 'Sansheets',
		description: 'Google Spreadsheet plugin for Santiment data',
		blocks: [aboutSanbase, Metrics]
	},
	{
		title: 'Sangraphs',
		description: 'Advanced on-chain, social and development metrics and charts for 700+ coins',
		blocks: [aboutSanbase, Metrics]
	},
	{
		title: 'Neuro API',
		description: 'The most comprehensive crypto API on the market',
		blocks: [aboutSanbase, Metrics]
	}
]
