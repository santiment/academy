<script lang="ts">
  import { cn } from 'san-webkit-next/ui/utils'
  import type { Snippet } from 'svelte'

  type TProps = {
    title?: string
    children?: Snippet
  }

  const { title, children }: TProps = $props()
</script>

<div
  class={cn(
    'flex flex-col bg-athens rounded-lg my-6 py-6 px-8',
    '[&>div]:flex [&>div]:flex-col',
    '[&>div]:space-y-2',
    '[&>div_p]:m-0 [&>div_p]:p-0'
  )}
>
  {#if title}
    <h6 class="text-lg font-semibold text-rhino mb-3">{title}</h6>
  {/if}

  {@render children?.()}
</div>
