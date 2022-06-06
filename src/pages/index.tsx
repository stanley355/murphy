import React from 'react';
import { GetStaticProps } from 'next';

import MetaHead from '../components/Head';
import { LandingMeta } from '../clients/pages/landing/constant/meta';
import HeroContent from '../clients/pages/landing/components/HeroContent';
import AppSolutions from '../clients/pages/landing/components/AppSolutions';
import Partners from '../clients/pages/landing/components/Partners';

import LandingCloudPlans from '../clients/pages/landing/components/LandingCloudPlans';
import LandingCloudProducts from '../clients/pages/landing/components/LandingCloudProducts';
import { fetchAllPlans } from '../lib/api-fetcher/morphclouds/plans';
import { fetchAllProducts } from '../lib/api-fetcher/morphclouds/products';
import { fetchAllHostNames } from '../lib/api-fetcher/morphclouds/hosts';

const Home = (props: any) => {
  const { partnerList, planList, productList } = props;

  return (
    <div className="landing">
      <MetaHead meta={LandingMeta} />
      <HeroContent />
      <AppSolutions />
      {partnerList && <Partners partnerList={partnerList} />}
      <LandingCloudPlans planList={planList} />
      <LandingCloudProducts productList={productList} />
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const hostNames = await fetchAllHostNames();
  const plansData = await fetchAllPlans();
  const productsData = await fetchAllProducts();

  return {
    props: {
      partnerList: hostNames,
      planList: plansData,
      productList: productsData
    },
  };
};

export default Home;
