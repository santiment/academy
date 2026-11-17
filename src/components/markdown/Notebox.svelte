<script lang="ts">
  import type { Snippet } from 'svelte'
  import { cn } from 'san-webkit-next/ui/utils'

  const ICONS = {
    hand: '👋',
    pin: '📌',
    note: '⚠️',
    none: '',
    openBook: '📖 ',
    exclamation: '❗',
    pointRight: '👉',
    arrowRight: '➡️ ',
    dart: '🎯',
    brain: '🧠',
  } as const

  const STYLES = {
    DEFAULT: 'border border-porcelain',
    NOTE: 'border border-orange-light-3',
    HAND: 'border border-green-light-3',
    HIGHLIGHT: 'border border-porcelain bg-athens',
  }

  const TYPE_CLASSES: Record<keyof typeof ICONS, string> = {
    pin: STYLES.DEFAULT,
    exclamation: STYLES.DEFAULT,
    openBook: STYLES.DEFAULT,
    note: STYLES.NOTE,
    hand: STYLES.HAND,
    none: STYLES.HAND,
    pointRight: STYLES.HIGHLIGHT,
    arrowRight: STYLES.HIGHLIGHT,
    brain: STYLES.HIGHLIGHT,
    dart: STYLES.HIGHLIGHT,
  }

  type TProps = {
    type?: keyof typeof ICONS
    children?: Snippet
  }

  const { type = 'note', children }: TProps = $props()

  const icon = ICONS[type] ?? '⚠️ '
  const style = TYPE_CLASSES[type] ?? TYPE_CLASSES.note
</script>

<div class={cn('flex rounded-lg py-4 px-6 my-4 [&_p]:p-0 [&_p]:m-0', style)}>
  <div class="mr-3">{icon}</div>

  <div>
    {@render children?.()}
  </div>
</div>
