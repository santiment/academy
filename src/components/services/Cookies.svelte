<script lang="ts">
  import { onMount } from 'svelte'
  import CookiesPopup from 'san-webkit-next/ui/core/CookiesPopup'

  let shouldRender = $state(false)
  let isVisible = $state(false)

  onMount(() => {
    const accepted = document.cookie.includes('COOKIE_POLICY_ACCEPTED=true')
    isVisible = !accepted
    shouldRender = true
  })
</script>

{#if shouldRender}
  <CookiesPopup {isVisible} />
{/if}
