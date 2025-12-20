import type { CollectionEntry } from 'astro:content'

export const getFirstDocInSection = (
  allDocs: CollectionEntry<'docs'>[],
  slug: string,
) => {
  return allDocs.reduce(
    (minDoc, current) => {
      if (!current.id.startsWith(`${slug}/`)) return minDoc

      if (!minDoc) return current

      const currentOrder = current.data.sidebarOrder ?? 999
      const minOrder = minDoc.data.sidebarOrder ?? 999

      return currentOrder < minOrder ? current : minDoc
    },
    null as CollectionEntry<'docs'> | null,
  )
}
