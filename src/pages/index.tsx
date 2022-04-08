import React from 'react';
import MetaHead from '../components/Head/Head';
import HomepageMeta from '../../public/seo/homepage.json';
import MorphsearchCopy from '../clients/pages/home/MorphsearchCopy/MorphsearchCopy';
import ShortenurlCopy from '../clients/pages/home/ShortenurlCopy/ShortenurlCopy';
import Hero from '../clients/pages/home/Hero/Hero';

const Home = () => {
  return (
    <div className='home'>
      <MetaHead meta={HomepageMeta} />
      <Hero />
      <MorphsearchCopy />
      <ShortenurlCopy />
    </div>
  )
}

export default Home
