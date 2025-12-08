<script lang="ts">
  import { cn } from 'san-webkit-next/ui/utils'
  import Svg from 'san-webkit-next/ui/core/Svg'
  import { AskAIButton } from 'san-webkit-next/ui/app/AIChatbot'

  import Search from './Search.svelte'
  import ProductsButton from './ProductsButton.svelte'
</script>

<header
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
    <div class="flex">
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
</header>
