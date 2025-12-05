<script lang="ts">
  import { cn } from 'san-webkit-next/ui/utils'
  import Button from 'san-webkit-next/ui/core/Button'
  import Svg from 'san-webkit-next/ui/core/Svg'
  import { getTimeSince } from 'san-webkit-next/utils/dates'

  type TProps = {
    lastUpdatedAt?: Date | null
  }

  const { lastUpdatedAt }: TProps = $props()
</script>

<div class="mt-16">
  {#if lastUpdatedAt}
    <div class={cn('flex items-center mb-6')}>
      <Svg id="time" class="fill-waterloo mr-2" />

      <time class="text-sm font-medium text-fiord">Updated {getTimeSince(new Date(lastUpdatedAt))} ago</time>
    </div>
  {/if}

  <a
    class={cn(
      'flex bg-white border border-porcelain rounded-lg py-7 px-12 transition-all duration-1000',
      'sm:py-8 sm:px-6 !no-underline group'
    )}
    href="https://santiment.net/discord"
    target="_blank"
    rel="noreferrer"
  >
    <div class={cn('min-w-14 h-14 bg-athens rounded-full', 'flex center mr-6')}>
      <Svg id="discord" w={28} h={22} class="fill-fiord" />
    </div>

    <div class="max-w-[360px] !text-rhino">
      <h4 class="text-2xl font-medium mb-1">Talk to us in Discord</h4>

      <p class="text-base mb-4">
        Still have some questions left? Join our Discord and get help from the
        Santiment team!
      </p>

      <Button variant="plain" icon="right-arrow" iconOnRight class="text-green fill-green group-hover:[&>svg]:translate-x-1 group-hover:text-green-hover group-hover:fill-green-hover [&_svg]:transition-transform [&_svg]:duration-300 [&_svg]:ease-in-out">
        Go to Discord
      </Button>
    </div>
  </a>
</div>
