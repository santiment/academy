<script lang="ts">
  import { cn } from 'san-webkit-next/ui/utils'
  import { titleToSlug } from '../utils/docs'

  import Metrics from '$assets/categories/Metrics.svelte'
  import Changelog from '$assets/categories/Changelog.svelte'
  import Education from '$assets/categories/Education.svelte'
  import ProductsAndPlans from '$assets/categories/Products.svelte'
  import SANtokens from '$assets/categories/San.svelte'
  import SanAPI from '$assets/categories/Sanapi.svelte'
  import Sansheets from '$assets/categories/Sansheets.svelte'
  import Sanqueries from '$assets/categories/Sanqueries.svelte'
  import Sanbase from '$assets/categories/Sanbase.svelte'
  import Glossary from '$assets/categories/Glossary.svelte'
  import Signals from '$assets/categories/Signals.svelte'
  import Labels from '$assets/categories/Labels.svelte'
  import Youtube from '$assets/categories/Youtube.svelte'

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

  const { wide, title = '', description, icon, maxWidth }: TProps = $props()

  const slug = titleToSlug(title)
  const Icon = ICONS_MAP[icon]
</script>

<a
  href={`/${slug}/`}
  class={cn(
    'group relative flex flex-col items-center justify-center overflow-hidden rounded border border-porcelain',
    'pt-10 px-4 pb-7 sm:p-5 sm:flex-row sm:justify-start',
    'text-rhino transition-all duration-100 ease-in-out',
    'hover:-translate-y-1 hover:cursor-pointer',
    '[&_path,&_rect,&_h4]:transition-colors [&_path,&_rect,&_h4]:duration-200',
    wide && 'py-8 px-10 items-baseline sm:p-5'
  )}
>
  <div class={cn(
    "mb-8 flex h-16 w-16 items-center justify-center fill-none sm:mr-2",
    wide && 'absolute -right-2.5 top-0 bottom-0 m-0 h-auto w-auto -z-[1] md:right-5 md:scale-75'
  )}>
    {#if Icon}
      <Icon />
    {/if}
  </div>

  <div style:max-width={maxWidth}>
    <h4 class={cn(
      "mb-2 text-base group-hover:text-green",
      wide ? 'text-left' : 'text-center sm:text-left'
    )}>
      {title}
    </h4>
    
    <p class={cn(
      "text-sm text-casper",
      wide ? 'text-left sm:max-w-[69%]' : 'mx-3 text-center sm:ml-0 sm:text-left'
    )}>
      {@html description}
    </p>
  </div>
</a>
