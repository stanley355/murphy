import React from 'react';
import { GetStaticProps } from 'next';
import getConfig from 'next/config';

import LandingHero from '../clients/pages/landing/components/LandingHero/LandingHero';
import LandingCloudSolution from '../clients/pages/landing/components/LandingCloudSolution/LandingCloudSolution';
import LandingCloudList from '../clients/pages/landing/components/LandingCloudList/LandingCloudList';
import RestClient from '../lib/RestClient';

const { BASE_URL } = getConfig().publicRuntimeConfig;

const Home = ({ cloudList }: any) => {
  return (
    <div>
      <LandingHero />
      <LandingCloudSolution />
      <LandingCloudList cloudList={cloudList} />
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const config = {
    method: 'GET',
    url: `${BASE_URL}/api/clouds/hosts/`
  }

  const data = await RestClient(config, {});
  return {
    props: {
      cloudList: data
    }
  }
}


export default Home;
