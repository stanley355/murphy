import React from 'react';
import { GetStaticProps } from 'next';

import MetaHead from '../components/Head';
import { LandingMeta } from '../clients/pages/landing/constant/meta';
import LandingHero from '../clients/pages/landing/components/LandingHero';
import LandingCloudSolution from '../clients/pages/landing/components/LandingCloudSolution';
import LandingCloudList from '../clients/pages/landing/components/LandingCloudList';
import LandingCloudPlans from '../clients/pages/landing/components/LandingCloudPlans';
import LandingCloudProducts from '../clients/pages/landing/components/LandingCloudProducts';
import { fetchAllHosts } from '../lib/api-fetcher/morphclouds/hosts';
import { fetchAllPlans } from '../lib/api-fetcher/morphclouds/plans';
import { fetchAllProducts } from '../lib/api-fetcher/morphclouds/products';

const Home = (props: any) => {
  const { cloudList, planList, productList } = props;

  return (
    <div className="landing">
      <MetaHead meta={LandingMeta} />
      <LandingHero />
      <LandingCloudSolution />
      <LandingCloudList cloudList={cloudList} />
      <LandingCloudPlans planList={planList} />
      <LandingCloudProducts productList={productList} />
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const hostsData = await fetchAllHosts();
  const plansData = await fetchAllPlans();
  const productsData = await fetchAllProducts();

  return {
    props: {
      cloudList: hostsData,
      planList: plansData,
      productList: productsData
    },
  };
};

export default Home;
