<script lang="ts">
  import { cn } from 'san-webkit-next/ui/utils'
  import type { SidebarSection } from '../utils/sidebar'
  import SidebarCategory from './SidebarCategory.svelte'

  type TProps = {
    sidebarData: SidebarSection[]
    currentSlug: string
    class?: string
  }

  const { sidebarData, currentSlug, class: className = '' }: TProps = $props()
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
  {#each sidebarData as section, index}
    {@render sectionHeader(section.title, index !== 0)}

    <ul>
      {#each section.items as item}
        
        {#if item.type === 'group'}
          <SidebarCategory 
            title={item.title} 
            articles={item.items} 
            href={item.href}
            {currentSlug}
          />

        {:else}
          <li class={cn('mt-2 text-rhino', currentSlug === item.slug && 'text-green-hover')}>
            <a href={item.href}>{item.title}</a>
          </li>
        {/if}

      {/each}
    </ul>
  {/each}

</aside>
