import React from 'react';
import getConfig from 'next/config';
import { GetServerSideProps } from 'next';

import HeroContent from '../../clients/pages/clouds/components/Hero/Hero';
import CloudFilter from '../../clients/pages/clouds/components/CloudFilter/CloudFilter';
import CloudList from '../../clients/pages/clouds/components/CloudList/CloudList';
import { setCloudFilterQuery } from '../../clients/pages/clouds/utils/setCloudFilterQuery';
import styles from './clouds.module.scss';
import RestClient from '../../lib/RestClient';

const { BASE_URL } = getConfig().publicRuntimeConfig;

const Hosts = ({ hostList }: any) => {

  return (
    <div className={styles.clouds}>
      <HeroContent />
      <div className="container">
        <div className={styles.clouds__listContainer}>
          <CloudFilter />
          <CloudList hosts={hostList} />
        </div>
      </div>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { query } = context;
  const filterQuery = setCloudFilterQuery(query);

  const config = {
    method: 'GET',
    url: `${BASE_URL}/api/clouds/hosts/${filterQuery}`
  }

  const data = await RestClient(config, {});

  return {
    props: {
      hostList: data
    }
  }
}

export default Hosts;
