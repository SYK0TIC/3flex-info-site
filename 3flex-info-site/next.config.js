/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [],
  },
  // Ensure public assets are correctly served
  publicRuntimeConfig: {
    staticFolder: '/public',
  },
  // Fixes issues with image paths
  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig; 