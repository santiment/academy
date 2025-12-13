<script lang="ts">
  import type { MarkdownHeading } from 'astro'
  import { onMount } from 'svelte'
  import { cn } from 'san-webkit-next/ui/utils'
  import Svg from 'san-webkit-next/ui/core/Svg'

  type TProps = {
    relatedLink?: any
    headings: MarkdownHeading[]
  }

  const { headings, relatedLink }: TProps = $props()

  let activeSlug = $state(headings[0]?.slug || '')

  function handleLinkClick(e: MouseEvent, slug: string) {
    e.preventDefault()

    const element = document.getElementById(slug)

    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      history.replaceState(null, '', `#${slug}`)

      activeSlug = slug
    }
  }

  onMount(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            activeSlug = entry.target.id
          }
        })
      },
      { rootMargin: '-100px 0% -66% 0%' }
    )

    headings.forEach((h) => {
      const el = document.getElementById(h.slug)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  })
</script>

<ul class="fixed ml-[660px] top-[95px] pr-2 flex flex-col max-h-[85vh] max-w-[210px] overflow-y-auto overflow-x-hidden md:flex lg:hidden">
  {#if relatedLink}
    <li>
      <a href={relatedLink.href} target="_blank" class="flex items-center gap-2 text-green hover:text-green-hover fill-green hover:fill-green-hover">
        Go to {relatedLink.title}
        <Svg id="right-arrow" />
      </a>
    </li>
  {/if}

  {#each headings as { slug, text, depth }, idx}
    <li
      class={cn(
        'relative',
        'after:content-[""] after:h-1 after:block after:border-l-porcelain after:border-l-2',
        idx !== 0 && idx !== headings.length ? 'before:content-[""] before:h-1 before:block before:border-l-porcelain before:border-l-2' : '',
        idx === 0 && (relatedLink ? 'mt-12' : 'mt-20')
      )}
    >
      <a
        href={`#${slug}`}
        onclick={(e) => handleLinkClick(e, slug)}
        class={cn(
          'text-sm block cursor-pointer transition-colors duration-200 border-l-2',
          depth === 2 && 'pl-4',
          depth === 3 && 'pl-8',
          activeSlug === slug
            ? 'border-l-green text-green'
            : 'border-l-porcelain text-rhino hover:text-green'
        )}
      >
        {text}
      </a>
    </li>
  {/each}
</ul>
