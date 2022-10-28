/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'pokeapi.co',
        // port: '',
        pathname: '/api/v2/pokemon-species/**/',
      },
    ],
  },
};
module.exports = nextConfig;
