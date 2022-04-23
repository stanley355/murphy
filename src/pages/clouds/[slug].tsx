import React from 'react';
import getConfig from 'next/config';
import { GetStaticProps, GetStaticPaths } from 'next';

import CloudSlugHead from '../../clients/pages/cloudslug/components/CloudSlugHead';
import { capitalizeFirstLetter } from '../../utils/capitalizeFirstLetter';
import RestClient from '../../lib/RestClient';
import styles from './cloudslug.module.scss';

const { BASE_URL } = getConfig().publicRuntimeConfig;

const CloudSlug = ({ hostData, hostPlans }: any) => {

  return (
    <div className='container'>
      <div className={styles.cloudslug}>
        <CloudSlugHead name={hostData.name} url={hostData.url} />
        <div className={styles.cloudslug__description}>{hostData.description}</div>
      </div>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { params } = context;

  const hostName = params && params.slug;

  const singleHostConfig = {
    method: 'GET',
    url: `${BASE_URL}/api/clouds/host-single/?hostname=${capitalizeFirstLetter(hostName)}`
  }

  const hostData = await RestClient(singleHostConfig, {});

  const hostPlanConfig = {
    method: 'GET',
    url: `${BASE_URL}/api/clouds/host-plans/?hostname=${capitalizeFirstLetter(hostName)}`
  }

  const hostPlans = await RestClient(hostPlanConfig, {});

  return {
    props: {
      hostData: hostData ?? null,
      hostPlans: hostPlans ?? []
    },
    revalidate: 2 * 60, // cache API response for 2 minutes
  };
}


export const getStaticPaths: GetStaticPaths = async () => {

  return {
    paths: [
      { params: { slug: 'vercel' } }
    ],
    fallback: true,
  };
};

export default CloudSlug;
