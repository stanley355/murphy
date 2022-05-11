import React from 'react';
import { GetServerSideProps } from 'next';
import getConfig from 'next/config';

import MetaHead from '../components/Head';
import { LandingMeta } from '../clients/pages/landing/constant/meta';
import LandingHero from '../clients/pages/landing/components/LandingHero';
import LandingCloudSolution from '../clients/pages/landing/components/LandingCloudSolution';
import LandingCloudList from '../clients/pages/landing/components/LandingCloudList';

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
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const cloudListRequest = {
    method: 'GET',
    url: `${BASE_URL}/api/clouds/hosts/`,
  };

  const cloudData = await RestClient(cloudListRequest, {});

  const cloudPlansRequest = {
    method: 'GET',
    url: `${BASE_URL}/api/clouds/plans/all/`,
  };

  const cloudPlansData = await RestClient(cloudPlansRequest, {});

  return {
    props: {
      cloudList: cloudData,
      planList: cloudPlansData,
    },
  };
};

export default Home;
