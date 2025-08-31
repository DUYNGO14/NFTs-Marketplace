/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "magenta-permanent-bass-349.mypinata.cloud", // domain gateway Pinata
        pathname: "/ipfs/**",
      },
      {
        protocol: "https",
        hostname: "gateway.pinata.cloud", // fallback Pinata gateway
        pathname: "/ipfs/**",
      },
    ],
  },
};

export default nextConfig;
