import React from 'react';

import styles from './LandingHero.module.scss';

const LandingHero = () => {
  return (

    <div className={styles.landing__hero}>
      <div className='container'>
        <div className={styles.landing__hero__content}>
          <h1>Cloud Platforms</h1>
          <h3>
            Find the best cloud hosting
            alternatives for your application,
            websites, or online stores
          </h3>
          <button className={styles.landing__hero__cta}>Let's Go</button>
        </div>
      </div>
    </div>
  )
}

export default LandingHero;
