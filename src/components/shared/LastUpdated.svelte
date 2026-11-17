<script lang="ts">
  import Svg from 'san-webkit-next/ui/core/Svg'
  import { cn } from 'san-webkit-next/ui/utils'
  import { dateDifferenceInWords } from '$modules/date/index'

  type TProps = {
    dateModified: Date
  }

  const { dateModified }: TProps = $props()
  const isoDate = $derived(dateModified.toISOString())
  const absoluteDate = $derived(
    dateModified.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric', timeZone: 'UTC' })
  )
</script>

<div class={cn('flex items-center mb-6')}>
  <Svg id="time" class="fill-waterloo mr-2" />

  <time datetime={isoDate} class="text-sm font-medium text-fiord">Updated {absoluteDate} ({dateDifferenceInWords(dateModified)})</time>
</div>
