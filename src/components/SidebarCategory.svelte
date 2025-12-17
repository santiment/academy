<script lang="ts">
  import { slide } from 'svelte/transition'
  import { cn } from 'san-webkit-next/ui/utils'
  // import { titleToSlug } from '../utils/docs'  <-- УДАЛЯЕМ (больше не нужно)
  // import { isCategoryActive, isArticleActive } from './utils' <-- УДАЛЯЕМ (логика будет внутри)
  import Button from 'san-webkit-next/ui/core/Button'

  import type { SidebarLink } from '../utils/sidebar'

  interface TProps {
    title: string
    articles?: SidebarLink[] 
    currentSlug: string
    href?: string
  }

  let { title, articles = [], currentSlug, href }: TProps = $props()

  let isActive = $derived(false);
  
  let isOpen = $state(false);

  // $effect(() => {
  //   if (isActive) {
  //     isOpen = true
  //   }
  // })

  function toggle(e: MouseEvent) {
    e.preventDefault()
    e.stopPropagation()

    isOpen = !isOpen
  }
</script>

<li class="mx-0 mb-3.5 mt-3">
  <div
    class={cn(
      'group -ml-2.5 flex w-full items-center justify-between rounded-md py-1 px-2.5 text-base transition-colors duration-200',
      isActive
        ? 'bg-green-light-1 text-green-hover fill-green-hover'
        : isOpen
          ? 'bg-green-light-1 text-rhino fill-green-hover'
          : 'text-rhino hover:bg-green-light-1 hover:text-green hover:fill-green'
    )}
  >
    {#if href}
      <a href={href} class="text-inherit w-full block">
        {title}
      </a>
    {:else}
      <span class="text-inherit w-full cursor-default">
        {title}
      </span>
    {/if}

    {#if articles.length > 0}
      <Button
        onclick={toggle}
        icon="arrow-right"
        iconSize={8}
        class={cn(
          "h-6 md:h-8 cursor-pointer focus:outline-none fill-green hover:bg-green-light-2",
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

  {#if isOpen && articles.length > 0}
    <ul
      transition:slide={{ duration: 200, axis: 'y' }}
      class={cn(
        'relative my-[17px] overflow-hidden',
        "before:absolute before:left-0 before:top-0 before:block before:h-full before:w-px before:rounded-lg before:bg-porcelain before:content-['']"
      )}
    >
      {#each articles as article}
        {@const isItemActive = currentSlug === article.slug}

        <li>
          <a
            href={article.href} 
            class={cn(
              'relative block py-1 pl-4 pr-4 text-base text-fiord hover:text-green',
              isItemActive && "text-green before:absolute before:left-0 before:top-0 before:block before:h-full before:w-0.5 before:rounded-lg before:bg-green before:content-['']"
            )}
          >
            {article.title}
          </a>
        </li>
      {/each}
    </ul>
  {/if}
</li>
