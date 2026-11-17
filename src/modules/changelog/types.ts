export type TPagination = {
  hasMore: boolean
  currentPage: number
  totalDates: number
  totalPages: number
}

type TChangelogResponse<EntryType> = {
  entries: EntryType[]
  pagination: TPagination
}

type TMetricDocs = {
  link: string
}

type TMetric = {
  humanReadableName: string
  metric: string
  docs?: TMetricDocs
}

export type TMetricCreatedEvent = {
  metric: TMetric
  eventTimestamp: string
}

export type TMetricDeprecatedEvent = {
  metric: TMetric
  eventTimestamp: string
  deprecationNote?: string
}

type TMetricsChangelogEntry = {
  date: string
  createdMetrics: TMetricCreatedEvent[]
  deprecatedMetrics: TMetricDeprecatedEvent[]
}

export type TMetricsChangelogData = TChangelogResponse<TMetricsChangelogEntry>

export type TMetricsChangelogQueryResponse = {
  metricsChangelog: TMetricsChangelogData
}

type TAsset = {
  name: string
  ticker: string
  slug: string
  logoUrl?: string
  description?: string
  link?: string
}

export type TAssetCreatedEvent = {
  asset: TAsset
  eventTimestamp: string
}

export type TAssetHiddenEvent = {
  asset: TAsset
  eventTimestamp: string
  hidingReason?: string
}

export type TAssetsChangelogEntry = {
  date: string
  createdAssets: TAssetCreatedEvent[]
  hiddenAssets: TAssetHiddenEvent[]
}

export type TAssetsChangelogData = TChangelogResponse<TAssetsChangelogEntry>

export type TAssetsChangelogQueryResponse = {
  assetsChangelog: TAssetsChangelogData
}
