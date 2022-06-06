import React from 'react';
import { GetStaticProps } from 'next';

import MetaHead from '../components/Head';
import { LandingMeta } from '../clients/pages/landing/constant/meta';
import HeroContent from '../clients/pages/landing/components/HeroContent';
import AppSolutions from '../clients/pages/landing/components/AppSolutions';
import Partners from '../clients/pages/landing/components/Partners';
import PlansCarousel from '../clients/pages/landing/components/PlansCarousel';
import ProductsCarousel from '../clients/pages/landing/components/ProductsCarousel';

import { fetchAllPlans } from '../lib/api-fetcher/morphclouds/plans';
import { fetchAllProducts } from '../lib/api-fetcher/morphclouds/products';
import { fetchAllHostNames } from '../lib/api-fetcher/morphclouds/hosts';
import { fetchNews } from '../lib/api-fetcher/external/newsapi';

const Home = (props: any) => {
  const { partnerList, planList, productList, newsList } = props;

  return (
    <div className="landing">
      <MetaHead meta={LandingMeta} />
      <HeroContent />
      <AppSolutions />
      {partnerList && <Partners partnerList={partnerList} />}
      {planList && <PlansCarousel planList={planList} />}
      {productList && <ProductsCarousel productList={productList} /> }
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const hostNames = await fetchAllHostNames();
  const plansData = await fetchAllPlans();
  const productsData = await fetchAllProducts();
  const newsData = await fetchNews('web');

  return {
    props: {
      partnerList: hostNames,
      planList: plansData,
      productList: productsData,
      newsList: newsData
    },
  };
};

export default Home;
