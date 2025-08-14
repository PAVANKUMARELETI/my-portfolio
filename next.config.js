/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['via.placeholder.com', 'pavankumareleti.github.io'],
  },
  async rewrites() {
    return [
      {
        source: '/robots.txt',
        destination: '/robots', // route defined in app/robots/route.ts
      },
    ]
  },
}

module.exports = nextConfig
