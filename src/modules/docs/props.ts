import type { CollectionEntry } from 'astro:content'

import { getBreadcrumbs } from '$modules/navigation/breadcrumbs'
import type { SidebarSection } from '$modules/navigation/sidebar'

import { PRODUCTS } from '$config/products'

interface Context {
  sidebarData: SidebarSection[]
  docsMap: Map<string, CollectionEntry<'docs'>>
}

export function prepareDocProps(doc: CollectionEntry<'docs'>, ctx: Context) {
  const { sidebarData, docsMap } = ctx

  const [productId] = doc.id.split('/')
  const relatedProduct = PRODUCTS[productId]

  return {
    params: { slug: doc.id },
    props: {
      doc,
      sidebarData,
      relatedProduct,
      breadcrumbs: getBreadcrumbs(doc.id, docsMap),
    },
  }
}
