import React from 'react';
import getConfig from 'next/config';
import { GetStaticProps } from 'next';

import HeroContent from '../../clients/pages/clouds/Home/Hero/Hero';
import CloudFilter from '../../clients/pages/clouds/Home/CloudFilter/CloudFilter';
import styles from './clouds.module.scss';
import RestClient from '../../lib/RestClient';

const { BASE_URL } = getConfig().publicRuntimeConfig;

const Hosts = ({ host_list }: any) => {
  
  return (
    <div className={styles.hosts}>
      <HeroContent />
      <div className="container">
        <CloudFilter />
      </div>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const config = {
    method: 'GET',
    url: `${BASE_URL}/api/clouds/hosts`
  }
  
  const data = await RestClient(config, {});
  
  return {
    props: {
      host_list: data && data
    }
  }
}

export default Hosts;
