import React from 'react';
import MetaHead from '../components/Head/Head';
import HomepageMeta from '../../public/seo/homepage.json';
import MorphsearchCopy from '../clients/Homepage/MorphsearchCopy/MorphsearchCopy';
import Hero from '../clients/Homepage/Hero/Hero';

const Home = () => {
  return (
    <div className='home'>
      <MetaHead meta={HomepageMeta} />
      <Hero />
      <MorphsearchCopy />
    </div>
  )
}

export default Home
