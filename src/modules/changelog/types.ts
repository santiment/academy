export type Pagination = {
  hasMore: boolean
  currentPage: number
  totalDates: number
  totalPages: number
}

type ChangelogResponse<EntryType> = {
  entries: EntryType[]
  pagination: Pagination
}

type MetricDocs = {
  link: string
}

type Metric = {
  humanReadableName: string
  metric: string
  docs?: MetricDocs
}

export type MetricCreatedEvent = {
  metric: Metric
  eventTimestamp: string
}

export type MetricDeprecatedEvent = {
  metric: Metric
  eventTimestamp: string
  deprecationNote?: string
}

type MetricsChangelogEntry = {
  date: string
  createdMetrics: MetricCreatedEvent[]
  deprecatedMetrics: MetricDeprecatedEvent[]
}

export type MetricsChangelogData = ChangelogResponse<MetricsChangelogEntry>

export type MetricsChangelogQueryResponse = {
  metricsChangelog: MetricsChangelogData
}

type Asset = {
  name: string
  ticker: string
  slug: string
  logoUrl?: string
  description?: string
  link?: string
}

export type AssetCreatedEvent = {
  asset: Asset
  eventTimestamp: string
}

export type AssetHiddenEvent = {
  asset: Asset
  eventTimestamp: string
  hidingReason?: string
}

export type AssetsChangelogEntry = {
  date: string
  createdAssets: AssetCreatedEvent[]
  hiddenAssets: AssetHiddenEvent[]
}

export type AssetsChangelogData = ChangelogResponse<AssetsChangelogEntry>

export type AssetsChangelogQueryResponse = {
  assetsChangelog: AssetsChangelogData
}
