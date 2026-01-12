<script lang="ts">
  import type { Snippet } from 'svelte'
  import type { HTMLAnchorAttributes } from 'svelte/elements'

  type TProps = HTMLAnchorAttributes & {
    href?: string
    children: Snippet
  }

  let { href = '', children, ...rest }: TProps = $props()

  let linkData = $derived.by(() => {
    const isAnchor = href.startsWith('#')
    const isMailto = href.includes('mailto')
    const isHttp = href.includes('http')
    const isSantiment = href.includes('academy.santiment.net')
    const isInternal = (!isHttp || isSantiment) && !isAnchor && !isMailto

    if (isInternal) {
      let link = href
        .toString()
        .toLowerCase()
        .replace(/https:\/\/academy.santiment.net/g, '')

      if (!link.includes('#') && !link.endsWith('/')) {
        link += '/'
      }
      if (!link.startsWith('/')) {
        link = '/' + link
      }
      return { href: link, attrs: {} }
    }

    if (!isAnchor && !isMailto) {
      return { href, attrs: { target: '_blank', rel: 'noopener noreferrer' } }
    }

    return { href, attrs: {} }
  })
</script>

<a href={linkData.href} {...linkData.attrs} {...rest}>
  {@render children?.()}
</a>
