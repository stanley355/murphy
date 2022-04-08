import React from 'react';
import getConfig from 'next/config';
import { GetStaticProps } from 'next';

import HostsList from '../../../clients/pages/clouds/hosts/list';
import styles from './hosts.module.scss';
import RestClient from '../../../lib/RestClient';

const { BASE_URL } = getConfig().publicRuntimeConfig;

const Hosts = ({ hostsList }: any) => {
  return (
    <div className={styles.hosts}>
      <div className="container">
        <HostsList list={hostsList} />
      </div>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const config = {
    method: 'GET',
    url: `${BASE_URL}/api/clouds/hosts/`
  }
  const data = await RestClient(config, {});

  return {
    props: {
      hostsList: data
    }
  }
}

export default Hosts;
