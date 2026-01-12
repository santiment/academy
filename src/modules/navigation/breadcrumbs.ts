import type { CollectionEntry } from 'astro:content'

import { getPublicSlug } from '$modules/navigation/paths'

export type TBreadcrumb = {
  pathname: string
  label: string
}

type DocsMap = Map<string, CollectionEntry<'docs'>>

export const getBreadcrumbs = (
  docId: string,
  docsMap: DocsMap,
): TBreadcrumb[] => {
  const segments = docId.split('/')

  const crumbs = [{ pathname: '/', label: 'Home' }]

  let currentPath = ''

  for (const segment of segments) {
    currentPath = currentPath ? `${currentPath}/${segment}` : segment

    const doc = docsMap.get(currentPath)

    if (doc) {
      crumbs.push({
        pathname: `/${getPublicSlug(doc.id)}/`,
        label: doc.data.sidebar.label ?? doc.data.title,
      })
    }
  }

  return crumbs
}
