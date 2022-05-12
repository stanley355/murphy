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

import RestClient from '../../lib/RestClient';
import useResponsive from '../../utils/hooks/useResponsive';
import styles from './cloudslug.module.scss';

const { BASE_URL } = getConfig().publicRuntimeConfig;

const CloudSlug = (props: any) => {
  const { hostData, hostPlans, allPlans } = props;
  const { isDesktop } = useResponsive();

  return (
    <div className={styles.cloudslug}>
      <MetaHead meta={setCloudSlugMeta(hostData)} />
      <div className={styles.cloudslug__top}>
        <div className="container">
          <div className={styles.cloudslug__hostbox}>
            <CloudSlugHead name={hostData.name} url={hostData.url} />
            <div className={styles.cloudslug__description}>{hostData.description}</div>
            {isDesktop ? (
              <CloudSlugPlansDesktop plans={hostPlans} />
            ) : (
              <CloudSlugPlansMobile plans={hostPlans} />
            )}
          </div>
        </div>
      </div>
      <CloudSlugSimilarPlans hostID={hostData.id} planList={allPlans} />
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { params } = context;

  const hostName = params && params.slug;

  const singleHostRequest = {
    method: 'GET',
    url: `${BASE_URL}/api/clouds/host-single/?hostname=${capitalizeFirstLetter(hostName)}`,
  };

  const hostData = await RestClient(singleHostRequest, {});

  const hostPlanRequest = {
    method: 'GET',
    url: `${BASE_URL}/api/clouds/host-plans/?hostname=${capitalizeFirstLetter(hostName)}`,
  };

  const hostPlans = await RestClient(hostPlanRequest, {});

  const allPlansRequest = {
    method: 'GET',
    url: `${BASE_URL}/api/clouds/plans/all/`,
  };

  const allPlansData = await RestClient(allPlansRequest, {});

  return {
    props: {
      hostData: hostData ?? null,
      hostPlans: hostPlans ?? [],
      allPlans: allPlansData ?? []
    },
  };
};

export default CloudSlug;
