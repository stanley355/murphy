import React from 'react';
import getConfig from 'next/config';
import { GetServerSideProps } from 'next';

import MetaHead from '../../components/Head/Head';
import CloudSlugHead from '../../clients/pages/cloudslug/components/CloudSlugHead';
import CloudSlugPlansMobile from '../../clients/pages/cloudslug/components/CloudSlugPlans/Mobile/';
import CloudSlugPlansDesktop from '../../clients/pages/cloudslug/components/CloudSlugPlans/Desktop/';
import CloudSlugSimilarPlans from '../../clients/pages/cloudslug/components/CloudSlugSimilarPlans';
import { setCloudSlugMeta } from '../../clients/pages/cloudslug/modules/setCloudSlugMeta';
import { capitalizeFirstLetter } from '../../utils/capitalizeFirstLetter';
import { fetchSingleHost } from '../../lib/api-fetcher/morphclouds/hosts';
import { fetchHostPlans, fetchAllPlans } from '../../lib/api-fetcher/morphclouds/plans';

import RestClient from '../../lib/RestClient';
import useResponsive from '../../utils/hooks/useResponsive';
import styles from './cloudslug.module.scss';

const { BASE_URL } = getConfig().publicRuntimeConfig;

const CloudSlug = (props: any) => {
  const { hostData, hostPlans, allPlans } = props;
  const { isDesktop } = useResponsive();

  const setCloudSlugCard = () => {
    switch (hostData.template) {
      case 'Plan':
        return isDesktop ? (
          <CloudSlugPlansDesktop plans={hostPlans} />
        ) : (
          <CloudSlugPlansMobile plans={hostPlans} />
        );
      default:
        return '';
    }
  };

  return (
    <div className={styles.cloudslug}>
      <MetaHead meta={setCloudSlugMeta(hostData)} />
      <div className={styles.cloudslug__top}>
        <div className="container">
          <div className={styles.cloudslug__hostbox}>
            <CloudSlugHead name={hostData.name} url={hostData.url} />
            <div className={styles.cloudslug__description}>{hostData.description}</div>
            {setCloudSlugCard()}
          </div>
        </div>
      </div>
      {/* TODO: Put similar products */}
      {hostData.template === 'Plan' ? (
        <CloudSlugSimilarPlans hostID={hostData.id} planList={allPlans} />
      ) : (
        ''
      )}
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { params } = context;

  const hostName = params && capitalizeFirstLetter(params.slug);
  const hostData = await fetchSingleHost(hostName);

  let hostPlans = [];
  let allPlansData = [];

  if (hostData && hostData.template === 'Plan') {
    hostPlans = await fetchHostPlans(hostName);
    allPlansData = await fetchAllPlans();
  }

  return {
    props: {
      hostData: hostData ?? null,
      hostPlans: hostPlans,
      allPlans: allPlansData,
    },
  };
};

export default CloudSlug;
