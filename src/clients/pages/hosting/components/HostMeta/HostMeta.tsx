import React from 'react';
import getConfig from 'next/config';
import { slugify } from '../../../../../utils/slugify';
import MetaHead from '../../../../../components/Head/Head';

const { BASE_URL } = getConfig().publicRuntimeConfig;

interface HostMetaInterface {
  hostData: any
}

const HostMeta = (props: HostMetaInterface) => {
  const { hostData } = props;

  const META = {
    title: `${hostData.name} Hosting`,
    siteName: `Marph ${hostData.name} Hosting`,
    description: hostData.description,
    url: `${BASE_URL}/hosting/${slugify(hostData.name)}`,
    keywords: `Marph, Web Hosting, Web Services, ${hostData.name}`,
    openGraph: {
      title: hostData.name,
      description: hostData.description,
      modifiedTime: new Date().toDateString(),
      publishedTime: 'Mon Jun 27 2022 08:15:06 GMT+0700 (Western Indonesia Time)',
    },
    twitter: {
      site: `${hostData.name} Hosting`,
      title: hostData.name,
      description: hostData.description
    }
  }

  return (
    <MetaHead meta={META}/>
  )
}

export default HostMeta;