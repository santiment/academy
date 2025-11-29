<script lang="ts">
  import { cn } from 'san-webkit-next/ui/utils'
  import { titleToSlug } from '../../utils/docs'
  import styles from './Category.module.scss'

  import Metrics from '../../images/docs/Metrics.svelte'
  import Changelog from '../../images/docs/Changelog.svelte'
  import Education from '../../images/docs/Education.svelte'
  import ProductsAndPlans from '../../images/docs/Products.svelte'
  import SANtokens from '../../images/docs/San.svelte'
  import SanAPI from '../../images/docs/Sanapi.svelte'
  import Sansheets from '../../images/docs/Sansheets.svelte'
  import Sanqueries from '../../images/docs/Sanqueries.svelte'
  import Sanbase from '../../images/docs/Sanbase.svelte'
  import Glossary from '../../images/docs/Glossary.svelte'
  import Signals from '../../images/docs/Signals.svelte'
  import Labels from '../../images/docs/Labels.svelte'
  import Youtube from '../../images/docs/Youtube.svelte'

  const ICONS_MAP = {
    Metrics,
    Changelog,
    Education,
    ProductsAndPlans,
    SANtokens,
    SanAPI,
    Sansheets,
    Sanqueries,
    Sanbase,
    Glossary,
    Signals,
    Labels,
    Youtube
  }

  type IconName = keyof typeof ICONS_MAP

  type TProps = { 
    wide?: boolean, 
    title?: string, 
    description?: string, 
    icon: IconName, 
    maxWidth?: number 
  }

  const { wide, title, description, icon, maxWidth }: TProps = $props()

  let isHover = $state(false)
  const slug = titleToSlug(title)
  const Icon = ICONS_MAP[icon]
</script>

<a
  href={`/${slug}/`}
  class={cn(styles.block, wide && styles.wide)}
  ontouchstart={() => (isHover = true)}
  onmouseenter={() => (isHover = true)}
  ontouchend={() => (isHover = false)}
  ontouchcancel={() => (isHover = false)}
  onmouseleave={() => (isHover = false)}
>
  <div class={styles.icon}>
    {#if Icon}
      <Icon withColor={isHover} />
    {/if}
  </div>

  <div style:max-width={maxWidth}>
    <h4 class={styles.title}>{title}</h4>
    <p class={styles.length}>{@html description}</p>
  </div>
</a>
