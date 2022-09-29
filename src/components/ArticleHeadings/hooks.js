import { useState, useEffect } from 'react'
import { sluggify } from '../Markdown/utils'
import { updateHash } from '../../utils/utils'

function useScrollListener(elementIDs = []) {
  let lastScrollTop = 0
  let lastId

  function scrollListender() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop
    let checkUpdate = scrollTop < lastScrollTop
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop

    for (let id of elementIDs) {
      const element = document.getElementById(id)
      if (!element) continue
      const { top, bottom } = element.getBoundingClientRect()
      if (top > 100 && bottom < 700) {
        updateHash(`#${id}`)
        lastId = id
        checkUpdate = false
        break
      }
    }

    if (checkUpdate) {
      const { hash } = new URL(document.URL)
      const id = hash.substring(1)
      if (id === lastId) {
        const index = elementIDs.indexOf(id)
        if (index > 0) {
          updateHash(`#${elementIDs[index - 1]}`)
        }
      }
    }
  }

  window.addEventListener('scroll', scrollListender)
  return () => window.removeEventListener('scroll', scrollListender)
}

export function useSidenavItems(tableOfContents) {
  const [list, setList] = useState([])
  const [elementIDs, setElementIDs] = useState([])
  useScrollListener(elementIDs)

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
          parseItems(item.getElementsByTagName('ul'), 2)
        }
      }
    }

    const parser = new DOMParser()
    const parsedHtml = parser.parseFromString(tableOfContents, 'text/html')
    parseItems(parsedHtml.getElementsByTagName('ul'))

    setList(result)
    setElementIDs(ids)
  }, [tableOfContents])

  return list
}
