/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'i.postimg.cc',
          },
          {
            protocol: 'https',
            hostname: 'cdn2.thecatapi.com',
          },
        ],
      },
};

export default nextConfig;
