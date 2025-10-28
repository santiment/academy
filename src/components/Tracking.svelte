<script lang="ts">
  import { onMount, type Snippet } from 'svelte'
  import { startLinksListener } from 'san-webkit-next/analytics'

  type TProps = {
    children: Snippet
  }

  const { children }: TProps = $props()

  onMount(() => {
    startLinksListener()
  })
</script>

{@render children()}
