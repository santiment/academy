<script lang="ts">
  import SidebarCategory from './SidebarCategory.svelte'
  import { GUIDES, REFERENCES, GETTING_STARTED } from '../docs/navigation'

  import { titleToSlug } from '../utils/docs'
  import { isArticleActive } from './utils'
  import { cn } from 'san-webkit-next/ui/utils'

  type TProps = {
    active: string[]
  }

  const { active }: TProps = $props()
</script>

<section class="fixed bottom-0 left-0 right-0 top-[71px] flex w-full md:hidden">
  <div class="relative flex grow border-r border-r-porcelain">
    <ul
      class="ml-auto w-[285px] overflow-y-auto pb-10 pl-4 [scrollbar-gutter:stable] focus:overflow-y-auto"
    >
      <h3 class="mb-4 ml-0 mr-5 pt-8 text-sm font-medium text-casper">
        {GETTING_STARTED.title}
      </h3>

      <li>
        <ul>
          {#each GETTING_STARTED.articles as article}
            {@const activeClass = isArticleActive(active, null, article) ? 'text-green-hover' : ''}

            <li class={cn('mt-2 text-rhino', activeClass)}>
              <a href={`/${titleToSlug(article)}/`}>{article}</a>
            </li>
          {/each}
        </ul>
      </li>

      <h3
        class="mb-4 ml-0 mr-5 mt-8 border-t border-t-porcelain pt-8 text-sm font-medium text-casper"
      >
        Guides
      </h3>

      {#each GUIDES as category}
        <SidebarCategory {...category} active={active} />
      {/each}

      <h3
        class="mb-4 ml-0 mr-5 mt-8 border-t border-t-porcelain pt-8 text-sm font-medium text-casper"
      >
        Resources
      </h3>

      {#each REFERENCES as category}
        <SidebarCategory {active} {...category}  />
      {/each}
    </ul>
  </div>

  <div
    class="pointer-events-none -z-[1] flex w-[885px] grow opacity-0"
    aria-hidden="true"
  >
  </div>
</section>
