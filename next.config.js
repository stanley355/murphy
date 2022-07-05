/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  publicRuntimeConfig: {
    APP_ENV: process.env.APP_ENV,
    HOST: process.env.HOST,
    BASE_URL: process.env.BASE_URL,
    MORPHURL_URL: process.env.MORPHURL_URL,
    MORPHCLOUDS_URL:process.env.MORPHCLOUDS_URL,
    MORPHCLOUDS_TOKEN: process.env.MORPHCLOUDS_TOKEN,
    FIREBASE_APIKEY: process.env.FIREBASE_APIKEY,
    NEWSAPI_KEY: process.env.NEWSAPI_KEY
  },
}
