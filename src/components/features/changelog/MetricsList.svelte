<script lang="ts">
  import { UniQuery } from 'san-webkit-next/api/executor.js'
  import Root from './Root.svelte'

  import { queryMetricsChangelog } from '$modules/changelog/api'
  import { getFormattedDetailedTimestamp } from 'san-webkit-next/utils/dates'

  let { initialData, pageSize = 20 } = $props<{ initialData: any, pageSize?: number }>()

  const fetchNextPage = (page: number) => 
    queryMetricsChangelog(UniQuery(fetch))(page, pageSize, '')
</script>

{#snippet createdMetric(item: any)}
  {@const metricName = item.metric?.humanReadableName || item.metric?.metric || '—'}
  <strong>Created</strong> {metricName} - <time>{getFormattedDetailedTimestamp(new Date(item.eventTimestamp), { utc: true })}</time>
  {#if item.metric?.docs?.link}
     — <a href={item.metric.docs.link} target="_blank" rel="noreferrer" class="text-green">Docs</a>
  {/if}
{/snippet}

{#snippet deprecatedMetric(item: any)}
  {@const metricName = item.metric?.humanReadableName || item.metric?.metric || '—'}
  <strong>Deprecated</strong> {metricName} - <time>{getFormattedDetailedTimestamp(new Date(item.eventTimestamp), { utc: true })}</time>
  {#if item.deprecationNote}
     — {item.deprecationNote}
  {/if}
{/snippet}

<Root 
  {initialData}
  {fetchNextPage}
  keys={{ created: 'createdMetrics', removed: 'deprecatedMetrics' }}
  renderCreated={createdMetric}
  renderRemoved={deprecatedMetric}
/>
