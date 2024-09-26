/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'demo-alukas.myshopify.com',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'yourdomain.com',
        port: '',
      },
    ],
  },
};

export default nextConfig;
