<script lang="ts">
  import { cn } from 'san-webkit-next/ui/utils'
  import Button from 'san-webkit-next/ui/core/Button'
  import type { MarkdownHeading } from 'astro'

  import { usePageHash } from '../utils/utils.svelte.js'

  const TOPICS = {
    sanbase: { href: 'https://app.santiment.net/', title: 'Sanbase' },
    sanapi: { href: 'https://api.santiment.net/', title: 'Sanapi' },
    sansheets: { href: 'https://sheets.santiment.net/', title: 'Sansheets' },
    'sql-editor': {
      href: 'https://app.santiment.net/queries',
      title: 'SQL Editor',
    },
    'youtube-videos': {
      href: 'https://www.youtube.com/c/santimentnetwork',
      title: 'Youtube channel',
    },
  } as const

  type TProps = {
    headings: MarkdownHeading[]
  }

  const { headings }: TProps = $props()
  const { pageHash, scrollToTargetAdjusted } = usePageHash(headings)
  
  const topic = headings.length > 1 && headings[1].text as keyof typeof TOPICS
  const appLink = topic && TOPICS[topic]
</script>

<ul 
  class="fixed ml-[660px] top-[95px] flex flex-col max-h-[85vh] max-w-[210px] overflow-y-auto overflow-x-hidden pr-2 md:flex lg:hidden"
>
  {#if appLink}
    <li>
      <Button href={appLink.href} target="_blank" icon="right-arrow" iconOnRight>
        Go to {appLink.title}
      </Button>
    </li>
  {/if}

  {#each headings as { slug, text, depth }, idx}
    <li
      class={cn(
        'relative',
        "before:!content-['']",
        idx === 0 && (appLink ? 'mt-12' : 'mt-20')
      )}
    >
      <a
        href={`#${slug}`}
        onclick={(e) => scrollToTargetAdjusted(e, slug)}
        class={cn(
          'text-sm block my-1 py-1 cursor-pointer transition-colors duration-200',
          'border-l-2 pl-4',
          depth === 2 && 'pl-8',
          depth === 3 && 'pl-12',
          pageHash === `#${slug}` 
            ? 'border-l-green text-green' 
            : 'border-l-porcelain text-waterloo hover:text-green hover:border-l-green'
        )}
      >
        {text}
      </a>
    </li>
  {/each}
</ul>
