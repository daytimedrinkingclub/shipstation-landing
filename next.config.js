/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["localhost"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
      },
      {
        protocol: "https",
        hostname: "desilog.sivaramp.com",
        port: "",
      },
    ],
  },
  experimental: {
    workerThreads: false,
    cpus: 1
  },
};

module.exports = nextConfig;
