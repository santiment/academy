<script lang="ts">
  import type { SidebarGroup } from '../../utils/sidebar'

  import { slide } from 'svelte/transition'
  import { cn } from 'san-webkit-next/ui/utils'
  import Button from 'san-webkit-next/ui/core/Button'

  interface Props {
    item: SidebarGroup
    currentSlug: string
  }

  let { item, currentSlug }: Props = $props()

  const checkActive = (slug: string) => 
    slug === item.slug || (item.items?.some(child => child.slug === slug) ?? false)

  let isOpen = $state(checkActive(currentSlug))

  const isActive = $derived(checkActive(currentSlug))


  $effect(() => {
    if (isActive) isOpen = true
  })

  const handleToggle = (e: MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()

    isOpen = !isOpen
  }
</script>

<li class="list-none">
  <div class={cn(
    'group -ml-2.5 flex w-full items-center justify-between rounded-md py-1 px-2.5 text-base transition-colors duration-200',
    isActive ? 'bg-green-light-1 text-green' : 'text-rhino hover:bg-green-light-1 hover:text-green',
    isOpen && !isActive && 'bg-green-light-1'
  )}>
    <a href={item.href} class="block w-full text-inherit">
      {item.title}
    </a>

    {#if item.items?.length}
      <Button
        onclick={handleToggle}
        icon="arrow-right"
        iconSize={8}
        class={cn(
          "w-6 h-6 cursor-pointer focus:outline-none fill-green hover:bg-green-light-2",
          '[&_svg]:transition-transform [&_svg]:duration-200 [&_svg]:ease-in-out',
          isOpen ? '[&_svg]:rotate-90' : '[&_svg]:rotate-0',
          isActive || isOpen
              ? 'visible hover:fill-green-hover'
              : 'invisible group-hover:visible'
        )}
        aria-label="Toggle menu"
      >
      </Button>
    {/if}
  </div>

  {#if isOpen && item.items?.length}
    <ul
      transition:slide={{ duration: 200 }}
      class="relative ml-px border-l border-porcelain my-2 flex flex-col gap-1"
    >
      {#each item.items as subItem (subItem.slug)}
        {@const isSubActive = currentSlug === subItem.slug}

        <li>
          <a
            href={subItem.href}
            class={cn(
              'relative block py-1.5 pl-4 pr-4 text-base transition-colors',
              'hover:text-green text-fiord',
              isSubActive && "text-green before:absolute before:left-[-1px] before:top-0 before:h-full before:w-[1px] before:bg-green"
            )}
          >
            {subItem.title}
          </a>
        </li>
      {/each}
    </ul>
  {/if}
</li>
