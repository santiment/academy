import { type CollectionEntry } from 'astro:content'

import { getPublicSlug } from '$modules/navigation/paths'

import { ROOT_SECTIONS } from '$config/navigation'

export type SidebarLink = {
  type: 'link'
  title: string
  href: string
  slug: string
  order: number
}

export type SidebarGroup = Omit<SidebarLink, 'type'> & {
  type: 'group'
  items: SidebarItem[]
}

export type SidebarItem = SidebarLink | SidebarGroup

export type SidebarSection = {
  title: string
  items: SidebarItem[]
}

type SidebarItemDraft = Omit<SidebarGroup, 'type'> & {
  type: 'link' | 'group'
}

function isGroup(item: SidebarItem): item is SidebarGroup {
  return item.type === 'group'
}

function sortSidebarItems(items: SidebarItem[]) {
  items.sort((a, b) => a.order - b.order)

  items.forEach((item) => {
    if (isGroup(item)) {
      sortSidebarItems(item.items)
    }
  })
}

export function getSidebar(
  allDocs: CollectionEntry<'docs'>[],
): SidebarSection[] {
  const docs = allDocs.filter((d) => !d.data.sidebar.hidden)

  const sidebarMap: Record<string, SidebarSection> = Object.fromEntries(
    Object.keys(ROOT_SECTIONS).map((key) => [
      key,
      { title: ROOT_SECTIONS[key], items: [] },
    ]),
  )

  const itemMap = new Map<string, SidebarItemDraft>()

  docs.forEach((doc) => {
    itemMap.set(doc.id, {
      type: 'link',
      title: doc.data.sidebar.label || doc.data.title,
      href: `/${getPublicSlug(doc.id)}/`,
      order: doc.data.sidebar.order ?? 999,
      slug: getPublicSlug(doc.id),
      items: [],
    })
  })

  docs.forEach((doc) => {
    const item = itemMap.get(doc.id)!
    const parts = doc.id.split('/')
    const [rootKey] = parts

    const parentId = parts.slice(0, -1).join('/')
    const parentItem = itemMap.get(parentId)

    if (parentItem) {
      parentItem.type = 'group'
      parentItem.items.push(item)
    } else if (sidebarMap[rootKey]) {
      sidebarMap[rootKey].items.push(item)
    }
  })

  const result = Object.values(sidebarMap)

  result.forEach((section) => sortSidebarItems(section.items))

  return result
}
