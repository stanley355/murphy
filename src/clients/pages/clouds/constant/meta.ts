import getConfig from 'next/config';

const { BASE_URL } = getConfig().publicRuntimeConfig;

export const CloudPageMeta = {
  title: 'The Best Cloud Web Hosting for 2022 | Marph',
  siteName: 'Marph CLoud and Web Hosting Selection',
  description:
    'Choose your web hosting provider and make the perfect website. From Shared Hosting and Domains to VPS and Cloud plans. We have all the best web hosting offering fast, reliable, and secure hosting. Find a hosting solution that can grow with your site as traffic scales.',
  url: `${BASE_URL}/clouds`,
  keywords:
    'web hosting, domain names, website builder, website hosting, vps hosting, cloud hosting, wordpress hosting',
  openGraph: {
    title: 'The Best Cloud Web Hosting for 2022 | Marph',
    description:
      'Choose your web hosting provider and make the perfect website. From Shared Hosting and Domains to VPS and Cloud plans. We have all the best web hosting offering fast, reliable, and secure hosting. Find a hosting solution that can grow with your site as traffic scales.',
    modifiedTime: '2022-04-08T06:12:07+00:00',
    publishedTime: '2020-07-25T04:51:02+00:00',
  },
  twitter: {
    site: `${BASE_URL}/clouds`,
    title: 'The Best Cloud Web Hosting for 2022 | Marph',
    description:
      'Choose your web hosting provider and make the perfect website. From Shared Hosting and Domains to VPS and Cloud plans. We have all the best web hosting offering fast, reliable, and secure hosting. Find a hosting solution that can grow with your site as traffic scales.',
  },
};
