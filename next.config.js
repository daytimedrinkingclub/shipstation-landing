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
      {
        protocol: "https",
        hostname: "api.microlink.io",
        port: "",
      },
      {
        protocol: "https",
        hostname: "shipstation.ai",
        port: "",
      },
      {
        protocol: "https",
        hostname: "supabasekong-shipstation.badalhibadal.com",
        port: "",
      },
    ],
  },
};

module.exports = nextConfig;
