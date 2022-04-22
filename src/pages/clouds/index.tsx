import React, { useState } from 'react';
import getConfig from 'next/config';
import { GetServerSideProps } from 'next';

import MetaHead from '../../components/Head/Head';
import { CloudPageMeta } from '../../clients/pages/clouds/constant/meta';
import CloudNavbar from '../../clients/pages/clouds/components/CloudNavbar/CloudNavbar';
import CloudHero from '../../clients/pages/clouds/components/CloudHero/CloudHero';
import CloudList from '../../clients/pages/clouds/components/CloudList/CloudList';
import CloudFilterMobile from '../../clients/pages/clouds/components/CloudFilter/Mobile/CloudFilterMobile';
import CloudFilterDesktop from '../../clients/pages/clouds/components/CloudFilter/Desktop/CloudFilterDesktop';
import CloudCalculatorCopy from '../../clients/pages/clouds/components/CloudCalculatorCopy/CloudCalculatorCopy';
import { setCloudFilterQuery } from '../../clients/pages/clouds/module/setCloudFilterQuery';

import useResponsive from '../../utils/hooks/useResponsive';
import RestClient from '../../lib/RestClient';

import styles from './clouds.module.scss';

const { BASE_URL } = getConfig().publicRuntimeConfig;

const Hosts = ({ hostList }: any) => {
  const { isDesktop } = useResponsive();
  const [showMobileFilter, setShowMobileFilter] = useState(false);

  return (
    <div className={styles.clouds}>
      <MetaHead meta={CloudPageMeta} />
      {!isDesktop && <CloudNavbar onFilterClick={() => setShowMobileFilter(true)} />}
      <CloudHero />
      <div className="container">
        <div className={styles.clouds__menu}>
          {isDesktop &&
            <div className={styles.clouds__menu__left}>
              <CloudFilterDesktop />
              <CloudCalculatorCopy />
            </div>
          }
          <CloudList hosts={hostList} />
        </div>
      </div>
      {!isDesktop && showMobileFilter && <CloudFilterMobile onCloseClick={() => setShowMobileFilter(false)} />}
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
