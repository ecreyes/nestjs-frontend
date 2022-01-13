/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    backendUrl: 'http://localhost:3000/graphql'
  }
}

module.exports = nextConfig
