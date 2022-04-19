import React from 'react';
import styles from './Hero.module.scss';

const HeroContent = () => {
  return (
    <div className={styles.hero__content}>
      <div className="container">
        <h1 className={styles.hero__content__title}>Cloud Hosting Platforms</h1>

        <div className={styles.hero__content__subtitle}> Cloud Hosting Platforms are vendors which provide Information Technology as a service over the Internet. The services range from full application development platforms to servers, storage, and virtual desktops. Here is a handpicked cloud service providers list. This cloud provider list contains various types of cloud computing services that are available in the market.</div>
      </div>
    </div>
  );
}

export default HeroContent;
