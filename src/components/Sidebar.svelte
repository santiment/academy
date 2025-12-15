<script lang="ts">
  import SidebarCategory from './SidebarCategory.svelte'
  import { GUIDES, REFERENCES, GETTING_STARTED } from '../docs/navigation'
  import { titleToSlug } from '../utils/docs'
  import { isArticleActive } from './utils'
  import { cn } from 'san-webkit-next/ui/utils'

  type TProps = {
    active: string[];
    class?: string
  }

  let { active, class: className = '' }: TProps = $props()
</script>

{#snippet sectionHeader(title: string, isBordered = false)}
  <h3 class={cn(
    "mb-4 text-sm font-medium text-casper pt-8",
    isBordered && "mt-8 border-t border-t-porcelain"
  )}>
    {title}
  </h3>
{/snippet}

<aside class={cn("h-full overflow-y-auto pb-10 pl-4 [scrollbar-gutter:stable]", className)}>
  {@render sectionHeader(GETTING_STARTED.title)}

  <ul>
    {#each GETTING_STARTED.articles as article}
      {@const isActive = isArticleActive(active, null, article)}
      <li class={cn('mt-2 text-rhino', isActive && 'text-green-hover')}>
        <a href={`/${titleToSlug(article)}/`}>{article}</a>
      </li>
    {/each}
  </ul>

  {@render sectionHeader('Guides', true)}

  <ul>
    {#each GUIDES as category}
      <SidebarCategory {...category} {active} />
    {/each}
  </ul>

  {@render sectionHeader('Resources', true)}

  <ul>
    {#each REFERENCES as category}
      <SidebarCategory {...category} {active} />
    {/each}
  </ul>
</aside>
