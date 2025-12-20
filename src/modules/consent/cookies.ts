import { mount } from 'svelte'
import CookiesPopup from 'san-webkit-next/ui/core/CookiesPopup'

export function initCookiesPopup() {
  if (typeof window === 'undefined') return

  const accepted = document.cookie.includes('COOKIE_POLICY_ACCEPTED=true')

  if (accepted) return

  mount(CookiesPopup, {
    target: document.body,
    props: { isVisible: true }
  })
}
