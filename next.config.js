/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com', 'plus.unsplash.com'],
  },
  experimental: {
    optimizePackageImports: ['react-icons'],
  },
};

module.exports = nextConfig;
