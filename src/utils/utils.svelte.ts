import { copy } from 'san-webkit-next/utils'

export const isSSR: boolean = typeof window === 'undefined'

export interface UsePageHashReturn {
  pageHash: string | undefined
  updateHash: (hash: string) => void
  scrollToTargetAdjusted: (e: MouseEvent, id: string, hasCopy?: boolean) => void
}

export function usePageHash(elementIDs: string[] = []): UsePageHashReturn {
  let pageHash = $state<string | undefined>(
    isSSR ? undefined : window.location.hash
  )
  let scrollListenderEnabled = $state<boolean>(true)

  function updateHash(hash: string): void {
    if (hash && !isSSR) {
      window.history.replaceState({}, '', hash)
      pageHash = hash
    }
  }

  $effect(() => {
    if (isSSR) return

    const handleHashChange = (): void => {
      pageHash = window.location.hash
    }

    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  })

  $effect(() => {
    if (scrollListenderEnabled) {
      return
    }

    const timer: ReturnType<typeof setTimeout> = setTimeout(() => {
      scrollListenderEnabled = true
    }, 800)

    return () => clearTimeout(timer)
  })

  $effect(() => {
    if (isSSR) return

    let lastScrollTop: number = 0
    let lastId: string | undefined

    function scrollListender(): void {
      let scrollTop: number =
        window.pageYOffset || document.documentElement.scrollTop
      let checkUpdate: boolean = scrollTop < lastScrollTop
      lastScrollTop = scrollTop <= 0 ? 0 : scrollTop

      if (!scrollListenderEnabled) {
        return
      }

      for (let id of elementIDs) {
        const element: HTMLElement | null = document.getElementById(id)
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
        const id: string = hash.substring(1)
        if (id === lastId) {
          const index: number = elementIDs.indexOf(id)
          if (index > 0) {
            updateHash(`#${elementIDs[index - 1]}`)
          }
        }
      }
    }

    window.addEventListener('scroll', scrollListender)
    return () => window.removeEventListener('scroll', scrollListender)
  })

  function scrollToTargetAdjusted(
    e: MouseEvent,
    id: string,
    hasCopy: boolean = false
  ): void {
    e.preventDefault()
    scrollListenderEnabled = false

    const element: HTMLElement | null = document.getElementById(id)
    if (!element) return

    const elementPosition: number = element.getBoundingClientRect().top
    const offsetPosition: number = elementPosition + window.pageYOffset - 95

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    })

    updateHash(`#${id}`)

    if (!isSSR && hasCopy) {
      copy(document.URL, () => {})
    }
  }

  return {
    pageHash,
    updateHash,
    scrollToTargetAdjusted,
  }
}
