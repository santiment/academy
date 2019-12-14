export const isLocalStorage = () => {
	if (typeof window === 'undefined' || typeof window.localStorage === 'undefined') {
    return false
  }
  return true
}
