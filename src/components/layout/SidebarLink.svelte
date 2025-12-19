<script lang="ts">
  import { cn } from 'san-webkit-next/ui/utils'

  interface TProps {
    title: string
    href: string
    isActive: boolean
  }

  let { title, href, isActive }: TProps = $props()
</script>

<li class="list-none">
  <a
    {href}
    class={cn(
      'block py-1 text-base transition-colors duration-200',
      isActive ? 'text-green' : 'text-rhino hover:text-green-hover'
    )}
  >
    {title}
  </a>
</li>
