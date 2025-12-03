<script lang="ts">
  import type { Snippet } from 'svelte'

  import Svg from 'san-webkit-next/ui/core/Svg'

  type TProps = {
    level?: number
    id?: string
    children?: Snippet
  }

  const { level = 1, id = '', children }: TProps = $props()
</script>

<svelte:element this={`h${level}`} {id} class="relative group">
  <a
    href="#{id}"
    aria-hidden="true"
    class="opacity-0 fill-waterloo absolute w-[1em] h-8 -left-[1em] -top-[1px] border-b-0 hover:fill-green md:hidden group-hover:opacity-100 flex items-center"
  >
    <Svg id="link" />
  </a>

  <span>{@render children?.()}</span>
</svelte:element>
