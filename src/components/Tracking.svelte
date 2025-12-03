<script lang="ts">
  import { onMount, type Snippet } from 'svelte'
  import { startLinksListener } from 'san-webkit-next/analytics'

  onMount(() => {
    startLinksListener()
  })
</script>
