/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['page.tsx', 'page.ts', 'page.jsx', 'page.js', 'api.tsx', 'api.ts'],
  reactStrictMode: true,
  images: {
    domains: ['i.dummyjson.com', 'images.unsplash.com'],
  },
};

module.exports = nextConfig;
