<script lang="ts">
  import { cn } from 'san-webkit-next/ui/utils'
  import { titleToSlug } from '../../utils/docs'

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
  class={cn(
    'border-porcelain border rounded flex',
    'flex-col items-center justify-center',
    'relative overflow-hidden text-rhino',
    'pt-10 px-4 pb-7 transition-all duration-100 ease-in-out',
    'sm:flex-row sm:justify-start sm:p-5',
    'hover:-translate-y-1 hover:cursor-pointer',
    wide && 'py-8 px-10 items-baseline sm:p-5'
  )}
  ontouchstart={() => (isHover = true)}
  onmouseenter={() => (isHover = true)}
  ontouchend={() => (isHover = false)}
  ontouchcancel={() => (isHover = false)}
  onmouseleave={() => (isHover = false)}
>
  <div class={cn(
    "fill-none flex items-center justify-center mb-8 w-16 h-16 sm:mr-2",
    '[&_path]:transition-[fill,stroke] [&_path]:duration-200 [&_rect]:transition-[fill,stroke] [&_rect]:duration-200',
    wide && 'absolute right-5 top-0 bottom-0 m-0 w-auto h-auto -z-[1] -md:right-2.5 md:scale-75'
  )}>
    {#if Icon}
      <Icon withColor={isHover} />
    {/if}
  </div>

  <div style:max-width={maxWidth}>
    <h4 class={cn("text-base text-center mb-2 sm:text-left", wide && 'text-left mb-2 sm:ml-0')}>{title}</h4>
    <p class={cn(
      "text-sm text-casper text-center mx-3 sm:text-left sm:ml-0",
      wide && 'text-left m-0 sm:max-w-[69%] sm:ml-0'
    )}>
      {@html description}
    </p>
  </div>
</a>
