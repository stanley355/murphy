import React from 'react';
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';

import styles from '../../styles/pages/landing.module.scss'

import LandingHero from '../clients/pages/landing/LandingHero/LandingHero';
import MetaHead from '../components/Head/Head';
import HomepageMeta from '../../public/seo/homepage.json';
import MorphsearchCopy from '../clients/pages/homepage/MorphsearchCopy/MorphsearchCopy';
import ShortenurlCopy from '../clients/pages/homepage/ShortenurlCopy/ShortenurlCopy';
import Hero from '../clients/pages/homepage/Hero/Hero';


const Home = () => {
  return (
    <ParallaxProvider>
      <Parallax className={styles.landing__hero}>
        <div className='container'>
          <LandingHero />
        </div>
      </Parallax>
    </ParallaxProvider>
  )
}

export default Home
