import React from 'react';
import { GetStaticProps } from 'next';
import HostList from '../../clients/pages/hosting/components/HostList';
import { fetchAllHosts } from '../../lib/api-fetcher/morphclouds/hosts';

import styles from '../../../styles/pages/hosting.module.scss';

const Hosting = (props: any) => {
  const { hostList } = props;

  return (
    <div className='container'>
      <div className={styles.hosting}>
        <h1>Web Hosting</h1>
        <div className={styles.hosting__subtitle}>Pick the Best Host for your App</div>
        {hostList?.length > 0 && <HostList list={hostList} />}
      </div>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const hostList = await fetchAllHosts();

  return {
    props: {
      hostList: hostList
    }
  }
}

export default Hosting;