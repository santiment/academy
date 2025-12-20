<script lang="ts">
  import { cn } from 'san-webkit-next/ui/utils'
  import type { SidebarSection } from '$modules/navigation/sidebar'
  import SidebarGroup from './SidebarGroup.svelte'
  import SidebarLink from './SidebarLink.svelte'

  interface Props {
    sidebarData: SidebarSection[]
    currentSlug: string
    class?: string
    onLinkClick?: () => void
  }

  let { sidebarData, currentSlug, class: className, onLinkClick }: Props = $props()
</script>

{#snippet sectionHeader(title: string, hasBorder: boolean)}
  <h3 class={cn(
    "mb-4 text-sm font-medium text-casper pt-8",
    hasBorder && "mt-8 border-t border-t-porcelain"
  )}>
    {title}
  </h3>
{/snippet}

<aside class={cn("h-full overflow-y-auto pb-10 pl-4 [scrollbar-gutter:stable]", className)}>
  {#each sidebarData as section, index (section.title)}
    {@render sectionHeader(section.title, index !== 0)}

    <ul class="flex flex-col gap-2">
      {#each section.items as item (item.slug)}
        {#if item.type === 'group'}
          <SidebarGroup {item} {currentSlug} />
        {:else}
          <SidebarLink 
            title={item.title} 
            href={item.href} 
            isActive={currentSlug === item.slug} 
            onclick={onLinkClick}
          />
        {/if}
      {/each}
    </ul>
  {/each}
</aside>
