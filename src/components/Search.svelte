<script lang="ts">
  import { cn } from 'san-webkit-next/ui/utils'
  import Input from 'san-webkit-next/ui/core/Input'
</script>

<div class={cn(
  'w-full flex flex-col items-center relative',
  'w-[296px] ml-auto bg-none z-[1000] items-baseline',
  'sm:hidden'
)}>
  <Input
    id="search"
    inputClass="w-[296px] h-8 sm:w-[250px] sm:h-10 pl-11"
    placeholder="Search docs"
    icon="search"
  />
</div>
