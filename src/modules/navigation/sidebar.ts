import { type CollectionEntry } from 'astro:content'

import { ROOT_SECTIONS, SECTION_BY_ITEM } from '$config/navigation'

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
  items.sort((a, b) => a.order - b.order || a.title.localeCompare(b.title))

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
      { title: ROOT_SECTIONS[key].label, items: [] },
    ]),
  )

  const itemMap = new Map<string, SidebarItemDraft>()

  docs.forEach((doc) => {
    itemMap.set(doc.id, {
      type: 'link',
      title: doc.data.sidebar.label || doc.data.title,
      href: `/${doc.id}/`,
      order: doc.data.sidebar.order ?? 999,
      slug: doc.id,
      items: [],
    })
  })

  docs.forEach((doc) => {
    const item = itemMap.get(doc.id)!

    const parentId = doc.id.split('/').slice(0, -1).join('/')
    const parentItem = itemMap.get(parentId)

    if (parentItem) {
      parentItem.type = 'group'
      parentItem.items.push(item)
      return
    }

    const rootId = doc.id.split('/')[0]
    const section = SECTION_BY_ITEM[rootId]

    if (!section) {
      console.warn(
        `[sidebar] Doc "${doc.id}" belongs to no section and won't be shown. ` +
          `Add its root folder to ROOT_SECTIONS in src/config/navigation.ts.`,
      )
      return
    }

    item.order = ROOT_SECTIONS[section].items.indexOf(rootId)
    sidebarMap[section].items.push(item)
  })

  const result = Object.values(sidebarMap)

  result.forEach((section) => sortSidebarItems(section.items))

  return result
}
