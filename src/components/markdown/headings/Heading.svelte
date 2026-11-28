<script lang="ts">
  import type { Snippet } from 'svelte'
  import { BROWSER } from 'esm-env'

  import Button from 'san-webkit-next/ui/core/Button'
  import { copy } from 'san-webkit-next/utils'
  import { notification } from 'san-webkit-next/ui/core/Notifications'

  type TProps = {
    level?: number
    id?: string
    children?: Snippet
  }

  const { level = 1, id = '', children }: TProps = $props()

  function handleCopy() {
    if (BROWSER) {
      const url = `${window.location.origin}${window.location.pathname}#${id}`

      copy(url, () => notification.success('Copied'), 0)
    }
  }
</script>

<svelte:element this={`h${level}`} {id} class="group relative">
  <Button
    variant="plain"
    size="sm"
    icon="link"
    iconSize={16}
    aria-label={`Copy link to section ${id}`}
    class="fill-waterloo hover:fill-green absolute -top-px left-[-1em] h-full w-[1em] border-b-0 opacity-0 group-hover:opacity-100 md:hidden"
    onclick={handleCopy}
  />

  {@render children?.()}
</svelte:element>
