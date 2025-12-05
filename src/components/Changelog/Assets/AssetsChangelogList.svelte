<script lang="ts">
  import { UniQuery } from 'san-webkit-next/api/executor.js'
  import { queryAssetsChangelog } from '../api'
  import ChangelogCore from '../ChangelogCore.svelte'
  import { getFormattedDetailedTimestamp } from 'san-webkit-next/utils/dates'

  let { initialData, pageSize = 20 } = $props<{ initialData: any, pageSize?: number }>()

  const fetchNextPage = (page: number) => 
    queryAssetsChangelog(UniQuery(fetch))(page, pageSize, '')
</script>

{#snippet createdAsset(item: any)}
  {@const asset = item.asset}

  <a href={asset?.link} target="_blank" rel="noreferrer">
    <strong>Created</strong> {asset?.name}
    {#if asset?.ticker} ({asset.ticker}){/if} - <time>{getFormattedDetailedTimestamp(new Date(item.eventTimestamp), { utc: true })}</time>
  </a>
{/snippet}

{#snippet hiddenAsset(item: any)}
  {@const asset = item.asset}

  <strong>Hidden</strong> {asset?.name}

  {#if asset?.ticker} ({asset.ticker}){/if} - <time>{getFormattedDetailedTimestamp(new Date(item.eventTimestamp), { utc: true })}</time>

  {#if item.hidingReason} — {item.hidingReason}{/if}
{/snippet}

<ChangelogCore 
  {initialData}
  {fetchNextPage}
  keys={{ created: 'createdAssets', removed: 'hiddenAssets' }}
  renderCreated={createdAsset}
  renderRemoved={hiddenAsset}
/>
