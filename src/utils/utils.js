import { useState, useEffect } from 'react'
import { useLocation } from '@reach/router'
import copy from 'copy-to-clipboard'

export const isLocalStorage = () => {
  if (
    typeof window === 'undefined' ||
    typeof window.localStorage === 'undefined'
  ) {
    return false
  }
  return true
}

export const isSSR = typeof window === 'undefined'

export const usePageHash = (elementIDs = []) => {
  const { hash } = useLocation()
  const [pageHash, setPageHash] = useState()
  const [scrollListenderEnabled, setScrollListenderEnabled] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!scrollListenderEnabled) {
        setScrollListenderEnabled(true)
      }
    }, 800)

    return () => clearInterval(timer)
  }, [scrollListenderEnabled])

  function updateHash(hash) {
    if (hash && !isSSR) {
      window.history.pushState({}, '', hash)
      setPageHash(hash)
    }
  }

  useEffect(() => {
    setPageHash(hash)
  }, [hash])

  useEffect(() => {
    let lastScrollTop = 0
    let lastId

    function scrollListender() {
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop
      let checkUpdate = scrollTop < lastScrollTop
      lastScrollTop = scrollTop <= 0 ? 0 : scrollTop

      if (!scrollListenderEnabled) {
        return
      }

      for (let id of elementIDs) {
        const element = document.getElementById(id)
        if (!element) continue
        const { top, bottom } = element.getBoundingClientRect()
        if (top > 100 && bottom < 600) {
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

    if (!isSSR) window.addEventListener('scroll', scrollListender)
    return () => !isSSR && window.removeEventListener('scroll', scrollListender)
  }, [elementIDs, scrollListenderEnabled])

  function scrollToTargetAdjusted(e, id, hasCopy = false) {
    e.preventDefault()
    setScrollListenderEnabled(false)
    let element = document.getElementById(id)
    let elementPosition = element.getBoundingClientRect().top
    let offsetPosition = elementPosition + window.pageYOffset - 95
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    })
    updateHash(`#${id}`)
    if (!isSSR && hasCopy) copy(document.URL)
  }

  return {
    pageHash,
    updateHash,
    scrollToTargetAdjusted,
  }
}
