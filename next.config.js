/** @type {import('next').NextConfig} */
const nextConfig = {
  runtime: 'edge',
  reactStrictMode: true,
  swcMinify: true,
  images: {
    loader: 'custom',
    disable: true,
    unoptimized: true,
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    minimumCacheTTL: 60,
  },
  env: {
    apiUrl: 'https://api.inframantra.com/api',
    apiUrl1: 'https://apitest.inframantra.com/api/v1',
    NEXT_PUBLIC_GOOGLE_MAPS_API_KEY: 'AIzaSyDh6uhpwkkniyiztlDDWEHO7Ph_sBxuJFw'
  },
  images: {
    domains: ['infra-mantra.s3.ap-south-1.amazonaws.com', 'i.ytimg.com', 'infra-mantra.s3.amazonaws.com', 'infra-mantra-new.s3.ap-south-1.amazonaws.com', 'infra-mantra-new.s3.amazonaws.com'],
  },
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
  

  async redirects() {
    return [
      {
        source: '/property/bptp-terra-sector-37d-gurgaon',
        destination: '/',
        permanent: true,
      },
       // buy/properties-in-gurugram
    ]
  },
}

module.exports = nextConfig

