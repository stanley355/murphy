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

const Home = ({ cloudList }: any) => {
  return (
    <div className='landing'>
      <MetaHead meta={LandingMeta} />
      <LandingHero />
      <LandingCloudSolution />
      <LandingCloudList cloudList={cloudList} />
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
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
