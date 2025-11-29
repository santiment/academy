<script lang="ts">
  import { usePageHash } from '../../utils/utils.svelte.js'
  import { cn } from 'san-webkit-next/ui/utils'
  import styles from './ArticleHeadings.module.scss'
  import ArrowRight from './ArrowRight.svelte'

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
    headings: any
    crumbs: any[]
    title: keyof typeof TOPICS
  }

  const { headings, crumbs = [], title }: TProps = $props()
  const { pageHash, scrollToTargetAdjusted } = usePageHash((headings || []).map((item) => item.slug))
  const topic = crumbs.length > 1 && crumbs[1].crumbLabel
  // @ts-ignore
  const appLink = topic && TOPICS[topic]
</script>

<ul class={styles.list}>
  {#if appLink}
    <li class={styles.appLink}>
      <a href={appLink.href} target="_blank" rel="noreferrer">
        Go to {appLink.title}
        <ArrowRight />
      </a>
    </li>
  {/if}

  {#each headings as { slug, text, depth }, idx}
    <li
      class={cn(
        styles.item,
        pageHash === `#${slug}` && styles.current,
        idx === 0 && (appLink ? styles.mt50 : styles.mt170),
        idx > 0 && styles.hasBefore
      )}
    >
      <a
        href={`#${slug}`}
        class={cn(
          styles.heading,
          depth === 2 && styles.second,
          depth === 3 && styles.third
        )}
      >
        {text}
      </a>
    </li>
  {/each}
</ul>
