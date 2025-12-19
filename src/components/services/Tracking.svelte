<script lang="ts">
  import { onMount } from 'svelte'
  import { startLinksListener } from 'san-webkit-next/analytics'

  onMount(() => {
    startLinksListener()
  })
</script>
