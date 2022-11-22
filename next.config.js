/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['pages.jsx'],
  reactStrictMode: true,
  images: {
    domains: ['i.dummyjson.com', 'images.unsplash.com'],
  },
};

module.exports = nextConfig;
