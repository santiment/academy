import type { APIRoute } from 'astro'
import { getCollection } from 'astro:content'

import { getPublicSlug } from '$modules/navigation/paths'

const buildSitemapEntry = (loc: string, lastmod?: string) =>
  `  <url>\n    <loc>${loc}</loc>${lastmod ? `\n    <lastmod>${lastmod}</lastmod>` : ''}\n  </url>`

const buildSitemapXml = (
  entries: string,
) => `<?xml version="1.0" encoding="UTF-8"?>
<urlset
      xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
      xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
      xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
            http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
${entries}
</urlset>`

export const GET: APIRoute = async (context) => {
  const siteUrl = context.site!.href
  const docs = await getCollection('docs')

  const homepageEntry = buildSitemapEntry(siteUrl)

  const docEntries = docs
    .map((doc) => {
      const date = doc.data.dateModified || doc.data.datePublished
      const rawUrl = new URL(getPublicSlug(doc.id), siteUrl).href
      const loc = rawUrl.endsWith('/') ? rawUrl : `${rawUrl}/`

      return buildSitemapEntry(loc, date.toISOString())
    })
    .join('\n\n')

  const sitemap = buildSitemapXml(`\n${homepageEntry}\n${docEntries}`)

  return new Response(sitemap, {
    headers: { 'Content-Type': 'application/xml' },
  })
}
