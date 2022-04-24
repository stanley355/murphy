import React from 'react';
import getConfig from 'next/config';
import { GetServerSideProps } from 'next';

import CloudSlugHead from '../../clients/pages/cloudslug/components/CloudSlugHead';
import CloudSlugPlansMobile from '../../clients/pages/cloudslug/components/CloudSlugPlans/Mobile/';
import CloudSlugPlansDesktop from '../../clients/pages/cloudslug/components/CloudSlugPlans/Desktop/';
import { capitalizeFirstLetter } from '../../utils/capitalizeFirstLetter';

import RestClient from '../../lib/RestClient';
import useResponsive from '../../utils/hooks/useResponsive';
import styles from './cloudslug.module.scss';

const { BASE_URL } = getConfig().publicRuntimeConfig;

const CloudSlug = ({ hostData, hostPlans }: any) => {
  const { isDesktop } = useResponsive();

  return (
    <div className='container'>
      <div className={styles.cloudslug}>
        <CloudSlugHead name={hostData.name} url={hostData.url} />
        <div className={styles.cloudslug__description}>{hostData.description}</div>
        {isDesktop ? <CloudSlugPlansDesktop plans={hostPlans} /> : <CloudSlugPlansMobile plans={hostPlans} />}
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
