import type { CollectionEntry } from 'astro:content'

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
        pathname: `/${doc.id}/`,
        label: doc.data.sidebar.label ?? doc.data.title,
      })
    }
  }

  return crumbs
}
