import { sluggify } from 'san-webkit-next/utils/url'

export interface SidenavItem {
  slug: string
  value: string | null
  depth: number
}

export interface UseSidenavItemsReturn {
  list: SidenavItem[]
  elementIDs: string[]
}

function getElements(
  tableOfContents: string,
  title: string
): HTMLCollectionOf<HTMLUListElement> | [HTMLUListElement] | undefined {
  if (typeof window === 'undefined') {
    return
  }

  const parsedHtml: Document = new DOMParser().parseFromString(
    `<ul><li><p>${title}</p>${tableOfContents
      .replace(/<em>/g, '_')
      .replace(/<\/em>/g, '_')}</li></ul>`,
    'text/html'
  )

  const ul: HTMLCollectionOf<HTMLUListElement> =
    parsedHtml.getElementsByTagName('ul')
  const pCount: number = parsedHtml.getElementsByTagName('p').length

  if (ul.length === 1 && pCount === 1) {
    return
  }

  if (ul.length - pCount === 1) {
    return [ul[1]]
  }

  return ul
}

export function useSidenavItems(
  tableOfContents: string,
  title: string
): UseSidenavItemsReturn {
  const data = $derived.by(() => {
    const result: SidenavItem[] = []
    const ids: string[] = []

    function parseItems(
      elements:
        | HTMLCollectionOf<HTMLUListElement>
        | [HTMLUListElement]
        | undefined,
      depth: number = 1
    ): void {
      if (!elements || !elements[0] || !elements[0].children) {
        return
      }

      for (let item of Array.from(elements[0].children)) {
        if (!item.firstElementChild) continue

        if (item.firstElementChild.tagName === 'A') {
          const slug = sluggify((item as HTMLElement).innerText)
          ids.push(slug)
          result.push({ slug, value: item.textContent, depth })
          continue
        }

        if (item.firstElementChild.tagName === 'P') {
          const slug = sluggify(
            (item.firstElementChild as HTMLElement).innerText
          )
          ids.push(slug)
          result.push({
            slug,
            value: item.firstElementChild.textContent,
            depth,
          })
          parseItems(item.getElementsByTagName('ul'), depth + 1)
        }
      }
    }

    parseItems(getElements(tableOfContents, title))

    return { list: result, elementIDs: ids }
  })

  return {
    list: $derived(data.list),
    elementIDs: $derived(data.elementIDs),
  }
}
