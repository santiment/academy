<script lang="ts">
  import { cn } from 'san-webkit-next/ui/utils'
  import Button from 'san-webkit-next/ui/core/Button'
  import Svg from 'san-webkit-next/ui/core/Svg'
  import { AskAIButton } from 'san-webkit-next/ui/app/AIChatbot'
  import { Products } from 'san-webkit-next/ui/app/Products'

  import Search from '$components/features/search/Search.svelte'
  import ProductsButton from '$components/ui/ProductsButton.svelte'
  import Sidebar from '$components/layout/Sidebar.svelte'
  import type { SidebarSection } from '$modules/navigation/sidebar'

  type TProps = {
    slug?: string
    sidebarData?: SidebarSection[]
  }

  const { slug, sidebarData }: TProps = $props()

  let navOpen = $state(false)

  $effect(() => {
    if (navOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'visible'
    }
  })
</script>

<nav
  class={cn(
    'select-none w-full bg-white fixed top-0 z-[2] border-b border-b-porcelain'
  )}
>
  <div
    class={cn(
      'py-5 px-3.5 flex items-center justify-between h-[70px] relative sm:w-full',
      'container'
    )}
  >
    <div class="flex gap-2">
      <Button icon="menu" class="hidden md:flex" onclick={() => (navOpen = !navOpen)}></Button>

      <a class={cn('inline-flex items-center [&>svg]:fill-rhino')} href="/">
        <Svg illus id="san-logo" w={32} />

        <span class="mx-2 text-base font-medium text-rhino">Academy</span>
      </a>

      <ProductsButton />
    </div>
    <div class="flex justify-end gap-4">
      <Search />

      <AskAIButton />
    </div>
  </div>

  {#if navOpen}
    <div class="fixed inset-0 z-50 top-[71px] flex-col overflow-auto bg-white p-4 md:flex">
      <Button icon="close" class="fill-waterloo absolute mb-4 self-end" onclick={() => (navOpen = false)}></Button>

      {#if slug && sidebarData}
        <Sidebar 
          {slug} 
          {sidebarData} 
          onLinkClick={() => (navOpen = false)}
          class="pl-2 h-auto overflow-y-visible [&_a]:min-h-10 [&_a]:items-center [&_a]:flex [&_a]:text-base [&_li]:my-0 [&_h3]:mb-2 pr-0 border-b border-b-porcelain"
        />
      {/if}

      <div class="pb-3 pt-3 mt-3">
        <Products
          class="products-styled-list"
        />
      </div>
    </div>
  {/if}
</nav>

<style is:global>
  .products-styled-list {
    @apply w-full flex-col p-0 text-rhino;
  }

  .products-styled-list > div {
    @apply border-b border-b-porcelain;
  }

  .products-styled-list a {
    @apply items-center px-2 py-2 w-full;
  }

  .products-styled-list h2 {
    @apply font-normal;
  }

  .products-styled-list h3 {
    @apply mt-2 ml-2 mb-2;
  }

  .products-styled-list p {
    @apply hidden;
  }

  .products-styled-list > div > section {
    @apply pb-3;
  }

  .products-styled-list > div > section > a > div:has(svg) {
    @apply h-8 w-8 min-w-8;
  }

  .products-styled-list > div > section:first-of-type {
    @apply border-b border-b-porcelain;
  }
</style>
