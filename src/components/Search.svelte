<script lang="ts">
  import { onMount } from 'svelte'
  import { cn } from 'san-webkit-next/ui/utils'
  import Input from 'san-webkit-next/ui/core/Input'
  import Popover from 'san-webkit-next/ui/core/Popover'
  import { ss } from 'san-webkit-next/utils'

  let query = $state('')
  let results = $state<any[]>([])
  let showResults = $state(false)
  let loading = $state(false)
  let pagefind = $state<any>(null)

  let containerWrapperRef = ss<null | HTMLElement>(null)

  onMount(async () => {
    try {
      /* @vite-ignore */
      const pagefindUrl = '/pagefind/pagefind.js'
      pagefind = await import(/* @vite-ignore */ pagefindUrl)

      console.log('pagefind', pagefind)
      await pagefind.options({ excerptLength: 20 })
    } catch (e) {
      console.error(e)
    }
  })

  async function handleSearch(e: CustomEvent | Event) {
    const val = (e.target as HTMLInputElement).value
    query = val

    if (!pagefind || val.length < 2) {
      results = []
      showResults = false
      return
    }

    loading = true
    showResults = true

    try {
      const search = await pagefind.search(val)
      results = await Promise.all(search.results.slice(0, 5).map((r: any) => r.data()))
    } finally {
      loading = false
    }
  }
</script>

<Popover
  bind:isOpened={showResults}
  align="end"
  side="bottom"
  noStyles
  contentProps={{
    customAnchor: containerWrapperRef.$,
    alignOffset: 0,
    sideOffset: 8,
    trapFocus: false,
    avoidCollisions: true,
    onInteractOutside: () => (showResults = false),
  }}
>
  {#snippet children()} 
      <label 
        bind:this={containerWrapperRef.$}
        class={cn(
          'w-full flex flex-col items-center relative',
          'w-[296px] ml-auto bg-none z-[1000] items-baseline',
          'sm:hidden'
        )}
      >
        <Input
          id="search"
          class="h-8"
          inputClass="w-[296px] h-8 sm:w-[250px] sm:h-10 pl-11"
          placeholder="Search docs"
          icon="search"
          autocomplete="off"
          oninput={handleSearch}
          onfocus={() => { if (query.length >= 2) showResults = true }}
        />
      </label>
  {/snippet}

  {#snippet content()}
    <div class="min-w-[500px] max-w-[600px] rounded-md border border-porcelain bg-white px-2 py-2 shadow">
      {#if loading}
        <div class="p-4 text-sm text-rhino">Searching...</div>
      {:else if results.length === 0}
        <div class="p-4 text-sm text-rhino">No results found.</div>
      {:else}
        {#each results as result}
          <a 
            href={result.url} 
            class="block p-1 bg-white transition-colors text-left border-b last:border-none border-porcelain"
            onclick={() => {
              query = ''
              results = []
              showResults = false
            }}
          >
            <div class="font-medium text-sm text-rhino">
              {result.meta.title}
            </div>

            <div class="text-xs text-rhino mt-1 line-clamp-2 [&_mark]:bg-green-light-1 [&_mark]:text-green">
              {@html result.excerpt}
            </div>
          </a>
        {/each}
      {/if}
    </div>
  {/snippet}
</Popover>
