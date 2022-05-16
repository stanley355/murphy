import { slugify } from '../../../../utils/slugify';
import getConfig from 'next/config';

interface ICloudSlugMeta {
  name: string;
  description: string;
  url: string;
}

const { BASE_URL } = getConfig().publicRuntimeConfig;

export const setCloudSlugMeta = (hostData: ICloudSlugMeta) => {
  const cloudSlugMeta = {
    title: `${hostData.name} web hosting`,
    siteName: `${hostData} hosting plans and products Selection`,
    description: hostData.description,
    url: `${BASE_URL}/clouds/${slugify(hostData.name)}`,
    keywords: `web hosting, ${hostData.name} hosting, ${hostData.name} hosting plans, ${hostData.name} products`,
    openGraph: {
      title: `${hostData.name} web hosting`,
      description: hostData.description,
      modifiedTime: '2022-04-25T06:13:07+00:00',
      publishedTime: '2021-08-25T04:52:02+00:00',
    },
    twitter: {
      site: `${BASE_URL}/clouds/${slugify(hostData.name)}`,
      title: `${hostData.name} web hosting`,
      description: hostData.description,
    },
  };

  return cloudSlugMeta;
};
