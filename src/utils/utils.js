import { useState, useEffect } from 'react'
import { useLocation } from '@reach/router'

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

export const scrollToTargetAdjusted = (e, id, headerOffset = 95) => {
  e.preventDefault()
  const hash = `#${id}`
  let element = document.getElementById(id)
  let elementPosition = element.getBoundingClientRect().top
  let offsetPosition = elementPosition + window.pageYOffset - headerOffset
  window.scrollTo({
    top: offsetPosition,
    behavior: 'smooth',
  })
  window.history.pushState({}, '', hash)
  window.dispatchEvent(new CustomEvent('hashScrollChanged', { detail: hash }))
}

export const usePageHash = () => {
  const { hash } = useLocation()
  const [pageHash, setPageHash] = useState()
  useEffect(() => {
    if (hash) setPageHash(hash)
    const hashChangeHandler = ({ detail }) => setPageHash(detail)
    window.addEventListener('hashScrollChanged', hashChangeHandler, false)
    return () =>
      window.removeEventListener('hashScrollChanged', hashChangeHandler, false)
  }, [hash])
  return pageHash
}
