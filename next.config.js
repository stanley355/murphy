/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  publicRuntimeConfig: {
    HOST: process.env.HOST,
    BASE_URL: process.env.BASE_URL,
  }
}
