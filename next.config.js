/** @type {import('next').NextConfig} */
module.exports = {
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
  reactStrictMode: true,
  publicRuntimeConfig: {
    APP_ENV: process.env.APP_ENV,
    HOST: process.env.HOST,
    BASE_URL: process.env.BASE_URL,
    MORPHURL_URL: process.env.MORPHURL_URL,
    MORPHCLOUDS_URL:process.env.MORPHCLOUDS_URL,
    MORPHCLOUDS_TOKEN: process.env.MORPHCLOUDS_TOKEN,
    FIREBASE_APIKEY: process.env.FIREBASE_APIKEY,
    FIREBASE_AUTHDOMAIN: process.env.FIREBASE_AUTHDOMAIN,
    FIREBASE_PROJECTID: process.env.FIREBASE_PROJECTID,
    FIREBASE_STORAGEBUCKET: process.env.FIREBASE_STORAGEBUCKET,
    FIREBASE_MESSAGINGSENDERID: process.env.FIREBASE_MESSAGINGSENDERID,
    FIREBASE_APPID: process.env.FIREBASE_APPID,
    FIREBASE_MEASUREMENTID: process.env.FIREBASE_MEASUREMENTID
  }
}
