import React from 'react';
import getConfig from 'next/config';
import { GetServerSideProps } from 'next';

import CloudHero from '../../clients/pages/clouds/components/CloudHero/CloudHero';
import CloudList from '../../clients/pages/clouds/components/CloudList/CloudList';
import { setCloudFilterQuery } from '../../clients/pages/clouds/utils/setCloudFilterQuery';
import styles from './clouds.module.scss';
import RestClient from '../../lib/RestClient';

const { BASE_URL } = getConfig().publicRuntimeConfig;

const Hosts = ({ hostList }: any) => {

  return (
    <div className={styles.clouds}>
      <CloudHero />
      <div className="container">
          <CloudList hosts={hostList} />
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
