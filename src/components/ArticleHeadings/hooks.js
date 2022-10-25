import { useState, useEffect } from 'react'
import { sluggify } from '../Markdown/utils'

function getElements(tableOfContents) {
  const parsedHtml = new DOMParser().parseFromString(
    tableOfContents,
    'text/html'
  )
  const ul = parsedHtml.getElementsByTagName('ul')
  const pCount = parsedHtml.getElementsByTagName('p').length
  // if (pCount === 1 && ul.length === 2) {
  if (ul.length - pCount === 1) {
    return [ul[1]]
  }
  return ul
}

export function useSidenavItems(tableOfContents) {
  const [list, setList] = useState([])
  const [elementIDs, setElementIDs] = useState([])

  useEffect(() => {
    const result = []
    const ids = []

    function parseItems(elements, depth = 1) {
      if (!elements || !elements[0] || !elements[0].children) return
      for (let item of elements[0].children) {
        if (item.firstElementChild.tagName === 'A') {
          const slug = sluggify(item.innerText)
          ids.push(slug)
          result.push({ slug, value: item.textContent, depth })
          continue
        }
        if (item.firstElementChild.tagName === 'P') {
          const slug = sluggify(item.firstElementChild.innerText)
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

    parseItems(getElements(tableOfContents))

    setList(result)
    setElementIDs(ids)
  }, [tableOfContents])

  return { list, elementIDs }
}
