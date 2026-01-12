import { ROOT_SECTIONS } from '$config/navigation'

const SYSTEM_SECTIONS = new Set(Object.keys(ROOT_SECTIONS))

export function getPublicSlug(docId: string) {
  const parts = docId.split('/')

  if (SYSTEM_SECTIONS.has(parts[0])) {
    return parts.slice(1).join('/')
  }

  return docId
}
