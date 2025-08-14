// app/robots/route.ts
import { NextResponse } from 'next/server'

export async function GET() {
  const content = `
User-agent: *
Allow: /

Sitemap: https://pavaneleti.me/sitemap.xml
  `.trim()

  return new NextResponse(content, {
    status: 200,
    headers: {
      'Content-Type': 'text/plain',
    },
  })
}
