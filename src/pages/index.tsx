import React from 'react';
import MetaHead from '../components/Head/Head';
import HomepageMeta from '../../public/seo/homepage.json';
import MorphsearchCopy from '../clients/pages/homepage/MorphsearchCopy/MorphsearchCopy';
import ShortenurlCopy from '../clients/pages/homepage/ShortenurlCopy/ShortenurlCopy';
import Hero from '../clients/pages/homepage/Hero/Hero';

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
