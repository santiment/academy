<script lang="ts" module>
  import { dialogs$ } from 'san-webkit-next/ui/core/Dialog'
  import Component from './SearchDialog.svelte'

  export const showSearchDialog$ = () => dialogs$.new(Component)
</script>

<script lang="ts">
  import { onMount } from 'svelte'
  import { cn } from 'san-webkit-next/ui/utils'
  import Dialog from 'san-webkit-next/ui/core/Dialog'
  import Svg from 'san-webkit-next/ui/core/Svg'
  import { Command } from 'bits-ui'

  let query = $state('')
  let results = $state<any[]>([])
  let loading = $state(false)
  let pagefind = $state<any>(null)

  onMount(async () => {
    try {
      const pagefindUrl = '/pagefind/pagefind.js'
      pagefind = await import(/* @vite-ignore */ pagefindUrl)
      await pagefind.options({ excerptLength: 20 })
    } catch (e) {
      console.error(e)
    }
  })

  $effect(() => {
    if (!pagefind || query.length < 2) {
      results = []
      return
    }

    loading = true
    pagefind.search(query).then((search: any) => {
      Promise.all(search.results.slice(0, 5).map((r: any) => r.data())).then((data) => {
        results = data
        loading = false
      })
    })
  })
</script>

<Dialog class="w-full max-w-[600px] !top-[15%] !translate-y-0 md:max-w-full">
  {#snippet children({ close })}
    <Command.Root shouldFilter={false} label="Search docs">
      <div class="flex items-center gap-2 border-b border-porcelain px-3">
        <Svg id="search" class="fill-waterloo shrink-0" w={12} />

        <Command.Input
          bind:value={query}
          placeholder="Search docs..."
          class="h-12 w-full bg-transparent text-sm text-rhino placeholder:text-waterloo outline-none"
          autocomplete="off"
        />

        <kbd
          class="shrink-0 text-xs text-waterloo font-mono border border-porcelain rounded px-1 py-0.5 cursor-pointer"
          onclick={close}
        >
          Esc
        </kbd>
      </div>

      <Command.List class="max-h-[400px] md:max-h-full overflow-y-auto p-2">
        {#if loading}
          <Command.Loading>
            <div class="p-4 text-sm text-rhino">Searching...</div>
          </Command.Loading>
        {:else if query.length >= 2 && results.length === 0}
          <Command.Empty class="p-4 text-sm text-rhino">No results found.</Command.Empty>
        {:else}
          {#each results as result}
            <Command.LinkItem
              value={result.url}
              href={result.url}
              class={cn(
                'block p-2 rounded cursor-pointer outline-none border-l-2 border-transparent',
                'hover:bg-green-light-1 focus:outline-green-hover',
              )}
              onSelect={close}
            >
              <div class="font-medium text-sm text-rhino py-1 border-b border-b-porcelain">
                {result.meta.title}
              </div>

              <div class="text-xs text-rhino mt-1 line-clamp-2 [&_mark]:text-white [&_mark]:bg-green-light-4 [&_mark]:rounded-sm [&_mark]:px-[1px] [&_mark]:text-green p-1.5 pr-0">
                {@html result.excerpt}
              </div>
            </Command.LinkItem>
          {/each}
        {/if}
      </Command.List>
    </Command.Root>
  {/snippet}
</Dialog>
