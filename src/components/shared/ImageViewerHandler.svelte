<script lang="ts">
  import { showDialog$ } from 'san-webkit-next/ui/core/Dialog'
  import ImageViewer from 'san-webkit-next/ui/core/ImageViewer'

  const showDialog = showDialog$()

  let currentSrc = $state('')
  let currentAlt = $state('')

  function handleClick(e: MouseEvent) {
    const img = e.target

    if (!(img instanceof HTMLImageElement) || !img.closest('.wrapper')) return

    currentSrc = img.src
    currentAlt = img.alt

    showDialog({
      children: imageViewer,
      class: 'bg-transparent shadow-none rounded-none overflow-visible max-w-full max-h-none border-none',
    })
  }
</script>

{#snippet imageViewer({ close }: { close: () => void })}
  <ImageViewer {close} src={currentSrc} alt={currentAlt} />
{/snippet}

<svelte:document onclick={handleClick} />
