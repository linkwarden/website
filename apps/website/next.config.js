/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === "production";

const basePath = isProd ? "/website" : "";

const nextConfig = {
  reactStrictMode: true,
  output: "export",
  basePath,
  assetPrefix: isProd ? "/website/" : undefined,
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
