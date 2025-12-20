import type { CollectionEntry } from 'astro:content'

import { ROOT_SECTIONS } from './sidebar'

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
  const [rootKey] = segments

  const crumbs = [{ pathname: '/', label: 'Home' }]

  if (ROOT_SECTIONS[rootKey]) {
    crumbs.push({
      pathname: `/${rootKey}`,
      label: ROOT_SECTIONS[rootKey],
    })
  }

  let currentPath = ''

  for (const segment of segments) {
    currentPath = currentPath ? `${currentPath}/${segment}` : segment

    if (currentPath === rootKey) continue

    const doc = docsMap.get(currentPath)
    if (doc) {
      crumbs.push({
        pathname: `/${doc.id}`,
        label: doc.data.sidebar.label ?? doc.data.title,
      })
    }
  }

  return crumbs
}
