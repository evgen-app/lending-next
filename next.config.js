/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  
}
nextConfig.node = {
  fs: 'empty',
}

module.exports = nextConfig

