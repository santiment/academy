<script lang="ts">
  import Svg from 'san-webkit-next/ui/core/Svg'
  import { cn } from 'san-webkit-next/ui/utils'
  import { getTimeSince } from 'san-webkit-next/utils/dates'

  type TProps = {
    lastUpdatedAt?: Date | null
  }

  const { lastUpdatedAt }: TProps = $props()
</script>

{#if lastUpdatedAt}
  <div class={cn('flex items-center mb-6')}>
    <Svg id="time" class="fill-waterloo mr-2" />

    <time class="text-sm font-medium text-fiord">Updated {getTimeSince(new Date(lastUpdatedAt))} ago</time>
  </div>
{/if}
