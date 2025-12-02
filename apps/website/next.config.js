/** @type {import('next').NextConfig} */

const basePath = process.env.NODE_ENV === "production" ? "/website" : "";

const nextConfig = {
  reactStrictMode: true,
  output: "export",
  basePath,
  assetPrefix: basePath,
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
