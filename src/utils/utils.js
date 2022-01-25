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

export const scrollToTargetHander = (id, headerOffset = 95) => {
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
