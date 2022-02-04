/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  publicRuntimeConfig: {
    HOST: process.env.HOST,
    MORPHURL_URL: `${process.env.MORPHURL_URL}/api/v1`
  }
}
