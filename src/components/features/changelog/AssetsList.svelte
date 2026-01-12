<script lang="ts">
  import { UniQuery } from 'san-webkit-next/api/executor.js'
  import { queryAssetsChangelog } from '$modules/changelog/api'
  import Root from './Root.svelte'
  import { getFormattedDetailedTimestamp } from 'san-webkit-next/utils/dates'

  import type { 
    AssetsChangelogData, 
    AssetCreatedEvent, 
    AssetHiddenEvent 
  } from '$modules/changelog/types'

  let { initialData, pageSize = 20 } = $props<{ initialData: AssetsChangelogData, pageSize?: number }>()

  const fetchNextPage = (page: number) => 
    queryAssetsChangelog(UniQuery(fetch))(page, pageSize, '')
</script>

{#snippet createdAsset(item: AssetCreatedEvent)}
  {@const asset = item.asset}

  <a href={asset?.link} target="_blank" rel="noreferrer">
    <strong>Created</strong> {asset?.name}
    {#if asset?.ticker} ({asset.ticker}){/if} - <time>{getFormattedDetailedTimestamp(new Date(item.eventTimestamp), { utc: true })}</time>
  </a>
{/snippet}

{#snippet hiddenAsset(item: AssetHiddenEvent)}
  {@const asset = item.asset}

  <strong>Hidden</strong> {asset?.name}

  {#if asset?.ticker} ({asset.ticker}){/if} - <time>{getFormattedDetailedTimestamp(new Date(item.eventTimestamp), { utc: true })}</time>

  {#if item.hidingReason} — {item.hidingReason}{/if}
{/snippet}

<Root 
  {initialData}
  {fetchNextPage}
  keys={{ created: 'createdAssets', removed: 'hiddenAssets' }}
  renderCreated={createdAsset}
  renderRemoved={hiddenAsset}
/>
