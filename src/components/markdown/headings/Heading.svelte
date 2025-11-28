<script lang="ts">
  import Svg from 'san-webkit-next/ui/core/Svg'
  import type { Snippet } from 'svelte'

  type TProps = {
    level?: number
    id?: string
    children?: Snippet
  }

  const { level = 1, id = '', children }: TProps = $props()
</script>

<svelte:element this={`h${level}`} {id}>
  <a href="#{id}" onclick={() => {}} aria-hidden="true">
    <Svg id="link" />
  </a>

  {@render children?.()}
</svelte:element>
