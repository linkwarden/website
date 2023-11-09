/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export",
  basePath: "/website",
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
