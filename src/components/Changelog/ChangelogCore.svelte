<script lang="ts">
  import type { Snippet } from 'svelte'

  import Button from 'san-webkit-next/ui/core/Button'
  import { mergeEntries } from './utils'
  import { getFormattedMonthDayYear } from 'san-webkit-next/utils/dates'

  type TData = {
    entries: any[]
    pagination: {
      currentPage: number
      hasMore: boolean
    }
  }

  type TProps = {
    initialData: TData
    fetchNextPage: (page: number) => Promise<TData>
    keys: { created: string; removed: string }
    renderCreated: Snippet<[any]>
    renderRemoved: Snippet<[any]>
  }

  let { 
    initialData, 
    fetchNextPage, 
    keys, 
    renderCreated, 
    renderRemoved 
  }: TProps = $props()

  let entries = $state(initialData.entries)
  let pagination = $state(initialData.pagination)
  let isLoading = $state(false)

  async function loadMore() {
    if (isLoading || !pagination.hasMore) return

    isLoading = true

    try {
      const nextPage = (pagination.currentPage || 1) + 1
      const data = await fetchNextPage(nextPage)

      entries = mergeEntries(entries, data.entries, keys)
      pagination = data.pagination
    } catch (e) {
      console.error(e)
    } finally {
      isLoading = false
    }
  }
</script>

<div class="flex flex-col gap-8">
  {#if entries.length === 0}
    <div>No changes yet.</div>
  {:else}
    <div>
      {#each entries as group (group.date)}
        <section class="mb-8">
          <h3 class="text-xl font-bold mb-4">{getFormattedMonthDayYear(new Date(group.date), { utc: true })}</h3>

          {#if group[keys.created]?.length}
            <ul>
              {#each group[keys.created] as item}
                <li>{@render renderCreated(item)}</li>
              {/each}
            </ul>
          {/if}

          {#if group[keys.removed]?.length}
            <ul>
              {#each group[keys.removed] as item}
                <li>{@render renderRemoved(item)}</li>
              {/each}
            </ul>
          {/if}
        </section>
      {/each}
    </div>
  {/if}

  {#if pagination.hasMore}
    <div class="flex justify-center mt-4">
      <Button 
        variant="fill" 
        loading={isLoading}
        onclick={loadMore}
      >
        Load more
      </Button>
    </div>
  {/if}
</div>
