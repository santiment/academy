<script lang="ts">
  import { ImageViewer } from 'san-webkit-next/ui/core/ImageViewer'
  import type { Snippet } from 'svelte'

  type TProps = { children?: Snippet }
  const { children: content }: TProps = $props()
</script>

<ImageViewer>
  {#snippet children({ mountAction })}
    <div use:mountAction>
      {@render content?.()}
    </div>
  {/snippet}
</ImageViewer>
