import { execSync } from 'child_process'

export function remarkLastUpdated() {
  return function (_tree, file) {
    const filepath = file.history[0]
    try {
      const result = execSync(`git log -1 --pretty="format:%aI" "${filepath}"`)
      const date = result.toString().trim()

      file.data.astro.frontmatter.lastUpdatedAt = date || ''
    } catch (e) {
      file.data.astro.frontmatter.lastUpdatedAt = ''
    }
  }
}
