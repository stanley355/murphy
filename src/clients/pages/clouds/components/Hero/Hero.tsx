import React from 'react';
import styles from './Hero.module.scss';

const HeroContent = () => {
  return (
    <div className={styles.hero__content}>
      <div className="container">
        <h1 className={styles.hero__content__title}>Web Hosting Providers</h1>
        <div className={styles.hero__content__subtitle}>
          Filter and select the most suitable hosting providers for your site:
        </div>
      </div>
    </div>
  );
}

export default HeroContent;
