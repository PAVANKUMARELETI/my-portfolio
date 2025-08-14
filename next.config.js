/** @type {import('next').NextConfig} */
const nextConfig = {
  // Remove swcMinify - it's enabled by default in Next.js 13+
  images: {
    domains: ['via.placeholder.com'],
  },
}

module.exports = nextConfig