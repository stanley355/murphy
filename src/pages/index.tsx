import React from 'react';
import { GetStaticProps } from 'next';
import getConfig from 'next/config';

import MetaHead from '../components/Head';
import HeroContent from '../clients/pages/landing/components/HeroContent';
import AppSolutions from '../clients/pages/landing/components/AppSolutions';
import Partners from '../clients/pages/landing/components/Partners';
import PlansCarousel from '../components/Carousels/PlansCarousel';
import ProductsCarousel from '../components/Carousels/ProductsCarousel';
import NewsCarousel from '../components/Carousels/NewsCarousel';

import { fetchAllPlans } from '../lib/api-fetcher/morphclouds/plans';
import { fetchAllProducts } from '../lib/api-fetcher/morphclouds/products';
import { fetchAllHostNames } from '../lib/api-fetcher/morphclouds/hosts';
import { fetchNews } from '../lib/api-fetcher/external/newsapi';

const { BASE_URL } = getConfig().publicRuntimeConfig;

const Home = (props: any) => {
  const { partnerList, planList, productList, newsList } = props;

  const LandingMeta = () => {
    const META = {
      title: "Marph: Simplified Managed Performance & Reliability Web Service Platform",
      siteName: "Marph Web Hosting and Services",
      description: "Manage the best web service with 24/7 expert support for fast performance, and freedom to make websites & applications accessible on best cloud infrastructures",
      url: BASE_URL,
      keywords: "Marph, Web Hosting, Web Services",
      openGraph: {
        title: "Marph: Simplified Managed Performance & Reliability Web Service Platform",
        description: "Manage the best web service with 24/7 expert support for fast performance, and freedom to make websites & applications accessible on best cloud infrastructures",
        modifiedTime: new Date().toDateString(),
        publishedTime: 'Mon Jun 28 2022 08:15:06 GMT+0700 (Western Indonesia Time)',
      },
      twitter: {
        site: "Marph Web Hosting and Services",
        title: "Marph: Simplified Managed Performance & Reliability Web Service Platform",
        description: "Manage the best web service with 24/7 expert support for fast performance, and freedom to make websites & applications accessible on best cloud infrastructures"
      }
    }

    return <MetaHead meta={META} />
  }

  return (
    <div className="landing">

      <HeroContent />
      <AppSolutions />
      {partnerList && <Partners partnerList={partnerList} />}
      {planList && <PlansCarousel carouselTitle='Hosting Plans' carouselItems={planList} />}
      {productList && <ProductsCarousel carouselTitle='Web Services' carouselItems={productList} />}
      {newsList?.articles?.length > 0 && <NewsCarousel carouselTitle='Tech Related News' carouselItems={newsList.articles} />}
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
