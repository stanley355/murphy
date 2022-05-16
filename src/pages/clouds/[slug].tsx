import React from 'react';
import { GetServerSideProps } from 'next';

import MetaHead from '../../components/Head/Head';
import CloudSlugHead from '../../clients/pages/cloudslug/components/CloudSlugHead';
import CloudSlugPlansMobile from '../../clients/pages/cloudslug/components/CloudSlugPlans/Mobile/';
import CloudSlugPlansDesktop from '../../clients/pages/cloudslug/components/CloudSlugPlans/Desktop/';
import CloudSlugSimilarPlans from '../../clients/pages/cloudslug/components/CloudSlugSimilarPlans';
import CloudSlugSimilarProducts from '../../clients/pages/cloudslug/components/CloudSlugSimilarProducts';
import { setCloudSlugMeta } from '../../clients/pages/cloudslug/modules/setCloudSlugMeta';

import { fetchSingleHost } from '../../lib/api-fetcher/morphclouds/hosts';
import { fetchHostPlans, fetchAllPlans } from '../../lib/api-fetcher/morphclouds/plans';
import { fetchAllProducts } from '../../lib/api-fetcher/morphclouds/products';

import { capitalizeFirstLetter } from '../../utils/capitalizeFirstLetter';
import useResponsive from '../../utils/hooks/useResponsive';
import styles from './cloudslug.module.scss';

const CloudSlug = (props: any) => {
  const { hostData, hostPlans, allPlans, allProducts } = props;
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
      {hostData.template === 'Plan' ? (
        <CloudSlugSimilarPlans hostID={hostData.id} planList={allPlans} />
      ) : (
        <CloudSlugSimilarProducts hostID={hostData.id} productList={allProducts} />
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

  let hostProducts = [];
  let allProductsData = [];

  if (hostData && hostData.template === 'Product') {
    // hostPlans = await fetchHostPrs(hostName);
    allProductsData = await fetchAllProducts();
  }

  return {
    props: {
      hostData: hostData ?? null,
      hostPlans: hostPlans,
      allPlans: allPlansData,
      allProducts: allProductsData,
    },
  };
};

export default CloudSlug;
