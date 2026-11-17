<script lang="ts">
  import type { Snippet } from 'svelte'
  import type { HTMLQuoteAttributes } from 'svelte/elements'
  import { cn } from 'san-webkit-next/ui/utils'

  type TProps = HTMLQuoteAttributes & {
    children: Snippet
    class?: string
  }

  let { children, class: className, ...rest }: TProps = $props()
</script>

<blockquote
  class={cn(
    'my-5 py-2 px-[18px]',
    'rounded-lg border border-porcelain',
    'border-l-[3px] border-l-green',
    className
  )}
  {...rest}
>
  {@render children()}
</blockquote>
