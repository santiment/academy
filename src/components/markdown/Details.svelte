<script lang="ts">
  import type { Snippet } from 'svelte'

  import './Details.module.scss'
  import { cn } from 'san-webkit-next/ui/utils'

  type TProps = {
    children: Snippet
  }

  const { children }: TProps = $props()
</script>

<details
  class={cn(
    '[&>summary]:cursor-pointer',
    '[&>summary]:list-item',
    '[&>summary]:list-[disclosure-closed]',
    '[&>summary]:ml-[18px]',
    '[&[open]>summary]:list-[disclosure-open]'
  )}
>
  {@render children()}
</details>
