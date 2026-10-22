<script lang="ts">
  import { BROWSER } from 'esm-env'
  import { CMD } from 'san-webkit-next/utils/platform'
  import { useKeyboardShortcut } from 'san-webkit-next/utils/keyboard'
  import Button from 'san-webkit-next/ui/core/Button'

  import { showSearchDialog$ } from './SearchDialog.svelte'

  const showSearch = showSearchDialog$()

  if (BROWSER) {
    useKeyboardShortcut('CMD+K', () => showSearch())
  }
</script>

<Button
  icon="search"
  iconSize={12}
  class="text-waterloo border hover:border-green-hover sm:hidden w-[296px]"
  onclick={() => showSearch()}
>
  <span>Search docs</span>

  {#if BROWSER}<kbd class="text-sm text-waterloo">({CMD} + K)</kbd>{/if}
</Button>
