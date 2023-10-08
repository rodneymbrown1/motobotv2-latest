/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  experimental: {
    serverActions: true,
  },
  publicRuntimeConfig: {
    // This will be available on the client side
    APP_URL: process.env.API_URL,
  },
  serverRuntimeConfig: {
    // This will be available on the server side
    APP_URL: process.env.API_URL,
  },
  basePath: '',
  images: {
    domains: ['lh3.googleusercontent.com'], 
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
        port: '',
        pathname: '**',
      },
    ],
  }
};