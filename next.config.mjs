/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placebear.com/**',
      },
    ],
  },
};

export default nextConfig;
