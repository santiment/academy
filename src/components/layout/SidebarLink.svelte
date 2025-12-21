<script lang="ts">
  import { cn } from 'san-webkit-next/ui/utils'

  interface TProps {
    title: string
    href: string
    isActive: boolean
    onclick?: () => void
  }

  let { title, href, isActive, onclick }: TProps = $props()
</script>

<li>
  <a
    {href}
    {onclick}
    class={cn(
      'block py-1 text-base transition-colors duration-200',
      isActive ? 'text-green' : 'text-rhino hover:text-green-hover'
    )}
  >
    {title}
  </a>
</li>
