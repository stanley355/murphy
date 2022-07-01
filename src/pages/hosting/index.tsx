import React from 'react';
import { GetStaticProps } from 'next';
import getConfig from 'next/config';
import MetaHead from '../../components/Head/Head';
import HostList from '../../clients/pages/hosting/components/HostList';
import { fetchAllHosts } from '../../lib/api-fetcher/morphclouds/hosts';
import styles from '../../../styles/pages/hosting.module.scss';

const { BASE_URL } = getConfig().publicRuntimeConfig;

const Hosting = (props: any) => {
  const { hostList } = props;

  const HostingMeta = () => {
    const META = {
      title: "The Best Web Hosting Services and Domains - Marph",
      siteName: "Marph Web Hosting",
      description: "Marph is one of the easiest and trusted website hosting providers and powers thousands of websites. Learn more about our secure and reliable hosting services today!",
      url: `${BASE_URL}/hosting/`,
      keywords: "Marph, Web Hosting",
      openGraph: {
        title: "The Best Web Hosting Services and Domains - Marph",
        description: "Marph is one of the easiest and trusted website hosting providers and powers thousands of websites. Learn more about our secure and reliable hosting services today!",
        modifiedTime: new Date().toDateString(),
        publishedTime: 'Mon Jun 28 2022 08:15:06 GMT+0700 (Western Indonesia Time)',
      },
      twitter: {
        site: "Marph Hosting",
        title: "The Best Web Hosting Services and Domains - Marph",
        description: "Marph is one of the easiest and trusted website hosting providers and powers thousands of websites. Learn more about our secure and reliable hosting services today!"
      }
    }

    return <MetaHead meta={META} />
  }

  return (
    <div className='container'>
      <HostingMeta />
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