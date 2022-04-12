/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    DB_LOCAL_URI: process.env.MONGODB_URL,
  },
  images: {
    domains: ['via.placeholder.com']
  }
};

module.exports = nextConfig;
