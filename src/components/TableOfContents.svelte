<script lang="ts">
  import type { MarkdownHeading } from 'astro'
  import { onMount } from 'svelte'
  import { cn } from 'san-webkit-next/ui/utils'
  import Button from 'san-webkit-next/ui/core/Button'

  type TProps = {
    relatedLink?: any
    headings: MarkdownHeading[]
  }

  const { headings, relatedLink }: TProps = $props()

  let activeSlug = $state<string>(headings[0]?.slug || '')

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

<ul class="fixed ml-[660px] top-[95px] flex flex-col max-h-[85vh] max-w-[210px] overflow-y-auto overflow-x-hidden pr-2 md:flex lg:hidden">
  {#if relatedLink}
    <li>
      <Button href={relatedLink.href} target="_blank" icon="right-arrow" iconOnRight>
        Go to {relatedLink.title}
      </Button>
    </li>
  {/if}

  {#each headings as { slug, text, depth }, idx}
    <li
      class={cn(
        'relative before:!content-[""]',
        idx === 0 && (relatedLink ? 'mt-12' : 'mt-20')
      )}
    >
      <a
        href={`#${slug}`}
        onclick={(e) => handleLinkClick(e, slug)}
        class={cn(
          'text-sm block py-1 cursor-pointer transition-colors duration-200 border-l-2 pl-4',
          depth === 2 && 'pl-8',
          depth === 3 && 'pl-12',
          activeSlug === slug
            ? 'border-l-green text-green'
            : 'border-l-porcelain text-rhino hover:text-green hover:border-l-green'
        )}
      >
        {text}
      </a>
    </li>
  {/each}
</ul>
