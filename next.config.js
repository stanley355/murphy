/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  publicRuntimeConfig: {
    HOST: process.env.HOST,
    MORPH_URL: process.env.MORPH_URL,
    MORPHURL_URL: `${process.env.MORPHURL_URL}/api/v1`
  }
}
