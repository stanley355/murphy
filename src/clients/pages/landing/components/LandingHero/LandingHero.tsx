import React from 'react';
import Link from 'next/link';
import styles from './LandingHero.module.scss';

const LandingHero = () => {
  return (
    <div className={styles.landing__hero}>
      <div className='container'>
        <div className={styles.landing__hero__content}>
          <h1>Cloud Hosting Services</h1>
          <h3>
            Find the best cloud and web hosting
            solution that can grow with your site as traffic scales.
          </h3>
          <Link href="/clouds">
            <a title="Cloud Services" className={styles.landing__hero__cta}>Let's fly</a>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default LandingHero;
