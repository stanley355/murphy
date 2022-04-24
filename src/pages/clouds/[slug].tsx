import React from 'react';
import getConfig from 'next/config';
import { GetServerSideProps } from 'next';

import CloudSlugHead from '../../clients/pages/cloudslug/components/CloudSlugHead';
import CloudSlugPlansMobile from '../../clients/pages/cloudslug/components/CloudSlugPlans/Mobile/';
import { capitalizeFirstLetter } from '../../utils/capitalizeFirstLetter';
import RestClient from '../../lib/RestClient';
import { slugify } from '../../utils/slugify';
import styles from './cloudslug.module.scss';

const { BASE_URL } = getConfig().publicRuntimeConfig;

const CloudSlug = ({ hostData, hostPlans }: any) => {

  return (
    <div className='container'>
      <div className={styles.cloudslug}>
        <CloudSlugHead name={hostData.name} url={hostData.url} />
        <div className={styles.cloudslug__description}>{hostData.description}</div> 
        <CloudSlugPlansMobile plans={hostPlans} />
      </div>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
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
  };
}

export default CloudSlug;
