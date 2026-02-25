<script lang="ts">
  import { cn } from 'san-webkit-next/ui/utils'
  import Button from 'san-webkit-next/ui/core/Button'
  import Svg from 'san-webkit-next/ui/core/Svg'
</script>

<a
  class={cn(
    'flex bg-white border border-porcelain rounded-lg py-7 px-12 transition-all duration-1000 !no-underline group',
    'md:flex-col md:items-center md:text-center md:py-6 md:px-5'
  )}
  href="https://santiment.net/discord"
  target="_blank"
  rel="noreferrer"
>
  <div class={cn('min-w-14 h-14 bg-athens rounded-full', 'flex center mr-6 md:mr-0 md:mb-4')}>
    <Svg id="discord" w={28} h={22} class="fill-fiord" />
  </div>

  <div class="max-w-[360px] !text-rhino">
    <h4 class="!text-xl !font-medium !mt-0 !mb-1">Talk to us in Discord</h4>

    <p class={cn("text-base !mt-0 !mb-4", 'md:text-sm md:leading-relaxed')}>
      Still have some questions left? Join our Discord and get help from the
      Santiment team!
    </p>

    <Button variant="plain" icon="right-arrow" iconOnRight class="!py-0 !h-[20px] text-base text-green fill-green group-hover:[&>svg]:translate-x-1 group-hover:text-green-hover group-hover:fill-green-hover [&_svg]:transition-transform [&_svg]:duration-300 [&_svg]:ease-in-out md:center md:w-full">
      Go to Discord
    </Button>
  </div>
</a>
