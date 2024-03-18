/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["images.ctfassets.net"],
    unoptimized: true,
  },
};

module.exports = nextConfig;
