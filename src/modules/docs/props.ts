import type { CollectionEntry } from 'astro:content'

import { getBreadcrumbs } from '$modules/navigation/breadcrumbs'
import { getPublicSlug } from '$modules/navigation/paths'
import type { SidebarSection } from '$modules/navigation/sidebar'

import { PRODUCTS } from '$config/products'

interface Context {
  sidebarData: SidebarSection[]
  docsMap: Map<string, CollectionEntry<'docs'>>
  slugRegistry: Map<string, string>
}

export function prepareDocProps(doc: CollectionEntry<'docs'>, ctx: Context) {
  const { sidebarData, docsMap, slugRegistry } = ctx

  const publicSlug = getPublicSlug(doc.id)

  if (slugRegistry.has(publicSlug)) {
    const existingFile = slugRegistry.get(publicSlug)

    throw new Error(
      `\nURL COLLISION DETECTED:\n` +
        `Slug: "/${publicSlug}"\n` +
        `Conflict between:\n` +
        `1. ${existingFile}\n` +
        `2. ${doc.id}\n` +
        `Action: Rename one of the files.`,
    )
  }
  slugRegistry.set(publicSlug, doc.id)

  const [_section, productId] = doc.id.split('/')
  const relatedProduct = PRODUCTS[productId]

  return {
    params: { slug: publicSlug },
    props: {
      doc,
      sidebarData,
      relatedProduct,
      breadcrumbs: getBreadcrumbs(doc.id, docsMap),
    },
  }
}
