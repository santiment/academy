<script lang="ts">
  import Svg from 'san-webkit-next/ui/core/Svg'
  import { cn } from 'san-webkit-next/ui/utils'
  import { dateDifferenceInWords } from '$modules/date/index'
  import { ONE_DAY_IN_MS } from 'san-webkit-next/utils/dates'

  type TProps = {
    datePublished: Date
    dateModified: Date
  }

  const { datePublished, dateModified }: TProps = $props()

  const isModified = $derived(
    dateModified && 
    dateModified.getTime() > datePublished.getTime() + ONE_DAY_IN_MS
  )
</script>

<div class={cn('flex items-center mb-6 text-sm font-medium text-fiord')}>
  <Svg id="time" class="fill-waterloo mr-2" />

  <div class="flex flex-wrap gap-x-2">
    <time datetime={datePublished.toISOString()}>
      Published {dateDifferenceInWords(datePublished)}
    </time>

    {#if isModified}
      <span class="text-waterloo">|</span>
      <time datetime={dateModified.toISOString()}>
        Updated {dateDifferenceInWords(dateModified)}
      </time>
    {/if}
  </div>
</div>
