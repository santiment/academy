import type { APIRoute } from 'astro'

const getRobotsTxt = (sitemapURL: URL) => `\
# https://www.robotstxt.org/robotstxt.html
User-agent: *
Disallow: /*.jpg$
Disallow: /*.png$
Disallow: /*.gif$
Sitemap: ${sitemapURL.href}
`

export const GET: APIRoute = ({ site }) => {
  const sitemapURL = new URL('sitemap.xml', site)
  return new Response(getRobotsTxt(sitemapURL))
}
