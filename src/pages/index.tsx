import React from 'react';
import { GetStaticProps } from 'next';
import getConfig from 'next/config';

import MetaHead from '../components/Head';
import { LandingMeta } from '../clients/pages/landing/constant/meta';
import LandingHero from '../clients/pages/landing/components/LandingHero';
import LandingCloudSolution from '../clients/pages/landing/components/LandingCloudSolution';
import LandingCloudList from '../clients/pages/landing/components/LandingCloudList';
import LandingCloudPlans from '../clients/pages/landing/components/LandingCloudPlans';
import { fetchAllHosts } from '../lib/api-fetcher/morphclouds/hosts';
import { fetchAllPlans } from '../lib/api-fetcher/morphclouds/plans';
import RestClient from '../lib/RestClient';

const { BASE_URL } = getConfig().publicRuntimeConfig;

const Home = (props: any) => {
  const { cloudList, planList } = props;

  return (
    <div className="landing">
      <MetaHead meta={LandingMeta} />
      <LandingHero />
      <LandingCloudSolution />
      <LandingCloudList cloudList={cloudList} />
      <LandingCloudPlans planList={planList} />
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const hostsData = await fetchAllHosts();
  const plansData = await fetchAllPlans();

  return {
    props: {
      cloudList: hostsData,
      planList: plansData,
    },
  };
};

export default Home;
