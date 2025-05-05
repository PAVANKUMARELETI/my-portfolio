import { NextResponse } from 'next/server'

export async function GET() {
  const baseUrl = 'https://pavaneleti.me'

  const staticRoutes = ['', 'projects', 'skills', 'contact']

  const urls = staticRoutes.map((path) => {
    const loc = path ? `${baseUrl}/${path}` : baseUrl
    return `
      <url>
        <loc>${loc}</loc>
        <changefreq>monthly</changefreq>
        <priority>${path === '' ? '1.0' : '0.8'}</priority>
      </url>
    `
  }).join('')

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${urls}
  </urlset>`

  return new NextResponse(xml, {
    headers: {
      'Content-Type': 'application/xml',
    },
  })
}
