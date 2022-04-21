import React from 'react';
import styles from './CloudHero.module.scss';

const CloudHero = () => {
  return (
    <div className={styles.cloud__hero}>
      <div className="container">
        <h1 className={styles.cloud__hero__title}>Web Hosting Providers</h1>
        <div className={styles.cloud__hero__subtitle}>
          Filter and select the most suitable hosting providers for your site:
        </div>
      </div>
    </div>
  );
}

export default CloudHero;
