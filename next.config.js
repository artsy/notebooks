/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    urlImports: [
      'https://api.observablehq.com/@anandaroop/',
      'http://localhost:3000/api/',
      'http://127.0.0.1:3000/api/'
    ],
  }
}

module.exports = nextConfig
