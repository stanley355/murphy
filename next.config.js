/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  publicRuntimeConfig: {
    HOST: process.env.HOST,
    BASE_URL: process.env.BASE_URL,
    MORPHURL_URL: process.env.MORPHURL_URL,
    MORPHCLOUDS_URL:process.env.MORPHCLOUDS_URL
  }
}
