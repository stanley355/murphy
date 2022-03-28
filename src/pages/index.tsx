import React from 'react';
import MetaHead from '../components/Head/Head';
import HomepageMeta from '../../public/seo/homepage.json';
import Hero from '../clients/Homepage/Hero/Hero';

const Home = () => {
  return (
    <div >
      <MetaHead meta={HomepageMeta} />
      <Hero />
    </div>
  )
}

export default Home
