import React from 'react';
import Link from 'next/link';
import styles from './LandingCloudSolution.module.scss';

import { FaGripLines } from 'react-icons/fa';

const LandingCloudSolution = () => {
  return (
    <div className={styles.landing__cloudsolution}>
      <div className="container">
        <h2>Cloud Solutions</h2>
        <div className={styles.landing__cloudsolution__subtitle}>Marph offers two ways to solve your Web Hosting Problems:</div>

        <div className={styles.landing__cloudsolution__list}>
          <Link href="/plans">
            <a title="Cloud Products" className={styles.landing__cloudsolution__card}>
              <img
                src="/images/landing/cloud-solution-products.webp"
                alt="Cloud Products"
              />
              <div className={styles.landing__cloudsolution__card__title}>Product/Plan Solution</div>
              <div className={styles.landing__cloudsolution__card__subtitle}>Compare various web hosting plans or products from cloud hosting providers</div>
            </a>
          </Link>
          <div className={styles.landing__cloudsolution__or}><FaGripLines /> <FaGripLines /> OR <FaGripLines /> <FaGripLines /></div>
          {/* TODO: Change the href after we made the page */}
          <Link href="/calculation" >
            <a title="Cloud Recommendation" className={styles.landing__cloudsolution__card}>
              <img
                src="/images/landing/cloud-solution-checklist.webp"
                alt="Cloud Recommendation"
              />
              <div className={styles.landing__cloudsolution__card__title}>Recommended Solution</div>
              <div className={styles.landing__cloudsolution__card__subtitle}>Fill in your application needs and select the most suitable cloud providers from our recommendation</div>
            </a>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default LandingCloudSolution;
