/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  publicRuntimeConfig: {
    HOST: process.env.HOST,
    MARPH_URL: process.env.MARPH_URL,
    MORPHURL_URL: `${process.env.MORPHURL_URL}/api/v1`
  }
}
